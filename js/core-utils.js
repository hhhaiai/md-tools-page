(function (global) {
  function slugifyHeadingId(raw) {
    const text = String(raw || '').trim().toLowerCase();
    if (!text) return '';
    return text
      .replace(/[\s\u00A0]+/g, '-')
      .replace(/[“”"'‘’]/g, '')
      .replace(/[()（）\[\]【】{}<>《》]/g, '')
      .replace(/[^\p{L}\p{N}\u4e00-\u9fff\-_]+/gu, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function normalizeTopicSyntax(text) {
    return String(text || '').replace(/^\[topic\]\s*$/gim, '[[topic-index]]');
  }

  function injectTopicPlaceholders(source) {
    return String(source || '').replace(/\[\[topic-index\]\]/gi, '<div data-topic-placeholder="1"></div>');
  }

  function replaceOutsideBackticks(line, replacer) {
    let out = '';
    let i = 0;
    let inSpan = false;
    let spanTicks = 0;
    let segmentStart = 0;

    const flushSegment = (end) => {
      const seg = line.slice(segmentStart, end);
      out += inSpan ? seg : replacer(seg);
    };

    while (i < line.length) {
      if (line[i] !== '`') {
        i++;
        continue;
      }

      let j = i;
      while (j < line.length && line[j] === '`') j++;
      const tickCount = j - i;
      flushSegment(i);
      out += line.slice(i, j);

      if (!inSpan) {
        inSpan = true;
        spanTicks = tickCount;
      } else if (tickCount === spanTicks) {
        inSpan = false;
        spanTicks = 0;
      }

      i = j;
      segmentStart = i;
    }

    flushSegment(line.length);
    return out;
  }

  function stripHtmlTags(value) {
    return String(value || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function normalizeHtmlDetailsBlocks(text) {
    return String(text || '').replace(/<details\b([^>]*)>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi, (_m, attrs, summary, body) => {
      const title = stripHtmlTags(summary) || '详情';
      const content = String(body || '').replace(/^\s+|\s+$/g, '');
      const openSuffix = /\bopen\b/i.test(String(attrs || '')) ? ' open' : '';
      return `:::details${openSuffix} ${title}\n${content}\n:::`;
    });
  }

  function normalizeMarkdownSource(source) {
    if (!source) return '';
    const input = String(source).replace(/\r\n/g, '\n');

    const applyInlineRewrites = (chunk) => {
      let text = chunk;
      text = normalizeTopicSyntax(text);
      text = text.replace(/\[\[topic-index\]\]/gi, '<div data-topic-placeholder="1"></div>');
      text = text.replace(/\[\[img:([^\]]+)\]\]/gi, (_m, url) => `![](${String(url).trim()})`);
      text = text.replace(/\[\[([^\]|]+\.(?:png|jpe?g|gif|svg|webp))(?:\|([^\]]+))?\]\]/gi, (_m, url, alt) => `![${String(alt || '').trim()}](${String(url).trim()})`);
      text = text.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_m, label, target) => `[${String(label).trim()}](${String(target).trim()})`);
      text = text.replace(/\[(topic|目录|索引)\]/gi, '[[topic-index]]');
      text = text.replace(/\[([^\]]+)\]\(([^)\s]+)\)\{:\s*title\s*=\s*"([^"]*)"\s*\}/g, (_m, label, url, title) => `[${String(label).trim()}](${String(url).trim()} "${String(title).replace(/"/g, '&quot;').trim()}")`);
      return text;
    };

    const protectInlineCodeSpans = (text) => {
      const placeholders = [];
      const protectedText = String(text || '').replace(/`+[^`\n]*`+/g, (match) => {
        const token = `@@INLINE_CODE_${placeholders.length}@@`;
        placeholders.push(match);
        return token;
      });
      return { protectedText, placeholders };
    };

    const restoreInlineCodeSpans = (text, placeholders) => String(text || '').replace(/@@INLINE_CODE_(\d+)@@/g, (_m, index) => placeholders[Number(index)] || '');

    const processPlainChunk = (chunk) => {
      const { protectedText, placeholders } = protectInlineCodeSpans(chunk);
      const detailsNormalized = normalizeHtmlDetailsBlocks(protectedText);
      const normalized = detailsNormalized
        .split('\n')
        .map(line => replaceOutsideBackticks(line, applyInlineRewrites))
        .join('\n');
      return restoreInlineCodeSpans(normalized, placeholders);
    };

    const lines = input.split('\n');
    let inFence = false;
    let fenceMarker = '';
    let plainBuffer = [];
    const outLines = [];

    const flushPlainBuffer = () => {
      if (!plainBuffer.length) return;
      outLines.push(processPlainChunk(plainBuffer.join('\n')));
      plainBuffer = [];
    };

    lines.forEach((rawLine) => {
      const line = rawLine;
      const fenceMatch = /^\s*(```+|~~~+)/.exec(line);
      if (fenceMatch) {
        flushPlainBuffer();
        const marker = fenceMatch[1];
        if (!inFence) {
          inFence = true;
          fenceMarker = marker[0];
        } else if (marker[0] === fenceMarker) {
          inFence = false;
          fenceMarker = '';
        }
        outLines.push(line);
        return;
      }

      if (inFence) {
        outLines.push(line);
        return;
      }

      plainBuffer.push(line);
    });

    flushPlainBuffer();
    return outLines.join('\n');
  }

  function detectFeatureSummary(source, html) {
    const safeSource = String(source || '');
    const safeHtml = String(html || '');
    const count = (pattern, text) => {
      const matches = text.match(pattern);
      return matches ? matches.length : 0;
    };

    return {
      headings: count(/^#{1,6}\s+/gm, safeSource),
      tables: count(/^\|.*\|$/gm, safeSource),
      images: count(/!\[[^\]]*\]\([^)]*\)|\[\[img:[^\]]+\]\]/gi, safeSource),
      codeBlocks: count(/^\s*(```+|~~~+)/gm, safeSource) / 2,
      mermaidBlocks: count(/^\s*```(?:mermaid)(?:[^\n]*)$/gim, safeSource),
      drawioBlocks: count(/^\s*```(?:drawio|xml-drawio|draw\.io)(?:[^\n]*)$/gim, safeSource),
      mathExpressions: count(/\$\$[\s\S]*?\$\$|\$(?!\$)[^$\n]+\$|\\\([^\n]+\\\)|\\\[[\s\S]*?\\\]/g, safeSource),
      htmlLength: safeHtml.length
    };
  }

  function buildHeadingIndex(items) {
    const used = new Map();
    return items.map((item) => {
      const title = String(item.title || '').trim();
      const level = Number(item.level) || 0;
      const base = slugifyHeadingId(title);
      if (!base) return { level, title, id: '' };
      const count = used.get(base) || 0;
      const id = count === 0 ? base : `${base}-${count}`;
      used.set(base, count + 1);
      return { level, title, id };
    });
  }

  const api = {
    slugifyHeadingId,
    normalizeTopicSyntax,
    injectTopicPlaceholders,
    replaceOutsideBackticks,
    normalizeMarkdownSource,
    detectFeatureSummary,
    buildHeadingIndex
  };

  global.MarkdownToolCore = api;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
})(typeof window !== 'undefined' ? window : globalThis);

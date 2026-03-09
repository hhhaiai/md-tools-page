const DEFAULT_MARKDOWN = "# Markdown 示例（扩展版本）\n\n\n\n[topic]\n\n\n\n## 1. 标题\n### 主流标题\n# 一级标题\n## 二级标题\n### 三级标题\n#### 四级标题\n##### 五级标题\n###### 六级标题\n\n## 2. 强调\n\n### *斜体* 和 **加粗**\n*斜体*  \n_斜体_  \n**加粗**  \n__加粗__\n\n### ***加粗斜体*** 和 __*加粗斜体*__\n***加粗斜体***  \n__*加粗斜体*__\n\n## 3. 列表\n\n### 无序列表\n- 项目 1\n- 项目 2\n  - 子项 1\n  - 子项 2\n    - 子子项 1\n\n### 有序列表\n1. 第一项\n2. 第二项\n3. 第三项\n\n## 4. 链接\n\n### 行内链接\n[Google](https://www.google.com)\n\n### 参考式链接\n[GitHub]: https://github.com\n\n### 锚点链接\n[跳到部分](#markdown-示例)\n\n## 5. 图片\n\n### 图片格式\n![图片描述](https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80)\n\n### 另一种图片写法（兼容格式）\n[[img:https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80]]\n\n### 使用网络图片的示例\n![Example Image](https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80)\n\n## 6. 引用\n> 这是一个引用。\n> 引用中的文本会被缩进。\n\n## 7. 代码\n\n### 行内代码\n这是 `行内代码` 示例。\n\n### Bash 代码块\n```bash\n# 这是一个 Bash 代码示例\necho \"Hello, world!\"\n````\n\n### Python 代码块\n\n```python\ndef hello_world():\n    print(\"Hello, world!\")\n```\n\n## 8. 数学公式（科学技术类）\n\n### 行内公式\n\n这是一个行内公式：$E = mc^2$。\n（表示爱因斯坦的质能方程）\n\n### 块级公式\n\n这是一个块级公式：\n\n$\nF = ma\n$\n（牛顿的第二定律：力等于质量乘以加速度）\n\n### 其他数学公式\n\n欧拉公式：\n\n$\ne^{i\\pi} + 1 = 0\n$\n\n拉普拉斯变换公式：\n\n$\n\\mathcal{L}{f(t)} = \\int_0^\\infty e^{-st} f(t) , dt\n$\n\n### 科学常数的公式\n\n* 波尔兹曼常数公式：$k_B = 1.380649 \\times 10^{-23} \\ \\mathrm{J/K}$\n* 玻尔半径公式：$a_0 = \\frac{h}{2\\pi m_e c} \\approx 5.29 \\times 10^{-11} \\ \\mathrm{m}$\n\n## 9. 水平线\n\n---\n\n## 10. 表格\n\n| 列 1  | 列 2  | 列 3  |\n| ---- | ---- | ---- |\n| 数据 1 | 数据 2 | 数据 3 |\n| 数据 4 | 数据 5 | 数据 6 |\n\n## 11. 注脚（Footnotes）\n\n这是一个注脚[^1]示例。\n\n[^1]: 这是注脚内容。\n\n## 12. 删除线\n\n~~这是删除线文本。~~\n\n## 13. 特殊字符\n\n### 转义字符\n\n* 这是星号符号，不是加粗。\n\n### 反斜杠\n\n\\ 这是一个反斜杠。\n\n## 14. 内嵌 HTML 注释\n\n<!-- 这是一个注释，Markdown 不会渲染它。 -->\n\n## 15. 表情符号（Emoji）\n\n这是一个笑脸 😊。\n\n## 16. 任务链接\n\n[GitHub 上的任务](https://github.com)\n\n## 17. 内嵌视频（HTML 支持）\n\n<video width=\"320\" height=\"240\" controls>\n  <source src=\"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\n\n## 18. 内嵌音频（HTML 支持）\n\n<audio controls>\n  <source src=\"https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3\" type=\"audio/mpeg\">\n  Your browser does not support the audio tag.\n</audio>\n\n## 19. Mermaid 图（流程图）\n\n```mermaid id=\"m60lys\"\ngraph TD;\n    A[开始] --> B{条件};\n    B -->|是| C[过程 1];\n    B -->|否| D[过程 2];\n    C --> E[结束];\n    D --> E;\n```\n\n## 20. Draw.io 图（嵌入）\n\n```drawio id=\"uizfzg\"\n<mxGraphModel>\n  <root>\n    <mxCell id=\"0\"/>\n    <mxCell id=\"1\" parent=\"0\"/>\n    <mxCell id=\"2\" edge=\"1\" parent=\"1\" source=\"4\" style=\"edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;labelBackgroundColor=none;\" target=\"9\" value=\"\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"3\" connectable=\"0\" parent=\"2\" style=\"edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];labelBackgroundColor=none;\" value=\"<div style=&quot;font-size: 12px;&quot;><span>境外旅游费用</span></div><div style=&quot;font-size: 12px;&quot;><span>旅游卡</span></div><div style=&quot;font-size: 12px;&quot;><span>[<span style=&quot;color: light-dark(rgb(0, 0, 0), rgb(255, 255, 255))&quot;>120万/人年</span>]</span></div>\" vertex=\"1\">\n      <mxGeometry relative=\"1\" x=\"-0.2308\" y=\"-2\" as=\"geometry\">\n        <mxPoint x=\"10\" y=\"-2\" as=\"offset\"/>\n      </mxGeometry>\n    </mxCell>\n    <mxCell id=\"4\" parent=\"1\" style=\"rounded=1;whiteSpace=wrap;html=1;fillColor=none;labelBackgroundColor=none;\" value=\"人民币\" vertex=\"1\">\n      <mxGeometry height=\"60\" width=\"120\" x=\"-650\" y=\"-970\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"5\" edge=\"1\" parent=\"1\" source=\"6\" style=\"edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;labelBackgroundColor=none;\" target=\"4\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"6\" parent=\"1\" style=\"shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;labelBackgroundColor=none;\" value=\"Actor\" vertex=\"1\">\n      <mxGeometry height=\"60\" width=\"30\" x=\"-790\" y=\"-970\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"7\" edge=\"1\" parent=\"1\" source=\"9\" style=\"edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;labelBackgroundColor=none;\" target=\"11\" value=\"\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"8\" connectable=\"0\" parent=\"7\" style=\"edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];labelBackgroundColor=none;\" value=\"直接购买\" vertex=\"1\">\n      <mxGeometry relative=\"1\" x=\"-0.1467\" y=\"-1\" as=\"geometry\">\n        <mxPoint as=\"offset\"/>\n      </mxGeometry>\n    </mxCell>\n    <mxCell id=\"9\" parent=\"1\" style=\"whiteSpace=wrap;html=1;rounded=1;fillColor=none;labelBackgroundColor=none;\" value=\"外币&lt;div&gt;约等于储值卡(花呗/信用卡)&lt;/div&gt;&lt;div&gt;【&lt;span style=&quot;color: light-dark(rgb(0, 0, 0), rgb(255, 255, 255))&quot;&gt;无法网上转账-仅可消费&lt;/span&gt;&lt;span style=&quot;color: light-dark(rgb(0, 0, 0), rgb(255, 255, 255))&quot;&gt;】&lt;/span&gt;&lt;/div&gt;&lt;div&gt;《境内户口，存外币》&lt;/div&gt;\" vertex=\"1\">\n      <mxGeometry height=\"60\" width=\"150\" x=\"-400\" y=\"-970\" as=\"geometry\"/>\n    </mxCell>\n  </root>\n</mxGraphModel>\n```\n\n## 21. 折叠内容实现\n\n### 方法 1：`details` 和 `summary` 标签（标准方法）\n\n<details>\n  <summary>点击展开/折叠</summary>\n  这是折叠部分的内容。你可以在这里放置很多文字、图片或者代码块等内容。\n\n### 示例标题\n\n这是折叠内容中的一部分，可以显示更多详细信息，甚至可以嵌套其他元素。\n\n* 这里是折叠内容中的无序列表项 1\n* 这里是折叠内容中的无序列表项 2\n\n```python\n# 这里是折叠内容中的代码块\ndef greet():\n    print(\"Hello, world!\")\n```\n\n更多的内容...\n\n</details>\n\n### 方法 2：HTML标签实现折叠（通过CSS控制）\n\n```html id=\"xip2yd\"\n<div style=\"cursor:pointer; color: blue;\" onclick=\"this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none';\">\n  点击展开/折叠\n</div>\n<div style=\"display:none;\">\n  这是折叠内容。可以是文本、图片或其他元素。\n</div>\n```\n\n### 方法 3：其他自定义实现方式\n\n通过一些 CSS 或 JavaScript 逻辑，折叠内容可以实现更多自定义效果，这种方式通常依赖于具体的 Markdown 渲染器，特别是在网页应用中。\n\n## 22. 悬浮提示和主题\n\n### 悬浮提示（Tooltip）\n\n```markdown\n这是一个[悬浮提示](https://example.com){:title=\"点击这里访问更多\"}。\n```\n\n### 文章头部导航（Topic）\n\n```markdown\n## 目录\n- [首页](#首页)\n- [介绍](#介绍)\n- [联系方式](#联系方式)\n\n## 首页\n欢迎来到首页！\n\n## 介绍\n这里是介绍部分。\n\n## 联系方式\n这是联系方式部分。\n```\n";

const appState = {
  currentSource: '',
  normalizedSource: '',
  currentView: 'editor',
  renderToken: 0,
  isWideMode: false,
  sourceLabel: '内置示例',
  featureSummary: null,
  timings: {},
  isBootstrapping: false,
  hasUserInteracted: false,
  progress: {
    percent: 0,
    phase: '初始化',
    message: '尚未开始。'
  },
  lastHtml: '',
  support: {
    markdown: true,
    codeHighlight: true,
    mermaid: true,
    math: true,
    drawio: true,
    topic: true,
    sanitizer: true,
    localLoad: true,
    exportWord: true,
    responsive: true
  }
};

const dom = {
  preview: document.getElementById('preview'),
  progressPercent: document.getElementById('progress-percent'),
  progressPhase: document.getElementById('progress-phase'),
  progressBar: document.getElementById('progress-bar'),
  progressLog: document.getElementById('progress-log'),
  timingSummary: document.getElementById('timing-summary'),
  sourceStatus: document.getElementById('source-status'),
  statusPanel: document.getElementById('status-panel'),
  mobileEditorBtn: document.getElementById('mobile-editor-btn'),
  mobilePreviewBtn: document.getElementById('mobile-preview-btn'),
  exportButton: document.getElementById('btn-export-word')
};

const ASSET_REV = '20260308-speed1';
const ASSETS = {
  markdownCoreScript: `vendor/markdown-core.bundle.js?v=${ASSET_REV}`,
  highlightScript: `vendor/highlight.min.js?v=${ASSET_REV}`,
  mermaidScript: `vendor/mermaid.min.js?v=${ASSET_REV}`,
  drawioViewerScript: `vendor/drawio-viewer-static.min.js?v=${ASSET_REV}`,
  katexScript: `vendor/katex.min.js?v=${ASSET_REV}`,
  katexAutoRenderScript: `vendor/auto-render.min.js?v=${ASSET_REV}`,
  katexCss: `vendor/katex.min.css?v=${ASSET_REV}`,
  drawioMathBase: `vendor/drawio-math/es5`,
  docxScript: `vendor/docx.umd.js?v=${ASSET_REV}`,
  fileSaverScript: `vendor/FileSaver.min.js?v=${ASSET_REV}`
};

const runtimeState = {
  assetPromises: new Map(),
  markdownReady: null,
  markdownRenderer: null
};

const sourceInput = document.getElementById('code');
sourceInput.spellcheck = false;
sourceInput.setAttribute('autocapitalize', 'off');
sourceInput.setAttribute('autocomplete', 'off');

function absoluteAssetUrl(src) {
  return new URL(src, window.location.href).href;
}

function loadScriptOnce(src) {
  const key = `script:${src}`;
  if (runtimeState.assetPromises.has(key)) return runtimeState.assetPromises.get(key);

  const promise = new Promise((resolve, reject) => {
    const targetUrl = absoluteAssetUrl(src);
    const existing = Array.from(document.scripts).find(script => script.getAttribute('data-asset') === src || script.src === targetUrl);
    if (existing) {
      if (existing.dataset.loaded === '1') return resolve();
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error(`脚本加载失败: ${src}`)), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.dataset.asset = src;
    script.onload = () => {
      script.dataset.loaded = '1';
      resolve();
    };
    script.onerror = () => reject(new Error(`脚本加载失败: ${src}`));
    document.head.appendChild(script);
  });

  runtimeState.assetPromises.set(key, promise);
  return promise;
}

function loadStyleOnce(href) {
  const key = `style:${href}`;
  if (runtimeState.assetPromises.has(key)) return runtimeState.assetPromises.get(key);

  const promise = new Promise((resolve, reject) => {
    const targetUrl = absoluteAssetUrl(href);
    const existing = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).find(link => link.getAttribute('data-asset') === href || link.href === targetUrl);
    if (existing) return resolve();

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.dataset.asset = href;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`样式加载失败: ${href}`));
    document.head.appendChild(link);
  });

  runtimeState.assetPromises.set(key, promise);
  return promise;
}

function createMarkdownRenderer() {
  if (!window.markdownit) {
    throw new Error('markdown-it 核心未加载。');
  }

  const renderer = window.markdownit({
    html: true,
    linkify: true,
    typographer: true,
    breaks: false
  });

  if (typeof window.markdownitTaskLists === 'function') {
    renderer.use(window.markdownitTaskLists, { enabled: true, label: true, labelAfter: true });
  }
  if (typeof window.markdownitFootnote === 'function') {
    renderer.use(window.markdownitFootnote);
  }
  if (typeof window.markdownitEmoji === 'function') {
    renderer.use(window.markdownitEmoji);
  }

  const installDetailsContainer = (containerName) => {
    if (typeof window.markdownitContainer !== 'function') return;

    renderer.use(window.markdownitContainer, containerName, {
      validate: (params) => {
        const trimmed = params.trim();
        return trimmed === containerName || trimmed.startsWith(containerName + ' ');
      },
      render: (tokens, idx) => {
        const token = tokens[idx];
        if (token.nesting === 1) {
          const info = token.info.trim();
          const rawTitle = info.slice(containerName.length).trim();
          const isOpen = /^open(?:\s+|$)/i.test(rawTitle);
          const title = rawTitle.replace(/^open(?:\s+|$)/i, '').trim() || '详情';
          return `<details class="md-details"${isOpen ? ' open' : ''}><summary>${renderer.utils.escapeHtml(title)}</summary>\n`;
        }
        return '</details>\n';
      }
    });
  };

  installDetailsContainer('details');
  installDetailsContainer('collapse');

  return renderer;
}

async function ensureMarkdownCoreReady() {
  if (runtimeState.markdownRenderer) return runtimeState.markdownRenderer;
  if (!runtimeState.markdownReady) {
    runtimeState.markdownReady = (async () => {
      await loadScriptOnce(ASSETS.markdownCoreScript);
      runtimeState.markdownRenderer = createMarkdownRenderer();
      return runtimeState.markdownRenderer;
    })();
  }
  return runtimeState.markdownReady;
}

async function ensureEnhancementDependencies(featureSummary) {
  const fastTasks = [];

  if (featureSummary.codeBlocks && !window.hljs) {
    fastTasks.push(loadScriptOnce(ASSETS.highlightScript));
  }
  if (featureSummary.mermaidBlocks && !window.mermaid) {
    fastTasks.push(loadScriptOnce(ASSETS.mermaidScript));
  }
  if (featureSummary.drawioBlocks && !window.GraphViewer) {
    window.DRAW_MATH_URL = absoluteAssetUrl(ASSETS.drawioMathBase);
    fastTasks.push(loadScriptOnce(ASSETS.drawioViewerScript));
  }
  if (featureSummary.mathExpressions) {
    fastTasks.push(loadStyleOnce(ASSETS.katexCss));
  }

  if (fastTasks.length) {
    await Promise.all(fastTasks);
  }

  if (featureSummary.mathExpressions) {
    if (!window.katex) {
      await loadScriptOnce(ASSETS.katexScript);
    }
    if (typeof window.renderMathInElement !== 'function') {
      await loadScriptOnce(ASSETS.katexAutoRenderScript);
    }
  }
}

function getEditorValue() {
  return sourceInput.value;
}

function setEditorValue(value) {
  sourceInput.value = String(value ?? '');
}

function now() {
  return typeof performance !== 'undefined' ? performance.now() : Date.now();
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, '&#96;');
}

function updateSourceStatus(text) {
  if (dom.sourceStatus) dom.sourceStatus.textContent = text;
}

function setReportPanelVisible(visible) {
  if (!dom.statusPanel) return;
  dom.statusPanel.classList.toggle('is-hidden', !visible);
  dom.statusPanel.setAttribute('aria-hidden', visible ? 'false' : 'true');
}

function toggleReportPanel() {
  setReportPanelVisible(true);
}

function updateProgress(percent, phase, message) {
  appState.progress = {
    percent: Math.max(0, Math.min(100, Math.round(percent))),
    phase,
    message
  };

  if (dom.progressPercent) dom.progressPercent.textContent = `${appState.progress.percent}%`;
  if (dom.progressPhase) dom.progressPhase.textContent = phase;
  if (dom.progressBar) dom.progressBar.style.width = `${appState.progress.percent}%`;
  if (dom.progressLog) dom.progressLog.textContent = message;
}

function renderReportList(container, items) {
  if (!container) return;
  container.innerHTML = items.map(item => {
    const badgeClass = item.level === 'ok' ? 'ok' : item.level === 'warn' ? 'warn' : item.level === 'fail' ? 'fail' : '';
    return `<div class="report-item"><div><strong>${escapeHtml(item.label)}</strong><br><small>${escapeHtml(item.detail)}</small></div><span class="report-badge ${badgeClass}">${escapeHtml(item.badge)}</span></div>`;
  }).join('');
}

function summarizeFeatureSupport(featureSummary) {
  renderReportList(dom.featureReport, [
    { label: 'Markdown 兼容', detail: `标题 ${featureSummary.headings} / 表格 ${featureSummary.tables} / 图片 ${featureSummary.images}`, badge: '已启用', level: 'ok' },
    { label: '代码与图表', detail: `代码块 ${featureSummary.codeBlocks} / Mermaid ${featureSummary.mermaidBlocks} / draw.io ${featureSummary.drawioBlocks}`, badge: featureSummary.codeBlocks || featureSummary.mermaidBlocks || featureSummary.drawioBlocks ? '已检测' : '待检测', level: 'ok' },
    { label: '公式支持', detail: `行内/块级公式共 ${featureSummary.mathExpressions} 处，支持 $ / $$ / \\( \\) / \\[ \\]`, badge: featureSummary.mathExpressions ? '已检测' : '待检测', level: featureSummary.mathExpressions ? 'ok' : 'warn' },
    { label: '兼容层', detail: '支持 [[img:...]]、[topic] 索引、details/collapse、mermaid 附加 info string', badge: '已启用', level: 'ok' },
    { label: '页面优化', detail: '同源静态资源、首屏先渲染、图表/公式按需增强、移动端单栏/PC 双栏', badge: '速度优先', level: 'ok' }
  ]);
}

function summarizeAcceptance(featureSummary) {
  const mermaidReady = !!window.mermaid;
  const mathReady = typeof window.renderMathInElement === 'function';
  const drawioReady = featureSummary.drawioBlocks ? (window.GraphViewer ? '已识别 draw.io XML，图形渲染依赖已就绪。' : '检测到 draw.io XML，但图形渲染依赖缺失。') : '当前文档未检测到 draw.io';

  renderReportList(dom.acceptanceReport, [
    { label: '本地运行', detail: appState.sourceLabel, badge: '通过', level: 'ok' },
    { label: '预览渲染', detail: appState.lastHtml ? 'Markdown 已成功渲染到页面' : '尚未产出 HTML', badge: appState.lastHtml ? '通过' : '待处理', level: appState.lastHtml ? 'ok' : 'warn' },
    { label: 'Mermaid', detail: featureSummary.mermaidBlocks ? (mermaidReady ? '检测到 Mermaid，增强依赖已就绪。' : '检测到 Mermaid，但运行依赖缺失。') : '当前文档未检测到 Mermaid', badge: featureSummary.mermaidBlocks ? (mermaidReady ? '通过' : '缺依赖') : '未触发', level: featureSummary.mermaidBlocks ? (mermaidReady ? 'ok' : 'warn') : 'warn' },
    { label: '公式', detail: featureSummary.mathExpressions ? (mathReady ? '检测到公式，KaTeX 增强依赖已就绪。' : '检测到公式，但 KaTeX 自动渲染依赖缺失。') : '当前文档未检测到公式', badge: featureSummary.mathExpressions ? (mathReady ? '通过' : '缺依赖') : '未触发', level: featureSummary.mathExpressions ? (mathReady ? 'ok' : 'warn') : 'warn' },
    { label: 'draw.io', detail: featureSummary.drawioBlocks ? (window.GraphViewer ? '已识别 draw.io XML，并尝试渲染为图形；同时保留源码兜底预览。' : '检测到 draw.io XML，但图形渲染依赖缺失。') : drawioReady, badge: featureSummary.drawioBlocks ? (window.GraphViewer ? '已渲染' : '缺依赖') : '未触发', level: featureSummary.drawioBlocks ? (window.GraphViewer ? 'ok' : 'warn') : 'warn' },
    { label: '移动端/PC', detail: '已提供窄屏单栏切换与桌面双栏布局', badge: '通过', level: 'ok' }
  ]);
}

function updateTimingSummary() {
  const timings = appState.timings;
  const values = [
    ['加载', timings.load],
    ['归一化', timings.normalize],
    ['渲染', timings.render],
    ['增强', timings.enhance],
    ['总耗时', timings.total]
  ].filter(([, value]) => typeof value === 'number')
    .map(([label, value]) => `${label} ${value.toFixed(1)}ms`);

  if (dom.timingSummary) {
    dom.timingSummary.textContent = values.length ? values.join(' · ') : '等待首次渲染';
  }
}

const coreUtils = window.MarkdownToolCore;
const detectFeatureSummary = coreUtils.detectFeatureSummary;
const normalizeTopicSyntax = coreUtils.normalizeTopicSyntax;
const injectTopicPlaceholders = coreUtils.injectTopicPlaceholders;
const replaceOutsideBackticks = coreUtils.replaceOutsideBackticks;
const normalizeMarkdownSource = coreUtils.normalizeMarkdownSource;
const buildHeadingIndex = coreUtils.buildHeadingIndex;

function parseFenceInfo(info) {
  const raw = String(info || '').trim();
  if (!raw) return { name: '', attrs: {} };
  const parts = raw.split(/\s+/);
  const name = parts.shift() || '';
  const attrs = {};
  const attrPattern = /(\w[\w:-]*)\s*=\s*"([^"]*)"|(\w[\w:-]*)\s*=\s*'([^']*)'|(\w[\w:-]*)\s*=\s*([^\s]+)/g;
  let match;
  while ((match = attrPattern.exec(raw))) {
    const key = match[1] || match[3] || match[5];
    const value = match[2] || match[4] || match[6] || '';
    attrs[key] = value;
  }
  return { name, attrs };
}

function sanitizeRenderedHtml(html) {
  const template = document.createElement('template');
  template.innerHTML = String(html || '');
  const allowedTags = new Set(['A', 'ABBR', 'AUDIO', 'B', 'BLOCKQUOTE', 'BR', 'CODE', 'DEL', 'DETAILS', 'DIV', 'EM', 'FIGCAPTION', 'FIGURE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'HR', 'I', 'IMG', 'INPUT', 'LI', 'OL', 'P', 'PRE', 'SECTION', 'SMALL', 'SOURCE', 'SPAN', 'STRONG', 'SUB', 'SUMMARY', 'SUP', 'TABLE', 'TBODY', 'TD', 'TH', 'THEAD', 'TR', 'UL', 'VIDEO']);
  const allowedAttrs = new Set(['alt', 'aria-label', 'aria-hidden', 'class', 'colspan', 'controls', 'data-inline', 'data-math', 'data-topic-placeholder', 'height', 'href', 'id', 'poster', 'preload', 'rowspan', 'src', 'title', 'type', 'width', 'checked', 'disabled', 'start', 'open']);

  const isBareRelativeUrl = (value) => {
    const normalized = String(value || '').trim();
    if (!normalized) return false;
    if (/^[a-z][a-z0-9+.-]*:/i.test(normalized)) return false;
    if (normalized.startsWith('//')) return false;
    if (/[<>"'`\s]/.test(normalized)) return false;
    return true;
  };

  const isAllowedUrl = (tagName, attrName, value) => {
    const normalized = String(value || '').trim().toLowerCase();
    if (!normalized) return false;
    if (normalized.startsWith('#') || normalized.startsWith('./') || normalized.startsWith('../') || normalized.startsWith('/') || isBareRelativeUrl(normalized)) return true;

    if (tagName === 'A' && attrName === 'href') {
      return ['http:', 'https:', 'mailto:', 'tel:'].some(prefix => normalized.startsWith(prefix));
    }

    if (tagName === 'IMG' && attrName === 'src') {
      return ['http:', 'https:'].some(prefix => normalized.startsWith(prefix)) || /^data:image\/(png|jpeg|jpg|gif|webp);/i.test(normalized);
    }

    if (['VIDEO', 'AUDIO', 'SOURCE'].includes(tagName) && attrName === 'src') {
      return ['http:', 'https:'].some(prefix => normalized.startsWith(prefix));
    }

    if (tagName === 'VIDEO' && attrName === 'poster') {
      return ['http:', 'https:'].some(prefix => normalized.startsWith(prefix));
    }

    return false;
  };

  const walk = (node) => {
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    if (!allowedTags.has(node.tagName)) {
      node.replaceWith(document.createTextNode(node.textContent || ''));
      return;
    }

    Array.from(node.attributes).forEach(attr => {
      const name = attr.name.toLowerCase();
      const value = attr.value || '';
      if (name.startsWith('on') || name === 'style' || name.includes(':') || !allowedAttrs.has(attr.name)) {
        node.removeAttribute(attr.name);
        return;
      }
      if (['href', 'src', 'poster'].includes(name) && !isAllowedUrl(node.tagName, name, value)) {
        node.removeAttribute(attr.name);
      }
    });

    if (node.tagName === 'A' && !node.getAttribute('href')) {
      const text = document.createTextNode(node.textContent || '');
      node.replaceWith(text);
      return;
    }

    if (node.tagName === 'IMG') {
      node.setAttribute('loading', 'lazy');
      node.setAttribute('decoding', 'async');
      node.setAttribute('referrerpolicy', 'no-referrer');
    }

    if (node.tagName === 'VIDEO' || node.tagName === 'AUDIO') {
      node.setAttribute('preload', 'none');
    }

    Array.from(node.childNodes).forEach(walk);
  };

  Array.from(template.content.childNodes).forEach(walk);
  return template.innerHTML;
}

const slugifyHeadingId = coreUtils.slugifyHeadingId;

function ensureHeadingIds(previewRoot) {
  const headings = previewRoot.querySelectorAll('h1,h2,h3,h4,h5,h6');
  const used = new Map();

  headings.forEach(h => {
    if (h.id) {
      used.set(h.id, (used.get(h.id) || 0) + 1);
      return;
    }
    const base = slugifyHeadingId(h.textContent);
    if (!base) return;
    const count = used.get(base) || 0;
    const nextId = count === 0 ? base : `${base}-${count}`;
    used.set(base, count + 1);
    h.id = nextId;
  });
}

function renderTopicIndexes(previewRoot) {
  const placeholders = Array.from(previewRoot.querySelectorAll('[data-topic-placeholder="1"]'));
  if (!placeholders.length) return;

  const headings = Array.from(previewRoot.querySelectorAll('h2,h3,h4')).filter(h => !h.closest('.md-topic'));
  const indexed = buildHeadingIndex(headings.map(h => ({
    level: Number(h.tagName.slice(1)),
    title: (h.textContent || '').trim()
  })));
  const items = indexed.map((item, index) => ({
    ...item,
    id: headings[index]?.id || item.id
  })).filter(item => item.title && item.id);

  placeholders.forEach(placeholder => {
    if (!items.length) {
      const empty = document.createElement('blockquote');
      empty.textContent = '未检测到可生成目录的标题';
      placeholder.replaceWith(empty);
      return;
    }

    const section = document.createElement('section');
    section.className = 'md-topic';
    const title = document.createElement('div');
    title.className = 'md-topic-title';
    title.textContent = '目录导航';
    const list = document.createElement('ul');

    items.forEach(item => {
      const li = document.createElement('li');
      li.style.marginLeft = `${Math.max(0, item.level - 2) * 16}px`;
      const link = document.createElement('a');
      link.href = `#${item.id}`;
      link.textContent = item.title;
      li.appendChild(link);
      list.appendChild(li);
    });

    section.appendChild(title);
    section.appendChild(list);
    placeholder.replaceWith(section);
  });
}

function enhanceCodeBlocks(preview) {
  if (!window.hljs) return;
  preview.querySelectorAll('pre code:not([data-enhanced="1"])').forEach(block => {
    const className = block.className || '';
    const isMermaid = /(^|\s)language-mermaid(\s|$)/.test(className) || /(^|\s)lang-mermaid(\s|$)/.test(className);
    const isDrawio = /(^|\s)language-(drawio|xml-drawio|draw\.io)(\s|$)/.test(className) || /(^|\s)lang-(drawio|xml-drawio|draw\.io)(\s|$)/.test(className);

    if (isMermaid || isDrawio) return;
    block.dataset.enhanced = '1';
    window.hljs.highlightElement(block);
  });
}

function enhanceTitledLinks(preview) {
  preview.querySelectorAll('a[title]').forEach((link) => {
    const title = (link.getAttribute('title') || '').trim();
    if (!title) return;
    link.classList.add('has-tooltip');
    link.setAttribute('data-tooltip', title);
    link.setAttribute('data-native-title', title);
    link.removeAttribute('title');
    link.setAttribute('aria-label', `${link.textContent || '链接'}：${title}`);
  });
}

function buildMermaidCompatibilityCandidates(source) {
  const original = String(source || '').replace(/^﻿/, '').trim();
  if (!original) return [];

  const variants = [];
  const pushVariant = (value) => {
    const text = String(value || '').trim();
    if (!text) return;
    if (!variants.includes(text)) variants.push(text);
  };

  pushVariant(original);

  let normalized = original;
  normalized = normalized.replace(/^\s*flowchart-v2\b/gim, 'flowchart');
  normalized = normalized.replace(/^\s*classDiagram-v2\b/gim, 'classDiagram');
  normalized = normalized.replace(/^\s*stateDiagram-v2\b/gim, 'stateDiagram');
  normalized = normalized.replace(/^(\s*)end(\s*)$/gm, '$1End$2');
  normalized = normalized.replace(/(---|-->|-\.->|==>|===)([ox])([A-Z0-9_\[("])/g, '$1 $2$3');
  pushVariant(normalized);

  let readabilityNormalized = normalized;
  readabilityNormalized = readabilityNormalized.replace(/^\s*graph\b/gim, (match) => match.replace(/graph/i, 'flowchart'));
  pushVariant(readabilityNormalized);

  return variants;
}

async function renderSingleMermaidBlock(host, source, renderId) {
  const candidates = buildMermaidCompatibilityCandidates(source);
  let lastError = null;

  for (let index = 0; index < candidates.length; index++) {
    const candidate = candidates[index];
    try {
      const result = await window.mermaid.render(`${renderId}-${index}`, candidate);
      host.innerHTML = result?.svg || '';
      if (typeof result?.bindFunctions === 'function') {
        result.bindFunctions(host);
      }
      host.dataset.mermaidRendered = '1';
      if (index > 0) host.dataset.mermaidCompatibilityFallback = '1';
      return true;
    } catch (error) {
      lastError = error;
    }
  }

  host.dataset.mermaidRendered = '0';
  host.dataset.mermaidError = lastError?.message || 'Mermaid render failed';
  return false;
}

async function renderMermaidBlocks(preview) {
  const blocks = Array.from(preview.querySelectorAll('pre code')).filter(block => {
    const className = block.className || '';
    return /(^|\s)language-mermaid(\s|$)/.test(className) || /(^|\s)lang-mermaid(\s|$)/.test(className);
  });

  if (!blocks.length || !window.mermaid) return;

  try {
    window.mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'strict', suppressErrorRendering: true });
  } catch (error) {
    console.error('Mermaid initialization error:', error);
    return;
  }

  await Promise.all(blocks.map(async (block, index) => {
    const source = block.textContent || '';
    const host = document.createElement('div');
    host.className = 'mermaid';
    host.dataset.mermaidId = `mermaid-${Date.now()}-${index}`;

    const fallback = block.parentElement.cloneNode(true);
    fallback.dataset.mermaidFallback = '1';
    fallback.style.display = 'none';

    const wrapper = document.createElement('div');
    wrapper.className = 'mermaid-wrapper';
    wrapper.appendChild(host);
    wrapper.appendChild(fallback);
    block.parentElement.replaceWith(wrapper);

    const ok = await renderSingleMermaidBlock(host, source, host.dataset.mermaidId);
    if (!ok) {
      host.remove();
      fallback.style.display = '';
    }
  }));
}

function renderDrawioBlocks(preview) {
  const blocks = Array.from(preview.querySelectorAll('pre code')).filter(block => {
    const className = block.className || '';
    return /(^|\s)language-(drawio|xml-drawio|draw\.io)(\s|$)/.test(className) || /(^|\s)lang-(drawio|xml-drawio|draw\.io)(\s|$)/.test(className);
  });

  if (!blocks.length || !window.GraphViewer?.processElements) return;

  blocks.forEach((block, index) => {
    const source = block.textContent || '';
    const wrapper = document.createElement('section');
    wrapper.className = 'drawio-block';
    wrapper.dataset.drawioIndex = String(index);

    const meta = document.createElement('div');
    meta.className = 'drawio-meta';
    meta.textContent = 'draw.io XML 已识别：已尝试渲染图形，下面保留源码兜底预览。';
    wrapper.appendChild(meta);

    const host = document.createElement('div');
    host.className = 'drawio-diagram mxgraph drawio-mxgraph';
    host.style.maxWidth = '100%';
    host.style.minHeight = '240px';
    host.setAttribute('data-mxgraph', JSON.stringify({
      nav: true,
      resize: true,
      toolbar: 'zoom lightbox',
      xml: normalizeDrawioXml(source)
    }));
    wrapper.appendChild(host);

    const fallback = document.createElement('details');
    fallback.className = 'drawio-fallback';
    fallback.open = false;
    const summary = document.createElement('summary');
    summary.textContent = '查看 draw.io XML 内容';
    const code = document.createElement('code');
    code.textContent = source.slice(0, 20000);
    fallback.appendChild(summary);
    fallback.appendChild(code);
    wrapper.appendChild(fallback);

    block.parentElement.replaceWith(wrapper);
  });

  try {
    window.GraphViewer.processElements('drawio-mxgraph');
  } catch (error) {
    console.error('draw.io render error:', error);
  }
}

function escapeDrawioAttributeValue(value) {
  return String(value || '')
    .replace(/&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[a-f0-9]+);)/gi, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function normalizeDrawioXml(source) {
  let text = String(source || '').trim();
  if (!text) return '';

  text = text.replace(/\bvalue="([^"]*)"/g, (_match, value) => `value="${escapeDrawioAttributeValue(value)}"`);
  text = text.replace(/\bvalue='([^']*)'/g, (_match, value) => `value='${escapeDrawioAttributeValue(value)}'`);

  if (!/^<mxfile[\s>]/i.test(text) && /^<mxGraphModel[\s>]/i.test(text)) {
    text = `<mxfile host="app.diagrams.net"><diagram id="diagram-1" name="Page-1">${text}</diagram></mxfile>`;
  }

  return text;
}

function renderMath(preview) {
  if (typeof window.renderMathInElement !== 'function') return;
  try {
    window.renderMathInElement(preview, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      throwOnError: false,
      ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
    });
  } catch (error) {
    console.error('KaTeX render error:', error);
  }
}

async function enhancePreview(preview, featureSummary, options = {}) {
  const { heavy = true } = options;
  ensureHeadingIds(preview);
  renderTopicIndexes(preview);
  enhanceTitledLinks(preview);

  if (!heavy) return;

  enhanceCodeBlocks(preview);
  if (featureSummary.mermaidBlocks) await renderMermaidBlocks(preview);
  if (featureSummary.drawioBlocks) renderDrawioBlocks(preview);
  if (featureSummary.mathExpressions) renderMath(preview);
}

function renderMarkdownHtml(source) {
  if (!runtimeState.markdownRenderer) {
    throw new Error('Markdown 内核尚未就绪。');
  }
  return runtimeState.markdownRenderer.render(source);
}

function scheduleRender() {
  clearTimeout(scheduleRender.timer);
  scheduleRender.timer = setTimeout(() => {
    renderDocument(getEditorValue());
  }, 150);
}

async function renderDocument(source) {
  const token = ++appState.renderToken;
  const totalStart = now();
  appState.currentSource = String(source || '');

  updateProgress(12, '归一化中', '正在处理兼容语法与旧格式。');
  const normalizeStart = now();
  const normalizedSource = normalizeMarkdownSource(appState.currentSource);
  appState.normalizedSource = normalizedSource;
  appState.timings.normalize = now() - normalizeStart;

  updateProgress(34, '渲染中', '正在生成基础预览 HTML。');
  await ensureMarkdownCoreReady();
  const renderStart = now();
  const rawHtml = renderMarkdownHtml(normalizedSource);
  const safeHtml = sanitizeRenderedHtml(rawHtml);
  appState.timings.render = now() - renderStart;
  appState.lastHtml = safeHtml;

  const featureSummary = detectFeatureSummary(normalizedSource, safeHtml);
  appState.featureSummary = featureSummary;

  dom.preview.innerHTML = safeHtml;
  await enhancePreview(dom.preview, featureSummary, { heavy: false });
  summarizeFeatureSupport(featureSummary);
  summarizeAcceptance(featureSummary);
  updateTimingSummary();

  if (!appState.hasUserInteracted) {
    appState.timings.enhance = 0;
    appState.timings.total = now() - totalStart;
    updateTimingSummary();
    updateProgress(100, '基础预览已就绪', '当前只做轻量渲染；你开始输入后，代码高亮、公式和图表会按需懒加载。');
    return;
  }

  updateProgress(70, '增强中', '正在按需加载代码高亮、公式和图表能力。');
  const enhanceStart = now();

  await new Promise(resolve => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 0 }), 16));
    idle(async () => {
      try {
        await ensureEnhancementDependencies(featureSummary);
        if (token !== appState.renderToken) return;
        await enhancePreview(dom.preview, featureSummary, { heavy: true });
      } finally {
        resolve();
      }
    });
  });

  appState.timings.enhance = now() - enhanceStart;
  appState.timings.total = now() - totalStart;
  updateTimingSummary();
  summarizeAcceptance(featureSummary);

  if (token !== appState.renderToken) return;
  updateProgress(100, '完成', '已完成渲染，可继续编辑。');
}

async function loadInitialSource() {
  const loadStart = now();
  updateProgress(6, '加载中', '正在装载内嵌默认 Markdown。');
  appState.sourceLabel = '已加载内嵌默认 Markdown';
  updateSourceStatus('已加载内嵌默认内容');
  appState.timings.load = now() - loadStart;
  return DEFAULT_MARKDOWN;
}

async function reloadMarkdownFile() {
  updateProgress(5, '重置中', '正在恢复内嵌默认 Markdown。');
  const text = await loadInitialSource();
  appState.hasUserInteracted = false;
  setEditorValue(text);
  await renderDocument(text);
}

function clearEditor() {
  if (confirm('确定要清空编辑器内容吗？')) {
    setEditorValue('');
    renderDocument('');
  }
}

function setMobileView(view) {
  appState.currentView = view === 'preview' ? 'preview' : 'editor';
  document.body.classList.toggle('mobile-preview', appState.currentView === 'preview');
  document.body.classList.toggle('mobile-editor', appState.currentView !== 'preview');
  if (dom.mobileEditorBtn) dom.mobileEditorBtn.classList.toggle('is-active', appState.currentView !== 'preview');
  if (dom.mobilePreviewBtn) dom.mobilePreviewBtn.classList.toggle('is-active', appState.currentView === 'preview');
}

function toggleWideMode() {
  if (window.matchMedia('(max-width: 860px)').matches) {
    document.body.classList.remove('wide-mode');
    appState.isWideMode = false;
    return;
  }

  appState.isWideMode = document.body.classList.toggle('wide-mode');
  const headerBtn = document.getElementById('header-preview-btn');
  if (headerBtn) {
    headerBtn.innerText = appState.isWideMode ? '退出预览' : '预览模式';
  }
}

function inlineStyles(sourceNode, targetNode) {
  const computedStyle = window.getComputedStyle(sourceNode);
  if (computedStyle) {
    let styleStr = '';
    const keys = ['fill', 'stroke', 'stroke-width', 'font-family', 'font-size', 'color', 'background-color'];
    keys.forEach(key => {
      styleStr += `${key}:${computedStyle.getPropertyValue(key)};`;
    });
    targetNode.setAttribute('style', styleStr);
  }
  for (let i = 0; i < sourceNode.children.length; i++) {
    if (i < targetNode.children.length) {
      inlineStyles(sourceNode.children[i], targetNode.children[i]);
    }
  }
}

function collectDrawioTextOverlays(sourceSvg) {
  if (!sourceSvg?.closest('.drawio-diagram')) return [];

  const rootRect = sourceSvg.getBoundingClientRect();
  const screenCtm = typeof sourceSvg.getScreenCTM === 'function' ? sourceSvg.getScreenCTM() : null;
  const inverseScreenCtm = screenCtm && typeof screenCtm.inverse === 'function' ? screenCtm.inverse() : null;
  const viewBox = sourceSvg.viewBox?.baseVal;
  const mapClientPointToSvg = (clientX, clientY) => {
    if (inverseScreenCtm && typeof sourceSvg.createSVGPoint === 'function') {
      const point = sourceSvg.createSVGPoint();
      point.x = clientX;
      point.y = clientY;
      const mapped = point.matrixTransform(inverseScreenCtm);
      return { x: mapped.x, y: mapped.y };
    }

    const width = rootRect.width || 1;
    const height = rootRect.height || 1;
    const offsetX = clientX - rootRect.left;
    const offsetY = clientY - rootRect.top;

    if (viewBox && viewBox.width > 0 && viewBox.height > 0) {
      return {
        x: viewBox.x + (offsetX / width) * viewBox.width,
        y: viewBox.y + (offsetY / height) * viewBox.height
      };
    }

    return { x: offsetX, y: offsetY };
  };

  return Array.from(sourceSvg.querySelectorAll('foreignObject div'))
    .filter((el) => !Array.from(el.children || []).some(child => child.tagName === 'DIV'))
    .map((el) => {
      const text = (el.textContent || '').trim();
      if (!text) return null;
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      const fontSize = parseFloat(style.fontSize || '12') || 12;
      const svgPoint = mapClientPointToSvg(rect.left + (rect.width / 2), rect.top + fontSize);
      return {
        text,
        x: svgPoint.x,
        y: svgPoint.y,
        fill: style.color || '#000000',
        fontSize,
        fontFamily: style.fontFamily || 'Helvetica, Arial, sans-serif',
        fontWeight: style.fontWeight || '400'
      };
    })
    .filter(Boolean);
}

function applyDrawioTextOverlays(cloneSvg, overlays) {
  if (!cloneSvg || !overlays.length) return;
  const ns = 'http://www.w3.org/2000/svg';
  cloneSvg.querySelectorAll('foreignObject').forEach(node => node.remove());

  const layer = document.createElementNS(ns, 'g');
  layer.setAttribute('data-drawio-export-text', '1');

  overlays.forEach((item) => {
    const textEl = document.createElementNS(ns, 'text');
    textEl.setAttribute('x', String(item.x));
    textEl.setAttribute('y', String(item.y));
    textEl.setAttribute('fill', item.fill);
    textEl.setAttribute('font-size', String(item.fontSize));
    textEl.setAttribute('font-family', item.fontFamily);
    textEl.setAttribute('font-weight', String(item.fontWeight));
    textEl.setAttribute('text-anchor', 'middle');
    textEl.textContent = item.text;
    layer.appendChild(textEl);
  });

  cloneSvg.appendChild(layer);
}

function svgToPng(svgElement) {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      console.warn('SVG render timed out, skipping.');
      resolve(null);
    }, 500);

    try {
      const rect = svgElement.getBoundingClientRect();
      const width = rect.width || 500;
      const height = rect.height || 300;
      const clone = svgElement.cloneNode(true);
      inlineStyles(svgElement, clone);
      applyDrawioTextOverlays(clone, collectDrawioTextOverlays(svgElement));
      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      clone.setAttribute('width', width);
      clone.setAttribute('height', height);
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(clone);
      const base64Svg = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
      const canvas = document.createElement('canvas');
      canvas.width = width * 2;
      canvas.height = height * 2;
      const ctx = canvas.getContext('2d');
      ctx.scale(2, 2);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const img = new Image();
      img.onload = () => {
        clearTimeout(timeout);
        ctx.drawImage(img, 0, 0, width, height);
        resolve({ data: canvas.toDataURL('image/png'), width, height });
      };
      img.onerror = (e) => {
        clearTimeout(timeout);
        console.error('Image load failed', e);
        resolve(null);
      };
      img.src = base64Svg;
    } catch (e) {
      clearTimeout(timeout);
      console.error('SVG conversion error', e);
      resolve(null);
    }
  });
}

function extractTexFromKatexElement(katexEl) {
  if (!katexEl) return '';
  const ann = katexEl.querySelector('annotation[encoding="application/x-tex"]');
  if (ann && ann.textContent) return ann.textContent.trim();
  return (katexEl.textContent || '').trim();
}

function createMathFallbackNode(tex, display) {
  const node = document.createElement(display ? 'div' : 'span');
  node.textContent = tex || '';
  node.style.fontFamily = 'Courier New, monospace';
  node.style.fontSize = display ? '13px' : '12px';
  node.style.lineHeight = '1.6';
  node.style.color = '#0f172a';
  node.style.background = '#f8fafc';
  node.style.border = '1px solid #dbe2ea';
  node.style.borderRadius = display ? '10px' : '6px';
  node.style.padding = display ? '8px 10px' : '1px 6px';
  node.style.whiteSpace = display ? 'pre-wrap' : 'normal';
  node.style.display = display ? 'block' : 'inline-block';
  return node;
}

async function ensureFileSaveDependencies() {
  if (window.saveAs) return;
  await loadScriptOnce(ASSETS.fileSaverScript);
}

async function ensureExportDependencies() {
  if (window.docx && window.saveAs) return;
  await loadScriptOnce(ASSETS.docxScript);
  await ensureFileSaveDependencies();
}

async function saveMarkdownFile() {
  const content = getEditorValue();
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });

  try {
    await ensureFileSaveDependencies();
    if (typeof window.saveAs === 'function') {
      window.saveAs(blob, 'markdown.md');
      updateProgress(100, '已保存', 'Markdown 已保存到本地文件。');
      return;
    }
  } catch (error) {
    console.warn('FileSaver load failed, falling back to download link.', error);
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'markdown.md';
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  updateProgress(100, '已保存', 'Markdown 已保存到本地文件。');
}

async function exportWord() {
  const btn = dom.exportButton;
  const originalText = btn.innerText;
  btn.disabled = true;

  try {
    setReportPanelVisible(true);
    updateProgress(4, '导出准备中', '正在检查导出依赖和预览状态。');
    btn.innerText = '准备导出...';
    if (appState.featureSummary) {
      await ensureEnhancementDependencies(appState.featureSummary);
      await enhancePreview(dom.preview, appState.featureSummary);
    }
    updateProgress(12, '导出准备中', '增强能力已就绪，正在加载 Word 导出依赖。');
    await ensureExportDependencies();

    const previewEl = document.getElementById('preview');
    const liveSvgs = previewEl.querySelectorAll('.mermaid svg, .drawio-diagram svg');
    const replacements = [];

    updateProgress(24, '处理图表', `检测到 ${liveSvgs.length} 个图表，正在转成 Word 可用图片。`);

    for (let i = 0; i < liveSvgs.length; i++) {
      btn.innerText = `处理图表 ${i + 1}/${liveSvgs.length}...`;
      updateProgress(24 + Math.round(((i + 1) / Math.max(liveSvgs.length, 1)) * 18), '处理图表', `正在处理图表 ${i + 1}/${liveSvgs.length}。`);
      await new Promise(r => requestAnimationFrame(() => setTimeout(r, 20)));
      const pngData = await svgToPng(liveSvgs[i]);
      if (pngData) replacements.push({ index: i, ...pngData });
    }

    updateProgress(46, '克隆内容', '正在复制当前预览内容用于 Word 转换。');
    btn.innerText = '生成文档...';
    const contentClone = previewEl.cloneNode(true);
    const cloneSvgs = contentClone.querySelectorAll('.mermaid svg, .drawio-diagram svg');
    replacements.forEach(item => {
      if (cloneSvgs[item.index]) {
        const img = document.createElement('img');
        img.src = item.data;
        img.width = item.width;
        if (item.height) img.height = item.height;
        cloneSvgs[item.index].parentNode.replaceChild(img, cloneSvgs[item.index]);
      }
    });

    contentClone.querySelectorAll('svg').forEach(el => el.remove());

    const sandbox = document.createElement('div');
    sandbox.style.position = 'fixed';
    sandbox.style.left = '-10000px';
    sandbox.style.top = '0';
    sandbox.style.width = '900px';
    sandbox.style.opacity = '0';
    sandbox.style.pointerEvents = 'none';
    sandbox.style.background = '#ffffff';
    document.body.appendChild(sandbox);
    sandbox.appendChild(contentClone);

    try {
      const displayEls = Array.from(contentClone.querySelectorAll('.katex-display'));
      const inlineEls = Array.from(contentClone.querySelectorAll('.katex')).filter(el => !el.closest('.katex-display'));
      const total = displayEls.length + inlineEls.length;
      let done = 0;

      updateProgress(58, '处理公式', `检测到 ${total} 个公式，正在转为 Word 中稳定显示的图片。`);

      for (const el of displayEls) {
        done++;
        btn.innerText = `处理公式 ${done}/${total}...`;
        updateProgress(58 + Math.round((done / Math.max(total, 1)) * 16), '处理公式', `正在处理公式 ${done}/${total}。`);
        await new Promise(r => requestAnimationFrame(() => setTimeout(r, 10)));
        const tex = extractTexFromKatexElement(el);
        const png = await htmlElementToPng(el);
        if (!png) {
          el.replaceWith(createMathFallbackNode(tex, true));
          continue;
        }
        const img = document.createElement('img');
        img.setAttribute('src', png.data);
        img.setAttribute('width', String(png.width));
        img.setAttribute('height', String(png.height));
        img.setAttribute('data-math', '1');
        el.replaceWith(img);
      }

      for (const el of inlineEls) {
        done++;
        btn.innerText = `处理公式 ${done}/${total}...`;
        updateProgress(58 + Math.round((done / Math.max(total, 1)) * 16), '处理公式', `正在处理公式 ${done}/${total}。`);
        await new Promise(r => requestAnimationFrame(() => setTimeout(r, 10)));
        const tex = extractTexFromKatexElement(el);
        const png = await htmlElementToPng(el);
        if (!png) {
          el.replaceWith(createMathFallbackNode(tex, false));
          continue;
        }
        const img = document.createElement('img');
        img.setAttribute('src', png.data);
        img.setAttribute('width', String(png.width));
        img.setAttribute('height', String(png.height));
        img.setAttribute('data-math', '1');
        img.setAttribute('data-inline', '1');
        el.replaceWith(img);
      }
    } finally {
      // handled later
    }

    updateProgress(80, '转换内容', '正在将预览结构转换为 Word 段落、表格和图片。');
    btn.innerText = '转换内容...';
    const blocks = await htmlElementToDocxBlocks(contentClone);

    if (sandbox && sandbox.parentNode) {
      sandbox.parentNode.removeChild(sandbox);
    }

    if (!blocks.length) blocks.push(new window.docx.Paragraph({ text: '' }));

    const doc = new window.docx.Document({
      sections: [{ properties: {}, children: blocks }]
    });

    updateProgress(92, '打包文档', '正在打包 DOCX 文件。');
    btn.innerText = '打包文档...';
    const blob = await window.docx.Packer.toBlob(doc);
    updateProgress(100, '导出完成', `Word 文档已生成，共输出 ${blocks.length} 个内容块。`);
    saveAs(blob, 'markdown_export.docx');
  } catch (e) {
    updateProgress(100, '导出失败', `Word 导出失败：${e.message}`);
    alert('导出出错: ' + e.message);
  } finally {
    btn.innerText = originalText;
    btn.disabled = false;
  }
}

function isElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

function dataUrlToUint8Array(dataUrl) {
  const match = /^data:([^;]+);base64,(.*)$/.exec(dataUrl || '');
  if (!match) return null;
  const base64 = match[2];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

const __imageSizeCache = new Map();

function getImageSizeFromDataUrl(dataUrl) {
  if (!dataUrl) return Promise.resolve(null);
  if (__imageSizeCache.has(dataUrl)) return __imageSizeCache.get(dataUrl);

  const p = new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth || img.width, height: img.naturalHeight || img.height });
    img.onerror = () => resolve(null);
    img.src = dataUrl;
  });

  __imageSizeCache.set(dataUrl, p);
  return p;
}

function guessImageType(dataUrl) {
  const match = /^data:([^;]+);base64,/.exec(dataUrl || '');
  if (!match) return undefined;
  const mime = match[1].toLowerCase();
  if (mime.includes('png')) return 'png';
  if (mime.includes('jpeg') || mime.includes('jpg')) return 'jpeg';
  if (mime.includes('gif')) return 'gif';
  if (mime.includes('webp')) return 'webp';
  return undefined;
}

function extractMediaSources(node) {
  if (!node || node.nodeType !== Node.ELEMENT_NODE) return [];
  const values = [];
  const direct = node.getAttribute('src');
  if (direct) values.push(direct);
  node.querySelectorAll('source[src]').forEach((sourceEl) => {
    values.push(sourceEl.getAttribute('src') || '');
  });
  return Array.from(new Set(values.map(value => String(value || '').trim()).filter(Boolean)));
}

function inferCodeLanguage(preNode) {
  if (!preNode) return '';
  const codeEl = Array.from(preNode.children || []).find(child => (child.tagName || '').toUpperCase() === 'CODE');
  const className = codeEl?.className || '';
  const match = className.match(/(?:^|\s)language-([a-z0-9.+_-]+)(?:\s|$)/i) || className.match(/(?:^|\s)lang-([a-z0-9.+_-]+)(?:\s|$)/i);
  return match ? match[1] : '';
}

function inlineAllComputedStyles(sourceEl, targetEl) {
  if (!sourceEl || !targetEl) return;
  if (sourceEl.nodeType !== Node.ELEMENT_NODE || targetEl.nodeType !== Node.ELEMENT_NODE) return;

  const style = window.getComputedStyle(sourceEl);
  if (style) {
    let cssText = '';
    for (let i = 0; i < style.length; i++) {
      const prop = style[i];
      cssText += `${prop}:${style.getPropertyValue(prop)};`;
    }
    targetEl.setAttribute('style', cssText);
  }

  const srcChildren = Array.from(sourceEl.children || []);
  const dstChildren = Array.from(targetEl.children || []);
  for (let i = 0; i < srcChildren.length && i < dstChildren.length; i++) {
    inlineAllComputedStyles(srcChildren[i], dstChildren[i]);
  }
}

function htmlElementToPng(el, options = {}) {
  const scale = Number.isFinite(options.scale) ? options.scale : 2;
  const timeoutMs = Number.isFinite(options.timeoutMs) ? options.timeoutMs : 1200;

  return new Promise((resolve) => {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return resolve(null);
    const timeout = setTimeout(() => {
      console.warn('HTML->PNG render timed out, skipping.');
      resolve(null);
    }, timeoutMs);

    try {
      const rect = el.getBoundingClientRect();
      const width = Math.max(1, Math.ceil(rect.width || 1));
      const height = Math.max(1, Math.ceil(rect.height || 1));
      const clone = el.cloneNode(true);
      inlineAllComputedStyles(el, clone);
      const foreign = document.createElement('div');
      foreign.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
      foreign.appendChild(clone);
      const serialized = foreign.outerHTML;
      const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><foreignObject x="0" y="0" width="100%" height="100%">${serialized}</foreignObject></svg>`;
      const svgUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
      const img = new Image();
      img.onload = () => {
        clearTimeout(timeout);
        const canvas = document.createElement('canvas');
        canvas.width = width * scale;
        canvas.height = height * scale;
        const ctx = canvas.getContext('2d');
        ctx.scale(scale, scale);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        resolve({ data: canvas.toDataURL('image/png'), width, height });
      };
      img.onerror = (e) => {
        clearTimeout(timeout);
        console.error('HTML->PNG image load failed', e);
        resolve(null);
      };
      img.src = svgUrl;
    } catch (e) {
      clearTimeout(timeout);
      console.error('HTML->PNG conversion error', e);
      resolve(null);
    }
  });
}

function splitTextToRuns(text, options = {}) {
  const { TextRun } = window.docx;
  const normalized = (text ?? '').replace(/\r\n/g, '\n');
  const lines = normalized.split('\n');
  const runs = [];
  lines.forEach((line, idx) => {
    runs.push(new TextRun({ text: line, ...options }));
    if (idx < lines.length - 1) runs.push(new TextRun({ break: 1 }));
  });
  return runs;
}

async function inlineNodeToDocxRunsAsync(node, inherited = {}) {
  const { TextRun, ImageRun } = window.docx;
  if (!node) return [];

  if (node.nodeType === Node.TEXT_NODE) {
    return splitTextToRuns(node.textContent ?? '', inherited);
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return [];

  const tag = (node.tagName || '').toUpperCase();
  if (tag === 'BR') return [new TextRun({ break: 1 })];
  if (tag === 'MATH' || tag === 'SEMANTICS' || tag === 'ANNOTATION') return [];

  if (tag === 'IMG') {
    const src = node.getAttribute('src') || '';
    const bytes = dataUrlToUint8Array(src);
    if (!bytes) return [];

    const natural = await getImageSizeFromDataUrl(src);
    const widthAttr = parseInt(node.getAttribute('width') || '', 10);
    const heightAttr = parseInt(node.getAttribute('height') || '', 10);
    const naturalWidth = natural?.width || (Number.isFinite(widthAttr) ? widthAttr : 120);
    const naturalHeight = natural?.height || (Number.isFinite(heightAttr) ? heightAttr : 24);
    const isMath = node.getAttribute('data-math') === '1';
    const maxH = isMath ? 28 : 22;
    const ratio = naturalHeight > 0 ? (naturalWidth / naturalHeight) : 5;
    const targetHeight = Math.max(12, Math.min(maxH, naturalHeight));
    const targetWidth = Math.max(16, Math.round(targetHeight * ratio));
    const imageType = guessImageType(src);
    return [new ImageRun({ data: bytes, transformation: { width: targetWidth, height: targetHeight }, type: imageType })];
  }

  const next = { ...inherited };
  if (tag === 'STRONG' || tag === 'B') next.bold = true;
  if (tag === 'EM' || tag === 'I') next.italics = true;
  if (tag === 'S' || tag === 'DEL' || tag === 'STRIKE') next.strike = true;
  if (tag === 'CODE') next.font = next.font || 'Courier New';

  const runs = [];
  const children = Array.from(node.childNodes || []);
  for (const child of children) {
    runs.push(...await inlineNodeToDocxRunsAsync(child, next));
  }
  return runs;
}

async function inlineContainerToDocxRunsAsync(container, inherited = {}) {
  const { TextRun } = window.docx;
  if (!container) return [new TextRun({ text: '' })];
  const runs = [];
  const children = Array.from(container.childNodes || []);
  for (const child of children) {
    runs.push(...await inlineNodeToDocxRunsAsync(child, inherited));
  }
  if (!runs.length) runs.push(new TextRun({ text: '' }));
  return runs;
}

function headingLevelForTag(tagName) {
  const { HeadingLevel } = window.docx;
  switch ((tagName || '').toUpperCase()) {
    case 'H1': return HeadingLevel.HEADING_1;
    case 'H2': return HeadingLevel.HEADING_2;
    case 'H3': return HeadingLevel.HEADING_3;
    case 'H4': return HeadingLevel.HEADING_4;
    case 'H5': return HeadingLevel.HEADING_5;
    case 'H6': return HeadingLevel.HEADING_6;
    default: return undefined;
  }
}

async function htmlElementToDocxBlocks(rootEl) {
  const { Paragraph, Table, TableRow, TableCell, WidthType, ImageRun, AlignmentType, BorderStyle, TableLayoutType, TextRun } = window.docx;
  const blocks = [];

  const walkChildren = async (container) => {
    const children = Array.from(container.childNodes || []);
    for (const node of children) {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = (node.textContent || '').replace(/\s+/g, ' ').trim();
        if (text) {
          blocks.push(new Paragraph({ alignment: AlignmentType.LEFT, children: [new window.docx.TextRun({ text })], spacing: { after: 120 } }));
        }
        continue;
      }

      if (!isElement(node)) continue;
      const tag = node.tagName.toUpperCase();
      if (tag === 'BR') {
        blocks.push(new Paragraph({ text: '' }));
        continue;
      }

      if (/^H[1-6]$/.test(tag)) {
        blocks.push(new Paragraph({
          children: await inlineContainerToDocxRunsAsync(node),
          heading: headingLevelForTag(tag),
          alignment: AlignmentType.LEFT,
          spacing: { after: 180 }
        }));
        continue;
      }

      if (tag === 'DETAILS') {
        const summaryEl = Array.from(node.children || []).find(el => (el.tagName || '').toUpperCase() === 'SUMMARY');
        const summaryText = (summaryEl?.textContent || '').trim() || '折叠内容';
        const stateText = node.hasAttribute('open') ? '网页中默认展开' : '网页中默认折叠';
        blocks.push(new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { after: 80 },
          children: [
            new TextRun({ text: '折叠块：', bold: true }),
            new TextRun({ text: summaryText, bold: true }),
            new TextRun({ text: `（${stateText}）`, italics: true, color: '64748B' })
          ]
        }));

        const fragment = document.createElement('div');
        Array.from(node.childNodes || []).forEach((child) => {
          if (isElement(child) && child.tagName.toUpperCase() === 'SUMMARY') return;
          fragment.appendChild(child.cloneNode(true));
        });
        await walkChildren(fragment);
        continue;
      }

      if (tag === 'SUMMARY') {
        continue;
      }

      if (tag === 'P' || tag === 'DIV' || tag === 'SECTION') {
        const hasBlockChildren = Array.from(node.children || []).some(el => {
          const t = (el.tagName || '').toUpperCase();
          if (t === 'IMG') return el.getAttribute('data-inline') !== '1';
          return ['TABLE', 'PRE', 'UL', 'OL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'DETAILS', 'VIDEO', 'AUDIO'].includes(t);
        });

        if (!hasBlockChildren) {
          blocks.push(new Paragraph({ alignment: AlignmentType.LEFT, children: await inlineContainerToDocxRunsAsync(node), spacing: { after: 120 } }));
        } else {
          await walkChildren(node);
        }
        continue;
      }

      if (tag === 'PRE') {
        const code = (node.innerText || node.textContent || '').replace(/^\n+|\n+$/g, '');
        if (code) {
          const language = inferCodeLanguage(node);
          if (language) {
            blocks.push(new Paragraph({
              alignment: AlignmentType.LEFT,
              spacing: { after: 60 },
              children: [new TextRun({ text: `代码块 · ${language}`, bold: true, color: '475569' })]
            }));
          }

          blocks.push(new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            layout: TableLayoutType.FIXED,
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    shading: { fill: '0F172A' },
                    borders: {
                      top: { style: BorderStyle.SINGLE, size: 1, color: '1E293B' },
                      bottom: { style: BorderStyle.SINGLE, size: 1, color: '1E293B' },
                      left: { style: BorderStyle.SINGLE, size: 1, color: '1E293B' },
                      right: { style: BorderStyle.SINGLE, size: 1, color: '1E293B' }
                    },
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { after: 40 },
                        children: splitTextToRuns(code, { font: 'Courier New', color: 'E2E8F0' })
                      })
                    ]
                  })
                ]
              })
            ]
          }));
          blocks.push(new Paragraph({ text: '' }));
        }
        continue;
      }

      if (tag === 'UL' || tag === 'OL') {
        const isOrdered = tag === 'OL';
        const items = Array.from(node.children).filter(c => isElement(c) && c.tagName.toUpperCase() === 'LI');
        let idx = 1;
        for (const li of items) {
          const hasAnyText = (li.innerText || li.textContent || '').trim();
          if (!hasAnyText) continue;
          const prefixRuns = isOrdered ? [new TextRun({ text: `${idx++}. ` })] : [];
          blocks.push(new Paragraph({
            children: [...prefixRuns, ...await inlineContainerToDocxRunsAsync(li)],
            bullet: isOrdered ? undefined : { level: 0 },
            alignment: AlignmentType.LEFT,
            spacing: { after: 60 }
          }));
        }
        continue;
      }

      if (tag === 'VIDEO' || tag === 'AUDIO') {
        const mediaType = tag === 'VIDEO' ? '视频' : '音频';
        const sources = extractMediaSources(node);
        blocks.push(new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { after: 60 },
          children: [
            new TextRun({ text: `${mediaType}内容`, bold: true }),
            new TextRun({ text: '（Word 中不保留网页内联播放，导出地址供定位原媒体）', italics: true, color: '64748B' })
          ]
        }));

        if (!sources.length) {
          blocks.push(new Paragraph({
            alignment: AlignmentType.LEFT,
            spacing: { after: 120 },
            children: [new TextRun({ text: `${mediaType}源地址未检测到。`, color: 'B91C1C' })]
          }));
        } else {
          sources.forEach((src) => {
            blocks.push(new Paragraph({
              alignment: AlignmentType.LEFT,
              spacing: { after: 80 },
              children: [
                new TextRun({ text: `${mediaType}地址：`, bold: true }),
                new TextRun({ text: src, color: '1D4ED8' })
              ]
            }));
          });
        }
        continue;
      }

      if (tag === 'IMG') {
        const src = node.getAttribute('src') || '';
        const bytes = dataUrlToUint8Array(src);
        if (bytes) {
          const natural = await getImageSizeFromDataUrl(src);
          const widthAttr = parseInt(node.getAttribute('width') || '', 10);
          const heightAttr = parseInt(node.getAttribute('height') || '', 10);
          const naturalWidth = natural?.width || (Number.isFinite(widthAttr) ? widthAttr : 800);
          const naturalHeight = natural?.height || (Number.isFinite(heightAttr) ? heightAttr : 450);
          const maxWidth = 560;
          const isMath = node.getAttribute('data-math') === '1';
          const minWidth = isMath ? 1 : 120;
          let targetWidth = Number.isFinite(widthAttr) ? widthAttr : naturalWidth;
          targetWidth = Math.min(Math.max(targetWidth, minWidth), maxWidth);
          const ratio = naturalWidth > 0 ? (naturalHeight / naturalWidth) : 0.6;
          const targetHeight = Math.max(60, Math.round(targetWidth * ratio));
          const imageType = guessImageType(src);
          blocks.push(new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new ImageRun({ data: bytes, transformation: { width: targetWidth, height: targetHeight }, type: imageType })],
            spacing: { after: 180 }
          }));
        }
        continue;
      }

      if (tag === 'TABLE') {
        const tableWidthDxa = 9360;
        const rows = [];
        const trEls = Array.from(node.querySelectorAll('tr'));
        const firstRowCells = trEls.length ? Array.from(trEls[0].children).filter(c => ['TD', 'TH'].includes(c.tagName.toUpperCase())) : [];
        const tableColCount = Math.max(firstRowCells.length, 1);
        const tableColWidth = Math.floor(tableWidthDxa / tableColCount);
        const columnWidths = new Array(tableColCount).fill(tableColWidth);

        for (const tr of trEls) {
          const cellEls = Array.from(tr.children).filter(c => ['TD', 'TH'].includes(c.tagName.toUpperCase()));
          const normalizedCells = [];
          for (let i = 0; i < tableColCount; i++) {
            const cellEl = cellEls[i];
            const isHeader = cellEl ? (cellEl.tagName.toUpperCase() === 'TH') : false;
            const cellRuns = cellEl ? await inlineContainerToDocxRunsAsync(cellEl, isHeader ? { bold: true } : {}) : [new TextRun({ text: '' })];
            normalizedCells.push(new TableCell({
              width: { size: columnWidths[i], type: WidthType.DXA },
              borders: {
                top: { style: BorderStyle.SINGLE, size: 1, color: '999999' },
                bottom: { style: BorderStyle.SINGLE, size: 1, color: '999999' },
                left: { style: BorderStyle.SINGLE, size: 1, color: '999999' },
                right: { style: BorderStyle.SINGLE, size: 1, color: '999999' }
              },
              children: [new Paragraph({ alignment: isHeader ? AlignmentType.CENTER : AlignmentType.LEFT, children: cellRuns, spacing: { after: 60 } })]
            }));
          }
          if (normalizedCells.length) rows.push(new TableRow({ children: normalizedCells }));
        }

        if (rows.length) {
          blocks.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, layout: TableLayoutType.FIXED, columnWidths, rows }));
          blocks.push(new Paragraph({ text: '' }));
        }
        continue;
      }

      await walkChildren(node);
    }
  };

  await walkChildren(rootEl);
  return blocks;
}

window.clearEditor = clearEditor;
window.toggleWideMode = toggleWideMode;
window.setMobileView = setMobileView;
window.exportWord = exportWord;
window.reloadMarkdownFile = reloadMarkdownFile;
window.saveMarkdownFile = saveMarkdownFile;

sourceInput.addEventListener('input', () => {
  if (appState.isBootstrapping) return;
  appState.hasUserInteracted = true;
  updateSourceStatus('编辑中，正在按需加载增强能力');
  scheduleRender();
});

(function initViewportMode() {
  const isMobile = window.matchMedia('(max-width: 860px)').matches;
  setMobileView(isMobile ? 'preview' : 'editor');
})();

window.addEventListener('resize', () => {
  const isMobile = window.matchMedia('(max-width: 860px)').matches;
  if (!isMobile) {
    document.body.classList.remove('mobile-preview', 'mobile-editor');
    return;
  }

  document.body.classList.remove('wide-mode');
  appState.isWideMode = false;
  const headerBtn = document.getElementById('header-preview-btn');
  if (headerBtn) headerBtn.innerText = '预览模式';

  if (!document.body.classList.contains('mobile-preview') && !document.body.classList.contains('mobile-editor')) {
    setMobileView('preview');
  }
});

(async function bootstrap() {
  appState.isBootstrapping = true;
  try {
    updateProgress(3, '初始化中', '正在准备本地 Markdown 内核。');
    const [text] = await Promise.all([
      loadInitialSource(),
      ensureMarkdownCoreReady()
    ]);
    setEditorValue(text);
    await renderDocument(text);
  } catch (error) {
    updateProgress(100, '异常', `启动失败：${error.message}`);
    updateSourceStatus('启动失败');
    setEditorValue(DEFAULT_MARKDOWN);
    await ensureMarkdownCoreReady();
    await renderDocument(DEFAULT_MARKDOWN);
  } finally {
    appState.isBootstrapping = false;
  }
})();

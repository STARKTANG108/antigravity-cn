const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const bundleDir = path.join(rootDir, 'web_bundle');

console.log('--- 正在构建 Antigravity 中文汉化资源包 ---');

// 1. 读取翻译词典
const dictPath = path.join(srcDir, 'translations.json');
if (!fs.existsSync(dictPath)) {
  console.error('未找到 translations.json！');
  process.exit(1);
}
const DICT = JSON.parse(fs.readFileSync(dictPath, 'utf8'));
console.log(`成功载入 ${Object.keys(DICT).length} 条词条映射`);

// 2. 生成 i18n_zh.js
const i18nTemplate = `// Antigravity 简体中文汉化语言包
// 自动由 src/build.js 构建生成
(function () {
  "use strict";

  const DICT = ${JSON.stringify(DICT, null, 2)};

  const REGEX_RULES = [
    { pattern: /^(\\d+)\\s+files?\\s+changed$/i, replace: "$1 个文件已更改" },
    { pattern: /^(\\d+)\\s+files?$/i, replace: "$1 个文件" },
    { pattern: /^Step\\s+(\\d+)\\s+of\\s+(\\d+)$/i, replace: "第 $1 步（共 $2 步）" },
    { pattern: /^(\\d+)\\s+minutes?\\s+ago$/i, replace: "$1 分钟前" },
    { pattern: /^(\\d+)\\s+hours?\\s+ago$/i, replace: "$1 小时前" },
    { pattern: /^(\\d+)\\s+days?\\s+ago$/i, replace: "$1 天前" },
    { pattern: /^(\\d+)\\s+seconds?\\s+ago$/i, replace: "$1 秒前" },
    { pattern: /^Just now$/i, replace: "刚刚" },
    { pattern: /^Run command:\\s*(.+)$/i, replace: "运行命令：$1" },
    { pattern: /^Reading\\s+(.+)$/i, replace: "正在读取 $1" },
    { pattern: /^Editing\\s+(.+)$/i, replace: "正在编辑 $1" },
    { pattern: /^Writing\\s+(.+)$/i, replace: "正在写入 $1" },
    { pattern: /^(\\d+)\\s+earlier\\s+steps?$/i, replace: "之前 $1 个步骤" },
    { pattern: /^(\\d+)\\s+more\\s+subagents?$/i, replace: "还有 $1 个子代理" }
  ];

  function translateText(text) {
    if (!text || typeof text !== "string") return text;
    const trimmed = text.trim();
    if (!trimmed) return text;

    if (DICT.hasOwnProperty(trimmed)) {
      const match = text.match(/^(\\s*)(.*?)(\\s*)$/s);
      if (match) {
        return match[1] + DICT[trimmed] + match[3];
      }
      return DICT[trimmed];
    }

    for (let i = 0; i < REGEX_RULES.length; i++) {
      const rule = REGEX_RULES[i];
      if (rule.pattern.test(trimmed)) {
        const translated = trimmed.replace(rule.pattern, rule.replace);
        const match = text.match(/^(\\s*)(.*?)(\\s*)$/s);
        if (match) {
          return match[1] + translated + match[3];
        }
        return translated;
      }
    }

    return text;
  }

  function shouldSkipElement(elem) {
    if (!elem) return true;
    const tagName = elem.tagName;
    if (tagName === "SCRIPT" || tagName === "STYLE" || tagName === "CODE" || tagName === "PRE" || tagName === "NOSCRIPT") {
      return true;
    }
    if (elem.isContentEditable) {
      return true;
    }
    const cls = elem.className;
    if (typeof cls === "string") {
      if (cls.includes("monaco-editor") || cls.includes("cm-editor") || cls.includes("code-block") || cls.includes("font-mono")) {
        return true;
      }
    }
    return false;
  }

  function translateNode(node) {
    if (!node) return;

    if (node.nodeType === Node.TEXT_NODE) {
      if (node.parentElement && shouldSkipElement(node.parentElement)) {
        return;
      }
      const val = node.nodeValue;
      if (val && /[a-zA-Z]/.test(val)) {
        const trans = translateText(val);
        if (trans !== val) {
          node.nodeValue = trans;
        }
      }
      return;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      if (shouldSkipElement(node)) return;

      const attrs = ["placeholder", "title", "aria-label", "data-tooltip"];
      for (let i = 0; i < attrs.length; i++) {
        const attr = attrs[i];
        if (node.hasAttribute(attr)) {
          const val = node.getAttribute(attr);
          if (val && /[a-zA-Z]/.test(val)) {
            const trans = translateText(val);
            if (trans !== val) {
              node.setAttribute(attr, trans);
            }
          }
        }
      }

      const children = node.childNodes;
      for (let i = 0; i < children.length; i++) {
        translateNode(children[i]);
      }
    }
  }

  const observer = new MutationObserver(function (mutations) {
    for (let i = 0; i < mutations.length; i++) {
      const mut = mutations[i];
      if (mut.type === "childList") {
        for (let j = 0; j < mut.addedNodes.length; j++) {
          translateNode(mut.addedNodes[j]);
        }
      } else if (mut.type === "characterData") {
        const target = mut.target;
        if (target && target.parentElement && !shouldSkipElement(target.parentElement)) {
          const val = target.nodeValue;
          if (val && /[a-zA-Z]/.test(val)) {
            const trans = translateText(val);
            if (trans !== val) {
              target.nodeValue = trans;
            }
          }
        }
      }
    }
  });

  function init() {
    document.documentElement.lang = "zh-CN";
    if (document.title.includes("Antigravity")) {
      document.title = "Antigravity (简体中文版)";
    }
    translateNode(document.body);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  console.log("[Antigravity i18n] 简体中文语言包加载成功！");
})();
`;

fs.writeFileSync(path.join(bundleDir, 'i18n_zh.js'), i18nTemplate, 'utf8');
console.log('✓ 已生成 web_bundle/i18n_zh.js');

// 3. 更新 index.html 引用
const indexPath = path.join(bundleDir, 'index.html');
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  html = html.replace(/<html lang="[^"]*">/, '<html lang="zh-CN">');
  if (!html.includes('/i18n_zh.js')) {
    html = html.replace('<script src="/main.js"></script>', '<script src="/i18n_zh.js"></script>\n    <script src="/main.js"></script>');
  }
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('✓ 已验证 web_bundle/index.html');
}

console.log('--- 构建完成！ ---');

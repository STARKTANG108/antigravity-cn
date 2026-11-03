// Antigravity 简体中文汉化语言包
(function () {
  "use strict";

  const DICT = {
  "New Conversation": "新建对话",
  "New Window": "新建窗口",
  "Projects": "项目",
  "Project": "项目",
  "Scheduled Tasks": "定时任务",
  "Scheduled Task": "定时任务",
  "Automations": "自动化",
  "Automation": "自动化",
  "Customizations": "自定义配置",
  "Settings": "设置",
  "Skills": "技能",
  "Skill": "技能",
  "Plugins": "插件",
  "Plugin": "插件",
  "MCP Servers": "MCP 服务器",
  "Rules": "规则",
  "Rule": "规则",
  "Hooks": "钩子",
  "Hook": "钩子",
  "Sidecars": "Sidecar",
  "Workspaces": "工作区",
  "Workspace": "工作区",
  "Conversation History": "对话历史",
  "All Conversations": "所有对话",
  "Chief of Staff": "幕僚长",
  "Outside of project": "项目外",
  "Outside of Workspace": "工作区外",
  "New Conversation in Workspace": "在工作区中新建对话",
  "New Conversation in Project": "在项目中新建对话",
  "New Conversation Button": "新建对话按钮",
  "Create Project": "创建项目",
  "Create project": "创建项目",
  "Add Workspace": "添加工作区",
  "Open Settings": "打开设置",
  "Open Conversation History": "打开对话历史",
  "Open Conversation Picker": "打开对话选择器",
  "Open Keyboard Shortcuts": "打开快捷键设置",
  "Search Conversations": "搜索对话",
  "Search tasks...": "搜索任务...",
  "Search automations...": "搜索自动化...",
  "Search projects...": "搜索项目...",
  "Search conversations...": "搜索对话...",
  "Search tasks": "搜索任务",
  "Search MCP servers by name": "按名称搜索 MCP 服务器...",
  "Search flags": "搜索实验性特性标记",
  "No conversations yet": "暂无对话",
  "No projects yet": "暂无项目",
  "No tasks yet": "暂无任务",
  "Pinned Conversations": "已置顶对话",
  "Recent Conversations": "最近对话",
  "Current Workspace": "当前工作区",
  "Same Project": "同项目",
  "Other Projects": "其他项目",
  "Other Conversations": "其他对话",
  "Archive This Conversation": "归档此对话",
  "Pin This Conversation": "置顶此对话",
  "Unpin This Conversation": "取消置顶此对话",
  "Delete Conversation": "删除对话",
  "Rename This Conversation": "重命名此对话",
  "Sort Conversations": "排序对话",
  "Last Updated": "最近更新",
  "Last Prompt": "最新提示词",
  "Only Unread": "仅未读",
  "Only Archived": "仅已归档",
  "Only Automations": "仅自动化",
  "Only Scheduled": "仅定时任务",
  "Untitled Conversation": "无标题对话",
  "Conversation Archived": "对话已归档",
  "Conversation Unarchived": "对话已取消归档",
  "Subagents": "子代理",
  "Subagent": "子代理",
  "Background Tasks": "后台任务",
  "Background Task": "后台任务",
  "Artifacts": "产物",
  "Artifact": "产物",
  "Files Changed": "已更改文件",
  "Files changed": "已更改文件",
  "Terminals": "终端",
  "Terminal": "终端",
  "Browser": "浏览器",
  "Console": "控制台",
  "Diff": "差异对比",
  "Overview": "概览",
  "Outline": "大纲",
  "History": "历史",
  "Close Tab": "关闭标签页",
  "New Tab": "新建标签页",
  "Reopen Closed Tab": "重新打开已关闭标签页",
  "Close Terminal Tab": "关闭终端标签页",
  "New Terminal Tab": "新建终端标签页",
  "Split Terminal": "拆分终端",
  "Split Conversation Vertically": "垂直拆分对话",
  "Split Conversation Horizontally": "水平拆分对话",
  "Equalize Split Panes": "均分拆分面板",
  "Toggle Side Panel": "切换侧边面板",
  "Toggle Maximize Side Panel": "最大化/还原侧边面板",
  "Toggle Overview Panel": "切换概览面板",
  "Toggle Terminal": "切换终端",
  "Toggle File Viewer": "切换文件查看器",
  "Toggle Project Selector": "切换项目选择器",
  "Toggle Environment Selector": "切换环境选择器",
  "Toggle Model Selector": "切换模型选择器",
  "File Picker": "文件选择器",
  "Open Command Palette": "打开命令面板",
  "Open Workspace Selector": "打开工作区选择器",
  "Focus Input": "聚焦输入框",
  "Zoom In": "放大",
  "Zoom Out": "缩小",
  "Reset Zoom": "重置缩放",
  "Find in Pane": "在面板中查找",
  "Go Back": "后退",
  "Go Forward": "前进",
  "Go Back in Pane": "在面板中后退",
  "Go Forward in Pane": "在面板中前进",
  "Previous Side Panel Tab": "上一个侧边面板标签页",
  "Next Side Panel Tab": "下一个侧边面板标签页",
  "Collapse All Folders": "折叠所有文件夹",
  "Expand All Folders": "展开所有文件夹",
  "File Explorer": "文件资源管理器",
  "Select Next Conversation": "选择下一个对话",
  "Select Previous Conversation": "选择上一个对话",
  "Move Conversation Up": "上移对话",
  "Move Conversation Down": "下移对话",
  "Add to Chat": "添加到对话",
  "Quote Selection": "引用选中文本",
  "Open in Code Search": "在代码搜索中打开",
  "Comment on Selection": "评论所选内容",
  "Code Search": "代码搜索",
  "Open Commit Graph": "打开提交图谱",
  "Add Terminal": "添加终端",
  "What can we get done today?": "今天我们来做些什么？",
  "Ask anything, @ to mention, / for workflows": "向 Antigravity 提问，输入 @ 引用，输入 / 快捷指令",
  "Ask anything.": "输入任何问题。",
  "Ask Antigravity anything...": "向 Antigravity 提问...",
  "Reply...": "回复...",
  "Agent Mode": "Agent 模式",
  "Planning Mode": "规划模式",
  "Continue Response": "继续生成",
  "Accept Step": "接受步骤",
  "Reject Step": "拒绝步骤",
  "Accept": "接受",
  "Reject": "拒绝",
  "Proceed": "继续执行",
  "Always proceed": "始终继续",
  "Always Proceed": "始终继续",
  "Always proceed without review": "无需审查始终继续",
  "Request review": "请求审查",
  "Request Review": "请求审查",
  "Require Review": "需要审查",
  "Strict": "严格模式",
  "Proceed in sandbox": "在沙箱中继续",
  "Cancel": "取消",
  "Cancel Step": "取消步骤",
  "Cancel Generation": "取消生成",
  "Stop": "停止",
  "Retry": "重试",
  "Try Again": "重试",
  "Copy": "复制",
  "Copied!": "已复制！",
  "Copy Message": "复制消息",
  "Copy Link": "复制链接",
  "Copy Path": "复制路径",
  "Copy Image": "复制图片",
  "Save Image": "保存图片",
  "Save Video": "保存视频",
  "View Diff": "查看差异",
  "Open Diff": "打开差异对比",
  "Add Comment": "添加评论",
  "Save Comment": "保存评论",
  "Edit Comment": "编辑评论",
  "Thinking...": "思考中...",
  "Generating...": "生成中...",
  "Working on task...": "正在处理任务...",
  "Thought Process": "思考过程",
  "System Message": "系统消息",
  "Run command": "运行命令",
  "Read file": "读取文件",
  "Write file": "写入文件",
  "Edit file": "编辑文件",
  "Agent Edits": "Agent 编辑",
  "Staged Changes": "暂存更改",
  "Branch Changes": "分支更改",
  "View site information": "查看站点信息",
  "Embedded web preview": "嵌入式 Web 预览",
  "Web Preview": "Web 预览",
  "New Preview": "新建预览",
  "New Browser": "新建浏览器",
  "Browser Use": "浏览器操作",
  "Tool Output": "工具输出",
  "Task Log": "任务日志",
  "Background Task Output": "后台任务输出",
  "View Logs": "查看日志",
  "Run Now": "立即运行",
  "Delete Task": "删除任务",
  "Downloads": "下载",
  "Show in folder": "在访达中显示",
  "Cancel download": "取消下载",
  "Remove from list": "从列表中移除",
  "Back": "返回",
  "Forward": "前进",
  "Add screenshot to conversation": "将截图添加到对话",
  "Open in external browser": "在外部浏览器中打开",
  "External Browser": "外部浏览器",
  "Open System Browser": "打开系统浏览器",
  "Reload": "重新加载",
  "Open in new tab": "在新标签页打开",
  "Comment": "评论",
  "Quote": "引用",
  "Quick Start": "快速上手",
  "Get Started": "开始使用",
  "Get started": "开始使用",
  "No matching results": "没有找到匹配结果",
  "Searching…": "正在搜索…",
  "Searching...": "正在搜索...",
  "Something went wrong!": "出现了一些问题！",
  "Not Found": "未找到",
  "to exit": "退出",
  "Good Response": "回答满意",
  "Bad Response": "回答不满意",
  "Fork Conversation": "分叉对话",
  "Privacy Notice": "隐私声明",
  "Authentication Required": "需要身份验证",
  "All Files": "所有文件",
  "Export Artifact": "导出产物",
  "Confirm Browser Interaction": "确认浏览器交互",
  "Mention Page": "引用页面",
  "Capture Screenshot": "捕获屏幕截图",
  "Capture Console Logs": "捕获控制台日志",
  "Always Allow": "始终允许",
  "Allow Once": "允许一次",
  "Account": "账户",
  "General": "通用",
  "Application": "应用程序",
  "Appearance": "外观",
  "Developer": "开发者",
  "Notifications": "通知",
  "Shortcuts": "快捷键",
  "Project 4K": "Project 4K",
  "Browser Actuation Permissions": "浏览器操作权限",
  "Tool Permissions": "工具权限",
  "File Permissions": "文件权限",
  "Network Permissions": "网络权限",
  "Terminal Commands": "终端命令",
  "Commands Outside Sandbox": "沙箱外命令",
  "MCP Tools": "MCP 工具",
  "Add MCP Servers": "添加 MCP 服务器",
  "Manage Hooks": "管理钩子",
  "Build With Google Plugins": "Google 官方插件",
  "GitHub Permissions": "GitHub 权限",
  "Remote Control": "远程控制",
  "Remote Agents Data": "远程 Agent 数据",
  "Danger Zone": "危险区域",
  "Plan": "方案与订阅",
  "Model Credits": "模型额度",
  "Sound": "提示音",
  "Organization Allowed Domains (Read-Only)": "组织允许域名（只读）",
  "Agent Behavior": "Agent 行为",
  "Terminal & Tooling Permissions": "终端与工具权限",
  "Permission Details": "权限详情",
  "Default Customizations": "默认自定义配置",
  "Token Usage": "Token 使用量",
  "Google3 Configuration": "Google3 配置",
  "Light Theme": "浅色主题",
  "Dark Theme": "深色主题",
  "Theme": "主题",
  "Theme Mode": "主题模式",
  "Dark": "深色",
  "Light": "浅色",
  "System": "跟随系统",
  "Default Light": "默认浅色",
  "Default Dark": "默认深色",
  "Chat Width": "对话宽度",
  "Chat Input": "对话输入框",
  "Model Selection": "模型选择",
  "Tool Execution Policy": "工具执行策略",
  "Terminal Sandbox": "终端沙箱",
  "Non-Workspace File Access": "非工作区文件访问",
  "Internet Access Policy": "互联网访问策略",
  "Permission Grants": "权限授权",
  "Command Allowlist / Denylist": "命令允许/拒绝列表",
  "Browser Allowlist": "浏览器白名单",
  "Artifact Review Mode": "产物审查模式",
  "Keep computer awake": "保持电脑清醒",
  "Prevent Sleep": "防止电脑休眠",
  "Run in background": "后台运行",
  "Keep In Menu Bar": "常驻菜单栏",
  "Check for updates": "检查更新",
  "Check For Updates": "检查更新",
  "Update Available": "有可用更新",
  "Downloading Update": "正在下载更新",
  "Install Update": "安装更新",
  "Installing Update": "正在安装更新",
  "Enable Telemetry": "启用遥测",
  "Marketing Emails": "营销邮件",
  "Sign In": "登录",
  "Sign Out": "退出登录",
  "Not Signed In": "未登录",
  "Your Plan": "当前方案",
  "Select your license": "选择您的许可证",
  "Subscription": "订阅",
  "Pay As You Go": "按量付费",
  "Delete All Remote Agents Data?": "删除所有远程 Agent 数据？",
  "Delete All Remote Agents Data": "删除所有远程 Agent 数据",
  "Delete All Data": "删除所有数据",
  "Open in Remote Control": "在远程控制中打开",
  "Enable Remote Control": "启用远程控制",
  "Device Name": "设备名称",
  "Reopen Locally": "在本地重新打开",
  "Advanced Settings": "高级设置",
  "Always Ask": "始终询问",
  "Send Immediately": "立即发送",
  "Command Setup Script": "命令初始化脚本",
  "Enable Terminal Sandbox": "启用终端沙箱",
  "Sandbox Allow Network": "沙箱允许网络访问",
  "Terminal Command Auto Execution": "终端命令自动执行",
  "Review Policy": "审查策略",
  "Conversation Steps": "对话步骤",
  "Custom Context Menus": "自定义上下文菜单",
  "Screen Reader Mode": "屏幕阅读器模式",
  "Conversation Width": "对话宽度",
  "Terminal Placement": "终端放置位置",
  "Bottom Panel": "底部面板",
  "Side Panel": "侧边面板",
  "Markdown Artifact Width": "Markdown 产物宽度",
  "Open Links In": "链接打开方式",
  "Enable Browser Tools": "启用浏览器工具",
  "Voice Mode": "语音模式",
  "Provide Feedback": "提供反馈",
  "Give Feedback": "提供反馈",
  "Download Diagnostics": "下载诊断信息",
  "Restart Main Language Server": "重启主语言服务",
  "Manage Permissions": "管理权限",
  "This Computer": "此电脑",
  "Inherit Global": "继承全局设置",
  "Global Permissions": "全局权限",
  "File Reads": "文件读取",
  "File Writes": "文件写入",
  "File Access Rules": "文件访问规则",
  "Network Access Rules": "网络访问规则",
  "Upload Files": "上传文件",
  "Add Resource": "添加资源",
  "Add Folder": "添加文件夹",
  "All Workspaces": "所有工作区",
  "Show Less": "显示更少",
  "Show All": "显示全部",
  "Recent Files": "最近文件",
  "Maximize Width": "最大化宽度",
  "Minimize Width": "最小化宽度",
  "No Model Selected": "未选择模型",
  "Enter device name...": "输入设备名称...",
  "Enter project name...": "输入项目名称...",
  "Enter workspace name...": "输入工作区名称...",
  "Enter a prompt for the agent to run...": "输入要让 Agent 执行的任务提示词...",
  "Enter authorization code...": "输入授权码...",
  "Filter resources...": "筛选资源...",
  "Type absolute path or navigate folders...": "输入绝对路径或浏览文件夹...",
  "Search file contents...": "搜索文件内容...",
  "Search for commands...": "搜索命令...",
  "Search for conversations...": "搜索对话...",
  "Manage your plan, credentials, and general preferences.": "管理您的方案、凭据和常规首选项。",
  "Every command requires approval.": "每个命令都需要您的批准才执行。",
  "Ask before sensitive operations.": "在执行敏感操作前进行确认询问。",
  "Automatically decide if commands run.": "根据上下文自动决定命令是否运行。",
  "Run all commands without restrictions.": "无限制运行所有命令（请谨慎使用）。",
  "Agent always asks for review.": "Agent 始终在产物生成后请求审查。",
  "Choose between the Default and Project 4K experience.": "在默认体验与 Project 4K 体验之间切换。",
  "Configure when follow-up messages are sent.": "配置后续消息的发送时机。",
  "Send messages with the keyboard's Enter key instead of starting a new line.": "使用键盘回车键 (Enter) 发送消息，而不是换行。",
  "A shell setup script run before every command the agent executes.": "Agent 每次执行命令前运行的 Shell 初始化脚本。",
  "Run terminal commands with sandbox restrictions.": "在沙箱安全限制下运行终端命令。",
  "Allow sandboxed commands to make network requests.": "允许沙箱内的命令发起网络请求。",
  "Play a sound when your action is needed or the agent finishes.": "当需要您介入操作或 Agent 完成任务时播放提示音。",
  "Which workspace the New Conversation button and keyboard shortcut start you in.": "新建对话按钮及快捷键默认打开的目标工作区。",
  "Start Voice Recording": "开始语音输入",
  "Stop Voice Recording": "停止语音输入",
  "Toggle Voice Recording": "切换语音输入",
  "Mute Voice Mic": "麦克风静音",
  "Mute Voice Speaker": "扬声器静音",
  "Enter to Send": "按 Enter 发送",
  "Shift + Enter for new line": "Shift + Enter 换行",
  "Enter Fullscreen": "进入全屏",
  "Exit Fullscreen": "退出全屏",
  "Save": "保存",
  "Apply": "应用",
  "Close": "关闭",
  "Delete": "删除",
  "Remove": "移除",
  "Edit": "编辑",
  "Update": "更新",
  "Download": "下载",
  "Upload": "上传",
  "Confirm": "确认",
  "Reset": "重置",
  "Clear": "清空",
  "Filter": "筛选",
  "Select": "选择",
  "Select all": "全选",
  "Select All": "全选",
  "Undo": "撤销",
  "Redo": "重做",
  "Cut": "剪切",
  "Paste": "粘贴",
  "Loading...": "加载中...",
  "Loading media...": "正在加载媒体...",
  "Taking longer than usual to load": "加载时间比平常稍长",
  "Failed to parse settings. Fix and restart.": "设置解析失败，请修复后重启。"
};

  const REGEX_RULES = [
    { pattern: /^(\d+)\s+files?\s+changed$/i, replace: "$1 个文件已更改" },
    { pattern: /^(\d+)\s+files?$/i, replace: "$1 个文件" },
    { pattern: /^Step\s+(\d+)\s+of\s+(\d+)$/i, replace: "第 $1 步（共 $2 步）" },
    { pattern: /^(\d+)\s+minutes?\s+ago$/i, replace: "$1 分钟前" },
    { pattern: /^(\d+)\s+hours?\s+ago$/i, replace: "$1 小时前" },
    { pattern: /^(\d+)\s+days?\s+ago$/i, replace: "$1 天前" },
    { pattern: /^(\d+)\s+seconds?\s+ago$/i, replace: "$1 秒前" },
    { pattern: /^Just now$/i, replace: "刚刚" },
    { pattern: /^Run command:\s*(.+)$/i, replace: "运行命令：$1" },
    { pattern: /^Reading\s+(.+)$/i, replace: "正在读取 $1" },
    { pattern: /^Editing\s+(.+)$/i, replace: "正在编辑 $1" },
    { pattern: /^Writing\s+(.+)$/i, replace: "正在写入 $1" },
    { pattern: /^(\d+)\s+earlier\s+steps?$/i, replace: "之前 $1 个步骤" },
    { pattern: /^(\d+)\s+more\s+subagents?$/i, replace: "还有 $1 个子代理" }
  ];

  function translateText(text) {
    if (!text || typeof text !== "string") return text;
    const trimmed = text.trim();
    if (!trimmed) return text;

    if (DICT.hasOwnProperty(trimmed)) {
      const match = text.match(/^(\s*)(.*?)(\s*)$/s);
      if (match) {
        return match[1] + DICT[trimmed] + match[3];
      }
      return DICT[trimmed];
    }

    for (let i = 0; i < REGEX_RULES.length; i++) {
      const rule = REGEX_RULES[i];
      if (rule.pattern.test(trimmed)) {
        const translated = trimmed.replace(rule.pattern, rule.replace);
        const match = text.match(/^(\s*)(.*?)(\s*)$/s);
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

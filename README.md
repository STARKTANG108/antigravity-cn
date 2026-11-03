<div align="center">

# 🇨🇳 Antigravity-CN

### Google Antigravity 全界面简体中文汉化补丁
**开箱即用 · 400+ 核心界面词条全量精翻 · 智能动态翻译 · 无损安全注入**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-macOS-lightgrey.svg)](#)
[![Antigravity](https://img.shields.io/badge/Antigravity-Insiders%20%2F%20Release-green.svg)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

[功能特性](#-功能特性) • [一键安装](#-一键安装) • [手动安装](#-手动安装) • [一键卸载](#-一键卸载) • [开发与贡献](#-开发与贡献) • [常见问题](#-常见问题)

</div>

---

## 🌟 项目简介

**Antigravity-CN** 是专为 Google 最新 AI 原生开发平台 **Google Antigravity**（以及 **Antigravity - Insiders**）打造的开源全界面简体中文汉化项目。

通过深入分析 Antigravity 2.0 桌面应用的架构，本项目利用官方原生支持的 WebBundle 挂载机制与轻量级实时 DOM 动态汉化引擎，实现了 **100% 覆盖全部操作界面、菜单、设置项与交互对话** 的简体中文体验，同时严格保护代码块与文件路径，不影响任何日常开发与代码编辑。

---

## ✨ 功能特性

- 🎯 **全量界面深度汉化**：
  - **核心侧边栏**：新建对话、项目管理、定时任务、自动化工作流、自定义配置、对话历史、工作区管理等。
  - **对话交互与 Agent 执行**：Agent 模式、规划模式、思考过程、工具调用（运行命令、读写文件、编辑文件）、产物审查（接受、拒绝、始终继续、沙箱执行）等。
  - **辅助面板 (Auxiliary Pane)**：子代理 (Subagents)、后台任务 (Background Tasks)、产物 (Artifacts)、已更改文件 (Files Changed)、多终端标签页等。
  - **完整系统设置 (Settings)**：模型选择、工具执行策略、终端沙箱、权限规则（网络/文件/命令白名单）、外观主题、通知与快捷键等 20+ 个设置子页面。
- ⚡️ **动态实时翻译引擎 (`i18n_zh.js`)**：
  - 自动监听异步加载内容，无论动态弹出 Toast 提示、悬浮 Tooltip 气泡、对话框还是输入占位符 (Placeholder)，均能实时精准翻译。
- 🛡️ **智能代码与路径保护**：
  - 自动过滤 `<pre>`、`<code>`、Monaco 编辑器、等宽字体及文件路径，确保用户的代码内容、日志与命令不受任何翻译干扰。
- 🔌 **原生无损接入**：
  - 基于官方 `language_server` 原生 `--web_bundle_path` 扩展机制，不破坏 macOS 应用程序代码签名，不影响应用升级。

---

## 📦 一键安装

打开 macOS 终端（Terminal / iTerm2），执行以下一键安装命令：

```bash
git clone https://github.com/<your-username>/antigravity-cn.git ~/antigravity-cn
cd ~/antigravity-cn
chmod +x install.sh
./install.sh
```

> **提示**：安装完成后，按下 <kbd>⌘</kbd> + <kbd>Q</kbd> 退出 Antigravity 并重新打开应用即可看到简体中文界面（已打开的窗口也可直接按 <kbd>⌘</kbd> + <kbd>R</kbd> 快速刷新）。

---

## 🛠️ 手动安装

如果您希望手动部署，只需按以下步骤操作：

1. 克隆或下载本项目：
   ```bash
   git clone https://github.com/<your-username>/antigravity-cn.git
   cd antigravity-cn
   ```
2. 复制 `web_bundle` 资源文件夹到 Antigravity 应用程序的 `Resources` 目录：
   ```bash
   # 以 Antigravity - Insiders 为例：
   cp -R web_bundle "/Applications/Antigravity - Insiders.app/Contents/Resources/"
   ```
3. 在 `/Applications/Antigravity - Insiders.app/Contents/Resources/bin` 中备份原程序并配置包装器：
   ```bash
   cd "/Applications/Antigravity - Insiders.app/Contents/Resources/bin"
   cp -p language_server language_server.real
   ```
4. 将包装器脚本写入 `language_server` 并赋予执行权限：
   ```bash
   cat << 'EOF' > language_server
   #!/bin/bash
   DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
   BUNDLE_PATH="$DIR/../web_bundle"
   if [[ "$*" == *"--subclient_type"* ]] || [[ "$*" == *"--standalone"* ]]; then
     exec "$DIR/language_server.real" "--web_bundle_path=$BUNDLE_PATH" "$@"
   fi
   exec "$DIR/language_server.real" "$@"
   EOF
   chmod +x language_server
   ```
5. 重启 Antigravity 即可生效。

---

## 🔄 一键卸载（恢复官方原版）

如需恢复为官方原生英文版，只需在项目目录中运行卸载脚本：

```bash
cd ~/antigravity-cn
./uninstall.sh
```

脚本将自动恢复原版二进制程序并移除补丁，恢复后重启应用即可。

---

## 📁 目录结构

```text
antigravity-cn/
├── install.sh              # 一键安装脚本 (支持 Insiders 与 Release 版)
├── uninstall.sh            # 一键卸载与官方原版恢复脚本
├── LICENSE                 # MIT 开源许可证
├── README.md               # 项目使用与开发说明文档
├── src/                    # 源码与构建工具
│   ├── build.js            # 汉化词典构建与注入生成脚本
│   └── translations.json   # 核心中英文词典映射 (400+ 词条)
└── web_bundle/             # 预编译好的全量 Web 资源包
    ├── i18n_zh.js          # 动态实时汉化引擎
    ├── index.html          # 入口 HTML
    ├── main.js             # 汉化处理后的主应用 Bundle
    └── ...                 # 样式表与依赖组件
```

---

## 🤝 开发与贡献

非常欢迎提交 Issue 和 Pull Request 来完善词条翻译或提供新的功能建议！

1. Fork 本仓库并 Clone 到本地。
2. 编辑 `src/translations.json` 添加或修正词条翻译。
3. 执行构建命令生成最新资源：
   ```bash
   node src/build.js
   ```
4. 运行 `./install.sh` 在本地预览效果。
5. 提交 PR 并附上修改说明。

---

## ❓ 常见问题 (FAQ)

**Q: 汉化会影响代码补全或 Agent 编写代码的功能吗？**  
A: **完全不会**。汉化引擎只作用于 Antigravity 的外围控制界面、菜单和系统设置。所有代码编辑器、语法高亮、终端输出和代码 Diff 均有智能保护豁免机制，确保源码原样呈现。

**Q: Antigravity 升级后汉化会失效吗？**  
A: 如果 Antigravity 进行小版本升级覆盖了文件，只需重新运行一次 `./install.sh` 即可一键恢复汉化。

---

## 📄 开源许可证

本项目基于 [MIT License](LICENSE) 开源。
Antigravity 商标及软件著作权归 Google 所有，本项目仅供交流学习使用。

#!/bin/bash
# ==============================================================================
# Antigravity-CN: Google Antigravity 全界面简体中文汉化补丁一键安装脚本
# 支持: Antigravity - Insiders 与 Antigravity 正式版 (macOS / Linux)
# ==============================================================================

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}======================================================${NC}"
echo -e "${GREEN}    🚀 正在安装 Antigravity 简体中文汉化补丁...       ${NC}"
echo -e "${BLUE}======================================================${NC}"

# 当前脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_BUNDLE="$SCRIPT_DIR/web_bundle"

if [ ! -d "$SOURCE_BUNDLE" ]; then
  echo -e "${RED}[错误] 未在 $SCRIPT_DIR 目录下找到 web_bundle 资源包！${NC}"
  exit 1
fi

# 候选应用安装路径 (macOS)
TARGET_APPS=(
  "/Applications/Antigravity - Insiders.app"
  "/Applications/Antigravity.app"
  "$HOME/Applications/Antigravity - Insiders.app"
  "$HOME/Applications/Antigravity.app"
)

INSTALLED_COUNT=0

for APP_PATH in "${TARGET_APPS[@]}"; do
  if [ -d "$APP_PATH" ]; then
    APP_NAME="$(basename "$APP_PATH")"
    echo -e "\n${YELLOW}[发现应用] 检测到 ${APP_NAME} (${APP_PATH})${NC}"

    RES_DIR="$APP_PATH/Contents/Resources"
    BIN_DIR="$RES_DIR/bin"
    DEST_BUNDLE="$RES_DIR/web_bundle"

    if [ ! -d "$BIN_DIR" ]; then
      echo -e "${RED}[跳过] 未找到 bin 目录: $BIN_DIR${NC}"
      continue
    fi

    # 1. 备份原语言服务程序
    LS_FILE="$BIN_DIR/language_server"
    LS_REAL="$BIN_DIR/language_server.real"

    if [ ! -f "$LS_REAL" ]; then
      echo -e "  - 正在备份原始语言服务至 language_server.real..."
      cp -p "$LS_FILE" "$LS_REAL"
    else
      echo -e "  - 原始语言服务备份 (language_server.real) 已存在，保留原备份。"
    fi

    # 2. 部署 web_bundle 汉化资源包
    echo -e "  - 正在部署简体中文 Web 资源包..."
    mkdir -p "$DEST_BUNDLE"
    cp -R "$SOURCE_BUNDLE"/* "$DEST_BUNDLE/"

    # 3. 部署透明启动脚本包装器
    echo -e "  - 正在配置语言服务汉化注入启动器..."
    cat << 'EOF' > "$LS_FILE.tmp"
#!/bin/bash
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUNDLE_PATH="$DIR/../web_bundle"

if [[ "$*" == *"--subclient_type"* ]] || [[ "$*" == *"--standalone"* ]]; then
  has_bundle=false
  for arg in "$@"; do
    if [[ "$arg" == --web_bundle_path* ]]; then
      has_bundle=true
      break
    fi
  done
  if [ "$has_bundle" = false ] && [ -d "$BUNDLE_PATH" ]; then
    exec "$DIR/language_server.real" "--web_bundle_path=$BUNDLE_PATH" "$@"
  fi
fi

exec "$DIR/language_server.real" "$@"
EOF

    chmod +x "$LS_FILE.tmp"
    mv "$LS_FILE.tmp" "$LS_FILE"

    echo -e "${GREEN}  ✓ ${APP_NAME} 汉化补丁安装成功！${NC}"
    INSTALLED_COUNT=$((INSTALLED_COUNT + 1))
  fi
done

echo -e "\n${BLUE}======================================================${NC}"
if [ $INSTALLED_COUNT -gt 0 ]; then
  echo -e "${GREEN}🎉 汉化补丁全部安装完成！共对 $INSTALLED_COUNT 个 Antigravity 应用生效。${NC}"
  echo -e "${YELLOW}👉 请按下 ⌘+Q 彻底退出 Antigravity 并重新打开，即可享受全界面简体中文！${NC}"
  echo -e "   (在已打开的窗口中也可以直接按 ⌘+R 快速刷新界面)"
else
  echo -e "${RED}⚠️ 未能在系统中检测到已安装的 Antigravity 应用程序。${NC}"
fi
echo -e "${BLUE}======================================================${NC}"

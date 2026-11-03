#!/bin/bash
# ==============================================================================
# Antigravity-CN: 简体中文汉化补丁一键还原/卸载脚本
# ==============================================================================

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}======================================================${NC}"
echo -e "${YELLOW}    正在卸载 Antigravity 简体中文补丁并还原官方英文... ${NC}"
echo -e "${BLUE}======================================================${NC}"

TARGET_APPS=(
  "/Applications/Antigravity - Insiders.app"
  "/Applications/Antigravity.app"
  "$HOME/Applications/Antigravity - Insiders.app"
  "$HOME/Applications/Antigravity.app"
)

RESTORED_COUNT=0

for APP_PATH in "${TARGET_APPS[@]}"; do
  if [ -d "$APP_PATH" ]; then
    APP_NAME="$(basename "$APP_PATH")"
    RES_DIR="$APP_PATH/Contents/Resources"
    BIN_DIR="$RES_DIR/bin"
    DEST_BUNDLE="$RES_DIR/web_bundle"
    LS_FILE="$BIN_DIR/language_server"
    LS_REAL="$BIN_DIR/language_server.real"

    if [ -f "$LS_REAL" ]; then
      echo -e "\n[还原] 正在恢复 ${APP_NAME} 的原始语言服务..."
      mv -f "$LS_REAL" "$LS_FILE"
      chmod +x "$LS_FILE"
      echo -e "${GREEN}  ✓ 语言服务已恢复官方原版。${NC}"
    fi

    if [ -d "$DEST_BUNDLE" ]; then
      echo -e "  - 正在移除 web_bundle 补丁文件..."
      rm -rf "$DEST_BUNDLE"
      echo -e "${GREEN}  ✓ 补丁文件已清除。${NC}"
    fi

    RESTORED_COUNT=$((RESTORED_COUNT + 1))
  fi
done

echo -e "\n${BLUE}======================================================${NC}"
if [ $RESTORED_COUNT -gt 0 ]; then
  echo -e "${GREEN}🎉 卸载完成！已恢复为官方原生英文版。${NC}"
  echo -e "${YELLOW}👉 请重启 Antigravity 以使恢复生效。${NC}"
else
  echo -e "${YELLOW}未发现已打补丁的 Antigravity 应用程序。${NC}"
fi
echo -e "${BLUE}======================================================${NC}"

---
title: Chrome 插件开发指南
date: 2025-03-20
---

# 是什么

基于浏览器扩展机制，使用 Web 技术开发（HTML/CSS/JS）用于增强用户体验，完成特定任务的程序。

在 Chrome 地址栏输入 `chrome://extensions/` 访问扩展程序管理页面。

---

# 核心能力

## 修改网页内容
- 动态修改网页 HTML/CSS/JavaScript
- **典型应用**：
  - AdBlock：移除网页广告
  - Dark Reader：暗黑模式转换

## 与浏览器交互
- 操作标签页/书签/历史记录
- **典型应用**：
  - OneTab：标签页合并管理
  - Momentum：个性化仪表盘

## 提供额外功能
- **功能扩展**：
  - Grammarly：实时语法检查
  - LastPass：密码自动填充

---

# 开发指南

## 核心组件
```json
{
  "manifest_version": 3,
  "background": {"service_worker": "background.js"},
  "content_scripts": [{"matches": ["<all_urls>"], "js": ["content.js"]}]
}
```

## 核心文件
- `manifest.json`（🌟必选）
- Background Script（后台脚本）
- Content Script（内容脚本） 
- Popup（弹出页面）

## 调试方式
```bash
# Popup 调试
chrome://extensions/ -> 点击插件图标

# Service Worker 调试
chrome://extensions/ -> 点击背景页链接

# Content Script
直接使用网页控制台
```
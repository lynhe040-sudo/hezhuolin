# 何卓霖个人网站

一个简洁美观的个人网站，包含个人展示页面、AI对话功能和留言板。

## 🌐 网站功能

- 🏠 **首页展示**：照片轮播、个人简介、社交链接
- 🤖 **AI对话页面**：类似ChatGPT的聊天界面
- 💬 **留言板**：公开留言板，支持匿名留言

## 📁 文件结构

```
何卓霖website/
├── index.html          # 首页
├── chat.html           # AI对话页面
├── guestbook.html      # 留言页面
├── styles.css          # 样式文件
├── script.js           # 首页脚本
├── chat.js            # AI对话脚本
├── guestbook.js       # 留言板脚本
├── social-links.js    # 社交媒体链接脚本
├── fix-paths.js      # 路径自动修复脚本
├── images/            # 图片文件夹
│   ├── avatar.jpg
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   └── photo4.jpg
├── robots.txt         # 搜索引擎爬虫规则
├── sitemap.xml        # 网站地图
└── vercel.json        # Vercel配置文件
```

## 🚀 快速部署

### GitHub Pages

1. 将整个文件夹上传到GitHub仓库
2. Settings → Pages → Source选择main分支
3. 等待几分钟，访问：`https://用户名.github.io/仓库名/`

### Vercel

1. 登录 https://vercel.com
2. 点击"New Project"
3. 导入GitHub仓库或拖拽文件夹上传
4. 自动部署完成

## ⚙️ 配置说明

- **图片路径**：使用相对路径 `./images/photo1.jpg`
- **页面链接**：使用相对路径 `./index.html`
- **自动路径修复**：`fix-paths.js` 会自动处理GitHub Pages的路径问题

## 📝 注意事项

- 确保所有图片文件都在 `images/` 文件夹中
- 确保所有文件都上传到仓库
- 如果使用GitHub Pages，仓库必须是Public（免费版）

## 🔧 技术栈

- 纯HTML/CSS/JavaScript
- 无需后端服务器
- 使用localStorage存储留言数据

## 📄 许可证

© 2025 何卓霖. All Rights Reserved.

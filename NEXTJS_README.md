# Next.js 项目说明

## 项目结构

```
├── pages/              # Next.js 页面
│   ├── _app.tsx       # 应用入口
│   ├── index.tsx      # 首页
│   ├── chat.tsx       # AI对话页面
│   └── guestbook.tsx  # 留言板页面
├── components/         # React 组件
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── PhotoCarousel.tsx
│   ├── AboutSection.tsx
│   ├── SocialLinks.tsx
│   ├── ChatInterface.tsx
│   └── GuestbookInterface.tsx
├── styles/            # 样式文件
│   └── globals.css
├── public/            # 静态资源
│   └── images/       # 图片文件
├── package.json
├── next.config.js
└── tsconfig.json (可选)
```

## 安装依赖

```bash
npm install
# 或
yarn install
```

## 运行开发服务器

```bash
npm run dev
# 或
yarn dev
```

访问 http://localhost:3000

## 构建生产版本

```bash
npm run build
```

构建后会生成 `out/` 文件夹（静态导出）

## 部署

Next.js 配置为静态导出模式，可以直接部署到：
- GitHub Pages
- Vercel (自动检测Next.js)
- Netlify
- 任何静态文件托管服务

## 注意事项

1. 图片已复制到 `public/images/` 目录
2. 所有页面已转换为React组件
3. 样式文件已移至 `styles/globals.css`
4. 配置为静态导出（`output: 'export'`）



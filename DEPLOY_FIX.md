# GitHub Pages 和 Vercel 部署问题排查指南

## 🔍 常见问题

### 问题1：图片不显示

**可能原因：**
1. 图片文件太大（GitHub限制100MB，建议单文件<50MB）
2. 图片文件没有上传到Git仓库
3. 路径问题（GitHub Pages需要相对路径）

**解决方案：**

**A. 检查图片是否上传：**
```bash
# 在Git仓库中检查
git ls-files images/
```

如果看不到图片文件，说明没有上传，需要：
```bash
git add images/
git commit -m "Add images"
git push
```

**B. 如果图片太大：**
- 压缩图片（使用在线工具或Photoshop）
- 或者使用Git LFS（Large File Storage）

**C. 检查路径：**
- 确保路径是相对路径：`images/photo1.jpg`
- 不是绝对路径：`/images/photo1.jpg` 或 `C:/images/photo1.jpg`

### 问题2：页面无法跳转

**可能原因：**
1. GitHub Pages的base URL问题
2. 相对路径问题
3. 文件名大小写问题

**解决方案：**

**A. GitHub Pages Base URL：**
如果仓库名不是 `用户名.github.io`，需要在HTML中添加base URL：

```html
<head>
    <base href="/仓库名/">
</head>
```

或者在Vercel中不需要，因为Vercel会自动处理。

**B. 确保所有页面文件都在根目录：**
- index.html
- chat.html
- guestbook.html
- styles.css
- script.js
- chat.js
- guestbook.js
- social-links.js
- images/ 文件夹

**C. 文件名大小写：**
- 确保文件名大小写一致
- `index.html` 不是 `Index.html`

## ✅ 完整检查清单

### 上传前检查：

1. ✅ 所有图片文件都在 `images/` 文件夹中
2. ✅ 图片路径使用相对路径：`images/photo1.jpg`
3. ✅ 所有HTML文件在同一目录
4. ✅ CSS和JS文件路径正确
5. ✅ 图片文件大小 < 50MB
6. ✅ 文件名没有特殊字符

### 上传后检查：

1. ✅ 在GitHub仓库中看到所有文件
2. ✅ images文件夹中有所有图片
3. ✅ 访问网站，检查浏览器控制台（F12）是否有404错误
4. ✅ 检查图片URL是否正确

## 🛠️ 快速修复

### 方法1：确保所有文件上传

```bash
# 检查哪些文件没有被追踪
git status

# 添加所有文件
git add .

# 提交
git commit -m "Fix: Add all files"

# 推送
git push
```

### 方法2：检查图片路径

在浏览器中按F12打开开发者工具，查看Console标签：
- 如果有404错误，说明路径不对
- 检查图片的实际URL

### 方法3：GitHub Pages 特殊处理

如果使用GitHub Pages且仓库名不是 `用户名.github.io`：

需要修改所有HTML文件，添加base tag：

```html
<head>
    <base href="/你的仓库名/">
    ...
</head>
```

或者在Vercel部署，不需要base tag。

## 📝 建议的部署步骤

### GitHub Pages：
1. 确保仓库是Public
2. 所有文件上传到仓库
3. Settings → Pages → Source选择main分支
4. 等待几分钟
5. 访问：`https://用户名.github.io/仓库名/`

### Vercel：
1. 登录Vercel
2. 导入GitHub仓库或拖拽文件夹
3. 自动部署，无需配置
4. 访问提供的URL

## 🔧 调试技巧

**在浏览器中：**
1. 按F12打开开发者工具
2. 查看Console标签（看错误信息）
3. 查看Network标签（看哪些文件加载失败）
4. 检查图片URL是否正确

**常见的错误：**
- 404 Not Found → 文件不存在或路径错误
- CORS错误 → 跨域问题（通常GitHub Pages不会有）
- 403 Forbidden → 文件权限问题

## 💡 如果还是不行

告诉我具体的错误信息：
1. 浏览器控制台（F12）的错误信息
2. 图片的URL是什么
3. 使用的是GitHub Pages还是Vercel
4. 仓库的URL是什么

我可以帮你进一步排查！



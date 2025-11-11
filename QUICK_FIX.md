# GitHub/Vercel 部署问题快速修复指南

## 🔧 已添加的修复

我已经添加了 `fix-paths.js` 文件，它会自动检测并修复路径问题。

## ✅ 需要检查的事项

### 1. 确保所有文件都上传了

**检查清单：**
- [ ] index.html
- [ ] chat.html
- [ ] guestbook.html
- [ ] styles.css
- [ ] script.js
- [ ] chat.js
- [ ] guestbook.js
- [ ] social-links.js
- [ ] fix-paths.js（新增）
- [ ] images/avatar.jpg
- [ ] images/photo1.jpg
- [ ] images/photo2.jpg
- [ ] images/photo3.jpg
- [ ] images/photo4.jpg

### 2. GitHub Pages 特殊处理

**如果仓库名不是 `用户名.github.io`：**

需要在仓库设置中：
1. Settings → Pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 "main" 或 "master"
4. 确保根目录是 `/ (root)`

**或者手动添加base tag：**

在所有HTML文件的 `<head>` 中添加：
```html
<base href="/你的仓库名/">
```

但现在已经不需要了，`fix-paths.js` 会自动处理。

### 3. Vercel 部署

Vercel通常不需要特殊配置，但确保：
- 所有文件都在根目录
- 没有 `.gitignore` 忽略图片文件

## 🔍 调试步骤

### 步骤1：检查文件是否上传

在GitHub仓库页面：
1. 确认能看到 `images/` 文件夹
2. 点击进入 `images/` 文件夹
3. 确认能看到所有5张图片

### 步骤2：检查图片URL

在部署的网站上：
1. 右键点击不显示的图片
2. 选择"检查"或"审查元素"
3. 查看图片的 `src` 属性
4. 检查URL是否正确

**正确的URL应该是：**
- GitHub Pages: `https://用户名.github.io/仓库名/images/photo1.jpg`
- Vercel: `https://项目名.vercel.app/images/photo1.jpg`

### 步骤3：浏览器控制台检查

1. 按F12打开开发者工具
2. 切换到"Console"标签
3. 查看是否有404错误
4. 记录错误信息

### 步骤4：网络检查

1. 按F12打开开发者工具
2. 切换到"Network"标签
3. 刷新页面
4. 查看哪些文件加载失败（红色）

## 🛠️ 常见问题修复

### 问题1：图片显示404

**原因：** 图片文件没有上传

**解决：**
```bash
git add images/
git commit -m "Add images"
git push
```

### 问题2：页面跳转404

**原因：** GitHub Pages的base路径问题

**解决：** 已添加 `fix-paths.js`，会自动修复

### 问题3：GitHub Pages显示空白页

**原因：** 可能需要等待几分钟部署

**解决：**
- 等待5-10分钟
- 检查Settings → Pages中的部署状态
- 确认部署成功（绿色勾号）

## 📋 重新部署步骤

### GitHub Pages：

1. **确保所有文件上传：**
```bash
git add .
git commit -m "Fix: Add all files including images"
git push
```

2. **检查GitHub仓库：**
   - 确认所有文件都在
   - 确认images文件夹存在

3. **等待部署：**
   - Settings → Pages → 查看部署状态
   - 等待几分钟

4. **访问网站：**
   - `https://用户名.github.io/仓库名/`

### Vercel：

1. **重新导入：**
   - 在Vercel中删除旧项目
   - 重新导入GitHub仓库
   - 或重新拖拽文件夹

2. **检查部署日志：**
   - 查看是否有错误信息

3. **访问网站：**
   - 使用Vercel提供的URL

## 💡 如果还是不行

请告诉我：
1. **使用的平台：** GitHub Pages 还是 Vercel？
2. **仓库URL：** 你的GitHub仓库地址是什么？
3. **网站URL：** 部署后的网站地址是什么？
4. **错误信息：** 浏览器控制台（F12）显示什么错误？

我可以帮你进一步排查！



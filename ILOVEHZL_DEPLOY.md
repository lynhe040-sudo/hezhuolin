# ilovehzl.com 域名购买和部署指南

## 🌐 域名：ilovehzl.com

恭喜！你选择了 `ilovehzl.com` 这个域名，它简短易记，非常适合！

## 📋 购买域名步骤

### 推荐平台：Namecheap（最推荐）

**为什么选择 Namecheap：**
- ✅ 价格便宜（约 $10-15/年）
- ✅ 界面简单易用
- ✅ 免费WHOIS隐私保护
- ✅ 客服支持好

**购买步骤：**
1. 访问：https://www.namecheap.com
2. 搜索域名：在搜索框输入 `ilovehzl.com`
3. 添加到购物车
4. 注册账号（或登录）
5. 完成支付（支持信用卡、PayPal）
6. 购买完成！

**国内用户也可以选择：**
- **阿里云**：https://wanwang.aliyun.com（约¥50-70/年）
- **腾讯云**：https://dnspod.cloud.tencent.com（约¥50-70/年）

## 🚀 部署网站到 GitHub Pages + 绑定域名

### 步骤1：创建 GitHub 仓库

1. 注册/登录 GitHub：https://github.com
2. 点击右上角 "+" → "New repository"
3. 仓库名：`ilovehzl-website`（或任何你喜欢的名字）
4. 设为 Public（GitHub Pages 免费版需要）
5. 点击 "Create repository"

### 步骤2：上传网站文件

**方法A：通过网页上传（最简单）**
1. 在仓库页面点击 "uploading an existing file"
2. 将网站文件夹中的所有文件拖拽上传
3. 不要上传：
   - `photo` 文件（临时文件）
   - `DEPLOY.md`、`DEPLOY_WITH_DOMAIN.md`（可选）
   - 微信图片文件（已复制到images文件夹的）
4. 点击 "Commit changes"

**方法B：使用 Git（推荐）**
```bash
# 在网站文件夹中打开命令行
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/ilovehzl-website.git
git push -u origin main
```

### 步骤3：启用 GitHub Pages

1. 进入仓库页面
2. 点击 "Settings"（设置）
3. 左侧菜单找到 "Pages"
4. Source 选择 "Deploy from a branch"
5. Branch 选择 "main" / "root"
6. 点击 "Save"
7. 等待几分钟，你会看到：`Your site is live at https://你的用户名.github.io/ilovehzl-website`

### 步骤4：绑定自定义域名 ilovehzl.com

**在 GitHub 设置：**
1. 在 Pages 设置页面
2. 在 "Custom domain" 输入框输入：`ilovehzl.com`
3. 勾选 "Enforce HTTPS"（强制HTTPS）
4. 点击 "Save"

**在域名注册商设置 DNS：**

**Namecheap DNS 设置：**
1. 登录 Namecheap
2. 进入 Domain List → 点击 `ilovehzl.com` 的 "Manage"
3. 找到 "Advanced DNS" 或 "DNS"
4. 添加以下记录：

```
类型：A Record
主机：@
值：185.199.108.153
TTL：Automatic

类型：A Record
主机：@
值：185.199.109.153
TTL：Automatic

类型：A Record
主机：@
值：185.199.110.153
TTL：Automatic

类型：A Record
主机：@
值：185.199.111.153
TTL：Automatic

类型：CNAME Record
主机：www
值：你的用户名.github.io
TTL：Automatic
```

**阿里云 DNS 设置：**
1. 登录阿里云控制台
2. 进入域名解析 → 找到 `ilovehzl.com`
3. 添加解析记录：
   - 记录类型：A
   - 主机记录：@
   - 记录值：185.199.108.153（添加4条，分别用4个IP）
   - 记录类型：CNAME
   - 主机记录：www
   - 记录值：你的用户名.github.io

### 步骤5：等待 DNS 生效

- DNS 通常需要 10 分钟到 48 小时生效
- 你可以在这个网站检查：https://www.whatsmydns.net

### 步骤6：验证网站

生效后，访问：
- `https://ilovehzl.com`
- `https://www.ilovehzl.com`

## 🔍 提交给搜索引擎

### Google 搜索

1. 访问：https://search.google.com/search-console
2. 添加属性 → 输入 `https://ilovehzl.com`
3. 验证所有权（选择 HTML 文件验证）
4. 提交 sitemap：`https://ilovehzl.com/sitemap.xml`

### 百度搜索

1. 访问：https://ziyuan.baidu.com
2. 添加网站 → 输入 `https://ilovehzl.com`
3. 验证所有权
4. 提交 sitemap：`https://ilovehzl.com/sitemap.xml`

## ⏱️ 时间线

- **购买域名**：立即完成
- **DNS 生效**：10分钟 - 48小时
- **搜索引擎索引**：1-4周
- **搜索排名提升**：持续优化，可能需要几个月

## 💡 额外优化建议

1. **社交媒体分享**：在 Instagram、小红书、抖音分享网站链接
2. **定期更新**：定期更新网站内容
3. **外部链接**：在其他平台分享 `ilovehzl.com` 链接

## ❓ 需要帮助？

如果遇到问题：
- GitHub Pages 文档：https://docs.github.com/en/pages
- Namecheap 帮助：https://www.namecheap.com/support/

配置完成后，你的网站就可以通过 `https://ilovehzl.com` 访问了！



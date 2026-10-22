# AI 超市

中文 AI 工具测评与导购。静态网站，推到 `main` 后由 GitHub Actions 发布到 [https://txc1238.github.io/ai-chaoshi/](https://txc1238.github.io/ai-chaoshi/)。

价格整理自厂商公开页面，截至 2026年10月。站内不收款、不代付、不出售账号。

## 改联盟链接（只改一个文件）

编辑 [`data/links.json`](data/links.json)：

- `tools.<id>.visit`：现在是官网。联盟计划获批后，把这一格换成联盟链接。
- `tools.<id>.pricing`：建议继续指向官方价格页，方便读者核对。
- `affiliateLinksActive`：换成联盟链接后设为 `true`，购买按钮会加上 `rel="sponsored"`。

改完推到 `main` 即可。构建会把这个文件写进按钮，不用到每篇文章里找网址。

## 本地预览

站点使用项目路径 `/ai-chaoshi/`，不要用只开根目录的方式检查链接。

```bash
node build.mjs
rm -rf /tmp/ai-chaoshi-preview && mkdir -p /tmp/ai-chaoshi-preview
cp -a dist /tmp/ai-chaoshi-preview/ai-chaoshi
python3 -m http.server 8765 --directory /tmp/ai-chaoshi-preview
```

浏览器打开 <http://127.0.0.1:8765/ai-chaoshi/>。

## 目录

- `data/catalog.js`：工具文案、价格和资料来源
- `data/links.json`：购买按钮和价格页网址
- `data/pages.js`：付款指南、佣金披露、关于、隐私、联系
- `build.mjs`：生成 `dist/`
- `src/`：样式、脚本、图标
- `.github/workflows/pages.yml`：发布到 GitHub Pages

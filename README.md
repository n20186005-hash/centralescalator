# 中環半山扶手電梯（Central-Mid-Levels Escalators）— Astro 景點網站

非官方旅遊資訊網站，域名 [https://centralescalator.com](https://centralescalator.com)。

## 技術棧

- Astro 7.3.3 + Tailwind CSS 4（`@tailwindcss/vite`）+ TypeScript
- `@astrojs/cloudflare` 14.3.2（`output: 'server'`）+ `@astrojs/sitemap` 3.7.4
- 手動部署：`pnpm build && wrangler deploy`（Cloudflare Workers）
- GA4 `G-HXM22WWPKP`，需使用者同意後才載入
- JSON-LD：`WebSite` / `Organization` / `TouristAttraction`(+`Place`) / `FAQPage` / `Article` / `BreadcrumbList`

## 站點架構（繁體中文為預設語言，英文在 `/en/`）

| 路徑 | 內容 |
| --- | --- |
| `/` · `/en/` | 扶手電梯完整指南：方向時段、沿途路段、最佳時段、交通、費用、美食、周邊、FAQ、地圖 |
| `/schedule/` · `/en/schedule/` | 運作時間與乘搭攻略（上行下行時段表、維修與惡劣天氣） |
| `/directions/` · `/en/directions/` | 交通指南（港鐵中環站／香港站、渡輪、電車巴士、的士步程對照表、Plus Code） |
| `/food/` · `/en/food/` | 沿途美食地圖（按扶梯分段） |
| `/attractions/` · `/en/attractions/` | 周邊景點與半日路線（大館、中環街市、PMQ、文武廟等） |
| `/404` | 404 頁（`noindex`，不進 sitemap） |

所有頁面均輸出 HTTPS `canonical`、`hreflang`（`zh-HK` / `en` / `x-default`→繁中版）、OG/Twitter 絕對 URL；sitemap 以 `xhtml:link` 输出多语对照：

```
https://centralescalator.com/sitemap-index.xml
```

## 程式碼結構

- `src/data/site.ts`：**景點事實唯一來源**（名稱、評分 4.1 / 10,512、地址、經緯度、Plus Code、地圖短鏈、官方連結、方向時段、SEO 站名 `中環半山扶手電梯香港旅遊指南` / `Central–Mid-Levels Escalators Hong Kong — Travel Guide`）。改動價格、評分、地址只動這裡。
- `src/i18n.ts`：語種、語區 meta、`localizedPath()` / `hreflangAlternates()` / `navItems()` / `ui` 字典。
- `src/content/home.ts`：首頁雙語文案（含 TDK）。
- `src/content/topics.ts`：四個專題頁雙語文案（含 TDK、區塊、表格、FAQ、延伸連結）。
- `src/lib/schema.ts`：結構化資料建構器。
- `src/layouts/BaseLayout.astro`：全站 head（canonical / hreflang / OG / JSON-LD）、雙語導覽、語言切換、頁腳、Cookie 同意。
- `src/components/HomeBlocks.astro` / `TopicPage.astro`：內容渲染元件。

## 開發與建置

需要 Node 24（`packageManager` 為 pnpm 12.4.2）：

```powershell
$env:NODE_OPTIONS = ""
$env:CODEBUDDY_SAFE_DELETE_SHIM_DIR = ""
$env:GENIE_TRASH_DIR = ""
$env:PATH = "C:\Users\dcc\.workbuddy\binaries\node\versions\node-v24.19.0-win-x64;$env:PATH"

node "$env:LOCALAPPDATA\pnpm\.tools\pnpm\12.4.2\node_modules\pnpm\bin\pnpm.mjs" install --config.node-linker=hoisted
$env:CI = "1"; node node_modules\astro\bin\astro.mjs check   # 類型檢查
node node_modules\astro\bin\astro.mjs build                  # 正式建置
```

`@astrojs/cloudflare` 要求 `wrangler@^4.143.0`，升級適配器時請一併調整並更新 lockfile。

### 已知本機限制

在 Windows 沙箱執行一般 `astro build` 時，適配器會在「prerendering static routes」階段啟動 workerd 並出現 `0xc0000005` 存取違規，這是本機環境問題，與專案程式碼無關（Cloudflare 端建置正常）。若要在本機校驗頁面 HTML，請暫時建立一份不含 adapter、`output: 'static'`、`outDir: 'dist-static'` 的設定檔：

```powershell
node node_modules\astro\bin\astro.mjs build --config astro.config.static.mjs
node scripts\verify-build.mjs dist-static
```

校驗完成後刪除暫存設定與 `dist-static`。

## 圖片與資產

`scripts/gen-assets.py` 負責壓縮 `public/images/*.jpg` 並產生 `/images/og-cover.jpg`（1200×630 OG 封面）：

```bash
python scripts/gen-assets.py
```

相片來源：Wikimedia Commons（Z thomas，CC BY-SA 4.0；Mx. Granger，CC0 1.0），已隨專案附上。

## 部署後仍需在 Cloudflare 控制台處理

- **HTTP → HTTPS 301**：開啟 *Always Use HTTPS*（`public/_headers` 已發送 HSTS，但網域級 301 只能在控制台設定）。
- **www → apex 301**：以 Redirect Rules 設定（Workers Static Assets 不支援網域級 `_redirects`）。
- 在 Search Console 重新驗證 `https://centralescalator.com/` 資源，並提交 `sitemap-index.xml`。

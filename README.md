# 中環至半山自動扶手電梯 — Astro 景點網站

- Astro + Tailwind CSS + TypeScript
- Cloudflare Workers adapter
- 單頁、繁體中文（香港）
- GA4：G-HXM22WWPKP（取得同意後才載入）
- JSON-LD：TouristAttraction + FAQPage

## 域名設定
只需修改 `astro.config.mjs` 內的 `const site = '';`。未填域名時 canonical / Open Graph 絕對 URL / sitemap 均會優雅降級，不阻斷構建；填入真實域名後 sitemap 才啟用。

## 指令
```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

## 圖片
頁面使用 Wikimedia Commons 的真實照片：
- `Central-Mid-Levels escalators 2023-10-18.jpg` — Z thomas — CC BY-SA 4.0
- `Inside the Central-Mid-Levels escalators.jpg` — Mx. Granger — CC0 1.0

因本次執行環境無法連線至外部檔案主機，照片在源碼中使用官方 Wikimedia 檔案 URL；如部署環境要求完全本地化，下載為 `/public/images/escalator-hero.jpg` 與 `/public/images/escalator-interior.jpg` 後，把 `src` 改成相對路徑即可。

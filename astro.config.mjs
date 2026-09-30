import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 域名只在此处配置：决定了 canonical / OG 绝对 URL / hreflang / sitemap 的输出。
const site = 'https://centralescalator.com';

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  // 繁体中文（香港）为默认语言，位于站点根；英文位于 /en/。
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: { zh: 'zh-HK', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

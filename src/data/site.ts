/**
 * 景点事实的唯一来源。
 * 任何分数、地址、坐标、 Plus Code、外链改动只在此处理改，页面与 JSON-LD 会自动同步。
 */

export const SITE_DOMAIN = 'centralescalator.com';
export const SITE_URL = `https://${SITE_DOMAIN}`;

/** SEO 站点名格式：景点名称 + 城市 + 旅游指南 */
export const SITE_NAME = '中環半山扶手電梯香港旅遊指南';
export const SITE_NAME_EN = 'Central–Mid-Levels Escalators Hong Kong — Travel Guide';

export function siteName(locale: 'zh' | 'en'): string {
  return locale === 'en' ? SITE_NAME_EN : SITE_NAME;
}

/** 首页用站点名开头再接关键词；子页由这里追加 ' | ' + 站点名 */
export function withSiteName(title: string, locale: 'zh' | 'en'): string {
  return `${title} | ${siteName(locale)}`;
}

export const ATTRACTION = {
  /** Google Maps 上的常用名 */
  name: '中環半山扶手電梯',
  nameEn: 'Central-Mid-Levels Escalators',
  /** 运输署沿用的正式名称 */
  officialName: '中環至半山自動扶梯系統',
  officialNameEn: 'Central-Mid-Levels Escalator and Walkway System',
  alternateNames: ['中環至半山自動扶手電梯', '半山扶手電梯', '中環半山自動扶梯', 'Central Escalator'],
  category: '旅遊景點',
  /** Google Maps 评分快照，同步于 2026 年 9 月：4.1 分 / 10,512 则评论 */
  aggregateRating: { ratingValue: '4.1', reviewCount: 10512, bestRating: '5' },
  ratingSourceLabel: 'Google Maps 評價',
  /** Google Maps 显示地址 */
  address: '香港香港島中環租庇利街',
  streetAddress: '租庇利街',
  addressLocality: '中環',
  addressRegion: '香港島',
  addressCountry: 'HK',
  /** 南端起点（皇后大道中／租庇利街一带）坐标 */
  latitude: 22.2838464,
  longitude: 114.1549689,
  plusCode: '75M3+GX 中環 香港',
  /** Google 地图分享短链 */
  mapsUrl: 'https://maps.app.goo.gl/kYnouGXP34XBKHnp8',
  /** 交通运输署 · 香港上山扶梯系统 */
  govTransportUrl: 'https://www.td.gov.hk/tc/transport_in_hong_kong/pedestrians/hillside_escalator/index.html',
  govTransportUrlEn:
    'https://www.td.gov.hk/en/transport_in_hong_kong/pedestrians/hillside_escalator/index.html',
  wikipediaUrl: 'https://en.wikipedia.org/wiki/Central%E2%80%93Mid-Levels_escalator',
  wikipediaUrlZh: 'https://zh.wikipedia.org/wiki/%E4%B8%AD%E7%92%B0%E8%87%B3%E5%8D%8A%E5%B1%B1%E8%87%AA%E5%8B%95%E6%89%B6%E6%A2%AF%E7%B3%BB%E7%B5%B1',
  tourismUrl: 'https://www.discoverhongkong.com/hk-tc/interactive-map/mid-levels-escalator.html',
  image: '/images/og-cover.jpg',
  hero: '/images/escalator-hero.jpg',
  /**
   * 方向时段（据运输署公布）：
   * 06:00–10:00 向下（往中環／皇后大道中方向），10:20–00:00 向上（往半山／干德道方向）。
   */
  directionSchedule: {
    downhill: { opens: '06:00', closes: '10:00' },
    uphill: { opens: '10:20', closes: '24:00' },
  },
  isAccessibleForFree: true,
  lengthMeters: 800,
  escalatorCount: 16,
  walkwayCount: 3,
} as const;

export function sameAs(): string[] {
  return [ATTRACTION.mapsUrl, ATTRACTION.govTransportUrl, ATTRACTION.wikipediaUrl];
}

export const ABS = (p: string): string => `${SITE_URL}${p.startsWith('/') ? p : `/${p}`}`;

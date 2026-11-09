import type { Locale } from '../../i18n';

export type GuideGroupId = 'transport' | 'culture' | 'nearby' | 'food' | 'itinerary' | 'practical';

export interface GuideFact {
  label: string;
  value: string;
}

export interface GuideBullet {
  title: string;
  text: string;
}

export interface GuideTable {
  caption?: string;
  columns: string[];
  rows: string[][];
}

export interface GuideStep {
  label: string;
  text: string;
}

export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  bullets?: GuideBullet[];
  table?: GuideTable;
  steps?: GuideStep[];
}

export interface GuideFaq {
  q: string;
  a: string;
}

/** 单一语种的页面内容。facts／sections／faqs 必须与可见内容一致，才能进入结构化数据。 */
export interface GuideContent {
  meta: { title: string; description: string };
  kicker: string;
  h1: string;
  lead: string;
  facts: GuideFact[];
  sections: GuideSection[];
  faqs: GuideFaq[];
  /** 用于生成 Google Maps 地点搜寻链接；不虚构短链或门牌。 */
  mapsQuery?: string;
}

export interface GuideDef {
  /** 语言中立路径，不含首尾斜线，例如 'entrances' 或 'nearby/tai-kwun' */
  slug: string;
  group: GuideGroupId;
  /** 用于索引、面包屑与相关链接的短标题 */
  title: Record<Locale, string>;
  /** 相关专题 slug，必须是注册表内真实存在的值 */
  related: string[];
  content: Record<Locale, GuideContent>;
}

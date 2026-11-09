import { localizedPath } from '../../i18n';
import type { Locale } from '../../i18n';
import type { GuideDef, GuideGroupId } from './types';
import { transportGuides } from './a-transport';
import { cultureGuides } from './b-culture';
import { nearbyGuides } from './c-nearby';
import { foodGuides } from './d-food';
import { itineraryGuides } from './e-itinerary';
import { practicalGuides } from './f-practical';

/** 本轮资料整理与补充来源的日期；不是即时运营状态监控时间。 */
export const CHECK_DATE = '2026-11-09';

export interface GuideGroup {
  id: GuideGroupId;
  label: Record<Locale, string>;
  lead: Record<Locale, string>;
}

export const GUIDE_GROUPS: GuideGroup[] = [
  {
    id: 'transport',
    label: { zh: '入口、出口與交通', en: 'Entrances, exits & transport' },
    lead: {
      zh: '先確認從哪裡走進去、在哪一段離開，再配合當日方向安排行程。',
      en: 'Work out where to join the system, where to leave it, and how the current direction affects your plan.',
    },
  },
  {
    id: 'culture',
    label: { zh: '歷史、文化與遊覽體驗', en: 'History, culture & experience' },
    lead: {
      zh: '認識這套山坡行人系統的由來、工程特色，以及不同時段的遊覽差異。',
      en: 'Why the hillside system was built, how it works, and how the experience changes through the day.',
    },
  },
  {
    id: 'nearby',
    label: { zh: '沿途與附近景點', en: 'Along the route & nearby' },
    lead: {
      zh: '以扶梯各段為起點，串連中環舊城的歷史建築、街市與街區。',
      en: 'Historic buildings, markets and neighbourhoods reachable from different sections of the route.',
    },
  },
  {
    id: 'food',
    label: { zh: '餐飲、咖啡與購物', en: 'Food, coffee & shopping' },
    lead: {
      zh: '按街道與類型規劃用餐和休息，不列未核實的店名、價格或營業時間。',
      en: 'Plan meals and breaks by street and type, without unverified venue names, prices or hours.',
    },
  },
  {
    id: 'itinerary',
    label: { zh: '路線與行程', en: 'Routes & itineraries' },
    lead: {
      zh: '由 30 分鐘到半日，每條路線有不同停留點、次序與返回方式。',
      en: 'From a short stop to a half day, each route has its own stops, order and return plan.',
    },
  },
  {
    id: 'practical',
    label: { zh: '實用旅遊決策', en: 'Practical trip decisions' },
    lead: {
      zh: '攜童、住宿區位與完整常見問題，出發前一次核對。',
      en: 'Families, where to stay, and the full set of common visitor questions.',
    },
  },
];

/** 36 个独立搜索意图；双语共用同一 slug，故翻译不计入页数。 */
export const GUIDES: GuideDef[] = [
  ...transportGuides,
  ...cultureGuides,
  ...nearbyGuides,
  ...foodGuides,
  ...itineraryGuides,
  ...practicalGuides,
];

const guideMap = new Map(GUIDES.map((guide) => [guide.slug, guide]));

export function getGuide(slug: string): GuideDef | undefined {
  return guideMap.get(slug);
}

export function guideSlugs(): string[] {
  return GUIDES.map((guide) => guide.slug);
}

export function guidesByGroup(id: GuideGroupId): GuideDef[] {
  return GUIDES.filter((guide) => guide.group === id);
}

export function groupById(id: GuideGroupId): GuideGroup {
  return GUIDE_GROUPS.find((group) => group.id === id)!;
}

export function guideHref(locale: Locale, slug: string): string {
  return localizedPath(locale, `${slug}/`);
}

export function mapsSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/**
 * 分批发布阶段：P0=交通入口(8) · P1=歷史文化+沿途景點(14) · P2=餐飲+行程+實用(14)。
 * RELEASE_PHASE 控制当前上线到哪一组；未达阶段的指南不生成路由、不进 sitemap、
 * 不出现在首页集群与相关链接，避免产生 404。
 *
 * 当前设为 'P2'：P0/P1/P2 全部完成并上线（共 36 篇）。
 * 如需分批部署（先上 P0 验证再逐步放开），可下调为 'P0' 或 'P1' 后重新构建。
 */
export type ReleasePhase = 'P0' | 'P1' | 'P2';

export const RELEASE_PHASE: ReleasePhase = 'P2';

const PHASE_RANK: Record<ReleasePhase, number> = { P0: 0, P1: 1, P2: 2 };

const GROUP_PHASE: Record<GuideGroupId, ReleasePhase> = {
  transport: 'P0',
  culture: 'P1',
  nearby: 'P1',
  food: 'P2',
  itinerary: 'P2',
  practical: 'P2',
};

export function guidePhase(group: GuideGroupId): ReleasePhase {
  return GROUP_PHASE[group];
}

/** 该指南是否处于当前发布阶段（含更早阶段）。 */
export function isPublished(guide: GuideDef): boolean {
  return PHASE_RANK[guidePhase(guide.group)] <= PHASE_RANK[RELEASE_PHASE];
}

export function publishedGuides(): GuideDef[] {
  return GUIDES.filter(isPublished);
}

/** 按 GUIDE_GROUPS 顺序返回至少含一篇已发布指南的组别。 */
export function publishedGroups(): GuideGroup[] {
  const live = new Set(publishedGuides().map((guide) => guide.group));
  return GUIDE_GROUPS.filter((group) => live.has(group.id));
}

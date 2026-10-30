import { SITE_URL } from './data/site';

export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

export const localeMeta: Record<
  Locale,
  { htmlLang: string; ogLocale: string; label: string; short: string; hreflang: string }
> = {
  zh: { htmlLang: 'zh-HK', ogLocale: 'zh_HK', label: '繁體中文', short: '中', hreflang: 'zh-HK' },
  en: { htmlLang: 'en', ogLocale: 'en_US', label: 'English', short: 'EN', hreflang: 'en' },
};

/** 站内的语言中立路径，写作 'schedule/' 或 ''（首页） */
export type PathKey = '' | 'schedule/' | 'directions/' | 'attractions/' | 'food/' | 'privacy/' | 'terms/' | 'cookies/';

export function localizedPath(locale: Locale, path: PathKey = ''): string {
  return locale === defaultLocale ? `/${path}` : `/${locale}/${path}`;
}

export function absoluteUrl(locale: Locale, path: PathKey = ''): string {
  return `${SITE_URL}${localizedPath(locale, path)}`;
}

/**
 * 生成 hreflang 候选：每个语种一份 + x-default。
 * x-default 指向繁体中文版，因其为本地最主要使用语言。
 */
export function hreflangAlternates(path: PathKey = ''): Array<{ lang: string; href: string }> {
  const alternates = locales.map((locale) => ({
    lang: localeMeta[locale].hreflang,
    href: absoluteUrl(locale, path),
  }));
  alternates.push({ lang: 'x-default', href: absoluteUrl(defaultLocale, path) });
  return alternates;
}

export function pick<T>(locale: Locale, zh: T, en: T): T {
  return locale === 'en' ? en : zh;
}

export interface NavItem {
  label: string;
  href: string;
}

/** 顶部导览：按语种返回带语言前缀的完整链接 */
export function navItems(locale: Locale): NavItem[] {
  const p = (path: PathKey) => localizedPath(locale, path);
  if (locale === 'en') {
    return [
      { label: 'Operating hours', href: p('schedule/') },
      { label: 'Getting here', href: p('directions/') },
      { label: 'Food', href: p('food/') },
      { label: 'Nearby', href: p('attractions/') },
      { label: 'FAQ', href: `${p('')}#faq` },
    ];
  }
  return [
    { label: '運作時間', href: p('schedule/') },
    { label: '交通指南', href: p('directions/') },
    { label: '美食', href: p('food/') },
    { label: '周邊', href: p('attractions/') },
    { label: 'FAQ', href: `${p('')}#faq` },
  ];
}

/** 语言切换：同一个 path 在另一种语言下的位置 */
export function switchHref(locale: Locale, path: PathKey = ''): string {
  return localizedPath(locale === 'zh' ? 'en' : 'zh', path);
}

interface UiStrings {
  home: string;
  skipNav: string;
  openMap: string;
  languageLabel: string;
  explore: string;
  relatedTitle: string;
  relatedLead: string;
  updated: string;
  backToGuide: string;
  faqTitle: string;
  faqKicker: string;
  sourcesTitle: string;
  sourcesLead: string;
  jumpToFaq: string;
  cookieTitle: string;
  cookieBody: string;
  cookieAccept: string;
  cookieReject: string;
  cookieSettings: string;
  privacyTitle: string;
  privacyBody: string;
  termsTitle: string;
  termsBody: string;
  disclaimer: string;
  photoCredit: string;
  officialSource: string;
  mapAlt: string;
}

export const ui: Record<Locale, UiStrings> = {
  zh: {
    home: '首頁',
    skipNav: '跳至主要內容',
    openMap: '開啟地圖',
    languageLabel: '切換語言',
    explore: '探索',
    relatedTitle: '延伸閱讀',
    relatedLead: '把扶手電梯與中環半山其他行程串起來：',
    updated: '最後更新',
    backToGuide: '返回中環半山扶手電梯完整指南',
    faqTitle: '常見問答',
    faqKicker: 'FAQ',
    sourcesTitle: '資料來源',
    sourcesLead: '本頁交通與設施資料參考香港特別行政區政府運輸署及下列公開資料整理，實際安排以官方公布為準。',
    jumpToFaq: '跳至常見問答',
    cookieTitle: 'Cookie 設定',
    cookieBody: '同意後才載入Google Analytics 4；可隨時重開設定撤回。這只控制本站GA，不控制託管方獨立測量。',
    cookieAccept: '同意分析',
    cookieReject: '拒絕／撤回分析',
    cookieSettings: 'Cookie 設定',
    privacyTitle: '私隱說明',
    privacyBody: '本站不設帳戶、留言、訂票或聯絡表單。選擇保存在瀏覽器；同意後GA可能使用Cookie並接收頁面網址、來源、瀏覽事件、瀏覽器及裝置資訊，不保證完全匿名。撤回會立即停用本頁GA、嘗試清除本域GA Cookie，成功儲存拒絕後重新載入；不會抹除已傳送資料。Cloudflare託管另外處理IP、連線、請求與安全資料。2026-10-30取得的一次正式首頁HTML未見Insights beacon，不代表其他回應或日後設定也沒有。託管方可能獨立測量訪問、頁面瀏覽、網址、來源、瀏覽器、裝置與效能，不受本站GA選擇控制；標籤出現本身也不證明執行或傳輸。連結外部地圖與官方網站時適用第三方政策；照片由本站載入，不要求定位。',
    termsTitle: '使用條款',
    termsBody: '內容只供旅遊規劃參考，交通、開放安排、商戶營業及費用可能變動，出發前請向相關官方或營運方核實。',
    disclaimer: '獨立、非官方、非營利旅遊及科普資訊指南，與香港特別行政區政府、運輸署、Google 或景點管理單位沒有隸屬或授權關係；資訊請以官方最新公布為準。',
    photoCredit: '照片來源與修改說明：',
    officialSource: '官方與權威連結',
    mapAlt: '中環至半山自動扶手電梯位置地圖',
  },
  en: {
    home: 'Home',
    skipNav: 'Skip to main content',
    openMap: 'Open map',
    languageLabel: 'Switch language',
    explore: 'Explore',
    relatedTitle: 'Continue reading',
    relatedLead: 'Tie the escalators into the rest of Central and the Mid-Levels:',
    updated: 'Last updated',
    backToGuide: 'Back to the full Central-Mid-Levels Escalators guide',
    faqTitle: 'Frequently asked questions',
    faqKicker: 'FAQ',
    sourcesTitle: 'Sources',
    sourcesLead:
      'Transport and facility details are compiled from the Transport Department of the HKSAR and the public sources below; always check official notices before travelling.',
    jumpToFaq: 'Jump to FAQ',
    cookieTitle: 'Cookie settings',
    cookieBody: 'Google Analytics 4 loads only after agreement. Reopen settings to withdraw. This controls site GA, not independent hosting measurement.',
    cookieAccept: 'Accept analytics',
    cookieReject: 'Reject / withdraw analytics',
    cookieSettings: 'Cookie settings',
    privacyTitle: 'Privacy notice',
    privacyBody:
      'This site has no accounts, comments, bookings or contact form. Your choice is stored in the browser. After agreement, GA may use cookies and receive page URLs, referrers, browsing events, browser and device information; complete anonymity is not promised. Withdrawal immediately disables site GA, attempts to remove this domain’s GA cookies and reloads after refusal is confirmed saved; it does not erase previously transmitted data. Cloudflare hosting separately processes IP, connection, request and security information. A single production homepage HTML response on2026-10-30 showed no Insights beacon; other responses or future settings may differ. Independent hosting measurement may involve visits, page views, URLs, referrers, browser, device and performance data, outside the site GA choice. A tag alone would not prove execution or transmission. External Maps and official links have their own policies. Images are served locally and no geolocation is requested.',
    termsTitle: 'Terms of use',
    termsBody:
      'Content is provided for trip planning only. Transport, opening arrangements, shop hours and fees can change — verify with the relevant authorities or operators before travelling.',
    disclaimer:
      'An independent, unofficial, nonprofit tourism and educational guide with no affiliation to or authorisation from the HKSAR Government, the Transport Department, Google or any attraction operator; always follow the latest official information.',
    photoCredit: 'Image source and changes:',
    officialSource: 'Official and reference links',
    mapAlt: 'Map showing the location of the Central-Mid-Levels Escalators',
  },
};

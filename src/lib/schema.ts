import { ATTRACTION, SITE_URL, sameAs, siteName } from '../data/site';
import type { Locale } from '../i18n';

export interface Faq {
  q: string;
  a: string;
}

export interface Crumb {
  name: string;
  path: string;
}

const attractionId = `${SITE_URL}/#attraction`;

function localized(name: string, nameEn: string, locale: Locale): string {
  return locale === 'en' ? nameEn : name;
}

function addressBlock(locale: Locale) {
  if (locale === 'en') {
    return {
      '@type': 'PostalAddress',
      addressLocality: 'Central',
      addressRegion: 'Hong Kong Island',
      addressCountry: 'HK',
    };
  }
  return {
    '@type': 'PostalAddress',
    addressLocality: ATTRACTION.addressLocality,
    addressRegion: ATTRACTION.addressRegion,
    addressCountry: ATTRACTION.addressCountry,
  };
}

/** TouristAttraction：多语共用同一个 @id，代表同一实体 */
export function attractionSchema(locale: Locale, url: string, imageAbs: string) {
  const description =
    locale === 'en'
      ? 'The Central–Mid-Levels Escalators form one of the world’s longest outdoor covered escalator systems, linking Queen’s Road Central with Conduit Road in Hong Kong’s Mid-Levels.'
      : '中環至半山自動扶梯系統是全球最長的戶外有蓋扶手電梯系統之一，連接中環皇后大道中與半山干德道，全長逾 800 米。';

  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Place'],
    '@id': attractionId,
    name: localized(ATTRACTION.name, ATTRACTION.nameEn, locale),
    alternateName: locale === 'en' ? ATTRACTION.alternateNames.slice(0, 2) : ATTRACTION.officialName,
    description,
    url,
    image: [imageAbs],
    address: addressBlock(locale),
    hasMap: ATTRACTION.mapsUrl,
    sameAs: sameAs(),
    touristType: locale === 'en' ? ['Sightseeing', 'Walking'] : ['觀光', '散步'],

  };
}

export function websiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteName(locale),
    inLanguage: locale === 'en' ? 'en' : 'zh-HK',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: siteName('zh'),
    url: SITE_URL,
    description: '非官方旅遊資訊網站，提供中環至半山自動扶梯系統的遊覽、交通與周邊攻略。',
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path,
    })),
  };
}

export function articleSchema(args: {
  locale: Locale;
  title: string;
  description: string;
  url: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: args.title,
    description: args.description,
    url: args.url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': args.url+'#webpage' },
    image: [`${SITE_URL}${ATTRACTION.image}`],
    dateModified: args.dateModified,
    inLanguage: args.locale === 'en' ? 'en' : 'zh-HK',
    publisher: { '@id': `${SITE_URL}/#organization` },
    about: { '@id': attractionId },
  };
}

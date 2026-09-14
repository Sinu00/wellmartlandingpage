import { COMPANY, MONTHLY_FEE, MONTH_COUNT, PLAN_TOTAL, TERMS, TOTAL_WINNERS, formatINR } from './data';

export const CLUB_PATH = '#/winners-club';

export const CLUB_TITLE = 'WellMart Winners Club | ₹500/month lucky draw, Kasaragod';

export const CLUB_DESCRIPTION =
  'WellMart Winners Club in Kasaragod. Pay ₹500 a month for 4 months. 100 winners across live monthly draws. iPhone, gold, cash, a Thar or a house. WhatsApp to join.';

function siteBase() {
  if (typeof window === 'undefined') return '';
  const { origin, pathname } = window.location;
  const dir = pathname.endsWith('/') ? pathname : pathname.replace(/[^/]+$/, '');
  return `${origin}${dir}`;
}

export function clubUrl() {
  return `${siteBase()}${CLUB_PATH}`;
}

export function ogImageUrl() {
  return `${siteBase()}og-image.png`;
}

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function applySeo({ title, description, index, url, jsonLd }) {
  document.title = title;

  upsertMeta('meta[name="description"]', { name: 'description', content: description });
  upsertMeta('meta[name="robots"]', {
    name: 'robots',
    content: index ? 'index, follow, max-image-preview:large' : 'noindex, follow',
  });
  upsertMeta('meta[name="googlebot"]', {
    name: 'googlebot',
    content: index ? 'index, follow' : 'noindex, follow',
  });

  if (index) {
    upsertMeta('meta[name="geo.region"]', { name: 'geo.region', content: 'IN-KL' });
    upsertMeta('meta[name="geo.placename"]', { name: 'geo.placename', content: 'Kasaragod' });
  }

  const image = ogImageUrl();
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_IN' });
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'WellMart Winners Club' });
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

  upsertLink('canonical', url);
  upsertJsonLd('seo-jsonld', jsonLd ?? null);
}

export function clubJsonLd() {
  const url = clubUrl();
  const image = ogImageUrl();
  const address = {
    '@type': 'PostalAddress',
    streetAddress: 'Golden Arcade Building, 2nd Floor, New Bus Stand',
    addressLocality: 'Kasaragod',
    addressRegion: 'Kerala',
    postalCode: '671121',
    addressCountry: 'IN',
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${url}#business`,
        name: COMPANY.legalName,
        legalName: COMPANY.legalName,
        url,
        image,
        telephone: COMPANY.phone,
        email: COMPANY.email,
        address,
        areaServed: 'Kasaragod',
        priceRange: formatINR(MONTHLY_FEE),
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#page`,
        url,
        name: CLUB_TITLE,
        description: CLUB_DESCRIPTION,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${url}#business` },
        about: { '@id': `${url}#offer` },
      },
      {
        '@type': 'Offer',
        '@id': `${url}#offer`,
        name: `WellMart Winners Club ${MONTH_COUNT}-month plan`,
        description: `Pay ${formatINR(MONTHLY_FEE)} a month for ${MONTH_COUNT} months (${formatINR(PLAN_TOTAL)}). ${TOTAL_WINNERS} winners across live monthly draws in Kasaragod.`,
        url,
        price: String(PLAN_TOTAL),
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        offeredBy: { '@id': `${url}#business` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: TERMS.map((t) => ({
          '@type': 'Question',
          name: t.title,
          acceptedAnswer: { '@type': 'Answer', text: t.body },
        })),
      },
    ],
  };
}

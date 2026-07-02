import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { FAQ_CATEGORIES } from '../data/faqs';
import { NEWS_CATEGORIES } from '../consts';
import { PLACES, hubHref, pageHref } from '../data/places';
import { FEATURED_DRUGS } from '../data/drugAssistance';
import { hreflangAlternates, localePageHref, getAvailableLocales } from '../i18n/content';
import { DEFAULT_LOCALE } from '../i18n/locales';

const SITE = 'https://altamedicare.com';

// ── i18n (existence-aware, playbook §5/§14) ─────────────────────────────────
// A URL gets xhtml:link alternates — and its localized siblings get their own
// <url> entries — ONLY when the translated content is committed. Untranslated
// URLs emit exactly what they emitted before. Nothing here can reference a
// page that doesn't exist.
const slugFromLoc = (loc: string): string =>
  loc === '/' ? 'index' : loc.replace(/^\//, '').replace(/\.html$/, '');

/** xhtml:link alternate tags for a loc, '' when the page is untranslated. */
const alternatesXml = (loc: string): string => {
  const alts = hreflangAlternates(slugFromLoc(loc));
  if (!alts.length) return '';
  return alts
    .map((a) => `<xhtml:link rel="alternate" hreflang="${a.code}" href="${a.href}"/>`)
    .join('');
};

/** Localized <url> rows (e.g. /es.html, /es/about.html) for a translated loc. */
const localizedRows = (loc: string, priority: number): string[] => {
  const slug = slugFromLoc(loc);
  return getAvailableLocales(slug)
    .filter((l) => l !== DEFAULT_LOCALE)
    .map(
      (l) =>
        `  <url><loc>${SITE}${localePageHref(slug, l)}</loc>${alternatesXml(loc)}<priority>${priority.toFixed(1)}</priority></url>`,
    );
};

// Location cluster URLs (hub + 3 sub-pages per place), generated from PLACES.
const locationUrls = PLACES.flatMap((p) => [
  { loc: hubHref(p), priority: 0.7 },
  { loc: pageHref(p, 'medicare-advantage'), priority: 0.7 },
  { loc: pageHref(p, 'medicare-supplement'), priority: 0.7 },
  { loc: pageHref(p, 'part-d'), priority: 0.7 },
]);

// Static URLs (core pages + tools), with priorities. Blog URLs are appended
// automatically from the content collection so new posts need no manual edit.
const staticUrls: { loc: string; priority: number }[] = [
  { loc: '/', priority: 1.0 },
  { loc: '/medicare-basics.html', priority: 0.8 },
  { loc: '/medicare-advantage.html', priority: 0.8 },
  { loc: '/medicare-supplement.html', priority: 0.8 },
  { loc: '/prescription-drug-plans.html', priority: 0.8 },
  { loc: '/dual-eligible.html', priority: 0.7 },
  { loc: '/dental-vision-hearing.html', priority: 0.7 },
  { loc: '/drug-savings.html', priority: 0.7 },
  { loc: '/turning-65.html', priority: 0.8 },
  { loc: '/medicare-news.html', priority: 0.6 },
  { loc: '/about.html', priority: 0.6 },
  { loc: '/contact.html', priority: 0.7 },
  { loc: '/blog.html', priority: 0.8 },
  { loc: '/faq.html', priority: 0.8 },
  ...FAQ_CATEGORIES.map((c) => ({ loc: `/faq/${c.key}.html`, priority: 0.6 })),
  { loc: '/tools.html', priority: 0.8 },
  { loc: '/medicare-eligibility-calculator.html', priority: 0.8 },
  { loc: '/medicare-irmaa-calculator.html', priority: 0.8 },
  { loc: '/medicare-drug-cost-calculator.html', priority: 0.8 },
  { loc: '/medicare-penalty-calculator.html', priority: 0.8 },
  { loc: '/medicare-timeline-calculator.html', priority: 0.8 },
  { loc: '/medicare-enrollment-countdown.html', priority: 0.8 },
  { loc: '/medicare-cost-estimator.html', priority: 0.8 },
  { loc: '/medicare-formulary-lookup.html', priority: 0.8 },
  { loc: '/prescription-drug-assistance.html', priority: 0.8 },
  { loc: '/medicare-quiz.html', priority: 0.8 },
  { loc: '/medicare-glossary.html', priority: 0.7 },
  // Drug-specific assistance landing pages, generated from FEATURED_DRUGS.
  ...FEATURED_DRUGS.map((d) => ({ loc: `/${d.slug}-assistance-program.html`, priority: 0.7 })),
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const blogUrls = posts
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
    .map((p) => ({
      loc: `/blog/${p.slug}.html`,
      priority: 0.7,
      lastmod: (p.data.updatedDate || p.data.publishDate).toISOString().slice(0, 10),
    }));

  // News articles + category pages, appended automatically from the collection.
  const news = await getCollection('news', ({ data }) => !data.draft);
  const newsUrls = news
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((p) => ({
      loc: `/medicare-news/${p.slug}.html`,
      priority: 0.7,
      lastmod: p.data.date.toISOString().slice(0, 10),
    }));
  const newsCategoryUrls = Object.keys(NEWS_CATEGORIES)
    .filter((key) => news.some((p) => p.data.category === key))
    .map((key) => ({ loc: `/medicare-news/category/${key}.html`, priority: 0.5 }));

  const rows = [
    ...staticUrls.map((u) => `  <url><loc>${SITE}${u.loc}</loc>${alternatesXml(u.loc)}<priority>${u.priority.toFixed(1)}</priority></url>`),
    ...staticUrls.flatMap((u) => localizedRows(u.loc, u.priority)),
    ...locationUrls.map((u) => `  <url><loc>${SITE}${u.loc}</loc><priority>${u.priority.toFixed(1)}</priority></url>`),
    ...blogUrls.map((u) => `  <url><loc>${SITE}${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority.toFixed(1)}</priority></url>`),
    ...newsUrls.map((u) => `  <url><loc>${SITE}${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority.toFixed(1)}</priority></url>`),
    ...newsCategoryUrls.map((u) => `  <url><loc>${SITE}${u.loc}</loc><priority>${u.priority.toFixed(1)}</priority></url>`),
  ].join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${rows}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

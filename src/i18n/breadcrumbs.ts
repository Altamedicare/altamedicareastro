// src/i18n/breadcrumbs.ts — BreadcrumbList JSON-LD derived from the VISIBLE trail.
//
// The location cluster already builds crumbs from data (src/data/places.ts →
// LocationBreadcrumb + breadcrumbLd inline). Topical pages instead render their
// trail either from a `breadcrumbHtml` string in the page JSON (localized copy)
// or as literal JSX. This module gives both shapes one path to schema, so the
// markup can never drift from what the user actually sees — the whole point of
// BreadcrumbList (Google: the schema must match the on-page breadcrumb).
//
// NOTHING here invents a level. crumbsFromHtml only reports separators that are
// already in the copy; callers that pass explicit crumbs must mirror their JSX.

import { SITE_ORIGIN, localizeHref } from './content';

export interface BreadcrumbCrumb {
  name: string;
  /** Relative href as authored ("index.html", "/tools.html"). Omit on the leaf. */
  href?: string;
}

/** The separator used by every authored breadcrumbHtml string in this repo. */
const SEPARATOR = '&nbsp;&rsaquo;&nbsp;';

const NAMED = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”',
  mdash: '—', ndash: '–', rsaquo: '›', hellip: '…',
} as const;

const decode = (s: string): string =>
  s
    .replace(/&#x([0-9a-fA-F]+);/g, (_m, h: string) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_m, d: string) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&([a-zA-Z]+);/g, (m, n: string) => (NAMED as Record<string, string>)[n] ?? m);

/** Parse an authored `breadcrumbHtml` string into its visible crumbs.
 *  "<a href="index.html">Home</a> &nbsp;&rsaquo;&nbsp; Turning 65"
 *    → [{ name: 'Home', href: 'index.html' }, { name: 'Turning 65' }] */
export function crumbsFromHtml(html: string): BreadcrumbCrumb[] {
  return html
    .split(SEPARATOR)
    .map((segment) => {
      const href = segment.match(/href="([^"]*)"/)?.[1];
      const name = decode(segment.replace(/<[^>]*>/g, '')).trim();
      return href ? { name, href } : { name };
    })
    .filter((c) => c.name.length > 0);
}

/** Absolute, locale-correct URL for a crumb href. Mirrors localizeHref so the
 *  schema points at the same page the visible link does. */
function absolute(href: string, lang: string): string {
  const localized = localizeHref(href, lang);
  if (/^https?:\/\//i.test(localized)) return localized;
  const path = localized.startsWith('/') ? localized : `/${localized}`;
  return SITE_ORIGIN + (path === '/index.html' ? '/' : path);
}

/** BreadcrumbList JSON-LD. The leaf falls back to `canonical` when it carries
 *  no href of its own (the current page, rendered as plain text). */
export function breadcrumbLd(crumbs: BreadcrumbCrumb[], lang: string, canonical: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.href ? absolute(c.href, lang) : SITE_ORIGIN + (canonical === '/index.html' ? '/' : canonical),
    })),
  };
}

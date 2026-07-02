// src/i18n/shared.ts — typed-accessor plumbing for shared data modules
// (ADR-002, P2.1). Data modules (faqs, drug-assistance, location templates…)
// keep their existing TypeScript interfaces and call sites; their translatable
// strings live in src/i18n/shared/<module>/{locale}.json and load through
// here with the same guarantees as page content: committed files only
// (import.meta.glob — no API, no fs at request time), master fallback, and
// in-locale href rewriting. Pages never learn that JSON exists — each data
// module wraps this in its own typed accessor.
//
// No modules are migrated yet (P2.1 is engine infrastructure only); the glob
// matches nothing until P2.2+ commits the first en.json.

import { DEFAULT_LOCALE } from './locales';
import { deepLocalizeHrefs } from './content';

const files = import.meta.glob('./shared/*/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, unknown>;

const load = (module: string, locale: string): unknown =>
  files[`./shared/${module}/${locale}.json`];

/** Load a shared module's strings in a locale; falls back to the English
 *  master (same rule as getPageContent). Throws if the master is missing —
 *  an accessor for an unmigrated module is a programming error. */
export function getSharedModule<T>(module: string, locale: string = DEFAULT_LOCALE): T {
  const master = load(module, DEFAULT_LOCALE);
  if (!master)
    throw new Error(`Missing shared-module master: src/i18n/shared/${module}/${DEFAULT_LOCALE}.json`);
  if (locale === DEFAULT_LOCALE) return master as T;
  // Embedded hrefs localize at load time, same rule as getPageContent —
  // committed files stay verbatim-maskable; rewriting is a render concern.
  return deepLocalizeHrefs(load(module, locale) ?? master, locale) as T;
}

/** Locales that have a committed file for this module (existence-awareness
 *  for consumers that vary behavior by translation coverage). */
export function getSharedAvailableLocales(module: string): string[] {
  return Object.keys(files)
    .map((k) => k.match(/^\.\/shared\/([^/]+)\/([^/]+)\.json$/))
    .filter((m): m is RegExpMatchArray => !!m && m[1] === module && m[2] !== 'masks')
    .map((m) => m[2]);
}

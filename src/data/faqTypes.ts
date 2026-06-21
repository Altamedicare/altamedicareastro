// Single source of truth shape for FAQ entries. The category pages render from
// these objects AND generate FAQPage JSON-LD from the same array, so the schema
// can never drift from the visible content. This data is also the future feed
// for Pagefind, llms.txt, and AI retrieval.

export interface FaqLink {
  /** Internal href, e.g. "/blog/irmaa-brackets-explained.html" or "/tools.html". */
  href: string;
  label: string;
}

export interface Faq {
  /** The question, as a searcher would phrase it. */
  q: string;
  /** Plain-text answer (no HTML/markdown) — used for display AND FAQPage schema. */
  a: string;
  /** Related articles/pages shown under the answer. */
  links?: FaqLink[];
  /** Tool registry keys (see src/consts.ts) shown as quick chips. */
  tools?: string[];
}

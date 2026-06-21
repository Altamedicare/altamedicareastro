import { defineCollection, z } from 'astro:content';

// One `blog` collection with category support (the 8 categories live in the
// `category` enum). This is the scalable shape: a single content folder, one
// schema, category/tag faceting — rather than 8 parallel collections.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Bret Swope'),
    category: z.enum([
      'turning-65',
      'drug-coverage',
      'costs',
      'enrollment',
      'medicare-advantage',
      'medigap',
      'dual-eligible',
      'news',
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    // Tool registry keys (see src/consts.ts) → rendered as the Related Tools band.
    relatedTools: z.array(z.string()).default([]),
    // Optional Q&A → FAQPage JSON-LD + on-page FAQ block.
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
  }),
});

// Medicare News — a dedicated collection (separate from blog) powering the
// homepage carousel, the /medicare-news hub, article pages, and category pages.
// One folder, one schema, category/tag faceting. `npm run fetch-news` stays a
// suggestion engine only (writes news-cms.json for review) — never auto-publishes.
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Optional last-updated date → drives dateModified in the NewsArticle schema.
    updated: z.coerce.date().optional(),
    summary: z.string(),
    // Colored badge on the card: "Savings" | "Alert" | "Plans" | anything else.
    tag: z.string().optional(),
    category: z.enum([
      'prescription-drugs',
      'costs',
      'enrollment',
      'medicare-advantage',
      'supplements',
      'alerts',
      'cms-news',
    ]),
    // Optional citation (e.g. the CMS/Medicare.gov page the item is based on).
    source: z.string().url().optional(),
    // Optional ISO date; the item drops off the carousel automatically after this day.
    expires: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    author: z.string().default('Bret Swope'),
    image: z.string().optional(),
    // Optional Q&A → FAQPage JSON-LD + on-page FAQ block.
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
  }),
});

export const collections = { blog, news };

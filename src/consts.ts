// ── Shared site constants ──────────────────────────────────────────────
// Single source of truth for contact links, the plan-comparison (SunFire)
// destination, the tool registry, and blog categories. When the real SunFire
// enrollment URL arrives, change COMPARE_PLANS_URL in one place.

export const PHONE_DISPLAY = '(801) 368-0700';
export const PHONE_TEL = 'tel:8013680700';
export const CONTACT_URL = '/contact.html';

/** "Compare Plans Online" — Bret's SunFire consumer quoting/enrollment portal.
 *  External link; UI that uses it opens in a new tab. Swap here only. */
export const COMPARE_PLANS_URL = 'https://www.sunfirematrix.com/app/consumer/medicareadvocates/5454608/#/';

/** Calculator/tool registry. Blog `relatedTools` frontmatter references these keys. */
export const TOOLS = {
  eligibility:     { href: '/medicare-eligibility-calculator.html', icon: 'fa-calendar-check',              title: 'Eligibility Calculator',       desc: "See when you're eligible and your enrollment dates." },
  irmaa:           { href: '/medicare-irmaa-calculator.html',       icon: 'fa-sack-dollar',                 title: 'IRMAA Calculator',             desc: 'Estimate your Part B & Part D premiums by income.' },
  penalty:         { href: '/medicare-penalty-calculator.html',     icon: 'fa-triangle-exclamation',        title: 'Late Penalty Calculator',      desc: 'See if delaying could raise your premiums for life.' },
  'drug-cost':     { href: '/medicare-drug-cost-calculator.html',   icon: 'fa-pills',                       title: 'Drug Cost Calculator',         desc: 'Estimate medication costs and generic alternatives.' },
  timeline:        { href: '/medicare-timeline-calculator.html',    icon: 'fa-timeline',                    title: 'Timeline Calculator',          desc: 'Visualize your enrollment windows and deadlines.' },
  countdown:       { href: '/medicare-enrollment-countdown.html',   icon: 'fa-stopwatch',                   title: 'Enrollment Countdown',         desc: 'A live countdown to your enrollment deadlines.' },
  'cost-estimator':{ href: '/medicare-cost-estimator.html',         icon: 'fa-coins',                       title: 'Cost Estimator',               desc: 'Estimate total annual costs and compare coverage.' },
  formulary:       { href: '/medicare-formulary-lookup.html',       icon: 'fa-prescription-bottle-medical', title: 'Formulary Lookup',             desc: 'Search drugs for typical Part D coverage & rules.' },
  'drug-assistance':{ href: '/prescription-drug-assistance.html',    icon: 'fa-hand-holding-dollar',         title: 'Drug Assistance Finder',       desc: 'Find grants & programs to help pay for costly drugs.' },
  quiz:            { href: '/medicare-quiz.html',                   icon: 'fa-clipboard-question',          title: 'Medicare Plan Quiz',           desc: 'Answer 7 questions to find a coverage type that fits.' },
  glossary:        { href: '/medicare-glossary.html',              icon: 'fa-book',                        title: 'Medicare Glossary',            desc: '100+ Medicare terms in plain English.' },
} as const;

export type ToolKey = keyof typeof TOOLS;

/** Blog categories. Keys are the `category` enum values; order drives the cards. */
export const CATEGORIES = {
  'turning-65':        { title: 'Turning 65',                  icon: 'fa-cake-candles',  blurb: 'Your roadmap to enrolling at 65 the right way.' },
  'drug-coverage':     { title: 'Prescription Drug Coverage',  icon: 'fa-pills',         blurb: 'Part D, formularies, and what your drugs cost.' },
  'costs':             { title: 'Costs and Premiums',          icon: 'fa-sack-dollar',   blurb: 'Premiums, deductibles, IRMAA, and savings programs.' },
  'enrollment':        { title: 'Enrollment',                  icon: 'fa-calendar-check',blurb: 'Enrollment periods, deadlines, and penalties.' },
  'medicare-advantage':{ title: 'Medicare Advantage',          icon: 'fa-hospital',      blurb: 'How Advantage plans work and who they fit.' },
  'medigap':           { title: 'Medigap',                     icon: 'fa-shield-halved', blurb: 'Medicare Supplement plans compared.' },
  'dual-eligible':     { title: 'Dual Eligible',               icon: 'fa-hand-holding-heart', blurb: 'Medicare + Medicaid and extra help programs.' },
  'news':              { title: 'Medicare News',               icon: 'fa-newspaper',     blurb: 'Annual changes and what they mean for you.' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

/** News categories. Keys are the news collection `category` enum values; order
 *  drives the category chips on the Medicare News hub. */
export const NEWS_CATEGORIES = {
  'prescription-drugs': { title: 'Prescription Drugs',    icon: 'fa-pills',                blurb: 'Part D costs, the $2,000 cap, insulin savings, and formulary news.' },
  'costs':              { title: 'Costs & Savings',       icon: 'fa-sack-dollar',          blurb: 'Premiums, IRMAA, Extra Help, and ways to lower what you pay.' },
  'enrollment':         { title: 'Enrollment',            icon: 'fa-calendar-check',       blurb: 'Enrollment periods, deadlines, and Special Enrollment news.' },
  'medicare-advantage': { title: 'Medicare Advantage',    icon: 'fa-hospital',             blurb: 'Plan, network, and benefit changes for Advantage members.' },
  'supplements':        { title: 'Supplements (Medigap)', icon: 'fa-shield-halved',        blurb: 'Medicare Supplement updates and what they mean for you.' },
  'alerts':             { title: 'Scams & Alerts',        icon: 'fa-triangle-exclamation', blurb: 'Fraud warnings and time-sensitive notices for Utah seniors.' },
  'cms-news':           { title: 'CMS & Policy',          icon: 'fa-landmark',             blurb: 'Federal Medicare policy changes from CMS, explained simply.' },
} as const;

export type NewsCategoryKey = keyof typeof NEWS_CATEGORIES;

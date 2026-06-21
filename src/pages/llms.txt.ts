import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { TOOLS, CATEGORIES } from '../consts';
import { FAQ_CATEGORIES } from '../data/faqs';
import { PLACES, hubHref, pageHref, type Place } from '../data/places';
import { CURRENT as F } from '../data/figures';

const SITE = 'https://altamedicare.com';
const m = (n: number) => `$${n.toLocaleString('en-US')}`;
const d = (n: number) => `$${n.toFixed(2)}`;
const msp = F.medicareSavingsPrograms;

// /llms.txt — a generated knowledge-graph map for AI crawlers. Built from the
// same data sources as the site (blog collection, FAQ data, tools, places) so it
// never drifts as content grows. Spec: https://llmstxt.org
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  const byCat = new Map<string, typeof posts>();
  for (const p of posts) {
    const arr = byCat.get(p.data.category) ?? [];
    arr.push(p);
    byCat.set(p.data.category, arr);
  }

  const link = (title: string, href: string, desc: string) => `- [${title}](${SITE}${href}): ${desc}`;

  const placeBlock = (p: Place) => [
    link(`Medicare in ${p.name}`, hubHref(p), `Overview of Medicare options, enrollment, and local help in ${p.name}.`),
    link(`Medicare Advantage in ${p.name}`, pageHref(p, 'medicare-advantage'), `How Part C (HMO/PPO), networks, and extra benefits work in ${p.name}.`),
    link(`Medicare Supplement in ${p.name}`, pageHref(p, 'medicare-supplement'), `Medigap Plan G, Plan N, and guaranteed issue rights in ${p.name}.`),
    link(`Part D in ${p.name}`, pageHref(p, 'part-d'), `Prescription drug coverage, formularies, and the $2,000 cap in ${p.name}.`),
  ].join('\n');

  const states = PLACES.filter((p) => p.kind === 'state');
  const counties = PLACES.filter((p) => p.kind === 'county');

  const sections: string[] = [];

  sections.push(
    `# AltaMedicare`,
    ``,
    `> Independent, plain-English Medicare guidance for Utah from Bret Swope, a licensed local agent in Orem, UT. Free help understanding Medicare and comparing Medicare Advantage, Medigap (Medicare Supplement), and Part D — plus interactive calculators. Phone: (801) 368-0700.`,
    ``,
    `AltaMedicare publishes evergreen educational content and free tools. We do not rank carriers, publish plan counts, or push "best plans" — plan comparisons and enrollment happen through a secure SunFire portal or by talking with Bret. All dollar figures are for 2026.`,
  );

  sections.push(
    ``,
    `## Key ${F.year} Medicare facts`,
    `- Part B standard premium: ${d(F.partB.premium)}/month; Part B annual deductible: ${m(F.partB.deductible)}; then 20% coinsurance. Original Medicare alone has no out-of-pocket maximum.`,
    `- Part A: $0 premium for most people; inpatient hospital deductible ${m(F.partA.deductible)} per benefit period.`,
    `- Part D: national base premium ${d(F.partD.basePremium)}; ${m(F.partD.annualCap)} annual out-of-pocket cap; insulin capped at ${m(F.partD.insulinCap)}/month; ACIP-recommended adult vaccines $0. The old coverage gap ("donut hole") is gone.`,
    `- Late penalties: Part B +${F.penalties.partBPerYearPct * 100}% for each full 12 months without it (lifetime); Part D ${F.penalties.partDPerMonthPct * 100}% of ${d(F.partD.basePremium)} per full month without creditable coverage (lifetime).`,
    `- IRMAA (income surcharge on Part B & Part D) starts above ${m(F.irmaa.single[0])} single / ${m(F.irmaa.married[0])} joint, based on income from two years prior (${F.year} uses ${F.year - 2}).`,
    `- Medicare Savings Programs (${F.year} monthly income; shared resource limits ${m(msp.resources.individual)} single / ${m(msp.resources.couple)} married): QMB ${m(msp.qmb.individual)}/${m(msp.qmb.couple)}, SLMB ${m(msp.slmb.individual)}/${m(msp.slmb.couple)}, QI ${m(msp.qi.individual)}/${m(msp.qi.couple)}.`,
    `- Extra Help (Part D Low-Income Subsidy) ${F.year} resource limits: ${m(F.extraHelp.resourcesIndividual)} single / ${m(F.extraHelp.resourcesCouple)} married; covered-drug copays no more than ${d(F.extraHelp.maxDrugCopay)}.`,
    `- Enrollment windows: Initial Enrollment Period = 7 months around age 65; Annual Enrollment Period = Oct 15–Dec 7; General Enrollment Period and Medicare Advantage Open Enrollment = Jan 1–Mar 31.`,
    `- By law Medicare cannot cover drugs used for weight loss; some such drugs are covered for other FDA-approved uses.`,
  );

  sections.push(
    ``,
    `## Free Tools & Calculators`,
    ...Object.values(TOOLS).map((t) => link(t.title, t.href, t.desc)),
  );

  sections.push(
    ``,
    `## Medicare FAQ`,
    link('Medicare FAQ Hub', '/faq.html', `${FAQ_CATEGORIES.reduce((n, c) => n + c.faqs.length, 0)} common Medicare questions answered, organized by topic.`),
    ...FAQ_CATEGORIES.map((c) => link(`${c.title} FAQ`, `/faq/${c.key}.html`, `${c.faqs.length} answers — ${c.blurb}`)),
  );

  // Guides, grouped by blog category in the canonical CATEGORIES order.
  for (const [key, meta] of Object.entries(CATEGORIES)) {
    const group = byCat.get(key);
    if (!group || !group.length) continue;
    const heading = key === 'drug-coverage' ? `${meta.title} (drug cluster)` : meta.title;
    sections.push(
      ``,
      `## Guides — ${heading}`,
      ...group.map((p) => link(p.data.title, `/blog/${p.slug}.html`, p.data.description)),
    );
  }

  if (states.length) {
    sections.push(``, `## Medicare in Utah`, ...states.map(placeBlock));
  }
  if (counties.length) {
    sections.push(``, `## Utah Counties`, ...counties.map(placeBlock));
  }

  sections.push(
    ``,
    `## Plans & Topics`,
    link('Medicare Basics', '/medicare-basics.html', 'Parts A, B, C, and D explained in plain English.'),
    link('Medicare Advantage', '/medicare-advantage.html', 'All-in-one Part C plans with networks and extra benefits.'),
    link('Medicare Supplement (Medigap)', '/medicare-supplement.html', 'Predictable costs and nationwide provider flexibility.'),
    link('Prescription Drug Plans (Part D)', '/prescription-drug-plans.html', 'Formularies, insulin caps, and the $2,000 out-of-pocket cap.'),
    link('Dual Eligible / Medicaid (D-SNP)', '/dual-eligible.html', 'Extra benefits for people with both Medicare and Medicaid.'),
    link('Dental, Vision & Hearing', '/dental-vision-hearing.html', 'Coverage Original Medicare leaves out.'),
    link('Turning 65', '/turning-65.html', 'Enrollment timeline and avoiding lifetime late penalties.'),
    link('Drug Savings', '/drug-savings.html', 'Free prescription review across Part D plans and pharmacies.'),
  );

  sections.push(
    ``,
    `## Contact & Enrollment`,
    link('About Bret Swope', '/about.html', 'Licensed Utah Medicare agent based in Orem.'),
    link('Contact', '/contact.html', 'Call or text (801) 368-0700 · Orem, Utah · Mon–Fri 9am–6pm MT.'),
    `- Compare Plans Online (secure portal): ${'https://www.sunfirematrix.com/app/consumer/medicareadvocates/5454608/#/'}`,
    ``,
  );

  return new Response(sections.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

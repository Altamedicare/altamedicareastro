// ── OPERATIONAL DATA for the Prescription Drug Assistance system ────────────
// P2.4 (ADR-002 physical split): this file holds ONLY the audited operational
// fields — ids, program names, URLs, phone numbers, covered drugs, condition
// keys, fund statuses. The human-facing COPY (taglines, helps, eligibility
// text, condition labels, page templates) lives in
// src/i18n/shared/drug-assistance/{locale}.json and joins here by id/key/slug
// through the typed accessors below. Pages and the finder bridge keep their
// original shapes — they never learn the copy moved.
//
// VERIFY QUARTERLY: program names, URLs, phone numbers, and fund statuses
// change often. Edit THIS file only — every locale follows automatically.

import { getSharedModule } from '../i18n/shared';

export type ProgramType = 'government' | 'foundation' | 'manufacturer' | 'database';

/** Manually-maintained fund-availability status for nonprofit foundations. */
export type FundStatus = 'open' | 'verify' | 'closed';

export interface Program {
  id: string;
  type: ProgramType;
  name: string;
  tagline: string;
  /** "any" or a list of ConditionKey values. */
  conditions: string[];
  helps: string;
  /** Optional short "Typical assistance" line; otherwise derived by type in the UI. */
  typical?: string;
  eligibility: string;
  url: string;
  urlLabel: string;
  phone?: string;
  /** Brand names a manufacturer program may cover. */
  drugs?: string[];
  /** Foundations only: manually-maintained fund availability (verify quarterly). */
  status?: FundStatus;
}

export interface Condition { key: string; label: string; }

export interface FeaturedDrug {
  slug: string;          // URL slug → /<slug>-assistance-program.html
  drug: string;          // brand name as it appears in PROGRAM_CORE[].drugs
  generic: string;
  conditionLabel: string;
  conditions: string[];  // ConditionKey values — drives foundation matching
  blogSlug: string;      // /blog/<blogSlug>.html
}

type ProgramCore = Omit<Program, 'tagline' | 'helps' | 'typical' | 'eligibility'>;
type FeaturedCore = Omit<FeaturedDrug, 'conditionLabel'>;

/** THE quarterly-audit surface. Names/URLs/phones/statuses only — no copy. */
const PROGRAM_CORE: ProgramCore[] = [
  {id: "extra-help", type: "government", name: "Medicare Extra Help (Part D LIS)", conditions: ["any"], url: "https://www.ssa.gov/medicare/part-d-extra-help", urlLabel: "Apply at SSA.gov", phone: "1-800-772-1213"},
  {id: "msp", type: "government", name: "Medicare Savings Programs & Medicaid", conditions: ["any"], url: "https://www.medicare.gov/basics/costs/help/drug-costs", urlLabel: "Medicare.gov — get help with costs", phone: "1-866-435-7414"},
  {id: "pan", type: "foundation", name: "PAN Foundation", status: "open", conditions: ["cancer", "autoimmune", "heart", "diabetes", "kidney", "respiratory", "bone"], url: "https://www.panfoundation.org/", urlLabel: "panfoundation.org", phone: "1-866-316-7263"},
  {id: "healthwell", type: "foundation", name: "HealthWell Foundation", status: "verify", conditions: ["cancer", "autoimmune", "heart", "diabetes", "kidney", "respiratory", "bone"], url: "https://www.healthwellfoundation.org/", urlLabel: "healthwellfoundation.org", phone: "1-800-675-8416"},
  {id: "gooddays", type: "foundation", name: "Good Days", status: "verify", conditions: ["cancer", "autoimmune", "heart", "kidney", "respiratory"], url: "https://www.mygooddays.org/", urlLabel: "mygooddays.org", phone: "1-877-968-7233"},
  {id: "paf-copay", type: "foundation", name: "Patient Advocate Foundation Co-Pay Relief", status: "open", conditions: ["cancer", "diabetes", "autoimmune", "heart", "respiratory", "kidney"], url: "https://www.copays.org/", urlLabel: "copays.org", phone: "1-866-512-3861"},
  {id: "needymeds", type: "database", name: "NeedyMeds", conditions: ["any"], url: "https://www.needymeds.org/", urlLabel: "needymeds.org", phone: "1-800-503-6897"},
  {id: "mat", type: "database", name: "Medicine Assistance Tool (MAT)", conditions: ["any"], url: "https://medicineassistancetool.org/", urlLabel: "medicineassistancetool.org"},
  {id: "rxassist", type: "database", name: "RxAssist", conditions: ["any"], url: "https://www.rxassist.org/", urlLabel: "rxassist.org"},
  {id: "bms", type: "manufacturer", name: "BMS Patient Assistance Foundation", conditions: ["blood-clots", "heart", "cancer"], drugs: ["Eliquis", "Revlimid", "Pomalyst", "Opdivo", "Sprycel"], url: "https://www.bmspaf.org/", urlLabel: "bmspaf.org", phone: "1-800-736-0003"},
  {id: "jjpaf", type: "manufacturer", name: "Johnson & Johnson Patient Assistance Foundation", conditions: ["blood-clots", "heart", "autoimmune", "cancer"], drugs: ["Xarelto", "Stelara", "Tremfya", "Imbruvica", "Invega", "Simponi"], url: "https://www.jjpaf.org/", urlLabel: "jjpaf.org", phone: "1-800-652-6227"},
  {id: "novocare", type: "manufacturer", name: "NovoCare / Novo Nordisk PAP", conditions: ["diabetes"], drugs: ["Ozempic", "Rybelsus", "Victoza", "Tresiba", "Levemir", "NovoLog", "Fiasp"], url: "https://www.novocare.com/", urlLabel: "novocare.com", phone: "1-866-310-7549"},
  {id: "lillycares", type: "manufacturer", name: "Lilly Cares Foundation", conditions: ["diabetes"], drugs: ["Mounjaro", "Trulicity", "Humalog", "Basaglar", "Jardiance", "Zepbound", "Verzenio"], url: "https://www.lillycares.com/", urlLabel: "lillycares.com", phone: "1-800-545-6962"},
  {id: "bicares", type: "manufacturer", name: "BI Cares Foundation", conditions: ["diabetes", "heart", "kidney", "respiratory"], drugs: ["Jardiance", "Ofev", "Spiriva", "Trajenta", "Combivent", "Pradaxa"], url: "https://www.bicares.org/", urlLabel: "bicares.org", phone: "1-800-556-8317"},
  {id: "azme", type: "manufacturer", name: "AZ&Me Prescription Savings Program", conditions: ["diabetes", "heart", "kidney", "respiratory", "cancer"], drugs: ["Farxiga", "Brilinta", "Symbicort", "Breztri", "Tagrisso", "Calquence", "Lynparza"], url: "https://www.azandmeapp.com/", urlLabel: "azandmeapp.com", phone: "1-800-292-6363"},
  {id: "novartis", type: "manufacturer", name: "Novartis Patient Assistance Foundation", conditions: ["heart", "autoimmune", "cholesterol", "cancer"], drugs: ["Entresto", "Cosentyx", "Leqvio", "Kisqali", "Promacta"], url: "https://www.patient.novartispharma.com/", urlLabel: "Novartis Patient Assistance", phone: "1-800-277-2254"},
  {id: "abbvie", type: "manufacturer", name: "myAbbVie Assist", conditions: ["autoimmune", "cancer"], drugs: ["Humira", "Skyrizi", "Rinvoq", "Imbruvica", "Venclexta", "Linzess"], url: "https://www.abbvie.com/patients/patient-assistance.html", urlLabel: "myAbbVie Assist", phone: "1-800-222-6885"},
  {id: "amgen", type: "manufacturer", name: "Amgen Safety Net Foundation", conditions: ["autoimmune", "cholesterol", "heart", "bone", "cancer"], drugs: ["Enbrel", "Repatha", "Otezla", "Prolia", "Aimovig", "Neulasta"], url: "https://www.amgensafetynetfoundation.com/", urlLabel: "amgensafetynetfoundation.com", phone: "1-888-762-6436"},
  {id: "sanofi", type: "manufacturer", name: "Sanofi Patient Connection", conditions: ["autoimmune", "respiratory", "cholesterol", "heart", "diabetes"], drugs: ["Dupixent", "Praluent", "Lantus", "Toujeo", "Admelog", "Libtayo"], url: "https://www.sanofipatientconnection.com/", urlLabel: "sanofipatientconnection.com", phone: "1-888-847-4877"},
  {id: "pfizer", type: "manufacturer", name: "Pfizer RxPathways", conditions: ["cancer", "autoimmune", "blood-clots", "heart"], drugs: ["Ibrance", "Xeljanz", "Eliquis", "Lyrica", "Xtandi", "Inlyta"], url: "https://www.pfizerrxpathways.com/", urlLabel: "pfizerrxpathways.com", phone: "1-844-989-7284"},
  {id: "astellas", type: "manufacturer", name: "Astellas Pharma Support Solutions", conditions: ["cancer"], drugs: ["Xtandi", "Myrbetriq", "Padcev", "Xospata"], url: "https://www.astellaspharmasupportsolutions.com/", urlLabel: "Astellas Pharma Support", phone: "1-800-477-6472"},
  {id: "gsk", type: "manufacturer", name: "GSK Patient Assistance Program", conditions: ["respiratory"], drugs: ["Trelegy Ellipta", "Breo Ellipta", "Anoro Ellipta", "Nucala", "Advair"], url: "https://www.gskforyou.com/", urlLabel: "gskforyou.com", phone: "1-866-728-4368"},
];

const FEATURED_CORE: FeaturedCore[] = [
  {slug: "eliquis", drug: "Eliquis", generic: "apixaban", conditions: ["blood-clots", "heart"], blogSlug: "does-medicare-cover-eliquis"},
  {slug: "xarelto", drug: "Xarelto", generic: "rivaroxaban", conditions: ["blood-clots", "heart"], blogSlug: "does-medicare-cover-xarelto"},
  {slug: "ozempic", drug: "Ozempic", generic: "semaglutide", conditions: ["diabetes"], blogSlug: "does-medicare-cover-ozempic"},
  {slug: "mounjaro", drug: "Mounjaro", generic: "tirzepatide", conditions: ["diabetes"], blogSlug: "does-medicare-cover-mounjaro"},
  {slug: "trulicity", drug: "Trulicity", generic: "dulaglutide", conditions: ["diabetes"], blogSlug: "does-medicare-cover-trulicity"},
  {slug: "jardiance", drug: "Jardiance", generic: "empagliflozin", conditions: ["diabetes", "heart", "kidney"], blogSlug: "does-medicare-cover-jardiance"},
  {slug: "farxiga", drug: "Farxiga", generic: "dapagliflozin", conditions: ["diabetes", "heart", "kidney"], blogSlug: "does-medicare-cover-farxiga"},
  {slug: "entresto", drug: "Entresto", generic: "sacubitril/valsartan", conditions: ["heart"], blogSlug: "does-medicare-cover-entresto"},
  {slug: "repatha", drug: "Repatha", generic: "evolocumab", conditions: ["cholesterol", "heart"], blogSlug: "does-medicare-cover-repatha"},
  {slug: "humira", drug: "Humira", generic: "adalimumab", conditions: ["autoimmune"], blogSlug: "does-medicare-cover-humira"},
  {slug: "enbrel", drug: "Enbrel", generic: "etanercept", conditions: ["autoimmune"], blogSlug: "does-medicare-cover-enbrel"},
  {slug: "skyrizi", drug: "Skyrizi", generic: "risankizumab", conditions: ["autoimmune"], blogSlug: "does-medicare-cover-skyrizi"},
  {slug: "rinvoq", drug: "Rinvoq", generic: "upadacitinib", conditions: ["autoimmune"], blogSlug: "does-medicare-cover-rinvoq"},
  {slug: "dupixent", drug: "Dupixent", generic: "dupilumab", conditions: ["autoimmune", "respiratory"], blogSlug: "does-medicare-cover-dupixent"},
];

const CONDITION_KEYS: string[] = ["cancer","diabetes","heart","blood-clots","cholesterol","autoimmune","respiratory","kidney","hiv","bone"];

/** Presentation metadata (badge colors/dots); labels join from the module. */
const FUND_STATUS_PRESENTATION: Record<FundStatus, { cls: string; dot: string }> = {
  open: { cls: 'b-green', dot: '🟢' },
  verify: { cls: 'b-amber', dot: '🟡' },
  closed: { cls: 'b-red', dot: '🔴' },
};

// ── Shared-module copy (translated; joined below) ────────────────────────────
export interface DrugShell {
  title: string; description: string; crumbTools: string; crumbFinder: string;
  h1: string; lede: string; calloutHtml: string;
  secManufacturerHeading: string; secManufacturerBlurb: string;
  secFoundationHeading: string; secFoundationBlurb: string;
  secGovernmentHeading: string; secGovernmentBlurb: string;
  secDatabaseHeading: string; secDatabaseBlurb: string;
  whoMayQualify: string; conditionsLabel: string; finderCalloutHtml: string;
  faqEyebrow: string; faqH2: string;
  faqs: { q: string; a: string }[];
  relatedEyebrow: string; relatedH2: string; relatedCardTitle: string;
  relatedCardText: string; relatedView: string; finderBtn: string;
  ctaH2: string; ctaText: string; ctaTextBtn: string; ctaCallLabel: string;
  smsBody: string;
}
interface DrugCopy {
  shell: DrugShell;
  typeMeta: { key: string; label: string }[];
  statusMeta: { key: string; label: string }[];
  conditions: { key: string; label: string }[];
  programs: { id: string; tagline: string; helps: string; typical?: string; eligibility: string }[];
  featuredDrugs: { slug: string; conditionLabel: string }[];
}
const copy = (locale?: string) => getSharedModule<DrugCopy>('drug-assistance', locale);

/** Full Program objects in a locale (operational fields byte-identical across
 *  locales by construction — they come from PROGRAM_CORE). Key order matches
 *  the original literals so the finder bridge output stays byte-stable. */
export function getPrograms(locale?: string): Program[] {
  const byId = new Map(copy(locale).programs.map((p) => [p.id, p]));
  return PROGRAM_CORE.map((c) => {
    const t = byId.get(c.id);
    if (!t) throw new Error(`drug-assistance: no copy for program "${c.id}" — regenerate the shared module`);
    return {
      id: c.id, type: c.type, name: c.name,
      ...(c.status ? { status: c.status } : {}),
      tagline: t.tagline,
      conditions: c.conditions,
      ...(c.drugs ? { drugs: c.drugs } : {}),
      helps: t.helps,
      ...(t.typical ? { typical: t.typical } : {}),
      eligibility: t.eligibility,
      url: c.url, urlLabel: c.urlLabel,
      ...(c.phone ? { phone: c.phone } : {}),
    } as Program;
  });
}

export function getConditions(locale?: string): Condition[] {
  const byKey = new Map(copy(locale).conditions.map((c) => [c.key, c.label]));
  return CONDITION_KEYS.map((key) => ({ key, label: byKey.get(key) ?? key }));
}

export function getFeaturedDrugs(locale?: string): FeaturedDrug[] {
  const bySlug = new Map(copy(locale).featuredDrugs.map((d) => [d.slug, d.conditionLabel]));
  return FEATURED_CORE.map((c) => ({
    slug: c.slug, drug: c.drug, generic: c.generic,
    conditionLabel: bySlug.get(c.slug) ?? '',
    conditions: c.conditions, blogSlug: c.blogSlug,
  }));
}

export function getTypeMeta(locale?: string): Record<ProgramType, { label: string }> {
  return Object.fromEntries(copy(locale).typeMeta.map((t) => [t.key, { label: t.label }])) as Record<ProgramType, { label: string }>;
}

export function getFundStatusMeta(locale?: string): Record<FundStatus, { label: string; cls: string; dot: string }> {
  const labels = new Map(copy(locale).statusMeta.map((s) => [s.key, s.label]));
  return Object.fromEntries(
    (Object.keys(FUND_STATUS_PRESENTATION) as FundStatus[]).map((k) => [
      k, { label: labels.get(k) ?? k, ...FUND_STATUS_PRESENTATION[k] },
    ]),
  ) as Record<FundStatus, { label: string; cls: string; dot: string }>;
}

export const getDrugShell = (locale?: string): DrugShell => copy(locale).shell;

// ── English-default views (finder bridge, sitemap, llms.txt, legacy) ────────
export const PROGRAMS: Program[] = getPrograms();
export const CONDITIONS: Condition[] = getConditions();
export const FEATURED_DRUGS: FeaturedDrug[] = getFeaturedDrugs();
export const TYPE_META: Record<ProgramType, { label: string }> = getTypeMeta();
export const FUND_STATUS_META: Record<FundStatus, { label: string; cls: string; dot: string }> = getFundStatusMeta();

export const condLabel = (key: string, locale?: string): string =>
  getConditions(locale).find((c) => c.key === key)?.label ?? key;

/** Group the programs relevant to a specific drug (locale-aware). */
export function programsForDrug(
  drugName: string,
  conditionKeys?: string[],
  locale?: string,
): { manufacturer: Program[]; foundation: Program[]; government: Program[]; database: Program[] } {
  const all = getPrograms(locale);
  const q = drugName.toLowerCase();

  const manufacturer = all.filter(
    (p) => p.type === 'manufacturer' && p.drugs?.some((d) => d.toLowerCase().includes(q)),
  );

  const drugConds = new Set<string>(conditionKeys ?? []);
  if (drugConds.size === 0) {
    for (const p of manufacturer) p.conditions.filter((c) => c !== 'any').forEach((c) => drugConds.add(c));
  }

  const foundation = all.filter(
    (p) => p.type === 'foundation' && p.conditions.some((c) => drugConds.has(c)),
  );
  const government = all.filter((p) => p.type === 'government');
  const database = all.filter((p) => p.type === 'database');

  return { manufacturer, foundation, government, database };
}

// ---------------------------------------------------------------------------
// src/types/MedicationAssistance.ts — contracts for the Prescription
// Assistance project (docs/PRESCRIPTION-ASSISTANCE-PROJECT.md §17–§18).
//
// A MedicationAssistanceRecord is the independently-researched, source-tracked
// assistance profile for ONE brand medication. It extends — never replaces —
// the existing `Drug` entry in data/drugs.ts: the record's `slug` must match a
// FEATURED_DRUGS slug, so every medication keeps exactly one canonical page at
// /<slug>-assistance-program.html. Records live in data/medicationAssistance/.
//
// Design rules encoded here:
//   • Every program carries its own `sources[]` with a `checked` date, so a
//     maintainer can answer "where did this claim come from, and when?"
//     without re-researching (spec §18, §25).
//   • `kind` keeps the four kinds of help apart — a commercial copay card is
//     NOT a patient-assistance program, and neither is a charitable grant or
//     Medicare Extra Help (spec §5B, §16 Rule 5).
//   • `status` distinguishes "listed" from "accepting applications" (spec §6).
//   • `medicare` records what the OFFICIAL program says about Medicare
//     enrollees, never an inference from a sibling drug (spec §11).
// ---------------------------------------------------------------------------

// A dated citation base (ported from Vernal's types/Page Evidence shape --
// AltaMedicare has no types/Page module).
export interface Evidence {
  title: string;
  url: string;
  /** 'CMS' | 'Medicare.gov' | 'SSA' | ... */
  publisher: string;
  /** ISO publication/accessed date. */
  date?: string;
}

// ── Taxonomy: two axes, one classification each ──────────────────────────────
//
// Adopted 2026-08-26 (docs/PRESCRIPTION-ASSISTANCE-TAXONOMY-AUDIT.md). A
// medication is classified on exactly two independent axes:
//
//   conditions  — what the patient has        (data/conditions.ts, CANONICAL)
//   drugClass   — what the medication IS      (data/medicationAssistance/drugClasses.ts)
//
// `conditions` is load-bearing beyond navigation: programsForDrug() matches
// nonprofit disease funds by condition key, so a wrong key shows the wrong
// charitable grants. Never rename or reinterpret a condition key without
// auditing every consumer.
//
// Browse categories are NOT a third axis. An AssistanceCategory is a *derived
// view* over the two axes — see categoriesFor(). A record is never tagged with
// a category, which is what previously duplicated 'diabetes' and 'heart' in the
// taxonomy tags.

/** Pharmacological / therapeutic class — what the medication IS. Extend the
 *  vocabulary in data/medicationAssistance/drugClasses.ts when a researched
 *  medication needs a class that isn't there yet (spec §16 Rule 1: confirm the
 *  class against the label during that medication's research pass). */
export type DrugClassKey =
  | 'glp-1'
  | 'sglt2'
  | 'insulin'
  | 'anticoagulant'
  | 'antiplatelet'
  | 'biologic'
  | 'pcsk9'
  | 'arni'
  | 'triple-inhaler'
  | 'jak-inhibitor'
  | 'acl-inhibitor'
  | 'ics-laba'
  | 'lama'
  | 'lama-laba'
  | 'pde4-inhibitor'
  | 'kinase-inhibitor'
  | 'dpp-4'
  | 'transthyretin-stabilizer'
  | 'antianginal'
  | 'omega-3';

export interface DrugClass {
  key: DrugClassKey;
  /** How the class is named on the page, e.g. "SGLT2 inhibitor". */
  label: string;
  /** One-line plain-language explanation for a non-clinical reader. */
  blurb: string;
}

/** A directory browse category — the project's nine-category taxonomy (spec
 *  §14) expressed as a VIEW over the two axes rather than as record-level tags.
 *  A medication appears in the category if it matches any listed condition or
 *  any listed drug class. `fallback: true` marks the catch-all used when a
 *  medication matches nothing else. */
export type AssistanceCategoryKey =
  | 'diabetes'
  | 'heart'
  | 'blood-thinners'
  | 'cholesterol'
  | 'copd-asthma'
  | 'lung-disease'
  | 'biologics'
  | 'glp-1'
  | 'autoimmune'
  | 'specialty';

export interface AssistanceCategory {
  key: AssistanceCategoryKey;
  label: string;
  /** One-line description used in the directory. */
  blurb: string;
  /** Condition keys (data/conditions.ts) that place a medication in this view. */
  conditions?: string[];
  /** Drug classes that place a medication in this view. */
  drugClass?: DrugClassKey[];
  /** The catch-all view, used only when nothing else matches. */
  fallback?: true;
}

/** The minimum shape categoriesFor() needs: the two axes. A legacy `Drug` from
 *  data/drugs.ts satisfies it with `conditions` alone. */
export interface TaxonomySubject {
  conditions: string[];
  drugClass?: DrugClassKey[];
}

/**
 * The kind of help. Kept deliberately separate because the eligibility rules
 * differ — this is exactly the distinction a Medicare audience gets wrong.
 *
 *   manufacturer-pap      free/low-cost drug from the maker, by income
 *   manufacturer-savings  commercial copay/savings card (usually excludes Medicare)
 *   manufacturer-direct   manufacturer self-pay / direct-to-patient pricing
 *   charitable            nonprofit copay/grant fund (diagnosis-based)
 *   government            Medicare Extra Help, Medicare Savings Programs, etc.
 */
export type ProgramKind =
  | 'manufacturer-pap'
  | 'manufacturer-savings'
  | 'manufacturer-direct'
  | 'charitable'
  | 'government';

/**
 * Current status, as read on the OFFICIAL source on `checked` date.
 *
 *   open       accepting applications
 *   limited    accepting, but with a material restriction (e.g. re-enrollment only)
 *   closed     exists, but closed to new applicants
 *   verify     listed, but current availability could not be confirmed
 *   not-found  no applicable program/fund was found — an honest negative
 */
export type ProgramStatus = 'open' | 'limited' | 'closed' | 'verify' | 'not-found';

/**
 * What the official program says about Medicare beneficiaries.
 *
 *   eligible     Medicare Part D enrollees may apply
 *   conditional  may apply under a stated condition (e.g. after a spending threshold)
 *   excluded     the program excludes people with Medicare / government insurance
 *   unknown      the official source does not say
 */
export type MedicareEligibility = 'eligible' | 'conditional' | 'excluded' | 'unknown';

/** A dated citation. `checked` is the ISO date the claim was read on the source. */
export interface SourceRef extends Evidence {
  checked: string;
  /** Short note on what the source supports ("eligibility language", "fund status"). */
  supports?: string;
}

export interface AssistanceProgram {
  /** Stable id within the record ('azme', 'healthwell', 'totalassist', 'extra-help'…). */
  id: string;
  kind: ProgramKind;
  name: string;
  operator: string;
  status: ProgramStatus;
  /** Plain-language status line shown on the card, e.g. "Closed to new applicants (checked Aug 26, 2026)". */
  statusNote: string;
  medicare: MedicareEligibility;
  /** The Medicare rule in the program's own terms, paraphrased for readers. */
  medicareNote: string;
  /** What the program does, in one or two sentences. */
  summary: string;
  /** What costs it can cover, if the source says. */
  covers?: string;
  /** Eligibility bullets — only what the official source supports. */
  eligibility: string[];
  /** Information / documents the program asks for — only what the source lists. */
  requirements?: string[];
  /** Who completes the application and how (patient, prescriber, both). */
  howToApply: string;
  applyUrl?: string;
  applyLabel?: string;
  /** Official program phone, verbatim from the official page. Never invented. */
  phone?: string;
  /** Charitable programs: the specific fund / diagnosis the drug falls under. */
  fund?: string;
  sources: SourceRef[];
}

export interface ApplicationStep {
  title: string;
  body: string;
  bullets?: string[];
}

export interface ChecklistItem {
  item: string;
  /** Which program(s) ask for it, when it differs. */
  note?: string;
}

export interface Alternative {
  text: string;
  href?: string;
  label?: string;
}

export interface VideoFrame {
  title: string;
  status: 'coming-soon' | 'published';
  /** Set only when a real video exists. No placeholder ids. */
  youtubeId?: string;
  description?: string;
}

export interface RelatedResource {
  label: string;
  href: string;
  blurb?: string;
}

export interface MedicationAssistanceRecord {
  /** Must equal a FEATURED_DRUGS slug → /<slug>-assistance-program.html. */
  slug: string;
  brandName: string;
  genericName: string;
  manufacturer: string;
  /** Axis 1 — clinical condition keys (data/conditions.ts). Load-bearing:
   *  drives charitable-fund matching, hero styling and directory grouping. */
  conditions: string[];
  /** Axis 2 — pharmacological class (first = primary). Browse categories are
   *  derived from these two axes; records carry no category field. */
  drugClass: DrugClassKey[];
  /** What the medication is generally used for (one sentence). */
  description: string;
  /** FDA-approved uses, as bullets. */
  usedFor: string[];
  /** Why people encounter significant cost with it. */
  whyCostly: string;
  /** Medicare coverage context (Part D, negotiated price, restrictions). */
  medicareContext: string;
  /** The "Quick Answer" block. */
  quickAnswer: { verdict: string; points: string[] };
  /** All applicable programs, including honest negatives (status 'not-found'). */
  programs: AssistanceProgram[];
  /** One-paragraph summary of the charitable picture (open / closed / none found). */
  charitableSummary: string;
  /** Optional drug-specific line for the Extra Help section. */
  extraHelpNote?: string;
  /** The seven-step, medication-specific application guide. */
  applicationSteps: ApplicationStep[];
  documentsNeeded: ChecklistItem[];
  /** "If assistance is unavailable" — the next places to check. */
  ifUnavailable: Alternative[];
  faqs: { question: string; answer: string }[];
  /** Slugs of related medication pages. */
  relatedMedications: string[];
  relatedResources: RelatedResource[];
  /** Page-level official sources (rendered + carried into schema). */
  sources: SourceRef[];
  /** ISO date the assistance information was last verified. */
  lastVerified: string;
  /** ISO date the page first published (kept from the legacy page). */
  datePublished: string;
  video: VideoFrame;
  /** Meta description (title/H1 follow the locked pattern in the registry). */
  description_meta: string;
}

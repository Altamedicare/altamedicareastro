// ---------------------------------------------------------------------------
// Ranexa (ranolazine) — Gilead Sciences. Independently researched 2026-08-26.
// Batch 8 — a NEW slug.
//
// Ranexa is the registry's first ANTIANGINAL, and its first record for a
// medication whose manufacturer has effectively left the therapeutic area.
//
// The findings that shape this page:
//   • RANEXA.COM NO LONGER SERVES A SITE. The domain resolves in DNS but did not
//     complete an HTTPS connection on the checked date. There is no brand patient
//     site to look for a savings card on.
//   • GILEAD HAS NO CARDIOVASCULAR PROGRAM. Its Medication Access pages name no
//     Ranexa or ranolazine program, and the therapeutic areas it lists are
//     Virology, Oncology and Inflammation. Gilead Advancing Access presents HIV
//     treatment and prevention only.
//   • RANOLAZINE IS THE MOST COMPREHENSIVELY GENERIC MEDICATION IN THIS ENTIRE
//     BATCH: 35 labelled products across 31 distinct labelers on DailyMed.
//
// Taken together those three facts make a genuinely useful page rather than a
// thin one: the honest answer is that the brand has been superseded, the
// manufacturer has moved on, and a Medicare beneficiary should be asking their
// prescriber about generic ranolazine rather than hunting for a program.
//
// TAXONOMY: this record introduces `antianginal`. The label is unusual in stating
// no class at all — the Highlights call it only "Ranexa (ranolazine)
// extended-release tablets" — and the mechanism section says "The mechanism of
// action of ranolazine's antianginal effects has not been determined". The key is
// named for the effect the label does claim.
//
// Built LINK-DARK under D8: no does-medicare-cover-* link appears in this record.
// ---------------------------------------------------------------------------

import type { MedicationAssistanceRecord } from '../../types/MedicationAssistance';
import {
  CHECKED,
  SRC,
  TOTALASSIST_ELIGIBILITY,
  TOTALASSIST_REQUIREMENTS,
  TOTALASSIST_HOW_TO_APPLY,
  TOTALASSIST_PHONE,
  HEALTHWELL_PHONE,
  CHECKLIST_MEDICARE,
  standardAlternatives,
} from './shared';

const label = {
  title: 'Ranexa prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8d442b8c-97a8-40a9-8603-f9cd0542cedc',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '"Ranexa (ranolazine) extended-release tablets"; "Ranexa is indicated for the treatment of chronic angina. Ranexa may be used with beta-blockers, nitrates, calcium channel blockers, anti-platelet therapy, lipid-lowering therapy, ACE inhibitors, and angiotensin receptor blockers"; extended-release tablets 500 mg and 1000 mg; and the mechanism section — "The mechanism of action of ranolazine\'s antianginal effects has not been determined… Ranolazine has anti-ischemic and antianginal effects that do not depend upon reductions in heart rate or blood pressure"; Gilead Sciences, Inc.',
};
const dailymedRanolazine = {
  title: 'DailyMed label index — ranolazine',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=ranolazine',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '35 labelled ranolazine products across 31 distinct labelers — Gilead\'s RANEXA and ASPRUZYO SPRINKLE plus generic ranolazine extended-release tablets from Ajanta, Sun Pharmaceutical, American Health Packaging, Vangard Labs and many others. The most comprehensively genericised medication in this batch',
};
const gileadAccess = {
  title: 'Gilead Sciences Medication Access Programs',
  url: 'https://www.gilead.com/purpose/medication-access',
  publisher: 'Gilead Sciences',
  checked: CHECKED,
  supports:
    'Gilead\'s medication access pages name NO Ranexa or ranolazine program. The therapeutic areas Gilead lists are Virology (HIV, viral hepatitis, emerging viruses), Oncology and Inflammation — cardiovascular medicine does not appear among them',
};
const gileadAdvancingAccess = {
  title: 'Gilead Advancing Access',
  url: 'https://www.gileadadvancingaccess.com/',
  publisher: 'Gilead Sciences',
  checked: CHECKED,
  supports:
    'the program "offers information and resources to help patients understand coverage and financial options for their prescribed Gilead medication"; its patient sites are for HIV treatment and HIV prevention only, and no Ranexa or ranolazine listing appears. Phone 1-800-226-2056 (Monday–Friday, 9am–8pm ET)',
};
const ranexaSite = {
  title: 'ranexa.com — brand patient site',
  url: 'https://www.ranexa.com/',
  publisher: 'Gilead Sciences',
  checked: CHECKED,
  supports:
    'NOTE: on the checked date this domain resolved in DNS but did not complete an HTTPS connection, returning no content at all. There is no active Ranexa brand patient site on which a savings card or support program could be published',
};
const totalAssistCadHe = {
  title: 'TotalAssist — Coronary artery disease (CAD) health equity fund',
  url: 'https://totalassist.org/funds/coronary-artery-disease-cad-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Ranexa (Ranolazine)" on the approved-medication list alongside Brilinta, Plavix, Effient, the statins, beta-blockers and nitrates; $1,000 guaranteed / $1,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living; requires a home zip code in a designated social-vulnerability county',
};
const totalAssistFunds = {
  title: 'TotalAssist fund list and status',
  url: 'https://totalassist.org/funds/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'the complete list of 146 funds — there is no angina fund and no chronic stable angina fund. The CAD health equity fund is the only one whose approved-medication list includes Ranexa; the standard (non-health-equity) coronary artery disease fund does not appear on the list at all',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'the complete fund list — no angina, coronary artery disease or ischemic heart disease fund of any kind. The nearest cardiovascular entries are Chronic Heart Failure – Medicare Access and Cardiomyopathy – Medicare Access, both closed and both a different diagnosis',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no angina or coronary artery disease program',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file dated May 26, 2026 — no Ranexa or ranolazine row for initial price applicability year 2026, 2027 or 2028',
};

export const RANEXA: MedicationAssistanceRecord = {
  slug: 'ranexa',
  brandName: 'Ranexa',
  genericName: 'ranolazine',
  manufacturer: 'Gilead Sciences',
  // `heart`. Chronic angina is coronary artery disease territory, and TotalAssist
  // lists Ranexa on its CAD health equity fund. NOT `blood-clots`: Ranexa does
  // not thin the blood at all, and that key would place it alongside the
  // anticoagulants, which is precisely the confusion this site works to avoid.
  conditions: ['heart'],
  // The registry's first `antianginal`. The label states no class — the
  // Highlights call it only "Ranexa (ranolazine) extended-release tablets" — and
  // the mechanism section says the mechanism of its antianginal effects "has not
  // been determined", while describing "anti-ischemic and antianginal effects".
  // No existing key fits: it is not an anticoagulant, antiplatelet, ARNI or lipid
  // medicine.
  drugClass: ['antianginal'],
  description:
    'Ranexa is a twice-daily extended-release tablet taken to reduce episodes of chronic angina — the chest pain that comes from reduced blood flow to the heart. It is unusual in two ways worth knowing: its own label says the mechanism behind its antianginal effect "has not been determined", and it does not lower heart rate or blood pressure the way most heart medicines do. It is also, by some distance, the most comprehensively genericised medication covered on this site.',
  usedFor: [
    'Treatment of chronic angina, used alone or alongside beta-blockers, nitrates, calcium channel blockers, antiplatelet therapy, lipid-lowering therapy, ACE inhibitors and angiotensin receptor blockers',
  ],
  whyCostly:
    'For most people on Medicare, brand Ranexa is not the medication they are actually dispensed, and that is the heart of this page. Ranolazine is available from 31 different labelers — 35 labelled products on DailyMed — so generic ranolazine typically sits on a low generic tier while brand Ranexa sits on a brand tier. If you are paying a brand-tier price for Ranexa, the question to ask is not which program can help but why you are on the brand at all.',
  medicareContext:
    'Ranexa is a tablet you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan — with brand Ranexa on a brand tier and generic ranolazine typically on a much lower generic tier. It is not a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file has no Ranexa or ranolazine row for 2026, 2027 or 2028, which is exactly what you would expect for a medicine with this much generic competition, since the negotiation program selects drugs that do not have it. Part D out-of-pocket costs are capped at $2,100 in 2026, Extra Help lowers cost-sharing for people with limited income and resources, and the Medicare Prescription Payment Plan can spread what you owe across the year. Realistically, though, none of those will be the thing that solves a Ranexa cost problem — the generic will.',
  quickAnswer: {
    verdict:
      'Not from the manufacturer, and the reason is unusual: Gilead has moved out of cardiovascular medicine. Its access programs name no Ranexa or ranolazine route at all, and ranexa.com no longer serves a site. What a Medicare beneficiary has instead is generic ranolazine from 31 different labelers, which is almost certainly the whole answer.',
    points: [
      'Generic ranolazine: 35 labelled products across 31 distinct labelers — the widest generic availability of any medication in this expansion. No application, no waiting, no income test.',
      'Gilead Medication Access: names NO Ranexa or ranolazine program. Gilead\'s listed therapeutic areas are Virology, Oncology and Inflammation; cardiovascular medicine is not among them.',
      'Gilead Advancing Access (1-800-226-2056): presents HIV treatment and prevention only.',
      'ranexa.com did not complete an HTTPS connection on August 26, 2026 — there is no active brand patient site where a savings card could be published.',
      'Charitable grants: TotalAssist\'s CAD health equity fund lists "Ranexa (Ranolazine)" and was closed ($1,000 guaranteed / $1,500 maximum), and it additionally requires a qualifying home zip code. There is no angina fund anywhere, and HealthWell and Good Days have nothing applicable.',
      'Not a Medicare-negotiated drug for 2026, 2027 or 2028 — unsurprising for a medicine this thoroughly generic.',
    ],
  },
  programs: [
    {
      id: 'generic-ranolazine',
      kind: 'manufacturer-direct',
      name: 'Generic ranolazine',
      operator: 'Multiple manufacturers',
      status: 'open',
      statusNote:
        'Comprehensively available on August 26, 2026: DailyMed lists 35 labelled ranolazine products across 31 distinct labelers, including Ajanta, Sun Pharmaceutical, American Health Packaging and Vangard Labs.',
      medicare: 'eligible',
      medicareNote:
        'A generic is not an assistance program and has no Medicare rule to satisfy — it is the same medicine at a generic tier, available to anyone with a prescription. With 31 labelers competing, generic ranolazine is among the least expensive medications on this site, and switching to it will almost always save more than any program or grant discussed here. TotalAssist also lists ranolazine generically on the same fund as the brand, so a switch costs nothing in fund eligibility.',
      summary:
        'The answer for essentially everyone reading this page. Thirty-one labelers make generic ranolazine, there is nothing to apply for, and the price gap against a brand tier is large. Ask your prescriber and your plan about it before considering anything else here.',
      covers: 'The same medicine at a generic tier.',
      eligibility: [
        'A prescription written for or substitutable to generic ranolazine extended-release',
        'No income test, no application and no waiting',
      ],
      howToApply:
        'Ask your prescriber to write for generic ranolazine extended-release, or ask your pharmacy whether it can substitute where state law allows. Ask your plan which labeler\'s product sits on its preferred tier — with 31 on the market, plans differ.',
      applyUrl: 'https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=ranolazine',
      applyLabel: 'DailyMed ranolazine products',
      sources: [dailymedRanolazine, label],
    },
    {
      id: 'gilead-access',
      kind: 'manufacturer-pap',
      name: 'Gilead patient assistance — Ranexa not covered',
      operator: 'Gilead Sciences',
      status: 'not-found',
      statusNote:
        'Gilead\'s Medication Access pages named no Ranexa or ranolazine program on August 26, 2026. The therapeutic areas Gilead lists are Virology, Oncology and Inflammation — cardiovascular medicine is not among them. Gilead Advancing Access, the company\'s access program, presents HIV treatment and HIV prevention only. Separately, ranexa.com did not complete an HTTPS connection, so there is no brand patient site either.',
      medicare: 'unknown',
      medicareNote:
        'Not applicable — Gilead publishes no program covering Ranexa, so none states a Medicare rule for it. This is a different kind of absence from the ones elsewhere in this batch: it is not that a source could not be read, but that the manufacturer has moved on from the therapeutic area entirely, and the brand has been superseded by generics in the meantime.',
      summary:
        'An honest negative with a clear explanation behind it. Gilead is now a virology, oncology and inflammation company; Ranexa is a legacy cardiovascular brand whose molecule went generic long ago. Do not spend time looking for a Gilead program — ask about generic ranolazine instead.',
      eligibility: [],
      howToApply:
        'Not applicable for Ranexa. If Gilead adds a cardiovascular program it would appear on the Medication Access pages cited here. Gilead Advancing Access can be reached on 1-800-226-2056 if you want the company to confirm directly.',
      applyUrl: 'https://www.gilead.com/purpose/medication-access',
      applyLabel: 'Gilead Medication Access Programs',
      phone: '1-800-226-2056',
      sources: [gileadAccess, gileadAdvancingAccess, ranexaSite],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Coronary artery disease (CAD) health equity fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Coronary artery disease (CAD) health equity',
      status: 'closed',
      statusNote:
        'Closed to new applicants on August 26, 2026, with a $1,000 guaranteed and $1,500 maximum award. This fund additionally requires a home zip code in a designated social-vulnerability county, so it is narrower than most funds on this site even when open.',
      medicare: 'eligible',
      medicareNote:
        'This fund requires government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when it is open and when the zip-code requirement is met.',
      summary:
        '"Ranexa (Ranolazine)" is named on the CAD health equity approved-medication list, alongside Brilinta, Plavix, Effient, the statins, beta-blockers and nitrates. Two limits worth knowing: it was closed, and it is a health-equity fund with a geographic requirement. There is no angina fund anywhere in TotalAssist\'s 146-fund list, so this is the only route.',
      covers:
        'When open: $1,000 guaranteed award and up to $1,500 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed coronary artery disease diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
        'A home zip code in a designated social-vulnerability county — a requirement specific to health-equity funds',
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' +
        TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistCadHe, totalAssistFunds, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — no applicable fund',
      operator: 'HealthWell Foundation',
      status: 'not-found',
      statusNote:
        'HealthWell\'s published disease-fund list on August 26, 2026 contained no angina, coronary artery disease or ischemic heart disease fund. Its nearest cardiovascular funds — Chronic Heart Failure – Medicare Access and Cardiomyopathy – Medicare Access — are different diagnoses and were both closed.',
      medicare: 'eligible',
      medicareNote:
        'HealthWell accepts Medicare beneficiaries for the diseases it covers. It covers no diagnosis that would apply to Ranexa, so no Medicare rule is engaged.',
      summary:
        'An honest negative. HealthWell opens new funds as well as reopening old ones, so the disease-funds list is worth an occasional look — but there is nothing for angina today.',
      eligibility: [],
      howToApply: 'Not applicable today. The disease-funds page lists every fund HealthWell runs and its status.',
      applyUrl: 'https://www.healthwellfoundation.org/disease-funds/',
      applyLabel: 'HealthWell disease funds',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellFunds, SRC.healthWellFunds],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days — no applicable fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days\' published disease list on August 26, 2026 contained 57 programs and none was angina or coronary artery disease.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Ranexa.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'The charitable picture for Ranexa is the narrowest of any medication in this expansion, and it barely matters. TotalAssist\'s 146-fund list contains no angina fund at all; the only fund whose approved-medication list includes "Ranexa (Ranolazine)" is the Coronary artery disease health equity fund, which was closed on August 26, 2026, pays $1,000 guaranteed up to $1,500, and additionally requires a home zip code in a designated social-vulnerability county. HealthWell runs no angina or coronary artery disease fund, and neither does Good Days. But with 31 labelers making generic ranolazine, the cost problem this medication presents is one that a prescriber can usually solve in a sentence. Set the TotalAssist alert if the zip-code requirement fits you, and otherwise put your effort into the generic.',
  extraHelpNote:
    'Extra Help is worth applying for on its own merits — it lowers cost-sharing on every covered drug you take, and with full Extra Help a covered brand-name drug costs about $12.65 in 2026, with generics lower still. But be realistic about Ranexa specifically: generic ranolazine is inexpensive enough that Extra Help\'s effect on this particular prescription will be modest. Apply because of everything else in your medicine cabinet, not because of this one.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Ranexa on Medicare in August 2026 the list is short, because the manufacturer route does not exist and the generic usually settles it:',
      bullets: [
        'Ask your prescriber and plan about generic ranolazine extended-release — 35 labelled products from 31 labelers. This is the step that solves the problem for almost everyone.',
        'Limited income and resources → Medicare Extra Help through Social Security, mainly for your other medications.',
        'Coronary artery disease diagnosis AND a qualifying home zip code → set an alert on the TotalAssist CAD health equity fund (closed when checked).',
        'Cost still unmanageable → ask about a formulary exception, and compare Part D plans in the fall.',
        'Do not spend time on Gilead — it publishes no cardiovascular assistance program.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'There is no manufacturer application to check for Ranexa. What can change is fund status.',
      bullets: [
        'Gilead: the Medication Access pages are where a cardiovascular program would appear if the company introduced one.',
        'TotalAssist: the CAD health equity fund page shows "Open" or "Closed" and the current award amounts.',
        'HealthWell: worth re-checking the disease-funds list occasionally, since HealthWell opens new funds as well as reopening old ones.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Only three things here have eligibility rules, and the most useful has none:',
      bullets: [
        'Generic ranolazine: no eligibility rules — a prescribing and formulary question, which is what makes it the first thing to ask about.',
        'TotalAssist CAD health equity (when open): government insurance covering Ranexa or ranolazine; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed coronary artery disease diagnosis; AND a home zip code in a designated social-vulnerability county.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
        'Gilead: not applicable, because it publishes no program covering Ranexa.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Whichever route you take, these are what will be asked for:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your chronic angina or coronary artery disease diagnosis and its date. TotalAssist needs the exact date if it was within the past 6 months.',
        'Your Ranexa strength — 500 mg or 1000 mg extended-release — and that it is taken twice daily.',
        'A list of your other heart medications, since the label expressly contemplates Ranexa being used alongside beta-blockers, nitrates, calcium channel blockers and others.',
        'Household size and annual household income, plus proof.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Generic switch: nothing to apply for — your prescriber writes it, or the pharmacy substitutes where state law allows.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
        'Formulary exception: your prescriber\'s office submits it to your plan.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
        'Formulary exception: plans generally must respond within a set timeframe; your prescriber\'s office can tell you what to expect.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'With no manufacturer program in the picture, this step is where the money is:',
      bullets: [
        'Ask specifically about generic ranolazine extended-release. It is the same medicine at a generic tier, it is on the same TotalAssist fund list as the brand, and with 31 labelers it is among the cheapest medications on this site.',
        'If your pharmacy is dispensing brand Ranexa, ask why. With this much generic competition, being on the brand is usually a prescribing or formulary artefact rather than a clinical necessity — though your prescriber is the one to confirm that.',
        'Ask your prescriber\'s office about a formulary exception if your plan will not cover the generic.',
        'Apply for Extra Help even if you assume you earn too much; the limits are higher than most people expect.',
        'Never stop taking an antianginal to save money — talk to your prescriber first, because uncontrolled angina is a clinical problem, not a budgeting one.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your Ranexa strength — 500 mg or 1000 mg extended-release', note: 'taken twice daily' },
    {
      item: 'Your home zip code',
      note: 'the only TotalAssist fund covering Ranexa is a health-equity fund requiring a designated social-vulnerability county',
    },
    { item: 'A list of your other heart medications', note: 'the label contemplates Ranexa being used alongside beta-blockers, nitrates and others' },
  ],
  ifUnavailable: [
    {
      text: 'Because Gilead has no assistance program for Ranexa, the first question is not an application — ask your prescriber and plan about generic ranolazine extended-release, which DailyMed lists under 35 separate labels from 31 labelers.',
    },
    ...standardAlternatives('Ranexa'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Ranexa?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover it, with brand Ranexa on a brand tier and generic ranolazine typically on a much lower generic tier. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65 — though for this medication the generic will usually make more difference than the subsidy.',
    },
    {
      question: 'Is there a Ranexa patient assistance program for people on Medicare?',
      answer:
        'No, and the reason is more informative than the answer. Gilead\'s Medication Access pages name no Ranexa or ranolazine program at all, and the therapeutic areas Gilead lists are Virology, Oncology and Inflammation — cardiovascular medicine is not among them. Gilead Advancing Access presents HIV treatment and prevention only. Beyond that, ranexa.com did not even complete an HTTPS connection when we checked, so there is no brand patient site where a savings card could be published. Gilead has moved on from this area, and the molecule went generic in the meantime.',
    },
    {
      question: 'Is there a generic for Ranexa?',
      answer:
        'Yes — more than for any other medication covered on this site. DailyMed lists 35 labelled ranolazine products across 31 distinct labelers, including Ajanta, Sun Pharmaceutical, American Health Packaging and Vangard Labs. TotalAssist lists generic ranolazine on the same fund as the brand. If you are paying a brand-tier price for Ranexa, the most useful question is not which program can help but why you are on the brand rather than the generic.',
    },
    {
      question: 'How does Ranexa work, and is it a blood thinner?',
      answer:
        'It is not a blood thinner, and it does not lower your heart rate or blood pressure. Ranexa is an antianginal — it reduces episodes of chest pain from reduced blood flow to the heart. Its label is unusually candid about the mechanism: "The mechanism of action of ranolazine\'s antianginal effects has not been determined", though it notes the drug "can inhibit the cardiac late sodium current" and has "anti-ischemic and antianginal effects that do not depend upon reductions in heart rate or blood pressure". The label expressly contemplates it being used alongside beta-blockers, nitrates, calcium channel blockers and antiplatelet therapy rather than instead of them.',
    },
    {
      question: 'Is there a charitable grant for Ranexa right now?',
      answer:
        'Not when we checked on August 26, 2026, and the options are narrower than for most medications. TotalAssist runs 146 funds and none of them is an angina fund; the only one whose approved-medication list includes Ranexa is the Coronary artery disease health equity fund, which was closed, pays $1,000 guaranteed up to $1,500, and additionally requires a home zip code in a designated social-vulnerability county. HealthWell runs no angina or coronary artery disease fund, and Good Days has none either.',
    },
    {
      question: 'Is Ranexa part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price file has no Ranexa or ranolazine row for initial price applicability year 2026, 2027 or 2028 — which is exactly what you would expect, because the negotiation program selects drugs that do not yet face generic competition, and ranolazine faces a great deal of it. Your cost is set by your plan\'s tier and cost-sharing, and above all by whether you are dispensed the brand or the generic. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['brilinta', 'entresto', 'nexletol', 'repatha'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Ranexa' },
  ],
  sources: [
    label,
    dailymedRanolazine,
    gileadAccess,
    gileadAdvancingAccess,
    ranexaSite,
    totalAssistCadHe,
    totalAssistFunds,
    SRC.totalAssistNotify,
    SRC.totalAssistEligibility,
    healthWellFunds,
    SRC.healthWellFunds,
    goodDays,
    cmsMfpFile,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.oigCoupons,
  ],
  // Per-record verification date. Re-verify the Gilead Medication Access pages
  // first — this record's headline finding is that an entire company has left the
  // therapeutic area, and that is exactly the kind of claim that could change.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Ranexa Assistance',
    status: 'coming-soon',
    description:
      'Why Gilead runs no cardiovascular assistance program, what 31 generic ranolazine labelers mean for your copay, and why there is no angina charity fund anywhere.',
  },
  description_meta:
    'How to lower the cost of Ranexa (ranolazine) on Medicare: why Gilead offers no assistance program, generic ranolazine from 31 labelers, why no angina charity fund exists, and Medicare Extra Help — verified August 2026.',
};

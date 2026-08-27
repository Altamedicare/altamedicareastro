// ---------------------------------------------------------------------------
// Savaysa (edoxaban) — Daiichi Sankyo. Independently researched 2026-08-26.
// Batch 8 — a NEW slug.
//
// Savaysa is the hardest case in this entire expansion, and that is exactly why
// it needs a page. It is the one medication where the answer to "what help is
// there?" is genuinely, verifiably, almost nothing:
//
//   • NO manufacturer cost support of any kind. savaysa.com has no savings, copay
//     or assistance section — its only sections are Home, SAVAYSA for AFib,
//     SAVAYSA for DVT/PE, FAQs, Prescribing Information and Medication Guide.
//     daiichisankyo.us/patient-assistance returns 404. Daiichi Sankyo's actual
//     assistance program, AccessCentral4U, covers only DATROWAY, ENHERTU, TURALIO
//     and VANFLYTA — all oncology products. Savaysa is in none of them.
//   • NO generic. DailyMed labels exactly one edoxaban product.
//   • NO negotiated price. Savaysa is on no CMS selected-drug list.
//   • ONE charitable fund, and it was closed.
//
// Every other anticoagulant on this site has at least one working route: Eliquis
// and Xarelto have Medicare-negotiated prices, Pradaxa has nineteen generic
// labelers. Savaysa has none of them. Publishing that plainly is more useful than
// a page full of programs a reader would waste an afternoon discovering do not
// apply — and it makes the alternatives conversation with a cardiologist the real
// content of the page.
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
  title: 'Savaysa prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e77d3400-56ad-11e3-949a-0800200c9a66',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'SAVAYSA (edoxaban tosylate) tablet, film coated; Daiichi Sankyo Inc.',
};
const dailymedEdoxaban = {
  title: 'DailyMed label index — edoxaban',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=edoxaban',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'a single labelled edoxaban product — Daiichi Sankyo\'s SAVAYSA. No generic edoxaban is labelled',
};
const savaysaSite = {
  title: 'SAVAYSA patient site',
  url: 'https://www.savaysa.com/',
  publisher: 'Daiichi Sankyo',
  checked: CHECKED,
  supports:
    'the complete site structure on the checked date — Home, SAVAYSA for AFib, About AFib, Living with AFib, SAVAYSA for DVT/PE, About DVT/PE, Living with DVT/PE, FAQs, Important Safety Information, Prescribing Information and Medication Guide. There is NO savings, co-pay, cost-support or patient-assistance section anywhere on the site',
};
const daiichiPap = {
  title: 'Daiichi Sankyo patient support programs',
  url: 'https://daiichisankyo.us/patient-assistance-programs',
  publisher: 'Daiichi Sankyo',
  checked: CHECKED,
  supports:
    'the company\'s patient support programs — AccessCentral4U (DSAccessCentral4U.com), covering DATROWAY (datopotamab deruxtecan-dlnk), ENHERTU (fam-trastuzumab deruxtecan-nxki), TURALIO (pexidartinib) and VANFLYTA (quizartinib), and participation in the Partnership for Prescription Assistance. SAVAYSA IS NOT COVERED BY ANY OF THEM. NOTE: daiichisankyo.us/patient-assistance returned HTTP 404 on the checked date',
};
const totalAssistStroke = {
  title: 'TotalAssist — Stroke fund',
  url: 'https://totalassist.org/funds/stroke/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Savaysa (Edoxaban)" and "Lixiana (Edoxaban)" on the approved-medication list, alongside Eliquis, Xarelto, Pradaxa and warfarin; $1,000 guaranteed / $1,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'the complete fund list — no atrial fibrillation, stroke, deep vein thrombosis, pulmonary embolism or anticoagulant fund of any kind',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no atrial fibrillation, stroke or blood-clot program',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file dated May 26, 2026 — no Savaysa or edoxaban row for initial price applicability year 2026, 2027 or 2028. Two other direct oral anticoagulants ARE on the IPAY 2026 list with negotiated prices already in effect: ELIQUIS and XARELTO',
};

export const SAVAYSA: MedicationAssistanceRecord = {
  slug: 'savaysa',
  brandName: 'Savaysa',
  genericName: 'edoxaban',
  manufacturer: 'Daiichi Sankyo',
  // `blood-clots` and `heart` — the same pair as Eliquis, Xarelto and Pradaxa.
  // The site's `blood-clots` key is labelled "Blood clots / AFib", which is what
  // Savaysa treats, and TotalAssist lists it on the Stroke fund.
  conditions: ['blood-clots', 'heart'],
  drugClass: ['anticoagulant'],
  description:
    'Savaysa is a once-daily anticoagulant — a blood thinner that slows the clotting proteins in blood — used for atrial fibrillation and for clots in the legs and lungs. It is the least-supported medication on this site: Daiichi Sankyo publishes no savings card, no copay program and no patient assistance program for it, there is no generic, and the one charitable fund that lists it was closed. This page tells you that plainly, because knowing it saves you an afternoon of looking.',
  usedFor: [
    'Reducing the risk of stroke and systemic embolism in people with non-valvular atrial fibrillation, subject to the kidney-function limits in the label',
    'Treating deep vein thrombosis and pulmonary embolism after 5 to 10 days of an injectable blood thinner',
  ],
  whyCostly:
    'Savaysa is a brand-only tablet with no generic — DailyMed labels exactly one edoxaban product — taken indefinitely once started, and Part D plans place it on a brand tier. What makes its cost picture unusually hard is not the price but the absence of everything that normally softens it: no manufacturer copay card, no manufacturer patient assistance program, no negotiated Medicare price and no generic. Among the direct oral anticoagulants, Savaysa is the only one with none of those.',
  medicareContext:
    'Savaysa is a tablet you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan, usually on a brand tier. It is not a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file has no Savaysa or edoxaban row for 2026, 2027 or 2028. The comparison matters here more than on most pages. Eliquis and Xarelto were both selected in the first negotiation cycle and have had negotiated prices in effect since January 1, 2026; Pradaxa is available as a generic from nineteen labelers. Savaysa has neither route. So for a Medicare beneficiary the tools that remain are the general ones — the $2,100 Part D out-of-pocket cap in 2026, Extra Help, the Medicare Prescription Payment Plan, and a plan comparison in the fall — plus a genuine clinical conversation about whether one of the other anticoagulants would serve you as well. One important note on that conversation: Savaysa\'s label carries kidney-function limits that the others do not share in the same form, so this is a decision for your prescriber and not a swap to make on cost grounds alone.',
  quickAnswer: {
    verdict:
      'No — and this is the clearest negative finding in this whole section. Daiichi Sankyo publishes no savings card, no copay program and no patient assistance program covering Savaysa; its assistance program covers four oncology medicines only. There is no generic edoxaban and no Medicare-negotiated price. The single charitable fund that lists Savaysa was closed.',
    points: [
      'No manufacturer cost support at all: savaysa.com has no savings, copay or assistance section — only clinical information, FAQs and prescribing documents.',
      'Daiichi Sankyo\'s AccessCentral4U program covers DATROWAY, ENHERTU, TURALIO and VANFLYTA — all oncology products. Savaysa is not among them, and daiichisankyo.us/patient-assistance returns a 404.',
      'No generic: DailyMed labels exactly one edoxaban product.',
      'Not a Medicare-negotiated drug — while Eliquis and Xarelto have had negotiated prices in effect since January 1, 2026, and Pradaxa has nineteen generic labelers.',
      'Charitable grants: TotalAssist\'s Stroke fund lists "Savaysa (Edoxaban)" and was closed ($1,000 guaranteed / $1,500 maximum). HealthWell runs no anticoagulation fund at all, and neither does Good Days.',
      'What remains: Extra Help, the $2,100 Part D cap, the Medicare Prescription Payment Plan, a formulary exception, and a conversation with your cardiologist about the alternatives — bearing in mind Savaysa\'s kidney-function limits.',
    ],
  },
  programs: [
    {
      id: 'daiichi-pap',
      kind: 'manufacturer-pap',
      name: 'Daiichi Sankyo patient assistance — Savaysa not covered',
      operator: 'Daiichi Sankyo',
      status: 'not-found',
      statusNote:
        'Daiichi Sankyo\'s patient support offering on August 26, 2026 is AccessCentral4U, and it covers four medicines: DATROWAY, ENHERTU, TURALIO and VANFLYTA — all oncology products. Savaysa is not among them. The company also participates in the Partnership for Prescription Assistance. Separately, daiichisankyo.us/patient-assistance returned HTTP 404 on the checked date.',
      medicare: 'unknown',
      medicareNote:
        'Not applicable — Savaysa is not part of any Daiichi Sankyo assistance program, so none states a Medicare rule for it. This is a straightforward absence rather than an exclusion, and it is not a case of a source being unreadable: the company\'s program page lists its covered medicines explicitly and Savaysa is not one.',
      summary:
        'An honest negative, and the most important fact on this page. Daiichi Sankyo does run patient assistance, but only for its oncology medicines. Do not spend time on an application for Savaysa — there is no program to apply to.',
      eligibility: [],
      howToApply:
        'Not applicable for Savaysa. If Daiichi Sankyo adds it, it would appear on the patient support programs page cited here.',
      applyUrl: 'https://daiichisankyo.us/patient-assistance-programs',
      applyLabel: 'Daiichi Sankyo patient support programs',
      sources: [daiichiPap, savaysaSite],
    },
    {
      id: 'savaysa-savings',
      kind: 'manufacturer-savings',
      name: 'Savaysa savings or copay card — none found',
      operator: 'Daiichi Sankyo',
      status: 'not-found',
      statusNote:
        'There is no savings, co-pay or cost-support section anywhere on savaysa.com. On August 26, 2026 the site\'s sections were Home, SAVAYSA for AFib, About AFib, Living with AFib, SAVAYSA for DVT/PE, About DVT/PE, Living with DVT/PE, FAQs, Important Safety Information, Prescribing Information and the Medication Guide. Nothing about cost appears on any of them.',
      medicare: 'unknown',
      medicareNote:
        'Academic, since no card exists. Worth saying anyway because it is the usual next question: manufacturer copay cards are closed to Medicare across the board under federal anti-kickback rules, so even if Daiichi Sankyo introduced one it would not be a route for a Medicare beneficiary. The absence costs Medicare readers nothing; it costs commercially insured readers a great deal.',
      summary:
        'A second honest negative. Most brand medicines on this site have at least a commercial copay card. Savaysa has none — which is unusual enough that people assume they have simply failed to find it. They have not.',
      eligibility: [],
      howToApply: 'Not applicable. If Daiichi Sankyo introduces a savings program it would appear on savaysa.com, which is cited here.',
      applyUrl: 'https://www.savaysa.com/',
      applyLabel: 'SAVAYSA patient site',
      sources: [savaysaSite, SRC.oigCoupons],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Stroke fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Stroke',
      status: 'closed',
      statusNote:
        'Closed to new applicants on August 26, 2026, with a $1,000 guaranteed and $1,500 maximum award. TotalAssist has no waitlist, so the notification sign-up is what gets you in when it reopens.',
      medicare: 'eligible',
      medicareNote:
        'This fund requires government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when it is open. Given that there is no manufacturer route at all for Savaysa, this alert is one of the few concrete actions available, and it is worth setting today rather than when you next need a refill.',
      summary:
        '"Savaysa (Edoxaban)" and "Lixiana (Edoxaban)" are both named on the Stroke fund\'s approved-medication list, alongside every other oral anticoagulant. It is the only applicable fund on any of the three foundations, and it was closed.',
      covers:
        'When open: $1,000 guaranteed award and up to $1,500 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed stroke diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' +
        TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistStroke, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — no applicable fund',
      operator: 'HealthWell Foundation',
      status: 'not-found',
      statusNote:
        'HealthWell\'s published disease-fund list on August 26, 2026 contained no atrial fibrillation, stroke, deep vein thrombosis, pulmonary embolism or anticoagulant fund of any kind.',
      medicare: 'eligible',
      medicareNote:
        'HealthWell accepts Medicare beneficiaries for the diseases it covers. It covers no diagnosis that would apply to Savaysa, so no Medicare rule is engaged.',
      summary:
        'An honest negative. HealthWell does open new funds as well as reopening old ones, so the disease-funds list is worth an occasional look — but there is nothing to apply to today.',
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
      statusNote: 'Good Days\' published disease list on August 26, 2026 contained 57 programs and none was atrial fibrillation, stroke or any blood-clot condition.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Savaysa.',
      summary: 'The third honest negative in a row. Checked so you do not spend time on a foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'One fund lists Savaysa and it was closed. TotalAssist\'s Stroke fund names both "Savaysa (Edoxaban)" and "Lixiana (Edoxaban)" on its approved-medication list, paying $1,000 guaranteed up to $1,500 when open, and it was shut on August 26, 2026. HealthWell runs no atrial fibrillation, stroke, deep vein thrombosis, pulmonary embolism or anticoagulant fund at all, and Good Days has none either. That single closed fund is the entire charitable picture for this medication, and unlike most pages on this site there is no manufacturer program sitting behind it. Set the TotalAssist alert today. Then put your real effort into Extra Help, the Medicare Prescription Payment Plan, and a conversation with your cardiologist about the alternatives — because for Savaysa those are not fallbacks, they are the plan.',
  extraHelpNote:
    'Extra Help matters more for Savaysa than for almost any other medication on this site, because it is the only income-based help that exists for it. There is no manufacturer program to weigh it against, no generic to switch to and no negotiated price to wait for — so there is no conflict, no sequencing question and nothing to lose. If your income and resources are limited, apply, and apply even if you assume you earn too much: the limits are higher than most people expect. With full Extra Help a covered brand-name drug costs about $12.65 in 2026, which against brand-tier cost-sharing on a daily anticoagulant is the single largest difference available to you.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Savaysa on Medicare in August 2026 the honest first step is to rule out the routes people expect to exist, because none of them do:',
      bullets: [
        'There is no Daiichi Sankyo program for Savaysa, no savings card and no generic. Do not spend time looking.',
        'Limited income and resources → Medicare Extra Help through Social Security. This is the most valuable route available for this medication.',
        'Enrol in the Medicare Prescription Payment Plan to spread the cost across the year.',
        'Stroke diagnosis → set an alert on the TotalAssist Stroke fund (closed when checked).',
        'Ask your cardiologist whether Eliquis, Xarelto or generic dabigatran would suit you — but read the kidney-function note below before assuming a swap is straightforward.',
        'Compare Part D plans in the fall: with no other lever available, tier placement is doing more work here than usual.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'There is no manufacturer application to check for Savaysa. What can change is fund status.',
      bullets: [
        'Daiichi Sankyo: the patient support programs page lists its covered medicines — check whether Savaysa has been added since this page was verified.',
        'TotalAssist: the Stroke fund page shows "Open" or "Closed" and the current award amounts.',
        'HealthWell: worth re-checking the disease-funds list occasionally, since HealthWell opens new funds as well as reopening old ones.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Only two things here have eligibility rules that could apply to you:',
      bullets: [
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
        'TotalAssist (when open): government insurance covering Savaysa; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed stroke diagnosis in treatment, starting within 60 days, or treated in the past 6 months.',
        'Medicare Prescription Payment Plan: no income test — it is open to any Part D enrollee, and it spreads costs rather than lowering them.',
        'Daiichi Sankyo: not applicable, because Savaysa is not on any of its programs.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Whichever route you take, these are what will be asked for:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your diagnosis and its date — atrial fibrillation, deep vein thrombosis, pulmonary embolism or stroke. TotalAssist needs the exact date if it was within the past 6 months.',
        'Your Savaysa strength — 15 mg, 30 mg or 60 mg.',
        'Your most recent kidney function result, if you have it. It is relevant to any conversation about alternatives, because Savaysa\'s label sets kidney-function limits.',
        'Household size and annual household income, plus proof.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861; Patient Advocate Foundation verifies the diagnosis with your provider.',
        'Medicare Prescription Payment Plan: you opt in through your Part D plan.',
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
      body: 'Never stop or ration an anticoagulant to save money. With no manufacturer route available, these are the real options:',
      bullets: [
        'Ask your cardiologist about the alternatives — but ask properly. Eliquis and Xarelto have Medicare-negotiated prices in effect, and generic dabigatran costs a fraction of any of them. However, Savaysa\'s label sets kidney-function limits that shape who it is prescribed for in the first place, so if you were put on Savaysa specifically there may be a clinical reason. Bring your kidney function results to the conversation.',
        'Apply for Extra Help even if you assume you earn too much. For this medication it is the largest lever you have.',
        'Enrol in the Medicare Prescription Payment Plan — it does not lower the total but it stops a brand-tier bill landing all at once.',
        'Ask your prescriber\'s office about a formulary or tier exception.',
        'Compare Part D plans carefully in the fall. With no generic, no negotiated price and no manufacturer help, your plan\'s tier placement for Savaysa is the single biggest variable in what you pay.',
        'Call AltaMedicare — this is exactly the situation where a plan comparison earns its keep, and we do it free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your Savaysa strength — 15 mg, 30 mg or 60 mg', note: 'the dose depends partly on kidney function and body weight' },
    {
      item: 'Your most recent kidney function result',
      note: 'Savaysa\'s label sets kidney-function limits, so this is central to any conversation about switching anticoagulants',
    },
  ],
  ifUnavailable: [
    {
      text: 'Because Daiichi Sankyo has no assistance program and no savings card for Savaysa, and there is no generic, the first conversation is clinical: ask your cardiologist whether Eliquis, Xarelto or generic dabigatran suits you, bringing your kidney function results, since Savaysa\'s label sets kidney-function limits.',
    },
    {
      text: 'Enrol in the Medicare Prescription Payment Plan. With no other manufacturer or generic route, spreading the cost across the year is one of the few practical steps available.',
      href: 'https://www.medicare.gov/prescription-payment-plan',
      label: 'Medicare.gov',
    },
    ...standardAlternatives('Savaysa'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Savaysa?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Savaysa, usually on a brand tier. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65 — which for this particular medication is the most valuable help available, because there is nothing else.',
    },
    {
      question: 'Is there a Savaysa patient assistance program or savings card?',
      answer:
        'No, to both. This is not a case of a source being hard to read: savaysa.com has no savings, co-pay or cost-support section anywhere on it — the site carries only clinical information, FAQs and prescribing documents. And Daiichi Sankyo\'s patient assistance program, AccessCentral4U, covers four oncology medicines — DATROWAY, ENHERTU, TURALIO and VANFLYTA — with Savaysa in none of them. The company\'s /patient-assistance page returns a 404. There is genuinely nothing to apply for.',
    },
    {
      question: 'Is there a generic for Savaysa?',
      answer:
        'No. DailyMed lists exactly one labelled edoxaban product, Daiichi Sankyo\'s Savaysa. This is what makes Savaysa unusual among the direct oral anticoagulants: Pradaxa has generic dabigatran from nineteen different labelers, and Eliquis and Xarelto both have Medicare-negotiated prices. Savaysa has neither a generic nor a negotiated price.',
    },
    {
      question: 'Should I switch to a different blood thinner to save money?',
      answer:
        'That is a fair question to raise with your cardiologist, but it is a clinical decision and not one to make on price alone. Eliquis and Xarelto have had Medicare-negotiated prices in effect since January 1, 2026, and generic dabigatran costs a fraction of any brand. However, Savaysa\'s label carries kidney-function limits that shape who it is prescribed for, so if you were specifically put on Savaysa there may be a reason. Bring your most recent kidney function results to the appointment and ask directly. Never stop or ration an anticoagulant while you wait for that conversation.',
    },
    {
      question: 'Is Savaysa part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price file has no Savaysa or edoxaban row for initial price applicability year 2026, 2027 or 2028. Two other direct oral anticoagulants were selected in the very first cycle and have had negotiated prices in effect since January 1, 2026 — Eliquis and Xarelto. Your Savaysa cost is set entirely by your plan\'s tier and cost-sharing, which is why a careful plan comparison in the fall matters more for this medication than for most.',
    },
    {
      question: 'Is there a charitable grant for Savaysa right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists "Savaysa (Edoxaban)" on its Stroke fund and that fund was closed, with a $1,000 guaranteed and $1,500 maximum award. It is the only fund on any of the three foundations that covers this medication — HealthWell runs no anticoagulation fund at all, and neither does Good Days. Set the TotalAssist alert, because with no manufacturer program behind it, that one fund reopening is a more significant event for Savaysa than it would be for most drugs. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['eliquis', 'xarelto', 'pradaxa', 'brilinta'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Savaysa' },
  ],
  sources: [
    label,
    dailymedEdoxaban,
    savaysaSite,
    daiichiPap,
    totalAssistStroke,
    SRC.totalAssistNotify,
    SRC.totalAssistEligibility,
    healthWellFunds,
    SRC.healthWellFunds,
    goodDays,
    cmsMfpFile,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.medicarePaymentPlan,
    SRC.oigCoupons,
  ],
  // Per-record verification date. Re-verify the Daiichi Sankyo patient support
  // page first — this record's headline finding is an absence across an entire
  // company, and absences stop being true the moment a program list changes.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Savaysa Assistance',
    status: 'coming-soon',
    description:
      'Why Daiichi Sankyo offers no support for Savaysa, why there is no generic and no negotiated price, and how to have the switching conversation with your cardiologist given the kidney-function limits.',
  },
  description_meta:
    'How to lower the cost of Savaysa (edoxaban) on Medicare: why there is no manufacturer program, no savings card, no generic and no negotiated price, what the one closed stroke fund covers, and why Extra Help matters most here — verified August 2026.',
};

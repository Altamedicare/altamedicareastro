// ---------------------------------------------------------------------------
// Inpefa (sotagliflozin) — Lexicon Pharmaceuticals. Independently researched
// 2026-08-26. Batch 8 — a NEW slug.
//
// Inpefa is the registry's first record from a small, single-product
// manufacturer, and the assistance landscape looks different for that reason
// alone. Lexicon publishes a copay program with a specific figure ($10) and a
// specific cap (13 uses a year) but no income-tested free-drug program with
// published criteria — only a sentence saying help "may" exist. That is a
// different shape from the big-manufacturer foundations, and it is worth a
// reader knowing before they spend an afternoon looking for one.
//
// TAXONOMY NOTE. Inpefa carries `heart` ONLY, and the reasoning matters:
//   • The label's own class statement is "INPEFA is a sodium-glucose cotransporter
//     2 (SGLT2) inhibitor", so `sglt2` is exactly right on the class axis. No new
//     class key is warranted.
//   • On the CONDITION axis, the indication is to "reduce the risk of
//     cardiovascular death, hospitalization for heart failure, and urgent heart
//     failure visit" in adults with heart failure OR with type 2 diabetes, chronic
//     kidney disease and other cardiovascular risk factors. It is a cardiovascular
//     outcomes drug; it has no glycaemic indication.
//   • Tagging it `diabetes` would match it to the TotalAssist Type 2 diabetes
//     fund — and that fund's approved-medication list does NOT include Inpefa.
//     That is precisely the incorrect program matching the Ofev rule forbids.
//     Inpefa IS on the Heart failure and Stroke funds, which `heart` matches.
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
  HEALTHWELL_REQUIREMENTS,
  HEALTHWELL_HOW_TO_APPLY,
  CHECKLIST_MEDICARE,
  standardAlternatives,
} from './shared';

const label = {
  title: 'Inpefa prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a46614e-05f6-421a-b6f4-d6f8760d643a',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '"INPEFA is a sodium-glucose cotransporter 2 (SGLT2) inhibitor indicated to reduce the risk of cardiovascular death, hospitalization for heart failure, and urgent heart failure visit in adults with: heart failure or type 2 diabetes mellitus, chronic kidney disease, and other cardiovascular risk factors"; tablets 200 mg and 400 mg; Lexicon Pharmaceuticals, Inc. (rev. 8/12/2026)',
};
const dailymedSota = {
  title: 'DailyMed label index — sotagliflozin',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=sotagliflozin',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'a single labelled sotagliflozin product — Lexicon\'s INPEFA. No generic is labelled',
};
const inpefaTogether = {
  title: 'INPEFA Together — financial support options',
  url: 'https://www.inpefatogether.com/financial-support/',
  publisher: 'Lexicon Pharmaceuticals',
  checked: CHECKED,
  supports:
    'the Copay Program at "as little as $10" per 30-day prescription, limited to 13 uses for 30-day supplies per person; the exclusion verbatim — "Offer not valid for prescriptions reimbursed under Medicare, Medicare Advantage, Medigap, Medicaid, VA, DoD, or TRICARE"; a free 30-day supply voucher to initiate treatment, with automatic enrolment into the Copay Program afterwards for eligible commercially insured patients; and the statement "If you don\'t have insurance or your insurance doesn\'t cover INPEFA, you may still get help paying for INPEFA" with no published income criteria. Phone 1-855-2-INPEFA (1-855-246-7332), Monday–Friday 8am–8pm ET',
};
const lexiconSite = {
  title: 'INPEFA savings and resources',
  url: 'https://www.inpefa.com/savings-and-resources',
  publisher: 'Lexicon Pharmaceuticals',
  checked: CHECKED,
  supports:
    'the savings section linked from inpefa.com. NOTE: this route is rendered client-side and returned HTTP 404 to direct automated requests on the checked date, which is why the INPEFA Together site is cited as the primary source for the program terms',
};
const totalAssistHf = {
  title: 'TotalAssist — Heart failure (HF) fund',
  url: 'https://totalassist.org/funds/heart-failure-hf/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Inpefa (Sotagliflozin)" on the approved-medication list alongside Entresto, Farxiga and Jardiance; $1,000 guaranteed / $2,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistStroke = {
  title: 'TotalAssist — Stroke fund',
  url: 'https://totalassist.org/funds/stroke/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Inpefa (Sotagliflozin)" also on the Stroke fund approved-medication list; $1,000 guaranteed / $1,500 maximum award',
};
const totalAssistT2d = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; the Type 2 diabetes approved-medication list does NOT include Inpefa, although it lists Invokana, Farxiga-family products and the insulins. This is why this record carries the heart condition key rather than the diabetes one',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'the complete fund list — "Chronic Heart Failure - Medicare Access" CLOSED and "Cardiomyopathy - Medicare Access" CLOSED; no open cardiovascular fund of any kind',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no heart failure or cardiovascular program',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file dated May 26, 2026 — no Inpefa or sotagliflozin row for initial price applicability year 2026, 2027 or 2028. Three other heart-failure medicines ARE on the IPAY 2026 list with negotiated prices in effect: ENTRESTO, FARXIGA and JARDIANCE',
};

export const INPEFA: MedicationAssistanceRecord = {
  slug: 'inpefa',
  brandName: 'Inpefa',
  genericName: 'sotagliflozin',
  manufacturer: 'Lexicon Pharmaceuticals',
  // `heart` ONLY — see the taxonomy note in the header. Inpefa's indication is
  // cardiovascular outcomes; it has no glycaemic indication, and TotalAssist's
  // Type 2 diabetes fund does NOT list it while the Heart failure and Stroke
  // funds do. Adding `diabetes` would produce incorrect fund matching.
  conditions: ['heart'],
  // 'sglt2' — the label's own words: "INPEFA is a sodium-glucose cotransporter 2
  // (SGLT2) inhibitor". No new class key is warranted even though sotagliflozin
  // also acts on SGLT1; the label names SGLT2 and the existing key describes it.
  drugClass: ['sglt2'],
  description:
    'Inpefa is a once-daily tablet taken to reduce the risk of cardiovascular death and heart-failure hospitalisation. It belongs to the same SGLT2 family as Farxiga and Jardiance, but it is licensed as a heart medicine rather than a blood-sugar one — a distinction that decides which charitable funds you can apply to, and one that this page gets right because the funds themselves do.',
  usedFor: [
    'Reducing the risk of cardiovascular death, hospitalisation for heart failure and urgent heart-failure visits in adults with heart failure',
    'The same risk reduction in adults with type 2 diabetes, chronic kidney disease and other cardiovascular risk factors',
  ],
  whyCostly:
    'Inpefa is a brand-only tablet with no generic — DailyMed lists a single labelled sotagliflozin product — taken indefinitely once started. It also comes from a small manufacturer with one marketed product, which shapes the help available: Lexicon publishes a copay card with a firm figure but no income-tested free-drug program with published criteria, so there is less of a safety net behind the card than there would be with a large manufacturer.',
  medicareContext:
    'Inpefa is a tablet you take yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan, usually on a brand tier. It is not a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file has no Inpefa or sotagliflozin row for 2026, 2027 or 2028. That is worth knowing in context, because three other heart-failure medicines were selected in the first negotiation cycle and have had negotiated prices in effect since January 1, 2026 — Entresto, Farxiga and Jardiance. If you are on Inpefa and cost is the obstacle, the comparison with those three is a legitimate conversation to have with your cardiologist. Part D out-of-pocket costs are capped at $2,100 in 2026, Extra Help lowers cost-sharing for people with limited income and resources, and the Medicare Prescription Payment Plan can spread what you owe across the year.',
  quickAnswer: {
    verdict:
      'Not straightforwardly. Lexicon\'s copay program excludes Medicare by name, and the company says only that uninsured patients "may" get help without publishing any criteria for it. Both charitable funds that list Inpefa were closed. For a Medicare beneficiary the practical routes here are Extra Help, the Medicare Prescription Payment Plan, and a conversation about the negotiated-price alternatives in the same class.',
    points: [
      'INPEFA Together Copay Program: "as little as $10" per 30-day prescription, limited to 13 uses a year — but "Offer not valid for prescriptions reimbursed under Medicare, Medicare Advantage, Medigap, Medicaid, VA, DoD, or TRICARE."',
      'Patient assistance: Lexicon states "If you don\'t have insurance or your insurance doesn\'t cover INPEFA, you may still get help paying for INPEFA" and publishes no income limits, no program name and no criteria. Recorded as unverified — call 1-855-246-7332 and ask.',
      'No generic: DailyMed labels a single sotagliflozin product.',
      'Not a Medicare-negotiated drug — while Entresto, Farxiga and Jardiance, all used in heart failure, have had negotiated prices in effect since January 1, 2026.',
      'Charitable grants: TotalAssist lists Inpefa on its Heart failure fund ($1,000 guaranteed / $2,500 maximum) AND its Stroke fund ($1,000 / $1,500) — both closed. HealthWell\'s heart funds were closed. Good Days has no cardiovascular fund.',
      'Note what Inpefa is NOT on: TotalAssist\'s Type 2 diabetes fund does not list it, even though Inpefa is an SGLT2 inhibitor. Apply to the heart funds, not the diabetes one.',
    ],
  },
  programs: [
    {
      id: 'inpefa-copay',
      kind: 'manufacturer-savings',
      name: 'INPEFA Together Copay Program',
      operator: 'Lexicon Pharmaceuticals',
      status: 'open',
      statusNote:
        'Active for commercially insured patients on August 26, 2026: eligible patients pay "as little as $10" per 30-day prescription, limited to 13 uses for 30-day supplies per person. Lexicon also offers a free 30-day supply voucher to start treatment, with automatic enrolment into the copay program afterwards for eligible commercially insured patients.',
      medicare: 'excluded',
      medicareNote:
        'Lexicon\'s exclusion is unusually broad and worth reading in full: "Offer not valid for prescriptions reimbursed under Medicare, Medicare Advantage, Medigap, Medicaid, VA, DoD, or TRICARE." Note that Medigap appears in that list, which some manufacturers omit. If you have any of those, this program is closed to you regardless of how your prescription is processed.',
      summary:
        'A commercial copay offer with a clear headline figure. Recorded so Medicare readers can rule it out immediately — and so anyone moving from commercial insurance onto Medicare knows that a $10 Inpefa copay does not survive the transition.',
      covers: 'Part of the commercial copay or coinsurance for Inpefa, up to 13 fills a year. Not applicable to Medicare cost-sharing.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance',
        'Not reimbursed under Medicare, Medicare Advantage, Medigap, Medicaid, VA, DoD or TRICARE',
        'Limited to 13 uses for 30-day supplies per person',
      ],
      howToApply:
        'Commercially insured patients enrol through INPEFA Together or call 1-855-2-INPEFA (1-855-246-7332), Monday–Friday 8am–8pm ET. Medicare beneficiaries should ask the same line about patient assistance instead.',
      applyUrl: 'https://www.inpefatogether.com/financial-support/',
      applyLabel: 'INPEFA Together financial support',
      phone: '1-855-246-7332',
      sources: [inpefaTogether, lexiconSite, SRC.oigCoupons],
    },
    {
      id: 'lexicon-pap',
      kind: 'manufacturer-pap',
      name: 'Lexicon patient assistance — terms not published',
      operator: 'Lexicon Pharmaceuticals',
      status: 'verify',
      statusNote:
        'Lexicon states on the INPEFA Together financial-support page that "If you don\'t have insurance or your insurance doesn\'t cover INPEFA, you may still get help paying for INPEFA" — but publishes no program name, no income limits, no insurance criteria and no application route for it. Support specialists must be contacted directly. This is recorded as unverified rather than as an absence, because Lexicon does assert that help exists.',
      medicare: 'unknown',
      medicareNote:
        'No Medicare rule is published for whatever assistance sits behind that sentence, and this project does not infer one from other manufacturers. The wording "your insurance doesn\'t cover INPEFA" is the phrase to test on the call: a Medicare beneficiary whose Part D plan excludes Inpefa, or places it behind a prior authorisation that has been denied, arguably fits that description. Ask three things: whether Medicare beneficiaries may apply, what the income limit is, and whether a plan denial counts as "doesn\'t cover".',
      summary:
        'A genuine "we could not establish this". Lexicon is a small company with one marketed product, and it does not run the kind of documented charitable foundation that GSK, Lilly or Genentech do. Something may exist; what it is, who runs it and who qualifies are all unpublished.',
      eligibility: [
        'Lexicon\'s only published wording: no insurance, or insurance that does not cover Inpefa',
        'Income limits, program name and application route: NOT PUBLISHED',
        'Confirm directly before applying, and before ruling yourself out',
      ],
      howToApply:
        'Call INPEFA Together on 1-855-2-INPEFA (1-855-246-7332), Monday–Friday 8am–8pm ET, and ask specifically about patient assistance rather than the copay program — they are different things and the phone tree may not distinguish them.',
      applyUrl: 'https://www.inpefatogether.com/financial-support/',
      applyLabel: 'INPEFA Together financial support',
      phone: '1-855-246-7332',
      sources: [inpefaTogether],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Heart failure and Stroke funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Heart failure (HF) · Stroke',
      status: 'closed',
      statusNote:
        'Both funds that list Inpefa were closed to new applicants on August 26, 2026. The awards differ: the Heart failure fund pays $1,000 guaranteed up to $2,500, and the Stroke fund $1,000 guaranteed up to $1,500.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open, and unlike Lexicon\'s copay program these funds do not exclude Medigap holders.',
      summary:
        '"Inpefa (Sotagliflozin)" is named on both the Heart failure and the Stroke approved-medication lists — two funds, with the heart-failure one paying the larger maximum. Worth stating what Inpefa is NOT on: the Type 2 diabetes fund does not list it, despite Inpefa being an SGLT2 inhibitor, because its label indication is cardiovascular rather than glycaemic. Apply to the heart funds.',
      covers:
        'When open: Heart failure fund $1,000 guaranteed and up to $2,500 maximum; Stroke fund $1,000 guaranteed and up to $1,500. Covers medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed heart failure or stroke diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify — choose the fund matching your diagnosis, since the awards differ. When a fund opens: ' +
        TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistHf, totalAssistStroke, totalAssistT2d, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — heart funds all closed',
      operator: 'HealthWell Foundation',
      fund: 'Chronic Heart Failure – Medicare Access · Cardiomyopathy – Medicare Access',
      status: 'closed',
      statusNote:
        'Both cardiovascular funds were closed on August 26, 2026. HealthWell had no open cardiovascular fund of any kind on that date.',
      medicare: 'eligible',
      medicareNote:
        'Both are "Medicare Access" funds — built specifically for people with Medicare — which makes them worth an alert even while closed, particularly given how thin the manufacturer side is for this medication.',
      summary:
        'HealthWell runs a Chronic Heart Failure fund designed for Medicare beneficiaries and it was closed, as was its Cardiomyopathy fund. With Lexicon\'s copay program excluding Medicare and its patient assistance unpublished, these alerts are among the few concrete actions available.',
      covers: 'When open: copays, coinsurance, deductibles and health-insurance premiums for the covered diagnosis.',
      eligibility: ['A confirmed chronic heart failure diagnosis, verified by your prescriber', ...HEALTHWELL_REQUIREMENTS],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/disease-funds/',
      applyLabel: 'HealthWell disease funds and alerts',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellFunds, SRC.healthWellFunds, SRC.healthWellCHF, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days — no applicable fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days\' published disease list on August 26, 2026 contained 57 programs and none of them was heart failure or any cardiovascular condition.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Inpefa.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'Inpefa\'s charitable picture is better than most heart medications on this site in one respect and shut in another. TotalAssist lists it on two funds rather than one — Heart failure, paying $1,000 guaranteed up to $2,500, and Stroke, paying $1,000 up to $1,500 — but both were closed on August 26, 2026. HealthWell\'s Chronic Heart Failure and Cardiomyopathy funds, both Medicare Access funds, were closed too, and Good Days runs no cardiovascular fund. One practical warning: do not apply to the Type 2 diabetes fund. Inpefa is an SGLT2 inhibitor and it is natural to look there, but TotalAssist\'s diabetes approved-medication list does not include it — the funds follow the label indication, and Inpefa\'s is cardiovascular. Because Lexicon\'s copay program excludes Medicare and its patient assistance is unpublished, these alerts and the Medicare-side tools carry more weight here than usual.',
  extraHelpNote:
    'Extra Help matters more for Inpefa than for the heart-failure medicines that have negotiated prices, because there is no negotiated price and no generic to lower the underlying cost here. It reduces cost-sharing on every covered drug you take, and with full Extra Help a covered brand-name drug costs about $12.65 in 2026. There is no manufacturer program with published rules to weigh it against, so there is nothing to choose between — if your income and resources are limited, apply.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Inpefa on Medicare in August 2026, the manufacturer side is thin, so the order runs the other way from most pages:',
      bullets: [
        'Limited income and resources → Medicare Extra Help through Social Security. This is the route with published rules you can check today.',
        'Enrol in the Medicare Prescription Payment Plan if the problem is a large bill early in the year rather than the annual total.',
        'Heart failure or stroke diagnosis → set alerts on the TotalAssist Heart failure and Stroke funds and the HealthWell heart funds (all closed when checked).',
        'Call INPEFA Together on 1-855-246-7332 and ask specifically about patient assistance — Lexicon says help may exist but publishes nothing about it.',
        'Ask your cardiologist about Entresto, Farxiga or Jardiance, which have Medicare-negotiated prices already in effect. A clinical decision, but the cost difference is real.',
        'Do not spend time on the copay program — it excludes Medicare, Medicare Advantage and Medigap by name.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'The copay program was open but closed to Medicare; every charitable fund was closed.',
      bullets: [
        'INPEFA Together: the financial-support page is the authoritative source for the copay terms. The savings route on inpefa.com renders client-side and returned an error to direct requests, so use the INPEFA Together site.',
        'TotalAssist: the Heart failure and Stroke fund pages each show "Open" or "Closed" and their own award amounts.',
        'HealthWell: the disease-funds list shows the Chronic Heart Failure – Medicare Access fund and its status.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Only the government and charitable routes have rules you can check yourself:',
      bullets: [
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
        'TotalAssist (when open): government insurance covering Inpefa; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed heart failure or stroke diagnosis in treatment.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified chronic heart failure diagnosis, and treatment in the United States.',
        'Lexicon patient assistance: NOT PUBLISHED. Ask on the call.',
        'INPEFA Together Copay Program: commercial insurance only; Medicare, Medicare Advantage, Medigap, Medicaid, VA, DoD and TRICARE all excluded.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Whichever route you take, these are what will be asked for:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your diagnosis and its date — heart failure, or the combination of type 2 diabetes, chronic kidney disease and cardiovascular risk factors. TotalAssist needs the exact date if it was within the past 6 months.',
        'Your Inpefa strength — 200 mg or 400 mg.',
        'Household size and annual household income, plus proof.',
        'Your prescriber\'s name, office address and phone.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861; apply to the fund matching your diagnosis.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
        'Lexicon patient assistance: unknown — ask on the call what form exists and who must sign it.',
        'Medicare Prescription Payment Plan: you opt in through your Part D plan.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
        'HealthWell (when open): a decision once your provider returns the diagnosis verification.',
        'Lexicon patient assistance: unverified timeframe — ask when you make contact.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'With no generic and no negotiated price, the alternatives are structural:',
      bullets: [
        'Ask your cardiologist about Entresto, Farxiga or Jardiance. All three are used in heart failure and all three have Medicare-negotiated prices in effect since January 1, 2026, which Inpefa does not. This is a clinical decision, but it is a fair question to raise.',
        'Enrol in the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Ask your prescriber\'s office about a formulary or tier exception if Inpefa sits on a high tier.',
        'Do not wait for a generic — DailyMed labels a single sotagliflozin product.',
        'Apply for Extra Help even if you assume you earn too much; the limits are higher than most people expect.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your Inpefa strength — 200 mg or 400 mg', note: 'the dose is usually titrated upward after starting' },
    {
      item: 'Whether your diagnosis is heart failure or the diabetes-plus-kidney-disease combination',
      note: 'the TotalAssist Heart failure fund pays up to $2,500 and the Stroke fund up to $1,500 — and the Type 2 diabetes fund does not list Inpefa at all',
    },
  ],
  ifUnavailable: [
    {
      text: 'Ask your cardiologist whether Entresto, Farxiga or Jardiance would work for you. All three are used in heart failure and all three have Medicare-negotiated prices already in effect, while Inpefa has none.',
    },
    {
      text: 'Enrol in the Medicare Prescription Payment Plan. With no generic, no negotiated price and a copay program that excludes Medicare, spreading the cost is often the most practical step available.',
      href: 'https://www.medicare.gov/prescription-payment-plan',
      label: 'Medicare.gov',
    },
    ...standardAlternatives('Inpefa'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Inpefa?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Inpefa, usually on a brand tier and often behind prior authorization. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65, which carries more weight here than for heart-failure drugs that have negotiated prices.',
    },
    {
      question: 'Is there an Inpefa patient assistance program for people on Medicare?',
      answer:
        'Not one with published terms. Lexicon says on its financial-support page that "If you don\'t have insurance or your insurance doesn\'t cover INPEFA, you may still get help paying for INPEFA" — but it publishes no program name, no income limits, no criteria and no application route. Rather than fill that gap from a third-party site, this page records it. Call INPEFA Together on 1-855-246-7332 and ask specifically about patient assistance, and ask whether a Part D plan that denies Inpefa counts as insurance that "doesn\'t cover" it.',
    },
    {
      question: 'Can I use the $10 Inpefa copay card with Medicare?',
      answer:
        'No. Lexicon\'s terms are broad: "Offer not valid for prescriptions reimbursed under Medicare, Medicare Advantage, Medigap, Medicaid, VA, DoD, or TRICARE." Medigap appears in that list, which some manufacturers leave out, so having a supplement policy is itself disqualifying. The program also caps at 13 uses a year even for those who can use it.',
    },
    {
      question: 'Why is Inpefa not on the diabetes charity fund when it is an SGLT2 inhibitor?',
      answer:
        'Because the funds follow the label indication rather than the drug class. Inpefa\'s label indicates it "to reduce the risk of cardiovascular death, hospitalization for heart failure, and urgent heart failure visit" — it has no blood-sugar-lowering indication, even though it works the same way as Farxiga and Jardiance, which do. So TotalAssist lists Inpefa on its Heart failure and Stroke funds and not on its Type 2 diabetes fund. If you apply to the diabetes fund you will be applying against a list your medication is not on.',
    },
    {
      question: 'Is Inpefa part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price file has no Inpefa or sotagliflozin row for initial price applicability year 2026, 2027 or 2028. Three other medicines used in heart failure were selected in the first cycle and have had negotiated prices in effect since January 1, 2026 — Entresto, Farxiga and Jardiance. Inpefa is a newer, single-product medicine from a small manufacturer, which is the usual reason a drug has not yet reached the selection criteria.',
    },
    {
      question: 'Is there a generic for Inpefa?',
      answer:
        'No. DailyMed lists a single labelled sotagliflozin product, Lexicon\'s Inpefa. There is no generic to ask your prescriber about, which is why the practical alternatives on this page are a formulary exception, the Medicare Prescription Payment Plan, Extra Help, and the conversation about negotiated-price medicines in the same class. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['entresto', 'farxiga', 'jardiance', 'vyndamax'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Inpefa' },
  ],
  sources: [
    label,
    dailymedSota,
    inpefaTogether,
    lexiconSite,
    totalAssistHf,
    totalAssistStroke,
    totalAssistT2d,
    SRC.totalAssistNotify,
    SRC.totalAssistEligibility,
    healthWellFunds,
    SRC.healthWellFunds,
    SRC.healthWellCHF,
    goodDays,
    cmsMfpFile,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.medicarePaymentPlan,
    SRC.oigCoupons,
  ],
  // Per-record verification date. The open item is Lexicon's unpublished patient
  // assistance: if the company ever documents it, this record gains a real
  // manufacturer route and the `verify` card can be replaced.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Inpefa Assistance',
    status: 'coming-soon',
    description:
      'Why Inpefa sits on the heart funds rather than the diabetes fund, what Lexicon does and does not publish about patient assistance, and how Inpefa compares with the negotiated-price heart-failure medicines.',
  },
  description_meta:
    'How to lower the cost of Inpefa (sotagliflozin) on Medicare: why the copay card excludes Medicare and Medigap, why it is on the heart funds and not the diabetes fund, and how it compares with negotiated-price heart-failure drugs — verified August 2026.',
};

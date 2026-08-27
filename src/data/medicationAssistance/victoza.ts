// ---------------------------------------------------------------------------
// Victoza (liraglutide) — Novo Nordisk. Independently researched 2026-08-26.
// Batch 8 — a NEW slug.
//
// Victoza is the counter-example to every other Novo Nordisk record in this
// batch, and that is why it earns a page.
//
//  1. VICTOZA IS NOT ON THE NOVO NORDISK PATIENT ASSISTANCE PROGRAM. The
//     program's own available-products list (form NNIPAP_11_01012026) names the
//     insulins, Ozempic and Xultophy — and no Victoza. Tresiba and NovoLog, from
//     the same manufacturer, ARE on it. A reader who has been told "Novo Nordisk
//     has a patient assistance program" is being told something true that does not
//     apply to their medication.
//  2. THE REASON IS ALSO THE SOLUTION: liraglutide is now comprehensively
//     generic. DailyMed lists 22 labelled liraglutide products across 13 distinct
//     labelers — Teva, Hikma, Lupin, Biocon, Meitheal, Northstar and others — and
//     the federal TrumpRx site prices generic liraglutide at $133.58 while listing
//     no brand Victoza at all.
//  3. Victoza is a GLP-1, so this record must not be confused with the
//     weight-management GLP-1 records on this site. Victoza's indication is
//     glycaemic control in type 2 diabetes, which is what Part D covers GLP-1s
//     for; it is not a weight-loss product and the weight-management rules do not
//     govern it.
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
  title: 'Victoza prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a9ef4ea-c76a-4d34-a604-27c5b505f5a4',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'VICTOZA (liraglutide) injection; Novo Nordisk',
};
const dailymedLiraglutide = {
  title: 'DailyMed label index — liraglutide',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=liraglutide',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '22 labelled liraglutide products across 13 distinct labelers — Novo Nordisk\'s VICTOZA plus generic liraglutide injection from Teva, Hikma, Lupin, Biocon, Meitheal, Northstar Rx and others',
};
const novoPapList = {
  title: 'Novo Nordisk Patient Assistance Program — available products (form NNIPAP_11_01012026)',
  url: 'https://www.novocare.com/content/dam/novonordisk/novocare/forms/PAP_Product_List.pdf',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports:
    'the program\'s complete available-products list — insulins (NovoLog, NovoLog Mix 70/30, Fiasp, Novolin R/N/70-30, Tresiba U-100 and U-200), the GLP-1 Ozempic, the combination Xultophy 100/3.6 marked "Available for uninsured patients ONLY", and devices. VICTOZA DOES NOT APPEAR ON THE LIST',
};
const novoPapEligibility = {
  title: 'Novo Nordisk Patient Assistance Program — eligibility and 2026 changes',
  url: 'https://www.novocare.com/diabetes/help-with-costs/pap.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports:
    'the program eligibility rules and the note that "Some medicines will no longer be a part of the Patient Assistance Program for 2026"; "Have Medicare or no insurance (Note: If you have private or commercial insurance, you are not eligible for the PAP)"; the Extra Help / Medicaid / VA exclusion; and, for Ozempic specifically, "Medicare beneficiaries with prescription drug coverage will no longer be eligible to receive Ozempic through the Patient Assistance Program". Phone 1-866-310-7549',
};
const trumpRx = {
  title: 'TrumpRx — liraglutide listing',
  url: 'https://trumprx.gov/browse',
  publisher: 'U.S. federal government',
  checked: CHECKED,
  supports: '"Liraglutide (Generic for Victoza)" listed at a cash price of $133.58. Brand Victoza is not listed on the site',
};
const totalAssistT2d = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Victoza 2-Pak" and "Victoza 3-Pak" on the approved-medication list, alongside the generic "Liraglutide"; $1,500 guaranteed / $2,000 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistT2dHe = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) health equity fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; the same approved-medication list including Victoza and generic liraglutide; $1,500 guaranteed / $2,000 maximum award; requires a home zip code in a designated social-vulnerability county',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'the complete fund list — "Type 2 Diabetes" CLOSED; no GLP-1 or obesity fund of any kind',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no diabetes program of any kind',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file dated May 26, 2026 — no Victoza or liraglutide row for initial price applicability year 2026, 2027 or 2028. Other GLP-1s do appear: Ozempic, Rybelsus and Wegovy were selected together for IPAY 2027 and Trulicity for IPAY 2028',
};

export const VICTOZA: MedicationAssistanceRecord = {
  slug: 'victoza',
  brandName: 'Victoza',
  genericName: 'liraglutide',
  manufacturer: 'Novo Nordisk',
  // `diabetes` only. Victoza's label indication is glycaemic control in type 2
  // diabetes; TotalAssist lists it on the Type 2 diabetes funds. The `weight`
  // key would be wrong here — that key exists for Wegovy and Zepbound, and
  // adding it would match Victoza to weight-management contexts its label does
  // not support.
  conditions: ['diabetes'],
  drugClass: ['glp-1'],
  description:
    'Victoza is a once-daily injected GLP-1 medicine for type 2 diabetes. It is worth being clear about two things straight away: it is a diabetes medicine rather than a weight-loss one, and unlike Novo Nordisk\'s other diabetes products it has no manufacturer patient assistance program — because liraglutide is now widely available as a generic.',
  usedFor: [
    'Improving blood sugar control in adults and children aged 10 and over with type 2 diabetes, alongside diet and exercise — confirm the details that apply to your prescription with your prescriber',
  ],
  whyCostly:
    'Brand Victoza sits on a brand tier in most Part D plans. But the cost picture here has changed more than for any other medication in this batch: liraglutide is comprehensively generic, with 22 labelled products from 13 different labelers on DailyMed, and the federal TrumpRx site prices generic liraglutide at $133.58 while carrying no listing for the brand at all. That competition is also why Novo Nordisk no longer supports the brand through its patient assistance program.',
  medicareContext:
    'Victoza is an injection you give yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan — and it is covered on the ordinary basis, because its indication is type 2 diabetes. That distinction matters: Part D covers GLP-1 medicines for type 2 diabetes, and the separate rules that govern GLP-1s prescribed for weight management do not apply to Victoza. It is not a Medicare-negotiated drug: CMS\'s selected-drug file has no Victoza or liraglutide row for 2026, 2027 or 2028, which is unsurprising for a medicine that already has generic competition. Other GLP-1s are on those lists — Ozempic, Rybelsus and Wegovy for 2027, Trulicity for 2028 — so do not read across from them. Part D out-of-pocket costs are capped at $2,100 in 2026, and Extra Help lowers cost-sharing for people with limited income and resources.',
  quickAnswer: {
    verdict:
      'Not from the manufacturer, and that is the most useful thing on this page. Victoza is NOT on Novo Nordisk\'s patient assistance program list, even though Tresiba, NovoLog and Ozempic are. What a Medicare beneficiary has instead is generic liraglutide, available from 13 different labelers and priced at $133.58 on the federal TrumpRx site.',
    points: [
      'Novo Nordisk Patient Assistance Program: Victoza is NOT on the available-products list (form NNIPAP_11_01012026, read August 26, 2026). The list covers the insulins, Ozempic and Xultophy. Do not spend time on an application for Victoza.',
      'Generic liraglutide: 22 labelled products across 13 labelers including Teva, Hikma, Lupin, Biocon, Meitheal and Northstar Rx. This is the route with no application and no waiting.',
      'Federal cash price: TrumpRx lists "Liraglutide (Generic for Victoza)" at $133.58 and carries no listing for brand Victoza.',
      'Victoza is a diabetes medicine, not a weight-loss one. Part D covers GLP-1s for type 2 diabetes; the weight-management rules do not apply here.',
      'Charitable grants: TotalAssist lists Victoza 2-Pak and 3-Pak AND generic liraglutide on its Type 2 diabetes funds — both closed ($1,500 guaranteed / $2,000 maximum). HealthWell\'s Type 2 Diabetes fund was closed. Good Days has no diabetes fund.',
      'Not a Medicare-negotiated drug for 2026, 2027 or 2028 — though Ozempic, Rybelsus, Wegovy and Trulicity are.',
    ],
  },
  programs: [
    {
      id: 'novo-pap',
      kind: 'manufacturer-pap',
      name: 'Novo Nordisk Patient Assistance Program — Victoza not covered',
      operator: 'Novo Nordisk',
      status: 'not-found',
      statusNote:
        'Victoza was not on the Novo Nordisk Patient Assistance Program available-products list on August 26, 2026. The program\'s own document (form NNIPAP_11_01012026) lists the insulins — NovoLog, NovoLog Mix 70/30, Fiasp, Novolin and Tresiba — plus Ozempic, Xultophy 100/3.6 and devices. Victoza appears nowhere on it. Novo Nordisk separately notes that "Some medicines will no longer be a part of the Patient Assistance Program for 2026", so this may be a removal rather than a permanent absence.',
      medicare: 'unknown',
      medicareNote:
        'Novo Nordisk\'s program does have a Medicare pathway — it is one of the few that requires you to have Medicare or no insurance rather than excluding Medicare — but that pathway is irrelevant to Victoza, because the program only supplies medicines on its list. It is worth knowing that Novo Nordisk has been narrowing this program on the GLP-1 side generally: it also states that "Medicare beneficiaries with prescription drug coverage will no longer be eligible to receive Ozempic through the Patient Assistance Program". So the direction of travel for Novo Nordisk GLP-1s and Medicare is away from free-drug support and toward the generic and the plan.',
      summary:
        'An honest negative, and the reason this page exists. Novo Nordisk runs a substantial free-medicine program that covers its insulins; Victoza is not part of it. If you have been told Novo Nordisk has a patient assistance program, that is true and does not help you here — ask about generic liraglutide instead.',
      eligibility: [],
      howToApply:
        'Not applicable for Victoza. If Novo Nordisk adds it, it would appear on the available-products list cited here. Call 1-866-310-7549 if you want Novo Nordisk to confirm directly.',
      applyUrl: 'https://www.novocare.com/diabetes/help-with-costs/pap.html',
      applyLabel: 'Novo Nordisk PAP product list',
      phone: '1-866-310-7549',
      sources: [novoPapList, novoPapEligibility],
    },
    {
      id: 'generic-liraglutide',
      kind: 'manufacturer-direct',
      name: 'Generic liraglutide (including the TrumpRx cash price)',
      operator: 'Multiple manufacturers; cash price listed by the federal TrumpRx site',
      status: 'open',
      statusNote:
        'Widely available on August 26, 2026: DailyMed lists 22 labelled liraglutide products across 13 distinct labelers. The federal TrumpRx site prices "Liraglutide (Generic for Victoza)" at $133.58 and carries no listing for the brand.',
      medicare: 'eligible',
      medicareNote:
        'A generic is not an assistance program and has no Medicare rule to satisfy — it is simply a lower-tier version of the same medicine, and it is available to anyone with a prescription. Generic liraglutide typically sits on a generic tier where brand Victoza sits on a brand tier, which for a Medicare beneficiary is usually a larger saving than any program on this page would deliver. If you would rather pay cash, the TrumpRx figure gives you a benchmark — but note that cash spending does not count toward your $2,100 Part D out-of-pocket cap, whereas a generic filled through your plan does.',
      summary:
        'The answer for most people reading this page. Thirteen labelers make generic liraglutide, the charitable funds list it alongside the brand, and there is nothing to apply for. Ask your prescriber and plan about it before spending time on anything else here.',
      covers: 'The same medicine at a generic tier, or at a published cash price of $133.58 outside insurance.',
      eligibility: [
        'A prescription written for or substitutable to generic liraglutide',
        'No income test, no application and no waiting',
      ],
      howToApply:
        'Ask your prescriber to write for generic liraglutide, or ask your pharmacy whether it can substitute where state law allows. Ask your plan which liraglutide product is on its preferred tier.',
      applyUrl: 'https://trumprx.gov/browse',
      applyLabel: 'TrumpRx liraglutide listing',
      sources: [dailymedLiraglutide, trumpRx],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Type 2 diabetes funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Type 2 diabetes (T2DM) · Type 2 diabetes health equity',
      status: 'closed',
      statusNote:
        'Both funds were closed to new applicants on August 26, 2026, each with a $1,500 guaranteed and $2,000 maximum award.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open, and these funds do not exclude Extra Help enrollees.',
      summary:
        '"Victoza 2-Pak" and "Victoza 3-Pak" are named on the Type 2 diabetes approved-medication list, and so is the plain generic "Liraglutide" — so the switch this page recommends would not cost you fund eligibility. Both funds were closed when we checked.',
      covers:
        'When open: $1,500 guaranteed award and up to $2,000 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed type 2 diabetes diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
        ...TOTALASSIST_ELIGIBILITY,
        'The health-equity fund additionally requires a home zip code in a designated social-vulnerability county',
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' +
        TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [totalAssistT2d, totalAssistT2dHe, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Type 2 Diabetes fund',
      operator: 'HealthWell Foundation',
      fund: 'Type 2 Diabetes',
      status: 'closed',
      statusNote: 'Closed on August 26, 2026. HealthWell runs no GLP-1-specific or obesity fund.',
      medicare: 'eligible',
      medicareNote: 'HealthWell accepts Medicare beneficiaries for the diseases it covers. Its Type 2 Diabetes fund was closed when we checked.',
      summary:
        'One applicable fund, closed. Given how inexpensive generic liraglutide has become, a grant is likely to matter less for Victoza than for most medications on this site.',
      covers: 'When open: copays, coinsurance, deductibles and health-insurance premiums for type 2 diabetes.',
      eligibility: ['A confirmed type 2 diabetes diagnosis, verified by your prescriber', ...HEALTHWELL_REQUIREMENTS],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/disease-funds/',
      applyLabel: 'HealthWell disease funds and alerts',
      phone: HEALTHWELL_PHONE,
      sources: [healthWellFunds, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays',
      kind: 'charitable',
      name: 'Good Days — no applicable fund',
      operator: 'Good Days',
      status: 'not-found',
      statusNote: 'Good Days\' published disease list on August 26, 2026 contained 57 programs and none of them was diabetes.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Victoza.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'TotalAssist lists Victoza 2-Pak, Victoza 3-Pak and generic liraglutide on its Type 2 diabetes fund and the health-equity version, each paying $1,500 guaranteed up to $2,000, and both were closed on August 26, 2026. HealthWell\'s Type 2 Diabetes fund was closed too, and Good Days runs no diabetes fund. But the charitable picture matters less for Victoza than for almost anything else in this batch, because the cost problem is usually solved at the pharmacy counter: thirteen labelers now make generic liraglutide, and the funds list the generic on exactly the same footing as the brand. Set an alert if you like, and in the meantime have the generic conversation with your prescriber.',
  extraHelpNote:
    'Extra Help does the ordinary thing here, and there is no manufacturer program to weigh it against — so if your income and resources are limited, simply apply. With full Extra Help a covered brand-name drug costs about $12.65 in 2026 and a generic costs less still, which stacks usefully onto the generic-tier saving this page recommends.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Victoza on Medicare in August 2026, the order is unusually short, because the manufacturer route does not exist:',
      bullets: [
        'Ask your prescriber and plan about generic liraglutide — 22 labelled products from 13 labelers. This is the step that solves the problem for most people.',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'Type 2 diabetes → set alerts on the TotalAssist and HealthWell diabetes funds (all closed when checked).',
        'Cost still unmanageable → ask about a formulary exception, and compare Part D plans in the fall.',
        'Do not spend time on the Novo Nordisk patient assistance program — Victoza is not on its list.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'There is no manufacturer application to check for Victoza. What can change is fund status and the program list.',
      bullets: [
        'Novo Nordisk PAP: the available-products PDF is the authoritative list — check whether Victoza has been added since this page was verified.',
        'TotalAssist: the Type 2 diabetes fund pages show "Open" or "Closed" and current award amounts.',
        'HealthWell: the disease-funds list shows the Type 2 Diabetes fund and its status.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Only three things here have eligibility rules that could apply to you, and the most useful has none:',
      bullets: [
        'Generic liraglutide: no eligibility rules at all — a prescribing and formulary question, which is what makes it the first thing to ask about.',
        'TotalAssist (when open): government insurance covering Victoza or liraglutide; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed type 2 diabetes diagnosis.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified type 2 diabetes diagnosis, and treatment in the United States.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
        'Novo Nordisk PAP: not applicable, because Victoza is not a medication on the program.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Whichever route you take, these are what will be asked for:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your type 2 diabetes diagnosis and its date. TotalAssist needs the exact date if it was within the past 6 months.',
        'Your Victoza pack size and daily dose — the 2-Pak and 3-Pak are listed separately on the fund lists.',
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
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
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
        'Ask specifically about generic liraglutide, and ask your plan which labeler\'s product it prefers — with 13 on the market, plans differ.',
        'Compare the $133.58 TrumpRx cash price against your plan\'s cost-sharing, remembering that cash spending does not count toward your Part D out-of-pocket cap.',
        'If your plan does not cover liraglutide well, ask your prescriber\'s office about a formulary exception.',
        'Ask your prescriber whether a different GLP-1 suits your situation — but note that Ozempic, Rybelsus, Wegovy and Trulicity all have their own quite different cost pictures, and Novo Nordisk has narrowed Medicare access to Ozempic through its program.',
        'Apply for Extra Help even if you assume you earn too much; the limits are higher than most people expect.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your Victoza pack size and daily dose', note: 'the 2-Pak and 3-Pak are listed separately on the charitable fund lists' },
    { item: 'Confirmation that the prescription is for type 2 diabetes', note: 'Victoza is a diabetes medicine — the weight-management GLP-1 rules do not apply to it' },
  ],
  ifUnavailable: [
    {
      text: 'Because Novo Nordisk has no assistance program covering Victoza, the first question is not an application — ask your prescriber and plan about generic liraglutide, which DailyMed lists under 22 separate labels from 13 labelers.',
    },
    {
      text: 'Compare the federal cash price for generic liraglutide — $133.58 on TrumpRx — against what your plan charges you for the brand.',
      href: 'https://trumprx.gov/browse',
      label: 'TrumpRx',
    },
    ...standardAlternatives('Victoza'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Victoza?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Victoza, usually with brand Victoza on a brand tier and generic liraglutide on a much lower generic tier. Because Victoza\'s indication is type 2 diabetes, it is covered on the ordinary basis: Part D covers GLP-1 medicines prescribed for type 2 diabetes, and the separate rules that apply to GLP-1s prescribed for weight management do not govern it. Part D out-of-pocket costs are capped at $2,100 in 2026.',
    },
    {
      question: 'Is there a Victoza patient assistance program for people on Medicare?',
      answer:
        'No. Victoza is not on the Novo Nordisk Patient Assistance Program\'s available-products list — we read that list, form NNIPAP_11_01012026, on August 26, 2026. The program covers Novo Nordisk\'s insulins plus Ozempic and Xultophy, and Victoza appears nowhere on it. This catches people out because Novo Nordisk genuinely does run a substantial free-medicine program, and it is unusually welcoming to Medicare beneficiaries — it just does not include this medication. Ask about generic liraglutide instead.',
    },
    {
      question: 'Is there a generic for Victoza?',
      answer:
        'Yes, and it is thoroughly established. DailyMed lists 22 labelled liraglutide products across 13 distinct labelers, including Teva, Hikma, Lupin, Biocon, Meitheal and Northstar Rx. The federal TrumpRx site prices "Liraglutide (Generic for Victoza)" at $133.58 and carries no listing for brand Victoza at all. TotalAssist lists generic liraglutide on the same Type 2 diabetes fund as the brand. Since there is no manufacturer assistance program for this medication, the generic is by far the largest saving available.',
    },
    {
      question: 'Is Victoza a weight-loss drug?',
      answer:
        'No. Victoza is a GLP-1 medicine indicated for improving blood sugar control in type 2 diabetes, and that is how Medicare covers it. Some other GLP-1 products are prescribed for weight management and are subject to different Medicare rules; Victoza is not one of them. If you have read about Medicare and GLP-1s for weight loss, those rules do not apply to a Victoza prescription written for diabetes.',
    },
    {
      question: 'Is Victoza part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price file has no Victoza or liraglutide row for initial price applicability year 2026, 2027 or 2028 — unsurprising for a medicine that already has generic competition, since the program selects drugs without it. Other GLP-1s are on those lists: Ozempic, Rybelsus and Wegovy were selected together for 2027, and Trulicity for 2028. Do not read those prices across to Victoza. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
    {
      question: 'Is there a charitable grant for Victoza right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Victoza 2-Pak, Victoza 3-Pak and generic liraglutide on its Type 2 diabetes fund and the health-equity version, both closed, each with a $1,500 guaranteed and $2,000 maximum award. HealthWell\'s Type 2 Diabetes fund was closed too, and Good Days has no diabetes fund. Given how widely available generic liraglutide now is, a grant is likely to matter less here than for most medications on this site.',
    },
  ],
  relatedMedications: ['trulicity', 'ozempic', 'rybelsus', 'januvia'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Victoza' },
  ],
  sources: [
    label,
    dailymedLiraglutide,
    novoPapList,
    novoPapEligibility,
    trumpRx,
    totalAssistT2d,
    totalAssistT2dHe,
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
  // Per-record verification date. Re-verify the Novo Nordisk PAP product list
  // first — this record's headline finding is an absence, Novo Nordisk warns that
  // the 2026 list changed, and an absence stops being true the moment a list does.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Victoza Assistance',
    status: 'coming-soon',
    description:
      'Why Novo Nordisk\'s patient assistance program covers its insulins but not Victoza, what generic liraglutide from 13 labelers changes, and why the weight-management GLP-1 rules do not apply here.',
  },
  description_meta:
    'How to lower the cost of Victoza (liraglutide) on Medicare: why it is not on Novo Nordisk\'s patient assistance list, generic liraglutide from 13 labelers at $133.58, diabetes fund status, and Medicare Extra Help — verified August 2026.',
};

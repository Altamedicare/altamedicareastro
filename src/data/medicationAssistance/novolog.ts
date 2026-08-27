// ---------------------------------------------------------------------------
// NovoLog (insulin aspart) — Novo Nordisk. Independently researched 2026-08-26.
// Batch 8 — a NEW slug. D10 is resolved: one ordinary record per insulin brand.
//
// NovoLog is the ONLY insulin Medicare has ever negotiated a price for, and the
// negotiation story has a second half that almost nobody reports:
//
//   • CMS selected NOVOLOG / NOVOLOG FLEXPEN / NOVOLOG PENFILL / FIASP /
//     FIASP FLEXTOUCH / FIASP PENFILL (insulin aspart, human) for initial price
//     applicability year 2026. The maximum fair price is $119.00 per 30-day
//     equivalent supply, effective 01/01/2026, with an inflation-adjusted $122.22
//     recorded for 01/01/2027.
//   • BUT every NDC in the file also carries Type of Update "Deselect" and the
//     remark "NDC deselected from negotiation program with end date of
//     12/31/2026", as of 04/20/2026. The negotiated price runs through 2026 and
//     then stops.
//
// THIS FIGURE IS PRODUCT-SPECIFIC AND MUST NEVER BE GENERALISED. It applies to
// Novo Nordisk's insulin aspart products and to nothing else — not to Tresiba
// (insulin degludec, same manufacturer), not to Lantus or Toujeo (Sanofi
// glargine), and not to Lyumjev (Lilly lispro-aabc). No other insulin appears on
// any CMS selected-drug list for 2026, 2027 or 2028.
//
// Second differentiator: insulin aspart now has real biosimilar competition —
// DailyMed labels MERILOG (insulin aspart-szjj), KIRSTY (insulin aspart-xjhz) and
// GARZULYS alongside NovoLog, from 10 distinct labelers. Merilog is a Sanofi
// product, so a Novo Nordisk patient's biosimilar route runs through a different
// manufacturer's assistance program entirely.
//
// Novo Nordisk's PAP also has the most unusual insurance rule in this batch: it
// requires you to have Medicare or no insurance, and EXCLUDES commercial cover.
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
  title: 'NovoLog prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a1e73a2-3009-40d0-876c-b4cb2be56fc5',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'NOVOLOG (insulin aspart) injection, solution, and the insulin diluting medium for NovoLog; Novo Nordisk',
};
const dailymedAspart = {
  title: 'DailyMed label index — insulin aspart',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=insulin+aspart',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '20 labelled insulin aspart products across 10 distinct labelers — Novo Nordisk\'s NOVOLOG, NOVOLOG MIX 70/30 and FIASP, an unbranded "INSULIN ASPART" from Novo Nordisk Pharma, and the biosimilars MERILOG (insulin aspart-szjj), KIRSTY (insulin aspart-xjhz) and GARZULYS',
};
const novoPapList = {
  title: 'Novo Nordisk Patient Assistance Program — available products (form NNIPAP_11_01012026)',
  url: 'https://www.novocare.com/content/dam/novonordisk/novocare/forms/PAP_Product_List.pdf',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports:
    'the program\'s own product list: insulins NovoLog (10 mL vial, FlexPen, PenFill cartridge), NovoLog Mix 70/30, Fiasp, Novolin R / N / 70-30 and Tresiba U-100 and U-200; the GLP-1 Ozempic; and Xultophy 100/3.6 marked "Available for uninsured patients ONLY". Victoza does not appear on the list',
};
const novoPapEligibility = {
  title: 'Novo Nordisk Patient Assistance Program — eligibility',
  url: 'https://www.novocare.com/diabetes/help-with-costs/pap.html',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports:
    'the 2026 eligibility criteria verbatim — "Be a US citizen or legal resident"; "Have a total household income that qualifies"; "Have Medicare or no insurance (Note: If you have private or commercial insurance, you are not eligible for the PAP)"; "Not be enrolled in or qualify for any other federal, state, or government program such as Medicaid, Medicare Low-Income Subsidy (LIS, or Extra Help Program), or Veterans Affairs (VA) Benefits"; "If you are eligible for Medicaid or Medicare LIS, you must submit a copy of your denial". For Medicare patients on Novo Nordisk insulins: "Total household income must be at or below 400% of the federal poverty level" and "Medicare beneficiaries with a total household income below 150% of the federal poverty level must provide proof of denial for Part D Extra Help to qualify". Also: "we no longer require that Medicare Part D patients spend $1000 out of pocket to be eligible for the program". Novo Nordisk publishes no dollar table, directing applicants to the NeedyMeds FPL guidelines. Apply at diabetespap.novocare.com; phone 1-866-310-7549',
};
const novoPapForm = {
  title: 'Novo Nordisk Patient Assistance Program application',
  url: 'https://www.novocare.com/content/dam/novonordisk/novocare/forms/PAP_Application_EN.pdf',
  publisher: 'Novo Nordisk',
  checked: CHECKED,
  supports:
    'the application\'s own terms: the PAP "provides medication at no charge to applicants who qualify"; "Requested medications or devices are shipped to a licensed health care professional for dispensing, up to a 120-day supply"; "The Novo Nordisk PAP is free. There is no registration charge or monthly fee"; the form asks whether the patient has Medicare Part D or Medicare Advantage prescription coverage; approved patients receive up to a 120-day supply "through the end of this calendar year"',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the selected-drug file dated May 26, 2026: "NOVOLOG; NOVOLOG FLEXPEN; NOVOLOG PENFILL; FIASP; FIASP FLEXTOUCH; FIASP PENFILL" (insulin aspart, human), IPAY 2026, single MFP per 30-day equivalent supply $119.00 with MFP effective date 01/01/2026 and end date 12/31/2026, and an inflation-adjusted $122.22 row for 01/01/2027. EVERY NDC row also carries Type of Update "Deselect" with the remark "NDC deselected from negotiation program with end date of 12/31/2026", as of 04/20/2026. No other insulin appears on any CMS selected-drug list for 2026, 2027 or 2028',
};
const cmsMfpExplanation = {
  title: 'MFP explanation for NovoLog/Fiasp (initial price applicability year 2026)',
  url: 'https://www.cms.gov/files/zip/mfp-explanation-novolog/fiasp.zip',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'CMS\'s published explanation of how the NovoLog/Fiasp maximum fair price was reached',
};
const trumpRx = {
  title: 'TrumpRx — NovoLog listing',
  url: 'https://trumprx.gov/browse',
  publisher: 'U.S. federal government',
  checked: CHECKED,
  supports: 'NovoLog (Novo Nordisk) listed at a cash price of $35.00, and NovoLog Mix 70/30 also at $35.00',
};
const totalAssistT2d = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Novolog", "Novolog Flexpen", "Novolog Penfill" and "Novolog Mix 70-30" on the approved-medication list, alongside the unbranded "Insulin Aspart" and the biosimilars Merilog and Kirsty; $1,500 guaranteed / $2,000 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistT2dHe = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) health equity fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; the same approved-medication list including NovoLog; $1,500 guaranteed / $2,000 maximum award; requires a home zip code in a designated social-vulnerability county',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports: 'the complete fund list — "Type 2 Diabetes" CLOSED; there is no Type 1 Diabetes fund and no insulin-specific fund of any kind',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no diabetes or insulin program of any kind',
};

export const NOVOLOG: MedicationAssistanceRecord = {
  slug: 'novolog',
  brandName: 'NovoLog',
  genericName: 'insulin aspart',
  manufacturer: 'Novo Nordisk',
  conditions: ['diabetes'],
  drugClass: ['insulin'],
  description:
    'NovoLog is a rapid-acting mealtime insulin — you take it around meals to cover the rise in blood sugar that food causes, rather than for background coverage between meals. It is the only insulin for which Medicare has ever negotiated a price directly with the manufacturer, and understanding what that negotiation did, and when it stops, is the most useful thing on this page.',
  usedFor: [
    'Improving blood sugar control in adults and children with diabetes mellitus, taken around mealtimes',
  ],
  whyCostly:
    'Mealtime insulin is used several times a day, every day, so the quantities add up faster than for a once-daily background insulin. Two things pull NovoLog\'s cost down and neither applies to the other insulins on this site. First, Medicare negotiated a maximum fair price of $119.00 per 30-day equivalent supply, in effect through 2026. Second, insulin aspart now has genuine biosimilar competition: DailyMed labels Merilog, Kirsty and Garzulys alongside NovoLog, from ten different labelers in total. Novo Nordisk also sells NovoLog for $35 cash through the federal TrumpRx site.',
  medicareContext:
    'NovoLog is covered under Medicare Part D or a Medicare Advantage drug plan, and under federal law a covered insulin costs no more than $35 for a month\'s supply with no deductible applied — a rule that applies to insulins generally; our <a href="/blog/medicare-35-dollar-insulin-cap.html">insulin cost guide</a> covers it across products. What is unique to NovoLog is the negotiation. CMS selected NovoLog, NovoLog FlexPen, NovoLog PenFill, Fiasp, Fiasp FlexTouch and Fiasp PenFill — all insulin aspart products — for initial price applicability year 2026, and set a maximum fair price of $119.00 per 30-day equivalent supply effective January 1, 2026, with $122.22 recorded for January 1, 2027. But the same CMS file records every one of those NDCs as deselected from the negotiation program with an end date of December 31, 2026. So the negotiated price applies for 2026 and then ends. This figure belongs to Novo Nordisk\'s insulin aspart products and to nothing else: no other insulin — not Tresiba, not Lantus, not Toujeo, not Lyumjev — appears on any CMS selected-drug list for 2026, 2027 or 2028, and this price does not transfer to them.',
  quickAnswer: {
    verdict:
      'Yes, and Novo Nordisk\'s program has the most unusual insurance rule in this batch: it requires you to have Medicare or no insurance, and turns commercial insurance into a disqualifier. NovoLog is also the only insulin Medicare has negotiated a price for — $119.00 per 30-day equivalent supply — though the CMS file shows that negotiated price ending after 2026.',
    points: [
      'Novo Nordisk Patient Assistance Program: NovoLog is on its product list. "Have Medicare or no insurance (Note: If you have private or commercial insurance, you are not eligible for the PAP)" — the reverse of most manufacturer programs.',
      'For Medicare patients on Novo Nordisk insulins: household income at or below 400% of the federal poverty level. Below 150% FPL you must provide proof of denial for Part D Extra Help.',
      'Extra Help enrollees are excluded: the program requires you not be enrolled in or qualify for Medicaid, Medicare Low-Income Subsidy or VA benefits, and asks for a copy of your denial if you are eligible for either.',
      'Medicare negotiated price: $119.00 per 30-day equivalent supply from January 1, 2026 ($122.22 for 2027) — but every NDC is recorded as deselected with an end date of December 31, 2026. This applies to insulin aspart only and to no other insulin.',
      'Biosimilars now exist: Merilog, Kirsty and Garzulys are labelled insulin aspart products, and TotalAssist lists them on the same fund as NovoLog.',
      'Charitable grants: TotalAssist\'s Type 2 diabetes funds both list NovoLog and both were closed ($1,500 guaranteed / $2,000 maximum). HealthWell\'s Type 2 Diabetes fund was closed. Good Days has no diabetes fund.',
    ],
  },
  programs: [
    {
      id: 'novo-pap',
      kind: 'manufacturer-pap',
      name: 'Novo Nordisk Patient Assistance Program',
      operator: 'Novo Nordisk',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026. NovoLog appears on the program\'s own available-products list (form NNIPAP_11_01012026) in vial, FlexPen and PenFill cartridge forms, along with NovoLog Mix 70/30. Novo Nordisk notes that "Some medicines will no longer be a part of the Patient Assistance Program for 2026", so the list is worth re-reading rather than assuming.',
      medicare: 'conditional',
      medicareNote:
        'Novo Nordisk runs this program the opposite way round from most manufacturers, and the distinction catches people out. Its rule is: "Have Medicare or no insurance (Note: If you have private or commercial insurance, you are not eligible for the PAP)." Having Medicare is a qualification here, not a barrier. The conditions attached are that your household income must be at or below 400% of the federal poverty level for Medicare patients on Novo Nordisk insulins, and that you must "not be enrolled in or qualify for any other federal, state, or government program such as Medicaid, Medicare Low-Income Subsidy (LIS, or Extra Help Program), or Veterans Affairs (VA) Benefits". If you are eligible for Medicaid or Extra Help you must submit a copy of your denial, and Medicare beneficiaries below 150% of the poverty level are specifically required to provide proof of denial for Part D Extra Help. One helpful change: Novo Nordisk states it "no longer require[s] that Medicare Part D patients spend $1000 out of pocket to be eligible for the program".',
      summary:
        'A free-medicine program that is genuinely built for Medicare beneficiaries rather than merely tolerating them — but one that treats Extra Help as a competing benefit you must be turned down for. Approved patients receive up to a 120-day supply, shipped to a licensed healthcare professional for dispensing, through the end of the calendar year.',
      covers: 'NovoLog vials, FlexPen and PenFill cartridges, and NovoLog Mix 70/30, at no charge to approved applicants. Up to a 120-day supply per approval.',
      eligibility: [
        'US citizen or legal resident',
        'Have Medicare or no insurance — private or commercial insurance disqualifies you',
        'Household income at or below 400% of the federal poverty level for Medicare patients on Novo Nordisk insulins',
        'Not enrolled in or qualifying for Medicaid, Medicare Low-Income Subsidy (Extra Help) or VA benefits',
        'If eligible for Medicaid or Medicare LIS, you must submit a copy of your denial',
        'Medicare beneficiaries below 150% of the federal poverty level must provide proof of denial for Part D Extra Help',
        'Novo Nordisk publishes no dollar income table itself, directing applicants to the NeedyMeds federal poverty level guidelines',
      ],
      requirements: [
        'Proof of household income for everyone in your household',
        'Your Medicare Part D or Medicare Advantage prescription coverage details — the application asks specifically',
        'A copy of your Medicaid or Extra Help denial letter, if you are eligible for either',
        'Your prescriber\'s details — you complete Section 1 and your healthcare provider completes Section 2',
      ],
      howToApply:
        'Apply at diabetespap.novocare.com, or call 1-866-310-7549. You complete the patient section and your prescriber completes theirs. There is no registration charge and no monthly fee. If approved, medication is shipped to a licensed healthcare professional for dispensing rather than to your pharmacy.',
      applyUrl: 'https://diabetespap.novocare.com/',
      applyLabel: 'Novo Nordisk Patient Assistance Program',
      phone: '1-866-310-7549',
      sources: [novoPapList, novoPapEligibility, novoPapForm],
    },
    {
      id: 'medicare-negotiated-price',
      kind: 'government',
      name: 'Medicare negotiated price (Maximum Fair Price) — insulin aspart',
      operator: 'CMS / Medicare Drug Price Negotiation Program',
      status: 'limited',
      statusNote:
        'In effect for 2026 and then ending. CMS set a maximum fair price of $119.00 per 30-day equivalent supply for Novo Nordisk\'s insulin aspart products effective January 1, 2026, with an inflation-adjusted $122.22 recorded for January 1, 2027 — but every NDC in the file also carries a "Deselect" update with the remark "NDC deselected from negotiation program with end date of 12/31/2026", recorded as of April 20, 2026.',
      medicare: 'eligible',
      medicareNote:
        'This applies to people whose Part D plans cover NovoLog, Fiasp and the related insulin aspart presentations. A negotiated price is not a pharmacy cash price: it lowers what plans and enrollees pay, not what someone paying out of pocket is charged. And it is specific to these products. No other insulin on this site — Tresiba, Lantus, Toujeo or Lyumjev — appears on any CMS selected-drug list for 2026, 2027 or 2028, so this $119.00 figure does not describe them and should not be quoted for them.',
      summary:
        'The only Medicare-negotiated insulin price that exists. Worth knowing both halves: the price took effect in 2026, and CMS\'s own file records the products as deselected from the program with effect from the end of 2026. Ask your plan what it charges you rather than assuming the negotiated figure is your cost — under the insulin cost-sharing rules a covered insulin is capped at $35 a month anyway, which is lower.',
      covers: 'The price Part D plans pay for Novo Nordisk insulin aspart products during 2026.',
      eligibility: [
        'Enrolled in a Medicare Part D or Medicare Advantage drug plan that covers the product',
        'Applies to Novo Nordisk insulin aspart products only — NovoLog, NovoLog FlexPen, NovoLog PenFill, Fiasp, Fiasp FlexTouch and Fiasp PenFill',
      ],
      howToApply:
        'Nothing to apply for. The negotiated price applies automatically through your Part D plan. What you actually pay is your plan\'s cost-sharing, which for a covered insulin is capped at $35 a month.',
      applyUrl:
        'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
      applyLabel: 'CMS selected drugs and negotiated prices',
      sources: [cmsMfpFile, cmsMfpExplanation, SRC.medicare2026Guide],
    },
    {
      id: 'trumprx',
      kind: 'manufacturer-direct',
      name: 'Cash price via TrumpRx',
      operator: 'U.S. federal government listing of manufacturer cash prices',
      status: 'open',
      statusNote: 'NovoLog listed at $35.00 on August 26, 2026, with NovoLog Mix 70/30 also at $35.00.',
      medicare: 'conditional',
      medicareNote:
        'A cash price is available to anyone, including Medicare beneficiaries, but buying outside your drug plan means the spending does not count toward your Part D deductible or your $2,100 annual out-of-pocket cap. Since a covered insulin under a Medicare drug plan is already capped at $35 a month — the same figure — and that spending does count, the cash route rarely helps a Medicare beneficiary whose plan covers NovoLog. It matters if your plan does not.',
      summary:
        'A published federal cash price, useful as a benchmark and as a fallback if your plan does not cover NovoLog. For most Medicare readers the plan route is at least as cheap and counts toward your cap.',
      covers: 'NovoLog at the listed cash price, outside insurance.',
      eligibility: ['Paying cash rather than using prescription insurance for that fill'],
      howToApply: 'Check the current listing and follow the purchase route it gives. Compare against your plan\'s insulin cost-sharing first.',
      applyUrl: 'https://trumprx.gov/browse',
      applyLabel: 'TrumpRx',
      sources: [trumpRx],
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
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open. Note that these funds do NOT exclude Extra Help enrollees, unlike the Novo Nordisk program — so the two are worth pursuing in parallel rather than treating as alternatives.',
      summary:
        'NovoLog, NovoLog FlexPen, NovoLog PenFill and NovoLog Mix 70/30 are all named on the Type 2 diabetes approved-medication list, as are the unbranded insulin aspart and the biosimilars Merilog and Kirsty — so a switch to a biosimilar would not cost you fund eligibility. Both funds were closed, and both are type 2 funds only.',
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
      statusNote: 'Closed on August 26, 2026. HealthWell runs no Type 1 Diabetes fund and no insulin-specific fund.',
      medicare: 'eligible',
      medicareNote: 'HealthWell accepts Medicare beneficiaries for the diseases it covers. Its Type 2 Diabetes fund was closed when we checked.',
      summary:
        'One applicable fund, closed. Worth flagging for a mealtime insulin in particular: NovoLog is widely used in type 1 diabetes, and none of the three foundations on this page runs a type 1 fund.',
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
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to NovoLog.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'TotalAssist lists NovoLog in all its forms on the Type 2 diabetes fund and its health-equity version, each paying $1,500 guaranteed up to $2,000, and both were closed on August 26, 2026. HealthWell\'s Type 2 Diabetes fund was closed too, and Good Days runs no diabetes fund at all. As with every insulin on this site, these are type 2 funds — and NovoLog is a mealtime insulin widely used in type 1 diabetes, so a substantial share of the people reading this page have no charitable route on these three foundations. The useful consequence is that the routes that do not depend on a fund balance matter more here: the Novo Nordisk program, which is unusual in requiring Medicare rather than excluding it; the biosimilars, which the funds treat identically to the brand; and your plan\'s $35 insulin cost-sharing.',
  extraHelpNote:
    'For NovoLog, Extra Help and the manufacturer program are in direct tension, and you should know which you are choosing. Novo Nordisk requires that you "not be enrolled in or qualify for" Medicare Extra Help, and Medicare beneficiaries below 150% of the federal poverty level must supply proof that Extra Help turned them down. So you cannot hold both. In most cases Extra Help is the stronger option: it lowers cost-sharing on every covered drug you take rather than one, it does not require annual re-approval by a manufacturer, and it cannot be withdrawn when a program\'s rules change. Apply for Extra Help first and treat the Novo Nordisk program as the route for people it turns down — which is precisely the sequence Novo Nordisk\'s own denial-letter requirement implies.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For NovoLog on Medicare in August 2026, the first question is whether you qualify for Extra Help, because it decides which door is open:',
      bullets: [
        'Apply for Medicare Extra Help first. If you get it, use it — and note that the Novo Nordisk program is then closed to you.',
        'If Extra Help turns you down, keep the denial letter: Novo Nordisk requires it, and it is the key to their program.',
        'Income at or below 400% of the federal poverty level and no commercial insurance → apply to the Novo Nordisk Patient Assistance Program.',
        'Check what your plan charges. A covered insulin is capped at $35 a month under a Medicare drug plan, with no deductible.',
        'Ask your prescriber and plan about the insulin aspart biosimilars — Merilog, Kirsty and Garzulys.',
        'Type 2 diabetes → set alerts on the TotalAssist and HealthWell diabetes funds (all closed when checked).',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'The manufacturer program was open; the charitable funds were closed; the negotiated price has an end date.',
      bullets: [
        'Novo Nordisk PAP: open, and its product list is published as a PDF — worth re-reading, since Novo Nordisk warns that some medicines left the program for 2026.',
        'CMS negotiated price: in effect for 2026, with the insulin aspart NDCs recorded as deselected from December 31, 2026.',
        'TotalAssist: the Type 2 diabetes fund pages show "Open" or "Closed" and current award amounts.',
        'HealthWell: the disease-funds list shows the Type 2 Diabetes fund and its status.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Novo Nordisk\'s insurance rule is the reverse of what most people expect:',
      bullets: [
        'Novo Nordisk PAP: you must have Medicare or no insurance. Private or commercial insurance disqualifies you.',
        'Income at or below 400% of the federal poverty level for Medicare patients on Novo Nordisk insulins. Novo Nordisk publishes no dollar table and points to the NeedyMeds poverty guidelines.',
        'You must not be enrolled in or qualify for Medicaid, Extra Help or VA benefits — and must supply a denial letter if you are eligible for Medicaid or Extra Help.',
        'Below 150% of the federal poverty level, proof of denial for Part D Extra Help is specifically required.',
        'TotalAssist (when open): government insurance covering NovoLog; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed type 2 diabetes diagnosis.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified type 2 diabetes diagnosis, and treatment in the United States.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'One document here is unusual and worth getting first:',
      bullets: [
        'Your Extra Help denial letter, if you have one. Novo Nordisk requires it if you are eligible for Extra Help or Medicaid, and below 150% of the poverty level it is mandatory.',
        'Proof of household income for everyone in the household.',
        'Medicare card and your Part D or Medicare Advantage drug-plan card — the application asks specifically about Medicare Rx coverage.',
        'Your NovoLog form and daily dose — vial, FlexPen or PenFill cartridge, and units per day.',
        'Your prescriber\'s details, since they complete their own section of the application.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Novo Nordisk PAP: you complete Section 1; your healthcare provider completes Section 2. Apply at diabetespap.novocare.com or call 1-866-310-7549. It is free — there is no registration charge and no monthly fee.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
        'Biosimilar switch: nothing to apply for — a prescribing and formulary question.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Novo Nordisk PAP: approved patients receive up to a 120-day supply, shipped to a licensed healthcare professional for dispensing rather than to your pharmacy, through the end of the calendar year.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'NovoLog has more genuine alternatives than most insulins:',
      bullets: [
        'Ask about the biosimilars. Merilog, Kirsty and Garzulys are labelled insulin aspart products, and TotalAssist lists them on the same fund as NovoLog. Note that Merilog is a Sanofi product, so its own assistance runs through Sanofi Patient Connection rather than Novo Nordisk.',
        'Confirm your plan\'s insulin cost-sharing. A covered insulin is capped at $35 a month with no deductible, and unlike a cash purchase that spending counts toward your $2,100 out-of-pocket cap.',
        'Do not plan around the negotiated price beyond 2026 — CMS\'s file records the insulin aspart NDCs as deselected from December 31, 2026.',
        'Apply for Extra Help even if you assume you earn too much; the limits are higher than most people expect, and it outperforms the manufacturer program for most people.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    {
      item: 'Your Medicare Extra Help denial letter, if you have one',
      note: 'Novo Nordisk requires it if you are eligible for Extra Help or Medicaid, and mandatorily below 150% of the federal poverty level',
    },
    { item: 'Your NovoLog form and daily dose', note: 'vial, FlexPen or PenFill cartridge, and units per day' },
    { item: 'Your diabetes type', note: 'the TotalAssist and HealthWell funds cover type 2 only, and NovoLog is widely used in type 1' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your prescriber and plan about the insulin aspart biosimilars — Merilog, Kirsty and Garzulys are all labelled, and the charitable funds list them alongside NovoLog.',
    },
    {
      text: 'Confirm your plan\'s insulin cost-sharing before paying cash. A covered insulin is capped at $35 a month under a Medicare drug plan, and that spending counts toward your out-of-pocket cap while cash spending does not.',
      href: '/blog/medicare-35-dollar-insulin-cap.html',
      label: 'Insulin costs on Medicare',
    },
    ...standardAlternatives('NovoLog'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover NovoLog?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans cover NovoLog, and under federal law a covered insulin costs no more than $35 for a month\'s supply with no deductible applied. Our <a href="/blog/medicare-35-dollar-insulin-cap.html">insulin cost guide</a> explains how that works across products. NovoLog is also the only insulin for which Medicare has negotiated a price directly with the manufacturer.',
    },
    {
      question: 'What is the Medicare negotiated price for NovoLog, and does it still apply?',
      answer:
        'CMS set a maximum fair price of $119.00 per 30-day equivalent supply for Novo Nordisk\'s insulin aspart products — NovoLog, NovoLog FlexPen, NovoLog PenFill, Fiasp, Fiasp FlexTouch and Fiasp PenFill — effective January 1, 2026, with an inflation-adjusted $122.22 recorded for January 1, 2027. But the same CMS data file records every one of those NDCs as deselected from the negotiation program with an end date of December 31, 2026. So the negotiated price applies during 2026 and then ends. In practice what you pay is your plan\'s cost-sharing, and for a covered insulin that is capped at $35 a month, which is lower than the negotiated price.',
    },
    {
      question: 'Does the NovoLog negotiated price apply to my other insulin?',
      answer:
        'No, and this is worth being firm about. The $119.00 maximum fair price applies to Novo Nordisk\'s insulin aspart products and to nothing else. Tresiba (insulin degludec) is made by the same company and is not on any CMS selected-drug list. Neither is Lantus or Toujeo (Sanofi\'s insulin glargine), nor Lyumjev (Lilly\'s insulin lispro-aabc). NovoLog and Fiasp are the only insulins CMS has ever selected, for 2026, 2027 or 2028.',
    },
    {
      question: 'Is there a NovoLog patient assistance program for people on Medicare?',
      answer:
        'Yes, and it is built the opposite way round from most. Novo Nordisk\'s rule is: "Have Medicare or no insurance (Note: If you have private or commercial insurance, you are not eligible for the PAP)." Having Medicare qualifies you rather than disqualifying you. For Medicare patients on Novo Nordisk insulins, household income must be at or below 400% of the federal poverty level. The significant catch is Extra Help: you must not be enrolled in or qualify for it, and if you are eligible you must supply a copy of your denial. Approved patients get up to a 120-day supply, shipped to a licensed healthcare professional.',
    },
    {
      question: 'Can I have both Extra Help and the Novo Nordisk program?',
      answer:
        'No. Novo Nordisk requires that you "not be enrolled in or qualify for any other federal, state, or government program such as Medicaid, Medicare Low-Income Subsidy (LIS, or Extra Help Program), or Veterans Affairs (VA) Benefits", and beneficiaries below 150% of the federal poverty level must provide proof that Extra Help denied them. For most people Extra Help is the better of the two — it applies to every covered drug you take, not just your insulin. Apply for <a href="/blog/extra-help-explained.html">Extra Help</a> first and treat the manufacturer program as the fallback if you are turned down.',
    },
    {
      question: 'Is there a biosimilar for NovoLog?',
      answer:
        'Yes, several. DailyMed lists 20 labelled insulin aspart products across ten labelers, including Merilog (insulin aspart-szjj), Kirsty (insulin aspart-xjhz) and Garzulys alongside Novo Nordisk\'s NovoLog and Fiasp, plus an unbranded insulin aspart. TotalAssist lists Merilog and Kirsty on the same Type 2 diabetes fund as NovoLog, so switching would not cost you fund eligibility. One thing to note: Merilog is a Sanofi product, so if you switch to it your manufacturer assistance route changes companies too. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['tresiba', 'lyumjev', 'lantus', 'toujeo'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/medicare-35-dollar-insulin-cap.html', label: 'The $35 Insulin Cap with Medicare', blurb: 'The $35 cap and which insulin products are covered' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover NovoLog' },
  ],
  sources: [
    label,
    dailymedAspart,
    novoPapList,
    novoPapEligibility,
    novoPapForm,
    cmsMfpFile,
    cmsMfpExplanation,
    trumpRx,
    totalAssistT2d,
    totalAssistT2dHe,
    SRC.totalAssistNotify,
    SRC.totalAssistEligibility,
    healthWellFunds,
    SRC.healthWellFunds,
    goodDays,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.medicarePaymentPlan,
    SRC.oigCoupons,
  ],
  // Per-record verification date. Re-verify the CMS deselection rows first: the
  // negotiated price ends after 2026 on the current file, and what replaces it —
  // if anything — is the single most consequential change this record can undergo.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for NovoLog Assistance',
    status: 'coming-soon',
    description:
      'The only Medicare-negotiated insulin price and why it ends after 2026, why Novo Nordisk requires Medicare rather than excluding it, and why you must choose between Extra Help and the manufacturer program.',
  },
  description_meta:
    'How to lower the cost of NovoLog (insulin aspart) on Medicare: the $119.00 negotiated price and its 2026 end date, why Novo Nordisk\'s program requires Medicare but excludes Extra Help, the insulin aspart biosimilars, and diabetes fund status — verified August 2026.',
};

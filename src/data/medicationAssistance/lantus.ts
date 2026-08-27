// ---------------------------------------------------------------------------
// Lantus (insulin glargine) — Sanofi. Independently researched 2026-08-26.
// Batch 8 — a NEW slug. D10 is resolved: one ordinary record per insulin brand.
//
// This record deliberately does NOT lead with the $35 Part D insulin cap. That
// cap applies to every insulin under a Medicare drug plan, it is not
// brand-specific assistance, and /blog/medicare-35-dollar-insulin-cap.html is the site's
// resource for it. It appears once here, in `medicareContext`, as background.
//
// What IS specific to Lantus, and what this page is for:
//
//  1. THE TrOOP TRAP. Sanofi's Insulins Valyou Savings Program sells Lantus for
//     $35 per 30-day supply to people "who are insured by a prescription plan but
//     are not using such insurance and will be paying the full retail price." A
//     Medicare beneficiary CAN use that by paying cash outside Part D. But
//     Sanofi's own terms then say: "You may not seek to have your out-of-pocket
//     costs or the full retail price of the Sanofi Insulin count toward your
//     deductible, true-out-of-pocket (TrOOP), maximum out-of-pocket (MOOP), or any
//     other out-of-pocket caps." So the cash route buys a lower monthly price at
//     the cost of progress toward the $2,100 Part D cap. For someone taking other
//     expensive drugs, that trade can be a net loss. This is a real, checkable,
//     decision-changing distinction and it is the spine of the page.
//
//  2. SANOFI PATIENT CONNECTION STATES NO MEDICARE RULE. Its published eligibility
//     is US residency, income ≤400% FPL ($63,840 for one person in 2026), and — for
//     commercially insured patients — no coverage or access to the product. Nothing
//     on its eligibility pages addresses Medicare. Recorded as `unknown`, not
//     guessed at.
//
//  3. Insulin glargine has the deepest follow-on/biosimilar market of any insulin
//     in this batch: Basaglar, Semglee, Rezvoglar, Langlara and an unbranded
//     "Insulin Glargine" all appear on DailyMed alongside Lantus.
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
  title: 'Lantus prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d5e07a0c-7e14-4756-9152-9fea485d654a',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'LANTUS (insulin glargine) injection, solution and LANTUS SOLOSTAR (insulin glargine) injection, solution, 100 units/mL; sanofi-aventis U.S. LLC',
};
const dailymedGlargine = {
  title: 'DailyMed label index — insulin glargine',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=insulin+glargine',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '20 labelled insulin glargine products across 9 distinct labelers — Sanofi\'s LANTUS, LANTUS SOLOSTAR, TOUJEO and TOUJEO MAX, plus BASAGLAR KWIKPEN, SEMGLEE, REZVOGLAR KWIKPEN, LANGLARA, SOLIQUA 100/33, an unbranded "INSULIN GLARGINE" and an "INSULIN GLARGINE U-300"',
};
const sanofiMeds = {
  title: 'Sanofi Patient Connection — medications available',
  url: 'https://www.sanofipatientconnection.com/medications-available',
  publisher: 'Sanofi',
  checked: CHECKED,
  supports:
    'the complete medication list, which includes Lantus (insulin glargine), Toujeo (insulin glargine), an unbranded Insulin Glargine U-300, Admelog, Apidra, Soliqua 100/33 and Merilog',
};
const sanofiEligibility = {
  title: 'Sanofi Patient Connection — patient assistance eligibility',
  url: 'https://www.sanofipatientconnection.com/patient-assistance-connection',
  publisher: 'Sanofi',
  checked: CHECKED,
  supports:
    'the published eligibility criteria verbatim — "You must be a resident of the U.S. or U.S. Territories"; "For commercially insured patients, you must have no insurance coverage or access to the prescribed product"; "You must have an annual household income of ≤400% of the current Federal Poverty Level". NOTE: no Medicare rule appears anywhere on the program\'s published eligibility pages. Phone 1-888-847-4877 (Mon–Fri 9am–8pm ET)',
};
const sanofiFinancial = {
  title: 'Sanofi Patient Connection — financial eligibility table',
  url: 'https://www.sanofipatientconnection.com/financial-eligibility',
  publisher: 'Sanofi',
  checked: CHECKED,
  supports:
    'the 2026 income table for the 48 contiguous states and DC at 400% FPL — 1 person $63,840; 2 $86,560; 3 $109,280; 4 $132,000; 5 $154,720; 6 $177,440; 7 $200,160; 8 $222,880, adding $5,680 per additional person; separate higher tables for Alaska and Hawaii',
};
const sanofiSavings = {
  title: 'Lantus savings and the Insulins Valyou Savings Program (eligibility restrictions and offer terms)',
  url: 'https://www.lantus.com/sign-up-for-savings',
  publisher: 'Sanofi',
  checked: CHECKED,
  supports:
    'BOTH programs and their terms verbatim. Sanofi Insulins Co-pay Savings Program: "no more than $35 for a 30-day supply, valid up to 10 packs per fill"; "This offer is not valid for prescriptions covered by or submitted for reimbursement, in whole or in part, under Medicare, Medicaid, VA, DOD, TRICARE, similar federal or state programs"; phone (866) 255-8661. Insulins Valyou Savings Program: "This offer is only valid for those who are uninsured or those who are insured by a prescription plan but are not using such insurance and will be paying the full retail price for the medication"; "$35 per 30-day supply"; "you must fill all your Sanofi Insulin prescriptions at the same time, together each month"; and the TrOOP clause — "You may not seek to have your out-of-pocket costs or the full retail price of the Sanofi Insulin count toward your deductible, true-out-of-pocket (TrOOP), maximum out-of-pocket (MOOP), or any other out-of-pocket caps associated with any insurance coverage"; phone (833) 813-0190',
};
const trumpRx = {
  title: 'TrumpRx — Lantus listing',
  url: 'https://trumprx.gov/browse',
  publisher: 'U.S. federal government',
  checked: CHECKED,
  supports: 'Lantus (Sanofi) listed at a cash price of $35.00',
};
const totalAssistT2d = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Lantus (Insulin Glargine,Hum.Rec.Anlog)" and "Lantus Solostar" on the approved-medication list, alongside Basaglar, Semglee, Rezvoglar and an unbranded Insulin Glargine; $1,500 guaranteed / $2,000 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistT2dHe = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) health equity fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; the same approved-medication list including Lantus; $1,500 guaranteed / $2,000 maximum award; requires a home zip code in a designated social-vulnerability county',
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
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file dated May 26, 2026 — no Lantus, Toujeo or insulin glargine row for initial price applicability year 2026, 2027 or 2028. The only insulin on any list is NovoLog/Fiasp (insulin aspart) for IPAY 2026, a different product from a different manufacturer',
};

export const LANTUS: MedicationAssistanceRecord = {
  slug: 'lantus',
  brandName: 'Lantus',
  genericName: 'insulin glargine',
  manufacturer: 'Sanofi',
  // `diabetes`. TotalAssist lists Lantus on the Type 2 diabetes funds, which is
  // the correct match. No second key is warranted.
  conditions: ['diabetes'],
  // 'insulin'. The diabetes browse view matches on both the condition key and
  // this class key, so the record appears correctly in the directory.
  drugClass: ['insulin'],
  description:
    'Lantus is a long-acting insulin taken once a day to cover your background insulin needs between meals and overnight. It is the original insulin glargine, and it now sits in the most crowded field of any insulin on this site — several follow-on and biosimilar glargine products are on the market, which matters for what you pay.',
  usedFor: [
    'Improving blood sugar control in adults and children with type 1 diabetes',
    'Improving blood sugar control in adults with type 2 diabetes',
  ],
  whyCostly:
    'Insulin is taken every day for life, so what looks like a modest monthly figure compounds. Two things pull the cost down for Lantus specifically. First, insulin glargine has the deepest competition of any insulin in this batch — DailyMed lists 20 labelled glargine products across nine labelers, including Basaglar, Semglee, Rezvoglar and Langlara. Second, Sanofi sells Lantus for $35 per 30-day supply outside insurance, and the federal TrumpRx site lists the same $35. The catch with that second route is not the price; it is what paying cash does to your Part D out-of-pocket accounting, which is covered below.',
  medicareContext:
    'Lantus is covered under Medicare Part D or a Medicare Advantage drug plan. Under federal law, a covered insulin costs no more than $35 for a month\'s supply under a Medicare drug plan, with no deductible applied to it — that applies to insulins generally rather than to Lantus specifically, and our <a href="/blog/medicare-35-dollar-insulin-cap.html">insulin cost guide</a> covers how it works across products. Two things that ARE specific to Lantus: it is not a Medicare-negotiated drug (CMS\'s selected-drug file has no Lantus, Toujeo or glargine row for 2026, 2027 or 2028 — the only insulin on any of those lists is Novo Nordisk\'s insulin aspart), and the glargine market has enough follow-on products that your plan\'s preferred glargine may not be the brand you started on. Part D out-of-pocket costs are capped at $2,100 in 2026, and that cap is what makes Sanofi\'s cash-price route a genuine trade-off rather than a free win.',
  quickAnswer: {
    verdict:
      'Yes, but read the cash-price small print before you take it. Sanofi Patient Connection covers Lantus for people at or below 400% of the federal poverty level, though it states no Medicare rule at all. Sanofi also sells Lantus for $35 cash outside insurance — and its own terms say that spending will not count toward your Part D out-of-pocket cap. Both diabetes charitable funds were closed.',
    points: [
      'Sanofi Patient Connection: Lantus is on its medication list. Income at or below 400% FPL — $63,840 for one person in 2026. The program states NO Medicare rule on its published eligibility pages, so call and ask rather than assuming.',
      'Insulins Valyou Savings Program: $35 per 30-day supply for people "uninsured or... insured by a prescription plan but not using such insurance". You must fill all your Sanofi insulins together each month.',
      'The trade-off that matters: Sanofi\'s terms say you "may not seek to have your out-of-pocket costs... count toward your deductible, true-out-of-pocket (TrOOP), maximum out-of-pocket (MOOP), or any other out-of-pocket caps." Paying cash means no progress toward the $2,100 Part D cap.',
      'Sanofi Insulins Co-pay Savings Program: commercial insurance only — excluded "under Medicare, Medicaid, VA, DOD, TRICARE".',
      'Competition: 20 labelled insulin glargine products across nine labelers, including Basaglar, Semglee, Rezvoglar and Langlara. Ask which one your plan prefers.',
      'Charitable grants: TotalAssist\'s Type 2 diabetes fund and its health equity version both list Lantus and both were closed ($1,500 guaranteed / $2,000 maximum). HealthWell\'s Type 2 Diabetes fund was closed. Good Days has no diabetes fund.',
    ],
  },
  programs: [
    {
      id: 'sanofi-patient-connection',
      kind: 'manufacturer-pap',
      name: 'Sanofi Patient Connection',
      operator: 'Sanofi',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026. Lantus (insulin glargine) is named on the program\'s published medications-available list, along with Toujeo and an unbranded Insulin Glargine U-300.',
      medicare: 'unknown',
      medicareNote:
        'This is an honest gap rather than an exclusion. Sanofi Patient Connection publishes three eligibility criteria — US residency, an annual household income at or below 400% of the federal poverty level, and, for commercially insured patients, having "no insurance coverage or access to the prescribed product" — and none of them mentions Medicare. The program describes itself as being for uninsured or functionally uninsured patients, which is language that could include a Medicare beneficiary whose plan does not cover the product, but Sanofi does not say so. Call 1-888-847-4877 and ask directly whether Medicare Part D enrollees may apply and what "access to the prescribed product" means for someone whose plan covers a different glargine.',
      summary:
        'Sanofi\'s patient assistance program covers Lantus and publishes a clear income test. What it does not publish is how it treats Medicare — so this page records the criteria that exist and tells you to ask about the one that does not.',
      covers: 'Sanofi medications, including Lantus, for approved patients who meet the income and insurance criteria.',
      eligibility: [
        'Resident of the U.S. or U.S. Territories',
        'Annual household income at or below 400% of the current federal poverty level',
        '2026 income limits, 48 contiguous states and DC: $63,840 for one person, $86,560 for two, $109,280 for three, $132,000 for four, $154,720 for five, $177,440 for six, adding $5,680 per additional person',
        'Separate, higher income tables apply in Alaska and Hawaii',
        'For commercially insured patients: no insurance coverage or access to the prescribed product',
        'Medicare rule: NOT STATED on the program\'s published eligibility pages',
      ],
      requirements: [
        'Proof of annual household income',
        'Your insurance details',
        'A prescription for Lantus and your prescriber\'s information — Sanofi\'s applications are state-specific, so start from the program site',
      ],
      howToApply:
        'Download the application for your state from sanofipatientconnection.com, or call 1-888-847-4877 (Monday–Friday, 9am–8pm ET). Ask about the Medicare question on the call rather than guessing from the form.',
      applyUrl: 'https://www.sanofipatientconnection.com/patient-assistance-connection',
      applyLabel: 'Sanofi Patient Connection',
      phone: '1-888-847-4877',
      sources: [sanofiMeds, sanofiEligibility, sanofiFinancial],
    },
    {
      id: 'valyou',
      kind: 'manufacturer-direct',
      name: 'Insulins Valyou Savings Program (cash price)',
      operator: 'Sanofi',
      status: 'open',
      statusNote:
        'Active on August 26, 2026 at $35 per 30-day supply. The condition attached to that price is that you must fill all of your Sanofi insulin prescriptions at the same time, together each month.',
      medicare: 'conditional',
      medicareNote:
        'This is the most consequential paragraph on the page, so read it slowly. The offer is "only valid for those who are uninsured or those who are insured by a prescription plan but are not using such insurance and will be paying the full retail price for the medication." A Medicare beneficiary therefore CAN use it — by stepping outside Part D and paying cash. But Sanofi\'s terms continue: "You may not submit claims for reimbursement to any third-party payor, including any government healthcare plan (e.g., Medicare, Medicaid, DOD, VA, TRICARE)... You may not seek to have your out-of-pocket costs or the full retail price of the Sanofi Insulin count toward your deductible, true-out-of-pocket (TrOOP), maximum out-of-pocket (MOOP), or any other out-of-pocket caps associated with any insurance coverage." In plain terms: every dollar you spend this way makes no progress toward the $2,100 Part D out-of-pocket cap. If Lantus is the only expensive drug you take, that may not matter. If you take other costly medications and expect to reach the cap, buying insulin outside your plan can push the date you reach it later — or out of reach entirely — and cost you more across the year than it saves each month.',
      summary:
        'A genuine $35 cash price for Lantus, available to Medicare beneficiaries willing to buy outside their drug plan. Whether it is a good idea depends entirely on what else you take, because the spending does not count toward your Part D cap.',
      covers: 'Lantus, and other Sanofi insulins filled at the same time, at $35 per 30-day supply. Not insurance.',
      eligibility: [
        'Uninsured, OR insured by a prescription plan but not using that insurance and paying the full retail price',
        'All Sanofi insulin prescriptions must be filled at the same time, together each month, to get the $35 rate',
        'You may not submit the cost to any third-party payor, including Medicare',
        'You may not count the spending toward your deductible, TrOOP, MOOP or any other out-of-pocket cap',
      ],
      howToApply:
        'Enrol through the Sanofi savings pages or call (833) 813-0190, Monday–Friday 9am–7pm ET. Before enrolling, add up what you expect to spend on all your Part D drugs this year — if you are likely to reach the $2,100 cap, work out whether stepping outside the benefit still leaves you ahead.',
      applyUrl: 'https://www.lantus.com/sign-up-for-savings',
      applyLabel: 'Sanofi insulin savings programs',
      phone: '(833) 813-0190',
      sources: [sanofiSavings, trumpRx],
    },
    {
      id: 'sanofi-copay',
      kind: 'manufacturer-savings',
      name: 'Sanofi Insulins Co-pay Savings Program',
      operator: 'Sanofi',
      status: 'open',
      statusNote:
        'Active for commercially insured patients on August 26, 2026: no more than $35 for a 30-day supply, valid up to 10 packs per fill.',
      medicare: 'excluded',
      medicareNote:
        'Sanofi\'s terms are explicit: "This offer is not valid for prescriptions covered by or submitted for reimbursement, in whole or in part, under Medicare, Medicaid, VA, DOD, TRICARE, similar federal or state programs, including any state pharmaceutical programs." Note the distinction from the Valyou program above, which is not a copay card and which Medicare beneficiaries can use by paying cash. The two are easy to confuse because both quote $35.',
      summary:
        'A commercial copay card, and the one of Sanofi\'s two $35 offers that Medicare beneficiaries genuinely cannot use. Recorded here so the difference between the two is clear before you call.',
      covers: 'Part of the commercial copay for Sanofi insulins. Not applicable to Medicare cost-sharing.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance',
        'Not enrolled in Medicare, Medicaid or another government prescription program',
      ],
      howToApply:
        'Commercially insured patients enrol through the Sanofi savings pages or call (866) 255-8661. Medicare beneficiaries should look at the Valyou cash route, Sanofi Patient Connection, or their plan\'s $35 insulin cost-sharing instead.',
      applyUrl: 'https://www.lantus.com/sign-up-for-savings',
      applyLabel: 'Sanofi Insulins Co-pay Savings Program',
      phone: '(866) 255-8661',
      sources: [sanofiSavings, SRC.oigCoupons],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Type 2 diabetes funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Type 2 diabetes (T2DM) · Type 2 diabetes health equity',
      status: 'closed',
      statusNote:
        'Both funds were closed to new applicants on August 26, 2026, each with a $1,500 guaranteed and $2,000 maximum award. TotalAssist has no waitlist, so the notification sign-up is what gets you in.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open. One caution specific to insulin: if you buy Lantus with cash through the Valyou program, you are not using your insurance for it, which may affect what the fund can pay toward.',
      summary:
        'Lantus and Lantus Solostar are both named on the Type 2 diabetes approved-medication list, alongside Basaglar, Semglee, Rezvoglar and unbranded insulin glargine — so a switch between glargine products would not cost you fund eligibility. Note that these are type 2 funds: no foundation on this list runs a type 1 diabetes fund.',
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
      statusNote:
        'Closed on August 26, 2026. HealthWell runs no Type 1 Diabetes fund and no insulin-specific fund, so there is no alternative fund for someone taking Lantus for type 1 diabetes.',
      medicare: 'eligible',
      medicareNote: 'HealthWell accepts Medicare beneficiaries for the diseases it covers. Its Type 2 Diabetes fund was closed when we checked.',
      summary:
        'One applicable fund, closed. Worth flagging plainly: if you take Lantus for type 1 diabetes, none of the three foundations on this page runs a fund you could apply to, which makes the manufacturer routes and the $35 Medicare insulin cost-sharing the whole picture.',
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
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Lantus.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'The charitable picture for Lantus is thinner than the number of programs suggests. TotalAssist lists Lantus and Lantus Solostar on its Type 2 diabetes fund and the health-equity version, each paying $1,500 guaranteed up to $2,000, and both were closed on August 26, 2026. HealthWell\'s Type 2 Diabetes fund was closed too, and Good Days runs no diabetes fund at all. Two things are worth stating plainly. First, every one of these is a TYPE 2 fund — if you take Lantus for type 1 diabetes, none of the three foundations has a fund for you, which is a real gap rather than an oversight in our checking. Second, the award sizes here are modest against a year of insulin, and Medicare\'s own $35-a-month insulin cost-sharing already does more for most beneficiaries than a $2,000 grant would. So set an alert, but treat Sanofi Patient Connection, your plan\'s insulin cost-sharing and the glargine-competition question as the routes that matter.',
  extraHelpNote:
    'Extra Help is worth applying for on its own merits, but be realistic about what it adds for insulin specifically. Under a Medicare drug plan a covered insulin already costs no more than $35 a month with no deductible applied, so Extra Help\'s effect on your Lantus is smaller than its effect on most other drugs. Where it earns its keep is everything else you take, and it does not close when funding runs out. One interaction to note: Sanofi Patient Connection publishes no Medicare rule at all, so whether Extra Help affects that application is a question for the phone call rather than something this page can answer.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Lantus on Medicare in August 2026, the first thing to work out is whether you should be inside your drug plan or outside it:',
      bullets: [
        'Start with your plan. A covered insulin costs no more than $35 a month under a Medicare drug plan with no deductible, and that spending counts toward your out-of-pocket cap.',
        'Only consider the $35 Valyou cash route if you are confident you will not reach the $2,100 Part D cap this year — because cash spending does not count toward it.',
        'Limited income → call Sanofi Patient Connection on 1-888-847-4877 and ask whether Medicare beneficiaries may apply. Income limit is $63,840 for one person.',
        'Ask your plan which insulin glargine it prefers — Basaglar, Semglee, Rezvoglar and Langlara are all on the market and all on the same charitable fund list.',
        'Type 2 diabetes → set alerts on the TotalAssist and HealthWell diabetes funds (all closed when checked).',
        'Limited income and resources → Medicare Extra Help, which helps most with your other medications.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'The manufacturer routes were open; the charitable funds were closed.',
      bullets: [
        'Sanofi Patient Connection: open, with state-specific applications on its site.',
        'Insulins Valyou Savings Program: open at $35 per 30-day supply.',
        'TotalAssist: the Type 2 diabetes fund pages show "Open" or "Closed" and the current award amounts.',
        'HealthWell: the disease-funds list shows the Type 2 Diabetes fund and its status.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'The Sanofi rules are clear on income and silent on Medicare:',
      bullets: [
        'Sanofi Patient Connection: US residency and income at or below 400% FPL — $63,840 for one person in the 48 states and DC. No published Medicare rule.',
        'Insulins Valyou: uninsured, or insured but not using that insurance and paying full retail. All Sanofi insulins must be filled together each month.',
        'Sanofi Co-pay Savings: commercial insurance only, Medicare explicitly excluded.',
        'TotalAssist (when open): government insurance covering Lantus; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed type 2 diabetes diagnosis.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified type 2 diabetes diagnosis, and treatment in the United States.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'One calculation matters more here than any document:',
      bullets: [
        'A list of every prescription you take and what you expect each to cost this year. This is what tells you whether stepping outside Part D for $35 insulin is a saving or a false economy.',
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Household size and annual household income, plus proof.',
        'Your Lantus form — vial or SoloStar pen — and your daily dose.',
        'Your diabetes type and diagnosis date. The charitable funds are type 2 only.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Sanofi Patient Connection: download your state\'s application from the program site, or call 1-888-847-4877 to have one sent.',
        'Insulins Valyou: enrol through the Sanofi savings pages or call (833) 813-0190. There is no income test.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
        'Glargine switch: nothing to apply for — it is a prescribing and formulary question.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Sanofi Patient Connection: the program reviews income and insurance documentation; ask about the current timeframe when you call.',
        'Insulins Valyou: no determination — it is a price, not an application.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Insulin glargine gives you more options than most medications, because the field is crowded:',
      bullets: [
        'Ask your prescriber and plan about the other glargine products — Basaglar, Semglee, Rezvoglar, Langlara and an unbranded insulin glargine are all labelled, and TotalAssist lists them on the same fund as Lantus.',
        'Check what your plan actually charges for Lantus before assuming cash is cheaper. Under Medicare a covered insulin is capped at $35 a month, and that spending counts toward your out-of-pocket cap while cash spending does not.',
        'If you do use the Valyou cash route, remember all your Sanofi insulins must be filled together each month to get the $35 rate.',
        'Apply for Extra Help even if you assume you earn too much — it helps most with your non-insulin medications.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free, including the cash-versus-plan arithmetic.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    {
      item: 'A list of all your prescriptions and expected annual costs',
      note: 'this decides whether Sanofi\'s $35 cash price helps or hurts, because cash spending does not count toward your Part D out-of-pocket cap',
    },
    { item: 'Your Lantus form and daily dose', note: 'vial or SoloStar pen, and units per day' },
    { item: 'Your diabetes type', note: 'the TotalAssist and HealthWell funds cover type 2 only' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your prescriber and plan about the other insulin glargine products — Basaglar, Semglee, Rezvoglar and Langlara are all labelled, and the charitable funds list them alongside Lantus.',
    },
    {
      text: 'Before paying cash for insulin, check what your Medicare drug plan charges. A covered insulin is capped at $35 a month under a Medicare drug plan, and that spending counts toward your out-of-pocket cap while cash spending does not.',
      href: '/blog/medicare-35-dollar-insulin-cap.html',
      label: 'Insulin costs on Medicare',
    },
    ...standardAlternatives('Lantus'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Lantus?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans cover Lantus, and under federal law a covered insulin costs no more than $35 for a month\'s supply with no deductible applied to it. That rule applies to insulins generally rather than to Lantus specifically; our <a href="/blog/medicare-35-dollar-insulin-cap.html">insulin cost guide</a> explains how it works and which products are covered. Part D out-of-pocket costs are capped at $2,100 in 2026.',
    },
    {
      question: 'Sanofi offers Lantus for $35 cash. Should I take it if I have Medicare?',
      answer:
        'Only after doing one calculation. Sanofi\'s Insulins Valyou Savings Program is "only valid for those who are uninsured or those who are insured by a prescription plan but are not using such insurance and will be paying the full retail price" — so you can use it with Medicare by paying cash outside your plan. But Sanofi\'s terms also say you "may not seek to have your out-of-pocket costs... count toward your deductible, true-out-of-pocket (TrOOP), maximum out-of-pocket (MOOP), or any other out-of-pocket caps." Your Medicare drug plan already caps a covered insulin at $35 a month, and that spending counts toward your $2,100 annual cap. So if you take other expensive medications, buying insulin outside your plan can delay or prevent you reaching that cap and cost you more overall.',
    },
    {
      question: 'Is there a Lantus patient assistance program for people on Medicare?',
      answer:
        'Sanofi Patient Connection covers Lantus and has a clear income test — an annual household income at or below 400% of the federal poverty level, which is $63,840 for one person in the 48 states and DC in 2026. What it does not have is a published Medicare rule: none of the criteria on its eligibility pages mentions Medicare at all. The program describes itself as being for uninsured or functionally uninsured patients. Call 1-888-847-4877 and ask directly rather than assuming either way.',
    },
    {
      question: 'Why are there two different $35 Sanofi offers, and which one applies to me?',
      answer:
        'They are different programs with different rules that happen to quote the same figure. The Sanofi Insulins Co-pay Savings Program is a commercial copay card, and its terms exclude prescriptions covered "under Medicare, Medicaid, VA, DOD, TRICARE" — Medicare beneficiaries cannot use it. The Insulins Valyou Savings Program is a cash price for people not using insurance, and a Medicare beneficiary can use it by paying out of pocket. If you have Medicare, the copay card is closed to you and the cash route is open but carries the out-of-pocket-cap trade-off described above.',
    },
    {
      question: 'Is there a generic or biosimilar for Lantus?',
      answer:
        'Insulin glargine has more competition than any other insulin covered on this site. DailyMed lists 20 labelled glargine products across nine labelers, including Basaglar, Semglee, Rezvoglar, Langlara and an unbranded insulin glargine, alongside Sanofi\'s Lantus and Toujeo. TotalAssist lists them on the same Type 2 diabetes fund as the brand, so switching would not cost you fund eligibility. Which one is cheapest for you depends on your plan\'s formulary — ask your plan which glargine it prefers.',
    },
    {
      question: 'Is Lantus part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price file has no Lantus, Toujeo or insulin glargine row for initial price applicability year 2026, 2027 or 2028. The only insulin on any of those lists is Novo Nordisk\'s insulin aspart, sold as NovoLog and Fiasp, which was selected for 2026 — a different product from a different manufacturer, and its negotiated price does not apply to Lantus. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['toujeo', 'tresiba', 'novolog', 'lyumjev'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/medicare-35-dollar-insulin-cap.html', label: 'The $35 Insulin Cap with Medicare', blurb: 'The $35 cap and which insulin products are covered' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Lantus' },
  ],
  sources: [
    label,
    dailymedGlargine,
    sanofiMeds,
    sanofiEligibility,
    sanofiFinancial,
    sanofiSavings,
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
    SRC.medicarePaymentPlan,
    SRC.oigCoupons,
  ],
  // Per-record verification date. Re-verify the Valyou TrOOP clause first — it is
  // the fact that makes this page worth reading, and savings-program terms are
  // revised more often than eligibility pages.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Lantus Assistance',
    status: 'coming-soon',
    description:
      'Why Sanofi\'s $35 cash price can cost you more than it saves on Medicare, what Sanofi Patient Connection does and does not say about Medicare, and how to compare the glargine products.',
  },
  description_meta:
    'How to lower the cost of Lantus (insulin glargine) on Medicare: Sanofi Patient Connection income limits, why the $35 Valyou cash price does not count toward your Part D cap, the glargine biosimilars, and diabetes fund status — verified August 2026.',
};

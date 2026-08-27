// ---------------------------------------------------------------------------
// Lyumjev (insulin lispro-aabc) — Eli Lilly. Independently researched
// 2026-08-26. Batch 8 — a NEW slug. D10 is resolved: one ordinary record per
// insulin brand.
//
// Lyumjev is the fifth and last insulin in this batch, and it is the one whose
// manufacturer program is written most clearly for Medicare. Where Sanofi states
// no Medicare rule at all and Novo Nordisk excludes Extra Help enrollees, Lilly
// Cares says the opposite in plain words:
//
//   "Group 2 Medications: For patients who have no insurance OR HAVE MEDICARE
//    PART D and have a household annual adjusted gross income ≤ 400% FPL."
//
// Lyumjev is a Group 2 medication. Lilly publishes an actual dollar table
// ($63,840 for one person) rather than pointing elsewhere, and it names its FPL
// percentages explicitly (Group 1 = 300%, Group 2 = 400%, Groups 3–4 = 500%).
// That makes this the most checkable manufacturer program of the five insulins.
//
// The one exclusion that still applies: "You are not enrolled in Medicaid, full
// Low Income Subsidy (LIS, 'Extra Help') or Veterans (VA) Benefits." Note the
// word FULL — Lilly's exclusion is narrower than Novo Nordisk's, which bars
// anyone who is enrolled in or merely qualifies for Extra Help.
//
// Second Lyumjev-specific point: it is insulin lispro-AABC, not plain insulin
// lispro. The suffix denotes a distinct product; generic and biosimilar insulin
// lispro products exist, but they are not substitutes for Lyumjev without a
// prescribing decision.
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
  title: 'Lyumjev prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c5a056e2-b568-4ca6-9ed8-79c010942d00',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'LYUMJEV (insulin lispro-aabc) injection, solution, LYUMJEV KWIKPEN and LYUMJEV JUNIOR KWIKPEN; Eli Lilly and Company',
};
const dailymedLispro = {
  title: 'DailyMed label index — insulin lispro',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=insulin+lispro',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '16 labelled insulin lispro products across 6 distinct labelers — Lilly\'s LYUMJEV (insulin lispro-aabc), HUMALOG and the Humalog Mix products, an unbranded "INSULIN LISPRO" and INSULIN LISPRO KWIKPEN, and Sanofi\'s ADMELOG. Lyumjev is the only insulin lispro-AABC product; the others are plain insulin lispro and are not automatic substitutes',
};
const lillyCaresMeds = {
  title: 'Lilly Cares Foundation — available medications',
  url: 'https://lillycares.com/available-medications',
  publisher: 'Lilly Cares Foundation, Inc.',
  checked: CHECKED,
  supports: 'the complete available-medications list, which includes "Lyumjev® (insulin lispro-aabc) injection" alongside Basaglar, Humalog, Humulin and Trulicity',
};
const lillyCaresEligibility = {
  title: 'Lilly Cares Foundation — check your eligibility and medication groups',
  url: 'https://lillycares.com/how-to-apply',
  publisher: 'Lilly Cares Foundation, Inc.',
  checked: CHECKED,
  supports:
    'the eligibility criteria verbatim — "You are a permanent resident of the United States (inclusive of Puerto Rico and the U.S. Virgin Islands)"; "Your healthcare provider has prescribed a medication offered through Lilly Cares"; "You are not enrolled in Medicaid, full Low Income Subsidy (LIS, \'Extra Help\') or Veterans (VA) Benefits"; and the alternative funding program (AFP) exclusion. Group 2 Medications — which include Lyumjev — are "For patients who have no insurance or have Medicare Part D and have a household annual adjusted gross income ≤ 400% FPL". Group 2 income limits: 1 person $63,840; 2 $86,560; 3 $109,280; 4 $132,000; 5 $154,720; 6 $177,440. Lilly states these are 300% (Group 1), 400% (Group 2) and 500% (Groups 3 and 4) of the 2026 Federal Poverty Guidelines. Phone 1-800-545-6962; fax 1-844-431-6650',
};
const lillyCaresOverview = {
  title: 'What is Lilly Cares',
  url: 'https://lillycares.com/',
  publisher: 'Lilly Cares Foundation, Inc.',
  checked: CHECKED,
  supports:
    '"Lilly Cares Foundation, Inc. (Lilly Cares) is a nonprofit charitable organization that provides prescribed Lilly medications for free for up to 12 months to qualifying U.S. patients"; "The Lilly Cares Foundation does not charge patients a fee for help with enrollment, medication refills, or for participation in the Program"; mailing address PO Box 501847, San Diego, CA 92150',
};
const lillyInsulinValue = {
  title: 'Lilly Insulin Value Program',
  url: 'https://insulins.lilly.com/lilly-insulin-value-program',
  publisher: 'Eli Lilly and Company',
  checked: CHECKED,
  supports:
    'the covered insulins, which include Lyumjev alongside Basaglar, Humalog, Humulin, Insulin Lispro and Rezvoglar; the $35 per month figure; "Card expires and savings end on 12/31/2026"; and the eligibility restriction verbatim — "You are not enrolled in any state, federal, or government funded healthcare program, including, without limitation, Medicaid, Medicare, Medicare Part D, Medicare Advantage, Medigap, DoD, VA, TRICARE®/CHAMPUS". Lilly\'s own framing: "Government restrictions exclude people enrolled in federal government insurance programs from Lilly\'s $35 solutions"',
};
const totalAssistT2d = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Lyumjev (Insulin Lispro-Aabc)", "Lyumjev Kwikpen U-100", "Lyumjev Kwikpen U-200" and "Lyumjev Tempo Pen U-100" on the approved-medication list; $1,500 guaranteed / $2,000 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistT2dHe = {
  title: 'TotalAssist — Type 2 diabetes (T2DM) health equity fund',
  url: 'https://totalassist.org/funds/type-2-diabetes-t2dm-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; the same approved-medication list including the Lyumjev presentations; $1,500 guaranteed / $2,000 maximum award; requires a home zip code in a designated social-vulnerability county',
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
    'the full selected-drug file dated May 26, 2026 — no Lyumjev or insulin lispro row for initial price applicability year 2026, 2027 or 2028. The only insulin on any list is Novo Nordisk\'s insulin aspart (NovoLog/Fiasp) for IPAY 2026',
};

export const LYUMJEV: MedicationAssistanceRecord = {
  slug: 'lyumjev',
  brandName: 'Lyumjev',
  genericName: 'insulin lispro-aabc',
  manufacturer: 'Eli Lilly and Company',
  conditions: ['diabetes'],
  drugClass: ['insulin'],
  description:
    'Lyumjev is Eli Lilly\'s ultra-rapid mealtime insulin — insulin lispro reformulated to start working faster, which is what the "-aabc" suffix in its name signifies. That suffix matters practically: several plain insulin lispro products are on the market, including an unbranded one from Lilly itself, but they are different products rather than interchangeable versions of Lyumjev.',
  usedFor: [
    'Improving blood sugar control in adults and children with type 1 or type 2 diabetes, taken around mealtimes',
  ],
  whyCostly:
    'Mealtime insulin is used several times a day for life. What sets Lyumjev apart on cost is not the price but the clarity of the help: the Lilly Cares Foundation publishes an explicit dollar income table and states in so many words that Medicare Part D enrollees may apply — which neither Sanofi nor Novo Nordisk does for their insulins. Lilly\'s $35 card, by contrast, excludes Medicare entirely.',
  medicareContext:
    'Lyumjev is covered under Medicare Part D or a Medicare Advantage drug plan, and under federal law a covered insulin costs no more than $35 for a month\'s supply with no deductible applied; our <a href="/blog/medicare-35-dollar-insulin-cap.html">insulin cost guide</a> covers how that works across products. Lyumjev is not a Medicare-negotiated drug — CMS\'s selected-drug file has no Lyumjev or insulin lispro row for 2026, 2027 or 2028, and the only insulin ever selected is Novo Nordisk\'s insulin aspart. Part D out-of-pocket costs are capped at $2,100 in 2026. Worth noting for anyone comparing insulins: Lyumjev comes in U-100 and U-200 KwikPens and a Junior KwikPen, and these are separate formulary entries, so check the tier for the exact presentation you are prescribed.',
  quickAnswer: {
    verdict:
      'Yes, and this is the clearest of the five insulin programs on this site. Lilly Cares states plainly that Group 2 medications — which include Lyumjev — are "For patients who have no insurance or have Medicare Part D" with income at or below 400% of the federal poverty level, and it publishes the actual dollar figures. The one bar is full Extra Help. Both diabetes charitable funds were closed.',
    points: [
      'Lilly Cares Foundation: Lyumjev is on the available-medications list as a Group 2 medication — "For patients who have no insurance or have Medicare Part D and have a household annual adjusted gross income ≤ 400% FPL".',
      'Published dollar limits, not a pointer elsewhere: $63,840 for one person, $86,560 for two, $109,280 for three, $132,000 for four, $154,720 for five, $177,440 for six.',
      'Free medicine for up to 12 months, with annual reapplication. Lilly Cares charges no fee for enrollment, refills or participation.',
      'The exclusion: "You are not enrolled in Medicaid, full Low Income Subsidy (LIS, \'Extra Help\') or Veterans (VA) Benefits." Note "full" — Lilly\'s bar is narrower than Novo Nordisk\'s.',
      'Lilly Insulin Value Program ($35/month): covers Lyumjev but excludes Medicare entirely. Lilly says so directly — "Government restrictions exclude people enrolled in federal government insurance programs from Lilly\'s $35 solutions." The card also expires 12/31/2026.',
      'Charitable grants: TotalAssist lists all four Lyumjev presentations on its Type 2 diabetes funds — both closed ($1,500 guaranteed / $2,000 maximum). HealthWell\'s Type 2 Diabetes fund was closed. Good Days has no diabetes fund.',
    ],
  },
  programs: [
    {
      id: 'lilly-cares',
      kind: 'manufacturer-pap',
      name: 'Lilly Cares Foundation Patient Assistance Program',
      operator: 'Lilly Cares Foundation, Inc., a nonprofit charitable organization',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026. Lyumjev appears on the foundation\'s available-medications list and is classified as a Group 2 medication, which is what sets its income limit and its insurance rules.',
      medicare: 'eligible',
      medicareNote:
        'This is the most explicit Medicare statement of any insulin program on this site. Lilly Cares defines Group 2 Medications — the group Lyumjev belongs to — as being "For patients who have no insurance or have Medicare Part D and have a household annual adjusted gross income ≤ 400% FPL". Having Medicare Part D is a qualifying route, stated in those words, not an inference. The exclusion to watch is narrower than it first appears: "You are not enrolled in Medicaid, full Low Income Subsidy (LIS, \'Extra Help\') or Veterans (VA) Benefits." Lilly bars full Extra Help specifically, where Novo Nordisk bars anyone who is enrolled in OR qualifies for it — so a partial-subsidy situation may play out differently between the two companies. Lilly also excludes patients whose employer or plan requires them to apply to a manufacturer program as a condition of coverage, which it calls an alternative funding program.',
      summary:
        'A nonprofit foundation that has supplied Lilly medicines free for over twenty years, covering Lyumjev for up to 12 months at a time. Of the five insulin manufacturer programs on this site, it is the one whose rules you can read and apply to your own situation without a phone call.',
      covers: 'Lyumjev free of charge for up to 12 months to qualifying patients, with annual reapplication.',
      eligibility: [
        'Permanent resident of the United States, including Puerto Rico and the U.S. Virgin Islands',
        'Your healthcare provider has prescribed a medication offered through Lilly Cares',
        'No insurance OR Medicare Part D coverage (Lyumjev is a Group 2 medication)',
        'Household annual adjusted gross income at or below 400% of the federal poverty level',
        'Group 2 income limits: $63,840 for one person, $86,560 for two, $109,280 for three, $132,000 for four, $154,720 for five, $177,440 for six',
        'Not enrolled in Medicaid, full Low Income Subsidy (Extra Help) or VA benefits',
        'Not subject to an insurance plan or third party that requires you to apply to Lilly Cares as a condition of coverage',
      ],
      requirements: [
        'Household size and total annual adjusted gross income before taxes, with proof',
        'Your insurance details, including Medicare Part D coverage if you have it',
        'Your prescriber\'s details — the application has a provider section',
      ],
      howToApply:
        'Apply online, or download and print the application (English or Spanish) from lillycares.com, or call 1-800-545-6962 to have one mailed. Completed forms can be faxed to 1-844-431-6650 or posted to PO Box 501847, San Diego, CA 92150. Lilly Cares charges no fee for enrollment, refills or participation — and warns that third parties charging for that help are not affiliated with it.',
      applyUrl: 'https://lillycares.com/how-to-apply',
      applyLabel: 'Lilly Cares eligibility and application',
      phone: '1-800-545-6962',
      sources: [lillyCaresMeds, lillyCaresEligibility, lillyCaresOverview],
    },
    {
      id: 'lilly-insulin-value',
      kind: 'manufacturer-savings',
      name: 'Lilly Insulin Value Program',
      operator: 'Eli Lilly and Company',
      status: 'limited',
      statusNote:
        'Active on August 26, 2026 at $35 per month for covered insulins including Lyumjev, but with a stated end date: "Card expires and savings end on 12/31/2026."',
      medicare: 'excluded',
      medicareNote:
        'Lilly\'s terms exclude government coverage comprehensively: "You are not enrolled in any state, federal, or government funded healthcare program, including, without limitation, Medicaid, Medicare, Medicare Part D, Medicare Advantage, Medigap, DoD, VA, TRICARE®/CHAMPUS." Lilly states the position itself rather than burying it — "Government restrictions exclude people enrolled in federal government insurance programs from Lilly\'s $35 solutions" — and points Medicare beneficiaries to the fact that federal law already caps a covered insulin at $35 a month under a Medicare drug plan. That is accurate: for a Medicare reader the plan route reaches the same figure, and unlike this card it counts toward your out-of-pocket cap.',
      summary:
        'A $35-a-month program for people with commercial insurance or none, covering Lyumjev among other Lilly insulins. Closed to anyone on Medicare — and for a Medicare reader that costs nothing, because your plan\'s insulin cost-sharing reaches the same $35 anyway.',
      covers: 'Lyumjev and other covered Lilly insulins at $35 per month for eligible patients. Not applicable to Medicare cost-sharing.',
      eligibility: [
        'Not enrolled in any state, federal or government-funded healthcare program, including Medicare, Medicare Part D, Medicare Advantage, Medigap, Medicaid, DoD, VA or TRICARE',
        'Card expires and savings end on 12/31/2026',
      ],
      howToApply:
        'Commercially insured and uninsured patients enrol through the Lilly insulin affordability pages. Medicare beneficiaries should use their plan\'s insulin cost-sharing and apply to Lilly Cares instead.',
      applyUrl: 'https://insulins.lilly.com/lilly-insulin-value-program',
      applyLabel: 'Lilly Insulin Value Program',
      sources: [lillyInsulinValue, SRC.oigCoupons],
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
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. They do not exclude Extra Help enrollees, so if full Extra Help has closed the Lilly Cares door to you, these funds remain open in principle.',
      summary:
        'All four Lyumjev presentations are named on the Type 2 diabetes approved-medication list — the base product, the KwikPen U-100 and U-200, and the Tempo Pen U-100 — so a change of pen would not cost you fund eligibility. Both funds were closed, and both are type 2 funds only.',
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
        'One applicable fund, closed. Lyumjev is a mealtime insulin used widely in type 1 diabetes, and none of the three foundations on this page runs a type 1 fund.',
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
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Lyumjev.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'TotalAssist lists every Lyumjev presentation on its Type 2 diabetes fund and the health-equity version, each paying $1,500 guaranteed up to $2,000, and both were closed on August 26, 2026. HealthWell\'s Type 2 Diabetes fund was closed too, and Good Days runs no diabetes fund. As with every insulin on this site these are type 2 funds only, which leaves people taking Lyumjev for type 1 diabetes without a charitable route on these three foundations. That matters less here than it might elsewhere, because Lyumjev has the most reachable manufacturer program of the five insulins: Lilly Cares names Medicare Part D as a qualifying route and publishes its dollar limits, so you can settle your eligibility from the page rather than by waiting for a fund to reopen.',
  extraHelpNote:
    'Lyumjev is the insulin where the Extra Help question is worth reading carefully rather than assuming. Lilly Cares excludes people enrolled in "full Low Income Subsidy (LIS, \'Extra Help\')" — the word full is doing real work, and it makes Lilly\'s bar narrower than Novo Nordisk\'s, which excludes anyone who is enrolled in or merely qualifies for Extra Help. If you receive a partial subsidy rather than the full one, ask Lilly Cares directly on 1-800-545-6962 whether you remain eligible; the published wording suggests you might, and it is a question worth asking rather than answering yourself. If you do have full Extra Help, use it: it reduces cost-sharing on every covered drug you take, and a covered insulin is capped at $35 a month regardless.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Lyumjev on Medicare in August 2026, you can settle most of this from published rules rather than by phone:',
      bullets: [
        'Income at or below $63,840 for one person and not on full Extra Help → apply to Lilly Cares. Medicare Part D is explicitly a qualifying route.',
        'On full Extra Help → use it; Lilly Cares is closed to you, but a covered insulin is capped at $35 a month under your plan anyway.',
        'On partial Extra Help → call Lilly Cares on 1-800-545-6962 and ask, because their exclusion names full LIS specifically.',
        'Check your plan\'s cost-sharing for your exact presentation — the KwikPen U-100, KwikPen U-200 and Junior KwikPen are separate formulary entries.',
        'Type 2 diabetes → set alerts on the TotalAssist and HealthWell diabetes funds (all closed when checked).',
        'Do not spend time on the Lilly Insulin Value Program if you have Medicare — it excludes you by name.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'The manufacturer program was open; the charitable funds were closed; the $35 card has an expiry date.',
      bullets: [
        'Lilly Cares: open, with the available-medications list and the medication groups published on its site.',
        'Lilly Insulin Value Program: active but expiring — "Card expires and savings end on 12/31/2026". Not relevant to Medicare readers in any case.',
        'TotalAssist: the Type 2 diabetes fund pages show "Open" or "Closed" and current award amounts.',
        'HealthWell: the disease-funds list shows the Type 2 Diabetes fund and its status.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Lilly publishes both the percentage and the dollars, so you can check this yourself:',
      bullets: [
        'Lilly Cares Group 2 (Lyumjev): no insurance or Medicare Part D, and household annual adjusted gross income at or below 400% of the federal poverty level.',
        'Group 2 dollar limits: $63,840 for one person, $86,560 for two, $109,280 for three, $132,000 for four, $154,720 for five, $177,440 for six. Contact Lilly Cares for Alaska and Hawaii figures.',
        'You must not be enrolled in Medicaid, full Extra Help or VA benefits, and must not be directed to apply by an employer or plan as a condition of coverage.',
        'TotalAssist (when open): government insurance covering Lyumjev; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed type 2 diabetes diagnosis.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified type 2 diabetes diagnosis, and treatment in the United States.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Lilly asks for adjusted gross income specifically, which is a particular figure:',
      bullets: [
        'Household annual adjusted gross income before taxes, for everyone in the household — your tax return is the usual proof.',
        'Household size, counting the applicant and all family members.',
        'Medicare card and your Part D or Medicare Advantage drug-plan card.',
        'Whether you receive full or partial Extra Help, if any.',
        'Your Lyumjev presentation and daily dose — vial, KwikPen U-100, KwikPen U-200, Junior KwikPen or Tempo Pen.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Lilly Cares: apply online, or download and print the form (English or Spanish), or call 1-800-545-6962 to have one mailed. There is a provider section for your prescriber.',
        'Submit by fax to 1-844-431-6650 or by post to PO Box 501847, San Diego, CA 92150.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Lilly Cares: approved patients receive Lyumjev free for up to 12 months, then reapply annually.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'The substitution question here needs care, because of the suffix:',
      bullets: [
        'Ask your prescriber about plain insulin lispro. Several products exist — Humalog, an unbranded insulin lispro from Lilly, and Sanofi\'s Admelog — but Lyumjev is insulin lispro-AABC, a different formulation, so this is a prescribing decision rather than a substitution.',
        'Confirm your plan\'s insulin cost-sharing: a covered insulin is capped at $35 a month under a Medicare drug plan, with no deductible.',
        'If your income is just over the Group 2 limit, check whether it is your adjusted gross income rather than gross income that Lilly measures — the difference sometimes decides it.',
        'Apply for Extra Help even if you assume you earn too much; the limits are higher than most people expect.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Your household annual ADJUSTED GROSS income', note: 'Lilly Cares measures adjusted gross income, not gross income — your tax return is the usual proof' },
    { item: 'Whether you receive full or partial Medicare Extra Help', note: 'Lilly Cares excludes full Extra Help specifically, so the distinction can matter' },
    { item: 'Your Lyumjev presentation and daily dose', note: 'vial, KwikPen U-100, KwikPen U-200, Junior KwikPen or Tempo Pen — separate formulary entries' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your prescriber about plain insulin lispro products — Humalog, Lilly\'s unbranded insulin lispro and Sanofi\'s Admelog. Lyumjev is insulin lispro-aabc, a different formulation, so this is a prescribing decision rather than a straight substitution.',
    },
    {
      text: 'Confirm your plan\'s insulin cost-sharing. A covered insulin is capped at $35 a month under a Medicare drug plan, and that spending counts toward your out-of-pocket cap.',
      href: '/blog/medicare-35-dollar-insulin-cap.html',
      label: 'Insulin costs on Medicare',
    },
    ...standardAlternatives('Lyumjev'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Lyumjev?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans cover Lyumjev, and under federal law a covered insulin costs no more than $35 for a month\'s supply with no deductible applied. Check your plan\'s tier for the exact presentation you are prescribed, since the KwikPen U-100, KwikPen U-200 and Junior KwikPen are separate formulary entries. Our <a href="/blog/medicare-35-dollar-insulin-cap.html">insulin cost guide</a> explains how the cap works.',
    },
    {
      question: 'Is there a Lyumjev patient assistance program for people on Medicare?',
      answer:
        'Yes, and Lilly says so in plain words rather than leaving it to inference. Lyumjev is a Group 2 medication under the Lilly Cares Foundation, and Lilly defines Group 2 as "For patients who have no insurance or have Medicare Part D and have a household annual adjusted gross income ≤ 400% FPL". The dollar limits are published: $63,840 for one person, $86,560 for two, up to $177,440 for six. Approved patients receive Lyumjev free for up to 12 months and reapply annually. The program charges no fee.',
    },
    {
      question: 'I get Extra Help. Does that rule me out of Lilly Cares?',
      answer:
        'It depends on whether yours is full Extra Help, and the wording matters. Lilly Cares excludes patients "enrolled in Medicaid, full Low Income Subsidy (LIS, \'Extra Help\') or Veterans (VA) Benefits". That is narrower than Novo Nordisk\'s rule, which excludes anyone enrolled in or merely qualifying for Extra Help. If you receive a partial subsidy, call Lilly Cares on 1-800-545-6962 and ask rather than assuming — this is exactly the kind of distinction that decides an application.',
    },
    {
      question: 'Can I use Lilly\'s $35 insulin card with Medicare?',
      answer:
        'No. Lilly\'s terms require that "You are not enrolled in any state, federal, or government funded healthcare program, including, without limitation, Medicaid, Medicare, Medicare Part D, Medicare Advantage, Medigap, DoD, VA, TRICARE®/CHAMPUS." Lilly states the reason plainly itself: "Government restrictions exclude people enrolled in federal government insurance programs from Lilly\'s $35 solutions." The practical loss is small, because federal law already caps a covered insulin at $35 a month under a Medicare drug plan — and unlike the card, that spending counts toward your annual out-of-pocket cap. The card also expires on 12/31/2026.',
    },
    {
      question: 'Is there a generic for Lyumjev?',
      answer:
        'Not for Lyumjev itself. Lyumjev is insulin lispro-aabc — a distinct formulation designed to act faster — and DailyMed lists it as the only product with that suffix. There are several plain insulin lispro products: Lilly\'s Humalog and its unbranded insulin lispro, and Sanofi\'s Admelog, across 16 labelled products and six labelers in total. Those are different medicines rather than interchangeable versions of Lyumjev, so switching is a prescribing decision for your doctor, not a substitution at the pharmacy counter.',
    },
    {
      question: 'Is Lyumjev part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price file has no Lyumjev or insulin lispro row for initial price applicability year 2026, 2027 or 2028. The only insulin CMS has ever selected is Novo Nordisk\'s insulin aspart, sold as NovoLog and Fiasp, for 2026 — a different product from a different manufacturer, and its negotiated price does not apply here. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['novolog', 'tresiba', 'lantus', 'toujeo'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/medicare-35-dollar-insulin-cap.html', label: 'The $35 Insulin Cap with Medicare', blurb: 'The $35 cap and which insulin products are covered' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Lyumjev' },
  ],
  sources: [
    label,
    dailymedLispro,
    lillyCaresMeds,
    lillyCaresEligibility,
    lillyCaresOverview,
    lillyInsulinValue,
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
  // Per-record verification date. Re-verify the Lilly Cares medication groups
  // first — Lyumjev's Group 2 classification is what sets both its income limit
  // and its explicit Medicare Part D route, and a regrouping would change both.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Lyumjev Assistance',
    status: 'coming-soon',
    description:
      'Why Lilly Cares names Medicare Part D as a qualifying route, the difference between full and partial Extra Help for this application, and why insulin lispro-aabc is not the same as insulin lispro.',
  },
  description_meta:
    'How to lower the cost of Lyumjev (insulin lispro-aabc) on Medicare: the Lilly Cares Group 2 route that explicitly accepts Medicare Part D, published income limits, the full-Extra-Help exclusion, and diabetes fund status — verified August 2026.',
};

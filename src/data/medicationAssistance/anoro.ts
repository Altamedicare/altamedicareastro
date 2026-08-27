// ---------------------------------------------------------------------------
// Anoro Ellipta (umeclidinium / vilanterol) — GSK. Independently researched
// 2026-08-26. Batch 8 — a NEW slug.
//
// Three things make this page worth a reader's time rather than a variation on
// the other GSK inhalers:
//
//  1. Anoro Ellipta is on the CMS list of drugs SELECTED FOR NEGOTIATION for
//     initial price applicability year 2028. No maximum fair price is published
//     yet — negotiation happens first — so this page states the selection and
//     explicitly does NOT quote a price, which is the honest position and also
//     the useful one, because "selected" is what a reader can act on today.
//  2. GSK sells it direct for cash at a published price: $222.94 through GSK
//     Direct to You, plus a processing and shipping fee of up to $25. The same
//     product appears on the government's TrumpRx site at $247.94 — exactly the
//     GSK price plus that $25 fee. Two official cash prices for one inhaler is a
//     comparison a reader can actually use.
//  3. An authorized generic exists — DailyMed labels "UMECLIDINIUM AND
//     VILANTEROL ELLIPTA" alongside the brand — and TotalAssist lists the
//     generic on the same fund as the brand.
//
// TAXONOMY: this record introduces `lama-laba`. Anoro is two long-acting
// bronchodilators and no steroid, which none of the existing inhaler keys can
// express, and its label states it is "NOT indicated for... the treatment of
// asthma". That is not a cosmetic distinction here: it is exactly why Anoro
// appears on the COPD charitable funds and NOT on the asthma funds, while Breo
// Ellipta — same manufacturer, same inhaler family — appears on both.
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
  title: 'Anoro Ellipta prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dbd0671-c565-40c5-bf0f-e324db26799c',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '"ANORO ELLIPTA is a combination of umeclidinium, an anticholinergic, and vilanterol, a long-acting beta2-agonist (LABA)"; indicated for the maintenance treatment of COPD; "NOT indicated for the relief of acute bronchospasm or for the treatment of asthma"; inhalation powder 62.5 mcg / 25 mcg per actuation; GlaxoSmithKline LLC (rev. 6/2/2023)',
};
const dailymedUmec = {
  title: 'DailyMed label index — umeclidinium',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=umeclidinium',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    'five labelled umeclidinium products across two labelers — ANORO ELLIPTA, INCRUSE ELLIPTA and TRELEGY ELLIPTA from GSK, plus the authorized generics "UMECLIDINIUM AND VILANTEROL ELLIPTA" and "UMECLIDINIUM ELLIPTA"',
};
const gskPafProducts = {
  title: 'GSK Patient Assistance Program — prescription medicine (list of eligible products)',
  url: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/',
  publisher: 'GSK Patient Access Programs Foundation',
  checked: CHECKED,
  supports:
    'the "List of eligible products" accordion naming ANORO ELLIPTA among 20 GSK medicines; and the screener product array assigning ANORO ELLIPTA the category "general"',
};
const gskPafMedicare = {
  title: 'GSK Patient Assistance Program — Medicare eligibility and enrollment',
  url: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/medicare/',
  publisher: 'GSK Patient Access Programs Foundation',
  checked: CHECKED,
  supports:
    'the Medicare route for "general" category medicines: a Medicare prescription drug plan; residence in the US or Puerto Rico; "Have paid a total of $600 for prescriptions in the current calendar year"; maximum annual gross income $47,880 for one person and $64,920 for two in the 48 states and DC',
};
const gskDirect = {
  title: 'GSK Direct to You — cash-pay product list and prices',
  url: 'https://gskforyou.com/programs/direct-to-you/',
  publisher: 'GSK (dispensed by Alto Pharmacy)',
  checked: CHECKED,
  supports:
    'Anoro Ellipta offered at $222.94; "A processing and shipping fee of up to $25 will apply to each order"; "This Offer is not available to patients who wish to use insurance"; contact (800) 874-5881',
};
const trumpRx = {
  title: 'TrumpRx — Anoro Ellipta listing',
  url: 'https://trumprx.gov/browse',
  publisher: 'U.S. federal government',
  checked: CHECKED,
  supports: 'Anoro Ellipta (GSK) listed at a cash price of $247.94 — the GSK Direct to You price plus the program\'s up-to-$25 processing and shipping fee',
};
const gskCopay = {
  title: 'GSK copay assistance — participating products',
  url: 'https://gskforyou.com/programs/copay-assistance/',
  publisher: 'GSK',
  checked: CHECKED,
  supports:
    'the complete copay-program list — Benlysta, Blenrep, Exdensur, Jemperli, Nucala, Ojjaara and Zejula. Anoro Ellipta is not on it',
};
const gskCoupons = {
  title: 'GSK coupons and free trial offers',
  url: 'https://gskforyou.com/programs/gsk-coupons-free-trials/',
  publisher: 'GSK',
  checked: CHECKED,
  supports:
    'Anoro Ellipta listed among the medicines with a dollars-off coupon; "May not be used by government beneficiaries, including but not limited to those enrolled in Medicare or Medicaid"; no coupon dollar value is published',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Anoro Ellipta (Umeclidinium Brm/Vilanterol Tr)" and the generic "Umeclidinium-Vilanterol" both on the approved-medication list; $1,200 guaranteed / $3,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistCopdHe = {
  title: 'TotalAssist — COPD health equity fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; the same approved-medication list including Anoro Ellipta; $1,200 guaranteed / $3,500 maximum award; requires a home zip code in a designated social-vulnerability county',
};
const totalAssistAsthma = {
  title: 'TotalAssist — Asthma fund',
  url: 'https://totalassist.org/funds/asthma/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; the approved-medication list does NOT include Anoro Ellipta — consistent with the label, which states Anoro is not indicated for asthma',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'the complete fund list — "Chronic Obstructive Pulmonary Disease - Medicare Access" CLOSED; the only open respiratory fund is Bronchiectasis, a different diagnosis',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no COPD program of any kind',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the selected-drug file dated May 26, 2026: ANORO ELLIPTA (umeclidinium; vilanterol), NDC-9s 00173-0869 and 66993-0134, IPAY 2028, MFP effective date 01/01/2028, "Added for IPAY 2028 announcement" — the "Single MFP per 30 DES" column is EMPTY, so no negotiated price has been published',
};
const cms2028FactSheet = {
  title: 'Selected Drug List for Initial Price Applicability Year 2028 (fact sheet)',
  url: 'https://www.cms.gov/files/document/factsheet-medicare-negotiation-selected-drug-list-ipay-2028.pdf',
  publisher: 'CMS',
  checked: CHECKED,
  supports: 'the 15 drugs selected for the third cycle of negotiation, with negotiated prices to become effective beginning in 2028',
};

export const ANORO: MedicationAssistanceRecord = {
  slug: 'anoro',
  brandName: 'Anoro Ellipta',
  genericName: 'umeclidinium / vilanterol',
  manufacturer: 'GSK (GlaxoSmithKline)',
  // `respiratory` only, and correctly so: the label indicates Anoro for COPD
  // maintenance and states it is not indicated for asthma. The condition key
  // matches it to the COPD funds, which is where TotalAssist actually lists it.
  conditions: ['respiratory'],
  // The registry's first `lama-laba`. Label: "a combination of umeclidinium, an
  // anticholinergic, and vilanterol, a long-acting beta2-agonist (LABA)". Two
  // bronchodilators, no steroid — so not 'lama' (single agent), not 'ics-laba'
  // (has a steroid) and not 'triple-inhaler' (three ingredients).
  drugClass: ['lama-laba'],
  description:
    'Anoro Ellipta is a once-daily maintenance inhaler for COPD that combines two different long-acting bronchodilators and no steroid. That combination is what separates it from Breo Ellipta and Trelegy Ellipta, which contain an inhaled steroid — and it is why Anoro is licensed for COPD only and appears on the COPD charitable funds rather than the asthma ones.',
  usedFor: [
    'Maintenance treatment of chronic obstructive pulmonary disease (COPD), including chronic bronchitis and emphysema, to improve airflow',
  ],
  whyCostly:
    'Anoro Ellipta is a once-daily brand inhaler that Part D plans generally place on a brand tier, and COPD maintenance treatment continues indefinitely, so the cost-sharing repeats every month for years. What is unusual here is that there are two published cash prices to compare against your plan: GSK sells Anoro direct for $222.94 plus a fee of up to $25, and the federal TrumpRx site lists it at $247.94, which is the same price with that fee folded in. An authorized generic also exists.',
  medicareContext:
    'Anoro Ellipta is an inhaler you use yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan. It is one of the 15 drugs CMS selected for the THIRD cycle of Medicare drug price negotiation, with any negotiated price taking effect from January 1, 2028. Selection is not the same as a price: CMS\'s published file carries no maximum fair price for Anoro Ellipta yet, because the negotiation itself happens first, so no dollar figure is quoted on this page. Part D out-of-pocket costs are capped at $2,100 in 2026, Extra Help lowers cost-sharing for people with limited income and resources, and the Medicare Prescription Payment Plan can spread what you owe across the year.',
  quickAnswer: {
    verdict:
      'Yes — GSK\'s patient assistance program covers Anoro Ellipta and has a Medicare route, but it requires that you have already paid $600 for prescriptions this calendar year. The COPD charitable funds that list Anoro were all closed. Two official cash prices exist for comparison, and an authorized generic is on the market.',
    points: [
      'GSK Patient Assistance Program: Anoro Ellipta is on the published list of eligible products. Medicare route requires a Medicare drug plan, income at or below $47,880 for one person, and $600 already spent on prescriptions this calendar year.',
      'GSK Direct to You: $222.94 cash, plus a processing and shipping fee of up to $25 — but only if you are not using insurance. The federal TrumpRx site lists the same inhaler at $247.94.',
      'Authorized generic: DailyMed labels "Umeclidinium and Vilanterol Ellipta", and TotalAssist lists the generic on the same fund as the brand.',
      'Medicare negotiation: Anoro Ellipta is a SELECTED drug for initial price applicability year 2028. No negotiated price has been published yet.',
      'Charitable grants: TotalAssist\'s COPD fund and COPD health equity fund both list Anoro and both were closed ($1,200 guaranteed / $3,500 maximum). HealthWell\'s COPD – Medicare Access fund was closed. Good Days has no COPD fund. Anoro is deliberately absent from the asthma funds, because its label is COPD-only.',
    ],
  },
  programs: [
    {
      id: 'gsk-paf',
      kind: 'manufacturer-pap',
      name: 'GSK Patient Assistance Program',
      operator: 'GSK Patient Access Programs Foundation (an independent 501(c)(3) charitable foundation)',
      status: 'open',
      statusNote:
        'Accepting applications on August 26, 2026. Anoro Ellipta appears on the program\'s published "List of eligible products".',
      medicare: 'conditional',
      medicareNote:
        'Medicare beneficiaries may apply through GSK\'s Medicare route for "general" category medicines, which is where Anoro Ellipta sits. The condition to plan around is the spending threshold: you must "have paid a total of $600 for prescriptions in the current calendar year". A Medicare prescription drug plan is required, and income must be at or below the program\'s table. GSK applies a different rule to its specialty medicines — Nucala has no $600 threshold but excludes Extra Help enrollees — so do not assume the Anoro rule from a Nucala conversation or the reverse.',
      summary:
        'The GSK Patient Access Programs Foundation supplies certain GSK medicines at no cost to people who meet its income and insurance rules. Anoro Ellipta is one of them. This is free medicine, not a discount.',
      covers: 'Anoro Ellipta at no cost to approved patients, supplied through the program.',
      eligibility: [
        'Live in the United States or Puerto Rico',
        'Have a Medicare prescription drug plan and meet the program\'s other requirements',
        'Have paid a total of $600 for prescriptions in the current calendar year',
        'Maximum annual gross income (48 states and DC): $47,880 for one person, $64,920 for two, $81,960 for three, $99,000 for four, adding $17,040 for each additional person',
        'Higher limits apply in Alaska ($59,850 for one person) and Hawaii ($55,080); Puerto Rico limits are lower ($28,800)',
        'Not eligible for Puerto Rico\'s Government Health Plan Mi Salud, or have applied and been denied',
      ],
      requirements: [
        'Proof of household income',
        'Your Medicare prescription drug plan details',
        'Records of prescription spending this calendar year, for the $600 threshold',
        'Your prescriber\'s details — GSK enrollment forms are signed by both patient and provider',
      ],
      howToApply:
        'Start at the GSK Patient Assistance Program page and follow the Medicare route for prescription medicines. Both you and your prescriber sign the enrollment form. Call 1-866-728-4368 with questions or to have a form mailed.',
      applyUrl: 'https://gskpaf.org/gsk/prescription-medicine-patient-assistance/medicare/',
      applyLabel: 'GSK Patient Assistance — Medicare eligibility',
      phone: '1-866-728-4368',
      sources: [gskPafProducts, gskPafMedicare],
    },
    {
      id: 'gsk-direct',
      kind: 'manufacturer-direct',
      name: 'GSK Direct to You (cash price)',
      operator: 'GSK, dispensed by Alto Pharmacy',
      status: 'open',
      statusNote:
        'Available on August 26, 2026 with Anoro Ellipta priced at $222.94, plus "a processing and shipping fee of up to $25" per order.',
      medicare: 'conditional',
      medicareNote:
        'GSK\'s terms say plainly: "This Offer is not available to patients who wish to use insurance." A Medicare beneficiary is not barred from buying this way, but doing so means paying cash outside your Part D benefit — which also means the spending does not count toward your plan\'s deductible or the annual out-of-pocket cap. That trade-off only makes sense if the cash price beats what your plan charges you, so compare before you switch. GSK itself adds: "If you have insurance, check with your pharmacy, your price may be lower."',
      summary:
        'A published cash price for Anoro Ellipta delivered to your home. Useful mainly as a benchmark: it tells you what the inhaler costs without insurance, which is the number to hold your Part D cost-sharing up against.',
      covers: 'The medication itself at the published price, shipped to you. Not insurance and not a copay reduction.',
      eligibility: [
        'Not using prescription insurance for this fill',
        'A valid prescription sent by your healthcare provider',
      ],
      howToApply:
        'Your provider sends the prescription to the program pharmacy; Alto Pharmacy then confirms receipt and guides you through the next steps. Call Alto on (800) 874-5881.',
      applyUrl: 'https://gskforyou.com/programs/direct-to-you/',
      applyLabel: 'GSK Direct to You prices',
      phone: '(800) 874-5881',
      sources: [gskDirect, trumpRx],
    },
    {
      id: 'gsk-coupon',
      kind: 'manufacturer-savings',
      name: 'Anoro Ellipta dollars-off coupon',
      operator: 'GSK',
      status: 'limited',
      statusNote:
        'Listed on GSK\'s coupons page on August 26, 2026. GSK publishes no dollar value — the amount appears only through the site\'s coupon finder — so no figure is reproduced here. GSK states it is "not currently offering any free trial offers".',
      medicare: 'excluded',
      medicareNote:
        'GSK\'s terms: the coupon "may not be used by government beneficiaries, including but not limited to those enrolled in Medicare or Medicaid." Anoro also has no GSK copay program — that list runs to seven specialty and oncology medicines and does not include any of the Ellipta inhalers.',
      summary:
        'A commercial discount for people with private or employer prescription insurance. Not a route for anyone with Medicare.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance',
        'Not enrolled in Medicare, Medicaid or another government prescription program',
      ],
      howToApply:
        'Commercially insured patients can use the coupon finder on GSK\'s coupons page. Medicare beneficiaries should apply to the GSK Patient Assistance Program or compare the cash price instead.',
      applyUrl: 'https://gskforyou.com/programs/gsk-coupons-free-trials/',
      applyLabel: 'GSK coupons and offers',
      sources: [gskCoupons, gskCopay, SRC.oigCoupons],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — COPD funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Chronic obstructive pulmonary disease (COPD) · COPD health equity',
      status: 'closed',
      statusNote:
        'Both COPD funds were closed to new applicants on August 26, 2026, each with a $1,200 guaranteed and $3,500 maximum award. TotalAssist has no waitlist, so the notification sign-up is what gets you in.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open.',
      summary:
        'Both "Anoro Ellipta (Umeclidinium Brm/Vilanterol Tr)" and the generic "Umeclidinium-Vilanterol" are named on the COPD approved-medication list, so a switch to the authorized generic would not cost you fund eligibility. Anoro is deliberately absent from TotalAssist\'s Asthma fund, which matches its COPD-only label.',
      covers:
        'When open: $1,200 guaranteed award and up to $3,500 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed COPD diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
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
      sources: [totalAssistCopd, totalAssistCopdHe, totalAssistAsthma, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — COPD – Medicare Access fund',
      operator: 'HealthWell Foundation',
      fund: 'Chronic Obstructive Pulmonary Disease – Medicare Access',
      status: 'closed',
      statusNote:
        'Closed on August 26, 2026. The only open lung fund on HealthWell\'s published list was Bronchiectasis, which is a different diagnosis.',
      medicare: 'eligible',
      medicareNote:
        'This is a "Medicare Access" fund — built specifically for people with Medicare — which makes it worth an alert even while closed.',
      summary:
        'HealthWell runs a COPD fund designed for Medicare beneficiaries, and it was closed when we checked. HealthWell says replenished funds reopen as quickly as possible and offers real-time alerts.',
      covers: 'When open: copays, coinsurance, deductibles and health-insurance premiums for COPD.',
      eligibility: ['A confirmed COPD diagnosis, verified by your prescriber', ...HEALTHWELL_REQUIREMENTS],
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
      statusNote: 'Good Days\' published disease list on August 26, 2026 contained 57 programs and none of them was COPD.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Anoro Ellipta.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'The charitable picture for Anoro Ellipta is narrower than for the steroid-containing inhalers, and the reason is the label rather than the price. Because Anoro is licensed for COPD only, it appears on TotalAssist\'s COPD fund and COPD health equity fund but not on the asthma funds — where Breo Ellipta, which contains a steroid, does appear. Both COPD funds were closed on August 26, 2026, each paying $1,200 guaranteed up to $3,500. HealthWell\'s COPD – Medicare Access fund was closed too, and Good Days runs no COPD fund at all. Usefully, TotalAssist lists the generic "Umeclidinium-Vilanterol" on the same fund as the brand, so switching to the authorized generic would not cost you eligibility if a fund reopens. Set alerts on both foundations, and in the meantime work the GSK program, the generic and the cash-price comparison.',
  extraHelpNote:
    'GSK\'s Medicare route for Anoro does not exclude Extra Help enrollees — its gate is the $600 prescription-spending threshold, not your subsidy status — so there is nothing to weigh up between the two. Apply for Extra Help on its own merits. With full Extra Help a covered brand-name drug costs about $12.65 in 2026, which for a once-daily maintenance inhaler taken indefinitely is a larger annual difference than it first sounds.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'Anoro has an unusually wide set of routes for a COPD inhaler — a real manufacturer program, an authorized generic, and two published cash prices. The order that saves the most:',
      bullets: [
        'Limited income and $600 already spent on prescriptions this year → the GSK Patient Assistance Program.',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'Ask your prescriber and plan about the authorized generic, umeclidinium and vilanterol.',
        'Compare your plan\'s cost-sharing against the $222.94 GSK cash price before assuming insurance is cheaper.',
        'COPD diagnosis → set alerts on the TotalAssist and HealthWell COPD funds (all closed when checked).',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'One manufacturer program, three charitable funds, and one cash price that can move.',
      bullets: [
        'GSK Patient Assistance: the eligible-products list and the Medicare eligibility page are authoritative and both are cited here.',
        'TotalAssist: the COPD and COPD health equity fund pages show "Open" or "Closed" and the current award amounts.',
        'HealthWell: the disease-funds list shows the COPD – Medicare Access fund and its status.',
        'GSK Direct to You: prices are published on the program page and can change without notice.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'The GSK spending threshold is the gate most people do not expect:',
      bullets: [
        'GSK Patient Assistance: a Medicare drug plan; income at or below $47,880 for one person or $64,920 for two in the 48 states and DC; and $600 already paid for prescriptions this calendar year.',
        'TotalAssist (when open): government insurance covering Anoro; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed COPD diagnosis in treatment.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified COPD diagnosis, and treatment in the United States.',
        'GSK Direct to You: no income test at all — the only condition is that you are not using insurance for that fill.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'What each route will ask for:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your prescription spending so far this calendar year, for GSK\'s $600 threshold — plan Explanation of Benefits statements or a pharmacy year-to-date printout.',
        'Household size and annual gross income, plus proof.',
        'Your COPD diagnosis and its date. TotalAssist needs the exact date if it was within the past 6 months.',
        'Your prescriber\'s name, office address and phone.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'GSK Patient Assistance: both you and your prescriber sign the enrollment form.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
        'GSK Direct to You: your provider sends the prescription; Alto Pharmacy contacts you.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'GSK Patient Assistance: the foundation reviews income and insurance documentation; approved medicine is supplied through the program.',
        'Extra Help: Social Security notifies you by mail; your plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
        'GSK Direct to You: no determination — it is a purchase, not an application.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Anoro has more fallbacks than most inhalers on this site:',
      bullets: [
        'Ask about the authorized generic. DailyMed labels "Umeclidinium and Vilanterol Ellipta", and the TotalAssist COPD fund lists the generic alongside the brand.',
        'Compare the $222.94 GSK cash price and the $247.94 TrumpRx price against your plan\'s cost-sharing. If your plan puts Anoro on a high tier with coinsurance, cash can be the cheaper route — but it will not count toward your out-of-pocket cap.',
        'If the $600 threshold is blocking you, remember it is a calendar-year test that resets, and it is easier to meet later in the year.',
        'Watch for the Medicare negotiated price. Anoro Ellipta is selected for initial price applicability year 2028; CMS has not published a price yet.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    {
      item: 'Proof of prescription spending this calendar year',
      note: 'GSK\'s Medicare route requires $600 already paid — plan Explanation of Benefits statements or a pharmacy year-to-date printout',
    },
    { item: 'Confirmation that the prescription is for COPD', note: 'Anoro is not indicated for asthma, and the charitable funds are diagnosis-specific' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your prescriber and plan about the authorized generic — DailyMed labels "Umeclidinium and Vilanterol Ellipta" alongside GSK\'s brand, and TotalAssist covers the generic on the same fund.',
    },
    {
      text: 'Compare two published cash prices against your plan: GSK Direct to You lists Anoro Ellipta at $222.94 plus a fee of up to $25, and the federal TrumpRx site lists it at $247.94.',
      href: 'https://gskforyou.com/programs/direct-to-you/',
      label: 'GSK Direct to You',
    },
    ...standardAlternatives('Anoro Ellipta'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Anoro Ellipta?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Anoro Ellipta, usually on a brand tier. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65. Anoro is also a selected drug for Medicare price negotiation, with any negotiated price taking effect from January 1, 2028.',
    },
    {
      question: 'Is there an Anoro Ellipta patient assistance program for people on Medicare?',
      answer:
        'Yes. Anoro Ellipta is on the GSK Patient Assistance Program\'s published list of eligible products, and the program has a Medicare route. The requirement people miss is the spending threshold: for GSK\'s "general" medicines, which includes Anoro, you must have "paid a total of $600 for prescriptions in the current calendar year". You also need a Medicare drug plan and income at or below $47,880 for one person in the 48 states and DC. Both you and your prescriber sign the form.',
    },
    {
      question: 'Has Medicare negotiated a price for Anoro Ellipta?',
      answer:
        'Not yet — but it has been selected. Anoro Ellipta is one of the 15 drugs on CMS\'s selected-drug list for initial price applicability year 2028. Selection means negotiation happens first and any resulting maximum fair price takes effect January 1, 2028. CMS\'s published data file carries an empty price column for Anoro today, so anyone quoting you a negotiated Anoro price now is quoting something CMS has not published.',
    },
    {
      question: 'Why is Anoro Ellipta on the COPD charity funds but not the asthma ones?',
      answer:
        'Because of what its label says. Anoro combines two long-acting bronchodilators — umeclidinium and vilanterol — and contains no inhaled steroid, and the label states it is "NOT indicated for the relief of acute bronchospasm or for the treatment of asthma." The charitable funds follow the approved indication, so Anoro appears on TotalAssist\'s COPD funds and not its Asthma fund. Breo Ellipta, which contains a steroid and is licensed for both, appears on both. If your inhaler was prescribed for asthma, check that it is the right one for the fund you are applying to.',
    },
    {
      question: 'Should I buy Anoro Ellipta with cash instead of using Medicare?',
      answer:
        'Sometimes, but check the arithmetic first. GSK sells Anoro direct at $222.94 plus a processing and shipping fee of up to $25, and the federal TrumpRx site lists it at $247.94 — the same price with the fee included. GSK\'s own terms say the offer "is not available to patients who wish to use insurance", and GSK adds "If you have insurance, check with your pharmacy, your price may be lower." The catch for a Medicare beneficiary is that cash spending outside your Part D benefit does not count toward your deductible or your annual out-of-pocket cap.',
    },
    {
      question: 'Is there a generic for Anoro Ellipta?',
      answer:
        'Yes, an authorized generic. DailyMed lists five labelled umeclidinium products across two labelers: GSK\'s Anoro Ellipta, Incruse Ellipta and Trelegy Ellipta, plus "Umeclidinium and Vilanterol Ellipta" and "Umeclidinium Ellipta". TotalAssist lists the generic on the same COPD fund as the brand, so switching would not cost you fund eligibility. Whether it lowers your copay depends on your plan\'s formulary. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['incruse', 'breo', 'trelegy', 'stiolto'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Anoro Ellipta' },
  ],
  sources: [
    label,
    dailymedUmec,
    gskPafProducts,
    gskPafMedicare,
    gskDirect,
    trumpRx,
    gskCopay,
    gskCoupons,
    totalAssistCopd,
    totalAssistCopdHe,
    totalAssistAsthma,
    SRC.totalAssistNotify,
    SRC.totalAssistEligibility,
    healthWellFunds,
    SRC.healthWellFunds,
    goodDays,
    cmsMfpFile,
    cms2028FactSheet,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.oigCoupons,
  ],
  // Per-record verification date. Re-verify the GSK Direct to You price first —
  // it is the most perishable figure on this page — then the IPAY 2028 row,
  // which gains a maximum fair price once CMS publishes one.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Anoro Ellipta Assistance',
    status: 'coming-soon',
    description:
      'The GSK $600 threshold, the $222.94 cash price and when it beats Part D, the authorized generic, and what selection for 2028 negotiation does and does not mean.',
  },
  description_meta:
    'How to lower the cost of Anoro Ellipta (umeclidinium/vilanterol) on Medicare: the GSK patient assistance $600 threshold, the $222.94 GSK cash price, the authorized generic, COPD fund status, and selection for 2028 Medicare negotiation — verified August 2026.',
};

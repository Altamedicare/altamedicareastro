// ---------------------------------------------------------------------------
// Tezspire (tezepelumab-ekko) — Amgen, developed with AstraZeneca.
// Independently researched 2026-08-26. Batch 8 — a NEW slug.
//
// Tezspire completes the severe-asthma biologic set on this site alongside Nucala
// and Xolair, and the three turn out to be assisted by three completely different
// organisations under three completely different rules — GSK's own foundation for
// Nucala, Genentech's for Xolair, and Amgen's for Tezspire. A reader switching
// between biologics has to start the assistance question over each time, and this
// page says so.
//
// RESEARCH GAP CARRIED HONESTLY. Two of Amgen's figures could not be established
// at the source and are therefore NOT published here:
//   • amgensafetynetfoundation.com/eligibility returned HTTP 403 (AccessDenied) to
//     every automated request on the checked date, so the foundation's income
//     limits and its Medicare rule could not be read.
//   • Amgen's own Tezspire access page (amgensupportplus.com) does not publish the
//     copay program's dollar amounts — it defers to the Tezspire Together terms.
//     Dollar figures for this card circulate on third-party sites; none of them
//     were confirmed at an Amgen source, so none appear on this page.
// What COULD be established is quoted, including the one Medicare-relevant detail
// Amgen's enrolment form does make explicit: it requires a Provider Transaction
// Access Number (PTAN) "if the patient has Medicare", which tells you the program
// contemplates Medicare patients and routes them through the prescriber.
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
  title: 'Tezspire prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=60f0aa03-ad25-4d48-80ce-7fcfa76f325f',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'TEZSPIRE (tezepelumab-ekko) injection, solution; Amgen Inc',
};
const dailymedTeze = {
  title: 'DailyMed label index — tezepelumab',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=tezepelumab',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'a single labelled tezepelumab product — TEZSPIRE. No generic and no biosimilar is labelled',
};
const amgenSupportPlus = {
  title: 'TEZSPIRE financial support (Amgen SupportPlus)',
  url: 'https://www.amgensupportplus.com/tezspire/financial-support',
  publisher: 'Amgen',
  checked: CHECKED,
  supports:
    'the two Amgen routes for Tezspire — a Co-Pay Card for people with commercial or private insurance, and the Amgen Safety Net Foundation for patients who "have a financial need and are uninsured, or their insurance plan excludes the Amgen medicine"; patients whose plan or employer participates in an alternate funding program are not eligible for the foundation. NOTE: this page publishes NO dollar amounts for the co-pay card, deferring to the Tezspire Together terms and conditions. Phones: TEZSPIRE Together 888-897-7473; Amgen SupportPlus (866) 264-2778',
};
const amgenSafetyNet = {
  title: 'Amgen Safety Net Foundation — eligibility',
  url: 'https://www.amgensafetynetfoundation.com/eligibility',
  publisher: 'Amgen Safety Net Foundation',
  checked: CHECKED,
  supports:
    'the official location of the foundation\'s eligibility criteria. NOTE: this page returned HTTP 403 (AccessDenied) to every automated request on the checked date, so the income limits and the Medicare rule could not be read here. The foundation\'s home page states it "has helped hundreds of thousands of patients with financial need gain access to Amgen medicines at no cost" and that it "does not charge patients a fee for its assistance"',
};
const tezspirePapForm = {
  title: 'TEZSPIRE Together Patient Assistance Program enrollment form',
  url: 'https://www.tezspiretogetherhcp.com/s/sfsites/c/sfc/servlet.shepherd/document/download/069Nv000009aVrJIAU',
  publisher: 'Amgen / TEZSPIRE Together',
  checked: CHECKED,
  supports:
    'the enrollment form\'s own fields: it asks the patient to declare "Medicare/Medicare Adv/Medicare Pt D/Medicare Supplement", Medicaid, other federal/state or local healthcare programs, secondary coverage or no insurance; and it requires a "Provider Transaction Access Number (PTAN) — Required if the patient has Medicare". The form captures household income including wages, Social Security, Social Security disability, unemployment and pensions',
};
const tezspireCopay = {
  title: 'TEZSPIRE Together Co-Pay Program enrollment',
  url: 'https://copay.tezspiretogether.com/',
  publisher: 'Amgen / TEZSPIRE Together',
  checked: CHECKED,
  supports: 'the commercial co-pay program enrolment route for Tezspire; full terms and program maximums are published in its terms and conditions',
};
const totalAssistAsthma = {
  title: 'TotalAssist — Asthma fund',
  url: 'https://totalassist.org/funds/asthma/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Tezspire (Tezepelumab-Ekko)" on the approved-medication list; $1,200 guaranteed / $3,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistAsthmaHe = {
  title: 'TotalAssist — Asthma health equity fund',
  url: 'https://totalassist.org/funds/asthma-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; Tezspire on the approved-medication list; $1,200 guaranteed / $3,500 maximum award; requires a home zip code in a designated social-vulnerability county',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; the COPD approved-medication list does NOT include Tezspire, although it does include the other two severe-asthma biologics on this site, Nucala and Dupixent',
};
const healthWellFunds = {
  title: 'HealthWell disease funds (full list)',
  url: 'https://www.healthwellfoundation.org/disease-funds/',
  publisher: 'HealthWell Foundation',
  checked: CHECKED,
  supports:
    'the complete fund list — "Asthma" CLOSED; no severe or eosinophilic asthma fund of any kind; the only open respiratory fund is Bronchiectasis, a different diagnosis',
};
const goodDays = {
  title: 'Good Days — diseases covered',
  url: 'https://mygooddays.org/patients/diseases-covered/',
  publisher: 'Good Days',
  checked: CHECKED,
  supports: 'the complete list of 57 programs — no asthma program of any kind',
};
const cmsMfpFile = {
  title: 'Selected Drug List and Negotiated Prices (Maximum Fair Prices) data file',
  url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/selected-drugs-negotiated-prices',
  publisher: 'CMS',
  checked: CHECKED,
  supports:
    'the full selected-drug file dated May 26, 2026 — no Tezspire or tezepelumab row for initial price applicability year 2026, 2027 or 2028, although XOLAIR appears for IPAY 2028',
};

export const TEZSPIRE: MedicationAssistanceRecord = {
  slug: 'tezspire',
  brandName: 'Tezspire',
  genericName: 'tezepelumab-ekko',
  manufacturer: 'Amgen (developed with AstraZeneca)',
  // `respiratory`. Tezspire is on the TotalAssist and HealthWell asthma funds
  // and — unlike Nucala — is NOT on the COPD fund, so the single condition key
  // matches it correctly and nothing further is warranted.
  conditions: ['respiratory'],
  // 'biologic' — an injected monoclonal antibody targeting one part of the
  // immune system. Same class as Nucala and Xolair, different target.
  drugClass: ['biologic'],
  description:
    'Tezspire is an injected biologic given as add-on maintenance treatment for severe asthma. It works further upstream than the other severe-asthma biologics on this site, which is why it is used in people whose asthma does not fit a single allergic or eosinophilic pattern. For assistance purposes the important thing is that it is an Amgen medicine: the program, the rules and the phone numbers are entirely separate from those covering Nucala or Xolair.',
  usedFor: [
    'Add-on maintenance treatment of severe asthma in adults and adolescents — confirm the exact age range and criteria on your own prescription with your prescriber',
    'Chronic rhinosinusitis with nasal polyps, where the label supports it — check with your prescriber which indication yours was written for',
  ],
  whyCostly:
    'Tezspire is a brand-only biologic with no generic and no biosimilar — DailyMed labels exactly one tezepelumab product. Part D plans place it on a specialty tier, where you pay a percentage of the price rather than a flat copay, and almost always behind prior authorization. Coinsurance at that level tends to consume the annual out-of-pocket cap in the first months of the year rather than spreading across it.',
  medicareContext:
    'Tezspire is covered under Medicare Part D or a Medicare Advantage drug plan when you or a caregiver inject it at home, generally on a specialty tier with prior authorization. If your doses are given in a clinic, the billing route can differ, so ask your prescriber\'s office which benefit applies before planning around a figure. Tezspire is not a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file has no Tezspire or tezepelumab row for 2026, 2027 or 2028 — worth checking rather than assuming, since Xolair, another severe-asthma biologic, was selected for 2028. Part D out-of-pocket costs are capped at $2,100 in 2026, and the Medicare Prescription Payment Plan can spread what you owe across the year, which for a specialty-tier biologic is often the practical difference between manageable and not.',
  quickAnswer: {
    verdict:
      'Probably, through the Amgen Safety Net Foundation — but Amgen does not publish the numbers, and this page will not invent them. The foundation\'s eligibility page refused automated access on the checked date, and Amgen\'s Tezspire pages publish no copay dollar figures. What is confirmed is that the program exists, that Tezspire is in it, and that the enrolment form is built to handle Medicare patients. Every applicable charitable fund was closed.',
    points: [
      'Amgen Safety Net Foundation: Amgen\'s own Tezspire page describes it as being for patients who "have a financial need and are uninsured, or their insurance plan excludes the Amgen medicine". Its income limits and Medicare rule could NOT be read — the eligibility page returned an access-denied error. Call before ruling yourself in or out.',
      'The TEZSPIRE Together enrolment form asks patients to declare Medicare, Medicare Advantage, Medicare Part D or Medicare Supplement coverage, and requires a prescriber PTAN "if the patient has Medicare" — so the program plainly contemplates Medicare patients.',
      'TEZSPIRE Together Co-Pay Program: commercial or private insurance only. Amgen publishes no dollar amounts on its access page, so none are reproduced here.',
      'Alternate funding programs disqualify you: if your employer or plan requires you to apply to a manufacturer program as a condition of coverage, Amgen states you are not eligible.',
      'Charitable grants: TotalAssist lists Tezspire on its Asthma fund and Asthma health equity fund, both closed ($1,200 guaranteed / $3,500 maximum). HealthWell\'s Asthma fund was closed. Good Days has no asthma fund. Tezspire is NOT on the COPD fund, though Nucala and Dupixent are.',
      'No generic and no biosimilar; not a Medicare-negotiated drug for 2026, 2027 or 2028.',
    ],
  },
  programs: [
    {
      id: 'amgen-safety-net',
      kind: 'manufacturer-pap',
      name: 'Amgen Safety Net Foundation (TEZSPIRE Together Patient Assistance Program)',
      operator: 'Amgen Safety Net Foundation, a nonprofit sponsored by Amgen',
      status: 'verify',
      statusNote:
        'The program exists and covers Tezspire — Amgen\'s own access page says so — but its current eligibility terms could not be confirmed on August 26, 2026, because amgensafetynetfoundation.com/eligibility returned an HTTP 403 access-denied response to every automated request. The income limits and the specific Medicare rule are therefore unverified and are not reproduced here from third-party sources.',
      medicare: 'unknown',
      medicareNote:
        'The foundation\'s published Medicare rule could not be read, and this project does not borrow one from another manufacturer. Two things are on record and worth using. First, Amgen describes the foundation as serving people who are "uninsured, or their insurance plan excludes the Amgen medicine" — wording that turns on whether your plan covers Tezspire rather than on whether you have Medicare. Second, the TEZSPIRE Together enrolment form asks the patient to declare Medicare, Medicare Advantage, Medicare Part D or Medicare Supplement coverage and requires the prescriber\'s PTAN "if the patient has Medicare", which is not something a program builds unless Medicare patients are expected. Call and ask directly: whether Medicare Part D enrollees may apply, what the income limit is, and whether Extra Help affects eligibility.',
      summary:
        'Amgen\'s charitable foundation has supplied Amgen medicines at no cost since 2001 and Tezspire is among them. What could not be established is who currently qualifies — so the instruction here is to phone rather than to read a figure off this page. Amgen also warns that third parties charging a fee for enrolment help are not the foundation: its assistance is free.',
      covers: 'Amgen medicines, including Tezspire, at no cost to approved patients.',
      eligibility: [
        'Financial need, and either no insurance or an insurance plan that excludes the Amgen medicine (Amgen\'s own description)',
        'Not enrolled through an alternate funding program — Amgen states patients whose insurance plan or employer participates in one requiring an application to a manufacturer program are not eligible',
        'Residence in the United States or its territories',
        'Current income limits and the specific Medicare rule: UNVERIFIED — the foundation\'s eligibility page could not be read on the checked date',
      ],
      requirements: [
        'Household income including wages, Social Security, Social Security disability, unemployment and pensions — the enrolment form asks for all of these',
        'Your insurance details, including Medicare, Medicare Advantage, Part D or Medicare Supplement coverage if you have them',
        'Your prescriber\'s Tax ID and Provider Transaction Access Number (PTAN), which the form requires if you have Medicare',
      ],
      howToApply:
        'Call TEZSPIRE Together on 888-897-7473 (888-TZSPIRE), Monday–Friday 8am–8pm ET, or Amgen SupportPlus on (866) 264-2778. Your prescriber\'s office completes part of the enrolment form, including the PTAN if you have Medicare. Because the published terms could not be verified, a phone call is the reliable route for this medication.',
      applyUrl: 'https://www.amgensupportplus.com/tezspire/financial-support',
      applyLabel: 'TEZSPIRE financial support',
      phone: '888-897-7473',
      sources: [amgenSupportPlus, amgenSafetyNet, tezspirePapForm],
    },
    {
      id: 'tezspire-copay',
      kind: 'manufacturer-savings',
      name: 'TEZSPIRE Together Co-Pay Program',
      operator: 'Amgen',
      status: 'verify',
      statusNote:
        'Active for commercially insured patients on August 26, 2026, but its dollar terms could not be confirmed: Amgen\'s own access page states only that "Eligibility criteria and program maximums apply" and refers readers to the Tezspire Together terms and conditions. Figures for this card circulate on third-party sites; none were confirmed at an Amgen source, so none are published here.',
      medicare: 'excluded',
      medicareNote:
        'Manufacturer copay cards are closed to Medicare across the board — federal anti-kickback rules prevent their use with Part D, Medicare Advantage drug coverage, Medicaid, TRICARE or VA benefits. Amgen describes this program as being for patients with commercial or private insurance. That general rule is why this card is recorded as excluded even though its specific dollar terms could not be read.',
      summary:
        'A commercial copay offer. Recorded so Medicare readers can rule it out immediately and move to the foundation, and so anyone moving from commercial insurance onto Medicare knows their Tezspire support changes at that moment — which is one of the most common ways people are caught out.',
      covers: 'Part of the commercial copay or coinsurance for Tezspire. Not applicable to Medicare cost-sharing.',
      eligibility: [
        'Commercial or private insurance that covers Tezspire',
        'Not enrolled in Medicare, Medicaid or another government prescription program',
        'Current dollar terms unconfirmed — check the official terms and conditions before relying on a figure',
      ],
      howToApply:
        'Commercially insured patients enrol at copay.tezspiretogether.com or by calling 888-897-7473. Medicare beneficiaries should call the same number and ask about the Amgen Safety Net Foundation instead.',
      applyUrl: 'https://copay.tezspiretogether.com/',
      applyLabel: 'TEZSPIRE Together Co-Pay Program',
      phone: '888-897-7473',
      sources: [tezspireCopay, amgenSupportPlus, SRC.oigCoupons],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Asthma funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Asthma · Asthma health equity',
      status: 'closed',
      statusNote:
        'Both applicable funds were closed to new applicants on August 26, 2026, each with a $1,200 guaranteed and $3,500 maximum award. TotalAssist has no waitlist, so the notification sign-up is what gets you in.',
      medicare: 'eligible',
      medicareNote:
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open, and unlike the Amgen foundation these funds publish their rules plainly, which is a reason to work them in parallel rather than after.',
      summary:
        '"Tezspire (Tezepelumab-Ekko)" is named on the Asthma approved-medication list. Worth noting what is absent: Tezspire is not on the COPD fund, although Nucala and Dupixent are — so if you have been moved between biologics, your fund eligibility may have moved too.',
      covers:
        'When open: $1,200 guaranteed award and up to $3,500 maximum for medication copays, coinsurance, deductibles and health-insurance premiums. One grant per condition.',
      eligibility: [
        'Confirmed asthma diagnosis, in treatment, starting within 60 days, or treated in the past 6 months',
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
      sources: [totalAssistAsthma, totalAssistAsthmaHe, totalAssistCopd, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Asthma fund',
      operator: 'HealthWell Foundation',
      fund: 'Asthma',
      status: 'closed',
      statusNote:
        'Closed on August 26, 2026. HealthWell runs no severe-asthma or eosinophilic-asthma fund, so there is no narrower fund to fall back on.',
      medicare: 'eligible',
      medicareNote: 'HealthWell accepts Medicare beneficiaries for the diseases it covers. Its Asthma fund is the only one that could apply to Tezspire, and it was closed.',
      summary:
        'One applicable fund, closed when we checked. HealthWell says replenished funds reopen as quickly as possible and offers real-time alerts, which is the practical move while the Amgen route stays unverified.',
      covers: 'When open: copays, coinsurance, deductibles and health-insurance premiums for asthma.',
      eligibility: ['A confirmed asthma diagnosis, verified by your prescriber', ...HEALTHWELL_REQUIREMENTS],
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
      statusNote: 'Good Days\' published disease list on August 26, 2026 contained 57 programs and none of them was asthma.',
      medicare: 'unknown',
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Tezspire.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'Tezspire has a narrower charitable footprint than the other severe-asthma biologics on this site, and the difference is worth knowing if you have been switched between them. TotalAssist lists Tezspire on its Asthma fund and Asthma health equity fund — each $1,200 guaranteed up to $3,500, both closed on August 26, 2026 — but not on its COPD fund, where Nucala and Dupixent both appear. HealthWell\'s Asthma fund was closed and it runs no severe- or eosinophilic-asthma fund at all; Good Days has no asthma fund. With the Amgen foundation\'s terms unverified and every fund shut, the routes you can act on today are the phone call to Amgen, Extra Help, and the Medicare Prescription Payment Plan. Set alerts on TotalAssist and HealthWell so a reopening does not pass you by.',
  extraHelpNote:
    'Extra Help matters more than usual for Tezspire, because it is the one route on this page whose rules are fully published and immediately checkable. It lowers cost-sharing on every covered drug you take, and with full Extra Help a covered brand-name drug costs about $12.65 in 2026 — a very different number from specialty-tier coinsurance on a biologic. Whether Extra Help affects Amgen Safety Net Foundation eligibility is one of the questions this page could not answer, so ask it when you call; manufacturers differ, and Amgen\'s answer is not published.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Tezspire on Medicare in August 2026, the order is shaped by what can be checked today versus what needs a phone call:',
      bullets: [
        'Call TEZSPIRE Together on 888-897-7473 and ask about the Amgen Safety Net Foundation. Its terms are not readable online, so the call is the only way to a current answer.',
        'Limited income and resources → Medicare Extra Help through Social Security, which you can apply for today without waiting on Amgen.',
        'Asthma diagnosis → set alerts on the TotalAssist and HealthWell asthma funds (all closed when checked).',
        'Enrol in the Medicare Prescription Payment Plan if a specialty-tier bill in January is the problem.',
        'Commercial insurance instead of Medicare → the TEZSPIRE Together Co-Pay Program, which Medicare enrollees cannot use.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'One manufacturer program whose terms are unverified, and three charitable funds that were closed.',
      bullets: [
        'Amgen Safety Net Foundation: the eligibility page is the official source; it refused automated access on the checked date, so call to confirm the program is accepting applications and what the limits are.',
        'TotalAssist: the Asthma and Asthma health equity fund pages show "Open" or "Closed" and the current award amounts.',
        'HealthWell: the disease-funds list shows the Asthma fund and its status.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Two of these publish their rules; the manufacturer program does not:',
      bullets: [
        'Amgen Safety Net Foundation: UNVERIFIED income limits. Ask three specific questions — may Medicare Part D enrollees apply, what is the current income limit, and does Extra Help enrolment affect eligibility.',
        'One Amgen rule that IS published: if your employer or health plan requires you to apply to a manufacturer assistance program as a condition of coverage — an "alternate funding program" — you are not eligible.',
        'TotalAssist (when open): government insurance covering Tezspire; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed asthma diagnosis in treatment.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified asthma diagnosis, and treatment in the United States.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Amgen\'s enrolment form asks for one item most programs do not:',
      bullets: [
        'Your prescriber\'s Tax ID and Provider Transaction Access Number (PTAN). The form requires the PTAN if you have Medicare, and your prescriber\'s office supplies it — ask for it early, because chasing it is a common delay.',
        'Household income including wages, Social Security, Social Security disability, unemployment and pensions.',
        'Medicare card and your Part D or Medicare Advantage drug-plan card, plus any Medicare Supplement or secondary coverage.',
        'Your asthma diagnosis and its date. TotalAssist needs the exact date if it was within the past 6 months.',
        'Whether you inject at home or receive doses in a clinic, since that can change which Medicare benefit pays.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Amgen Safety Net Foundation: you complete the patient sections; your prescriber\'s office completes the provider sections including the PTAN. TEZSPIRE Together on 888-897-7473 can walk both of you through it.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Amgen Safety Net Foundation: unverified timeframe. Ask when you call, and ask what happens to your doses while the application is pending.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
        'HealthWell (when open): a decision once your provider returns the diagnosis verification.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'For a specialty biologic with no generic, the Medicare-side tools carry the weight:',
      bullets: [
        'Enrol in the Medicare Prescription Payment Plan. It does not lower the total, but it stops a specialty-tier bill landing all at once in January.',
        'Apply for Extra Help even if you assume you earn too much — the limits are higher than most people expect.',
        'Ask your prescriber\'s office about a formulary or tier exception if coinsurance is the obstacle.',
        'If you were switched to Tezspire from another biologic, check your charitable fund eligibility again — Tezspire is not on the COPD fund even though Nucala and Dupixent are.',
        'Do not wait for a generic — DailyMed labels exactly one tezepelumab product, and no biosimilar exists.',
        'Call AltaMedicare — we will work through every route above with you, free, including making the Amgen call with you.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    {
      item: 'Your prescriber\'s Provider Transaction Access Number (PTAN) and Tax ID',
      note: 'Amgen\'s enrolment form requires the PTAN if the patient has Medicare — ask the prescriber\'s office for it early',
    },
    { item: 'Whether you inject at home or receive doses in a clinic', note: 'this can change which Medicare benefit pays' },
    { item: 'A note of the questions to ask Amgen', note: 'Medicare eligibility, the current income limit, and whether Extra Help affects it — none of these are published' },
  ],
  ifUnavailable: [
    {
      text: 'Enrol in the Medicare Prescription Payment Plan. For a specialty-tier biologic this is often the most useful single step — it spreads what you owe across the year instead of front-loading it.',
      href: 'https://www.medicare.gov/prescription-payment-plan',
      label: 'Medicare.gov',
    },
    {
      text: 'There is no generic or biosimilar to switch to — DailyMed labels exactly one tezepelumab product — so a formulary or tier exception through your plan is the alternative worth raising with your prescriber.',
    },
    ...standardAlternatives('Tezspire'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Tezspire?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Tezspire when you or a caregiver inject it at home, usually on a specialty tier with prior authorization. If your doses are given in a clinic, the billing route can differ, so ask your prescriber\'s office which benefit applies. Part D out-of-pocket costs are capped at $2,100 in 2026, and the <a href="https://www.medicare.gov/prescription-payment-plan">Medicare Prescription Payment Plan</a> can spread that across the year.',
    },
    {
      question: 'Is there a Tezspire patient assistance program for people on Medicare?',
      answer:
        'Amgen runs the Amgen Safety Net Foundation and Tezspire is covered by it, but we could not confirm its current Medicare rule or income limits — the foundation\'s eligibility page returned an access-denied error to every automated request on August 26, 2026. Rather than repeat figures from third-party sites, this page records the gap. Two confirmed clues are encouraging: Amgen describes the foundation as serving people whose "insurance plan excludes the Amgen medicine", and the enrolment form requires a prescriber PTAN "if the patient has Medicare". Call TEZSPIRE Together on 888-897-7473 and ask directly.',
    },
    {
      question: 'Why does this page not give a dollar amount for the Tezspire copay card?',
      answer:
        'Because Amgen does not publish one on its own access page — it states that "Eligibility criteria and program maximums apply" and refers readers to the Tezspire Together terms and conditions. Dollar figures for this card do circulate on third-party sites, but none of them could be confirmed at an Amgen source, and this project does not publish an assistance figure it has not seen at the source. In any case the card excludes Medicare, so for most readers of this page the number would not change anything.',
    },
    {
      question: 'How does Tezspire assistance differ from Nucala or Xolair?',
      answer:
        'Completely, and that surprises people who switch between them. All three are severe-asthma biologics, but Nucala is a GSK medicine assisted by the GSK Patient Access Programs Foundation, Xolair is a Genentech medicine assisted by the Genentech Patient Foundation with its distinctive 7.5%-of-income test, and Tezspire is an Amgen medicine assisted by the Amgen Safety Net Foundation. Different applications, different income rules, different phone numbers, and different charitable fund eligibility — Tezspire is not on the COPD fund that lists Nucala. If your biologic changes, start the assistance question over.',
    },
    {
      question: 'Is there a generic or biosimilar for Tezspire?',
      answer:
        'No. DailyMed lists exactly one labelled tezepelumab product. There is no generic and no biosimilar, so there is no lower-tier version to ask your prescriber about. That is part of why the specialty-tier coinsurance is difficult, and why Extra Help and the Medicare Prescription Payment Plan carry so much of the weight here.',
    },
    {
      question: 'Is Tezspire part of Medicare drug price negotiation?',
      answer:
        'No. CMS\'s selected-drug and Maximum Fair Price file has no Tezspire or tezepelumab row for initial price applicability year 2026, 2027 or 2028. This is worth checking rather than assuming, because Xolair — another severe-asthma biologic — was selected for 2028. Your Tezspire cost is set by your plan\'s specialty-tier coinsurance. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['nucala', 'xolair', 'dupixent', 'breo'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Tezspire' },
  ],
  sources: [
    label,
    dailymedTeze,
    amgenSupportPlus,
    amgenSafetyNet,
    tezspirePapForm,
    tezspireCopay,
    totalAssistAsthma,
    totalAssistAsthmaHe,
    totalAssistCopd,
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
  // Per-record verification date. The two `verify` cards are the priority on
  // re-check: if the Amgen Safety Net Foundation eligibility page becomes
  // readable, this record gains real income limits and a stated Medicare rule.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Tezspire Assistance',
    status: 'coming-soon',
    description:
      'What Amgen does and does not publish, the PTAN your prescriber must supply if you have Medicare, and why switching between severe-asthma biologics resets your assistance entirely.',
  },
  description_meta:
    'How to lower the cost of Tezspire (tezepelumab-ekko) on Medicare: what the Amgen Safety Net Foundation covers, why its terms could not be verified, the prescriber PTAN requirement, asthma fund status, and specialty-tier options — verified August 2026.',
};

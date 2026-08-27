// ---------------------------------------------------------------------------
// Stiolto Respimat (tiotropium bromide / olodaterol) — Boehringer Ingelheim.
// Independently researched 2026-08-26. Batch 8 — a NEW slug.
//
// Boehringer Ingelheim blocks automated access, exactly as the Spiriva and Ofev
// records recorded in Batch 6. On the checked date boehringer-ingelheim.com,
// pradaxa.com and stiolto.com all returned Incapsula block pages, and bicares.com
// served a parked placeholder. The project rule applies unchanged: an
// inaccessible official source produces `verify`, never a borrowed fact from a
// sibling drug or another manufacturer.
//
// What COULD be established, and it is more than for Spiriva:
//   • The BI Cares Foundation's own therapy list, supplied by the foundation to
//     the PhRMA-run helpingpatients.org directory, names "Stiolto Respimat spray"
//     alongside Jardiance, Ofev, Pradaxa, Spiriva HandiHaler, Spiriva Respimat and
//     Tradjenta. That database was last updated September 15, 2025, and the page
//     says so.
//   • docs.boehringer-ingelheim.com — the one BI host that answers — serves the
//     STIOLTO RESPIMAT Savings Card terms as a PDF. They are readable, and they
//     are stale: the document carries "Program expiration on 12/31/2024". The
//     Medicare exclusion language is quoted verbatim; the dollar figures are
//     reported as what the expired document says, not as current terms.
//
// TAXONOMY: `lama-laba`, shared with Anoro Ellipta. Label: "STIOLTO RESPIMAT is a
// combination of tiotropium bromide, an anticholinergic and olodaterol, a
// long-acting beta2-adrenergic agonist (LABA)", and "STIOLTO RESPIMAT is not
// indicated to treat asthma" — which is why it appears on the COPD funds only.
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
  title: 'Stiolto Respimat prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01e15aee-40e0-23f3-537f-c96dd63e2cb1',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports:
    '"STIOLTO RESPIMAT is a combination of tiotropium bromide, an anticholinergic and olodaterol, a long-acting beta2-adrenergic agonist (LABA)"; indicated for "long-term, once-daily maintenance treatment of patients with chronic obstructive pulmonary disease (COPD), including chronic bronchitis and/or emphysema"; "STIOLTO RESPIMAT is not indicated to treat asthma"; 2.5 mcg tiotropium / 2.5 mcg olodaterol per actuation; Boehringer Ingelheim Pharmaceuticals, Inc. (rev. 1/2025)',
};
const dailymedTioOlo = {
  title: 'DailyMed label index — tiotropium bromide and olodaterol',
  url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=tiotropium+bromide+and+olodaterol',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'a single labelled product — Boehringer Ingelheim\'s STIOLTO RESPIMAT. No generic combination product is labelled',
};
const biPortal = {
  title: 'Boehringer Cares Patient Assistance Portal',
  url: 'https://www.boehringer-ingelheim.com/us/about-us/sustainable-development/our-commitment/boehringer-cares-patient-assistance-portal',
  publisher: 'Boehringer Ingelheim',
  checked: CHECKED,
  supports:
    'the current official location of the Boehringer Cares Patient Assistance Program. NOTE: this page returned an Incapsula block page to every automated request on the checked date, so its terms could not be read here',
};
const phrmaPpa = {
  title: 'Boehringer Ingelheim Cares Foundation, Inc. — therapies offered',
  url: 'https://www.helpingpatients.org/company/boehringer_ingelheim_pharmaceuticals_inc',
  publisher: 'Partnership for Prescription Assistance (PhRMA)',
  checked: CHECKED,
  supports:
    'program information supplied by the foundation itself, listing "Stiolto Respimat spray" among the therapies offered alongside Jardiance, Ofev, Pradaxa, Spiriva HandiHaler, Spiriva Respimat and Tradjenta, and describing free medications for patients meeting program criteria. The directory states "Program Database last updated on September 15, 2025"',
};
const stioltoCardTerms = {
  title: 'STIOLTO RESPIMAT Savings Card Terms and Conditions',
  url: 'https://docs.boehringer-ingelheim.com/STIOLTO%20RESPIMAT%20Savings%20Card%20Terms%20and%20Conditions.pdf',
  publisher: 'Boehringer Ingelheim Pharmaceuticals',
  checked: CHECKED,
  supports:
    'the savings-card terms BI serves as a PDF: "may pay as little as $0/month with a maximum savings up to $250 per 30 day supply. Card valid for 12 uses per year"; "Only valid for commercially insured patients"; and the government-program exclusion quoted on this page. CRITICAL: the document carries "Program expiration on 12/31/2024", so these are NOT current terms',
};
const totalAssistCopd = {
  title: 'TotalAssist — Chronic obstructive pulmonary disease (COPD) fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports:
    'Closed; "Stiolto Respimat (Tiotropium Br/Olodaterol Hcl)" on the approved-medication list; $1,200 guaranteed / $3,500 maximum award; government insurance; 500% FPL adjusted for regional cost of living',
};
const totalAssistCopdHe = {
  title: 'TotalAssist — COPD health equity fund',
  url: 'https://totalassist.org/funds/chronic-obstructive-pulmonary-disease-copd-health-equity/',
  publisher: 'Patient Advocate Foundation',
  checked: CHECKED,
  supports: 'Closed; the same approved-medication list including Stiolto Respimat; $1,200 guaranteed / $3,500 maximum award; requires a home zip code in a designated social-vulnerability county',
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
    'the full selected-drug file dated May 26, 2026 — no Stiolto Respimat, tiotropium or olodaterol row for initial price applicability year 2026, 2027 or 2028',
};

export const STIOLTO: MedicationAssistanceRecord = {
  slug: 'stiolto',
  brandName: 'Stiolto Respimat',
  genericName: 'tiotropium bromide / olodaterol',
  manufacturer: 'Boehringer Ingelheim',
  // `respiratory`. COPD maintenance only — the label states Stiolto "is not
  // indicated to treat asthma", which is why it appears on the COPD funds and
  // not the asthma ones.
  conditions: ['respiratory'],
  // 'lama-laba', shared with Anoro Ellipta. Two long-acting bronchodilators and
  // no steroid. Not 'lama' (that is Spiriva — tiotropium alone) and not
  // 'ics-laba' (no corticosteroid).
  drugClass: ['lama-laba'],
  description:
    'Stiolto Respimat is a once-daily maintenance inhaler for COPD that combines two long-acting bronchodilators — tiotropium, the same molecule as Spiriva, plus olodaterol — in a soft-mist Respimat device. It contains no steroid and is licensed for COPD only, which is what places it on the COPD charitable funds rather than the asthma ones.',
  usedFor: [
    'Long-term, once-daily maintenance treatment of chronic obstructive pulmonary disease (COPD), including chronic bronchitis and emphysema',
  ],
  whyCostly:
    'Stiolto Respimat is a brand-only inhaler — DailyMed labels no generic version of the tiotropium/olodaterol combination — and Part D plans generally place it on a brand tier for treatment that continues indefinitely. The manufacturer picture is harder to pin down than for most medications on this site, because Boehringer Ingelheim blocks automated access to its patient-support pages, so the program terms below could not be read at the source and are recorded as unverified rather than guessed at.',
  medicareContext:
    'Stiolto Respimat is an inhaler you use yourself, so Medicare covers it under Part D or a Medicare Advantage drug plan, usually on a brand tier. It is not a Medicare-negotiated drug: CMS\'s selected-drug and Maximum Fair Price file has no Stiolto, tiotropium or olodaterol row for 2026, 2027 or 2028. Part D out-of-pocket costs are capped at $2,100 in 2026, Extra Help lowers cost-sharing for people with limited income and resources, and the Medicare Prescription Payment Plan can spread what you owe across the year. One practical note specific to this inhaler: tiotropium on its own is available as generic Spiriva, so if cost is the obstacle it is worth asking your prescriber whether the combination is doing something a single bronchodilator would not.',
  quickAnswer: {
    verdict:
      'Probably — but we could not confirm the terms at the source, and this page says so rather than filling the gap. Boehringer Ingelheim\'s own foundation lists Stiolto Respimat among the therapies it offers, but BI blocks automated access to its program pages, so the current eligibility rules and the current savings-card terms are unverified. Both applicable charitable funds were closed.',
    points: [
      'Boehringer Cares Patient Assistance Program: the BI Cares Foundation\'s own therapy list names "Stiolto Respimat spray". Current eligibility terms could not be read — every BI patient-support page returned a block page on August 26, 2026. Call the program directly before assuming you do or do not qualify.',
      'Stiolto Respimat Savings Card: the terms BI publishes as a PDF are readable but EXPIRED — they carry "Program expiration on 12/31/2024". They exclude Medicare in any case.',
      'No generic: DailyMed labels a single tiotropium/olodaterol product. Generic tiotropium alone does exist, which is a different conversation worth having with your prescriber.',
      'Charitable grants: TotalAssist\'s COPD fund and COPD health equity fund both list Stiolto Respimat and both were closed ($1,200 guaranteed / $3,500 maximum). HealthWell\'s COPD – Medicare Access fund was closed. Good Days has no COPD fund.',
      'Medicare: not a negotiated-price drug for 2026, 2027 or 2028; Part D costs capped at $2,100 in 2026; Extra Help can cut a covered brand copay to about $12.65.',
    ],
  },
  programs: [
    {
      id: 'bi-cares',
      kind: 'manufacturer-pap',
      name: 'Boehringer Cares Patient Assistance Program',
      operator: 'Boehringer Ingelheim Cares Foundation, Inc.',
      status: 'verify',
      statusNote:
        'Stiolto Respimat is named on the foundation\'s own published therapy list, but the program\'s current terms could not be confirmed on August 26, 2026: boehringer-ingelheim.com, stiolto.com and bicares.com all failed to serve their patient-support content to us — the first two returned Incapsula block pages and the third a parked placeholder. The therapy list itself comes from the PhRMA-run directory the foundation supplies, whose database was last updated September 15, 2025. Treat the listing as good evidence that the program covers Stiolto and the absence of terms as a genuine gap to close by phone.',
      medicare: 'unknown',
      medicareNote:
        'The program\'s Medicare rule could not be read at the source, and this project does not borrow one from a sibling drug or another manufacturer. What is on record is that the foundation describes itself as helping patients who meet its criteria obtain medications free of charge, and that independent directories have historically described Medicare Part D patients as potentially eligible subject to program review. Call and ask specifically: whether Medicare Part D enrollees may apply, whether Extra Help enrolment disqualifies you, and what the current income limit is.',
      summary:
        'Boehringer Ingelheim runs a foundation that supplies its medicines free to patients who meet its criteria, and Stiolto Respimat is on its list. What the criteria currently are is the part we could not verify — so the honest instruction is to call rather than to read a number off this page.',
      eligibility: [
        'Stiolto Respimat is on the foundation\'s published therapy list',
        'Current income limits and insurance rules: UNVERIFIED — BI\'s program pages could not be read on the checked date',
        'Confirm directly before applying, and before ruling yourself out',
      ],
      howToApply:
        'Start at the Boehringer Cares Patient Assistance Portal cited here, or call Boehringer Ingelheim to be routed to the foundation. Because the online terms could not be verified, a phone call is the reliable route for this medication.',
      applyUrl:
        'https://www.boehringer-ingelheim.com/us/about-us/sustainable-development/our-commitment/boehringer-cares-patient-assistance-portal',
      applyLabel: 'Boehringer Cares Patient Assistance Portal',
      sources: [biPortal, phrmaPpa],
    },
    {
      id: 'stiolto-savings',
      kind: 'manufacturer-savings',
      name: 'Stiolto Respimat Savings Card',
      operator: 'Boehringer Ingelheim',
      status: 'verify',
      statusNote:
        'The terms Boehringer Ingelheim serves for this card are readable but out of date: the PDF states "Benefits not to exceed Program expiration on 12/31/2024". It describes patients paying "as little as $0/month with a maximum savings up to $250 per 30 day supply" and a card "valid for 12 uses per year". Those figures are reported here as what the expired document says, not as current terms, because BI\'s live savings pages could not be read.',
      medicare: 'excluded',
      medicareNote:
        'The exclusion language is unambiguous even in the expired document, and it matches the general federal rule on manufacturer copay support: the offer is "not valid for patients without commercial coverage or patients whose prescriptions for STIOLTO RESPIMAT are eligible to be reimbursed, in whole or in part, by any governmental program such as Medicaid, Medicare, Medigap, the Retiree Drug Subsidy Program, VA, DOD, TRICARE, or any state patient or pharmaceutical assistance program." If you have Medicare, this is not your route regardless of which version of the terms is current.',
      summary:
        'A commercial copay offer for people with private or employer prescription insurance. Two reasons it is not the answer for a Medicare reader: it excludes Medicare by name, and the only terms we could read had already expired.',
      eligibility: [
        'Commercial (private or employer-sponsored) prescription insurance',
        'Not enrolled in Medicare, Medicaid or another government prescription program',
        'Current terms unconfirmed — the published document had expired when we checked',
      ],
      howToApply:
        'Commercially insured patients should ask their pharmacist or Boehringer Ingelheim for the current offer. Medicare beneficiaries should call the Boehringer Cares Foundation and apply for Extra Help instead.',
      applyUrl: 'https://docs.boehringer-ingelheim.com/STIOLTO%20RESPIMAT%20Savings%20Card%20Terms%20and%20Conditions.pdf',
      applyLabel: 'Stiolto Respimat savings card terms (PDF)',
      sources: [stioltoCardTerms, SRC.oigCoupons],
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
        'These funds require government-insured coverage — Medicare, Medicaid or TRICARE — that covers your qualifying expenses. Medicare beneficiaries are eligible when a fund is open. Note the contrast with the manufacturer side of this page: the foundations state their Medicare rules plainly and Boehringer Ingelheim does not, which is a reason to work the charitable route in parallel rather than after.',
      summary:
        '"Stiolto Respimat (Tiotropium Br/Olodaterol Hcl)" is named on the COPD approved-medication list. Both applicable funds were closed when we checked. Stiolto is deliberately absent from TotalAssist\'s Asthma fund, which matches its COPD-only label.',
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
      sources: [totalAssistCopd, totalAssistCopdHe, SRC.totalAssistNotify, SRC.totalAssistEligibility],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — COPD – Medicare Access fund',
      operator: 'HealthWell Foundation',
      fund: 'Chronic Obstructive Pulmonary Disease – Medicare Access',
      status: 'closed',
      statusNote:
        'Closed on August 26, 2026. The only open lung fund on HealthWell\'s published list was Bronchiectasis, a different diagnosis.',
      medicare: 'eligible',
      medicareNote: 'A "Medicare Access" fund — built specifically for people with Medicare — which makes it worth an alert even while closed.',
      summary:
        'HealthWell runs a COPD fund designed for Medicare beneficiaries; it was closed when we checked. Its real-time alerts are the practical move while the manufacturer route stays unverified.',
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
      medicareNote: 'Good Days accepts Medicare beneficiaries for the diseases it covers, but it covers no diagnosis that applies to Stiolto Respimat.',
      summary: 'An honest negative, checked so you do not spend time on a third foundation that has no fund for you.',
      eligibility: [],
      howToApply: 'Not applicable today. The diseases-covered page shows every fund Good Days runs.',
      applyUrl: 'https://mygooddays.org/patients/diseases-covered/',
      applyLabel: 'Good Days diseases covered',
      sources: [goodDays, SRC.goodDaysDiseases],
    },
  ],
  charitableSummary:
    'The charitable picture for Stiolto Respimat is the standard COPD one and it was shut on August 26, 2026. TotalAssist lists Stiolto on its COPD fund and COPD health equity fund, each paying $1,200 guaranteed up to $3,500, and both were closed; HealthWell\'s COPD – Medicare Access fund was closed too; Good Days runs no COPD fund. What makes the charitable side unusually important for this particular inhaler is the state of the manufacturer side: because Boehringer Ingelheim\'s program terms could not be verified, the foundations are the routes whose rules you can actually read today. Set alerts on TotalAssist and HealthWell, call the Boehringer Cares Foundation to close the gap this page cannot close, and apply for Extra Help in the meantime.',
  extraHelpNote:
    'Extra Help carries more weight for Stiolto than for medications with a well-documented manufacturer program, because there is no published BI rule to weigh it against. There is a real question worth asking the Boehringer Cares Foundation when you call — whether Extra Help enrolment affects your eligibility — since manufacturers differ on that point and BI\'s answer is not published. In the meantime, apply for Extra Help: with full Extra Help a covered brand-name drug costs about $12.65 in 2026, and the subsidy applies to every covered drug you take rather than one.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body: 'For Stiolto Respimat on Medicare in August 2026, the order is shaped by what can and cannot be read online:',
      bullets: [
        'Call the Boehringer Cares Foundation. Stiolto is on its therapy list, but its terms are not readable online — a phone call is the only way to get a current answer.',
        'Limited income and resources → Medicare Extra Help through Social Security, which you can apply for today without waiting on BI.',
        'COPD diagnosis → set alerts on the TotalAssist and HealthWell COPD funds (all closed when checked).',
        'Ask your prescriber whether generic tiotropium alone would do the job — it exists, whereas the Stiolto combination has no generic.',
        'Commercial insurance instead of Medicare → the Stiolto savings card, whose published terms had expired when we checked.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body: 'One manufacturer program whose status is unverified, and three charitable funds that were closed.',
      bullets: [
        'Boehringer Cares: the patient assistance portal is the official location; it did not serve its content to us, so call to confirm the program is accepting applications.',
        'TotalAssist: the COPD and COPD health equity fund pages show "Open" or "Closed" and the current award amounts.',
        'HealthWell: the disease-funds list shows the COPD – Medicare Access fund and its status.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Two of these three have published rules; the manufacturer program does not:',
      bullets: [
        'Boehringer Cares: UNVERIFIED. Ask three specific questions — may Medicare Part D enrollees apply, does Extra Help enrolment disqualify me, and what is the current income limit.',
        'TotalAssist (when open): government insurance covering Stiolto; income at or below 500% FPL adjusted for your regional cost-of-living index; a confirmed COPD diagnosis in treatment.',
        'HealthWell (when open): insurance that covers part of the drug\'s cost, a prescriber-verified COPD diagnosis, and treatment in the United States.',
        'Extra Help: income below about $23,940 a year for one person or $32,460 for a couple, and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Whichever route you take, these are what will be asked for:',
      bullets: [
        'Medicare card and your Part D or Medicare Advantage drug-plan card, with policy ID and group number.',
        'Your COPD diagnosis and its date. TotalAssist needs the exact date if it was within the past 6 months.',
        'Confirmation that the prescription is for COPD — Stiolto is not indicated for asthma, and the funds are diagnosis-specific.',
        'Household size and annual household income, plus proof.',
        'Your prescriber\'s name, office address and phone — manufacturer programs of this type are normally co-signed by the prescriber.',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'Boehringer Cares: the form and the signature requirements could not be verified online. Ask when you call whether your prescriber must co-sign and whether the form can be submitted electronically.',
        'Extra Help: you (or someone helping you) apply free through Social Security — online, by phone on 1-800-772-1213, or at an office. There is never a fee.',
        'TotalAssist (when open): you apply online in about 15 minutes or by phone on 866-512-3861.',
        'HealthWell (when open): apply online or by phone; your provider verifies the diagnosis by signature.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect:',
      bullets: [
        'Boehringer Cares: unverified. Ask for the expected timeframe when you call, and ask what happens to your prescription while the application is pending.',
        'Extra Help: Social Security notifies you by mail; your Part D plan then applies the lower copays.',
        'TotalAssist (when open): an immediate online decision, with proof of income due within 30 days of approval.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'The alternatives that do not depend on Boehringer Ingelheim:',
      bullets: [
        'Ask your prescriber whether generic tiotropium on its own is appropriate. There is no generic of the Stiolto combination, but tiotropium alone is widely available as generic Spiriva — this is a clinical decision, so it needs their judgement.',
        'Apply for Extra Help even if you assume you earn too much; the limits are higher than most people expect.',
        'Sign up for TotalAssist and HealthWell alerts on the COPD funds.',
        'Ask your prescriber\'s office about a formulary exception if your plan places Stiolto on a high tier.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s out-of-pocket costs across monthly payments.',
        'Call AltaMedicare — we will work through every route above with you, free, including making the Boehringer Cares call with you.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Confirmation that the prescription is for COPD', note: 'Stiolto is not indicated for asthma, and the charitable funds are diagnosis-specific' },
    { item: 'A note of the questions to ask Boehringer Cares', note: 'Medicare eligibility, whether Extra Help disqualifies you, and the current income limit — none of these are published' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your prescriber whether generic tiotropium alone would be appropriate. The Stiolto combination has no generic, but tiotropium on its own does — and that is a clinical question rather than a cost one.',
    },
    ...standardAlternatives('Stiolto Respimat'),
  ],
  faqs: [
    {
      question: 'Does Medicare cover Stiolto Respimat?',
      answer:
        'Yes — Medicare Part D and Medicare Advantage drug plans generally cover Stiolto Respimat, usually on a brand tier. Part D out-of-pocket costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can bring a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Stiolto Respimat patient assistance program for people on Medicare?',
      answer:
        'Boehringer Ingelheim\'s foundation lists Stiolto Respimat among the therapies it offers, so a program almost certainly covers it — but we could not confirm its current terms. On August 26, 2026 every Boehringer Ingelheim patient-support page we tried returned a block page to automated access, and bicares.com served a placeholder. Rather than repeat figures from a sibling drug or a third-party site, this page records the gap and tells you to call. Ask specifically whether Medicare Part D enrollees may apply, whether Extra Help disqualifies you, and what the income limit is.',
    },
    {
      question: 'Why does this page say "unverified" when other sites quote exact income limits?',
      answer:
        'Because we could not read those limits on Boehringer Ingelheim\'s own pages, and this project does not publish an assistance figure it has not seen at the source. Third-party directories do carry numbers for BI\'s program, but they are secondary, they age, and an out-of-date income limit can wrongly convince someone they do not qualify. The one BI document we could read — the Stiolto savings card terms — turned out to carry a 2024 expiry date, which is a fair illustration of why the caution is warranted.',
    },
    {
      question: 'Is there a generic for Stiolto Respimat?',
      answer:
        'No. DailyMed lists a single labelled tiotropium/olodaterol product, Boehringer Ingelheim\'s Stiolto Respimat. However, tiotropium on its own — the Spiriva molecule, and one of Stiolto\'s two ingredients — is available generically. Whether a single bronchodilator would control your COPD as well as the combination is a clinical question for your prescriber, but it is a reasonable one to raise if cost is the obstacle.',
    },
    {
      question: 'Can I use the Stiolto savings card with Medicare?',
      answer:
        'No. The card\'s terms exclude prescriptions "eligible to be reimbursed, in whole or in part, by any governmental program such as Medicaid, Medicare, Medigap, the Retiree Drug Subsidy Program, VA, DOD, TRICARE, or any state patient or pharmaceutical assistance program." Two further points: the terms we could read carry a program expiration of 12/31/2024, so they are not current; and manufacturer copay cards are closed to Medicare across the board under federal anti-kickback rules, so no future version will change that answer.',
    },
    {
      question: 'Is there a charitable grant for Stiolto Respimat right now?',
      answer:
        'Not when we checked on August 26, 2026. TotalAssist lists Stiolto Respimat on its COPD fund and COPD health equity fund and both were closed, each with a $1,200 guaranteed and $3,500 maximum award. HealthWell\'s COPD – Medicare Access fund was closed too, and Good Days has no COPD fund. Because the manufacturer route for this inhaler is the one we could not verify, the foundations are worth watching more closely here than usual. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['spiriva', 'anoro', 'breztri', 'trelegy'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/category/drug-coverage.html', label: 'Does Medicare Cover My Drug?', blurb: 'Coverage guides for common brand medications' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Stiolto Respimat' },
  ],
  sources: [
    label,
    dailymedTioOlo,
    biPortal,
    phrmaPpa,
    stioltoCardTerms,
    totalAssistCopd,
    totalAssistCopdHe,
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
  // Per-record verification date. The two `verify` cards here are the priority
  // on re-check: if Boehringer Ingelheim ever serves its patient-support pages
  // to automated access, this record gains real eligibility figures and the
  // savings-card terms can be replaced with current ones.
  lastVerified: '2026-08-26',
  datePublished: '2026-08-26',
  video: {
    title: 'How to Apply for Stiolto Respimat Assistance',
    status: 'coming-soon',
    description:
      'What the Boehringer Cares Foundation does and does not publish, the three questions to ask when you call, and why generic tiotropium is worth raising with your prescriber.',
  },
  description_meta:
    'How to lower the cost of Stiolto Respimat (tiotropium/olodaterol) on Medicare: what the Boehringer Cares Foundation covers, why its terms could not be verified, COPD fund status, and Medicare Extra Help — verified August 2026.',
};

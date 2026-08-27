// ---------------------------------------------------------------------------
// Farxiga (dapagliflozin) — AstraZeneca. Independently researched 2026-08-26.
// Every program below was read on the official source cited with it.
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

const azmeUpdates = {
  title: 'AZ&Me important program updates — Farxiga and Xigduo XR removal',
  url: 'https://www.azandmeapp.com/important-program-updates',
  publisher: 'AstraZeneca (AZ&Me)',
  checked: CHECKED,
  supports: 'closed to new Farxiga patients May 1, 2026; support ends Dec 31, 2026',
};
const azmeEligibility = {
  title: 'AZ&Me eligibility requirements',
  url: 'https://www.azandmeapp.com/eligibility-requirements',
  publisher: 'AstraZeneca (AZ&Me)',
  checked: CHECKED,
  supports: 'Medicare rule, 300% FPL, phone',
};
const farxigaSavings = {
  title: 'Farxiga savings and support',
  url: 'https://www.farxiga.com/savings-support',
  publisher: 'AstraZeneca',
  checked: CHECKED,
  supports: 'savings card terms; Medicare exclusion',
};
const azDirect = {
  title: 'AstraZeneca Direct — Farxiga',
  url: 'https://www.azpatientdirect.com/farxiga',
  publisher: 'AstraZeneca (ASPN Pharmacies)',
  checked: CHECKED,
  supports: '$35 per 30 tablets; phone',
};
const label = {
  title: 'Farxiga prescribing information (DailyMed)',
  url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72ad22ae-efe6-4cd6-a302-98aaee423d69',
  publisher: 'U.S. National Library of Medicine',
  checked: CHECKED,
  supports: 'approved uses',
};

export const FARXIGA: MedicationAssistanceRecord = {
  slug: 'farxiga',
  brandName: 'Farxiga',
  genericName: 'dapagliflozin',
  manufacturer: 'AstraZeneca',
  conditions: ['diabetes', 'heart', 'kidney'],
  // dapagliflozin — SGLT2 inhibitor (Farxiga US prescribing information).
  drugClass: ['sglt2'],
  description:
    'Farxiga is a once-daily SGLT2 inhibitor tablet prescribed for type 2 diabetes, heart failure and chronic kidney disease.',
  usedFor: [
    'Chronic kidney disease at risk of progression — to lower the risk of kidney-function decline, kidney failure, cardiovascular death and heart-failure hospitalization',
    'Heart failure — to lower the risk of cardiovascular death, hospitalization and urgent heart-failure visits',
    'Type 2 diabetes with cardiovascular disease or multiple risk factors — to lower the risk of heart-failure hospitalization',
    'Type 2 diabetes — to improve blood sugar control alongside diet and exercise (adults and children 10+)',
  ],
  whyCostly:
    'Farxiga is a brand-name drug that Part D plans usually place on a higher, non-preferred brand tier, so copays or coinsurance can be significant until you reach the annual out-of-pocket cap ($2,100 in 2026). AstraZeneca says generic dapagliflozin became available beginning April 2026 and is winding down its own Farxiga assistance in response — which changes where you should look for help.',
  medicareContext:
    'Farxiga is generally covered under Medicare Part D (or a Medicare Advantage drug plan) for its approved uses, often with prior authorization or step therapy. It is one of the first ten drugs with a Medicare-negotiated Maximum Fair Price: $178.50 for a 30-day supply in 2026 (versus a $556 list price in 2023, per CMS). That price applies to what plans pay; your copay still depends on your plan\'s tier and cost-sharing. Ask your pharmacist whether generic dapagliflozin costs less on your plan.',
  quickAnswer: {
    verdict:
      'Possibly — but the picture for Farxiga changed in 2026. AstraZeneca\'s AZ&Me patient assistance program stopped taking new Farxiga patients on May 1, 2026, and the main diabetes, heart-failure and kidney charity funds were closed to new applicants when we checked. The routes still open are AstraZeneca\'s $35 direct-purchase option, one geographically limited TotalAssist heart-failure fund, generic dapagliflozin, and Medicare Extra Help.',
    points: [
      'Manufacturer patient assistance: AZ&Me is closed to new Farxiga patients (since May 1, 2026) and removes Farxiga entirely on December 31, 2026.',
      'Farxiga Savings Card: excludes Medicare Part D — do not use it with your plan.',
      'AstraZeneca Direct lists Farxiga at $35.00 per 30 tablets as a self-pay option; ask ASPN Pharmacies whether Part D enrollees qualify.',
      'Charitable grants: Farxiga is on TotalAssist and HealthWell fund lists, but their diabetes, heart-failure and kidney funds were closed — except TotalAssist\'s zip-code-limited heart-failure health-equity fund.',
      'Medicare: negotiated Part D price of $178.50 (30-day) in 2026; Extra Help can cut a covered brand copay to about $12.65 if you qualify.',
    ],
  },
  programs: [
    {
      id: 'azme',
      kind: 'manufacturer-pap',
      name: 'AZ&Me Prescription Savings Program',
      operator: 'AstraZeneca',
      status: 'closed',
      statusNote:
        'Not accepting new Farxiga patients since May 1, 2026. Patients already enrolled keep assistance through December 31, 2026 (final refill request December 15, 2026); AstraZeneca states there are no exceptions or extensions.',
      medicare: 'conditional',
      medicareNote:
        'For the medications AZ&Me still covers, Medicare Part D enrollees may apply if they are not eligible for or enrolled in Extra Help (LIS). That rule no longer helps with Farxiga, because new Farxiga enrollment is closed.',
      summary:
        'AstraZeneca\'s patient assistance program supplied Farxiga free to eligible patients. AstraZeneca is removing Farxiga and Xigduo XR from AZ&Me by the end of 2026, citing broad generic availability, and now points Farxiga patients to independent nonprofit funds and to AstraZeneca Direct.',
      eligibility: [
        'Farxiga: closed to new patients — the rules below apply only to existing Farxiga enrollees and to other AstraZeneca medicines',
        'No commercial insurance, and no government insurance other than Medicare',
        'Annual adjusted gross income at or below 300% of the federal poverty level (primary and specialty medications)',
        'Not receiving any other form of medication assistance',
      ],
      requirements: [
        'Name, home address, phone and email',
        'Health insurance information',
        'Household size and adjusted gross income (IRS Form 1040, line 11)',
        'AstraZeneca medication name and formulation; prescriber name, office name and address',
      ],
      howToApply:
        'Existing Farxiga enrollees: request refills through AZ&Me by December 15, 2026. New patients cannot apply for Farxiga. (For other AstraZeneca medicines, the patient, a legally authorized representative, or the prescriber\'s office can apply online or by fax; online decisions may be immediate, faxed applications take 2–4 business days.)',
      applyUrl: 'https://www.azandmeapp.com/important-program-updates',
      applyLabel: 'AZ&Me notice on Farxiga',
      phone: '1-800-292-6363',
      sources: [
        azmeUpdates,
        azmeEligibility,
        {
          title: 'AZ&Me included medications (Farxiga no longer listed)',
          url: 'https://www.azandmeapp.com/included-medications',
          publisher: 'AstraZeneca (AZ&Me)',
          checked: CHECKED,
          supports: 'Farxiga absent from the covered list',
        },
      ],
    },
    {
      id: 'farxiga-savings-card',
      kind: 'manufacturer-savings',
      name: 'Farxiga Savings Card',
      operator: 'AstraZeneca',
      status: 'open',
      statusNote: 'Active for commercially insured patients when checked on August 26, 2026.',
      medicare: 'excluded',
      medicareNote:
        'AstraZeneca\'s terms exclude anyone enrolled in Medicare Part D, Medicaid, Medigap, VA, DoD or TRICARE — and say you may not use the card even if you choose to be processed as a cash-paying patient. Do not use it with Medicare.',
      summary:
        'A commercial copay offer: eligible commercially insured patients pay as low as $0 per 30-day supply, with a maximum savings of $175 per 30-day supply.',
      eligibility: [
        'Commercial (private or employer) prescription insurance',
        'Not enrolled in any state or federally funded prescription program',
      ],
      howToApply: 'Commercially insured patients activate the card on farxiga.com. Not applicable to Medicare beneficiaries.',
      applyUrl: 'https://www.farxiga.com/savings-support',
      applyLabel: 'Farxiga savings card terms',
      phone: '1-844-631-3978',
      sources: [farxigaSavings, SRC.oigCoupons],
    },
    {
      id: 'az-direct',
      kind: 'manufacturer-direct',
      name: 'AstraZeneca Direct — Farxiga self-pay',
      operator: 'AstraZeneca (dispensed by ASPN Pharmacies)',
      status: 'open',
      statusNote: 'Listed at $35.00 per 30 tablets on August 26, 2026; AstraZeneca notes that "offers vary based on eligibility criteria."',
      medicare: 'unknown',
      medicareNote:
        'The AstraZeneca Direct page does not say whether Part D enrollees can use the $35 cash price — call ASPN Pharmacies and ask. A cash purchase made outside your plan generally does not count toward your Part D out-of-pocket cap.',
      summary:
        'AstraZeneca\'s direct-purchase channel — the option AZ&Me now points Farxiga patients to. ASPN Pharmacies checks whether you qualify for AstraZeneca support programs and quotes your lowest-cost option.',
      covers: 'A cash price of $35.00 per 30 tablets (additional taxes and fees may apply; costs may be HSA/FSA-eligible) rather than a grant.',
      eligibility: ['A valid Farxiga prescription', 'Eligibility criteria are set by AstraZeneca and confirmed by ASPN Pharmacies'],
      howToApply: 'Visit azpatientdirect.com/farxiga or call ASPN Pharmacies (Monday–Friday, 8:30 AM–8 PM ET); they confirm eligibility and arrange the prescription with your prescriber.',
      applyUrl: 'https://www.azpatientdirect.com/farxiga',
      applyLabel: 'AstraZeneca Direct — Farxiga',
      phone: '1-844-692-9633',
      sources: [azDirect, azmeUpdates],
    },
    {
      id: 'totalassist-hf-he',
      kind: 'charitable',
      name: 'TotalAssist — Heart failure (HF) health equity fund',
      operator: 'Patient Advocate Foundation',
      fund: 'Heart failure (HF) health equity',
      status: 'open',
      statusNote: 'Open and accepting applications on August 26, 2026 — the only fund covering Farxiga that was open when we checked.',
      medicare: 'eligible',
      medicareNote: 'Requires government insurance (Medicare, Medicaid or TRICARE) that covers your Farxiga costs.',
      summary:
        'A health-equity fund: you must have heart failure and a home address in a zip code the fund serves (designated social-vulnerability counties). Farxiga is on its approved-medication list. Eligibility is determined in part by zip code, so check yours before assuming.',
      covers: '$1,000 guaranteed award, up to $2,500 maximum, for eligible out-of-pocket costs. One grant per condition.',
      eligibility: [
        'Diagnosed with heart failure',
        'Home address in a zip code served by a Health Equity Fund',
        ...TOTALASSIST_ELIGIBILITY,
      ],
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply: TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/funds/heart-failure-hf-health-equity/',
      applyLabel: 'Check eligibility and apply — TotalAssist',
      phone: TOTALASSIST_PHONE,
      sources: [
        {
          title: 'TotalAssist — Heart failure (HF) health equity fund',
          url: 'https://totalassist.org/funds/heart-failure-hf-health-equity/',
          publisher: 'Patient Advocate Foundation',
          checked: CHECKED,
          supports: 'open status, award, zip-code rule, Farxiga listed',
        },
        SRC.totalAssistApply,
      ],
    },
    {
      id: 'totalassist',
      kind: 'charitable',
      name: 'TotalAssist — Type 2 diabetes, heart failure, chronic kidney disease funds',
      operator: 'Patient Advocate Foundation',
      fund: 'Type 2 diabetes (T2DM) · Heart failure (HF) · Chronic kidney disease (CKD) · Cardiomyopathy',
      status: 'closed',
      statusNote: 'All four funds were closed to new applicants on August 26, 2026, even though Farxiga is on each fund\'s approved-medication list.',
      medicare: 'eligible',
      medicareNote: 'These funds require government insurance (Medicare, Medicaid or TRICARE).',
      summary:
        'Patient Advocate Foundation\'s TotalAssist (launched July 1, 2026, combining PAF Co-Pay Relief and the PAN Foundation) lists Farxiga under several disease funds. A listing is not an open fund: each of these was closed when we checked. Sign up to be notified the moment one reopens — TotalAssist has no waitlist or queue.',
      covers: 'When open: Type 2 diabetes $1,500 guaranteed / $2,000 maximum; heart failure $1,000 / $2,500; chronic kidney disease $2,400 / $4,800.',
      eligibility: TOTALASSIST_ELIGIBILITY,
      requirements: TOTALASSIST_REQUIREMENTS,
      howToApply:
        'Sign up for fund notifications (text, email or automated call) at totalassist.org/notify. When a fund opens: ' + TOTALASSIST_HOW_TO_APPLY,
      applyUrl: 'https://totalassist.org/notify/',
      applyLabel: 'Get notified when a TotalAssist fund opens',
      phone: TOTALASSIST_PHONE,
      sources: [
        SRC.totalAssistFunds,
        { title: 'TotalAssist — Type 2 diabetes (T2DM) fund', url: 'https://totalassist.org/funds/type-2-diabetes-t2dm/', publisher: 'Patient Advocate Foundation', checked: CHECKED, supports: 'closed; Farxiga listed' },
        { title: 'TotalAssist — Heart failure (HF) fund', url: 'https://totalassist.org/funds/heart-failure-hf/', publisher: 'Patient Advocate Foundation', checked: CHECKED, supports: 'closed; Farxiga listed' },
        { title: 'TotalAssist — Chronic kidney disease (CKD) fund', url: 'https://totalassist.org/funds/chronic-kidney-disease-ckd/', publisher: 'Patient Advocate Foundation', checked: CHECKED, supports: 'closed; Farxiga listed' },
        SRC.totalAssistNotify,
      ],
    },
    {
      id: 'healthwell',
      kind: 'charitable',
      name: 'HealthWell Foundation — Type 2 Diabetes and heart-failure funds',
      operator: 'HealthWell Foundation',
      fund: 'Type 2 Diabetes · Chronic Heart Failure – Medicare Access · Cardiomyopathy – Medicare Access',
      status: 'closed',
      statusNote: 'All three funds were "temporarily closed to new patients due to lack of sufficient funding" on August 26, 2026. HealthWell has no chronic kidney disease fund.',
      medicare: 'eligible',
      medicareNote: 'HealthWell requires insurance that covers part of the drug; Medicare qualifies. The two Medicare Access funds are for Medicare patients only.',
      summary:
        'HealthWell lists Farxiga on its Type 2 Diabetes fund and both heart-failure-related Medicare Access funds. HealthWell states that closed funds reopen as funding is replenished, and offers real-time alerts for each fund.',
      covers: 'When open: Type 2 Diabetes up to $1,000 (pharmacy card; income up to 300% FPL); Chronic Heart Failure – Medicare Access up to $2,500 and Cardiomyopathy – Medicare Access up to $7,500 (income up to 500% FPL).',
      eligibility: [
        'Insurance (including Medicare) that covers part of the cost of Farxiga',
        'Type 2 Diabetes fund: household income up to 300% of the federal poverty level; heart-failure Medicare Access funds: up to 500% FPL (adjusted for household size and cost of living)',
        'Diagnosis matching the fund, verified by your provider',
      ],
      requirements: HEALTHWELL_REQUIREMENTS,
      howToApply: HEALTHWELL_HOW_TO_APPLY,
      applyUrl: 'https://www.healthwellfoundation.org/fund/type-2-diabetes/',
      applyLabel: 'HealthWell Type 2 Diabetes fund (sign up for alerts)',
      phone: HEALTHWELL_PHONE,
      sources: [SRC.healthWellT2D, SRC.healthWellCHF, SRC.healthWellFunds, SRC.healthWellEligibility],
    },
    {
      id: 'gooddays-ckd',
      kind: 'charitable',
      name: 'Good Days — Chronic Kidney Disease program',
      operator: 'Good Days',
      fund: 'Chronic Kidney Disease',
      status: 'closed',
      statusNote: 'Program status "seeking funds" — not open to new enrollments on August 26, 2026. Good Days lists no diabetes or heart-failure program.',
      medicare: 'unknown',
      medicareNote: 'Good Days\' CKD eligibility rules were not readable on its page when we checked; confirm with Good Days if the program opens.',
      summary: 'Good Days lists a chronic kidney disease program but is currently seeking funding for it. We could not confirm whether Farxiga is on its covered-medication list.',
      eligibility: [],
      howToApply: 'Check the Good Days CKD page for a status change.',
      applyUrl: 'https://mygooddays.org/diseases-covered/chronic-kidney-disease/',
      applyLabel: 'Good Days — Chronic Kidney Disease',
      sources: [
        { title: 'Good Days — Chronic Kidney Disease', url: 'https://mygooddays.org/diseases-covered/chronic-kidney-disease/', publisher: 'Good Days', checked: CHECKED, supports: 'status: seeking funds' },
        SRC.goodDaysDiseases,
      ],
    },
  ],
  charitableSummary:
    'Farxiga appears in the TotalAssist medication index and on HealthWell\'s Type 2 Diabetes and heart-failure fund lists, but on August 26, 2026 every one of those funds was closed to new applicants except TotalAssist\'s heart-failure health-equity fund, which is limited to certain zip codes. Being listed is not the same as being open — sign up for fund alerts so you hear when one reopens.',
  extraHelpNote:
    'Extra Help matters more than usual for Farxiga right now: with the manufacturer program closed to new patients, it is the one route that does not depend on a fund balance — and it applies to every drug on your plan, not only Farxiga.',
  applicationSteps: [
    {
      title: 'Find the applicable assistance program',
      body:
        'Because AZ&Me no longer accepts new Farxiga patients, start with whichever of these fits your situation. Work through them in order — they are not mutually exclusive.',
      bullets: [
        'Heart failure and a home zip code served by a health-equity fund → TotalAssist heart-failure health-equity fund (open when checked).',
        'Any diagnosis → AstraZeneca Direct\'s $35-per-30-tablets cash option (call ASPN Pharmacies at 1-844-692-9633), and ask your pharmacist whether generic dapagliflozin is cheaper on your plan.',
        'Limited income and resources → Medicare Extra Help through Social Security.',
        'Type 2 diabetes or kidney disease → sign up for TotalAssist and HealthWell alerts; those funds were closed when checked.',
      ],
    },
    {
      title: 'Check whether applications are currently open',
      body:
        'Farxiga is listed in TotalAssist\'s medication index and on HealthWell\'s Type 2 Diabetes and heart-failure fund pages, but a listing does not mean funding is available. On the day we checked, only the TotalAssist heart-failure health-equity fund was open. Status changes without notice.',
      bullets: [
        'TotalAssist: the fund list at totalassist.org/funds shows "Open" or "Closed" for every fund.',
        'HealthWell: the Disease Funds page shows each fund\'s status; closed funds reopen as money is replenished.',
        'AZ&Me: closed to new Farxiga patients — no need to apply.',
      ],
    },
    {
      title: 'Check eligibility',
      body: 'Each program sets its own rules. For Farxiga on August 26, 2026, these are the ones that decide your application:',
      bullets: [
        'TotalAssist heart-failure health-equity fund: government insurance (Medicare, Medicaid or TRICARE) covering Farxiga; household income at or below 500% of the federal poverty level, adjusted for local cost of living; a heart-failure diagnosis in treatment; and a home zip code the fund serves.',
        'HealthWell Type 2 Diabetes fund (when it reopens): insurance covering part of the drug and household income up to 300% FPL; the Medicare Access heart-failure funds allow up to 500% FPL.',
        'AstraZeneca Direct: a valid prescription; ask whether Part D enrollees qualify for the $35 price.',
        'Extra Help: income below about $23,940 a year (one person) or $32,460 (couple) and countable resources limited to $18,090 or $36,100 in 2026.',
      ],
    },
    {
      title: 'Gather your information',
      body: 'Have these ready before you start — the TotalAssist application is designed to be finished in one sitting of about 15 minutes.',
      bullets: [
        'Medicare card and your Part D / Medicare Advantage drug-plan card (carrier, plan type, policy ID, group number); Medigap or secondary insurance if you have it.',
        'Your Farxiga prescription: strength and dose, plus your prescriber\'s name, phone and address.',
        'Diagnosis (heart failure, type 2 diabetes or CKD) and the date of diagnosis if within the past 6 months.',
        'Household size and annual household income; proof of income (tax return, Social Security or pension statements, pay stubs) is due within 30 days of a TotalAssist approval.',
        'Your copay or coinsurance amounts for Farxiga.',
        'Social Security number (TotalAssist and HealthWell both ask for it).',
      ],
    },
    {
      title: 'Complete the application',
      body: 'Who fills out what:',
      bullets: [
        'TotalAssist: you complete the online application (or call 866-512-3861); Patient Advocate Foundation verifies your diagnosis and treatment plan directly with your provider and verifies income automatically.',
        'HealthWell (when open): you apply online or by phone; your physician, nurse practitioner or physician assistant verifies the diagnosis by signature.',
        'AstraZeneca Direct: you contact ASPN Pharmacies; your prescriber supplies the prescription.',
        'Extra Help: you (or someone helping you) apply through Social Security — online, by phone at 1-800-772-1213, or at a local office. Never pay anyone to file it.',
      ],
    },
    {
      title: 'Submit and wait for a determination',
      body: 'What to expect after you submit:',
      bullets: [
        'TotalAssist: an instant decision when you click Submit; the grant then pays eligible costs up to the award.',
        'HealthWell: a decision after your provider verifies the diagnosis; assistance is issued as a pharmacy card for the Type 2 Diabetes fund.',
        'AstraZeneca Direct: ASPN Pharmacies confirms eligibility and your cost, then arranges dispensing.',
        'Extra Help: Social Security notifies you by mail; if approved, your Part D plan applies the lower copays.',
      ],
    },
    {
      title: 'If the program is closed or you don\'t qualify',
      body: 'Do not stop at "closed." Farxiga has more fallback routes than most drugs because generic dapagliflozin now exists:',
      bullets: [
        'Sign up for TotalAssist and HealthWell fund alerts — there is no waitlist, so being notified first matters.',
        'Ask your pharmacist and Part D plan what generic dapagliflozin costs on your formulary; if Farxiga is required, your doctor can request a formulary exception.',
        'Apply for Extra Help even if you think you earn too much — the limits are higher than many people expect.',
        'Ask your doctor\'s office; many practices have staff who handle assistance applications routinely.',
        'Use the Medicare Prescription Payment Plan to spread this year\'s costs over monthly payments.',
        'Call AltaMedicare — we\'ll check every route above with you, free.',
      ],
    },
  ],
  documentsNeeded: [
    ...CHECKLIST_MEDICARE,
    { item: 'Copay or coinsurance amounts for Farxiga', note: 'TotalAssist asks for them' },
    { item: 'Social Security number', note: 'TotalAssist and HealthWell' },
    { item: 'Medigap or secondary insurance details', note: 'TotalAssist, if applicable' },
    { item: 'Your home zip code', note: 'decides eligibility for the TotalAssist heart-failure health-equity fund' },
  ],
  ifUnavailable: [
    {
      text: 'Ask your pharmacist whether generic dapagliflozin is on your plan and what it costs — AstraZeneca cites generic availability as the reason it is retiring Farxiga assistance.',
      href: '/medicare-formulary-lookup.html',
      label: 'Formulary lookup',
    },
    ...standardAlternatives('Farxiga'),
  ],
  faqs: [
    {
      question: 'Can Medicare help pay for Farxiga?',
      answer:
        'Medicare Part D and Medicare Advantage drug plans generally cover Farxiga for its approved uses, and since January 1, 2026 Medicare pays a negotiated Maximum Fair Price of $178.50 for a 30-day supply. Your own copay depends on your plan\'s tier and cost-sharing, and total out-of-pocket Part D costs are capped at $2,100 in 2026. If your income and resources are limited, <a href="/blog/extra-help-explained.html">Medicare Extra Help</a> can lower a covered brand-name copay to about $12.65.',
    },
    {
      question: 'Is there a Farxiga patient assistance program?',
      answer:
        'AstraZeneca\'s AZ&Me program covered Farxiga until 2026, but effective May 1, 2026 it stopped accepting new Farxiga patients. Patients already enrolled keep assistance through December 31, 2026 (last refill request December 15, 2026), with no exceptions or extensions. AZ&Me now directs Farxiga patients to independent nonprofit funds and to AstraZeneca Direct\'s $35-per-30-tablet cash option.',
    },
    {
      question: 'Can I use the Farxiga savings card if I have Medicare?',
      answer:
        'No. AstraZeneca\'s terms exclude patients enrolled in Medicare Part D, Medicaid, Medigap, VA, DoD and TRICARE, and specifically say you may not use the card even if you choose to be processed as a cash-paying patient. Federal anti-kickback rules are the reason manufacturer copay cards exclude government insurance.',
    },
    {
      question: 'Is there a charitable grant for Farxiga right now?',
      answer:
        'When we checked on August 26, 2026, Farxiga was listed by TotalAssist (type 2 diabetes, heart failure, CKD and cardiomyopathy funds) and HealthWell (Type 2 Diabetes and two heart-failure Medicare Access funds), but every one of those funds was closed to new applicants except TotalAssist\'s heart-failure health-equity fund, which is limited to certain zip codes. Sign up for fund notifications so you hear when one reopens.',
    },
    {
      question: 'What is the $35 Farxiga price?',
      answer:
        'AstraZeneca Direct (azpatientdirect.com) lists Farxiga at $35.00 per 30 tablets as a direct-purchase, self-pay option dispensed through ASPN Pharmacies, with a note that offers vary based on eligibility criteria. The page does not state whether Medicare Part D enrollees qualify — call 1-844-692-9633 to ask. A cash purchase outside your plan generally will not count toward your Part D out-of-pocket cap.',
    },
    {
      question: 'Is there a generic for Farxiga?',
      answer:
        'AstraZeneca states that several generic equivalents of Farxiga (dapagliflozin) became available beginning April 2026, and cites that as the reason it is removing Farxiga from AZ&Me. Ask your pharmacist and your Part D plan whether generic dapagliflozin is on your formulary and what it costs — for many people it will be the simplest way to lower the bill.',
    },
    {
      question: 'Can my doctor\'s office apply for me?',
      answer:
        'For TotalAssist you (the patient) complete the application, and Patient Advocate Foundation then verifies your diagnosis and treatment plan with your doctor directly. HealthWell requires your provider\'s signature to verify the diagnosis. Many practices have staff who help with these applications — ask. AltaMedicare can also sit down with you and walk through them, free.',
    },
    {
      question: 'What happens if the fund is closed?',
      answer:
        'A closed fund can reopen when funding is replenished — HealthWell says so explicitly, and TotalAssist offers text, email or phone notifications with no waitlist or queue. While you wait: check generic dapagliflozin on your plan, apply for Extra Help if your income and resources are limited, consider the AstraZeneca Direct cash price, and ask your doctor about a formulary exception. See <a href="/prescription-drug-assistance.html">all prescription assistance options</a>.',
    },
  ],
  relatedMedications: ['jardiance', 'ozempic', 'mounjaro', 'entresto'],
  relatedResources: [
    { href: '/prescription-drug-assistance.html', label: 'Prescription Drug Assistance on Medicare', blurb: 'Hub: every program and medication guide' },
    { href: '/blog/does-medicare-cover-farxiga.html', label: 'Does Medicare Cover Farxiga?', blurb: 'Coverage, tiers and prior authorization' },
    { href: '/blog/extra-help-explained.html', label: 'Medicare Extra Help (Part D Low-Income Subsidy)', blurb: '2026 limits and how to apply' },
    { href: '/prescription-drug-plans.html', label: 'Prescription Drug Plans (Part D)', blurb: 'Compare plans that cover Farxiga' },
  ],
  sources: [
    label,
    azmeUpdates,
    azmeEligibility,
    farxigaSavings,
    azDirect,
    SRC.cmsMfp2026,
    SRC.medicare2026Guide,
    SRC.medicareDrugCosts,
    SRC.totalAssistFunds,
    SRC.totalAssistApply,
    SRC.totalAssistNotify,
    SRC.healthWellT2D,
    SRC.healthWellCHF,
    SRC.oigCoupons,
  ],
  // Per-record verification date (P1 cleanup, 2026-08-26). Deliberately a
  // literal, not the shared CHECKED constant: re-verifying one medication
  // must move one date, not all sixteen. Bump this when you re-read this
  // record's sources; `checked` on each source records the research window.
  lastVerified: '2026-08-26',
  datePublished: '2026-06-30',
  video: {
    title: 'How to Apply for Farxiga Assistance',
    status: 'coming-soon',
    description: 'A short walkthrough of where to start, how to check eligibility, what to gather, and what to do if a fund is closed.',
  },
  description_meta:
    'How to find financial assistance for Farxiga (dapagliflozin): AZ&Me status, the $35 AstraZeneca Direct option, TotalAssist and HealthWell fund status, and Medicare Extra Help — verified August 2026.',
};

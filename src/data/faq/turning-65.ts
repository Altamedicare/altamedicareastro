import type { Faq } from "../faqTypes";

export const faqs: Faq[] = [
  {
    q: "What do I need to do when I turn 65?",
    a: "Around your 65th birthday you should decide which parts of Medicare to take and when. Most people enroll in premium-free Part A, then weigh Part B, a Part D drug plan, and whether to add a Medicare Advantage or Medigap plan. If you have active employer coverage you may be able to delay Part B without penalty. A simple checklist keeps the steps in order.",
    links: [
      { href: "/blog/medicare-checklist-turning-65.html", label: "Medicare Checklist for Turning 65" },
      { href: "/turning-65.html", label: "Turning 65 Guide" },
    ],
    tools: ["timeline", "eligibility"],
  },
  {
    q: "Do I have to sign up for Medicare at 65?",
    a: "You are not required to take everything at 65, but most people enroll in premium-free Part A since it costs nothing. Part B is optional and can be delayed without penalty only if you have active coverage from a current employer with 20 or more employees. Without that protection, delaying Part B triggers a lifelong late penalty of 10% for each full 12 months you go without it.",
    links: [
      { href: "/blog/can-i-delay-medicare-part-b.html", label: "Can I Delay Medicare Part B?" },
      { href: "/blog/medicare-and-employer-coverage-after-65.html", label: "Medicare and Employer Coverage After 65" },
    ],
    tools: ["eligibility", "penalty"],
  },
  {
    q: "Can I keep my employer coverage after 65?",
    a: "Yes. If you or your spouse is still actively working for an employer with 20 or more employees, you can keep that group plan and delay Part B without a late penalty. When the job or coverage ends, you get an 8-month Special Enrollment Period to add Part B. COBRA and retiree coverage do not count as active coverage, so do not rely on them to delay.",
    links: [
      { href: "/blog/medicare-and-employer-coverage-after-65.html", label: "Medicare and Employer Coverage After 65" },
      { href: "/blog/special-enrollment-period-explained.html", label: "Special Enrollment Period Explained" },
    ],
    tools: ["eligibility", "timeline"],
  },
  {
    q: "When does my Initial Enrollment Period start?",
    a: "Your Initial Enrollment Period is a 7-month window built around your 65th birthday. It starts 3 months before the month you turn 65, includes your birthday month, and ends 3 months after. Signing up in the first 3 months means coverage can start the month you turn 65. Missing this window can lead to penalties and gaps in coverage.",
    links: [
      { href: "/blog/initial-enrollment-period-explained.html", label: "Initial Enrollment Period Explained" },
    ],
    tools: ["timeline", "countdown"],
  },
  {
    q: "Should I take Part A if I am still working?",
    a: "Most people take premium-free Part A at 65 even while working, since it adds hospital coverage at no cost. The big exception is if you contribute to a Health Savings Account: enrolling in any part of Medicare, including Part A, ends your ability to make HSA contributions. If you want to keep funding an HSA, you may choose to delay Part A while you have employer coverage.",
    links: [
      { href: "/blog/medicare-and-employer-coverage-after-65.html", label: "Medicare and Employer Coverage After 65" },
    ],
    tools: ["eligibility"],
  },
  {
    q: "Can I keep contributing to an HSA after enrolling in Medicare?",
    a: "No. Once you enroll in any part of Medicare, including premium-free Part A, you can no longer make new contributions to a Health Savings Account. You can still use the money already in the account for qualified expenses, but new deposits must stop. If you plan to keep contributing, you may need to delay Medicare enrollment while you have qualifying employer coverage.",
    links: [
      { href: "/blog/can-i-delay-medicare-part-b.html", label: "Can I Delay Medicare Part B?" },
    ],
    tools: ["eligibility"],
  },
  {
    q: "When should I start planning for Medicare?",
    a: "Start planning about 3 to 6 months before you turn 65, since your Initial Enrollment Period opens 3 months before your birthday month. Early planning gives you time to compare Part D, Medicare Advantage, and Medigap options and to confirm whether your employer coverage lets you delay Part B. A countdown can help you track each deadline so nothing slips.",
    links: [
      { href: "/blog/medicare-timeline-explained.html", label: "Medicare Timeline Explained" },
      { href: "/blog/medicare-checklist-turning-65.html", label: "Medicare Checklist for Turning 65" },
    ],
    tools: ["countdown", "timeline"],
  },
  {
    q: "Does Medicare start automatically at 65?",
    a: "It depends on Social Security. If you are already collecting Social Security or Railroad Retirement benefits, you are usually enrolled automatically in Part A and Part B starting the month you turn 65. If you are not yet collecting those benefits, enrollment is not automatic and you must actively sign up during your Initial Enrollment Period.",
    links: [
      { href: "/blog/initial-enrollment-period-explained.html", label: "Initial Enrollment Period Explained" },
      { href: "/blog/medicare-timeline-explained.html", label: "Medicare Timeline Explained" },
    ],
    tools: ["timeline", "eligibility"],
  },
  {
    q: "What is the first step to enrolling at 65?",
    a: "The first step is confirming your eligibility and your exact Initial Enrollment Period dates, which run for 7 months around your 65th birthday. From there you decide on premium-free Part A, whether to take Part B now or delay it because of active employer coverage, and which drug plan fits. Checking eligibility and your timeline first keeps the rest of the process simple.",
    links: [
      { href: "/blog/medicare-checklist-turning-65.html", label: "Medicare Checklist for Turning 65" },
      { href: "/blog/initial-enrollment-period-explained.html", label: "Initial Enrollment Period Explained" },
    ],
    tools: ["eligibility", "timeline"],
  },
  {
    q: "What happens if I am not collecting Social Security yet at 65?",
    a: "If you are not yet receiving Social Security benefits at 65, Medicare does not start automatically. You must actively sign up for Part A and Part B during your 7-month Initial Enrollment Period, usually through Social Security. Acting during this window avoids lifelong late penalties and coverage gaps, so it helps to mark your dates early with a countdown.",
    links: [
      { href: "/blog/initial-enrollment-period-explained.html", label: "Initial Enrollment Period Explained" },
      { href: "/blog/can-i-delay-medicare-part-b.html", label: "Can I Delay Medicare Part B?" },
    ],
    tools: ["countdown", "eligibility"],
  },
];

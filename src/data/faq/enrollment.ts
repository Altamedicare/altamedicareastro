import type { Faq } from "../faqTypes";

export const faqs: Faq[] = [
  {
    q: "What is the Initial Enrollment Period?",
    a: "Your Initial Enrollment Period (IEP) is the 7-month window around your 65th birthday: the 3 months before your birthday month, the month itself, and the 3 months after. This is when most people first sign up for Medicare Part A and Part B. Enrolling before your birthday month helps your coverage start on time and avoids gaps.",
    links: [
      { href: "/blog/initial-enrollment-period-explained.html", label: "Initial Enrollment Period Explained" },
      { href: "/blog/medicare-timeline-explained.html", label: "Medicare Timeline Explained" },
    ],
    tools: ["timeline", "eligibility", "countdown"],
  },
  {
    q: "Can I delay Part B without a penalty?",
    a: "Yes, but only if you have active employer coverage through a job where you or your spouse still work and the employer has 20 or more employees. That coverage lets you delay Part B penalty-free and get a Special Enrollment Period later. COBRA, retiree plans, and VA benefits do NOT count, so delaying Part B with those can trigger a lifelong penalty.",
    links: [
      { href: "/blog/can-i-delay-medicare-part-b.html", label: "Can I Delay Medicare Part B?" },
      { href: "/blog/medicare-and-employer-coverage-after-65.html", label: "Medicare and Employer Coverage After 65" },
    ],
    tools: ["eligibility", "penalty"],
  },
  {
    q: "What is a Special Enrollment Period?",
    a: "A Special Enrollment Period (SEP) is a window to sign up for Medicare or change plans outside the normal dates, triggered by a life event. Common triggers include losing employer coverage, moving out of your plan's service area, or qualifying for help paying costs. SEPs let you enroll without a late penalty when you act within the allowed time.",
    links: [
      { href: "/blog/special-enrollment-period-explained.html", label: "Special Enrollment Period Explained" },
    ],
    tools: ["eligibility", "timeline"],
  },
  {
    q: "What happens if I miss Medicare enrollment?",
    a: "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you may have to wait for the General Enrollment Period (January 1 to March 31) to sign up. You could also owe lifelong late penalties for Part B and Part D. Acting quickly when you first become eligible is the best way to avoid gaps and added costs.",
    links: [
      { href: "/blog/what-happens-if-you-miss-medicare-enrollment.html", label: "What Happens If You Miss Medicare Enrollment" },
      { href: "/blog/medicare-late-enrollment-penalties.html", label: "Medicare Late Enrollment Penalties" },
    ],
    tools: ["penalty", "timeline"],
  },
  {
    q: "What is the General Enrollment Period?",
    a: "The General Enrollment Period runs from January 1 to March 31 each year. It is for people who missed their Initial Enrollment Period and do not qualify for a Special Enrollment Period to sign up for Part A and Part B. Coverage begins the month after you enroll, and you may still owe a late enrollment penalty.",
    links: [
      { href: "/blog/general-enrollment-period-explained.html", label: "General Enrollment Period Explained" },
    ],
    tools: ["timeline", "penalty"],
  },
  {
    q: "What is the Annual Enrollment Period?",
    a: "The Annual Enrollment Period (AEP) runs from October 15 to December 7 each year. During this time you can join, switch, or drop a Medicare Advantage plan or a Part D drug plan, with changes taking effect January 1. It is the main yearly chance to review your coverage and make sure your plan still fits your needs.",
    links: [
      { href: "/blog/annual-enrollment-period-explained.html", label: "Annual Enrollment Period Explained" },
    ],
    tools: ["timeline"],
  },
  {
    q: "What is the Medicare Advantage Open Enrollment Period?",
    a: "The Medicare Advantage Open Enrollment Period runs from January 1 to March 31 each year. If you are already in a Medicare Advantage plan, you can switch to a different Medicare Advantage plan or drop it and return to Original Medicare (with a Part D plan). You can make only one change during this period, and it is not for people on Original Medicare alone.",
    links: [
      { href: "/blog/annual-enrollment-period-explained.html", label: "Annual Enrollment Period Explained" },
    ],
    tools: ["timeline"],
  },
  {
    q: "When can I change my Medicare plan?",
    a: "You can change Medicare Advantage or Part D plans during the Annual Enrollment Period (October 15 to December 7). If you have a Medicare Advantage plan, you also get one change during the Medicare Advantage Open Enrollment Period (January 1 to March 31). Outside these windows, you generally need a Special Enrollment Period triggered by a qualifying life event.",
    links: [
      { href: "/blog/annual-enrollment-period-explained.html", label: "Annual Enrollment Period Explained" },
      { href: "/blog/special-enrollment-period-explained.html", label: "Special Enrollment Period Explained" },
    ],
    tools: ["timeline", "eligibility"],
  },
  {
    q: "How do I sign up for Medicare?",
    a: "You can sign up for Medicare online at the Social Security website, by phone with Social Security, or in person at a local office. Many people enroll during their Initial Enrollment Period around age 65. If you already get Social Security benefits, you may be enrolled in Part A and Part B automatically when you turn 65.",
    links: [
      { href: "/blog/initial-enrollment-period-explained.html", label: "Initial Enrollment Period Explained" },
      { href: "/blog/medicare-timeline-explained.html", label: "Medicare Timeline Explained" },
    ],
    tools: ["eligibility", "timeline", "countdown"],
  },
  {
    q: "Do I have to enroll in Medicare at 65 if I am still working?",
    a: "Not always. If you have active coverage through a current employer with 20 or more employees, you can usually delay Part B without a penalty and enroll later through a Special Enrollment Period. Many people still take premium-free Part A at 65. If your employer has fewer than 20 employees, Medicare often becomes primary, so check before delaying.",
    links: [
      { href: "/blog/medicare-and-employer-coverage-after-65.html", label: "Medicare and Employer Coverage After 65" },
      { href: "/blog/can-i-delay-medicare-part-b.html", label: "Can I Delay Medicare Part B?" },
    ],
    tools: ["eligibility", "penalty"],
  },
  {
    q: "What is the Part B late enrollment penalty?",
    a: "The Part B late enrollment penalty adds 10% to your Part B premium for each full 12-month period you could have had Part B but did not enroll. The 2026 Part B premium is $202.90 per month, and the penalty is added on top for as long as you have Part B. You can avoid it by enrolling on time or keeping qualifying employer coverage.",
    links: [
      { href: "/blog/medicare-late-enrollment-penalties.html", label: "Medicare Late Enrollment Penalties" },
      { href: "/blog/can-i-delay-medicare-part-b.html", label: "Can I Delay Medicare Part B?" },
    ],
    tools: ["penalty"],
  },
  {
    q: "What is the Part D late enrollment penalty?",
    a: "The Part D late enrollment penalty applies if you go 63 or more days without creditable drug coverage after your Initial Enrollment Period. It adds 1% of the national base premium ($38.99 in 2026) for each full month you went without coverage, and it is added to your Part D premium permanently. Keeping creditable coverage or enrolling on time avoids it.",
    links: [
      { href: "/blog/medicare-late-enrollment-penalties.html", label: "Medicare Late Enrollment Penalties" },
    ],
    tools: ["penalty"],
  },
  {
    q: "Is Medicare enrollment automatic?",
    a: "It depends. If you already receive Social Security or Railroad Retirement benefits before turning 65, you are usually enrolled in Part A and Part B automatically, with your card arriving before your birthday. If you are not yet drawing those benefits, enrollment is not automatic and you must sign up yourself during your Initial Enrollment Period.",
    links: [
      { href: "/blog/initial-enrollment-period-explained.html", label: "Initial Enrollment Period Explained" },
      { href: "/blog/medicare-timeline-explained.html", label: "Medicare Timeline Explained" },
    ],
    tools: ["eligibility", "timeline"],
  },
  {
    q: "What is creditable coverage?",
    a: "Creditable coverage is health or drug coverage that is at least as good as Medicare's standard benefit. For Part D, having creditable drug coverage (such as from a current employer plan) means you can delay Part D without a late penalty. Your plan must tell you each year whether it is creditable, so keep those notices in case you need to prove it.",
    links: [
      { href: "/blog/medicare-late-enrollment-penalties.html", label: "Medicare Late Enrollment Penalties" },
      { href: "/blog/medicare-and-employer-coverage-after-65.html", label: "Medicare and Employer Coverage After 65" },
    ],
    tools: ["penalty"],
  },
  {
    q: "What is the 8-month Special Enrollment Period after employer coverage ends?",
    a: "When your active employer coverage (or your spouse's) ends, you get an 8-month Special Enrollment Period to sign up for Part B without a late penalty. This window starts the month after the employment or coverage ends, whichever comes first. COBRA and retiree coverage do not extend it, so enroll promptly to avoid a gap and lifelong penalties.",
    links: [
      { href: "/blog/special-enrollment-period-explained.html", label: "Special Enrollment Period Explained" },
      { href: "/blog/medicare-and-employer-coverage-after-65.html", label: "Medicare and Employer Coverage After 65" },
    ],
    tools: ["eligibility", "timeline", "penalty"],
  },
];

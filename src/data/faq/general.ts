import type { Faq } from "../faqTypes";

export const faqs: Faq[] = [
  {
    q: "What are the parts of Medicare (A, B, C, and D)?",
    a: "Medicare has four parts. Part A covers inpatient hospital, skilled nursing, and hospice care. Part B covers outpatient and doctor services. Part C, called Medicare Advantage, is a private plan that bundles A and B (and usually D) together. Part D covers prescription drugs. Most people combine these to build the coverage they need.",
    links: [
      { href: "/medicare-basics.html", label: "Medicare Basics" },
      { href: "/blog/which-medicare-plan-is-right-for-me.html", label: "Which Medicare Plan Is Right for Me?" },
    ],
    tools: ["quiz", "glossary"],
  },
  {
    q: "What is Original Medicare?",
    a: "Original Medicare is the federal program made up of Part A (hospital) and Part B (medical). You can see any doctor or hospital nationwide that accepts Medicare, with no networks or referrals. Original Medicare has no out-of-pocket maximum, so many people add a Medicare Supplement (Medigap) policy and a Part D drug plan, or choose Medicare Advantage instead.",
    links: [
      { href: "/medicare-basics.html", label: "Medicare Basics" },
      { href: "/medicare-supplement.html", label: "Medicare Supplement Plans" },
      { href: "/blog/medicare-advantage-vs-medigap.html", label: "Medicare Advantage vs. Medigap" },
    ],
    tools: ["glossary"],
  },
  {
    q: "What is the difference between Medicare and Medicaid?",
    a: "Medicare is a federal health program based mainly on age (65+) or disability, regardless of income. Medicaid is a joint federal and state program based on income and resources. They cover different things, and some people qualify for both at once, called dual eligibility, which can sharply reduce or eliminate out-of-pocket costs.",
    links: [
      { href: "/dual-eligible.html", label: "Dual-Eligible Coverage" },
      { href: "/blog/which-medicare-plan-is-right-for-me.html", label: "Which Medicare Plan Is Right for Me?" },
    ],
    tools: ["glossary", "eligibility"],
  },
  {
    q: "Who is eligible for Medicare?",
    a: "Most people qualify for Medicare at age 65 if they or a spouse paid Medicare taxes for at least 10 years. You can also qualify before 65 after 24 months of Social Security disability benefits, or right away with ALS or end-stage renal disease. U.S. citizens and certain lawful permanent residents are eligible. Use the eligibility tool to confirm your dates.",
    links: [
      { href: "/medicare-basics.html", label: "Medicare Basics" },
      { href: "/blog/which-medicare-plan-is-right-for-me.html", label: "Which Medicare Plan Is Right for Me?" },
    ],
    tools: ["eligibility", "quiz"],
  },
  {
    q: "Does Medicare cover dental, vision, and hearing?",
    a: "Original Medicare (Parts A and B) does not cover routine dental, vision, or hearing care such as cleanings, eyeglasses, or hearing aids. It only covers these in limited medical situations, like an eye exam tied to diabetes or surgery after an injury. Many Medicare Advantage plans add some dental, vision, and hearing benefits, so it pays to compare what each plan includes.",
    links: [
      { href: "/dental-vision-hearing.html", label: "Dental, Vision and Hearing" },
      { href: "/medicare-advantage.html", label: "Medicare Advantage Plans" },
    ],
    tools: ["quiz"],
  },
  {
    q: "Does Medicare cover long-term care?",
    a: "Medicare does not pay for long-term custodial care, such as help with bathing, dressing, or eating in a nursing home or assisted living, when that is the only care you need. It does cover short-term skilled care, like rehab in a skilled nursing facility after a qualifying hospital stay. Long-term custodial care is generally paid through Medicaid, private long-term care insurance, or personal funds.",
    links: [
      { href: "/medicare-basics.html", label: "Medicare Basics" },
      { href: "/dual-eligible.html", label: "Dual-Eligible Coverage" },
    ],
    tools: ["glossary"],
  },
  {
    q: "What does Medicare Part A cover?",
    a: "Part A is hospital insurance. It covers inpatient hospital stays, skilled nursing facility care after a qualifying hospital stay, hospice, and some home health care. Most people pay no premium for Part A because they worked and paid Medicare taxes for at least 10 years. In 2026 the inpatient hospital deductible is $1,736 per benefit period.",
    links: [
      { href: "/medicare-basics.html", label: "Medicare Basics" },
      { href: "/blog/how-much-does-medicare-cost.html", label: "How Much Does Medicare Cost?" },
    ],
    tools: ["glossary"],
  },
  {
    q: "What does Medicare Part B cover?",
    a: "Part B is medical insurance covering doctor visits, outpatient care, lab tests, durable medical equipment, and many preventive services. The standard Part B premium in 2026 is $202.90 per month, with a $283 annual deductible and then 20% coinsurance for most services. Original Medicare has no out-of-pocket maximum, which is why many people add supplemental coverage.",
    links: [
      { href: "/medicare-basics.html", label: "Medicare Basics" },
      { href: "/blog/how-much-does-medicare-cost.html", label: "How Much Does Medicare Cost?" },
    ],
    tools: ["cost-estimator", "glossary"],
  },
  {
    q: "Does it cost anything to work with a Medicare agent like Bret?",
    a: "No. Working with a licensed Medicare agent like Bret is free to you. Agents are paid by the insurance carriers, not by you, and plan premiums are set by Medicare and the carriers, so they are the exact same whether you enroll with an agent or on your own. You get personal guidance and ongoing help at no added cost.",
    links: [
      { href: "/about.html", label: "About Bret" },
      { href: "/contact.html", label: "Contact Bret" },
    ],
    tools: ["quiz"],
  },
  {
    q: "How do I get free help with Medicare in Utah?",
    a: "You can contact Bret Swope, a licensed Medicare agent in Orem, Utah, for free one-on-one guidance comparing your options. You can also reach Utah's State Health Insurance Assistance Program (SHIP), which offers free, unbiased Medicare counseling. Both are no-cost ways to get answers before you enroll or change plans.",
    links: [
      { href: "/contact.html", label: "Contact Bret" },
      { href: "/about.html", label: "About Bret" },
    ],
    tools: ["eligibility", "glossary"],
  },
];

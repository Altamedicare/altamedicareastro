import type { Faq } from "../faqTypes";

export const faqs: Faq[] = [
  {
    q: "Does Medicare cover Ozempic?",
    a: "Yes, Medicare Part D plans generally cover Ozempic when it is prescribed to treat type 2 diabetes, which is its FDA-approved use. Medicare cannot cover Ozempic when it is prescribed purely for weight loss. Coverage details, prior authorization rules, and your cost depend on your specific Part D plan's formulary, so it is worth checking yours directly.",
    links: [
      { href: "/blog/does-medicare-cover-ozempic.html", label: "Does Medicare Cover Ozempic?" },
    ],
    tools: ["formulary", "drug-cost"],
  },
  {
    q: "Does Medicare cover Eliquis?",
    a: "Yes, Eliquis is a common blood thinner that is widely covered by Medicare Part D plans, though it sits on different tiers depending on the plan. Your monthly cost varies by plan, and prior authorization is not usually required. Because formularies and pricing differ, comparing plans can reveal meaningful savings on a drug taken long term like Eliquis.",
    links: [
      { href: "/blog/does-medicare-cover-eliquis.html", label: "Does Medicare Cover Eliquis?" },
    ],
    tools: ["formulary", "drug-cost"],
  },
  {
    q: "Does Medicare cover Jardiance?",
    a: "Yes, most Medicare Part D plans cover Jardiance for type 2 diabetes and for some heart and kidney conditions it is approved to treat. Some plans may require prior authorization or step therapy first. Your out-of-pocket cost depends on the plan's formulary tier, so checking your plan or comparing options helps you find the best price.",
    links: [
      { href: "/blog/does-medicare-cover-jardiance.html", label: "Does Medicare Cover Jardiance?" },
    ],
    tools: ["formulary", "drug-cost"],
  },
  {
    q: "Does Medicare cover insulin?",
    a: "Yes. Medicare Part D and Medicare Advantage drug plans cover insulin, and starting in 2026 your cost for a one-month supply of each covered insulin is capped at $35. There is no deductible applied to insulin. Insulin used with a traditional pump may instead be covered under Part B, also at the $35 monthly cap.",
    links: [
      { href: "/blog/does-medicare-cover-insulin.html", label: "Does Medicare Cover Insulin?" },
      { href: "/blog/medicare-35-dollar-insulin-cap.html", label: "The $35 Insulin Cap Explained" },
    ],
    tools: ["drug-cost"],
  },
  {
    q: "What is the $35 insulin cap?",
    a: "The $35 insulin cap limits what you pay for a one-month supply of each covered insulin product to no more than $35. It applies to insulin covered under Part D drug plans and to insulin used with a traditional pump under Part B. The Part D deductible does not apply, so you pay $35 even before meeting it.",
    links: [
      { href: "/blog/medicare-35-dollar-insulin-cap.html", label: "The $35 Insulin Cap Explained" },
      { href: "/blog/does-medicare-cover-insulin.html", label: "Does Medicare Cover Insulin?" },
    ],
    tools: ["drug-cost"],
  },
  {
    q: "What is prior authorization?",
    a: "Prior authorization is a rule that requires your plan to approve a drug before it will cover it. Your doctor must show the medication is medically necessary, often because it is expensive or has safety considerations. If the request is approved, the plan pays its share as usual. If it is denied, you can ask your doctor to appeal the decision.",
    links: [
      { href: "/blog/what-is-prior-authorization.html", label: "What Is Prior Authorization?" },
    ],
    tools: ["formulary"],
  },
  {
    q: "What is step therapy?",
    a: "Step therapy is a plan rule that asks you to try a lower-cost or preferred drug first before it will cover a more expensive alternative. If the first drug does not work or causes side effects, you can move up to the other medication. Your doctor can request an exception if stepping through is not appropriate for your health.",
    links: [
      { href: "/blog/what-is-step-therapy.html", label: "What Is Step Therapy?" },
    ],
    tools: ["formulary"],
  },
  {
    q: "What is a formulary?",
    a: "A formulary is the list of prescription drugs a Part D or Medicare Advantage drug plan covers. Each plan sets its own formulary, organizes drugs into tiers, and may apply rules like prior authorization or step therapy. Because formularies differ from plan to plan, checking that your medications are on a plan's list is one of the most important steps when choosing coverage.",
    links: [
      { href: "/prescription-drug-plans.html", label: "Prescription Drug Plans" },
    ],
    tools: ["formulary"],
  },
  {
    q: "What are drug tiers?",
    a: "Drug tiers are the cost levels a Part D plan uses to group covered medications. Lower tiers usually hold generic and preferred drugs with smaller copays, while higher tiers hold brand-name and specialty drugs that cost more. The same medication can sit on different tiers in different plans, which is why your price can vary a lot depending on the plan you choose.",
    links: [
      { href: "/prescription-drug-plans.html", label: "Prescription Drug Plans" },
    ],
    tools: ["formulary", "drug-cost"],
  },
  {
    q: "What is the $2,000 Part D out-of-pocket cap?",
    a: "Starting in 2025 and continuing in 2026, Part D limits what you pay out of pocket for covered prescription drugs to $2,000 per year. Once your spending reaches that amount, you pay nothing more for covered drugs for the rest of the year. This cap replaced the old coverage gap, often called the donut hole, which no longer exists.",
    links: [
      { href: "/blog/the-2000-drug-cap-explained.html", label: "The $2,000 Drug Cap Explained" },
      { href: "/blog/new-part-d-rules.html", label: "New Part D Rules" },
    ],
    tools: ["drug-cost", "cost-estimator"],
  },
  {
    q: "Does Medicare cover weight-loss drugs?",
    a: "No. By law, Medicare cannot cover drugs prescribed only for weight loss. However, some of these medications are covered when prescribed for a different approved condition, such as Wegovy to reduce cardiovascular risk, Zepbound for obstructive sleep apnea, or Ozempic and Mounjaro for type 2 diabetes. Coverage hinges on the diagnosis your doctor documents.",
    links: [
      { href: "/blog/does-medicare-cover-wegovy.html", label: "Does Medicare Cover Wegovy?" },
      { href: "/blog/does-medicare-cover-mounjaro.html", label: "Does Medicare Cover Mounjaro?" },
    ],
    tools: ["formulary"],
  },
  {
    q: "Does Medicare cover Wegovy?",
    a: "Medicare cannot cover Wegovy when it is prescribed solely for weight loss. It can be covered by Part D plans when prescribed to reduce the risk of heart attack and stroke in adults with heart disease who are overweight or obese, which is an FDA-approved use. Coverage and prior authorization rules depend on your specific plan.",
    links: [
      { href: "/blog/does-medicare-cover-wegovy.html", label: "Does Medicare Cover Wegovy?" },
    ],
    tools: ["formulary", "drug-cost"],
  },
  {
    q: "Does Medicare cover Mounjaro?",
    a: "Yes, Medicare Part D plans generally cover Mounjaro when it is prescribed to treat type 2 diabetes, which is its FDA-approved use. Medicare cannot cover it when prescribed only for weight loss. Many plans require prior authorization, and your cost depends on the plan's formulary, so it pays to confirm coverage before filling it.",
    links: [
      { href: "/blog/does-medicare-cover-mounjaro.html", label: "Does Medicare Cover Mounjaro?" },
    ],
    tools: ["formulary", "drug-cost"],
  },
  {
    q: "Does Medicare cover Humira?",
    a: "Yes, Humira is generally covered by Medicare Part D plans, typically on a specialty tier because it is a high-cost biologic. Plans often require prior authorization or step therapy before approving it. Thanks to the $2,000 annual out-of-pocket cap, your yearly cost for a drug like Humira is far more predictable than in past years.",
    links: [
      { href: "/blog/does-medicare-cover-humira.html", label: "Does Medicare Cover Humira?" },
      { href: "/blog/the-2000-drug-cap-explained.html", label: "The $2,000 Drug Cap Explained" },
    ],
    tools: ["formulary", "drug-cost"],
  },
  {
    q: "What is the Medicare Prescription Payment Plan?",
    a: "The Medicare Prescription Payment Plan lets you spread your out-of-pocket Part D drug costs across the year in monthly payments instead of paying all at once at the pharmacy. It is free to join, and the total you pay does not change. It can help if you face a large bill early in the year, especially for high-cost medications.",
    links: [
      { href: "/blog/new-part-d-rules.html", label: "New Part D Rules" },
      { href: "/blog/the-2000-drug-cap-explained.html", label: "The $2,000 Drug Cap Explained" },
    ],
    tools: ["cost-estimator"],
  },
  {
    q: "Do I need Part D if I do not take any prescriptions?",
    a: "Even with no current prescriptions, enrolling in Part D when you are first eligible is usually wise. If you go without creditable drug coverage and sign up later, you pay a permanent late penalty of 1% of the base premium for each month you delayed. A low-cost plan now protects you from that penalty and covers you if your needs change.",
    links: [
      { href: "/blog/new-part-d-rules.html", label: "New Part D Rules" },
      { href: "/prescription-drug-plans.html", label: "Prescription Drug Plans" },
    ],
    tools: ["penalty"],
  },
  {
    q: "Does Part D cover vaccines?",
    a: "Yes. Part D covers vaccines recommended for adults by the CDC's advisory committee, such as the shingles and RSV vaccines, at $0 cost to you with no deductible. Some vaccines, including flu, COVID-19, and pneumococcal, are instead covered under Part B at no cost. Between the two, your recommended adult vaccines are generally free.",
    links: [
      { href: "/blog/new-part-d-rules.html", label: "New Part D Rules" },
      { href: "/prescription-drug-plans.html", label: "Prescription Drug Plans" },
    ],
  },
  {
    q: "What is a coverage exception or appeal?",
    a: "A coverage exception is a request asking your plan to cover a drug it normally would not, or to waive a rule like step therapy or a tier restriction. Your doctor provides a statement explaining why it is medically necessary. If the plan denies your request, you have the right to appeal through several levels, and many appeals succeed.",
    links: [
      { href: "/blog/what-is-prior-authorization.html", label: "What Is Prior Authorization?" },
      { href: "/blog/what-is-step-therapy.html", label: "What Is Step Therapy?" },
    ],
    tools: ["formulary"],
  },
  {
    q: "What is the difference between Part B drugs and Part D drugs?",
    a: "Part B covers a limited set of drugs given in a clinical setting, such as infusions, injections administered by a provider, and some supplies. Part D covers the prescription drugs you fill at a pharmacy and take yourself at home. A few medications, like certain insulins used with a pump, can fall under either depending on how they are used.",
    links: [
      { href: "/blog/does-medicare-cover-insulin.html", label: "Does Medicare Cover Insulin?" },
      { href: "/prescription-drug-plans.html", label: "Prescription Drug Plans" },
    ],
    tools: ["drug-cost"],
  },
  {
    q: "How do I find a plan that covers my prescriptions?",
    a: "Start by making a list of your medications and doses, then compare each plan's formulary to confirm your drugs are covered and on an affordable tier. A cost estimator can total your expected yearly spending across premiums and copays. Because the right plan depends on your exact drugs, a licensed agent can help you compare options side by side.",
    links: [
      { href: "/prescription-drug-plans.html", label: "Prescription Drug Plans" },
      { href: "/blog/extra-help-explained.html", label: "Extra Help Explained" },
    ],
    tools: ["formulary", "drug-cost", "cost-estimator"],
  },
];

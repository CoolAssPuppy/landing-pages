import type { PricingPageConfig } from "@/types/page-config";

export const examplePricingPage: PricingPageConfig = {
  type: "pricing",
  slug: "example-pricing",
  metadata: {
    title: "ACME Platform Summer Sale - Up to 35% Off All Plans",
    description:
      "Get ACME Platform at our lowest prices ever. Limited-time summer sale with up to 35% off all plans. Build, deploy, and scale your applications for less.",
  },
  hero: {
    title: "Summer sale: save up to 35%",
    subtitle: "Our biggest discount of the year, for a limited time only",
    description:
      "Lock in these prices today and keep them for as long as your subscription is active. No hidden fees, no price increases, no surprises.",
    badge: "Limited time offer",
  },
  urgency: {
    targetDate: "2026-09-01T00:00:00Z",
    label: "Sale ends in",
    message: "Prices go back up when the timer runs out",
  },
  tiers: [
    {
      name: "Starter",
      description: "For individuals and small projects getting off the ground.",
      originalPrice: 29,
      salePrice: 19,
      period: "/mo",
      features: [
        "Up to 3 projects",
        "5 GB storage",
        "10,000 API requests per month",
        "Community support",
        "Basic analytics dashboard",
        "SSL certificates included",
      ],
      cta: {
        label: "Start free trial",
        href: "#",
        variant: "outline",
      },
    },
    {
      name: "Pro",
      description: "For growing teams that need more power and flexibility.",
      originalPrice: 79,
      salePrice: 49,
      period: "/mo",
      highlighted: true,
      badge: "Most Popular",
      features: [
        "Unlimited projects",
        "50 GB storage",
        "500,000 API requests per month",
        "Priority email support",
        "Advanced analytics and reporting",
        "Custom domains",
        "Team collaboration tools",
        "CI/CD integrations",
      ],
      cta: {
        label: "Start free trial",
        href: "#",
        variant: "default",
      },
    },
    {
      name: "Enterprise",
      description: "For organizations that need full control and dedicated support.",
      originalPrice: 199,
      salePrice: 149,
      period: "/mo",
      badge: "Best Value",
      features: [
        "Everything in Pro",
        "500 GB storage",
        "Unlimited API requests",
        "Dedicated account manager",
        "99.99% uptime SLA",
        "SOC 2 Type II compliance",
        "SSO and SAML authentication",
        "Custom contracts and invoicing",
        "On-call engineering support",
      ],
      cta: {
        label: "Contact sales",
        href: "#",
        variant: "outline",
      },
    },
  ],
  featureComparison: {
    title: "Compare plans side by side",
    columns: ["Starter", "Pro", "Enterprise"],
    rows: [
      { feature: "Projects", values: ["3", "Unlimited", "Unlimited"] },
      { feature: "Storage", values: ["5 GB", "50 GB", "500 GB"] },
      { feature: "API requests", values: ["10K/mo", "500K/mo", "Unlimited"] },
      { feature: "Custom domains", values: [false, true, true] },
      { feature: "Team members", values: ["1", "Up to 10", "Unlimited"] },
      { feature: "Analytics", values: ["Basic", "Advanced", "Advanced"] },
      { feature: "CI/CD integrations", values: [false, true, true] },
      { feature: "SSO / SAML", values: [false, false, true] },
      { feature: "Uptime SLA", values: ["99.9%", "99.95%", "99.99%"] },
      { feature: "Dedicated support", values: [false, false, true] },
    ],
  },
  socialProof: {
    stats: [
      { value: "12,000+", label: "Teams using ACME" },
      { value: "99.95%", label: "Average uptime" },
      { value: "4.8/5", label: "Customer satisfaction" },
      { value: "< 2 min", label: "Average deploy time" },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "Everything you need to know about the summer sale",
    items: [
      {
        question: "How long do the sale prices last?",
        answer:
          "Once you subscribe during the sale, you keep the discounted price for the entire duration of your subscription. The sale pricing is locked in as long as your plan remains active. If you cancel and re-subscribe later, standard pricing will apply.",
      },
      {
        question: "Can I upgrade or downgrade my plan later?",
        answer:
          "Yes. You can change your plan at any time from your account settings. If you upgrade during the sale period, you get the sale price on the new plan. Downgrades take effect at the start of your next billing cycle.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Every plan comes with a 14-day free trial. No credit card required to start. You will only be charged when the trial ends, and you can cancel at any time during the trial with no obligation.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, and American Express. Enterprise customers can also pay by invoice with net-30 terms. All payments are processed securely through Stripe.",
      },
      {
        question: "What happens when the sale ends?",
        answer:
          "When the countdown timer reaches zero, prices return to their standard rates for new subscribers. Existing subscribers who signed up during the sale keep their discounted pricing indefinitely.",
      },
    ],
  },
};

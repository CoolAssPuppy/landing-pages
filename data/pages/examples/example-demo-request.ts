import type { DemoRequestPageConfig } from "@/types/page-config";

export const exampleDemoRequestPage: DemoRequestPageConfig = {
  type: "demo-request",
  slug: "example-demo-request",
  metadata: {
    title: "See DataFlow Platform in Action - Book a Demo",
    description:
      "Get a personalized walkthrough of DataFlow Platform. See how leading teams use DataFlow to streamline their data pipelines and ship faster.",
  },
  hero: {
    title: "See DataFlow in action",
    subtitle: "Get a personalized walkthrough from our team",
    description:
      "In 30 minutes, our solutions engineers will show you how DataFlow can simplify your data pipelines, reduce infrastructure costs, and help your team move faster. You will see real workflows, ask questions, and leave with a clear picture of how DataFlow fits your stack.",
    badge: "Book a Demo",
  },
  form: {
    title: "Request a demo",
    subtitle: "Fill out the form and we will be in touch within one business day.",
    fields: [
      {
        name: "firstName",
        label: "First name",
        type: "text",
        placeholder: "Jane",
        required: true,
      },
      {
        name: "lastName",
        label: "Last name",
        type: "text",
        placeholder: "Doe",
        required: true,
      },
      {
        name: "email",
        label: "Work email",
        type: "email",
        placeholder: "jane@company.com",
        required: true,
      },
      {
        name: "company",
        label: "Company",
        type: "text",
        placeholder: "Your company name",
        required: true,
      },
    ],
    submitLabel: "Request Demo",
    successRedirect: "/example-demo-request/thank-you",
    hubspotPortalId: "00000000",
    hubspotFormId: "00000000-0000-0000-0000-000000000000",
    gdprText:
      "By submitting this form, you agree to our privacy policy and consent to being contacted about DataFlow products and services.",
    customerio: {
      eventName: "demo_request",
      metadata: {
        source: "landing-page",
        campaign: "dataflow-demo-2026",
      },
    },
  },
  valueProps: [
    {
      icon: "presentation",
      title: "Personalized walkthrough",
      description:
        "See DataFlow configured for your specific use case, not a generic slide deck. Our engineers tailor every demo to your stack and goals.",
    },
    {
      icon: "code",
      title: "Technical deep dive",
      description:
        "Go beyond the surface. Explore the query engine, connector library, and real-time streaming capabilities with a hands-on session.",
    },
    {
      icon: "git-merge",
      title: "Integration planning",
      description:
        "Walk through exactly how DataFlow connects to your existing databases, warehouses, and BI tools with minimal engineering effort.",
    },
    {
      icon: "trending-up",
      title: "ROI analysis",
      description:
        "Get a clear breakdown of time saved, infrastructure costs reduced, and team velocity gained based on your current data workflow.",
    },
  ],
  socialProof: {
    logos: [
      { name: "Stripe", src: "/images/logos/stripe.png" },
      { name: "Vercel", src: "/images/logos/vercel.png" },
      { name: "Notion", src: "/images/logos/notion.png" },
      { name: "Linear", src: "/images/logos/linear.png" },
      { name: "Figma", src: "/images/logos/figma.png" },
    ],
    stats: [
      { value: "500+", label: "Demos per month" },
      { value: "92%", label: "Demo to trial conversion" },
      { value: "4.9/5", label: "Average demo rating" },
    ],
  },
  customerQuote: {
    quote:
      "The demo completely changed how we thought about our data infrastructure. Within 30 minutes we had a clear migration plan and could see exactly how DataFlow would save us 20 hours a week in pipeline maintenance.",
    author: "Sarah Chen",
    role: "CTO, Meridian Analytics",
    avatar: "https://github.com/octocat.png",
  },
  faq: {
    title: "Common questions about the demo",
    items: [
      {
        question: "How long does the demo take?",
        answer:
          "Most demos run about 30 minutes, with an optional 15-minute Q&A at the end. We respect your time and keep things focused on what matters most to your team.",
      },
      {
        question: "Who should attend the demo?",
        answer:
          "We recommend including a technical lead or data engineer who can evaluate the platform, plus a stakeholder who understands your business requirements. Teams of 2-5 people get the most out of the session.",
      },
      {
        question: "What should I prepare before the demo?",
        answer:
          "Nothing is required, but it helps to have a rough idea of your current data stack, the volume of data you process, and the biggest pain points you want to solve. Our team will handle the rest.",
      },
    ],
  },
  ctaBanner: {
    title: "Ready to simplify your data pipelines?",
    description:
      "Join 2,000+ engineering teams that trust DataFlow to move data reliably and fast.",
    cta: {
      label: "Book a Demo",
      href: "#form",
    },
    secondaryCta: {
      label: "View Documentation",
      href: "#",
      variant: "outline",
    },
  },
};

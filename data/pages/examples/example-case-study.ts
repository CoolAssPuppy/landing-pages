import type { CaseStudyPageConfig } from "@/types/page-config";

export const exampleCaseStudyPage: CaseStudyPageConfig = {
  type: "case-study",
  slug: "example-case-study",
  metadata: {
    title: "How Acme Corp Reduced Deploy Time by 60% with DataFlow Platform",
    description:
      "Learn how Acme Corp transformed their deployment pipeline, cutting average deploy time from 45 minutes to 15 minutes while achieving 99.9% success rates.",
  },
  hero: {
    title: "How Acme Corp reduced deploy time by 60% with DataFlow Platform",
    subtitle: "From 45-minute manual deploys to seamless automated pipelines",
    description:
      "Acme Corp was losing engineering hours to slow, error-prone deployments. After adopting DataFlow Platform, they cut deploy time by 60%, virtually eliminated deployment failures, and saved over $200K per year.",
    badge: "Case Study",
    customerLogo: {
      src: "/images/logos/vercel.png",
      srcDark: "/images/logos/dark/vercel.png",
      alt: "Acme Corp logo",
    },
  },
  customer: {
    name: "Acme Corp",
    industry: "SaaS",
    size: "200-500 employees",
    location: "San Francisco, CA",
  },
  challenge: {
    title: "The challenge",
    description:
      "Acme Corp's engineering team was stuck in a deployment bottleneck. Every release required a 45-minute manual process involving three separate teams, hand-written deployment scripts, and a prayer that nothing would break in production. Deployments failed roughly 20% of the time, triggering rollbacks that consumed even more hours. Engineers dreaded release days. The slow, fragile pipeline was holding back the product roadmap and burning out the team. Leadership knew they needed to move faster, but every attempt to speed things up introduced more risk. They needed a solution that could automate their pipeline without sacrificing reliability.",
  },
  solution: {
    title: "The solution",
    description:
      "Acme Corp adopted DataFlow Platform to replace their manual deployment workflow with a fully automated CI/CD pipeline. The migration took two weeks, with DataFlow's onboarding team guiding them through configuration, testing, and a phased rollout. Within the first month, every production deployment ran through DataFlow's automated pipeline with built-in safeguards at every stage.",
    features: [
      {
        icon: "settings",
        title: "Automated testing",
        description:
          "Every commit triggers a full test suite across unit, integration, and end-to-end layers before code reaches staging.",
      },
      {
        icon: "globe",
        title: "Zero-downtime deploys",
        description:
          "Blue-green deployment strategy ensures users never experience interruption during releases, even for major updates.",
      },
      {
        icon: "shield",
        title: "Rollback protection",
        description:
          "Automatic health checks after each deploy. If anything fails, DataFlow rolls back to the last known good state in under 30 seconds.",
      },
    ],
  },
  results: {
    title: "The results",
    description:
      "Within 90 days of adopting DataFlow Platform, Acme Corp saw dramatic improvements across their deployment pipeline and engineering productivity.",
    metrics: [
      { value: "60%", label: "Faster deployments" },
      { value: "99.9%", label: "Deployment success rate" },
      { value: "15 min", label: "Average deploy time" },
      { value: "$200K", label: "Annual cost savings" },
    ],
  },
  customerQuote: {
    quote:
      "DataFlow Platform transformed how we ship software. Our engineers used to dread deployment days. Now deploys are a non-event -- they just work. We went from crossing our fingers on every release to shipping multiple times a day with complete confidence.",
    author: "Sarah Chen",
    role: "VP of Engineering, Acme Corp",
    avatar: "https://github.com/octocat.png",
    logo: "/images/logos/vercel.png",
    logoDark: "/images/logos/dark/vercel.png",
    logoAlt: "Acme Corp logo",
  },
  ctaBanner: {
    title: "Ready to transform your deployment pipeline?",
    description:
      "See how DataFlow Platform can help your team ship faster with fewer failures.",
    cta: {
      label: "Talk to Sales",
      href: "/contact-sales",
      variant: "default",
    },
    secondaryCta: {
      label: "See All Case Studies",
      href: "/case-studies",
      variant: "outline",
    },
  },
};

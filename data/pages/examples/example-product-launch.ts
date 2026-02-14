import type { ProductLaunchPageConfig } from "@/types/page-config";

export const exampleProductLaunchPage: ProductLaunchPageConfig = {
  type: "product-launch",
  slug: "example-product-launch",
  metadata: {
    title: "Announcing DataFlow Platform v3.0",
    description:
      "DataFlow Platform v3.0 is here. Real-time streaming, edge compute, and a completely rebuilt developer experience.",
  },
  badge: "Just Shipped",
  hero: {
    title: "DataFlow Platform v3.0",
    subtitle: "The biggest release yet",
    description:
      "Real-time streaming pipelines, edge compute nodes, and a completely rebuilt developer experience. DataFlow v3.0 is designed to handle the next generation of data-intensive applications.",
    ctas: [
      {
        label: "Get started",
        href: "#",
        variant: "default",
      },
      {
        label: "Read the docs",
        href: "#",
        variant: "secondary",
        external: true,
      },
    ],
  },
  video: {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "DataFlow v3.0 overview",
    subtitle: "See the new platform in action.",
  },
  features: [
    {
      title: "Headline features",
      subtitle: "Everything new in v3.0.",
      columns: 3,
      variant: "icons",
      items: [
        {
          icon: "zap",
          title: "Real-time streaming",
          description:
            "Process millions of events per second with sub-millisecond latency using our new streaming engine.",
        },
        {
          icon: "shield",
          title: "Zero-trust security",
          description:
            "End-to-end encryption, automatic key rotation, and granular role-based access controls built into every layer.",
        },
        {
          icon: "globe",
          title: "Global edge compute",
          description:
            "Deploy data pipelines to 40+ edge locations worldwide. Your data processing runs closer to where your users are.",
        },
      ],
    },
    {
      title: "Developer experience improvements",
      subtitle: "Ship faster with less friction.",
      columns: 3,
      variant: "cards",
      items: [
        {
          title: "Type-safe SDK",
          description:
            "A fully typed TypeScript SDK with autocomplete for every API surface, generated directly from our OpenAPI spec.",
        },
        {
          title: "Local dev environment",
          description:
            "Run the entire DataFlow stack locally with a single command. Hot-reload pipelines as you edit them.",
        },
        {
          title: "Built-in observability",
          description:
            "Structured logs, distributed traces, and pipeline metrics are available out of the box with zero configuration.",
        },
      ],
    },
  ],
  socialProof: {
    stats: [
      { value: "10K+", label: "Teams using DataFlow" },
      { value: "99.99%", label: "Platform uptime" },
      { value: "50ms", label: "Average latency" },
      { value: "4.9/5", label: "Developer satisfaction" },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "Everything you need to know about the v3.0 release.",
    items: [
      {
        question: "How do I migrate from v2 to v3?",
        answer:
          "We provide an automated migration CLI that handles the upgrade for most projects. Run `dataflow migrate` in your project root and follow the interactive prompts. The migration guide in our docs covers edge cases and manual steps for complex setups.",
      },
      {
        question: "Does v3.0 change the pricing?",
        answer:
          "No. All existing plans carry over at the same price. The new streaming and edge compute features are included in Pro and Enterprise tiers at no additional cost. Free-tier limits remain unchanged.",
      },
      {
        question: "Is v3.0 backwards compatible with v2 pipelines?",
        answer:
          "Yes. All v2 pipeline definitions continue to work without changes. The v2 API surface is fully supported and will remain available for at least 18 months. We recommend migrating at your own pace using our codemods.",
      },
      {
        question: "When will v2 reach end of life?",
        answer:
          "v2 will receive security patches and critical bug fixes for 18 months from the v3.0 release date. After that, v2 enters maintenance mode with security-only updates for an additional 6 months. We will communicate timelines well in advance.",
      },
    ],
  },
  ctaBanner: {
    title: "Ready to upgrade?",
    description:
      "Get started with DataFlow v3.0 today. Free for teams of up to five.",
    cta: {
      label: "Get started free",
      href: "#",
      variant: "default",
    },
    secondaryCta: {
      label: "Talk to sales",
      href: "#",
      variant: "outline",
    },
  },
};

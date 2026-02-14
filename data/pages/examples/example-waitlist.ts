import type { WaitlistPageConfig } from "@/types/page-config";

export const exampleWaitlistPage: WaitlistPageConfig = {
  type: "waitlist",
  slug: "example-waitlist",
  metadata: {
    title: "Sample Waitlist Page",
    description:
      "This is a sample waitlist page for demonstration purposes. It shows how to build a coming-soon landing page.",
  },
  hero: {
    title: "Acme Quantum Database",
    subtitle: "A totally fictional product",
    description:
      "This is a sample waitlist page. The product described here does not exist. It demonstrates the waitlist template layout with countdown timer, feature cards, and email capture.",
    badge: "Sample Page",
  },
  countdown: {
    targetDate: "2026-06-01T00:00:00Z",
    label: "Launching in",
  },
  features: [
    {
      icon: "sparkles",
      title: "Quantum entanglement sync",
      description:
        "Replicate data across parallel universes in under a planck time. (This is sample feature text.)",
    },
    {
      icon: "layers",
      title: "Telepathic schema design",
      description:
        "The database reads your mind and creates tables before you even think of them. (This is sample feature text.)",
    },
    {
      icon: "bug",
      title: "Time-travel debugging",
      description:
        "Go back in time and fix bugs before they happen. No flux capacitor required. (This is sample feature text.)",
    },
  ],
  form: {
    title: "Get early access",
    subtitle: "This is a sample form. It does not actually submit anywhere.",
    fields: [
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "you@company.com",
        required: true,
      },
      {
        name: "useCase",
        label: "Primary use case",
        type: "select",
        required: false,
        options: [
          { label: "Query generation", value: "query_generation" },
          { label: "Schema optimization", value: "schema_optimization" },
          { label: "Debugging", value: "debugging" },
          { label: "All of the above", value: "all" },
        ],
      },
    ],
    submitLabel: "Join Waitlist",
    successRedirect: "/example-waitlist/thank-you",

    // HubSpot: portal ID and form GUID from your HubSpot account.
    // Field names (email, useCase) must match HubSpot internal field names.
    hubspotPortalId: "00000000",
    hubspotFormId: "00000000-0000-0000-0000-000000000000",

    // Customer.io: event name and metadata for tracking this form submission.
    customerio: {
      eventName: "waitlist_signup",
      metadata: {
        product: "ai-assistant",
        source: "landing-page",
      },
    },
  },
  socialProof: {
    stats: [
      { value: "0", label: "On waitlist (sample)" },
      { value: "0", label: "Beta testers (sample)" },
      { value: "N/A", label: "Rating (sample)" },
    ],
  },
};

export const exampleWaitlistThankYouPage = {
  type: "thank-you" as const,
  slug: "example-waitlist/thank-you",
  metadata: {
    title: "Sample Thank You Page",
    description: "This is a sample thank you page for demonstration purposes.",
    noIndex: true,
  },
  hero: {
    title: "You're on the list!",
    subtitle: "This is a sample thank you page",
    description:
      "This is placeholder content for a waitlist thank you page. Replace it with your real confirmation messaging.",
  },
  cta: {
    label: "Back to Home",
    href: "#",
    variant: "default" as const,
    external: false,
  },
  secondaryContent: {
    title: "In the meantime",
    description:
      "Explore our resources and get ready for launch day.",
    ctas: [
      {
        label: "Read the docs",
        href: "#",
        variant: "outline" as const,
        external: false,
      },
      {
        label: "Start a project",
        href: "#",
        variant: "ghost" as const,
        external: false,
      },
    ],
  },
};

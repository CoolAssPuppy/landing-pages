import type { WebinarPageConfig, ThankYouPageConfig } from "@/types/page-config";

export const exampleWebinarPage: WebinarPageConfig = {
  type: "webinar",
  slug: "example-webinar",
  metadata: {
    title: "Building Scalable APIs with ACME",
    description:
      "Join our live webinar to learn how ACME Platform helps engineering teams build, deploy, and scale production-grade APIs in minutes.",
  },
  hero: {
    title: "Building Scalable APIs with ACME",
    subtitle: "A live technical deep-dive",
    description:
      "Learn how leading engineering teams use the ACME Platform to ship production-ready APIs faster. We will cover architecture patterns, performance tuning, and real-world case studies.",
    badge: "Live Webinar",
  },
  webinar: {
    date: "March 15, 2026",
    startTime: "11:00 AM PT / 2:00 PM ET",
    duration: "60 minutes",
    url: "https://zoom.us/j/1234567890",
  },
  speakers: [
    {
      name: "Barack Obama",
      role: "44th President of the United States",
      company: "Obama Foundation",
      bio: "Barack Obama served as the 44th President of the United States from 2009 to 2017. A vocal advocate for technology, education, and civic engagement, he continues to champion innovation through the Obama Foundation.",
    },
    {
      name: "Kamala Harris",
      role: "49th Vice President of the United States",
      company: "Office of the Vice President",
      bio: "Kamala Harris made history as the first woman and first person of South Asian and African American descent to serve as Vice President. She has been a champion of technology policy, STEM education, and digital infrastructure.",
    },
  ],
  agenda: [
    {
      time: "11:00 AM",
      title: "Welcome and introduction",
      description: "A quick overview of the ACME Platform and what we will cover today.",
      speaker: "Kamala Harris",
    },
    {
      time: "11:10 AM",
      title: "Architecture patterns for scalable APIs",
      description:
        "How to structure your API layer for horizontal scaling, graceful degradation, and sub-100ms latency at the 99th percentile.",
      speaker: "Barack Obama",
    },
    {
      time: "11:35 AM",
      title: "Live demo: from zero to production",
      description:
        "Watch a production-grade REST and GraphQL API get built from scratch using the ACME CLI and deployed to a global edge network.",
      speaker: "Barack Obama",
    },
    {
      time: "11:50 AM",
      title: "Q&A and next steps",
      description: "Open floor for questions. We will also share exclusive resources for attendees.",
      speaker: "Kamala Harris",
    },
  ],
  contentBlocks: [
    {
      title: "What you will learn",
      subtitle: "Practical takeaways you can apply immediately.",
      columns: 2,
      variant: "cards",
      items: [
        {
          title: "API design best practices",
          description:
            "Naming conventions, versioning strategies, and pagination patterns that scale with your product.",
        },
        {
          title: "Performance at the edge",
          description:
            "How to leverage CDN-level caching, connection pooling, and streaming responses for global low-latency APIs.",
        },
        {
          title: "Observability and debugging",
          description:
            "Structured logging, distributed tracing, and alerting setups that catch issues before your users do.",
        },
        {
          title: "Security hardening",
          description:
            "Rate limiting, authentication flows, and input validation patterns to protect your API from abuse.",
        },
      ],
    },
  ],
  socialProof: {
    stats: [
      { value: "12,000+", label: "APIs built on ACME" },
      { value: "99.99%", label: "Platform uptime" },
      { value: "50ms", label: "Median global latency" },
    ],
  },
  form: {
    title: "Reserve your spot",
    subtitle: "Space is limited. Register now to get the recording even if you cannot attend live.",
    fields: [
      {
        name: "firstname",
        label: "First name",
        type: "text",
        placeholder: "Jane",
        required: true,
      },
      {
        name: "lastname",
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
        placeholder: "ACME Corp",
        required: false,
      },
    ],
    submitLabel: "Register for Webinar",
    successRedirect: "/example-webinar/thank-you",
    hubspotPortalId: "00000000",
    hubspotFormId: "00000000-0000-0000-0000-000000000000",
    customerio: {
      eventName: "webinar_registration",
      metadata: {
        webinar: "building-scalable-apis",
        source: "landing-page",
      },
    },
  },
};

export const exampleWebinarThankYouPage: ThankYouPageConfig = {
  type: "thank-you",
  slug: "example-webinar/thank-you",
  metadata: {
    title: "You're Registered!",
    description: "Thank you for registering for the Building Scalable APIs webinar.",
    noIndex: true,
  },
  hero: {
    title: "You're registered!",
    subtitle: "Building Scalable APIs with ACME",
    description:
      "Check your inbox for a calendar invite and joining link. We will also send a reminder 30 minutes before the webinar starts.",
  },
  cta: {
    label: "Add to Calendar",
    href: "#",
    variant: "default",
    external: false,
  },
  secondaryContent: {
    title: "While you wait",
    description: "Explore these resources to get a head start before the webinar.",
    ctas: [
      {
        label: "Read the API docs",
        href: "#",
        variant: "outline",
        external: false,
      },
      {
        label: "Try the quickstart",
        href: "#",
        variant: "ghost",
        external: false,
      },
    ],
  },
};

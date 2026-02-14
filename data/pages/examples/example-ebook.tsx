import type { LeadGenPageConfig, ThankYouPageConfig } from "@/types/page-config";
import { ShieldCheck, Database, Radio, HardDrive, CloudCog } from "lucide-react";
import { Rocket } from "lucide-react";

export const exampleEbookPage: LeadGenPageConfig = {
  type: "lead-gen",
  slug: "example-ebook",
  metadata: {
    title: "Free Ebook: The ACME Developer Toolkit",
    description:
      "Download our comprehensive guide to building scalable applications with the ACME Developer Toolkit. Learn best practices for APIs, SDKs, and developer workflows.",
    ogImage: "/images/landing-pages/example-ebook/og.png",
  },
  hero: {
    title: "The ACME Developer Toolkit",
    subtitle: "Sample ebook landing page",
    description:
      "This is a sample lead generation page. The content below demonstrates the template layout. Replace it with your real ebook title, description, and cover image.",
    image: {
      src: "/images/landing-pages/example-ebook/cover.png",
      alt: "Ebook cover: The ACME Developer Toolkit",
      width: 400,
      height: 500,
    },
    ctas: [
      {
        label: "Download Free Ebook",
        href: "#form",
        variant: "default",
      },
    ],
  },
  video: {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "See the ACME Toolkit in action",
    subtitle: "Watch a quick overview of what you can build with the ACME Developer Toolkit.",
  },
  contentBlocks: [
    {
      title: "What you will learn",
      subtitle: "Practical insights for building production-ready applications",
      items: [
        {
          icon: <ShieldCheck size={20} />,
          title: "Authentication best practices",
          description:
            "Implement secure authentication flows with API keys, OAuth, and SSO using the ACME Auth SDK.",
        },
        {
          icon: <Database size={20} />,
          title: "Database design patterns",
          description:
            "Design efficient schemas with proper indexes, relationships, and access control policies.",
        },
        {
          icon: <Radio size={20} />,
          title: "Real-time event streaming",
          description:
            "Add live updates to your application using ACME Event Streams and webhooks.",
        },
        {
          icon: <HardDrive size={20} />,
          title: "File and asset management",
          description:
            "Manage user uploads and media files with ACME Storage and built-in CDN integration.",
        },
        {
          icon: <CloudCog size={20} />,
          title: "Serverless functions",
          description:
            "Deploy serverless functions globally with ACME Cloud Functions and automatic scaling.",
        },
        {
          icon: <Rocket size={20} />,
          title: "Performance optimization",
          description:
            "Optimize queries, implement caching strategies, and scale your application.",
        },
      ],
      columns: 3,
      variant: "cards",
    },
  ],
  socialProof: {
    stats: [
      { value: "42", label: "Sample stat" },
      { value: "100%", label: "Fictional" },
      { value: "99.9%", label: "Placeholder" },
      { value: "0", label: "Real data here" },
    ],
  },
  form: {
    title: "Get your free copy",
    subtitle: "This is a sample form. It does not actually submit anywhere.",
    fields: [
      {
        name: "firstName",
        label: "First name",
        type: "text",
        placeholder: "John",
        required: true,
        validation: { maxLength: 100 },
      },
      {
        name: "lastName",
        label: "Last name",
        type: "text",
        placeholder: "Doe",
        required: true,
        validation: { maxLength: 100 },
      },
      {
        name: "email",
        label: "Work email",
        type: "email",
        placeholder: "john@company.com",
        required: true,
      },
      {
        name: "company",
        label: "Company",
        type: "text",
        placeholder: "Acme Inc.",
        required: false,
        validation: { maxLength: 200 },
      },
      {
        name: "role",
        label: "Role",
        type: "select",
        required: false,
        options: [
          { label: "Developer", value: "developer" },
          { label: "Engineering Manager", value: "engineering_manager" },
          { label: "CTO / VP Engineering", value: "cto" },
          { label: "Product Manager", value: "product_manager" },
          { label: "Other", value: "other" },
        ],
      },
    ],
    submitLabel: "Download Ebook",
    successRedirect: "/example-ebook/thank-you",

    // HubSpot: portal ID and form GUID from your HubSpot account.
    // Field names (firstName, lastName, email, company, role) must match
    // the internal field names configured in your HubSpot form.
    hubspotPortalId: "00000000",
    hubspotFormId: "00000000-0000-0000-0000-000000000000",

    // Customer.io: event name and metadata for tracking this form submission.
    // The email field is used as the customer identifier.
    customerio: {
      eventName: "ebook_download",
      metadata: {
        resource_type: "ebook",
        resource_name: "acme-developer-toolkit",
      },
    },

    gdprText:
      "This is a sample form. No data is actually collected. Replace this with your real GDPR consent text.",
  },
};

export const exampleEbookThankYouPage: ThankYouPageConfig = {
  type: "thank-you",
  slug: "example-ebook/thank-you",
  metadata: {
    title: "Sample Thank You Page",
    description:
      "This is a sample thank you page for demonstration purposes.",
    noIndex: true,
  },
  hero: {
    title: "Thank you!",
    subtitle: "This is a sample thank you page",
    description:
      "This is placeholder content for a lead generation thank you page. Replace it with your real confirmation messaging and next steps.",
  },
  cta: {
    label: "Start building with ACME",
    href: "#",
    variant: "default",
    external: true,
  },
  secondaryContent: {
    title: "While you wait",
    description:
      "Explore our documentation and tutorials to get started with the ACME Developer Toolkit right away.",
    ctas: [
      {
        label: "Read the docs",
        href: "#",
        variant: "outline",
        external: true,
      },
      {
        label: "Watch tutorials",
        href: "#",
        variant: "ghost",
        external: true,
      },
    ],
  },
};

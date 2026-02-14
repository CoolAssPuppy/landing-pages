import type { JobListingPageConfig } from "@/types/page-config";

export const exampleJobListingPage: JobListingPageConfig = {
  type: "job-listing",
  slug: "example-job-listing",
  metadata: {
    title: "Senior Frontend Engineer - Nimbus Technologies",
    description:
      "Join Nimbus Technologies as a Senior Frontend Engineer. Build user-facing features, mentor engineers, and shape the future of our product.",
  },
  role: {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$160k - $200k",
  },
  description:
    "We are looking for a Senior Frontend Engineer to join our growing product team at Nimbus Technologies. You will own critical user-facing features, collaborate closely with design and backend teams, and help set the technical direction for our frontend architecture. This is a high-impact role where your work will be used by thousands of customers every day.",
  responsibilities: {
    items: [
      "Build and ship user-facing features from concept through production deployment",
      "Conduct thorough code reviews and uphold high standards for code quality across the team",
      "Mentor junior and mid-level engineers through pairing sessions and design discussions",
      "Collaborate with product designers to translate Figma mockups into polished, accessible interfaces",
      "Identify and resolve frontend performance bottlenecks to keep the application fast and responsive",
      "Contribute to architectural decisions around state management, component design, and build tooling",
      "Write and maintain comprehensive tests to ensure reliability across browsers and devices",
      "Participate in on-call rotations and incident response for frontend-related production issues",
    ],
  },
  requirements: {
    items: [
      "5+ years of professional experience building web applications with React",
      "Strong proficiency in TypeScript and modern JavaScript (ES2020+)",
      "Production experience with Next.js or a similar React meta-framework",
      "Solid understanding of testing strategies including unit, integration, and end-to-end tests",
      "Working knowledge of web accessibility standards (WCAG 2.1 AA) and semantic HTML",
      "Excellent written and verbal communication skills for remote collaboration",
      "Experience with Git-based workflows, pull request reviews, and CI/CD pipelines",
      "Comfortable working in a fast-paced environment and shipping iteratively",
    ],
  },
  niceToHave: {
    items: [
      "Contributions to open-source projects or a public portfolio of frontend work",
      "Experience building or maintaining a design system or component library",
      "Familiarity with GraphQL and client-side caching strategies (Apollo, urql, or Relay)",
      "Background in performance monitoring tools such as Lighthouse, Sentry, or Datadog RUM",
    ],
  },
  benefits: [
    {
      icon: "heart",
      title: "Health insurance",
      description:
        "Comprehensive medical, dental, and vision coverage for you and your dependents, fully funded by the company.",
    },
    {
      icon: "piggy-bank",
      title: "401(k) matching",
      description:
        "We match 100% of your 401(k) contributions up to 4% of your salary, with immediate vesting.",
    },
    {
      icon: "palm-tree",
      title: "Unlimited PTO",
      description:
        "Take the time you need to recharge. We encourage a minimum of three weeks off per year.",
    },
    {
      icon: "home",
      title: "Remote-first culture",
      description:
        "Work from anywhere in the US. We provide a co-working stipend if you prefer an office environment.",
    },
    {
      icon: "book-open",
      title: "Learning budget",
      description:
        "An annual $2,000 stipend for conferences, courses, books, and any professional development you choose.",
    },
    {
      icon: "laptop",
      title: "Equipment stipend",
      description:
        "A one-time $3,000 stipend for your home office setup, plus a new laptop refresh every three years.",
    },
  ],
  aboutSection: {
    description:
      "Nimbus Technologies builds cloud-native collaboration tools used by over 10,000 teams worldwide. We are a fully remote company of 120 people spread across the US and Europe, united by a shared belief that great software is built by happy, empowered teams. Our engineering culture values simplicity, ownership, and shipping early and often.",
    image: {
      src: "/images/landing-pages/example-job-listing/team.jpg",
      alt: "Nimbus Technologies team working together",
    },
  },
  form: {
    title: "Apply for this role",
    subtitle:
      "This is a sample form. It does not actually submit anywhere.",
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
        label: "Email",
        type: "email",
        placeholder: "jane@example.com",
        required: true,
      },
      {
        name: "linkedinUrl",
        label: "LinkedIn URL",
        type: "text",
        placeholder: "https://linkedin.com/in/janedoe",
        required: true,
      },
      {
        name: "portfolio",
        label: "Portfolio or personal site",
        type: "text",
        placeholder: "https://janedoe.dev",
        required: false,
      },
      {
        name: "coverLetter",
        label: "Why are you interested in this role?",
        type: "textarea",
        placeholder: "Tell us what excites you about this opportunity and what you would bring to the team.",
        required: true,
      },
    ],
    submitLabel: "Submit Application",

    // HubSpot: portal ID and form GUID from your HubSpot account.
    // Field names must match HubSpot internal field names.
    hubspotPortalId: "00000000",
    hubspotFormId: "00000000-0000-0000-0000-000000000000",

    // Customer.io: event name and metadata for tracking this form submission.
    customerio: {
      eventName: "job_application",
      metadata: {
        role: "senior-frontend-engineer",
        department: "engineering",
        source: "landing-page",
      },
    },
  },
};

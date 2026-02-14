import type { EventRecapPageConfig } from "@/types/page-config";

export const exampleEventRecapPage: EventRecapPageConfig = {
  type: "event-recap",
  slug: "example-event-recap",
  metadata: {
    title: "Building at Scale: 2025 Developer Summit Recap",
    description:
      "Watch the recording and access all materials from the Building at Scale Developer Summit, featuring talks on scaling infrastructure, security, and global deployment.",
  },
  hero: {
    title: "Building at Scale: 2025 Developer Summit",
    subtitle: "Watch the recording and access all materials",
    description:
      "Over 2,500 developers joined us for a day of deep technical talks on scaling modern infrastructure. Missed it live? Everything you need is right here -- the full recording, speaker slides, and key takeaways.",
    badge: "Event Recap",
  },
  event: {
    date: "January 15, 2025",
    location: "Virtual",
    attendees: "2,500+ attendees",
  },
  recording: {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "Watch the full recording",
    subtitle: "All sessions from the 2025 Developer Summit in one stream.",
  },
  speakers: [
    {
      name: "Elena Vasquez",
      role: "VP of Engineering",
      company: "ScaleGrid",
      bio: "Elena leads the platform engineering team at ScaleGrid, where she architects distributed systems serving millions of requests per second. She previously built core infrastructure at two hypergrowth startups.",
    },
    {
      name: "James Okonkwo",
      role: "Principal Security Engineer",
      company: "Sentinel Labs",
      bio: "James specializes in zero-trust architecture and supply chain security for cloud-native applications. He is the author of Securing the Pipeline, a widely referenced guide to DevSecOps practices.",
    },
    {
      name: "Mei Lin Chen",
      role: "Head of Developer Experience",
      company: "EdgeDeploy",
      bio: "Mei Lin focuses on making global deployment accessible to every engineering team. She has shipped developer tools used by over 50,000 engineers across three continents.",
    },
  ],
  keyTakeaways: [
    {
      icon: "zap",
      title: "Scaling without complexity",
      description:
        "How to horizontally scale stateful services using event sourcing and CQRS patterns, without introducing operational overhead that slows your team down.",
    },
    {
      icon: "shield",
      title: "Security as a first-class concern",
      description:
        "Practical zero-trust patterns for microservices, including mutual TLS, policy-as-code, and automated vulnerability scanning in CI/CD pipelines.",
    },
    {
      icon: "globe",
      title: "Global deployment strategies",
      description:
        "Techniques for deploying to edge locations worldwide while maintaining data consistency, low latency, and compliance with regional data residency requirements.",
    },
    {
      icon: "users",
      title: "Team collaboration at scale",
      description:
        "How platform teams can build internal developer platforms that reduce cognitive load and let product teams ship independently without stepping on each other.",
    },
  ],
  slides: {
    title: "Download the presentation slides",
    description:
      "Get the full slide deck covering all three sessions. Includes architecture diagrams, code samples, and reference links mentioned during the talks.",
    downloadUrl: "#",
  },
  socialProof: {
    testimonials: [
      {
        quote:
          "The scaling session alone saved our team weeks of research. We adopted the CQRS pattern Elena described and cut our p99 latency by 40%.",
        author: "David Park",
        role: "Staff Engineer",
        company: "Finova",
      },
      {
        quote:
          "Best virtual developer event I have attended. The security talk was incredibly practical -- we implemented mutual TLS across our services the following week.",
        author: "Sarah Mitchell",
        role: "Engineering Manager",
        company: "CloudBase",
      },
      {
        quote:
          "Mei Lin's session on edge deployment changed how we think about our infrastructure. We are now serving users from 12 regions instead of 2.",
        author: "Raj Patel",
        role: "CTO",
        company: "Launchpad",
      },
    ],
  },
  relatedResources: [
    {
      title: "A practical guide to horizontal scaling",
      description:
        "Deep dive into the event sourcing and CQRS patterns discussed during the summit, with code examples in TypeScript and Go.",
      href: "#",
      type: "Blog Post",
    },
    {
      title: "Zero-trust security for microservices",
      description:
        "The companion guide to James's talk, covering mutual TLS setup, policy-as-code with OPA, and CI/CD security scanning.",
      href: "#",
      type: "Guide",
    },
    {
      title: "Edge deployment masterclass",
      description:
        "A 30-minute video walkthrough of deploying a full-stack application to 20+ edge locations with data replication.",
      href: "#",
      type: "Video",
    },
  ],
  ctaBanner: {
    title: "Join our next event",
    description:
      "We host quarterly developer summits on the topics that matter most to engineering teams. Be the first to know when registration opens.",
    cta: {
      label: "View Upcoming Events",
      href: "#",
      variant: "default",
    },
    secondaryCta: {
      label: "Subscribe to Updates",
      href: "#",
      variant: "outline",
    },
  },
  form: {
    title: "Get notified about future events",
    subtitle:
      "Drop your email and we will let you know when our next summit is announced.",
    fields: [
      {
        name: "email",
        label: "Email address",
        type: "email",
        placeholder: "you@company.com",
        required: true,
      },
    ],
    submitLabel: "Subscribe",
  },
};

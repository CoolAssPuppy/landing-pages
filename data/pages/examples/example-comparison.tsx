import type { ComparisonPageConfig } from "@/types/page-config";

export const exampleComparisonPage: ComparisonPageConfig = {
  type: "comparison",
  slug: "example-comparison",
  metadata: {
    title: "Federation vs. Cardassian Database Systems - An Objective Analysis",
    description:
      "A fair and balanced comparison between Federation and Cardassian database systems. Which backend is right for your next starship project?",
  },
  hero: {
    title: "Federation vs. Cardassian Database Systems",
    subtitle: "Choose your backend wisely",
    description:
      "Both the Federation and the Cardassian Union have spent centuries developing database infrastructure to manage vast interstellar empires. But which one is right for your modern application? We break down the features so you can decide.",
    ctas: [
      {
        label: "Start with Federation",
        href: "#",
        variant: "default",
      },
      {
        label: "Explore Cardassian systems",
        href: "#faq",
        variant: "outline",
      },
    ],
  },
  logoCloud: {
    title: "Trusted by starships and space stations across the quadrant",
    logos: [
      {
        name: "Resend",
        src: "/images/logos/resend.png",
        srcDark: "/images/logos/dark/resend.png",
        href: "#",
      },
      {
        name: "Chatbase",
        src: "/images/logos/chatbase.png",
        srcDark: "/images/logos/dark/chatbase.png",
        href: "#",
      },
      {
        name: "Mobbin",
        src: "/images/logos/mobbin.png",
        srcDark: "/images/logos/dark/mobbin.png",
        href: "#",
      },
      {
        name: "Xendit",
        src: "/images/logos/xendit.png",
        srcDark: "/images/logos/dark/xendit.png",
        href: "#",
      },
      {
        name: "Firecrawl",
        src: "/images/logos/firecrawl.png",
        srcDark: "/images/logos/dark/firecrawl.png",
        href: "#",
      },
      {
        name: "E2B",
        src: "/images/logos/e2b.png",
        srcDark: "/images/logos/dark/e2b.png",
        href: "#",
      },
      {
        name: "Rally",
        src: "/images/logos/rally.png",
        srcDark: "/images/logos/dark/rally.png",
        href: "#",
      },
      {
        name: "Humata",
        src: "/images/logos/humata.png",
        srcDark: "/images/logos/dark/humata.png",
        href: "#",
      },
    ],
  },
  comparisonTable: {
    title: "Feature comparison",
    subtitle: "How does the Federation stack up against centuries of Cardassian information architecture?",
    columns: [
      { name: "Federation", highlight: true },
      { name: "Cardassian" },
    ],
    rows: [
      { feature: "Query latency", values: ["< 50ms via subspace relay", "Variable (depends on Obsidian Order priority queue)"] },
      { feature: "Concurrent connections", values: ["Unlimited across all member worlds", "Limited by Central Command allocation"] },
      { feature: "Real-time updates", values: [true, false] },
      { feature: "Row-level security", values: [true, "Everything is surveilled anyway"] },
      { feature: "Authentication", values: ["Biometric, combadge, voiceprint", "Retinal scan + loyalty oath"] },
      { feature: "File storage", values: ["Exabytes in isolinear chip arrays", "Classified (all storage locations are state secrets)"] },
      { feature: "Edge functions", values: ["150+ starbases across the quadrant", "Wherever Cardassia has annexed territory"] },
      { feature: "Uptime SLA", values: ["99.95%", "Depends on the current political coup"] },
      { feature: "Data encryption", values: ["Quantum-entangled encryption at rest, subspace TLS in transit", "Triple-encrypted but the Obsidian Order has a backdoor"] },
      { feature: "Backup strategy", values: ["Memory Alpha redundant archives", "Obsidian Order keeps a copy of everything (whether you like it or not)"] },
      { feature: "Horizontal scaling", values: ["Replicate new isolinear cores on demand", "Annex a neighboring planet and requisition their hardware"] },
      { feature: "Open source", values: [true, false] },
    ],
  },
  splitSections: [
    {
      title: "LCARS interface vs. Cardassian terminal aesthetics",
      description:
        "The Federation's LCARS interface provides an intuitive, colorful, touch-driven experience optimized for rapid data retrieval during red alert situations. Cardassian terminals, by contrast, feature a dark, angular UI that is aesthetically on-brand for an authoritarian regime but not exactly a joy to use at 0300 hours during a Dominion War briefing.",
      image: {
        src: "/images/landing-pages/example-resources/database.png",
        alt: "Federation LCARS database interface",
      },
      cta: {
        label: "Try LCARS",
        href: "#",
        variant: "outline",
      },
    },
    {
      title: "Open data policy vs. state-controlled information",
      description:
        "Federation databases operate on principles of transparency and shared knowledge. Any officer with clearance can query the system, run analytics, and even contribute improvements to the codebase. Cardassian systems operate on a strict need-to-know basis, where the definition of 'need-to-know' is decided by whichever Gul is in charge this week. Good luck filing a JIRA ticket with the Obsidian Order.",
      image: {
        src: "/images/landing-pages/example-resources/auth.png",
        alt: "Federation data access control panel",
      },
      cta: {
        label: "Explore Federation data policy",
        href: "#",
        variant: "outline",
      },
    },
    {
      title: "Starfleet-managed infrastructure vs. conscripted labor",
      description:
        "Federation infrastructure is maintained by Starfleet Corps of Engineers, who handle provisioning, scaling, backups, and security patches with professional dedication and a strong union. Cardassian infrastructure relies heavily on forced labor from occupied worlds, which tends to result in... creative acts of sabotage. The Bajoran Resistance was not known for its commitment to database integrity.",
      image: {
        src: "/images/landing-pages/example-resources/storage.png",
        alt: "Starfleet infrastructure dashboard",
      },
      cta: {
        label: "View Starfleet dashboard",
        href: "#",
        variant: "outline",
      },
    },
  ],
  timeline: {
    title: "Migrating from Cardassian to Federation systems",
    subtitle: "A step-by-step guide for worlds currently running Cardassian database infrastructure",
    steps: [
      {
        title: "Audit your existing Cardassian systems",
        description:
          "Document all active databases, their replication topologies, and known Obsidian Order backdoors. Pay special attention to any data marked 'classified' -- in Cardassian systems, this usually means 'embarrassing to someone important.'",
      },
      {
        title: "Decrypt and export your data",
        description:
          "Cardassian encryption is notoriously layered. You will need a skilled engineer, a Starfleet decryption team, and possibly Garak. Especially Garak. He will insist he is 'just a tailor,' but he will somehow know all the encryption keys.",
      },
      {
        title: "Provision your Federation database cluster",
        description:
          "Request a new isolinear core cluster from Starfleet Operations. Provisioning takes about 60 seconds, which is roughly the time it takes a Cardassian bureaucrat to stamp the first of forty-seven required forms.",
      },
      {
        title: "Import and verify your data",
        description:
          "Upload your exported datasets into the Federation system. Watch in amazement as queries that previously required Obsidian Order clearance now return in milliseconds to anyone with standard access.",
      },
      {
        title: "Decommission the Cardassian hardware",
        description:
          "Recycle the old Cardassian terminals responsibly. They have served their purpose, even if that purpose was mostly surveillance. Consider donating them to a museum, or to Quark -- he will find a buyer for anything.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Is this a real comparison?",
        answer:
          "No. The Federation and the Cardassian Union are fictional organizations from Star Trek. This page is an example of the comparison page template. You can use it as a starting point for real product comparisons.",
      },
      {
        question: "Are Cardassian databases really that bad?",
        answer:
          "In fairness to the Cardassians, their record-keeping is meticulous. They maintained detailed files on every Bajoran during the Occupation, tracked every resource extracted from Bajor, and the Obsidian Order's intelligence archives were legendary. The problem is not competence -- it is that the entire system is designed for authoritarian control rather than collaborative development.",
      },
      {
        question: "What about the Dominion's database systems?",
        answer:
          "The Dominion uses a genetically engineered database system maintained by the Vorta, who claim it is perfect because the Founders designed it. Independent benchmarks are unavailable because no one who has audited the system has ever been seen again.",
      },
      {
        question: "Has anyone actually tried running a database on isolinear chips?",
        answer:
          "Isolinear chips were introduced in the 24th century as a replacement for duotronic systems. They store data in a nanotech optical crystal medium. In practice, they seem to fail at dramatically inconvenient moments, usually when the ship is under attack. Starfleet's SLA numbers are aspirational.",
      },
      {
        question: "Can I use this template for a real comparison page?",
        answer: (
          <p>
            Yes. Copy this file from data/pages/examples/ into data/pages/, change the slug, and
            replace the content with your real product comparison. See the{" "}
            <a href="#" className="text-primary underline">
              documentation
            </a>{" "}
            for more details. The comparison table, split sections, timeline, and FAQ blocks are
            all fully configurable.
          </p>
        ),
      },
      {
        question: "Do I need to swear a loyalty oath to use Federation systems?",
        answer:
          "No. The Federation operates on principles of voluntary cooperation and mutual benefit. Unlike Cardassian systems, you will not be required to pledge allegiance to Central Command, submit to Obsidian Order monitoring, or name your firstborn after a Gul.",
      },
    ],
  },
  socialProof: {
    stats: [
      { value: "150+", label: "Member worlds" },
      { value: "< 50ms", label: "Subspace query latency" },
      { value: "99.95%", label: "Uptime SLA" },
    ],
  },
  ctaBanner: {
    title: "Ready to join the Federation?",
    description:
      "Start building with Federation database systems today. No loyalty oaths required.",
    cta: {
      label: "Start your project",
      href: "#",
      variant: "default",
    },
    secondaryCta: {
      label: "Read the docs",
      href: "#",
      variant: "outline",
    },
  },
};

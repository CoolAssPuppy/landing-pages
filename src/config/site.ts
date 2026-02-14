/**
 * Centralized site configuration.
 * Update these values to customize your landing pages deployment.
 */
export const siteConfig = {
  name: "Strategic Nerds",
  description: "Open-source landing page templates built with Next.js and Tailwind CSS",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  footer: {
    company: "Strategic Nerds, Inc.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
} as const;

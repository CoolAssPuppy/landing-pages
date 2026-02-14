/**
 * Site configuration -- the single file you need to edit to customize your deployment.
 *
 * 1. Set your company name, description, and URL below.
 * 2. Drop your logo files in public/images/ and update the paths.
 * 3. Add navigation links if you want them in the header.
 * 4. Update the footer with your company name and legal page links.
 */

interface SiteConfig {
  name: string;
  description: string;
  url: string;
  logo: {
    light: string;
    dark: string;
    height: number;
  };
  nav: Array<{ label: string; href: string }>;
  footer: {
    company: string;
    links: Array<{ label: string; href: string }>;
  };
}

export const siteConfig: SiteConfig = {
  name: "Strategic Nerds",
  description: "Open-source landing page templates built with Next.js and Tailwind CSS",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  // Logo -- drop your files in public/ and set the paths here.
  // If you only have one logo, set both to the same path.
  logo: {
    light: "/images/logos/strategic-nerds/logo-dark.png", // shown in light mode
    dark: "/images/logos/strategic-nerds/logo-light.png", // shown in dark mode
    height: 32, // rendered height in pixels
  },

  // Navigation links shown in the header (optional).
  // Uncomment and edit to add links next to your logo.
  nav: [
    // { label: "Product", href: "https://your-domain.com" },
    // { label: "Docs", href: "https://docs.your-domain.com" },
  ],

  footer: {
    company: "Strategic Nerds, Inc.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

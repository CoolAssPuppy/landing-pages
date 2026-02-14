Originally built by Strategic Nerds, Inc: www.strategicnerds.com

# Landing Pages

Open-source landing page templates built with Next.js 15, Tailwind CSS 4, and shadcn/ui. Define pages as TypeScript configuration objects and deploy production-ready campaigns in minutes.

## Features

- **Data-driven pages**: Define pages as TypeScript configuration objects -- no custom React needed
- **Nine page templates**: Lead generation, thank you, legal/rules, waitlist, resource hub, partner co-marketing, comparison, pricing, webinar
- **Secure form handling**: CSRF protection, rate limiting, input sanitization, Content-Security-Policy headers
- **Marketing integrations**: HubSpot Forms/Contacts API, Customer.io Track API with configurable events
- **UTM tracking**: Automatic capture and persistence across page navigation
- **Dark/light mode**: Full theme support with system preference detection
- **Modern stack**: Next.js 15, React 19, Tailwind CSS 4, TypeScript

## Getting started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
git clone <repository-url>
cd landing-pages

npm install

cp .env.example .env.local

# Generate a CSRF secret:
# openssl rand -hex 32
# Add it to .env.local as CSRF_SECRET=<your-secret>
```

### Development

```bash
npm run dev
# Open http://localhost:3000
```

### Build

```bash
npm run build
npm start
```

## Project structure

```
landing-pages/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Tailwind + theme variables
│   │   ├── page.tsx            # Home page (template gallery)
│   │   ├── not-found.tsx       # 404 page
│   │   ├── [...slug]/          # Dynamic page routing
│   │   └── api/                # API routes
│   │       ├── csrf/           # CSRF token endpoint
│   │       └── form/           # Form submission handler
│   ├── components/
│   │   ├── ui/                 # UI primitives (Button, Input, Select, etc.)
│   │   ├── layout/             # Header, footer, wrappers
│   │   ├── blocks/             # Content blocks (hero, form, FAQ, etc.)
│   │   ├── templates/          # Page templates
│   │   └── theme/              # Theme provider and toggle
│   ├── config/                 # Site configuration
│   ├── lib/                    # Utilities and integrations
│   ├── hooks/                  # React hooks
│   └── types/                  # TypeScript definitions
├── data/
│   └── pages/                  # Page configurations
│       ├── index.ts            # Page registry
│       └── examples/           # Example page configs
├── public/
│   └── images/                 # Static images and logos
├── package.json
├── next.config.ts
└── tsconfig.json
```

## Templates

| Template | Use case | Key features |
|----------|----------|--------------|
| `lead-gen` | Ebook downloads, webinar signups, demos | Hero, content blocks, social proof, form |
| `thank-you` | Confirmation pages after form submission | Success message, CTAs, secondary content |
| `legal` | Terms, rules, privacy policies | Table of contents, prose sections |
| `waitlist` | Coming soon, early access signups | Countdown timer, features preview, email capture |
| `resource-hub` | Content libraries, resource centers | Filterable grid, featured resources, newsletter CTA |
| `partner` | Co-marketing, partner promotions | Logo lockup, joint value props, special offers |
| `comparison` | Product comparisons, vs. pages | Comparison table, split sections, timeline, FAQ |
| `pricing` | Sale pricing, promotions | Pricing tier cards, feature comparison, countdown, FAQ |
| `webinar` | Event registrations | Date/time info, speakers, agenda, registration form |

## Creating a new landing page

The fastest way to create a new landing page:

1. Copy an example from `data/pages/examples/` into `data/pages/`
2. Change the `slug` to your desired URL path
3. Update the content (title, description, form fields, etc.)
4. Import and register the page in `data/pages/index.ts`
5. Run `npm run dev` and visit `http://localhost:3000/your-slug`

```typescript
// data/pages/my-campaign.ts
import type { LeadGenPageConfig } from "@/types/page-config";

export const myCampaignPage: LeadGenPageConfig = {
  type: "lead-gen",
  slug: "my-campaign",
  metadata: {
    title: "My Campaign",
    description: "Campaign description for SEO.",
  },
  hero: {
    title: "Main headline",
    description: "Value proposition for your campaign.",
    ctas: [{ label: "Get started", href: "#form", variant: "default" }],
  },
  form: {
    title: "Sign up",
    submitLabel: "Submit",
    fields: [
      { name: "email", label: "Email", type: "email", required: true },
    ],
  },
};
```

```typescript
// data/pages/index.ts
import { myCampaignPage } from "./my-campaign";

export const pages: PageConfig[] = [
  // ... existing pages
  myCampaignPage,
];
```

## Skinning and customization

This section covers how to adapt the template system for your own product, brand, and content. It is written for both human developers and LLM coding assistants.

### Theming

This project uses standard [shadcn/ui](https://ui.shadcn.com) theming. All colors are defined as CSS variables in `src/app/globals.css`.

#### Changing the color palette

Edit the CSS variables in `src/app/globals.css`. The key variables are:

| Variable | Purpose |
|----------|---------|
| `--background` | Page background |
| `--foreground` | Default text color |
| `--card` | Card and section backgrounds |
| `--primary` | Buttons, links, accent elements |
| `--primary-foreground` | Text on primary-colored backgrounds |
| `--muted` | Subtle backgrounds (feature sections, code blocks) |
| `--muted-foreground` | Secondary text, descriptions |
| `--border` | Borders and dividers |
| `--destructive` | Error states |

Both `:root` (light) and `.dark` (dark) themes need updating.

#### Using pre-built themes

The easiest approach is to grab a theme from [ui.shadcn.com/themes](https://ui.shadcn.com/themes):

1. Pick a theme and copy the CSS variables
2. Replace the `:root` and `.dark` blocks in `src/app/globals.css`
3. Keep the `@theme inline` block, prose styles, and code block colors as they are

#### Example: switching to a blue primary

Replace the `--primary` lines in both `:root` and `.dark`:

```css
:root {
  --primary: oklch(0.55 0.2 250);
  --primary-foreground: oklch(0.985 0 0);
}

.dark {
  --primary: oklch(0.65 0.2 250);
  --primary-foreground: oklch(0.145 0 0);
}
```

### Branding

#### Logo

Replace the logo component in `src/components/ui/site-logo.tsx`. The default uses a Lucide icon and text:

```typescript
export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Layers className="h-6 w-6 text-primary" />
      <span className="text-lg font-medium text-foreground">Landing Pages</span>
    </div>
  );
}
```

Replace with your own SVG, image import, or custom component.

#### Site configuration

Edit `src/config/site.ts` to set your company name, description, URL, and footer links:

```typescript
export const siteConfig = {
  name: "Your Product",
  description: "Your product description",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  footer: {
    company: "Your Company, Inc.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};
```

#### Fonts

Change the font in `src/app/layout.tsx`. The default uses Inter from Google Fonts:

```typescript
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```

Replace `Inter` with any Google Font. The CSS variable `--font-inter` is referenced in `globals.css` under `--font-family-sans`.

### Writing effective page configs

**Hero sections**: Lead with a clear value proposition. Keep titles under 10 words. Use `subtitle` for context and `description` for the supporting paragraph.

**Content blocks**: Use the `cards` variant for feature grids. Three columns works well for 3-6 items. Use Lucide icon names (e.g., `"database"`, `"shield"`, `"zap"`) for consistency.

**Forms**: Keep forms short. Every additional field reduces conversion. For lead gen, start with email only and add fields as needed. Always include `gdprText` for compliance.

**Social proof**: Stats, testimonials, and logos each serve different purposes. Stats are quick credibility signals. Testimonials build trust. Logo clouds establish market presence.

**CTAs**: Use `variant: "default"` for primary actions and `variant: "outline"` for secondary. Link CTAs to `"#form"` to scroll to the form section.

### Icons

Content blocks support Lucide icons by name:

```typescript
{ icon: "database", title: "Feature", description: "Description" }
```

Or pass JSX icon elements directly for full control.

## Configuration

### Site config

Edit `src/config/site.ts` to customize the site name, description, URL, and footer.

### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `CSRF_SECRET` | Yes | Secret for CSRF token signing. Generate with `openssl rand -hex 32` |
| `HUBSPOT_ACCESS_TOKEN` | No | HubSpot private app access token |
| `CUSTOMERIO_SITE_ID` | No | Customer.io site ID |
| `CUSTOMERIO_API_KEY` | No | Customer.io Track API key |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_SITE_URL` | No | Base URL for metadata and canonical URLs |

### Form field types

| Type | Description |
|------|-------------|
| `text` | Single-line text input |
| `email` | Email input with validation |
| `tel` | Phone number input |
| `textarea` | Multi-line text input |
| `select` | Dropdown select (requires `options` array) |
| `checkbox` | Checkbox (for consent/opt-in) |

## Marketing integrations

### HubSpot

1. Create a HubSpot account and a private app with Forms and Contacts scopes
2. Create a form in HubSpot with fields matching your page config field `name` values
3. Set `HUBSPOT_ACCESS_TOKEN` in `.env.local`
4. Add `hubspotPortalId` and `hubspotFormId` to your form config

```typescript
form: {
  hubspotPortalId: "12345678",
  hubspotFormId: "abcd1234-5678-90ef-ghij-klmnopqrstuv",
  fields: [
    { name: "firstName", label: "First name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
  ],
}
```

Field `name` values must match HubSpot internal field names exactly.

### Customer.io

1. Create a Customer.io account
2. Set `CUSTOMERIO_SITE_ID` and `CUSTOMERIO_API_KEY` in `.env.local`
3. Add `customerio` config to your form

```typescript
form: {
  customerio: {
    eventName: "ebook_download",
    metadata: {
      resource_type: "ebook",
      resource_name: "my-ebook",
    },
  },
}
```

The email field is used as the customer identifier. Events and metadata appear in your Customer.io workspace.

### Adding a new integration

To add a new form submission integration (e.g., Mailchimp, Salesforce):

1. Create a new file in `src/lib/` (e.g., `src/lib/mailchimp.ts`)
2. Export an async function that accepts form data and sends it to the API
3. Call your function from `src/app/api/form/route.ts` alongside the existing HubSpot and Customer.io calls
4. Add any required environment variables to `.env.example`

## Security

- **CSRF protection**: HMAC-SHA256 signed tokens with 1-hour expiry
- **Rate limiting**: 20 req/min for API routes, 5 req/min for form submissions
- **Input sanitization**: XSS pattern detection, HTML entity encoding, field length validation
- **Bot detection**: User agent validation, timing-based rejection
- **Security headers**: CSP, HSTS, X-Frame-Options, X-Content-Type-Options

## Example: skinning for your own product

This walkthrough shows what it would take to rebrand all the example pages to market a fictional "Velocity" -- a Next.js server framework with Tailwind CSS and shadcn/ui built in.

### Global changes

1. **Site config** (`src/config/site.ts`): Change name to "Velocity", description to "The Next.js server framework with Tailwind and shadcn built in", company to "Velocity Labs"

2. **Logo** (`src/components/ui/site-logo.tsx`): Replace with Velocity's logo or use a different Lucide icon (e.g., `Rocket`)

3. **Theme** (`src/app/globals.css`): Pick a color theme that matches Velocity's brand. A blue or violet primary would work well for a developer tool.

4. **Font** (`src/app/layout.tsx`): Consider a more technical font like JetBrains Mono for headings or stick with Inter for clean readability.

### Per-template changes

**Lead gen (example-ebook.tsx)** -- Turn into a "Velocity Quickstart Guide" download:
- Hero title: "The Velocity Quickstart Guide"
- Hero description: "Learn how to build production-ready apps with Next.js server components, Tailwind CSS, and shadcn/ui in under an hour."
- Content blocks: Replace with Velocity-specific features (server components, streaming SSR, built-in auth, edge deployment)
- Form: Keep email + role fields, change submit label to "Download Guide"

**Waitlist (example-waitlist.ts)** -- Turn into "Velocity 2.0 Early Access":
- Hero title: "Velocity 2.0"
- Badge: "Coming Soon"
- Features: Highlight new v2 capabilities (React Server Components, partial prerendering, built-in caching)
- Countdown: Set to your actual launch date

**Resource hub (example-resources.ts)** -- Turn into "Velocity Developer Hub":
- Resources: Framework docs, migration guides, video tutorials, case studies from companies using Velocity
- Code snippet: Show a Velocity server component example
- Categories: "Getting Started", "Server Components", "Data Fetching", "Deployment"

**Partner (example-partner.ts)** -- Turn into "Velocity + Vercel" integration page:
- Partner logo: Vercel
- Value proposition: Seamless deployment, edge runtime, preview deployments
- Big quote: A testimonial from the Vercel team
- Offer: Free Vercel Pro tier for Velocity users

**Comparison (example-comparison.tsx)** -- Turn into "Velocity vs. Create React App":
- Comparison table: SSR support, bundle size, routing, data fetching, deployment
- Split sections: Show side-by-side code examples
- Timeline: Migration steps from CRA to Velocity
- FAQ: Common questions about switching frameworks

**Pricing (example-pricing.ts)** -- Turn into "Velocity Pro Plans":
- Tiers: Free (open source), Pro ($29/mo for hosted services), Enterprise (custom pricing)
- Features: Differentiate by deployment limits, support tiers, analytics

**Webinar (example-webinar.ts)** -- Turn into "Building with Velocity: Live Workshop":
- Speakers: Framework maintainers or developer advocates
- Agenda: Setup, building a feature, deployment, Q&A
- Platform: Use Zoom or YouTube Live URL

### Messaging tips

- Lead with developer experience: "Ship faster", "Less config, more code"
- Emphasize the integrated stack: Next.js + Tailwind + shadcn is the pitch
- Use code examples as proof points -- developers trust code over marketing copy
- Keep the tone direct and technical, avoid buzzwords
- Reference real Next.js and React concepts (server components, streaming, suspense) to build credibility

### Files to change (summary)

| File | What to change |
|------|---------------|
| `src/config/site.ts` | Product name, company, footer links |
| `src/components/ui/site-logo.tsx` | Logo |
| `src/app/globals.css` | Theme colors |
| `src/app/layout.tsx` | Font (optional) |
| `data/pages/examples/example-ebook.tsx` | All content |
| `data/pages/examples/example-waitlist.ts` | All content |
| `data/pages/examples/example-resources.ts` | All content |
| `data/pages/examples/example-partner.ts` | All content, partner details |
| `data/pages/examples/example-comparison.tsx` | All content, comparison data |
| `data/pages/examples/example-pricing.ts` | All content, tier structure |
| `data/pages/examples/example-webinar.ts` | All content, event details |
| `public/images/` | Replace placeholder images with real assets |

Each example file is self-contained. You can update them one at a time, test each at its URL, and iterate.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |

## Deployment

### Vercel (recommended)

1. Connect your repository to Vercel
2. Set environment variables in the Vercel dashboard
3. Deploy

### Other platforms

```bash
npm run build
npm start
```

Set environment variables on your platform before deploying.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

## License

MIT -- see [LICENSE](LICENSE) for details. Projects using this software must include an attribution line at the top of their README.

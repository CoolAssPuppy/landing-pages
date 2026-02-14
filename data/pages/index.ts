import type { PageConfig } from "@/types/page-config";
import {
  exampleEbookPage,
  exampleEbookThankYouPage,
} from "./examples/example-ebook";
import { exampleRulesPage } from "./examples/example-rules";
import {
  exampleWaitlistPage,
  exampleWaitlistThankYouPage,
} from "./examples/example-waitlist";
import { exampleResourcesPage } from "./examples/example-resources";
import {
  examplePartnerPage,
  examplePartnerThankYouPage,
} from "./examples/example-partner";
import { exampleComparisonPage } from "./examples/example-comparison";
import { examplePricingPage } from "./examples/example-pricing";
import {
  exampleWebinarPage,
  exampleWebinarThankYouPage,
} from "./examples/example-webinar";

// Page registry -- import configs and add them to the array below.
// Pages are available at /{slug}. Slugs come from each config, not directory structure.
export const pages: PageConfig[] = [
  // Lead generation examples
  exampleEbookPage,
  exampleEbookThankYouPage,

  // Legal page example
  exampleRulesPage,

  // Waitlist examples
  exampleWaitlistPage,
  exampleWaitlistThankYouPage,

  // Resource hub example
  exampleResourcesPage,

  // Partner co-marketing examples
  examplePartnerPage,
  examplePartnerThankYouPage,

  // Comparison page example
  exampleComparisonPage,

  // Pricing page example
  examplePricingPage,

  // Webinar examples
  exampleWebinarPage,
  exampleWebinarThankYouPage,
];

export function getPageBySlug(slug: string): PageConfig | undefined {
  return pages.find((page) => page.slug === slug);
}

export function getAllPageSlugs(): string[] {
  return pages.map((page) => page.slug);
}

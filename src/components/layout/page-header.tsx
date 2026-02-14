import Link from "next/link";
import { SiteLogo } from "@/components/ui/site-logo";
import { ThemeToggle } from "@/components/theme";

export function PageHeader() {
  return (
    <header className="w-full py-6">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="inline-block" aria-label="Home">
          <SiteLogo />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}

import Image from "next/image";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
}

/**
 * Strategic Nerds logo with dark/light mode support.
 * Replace with your own logo -- see README for details.
 */
export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/images/logos/strategic-nerds/logo-dark.png"
        alt="Strategic Nerds"
        width={160}
        height={40}
        className="h-8 w-auto dark:hidden"
        priority
      />
      <Image
        src="/images/logos/strategic-nerds/logo-light.png"
        alt="Strategic Nerds"
        width={160}
        height={40}
        className="h-8 w-auto hidden dark:block"
        priority
      />
    </div>
  );
}

import Link from "next/link";

import { BRAND } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Wordmark. The glyph is a stylised set of staff lines with a gold note,
 * matching the app's gold-on-dark identity. Swap for the real logo asset when
 * one exists (drop it in /public/brand and render it with next/image).
 */
export function BrandMark({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg focus-visible:ring-ring/60 focus-visible:ring-[3px] focus-visible:outline-none",
        className,
      )}
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-gold text-black shadow-sm">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <path
            d="M4 6h16M4 11h16M4 16h9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="17" cy="17" r="3" fill="currentColor" />
          <path
            d="M20 17V9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-[1.0625rem] font-bold tracking-tight">{BRAND}</span>
    </Link>
  );
}

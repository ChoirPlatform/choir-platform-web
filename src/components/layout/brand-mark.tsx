import Image from "next/image";
import Link from "next/link";

import { BRAND } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Wordmark: the Selah glyph (a gold "S" fused with two music notes) followed by
 * the brand name. Same asset the Flutter app ships as its brand mark and
 * launcher icon, so the two products read as one system.
 *
 * The logo carries its own gold, so it needs no tinted plate behind it — the
 * `alt` is empty because the adjacent text already names the brand.
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
      <Image
        src="/brand/selah-logo.png"
        alt=""
        width={36}
        height={36}
        priority
        className="size-9"
      />
      <span className="text-[1.0625rem] font-bold tracking-tight">{BRAND}</span>
    </Link>
  );
}

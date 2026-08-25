import type { Metadata } from "next";

import { BRAND, DESCRIPTION, SITE_URL, TAGLINE } from "@/content/site";

type BuildMetadataArgs = {
  title?: string;
  description?: string;
  /** Route path, e.g. "/privacy". Defaults to the site root. */
  path?: string;
  /** Set on utility pages that should stay out of the index. */
  noIndex?: boolean;
};

/**
 * Every page's metadata goes through here so canonical URLs, Open Graph and
 * Twitter tags stay consistent and no domain is ever hardcoded.
 */
export function buildMetadata({
  title,
  description = DESCRIPTION,
  path = "/",
  noIndex = false,
}: BuildMetadataArgs = {}): Metadata {
  // Keep titles inside the ~60 characters search results actually show: the
  // tagline is the fallback, never the full description.
  const resolvedTitle = title ? `${title} — ${BRAND}` : `${BRAND} — ${TAGLINE}`;
  const url = new URL(path, SITE_URL).toString();

  return {
    metadataBase: new URL(SITE_URL),
    title: resolvedTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: BRAND,
      title: resolvedTitle,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}

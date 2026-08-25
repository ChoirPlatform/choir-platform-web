/**
 * Single source of truth for brand, URLs and contact details.
 *
 * `BRAND` is deliberately the only place the product name is written, so a
 * rename is a one-line change. Anything marked TODO still needs real values
 * before the Google Play listing goes live.
 */

export const BRAND = "Choir Platform";

export const TAGLINE = "Every song your choir has ever sung, in one place.";

export const DESCRIPTION =
  `${BRAND} is the app choirs use to organise, rehearse and preserve their music. ` +
  "Songs, albums, lyrics, chords and announcements — searchable, shareable and available offline.";

/**
 * Canonical origin. Set NEXT_PUBLIC_SITE_URL at deploy time; the dev fallback
 * is port 3001 because the NestJS backend owns port 3000.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

/** Play Store listing for the shipped Flutter app (applicationId com.choirplatform.app). */
export const ANDROID_PACKAGE = "com.choirplatform.app";
export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;

/** Set NEXT_PUBLIC_APP_STORE_URL to turn the "Coming to iOS" badge into a real link. */
export const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL ?? null;

// TODO: replace with the real support inbox before submitting to Google Play.
export const CONTACT_EMAIL = "support@choirplatform.app";

// TODO: replace with the registered legal entity and jurisdiction.
export const LEGAL_ENTITY = "Choir Platform";
export const LEGAL_JURISDICTION = "TODO — jurisdiction";

export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Screenshots", href: "/#screenshots" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Screenshots", href: "/#screenshots" },
      { label: "Team", href: "/#team" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Delete your account", href: "/account-deletion" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact support", href: "/support" },
      { label: "Get it on Google Play", href: PLAY_STORE_URL },
    ],
  },
] as const;

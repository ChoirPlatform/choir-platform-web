# choir-platform-web

Marketing site for **Choir Platform**, the choir music app shipped on Google
Play as `com.choirplatform.app`. This site is marketing and compliance only —
no playback, no accounts, no waitlist.

Stack: Next.js 16 (App Router, Turbopack), React 19, Tailwind v4, shadcn/ui
(`radix-nova` preset), TypeScript.

## Running it

```bash
npm install
npm run dev     # http://localhost:3001
```

Port 3001, not 3000 — the NestJS backend owns 3000, and the backend's
`FRONTEND_VERIFY_EMAIL_URL` / `FRONTEND_RESET_PASSWORD_URL` already point at
`localhost:3001`.

```bash
npm run build   # production build (all routes prerender static)
npm run lint
npx tsc --noEmit
```

## Environment

Copy `.env.example` to `.env.local`. Both variables are read at build time.

| Variable | Effect |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for `metadataBase`, canonical tags, Open Graph URLs, `sitemap.xml` and `robots.txt`. **Must** be set at deploy time. |
| `NEXT_PUBLIC_APP_STORE_URL` | While unset, the iOS badge renders disabled as "Coming soon to App Store". Setting it turns the badge into a live link. |

## Where the content lives

All copy is in `src/content/` — components never hardcode text.

| File | Contents |
| --- | --- |
| `site.ts` | `BRAND`, tagline, store URLs, contact email, nav and footer links |
| `about.ts` | Product narrative, before/after comparison, how-it-works steps |
| `features.ts` | Feature grid and hero stats |
| `screenshots.ts` | Screenshot slots (see `public/screenshots/README.md`) |
| `team.ts` | Team cards — **placeholder** |
| `testimonials.ts` | Testimonials — **placeholder** |
| `faq.ts` | FAQ accordion |
| `legal/index.ts` | Privacy, terms, account deletion and support copy |

Renaming the product is a one-line change to `BRAND` in `src/content/site.ts`.

## Design tokens

Brand colours, radii and typeface mirror the Flutter app so the two surfaces
match:

- Gold `#F5B83F` on black text, dark surfaces `#0B0A0F` / `#131118` — copied
  from `choir_platform_mobile/lib/core/theme/app_colors.dart`.
- Urbanist, the same Google font the app loads in `app_theme.dart`.
- `--radius: 1.125rem` (18px), matching the app's button radius.

The site renders dark by default. Remove `dark` from the `<html>` className in
`src/app/layout.tsx` to switch to the light token set — both are defined in
`src/app/globals.css`.

## Before the Play listing goes live

- [ ] Resolve every `TODO` in `src/content/legal/index.ts` (legal entity,
      jurisdiction, retention periods, named service providers) and have the
      privacy policy and terms reviewed.
- [ ] Set `CONTACT_EMAIL` in `src/content/site.ts` to a real, monitored inbox —
      the account deletion flow depends on it.
- [ ] Set `NEXT_PUBLIC_SITE_URL` in the deploy environment.
- [ ] Replace the custom Play badge in `src/components/store-badges.tsx` with
      Google's official asset, per their brand guidelines.
- [ ] Add real screenshots and flip `ready: true` in `src/content/screenshots.ts`.
- [ ] Replace the placeholder team profiles.
- [ ] Add real testimonials and set `TESTIMONIALS_PLACEHOLDER` to `false`
      (until then the section is hidden in production builds).

## Not built yet

Blog, dedicated `/features` page, JSON-LD, analytics, and the auth bridge pages
(`/verify-email`, `/reset-password`, `/join`) that backend emails and choir
invite links currently point at.

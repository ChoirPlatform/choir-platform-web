import { APP_STORE_URL, PLAY_STORE_URL } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Store call-to-action badges.
 *
 * Android is live, so the Play badge is a real link. iOS renders as a disabled
 * "Coming to iOS" badge until NEXT_PUBLIC_APP_STORE_URL is set, at which point
 * it becomes a link automatically.
 *
 * NOTE: these are custom-drawn badges. Google's brand guidelines require the
 * official "Get it on Google Play" asset on public marketing pages — download
 * it from play.google.com/intl/en_us/badges and swap it in before launch.
 */

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden className={className}>
      <path
        fill="#00A0FF"
        d="M47.6 21.9C43 26.8 40.3 34.4 40.3 44.2v423.6c0 9.8 2.7 17.4 7.3 22.3l1.4 1.4L286.7 257v-2.8L49 20.5l-1.4 1.4z"
      />
      <path
        fill="#FFCE00"
        d="M365.8 336.1l-79.1-79.1v-2.8l79.2-79.2 1.8 1L461 229c27 15.3 27 40.4 0 55.8l-93.4 53.1-1.8-1.8z"
      />
      <path
        fill="#FF3A44"
        d="M367.6 335.1L286.7 254.2 47.6 493.4c8.9 9.4 23.6 10.6 40.1 1.2l279.9-159.5"
      />
      <path
        fill="#00F076"
        d="M367.6 175.1L87.7 15.6C71.2 6.2 56.5 7.4 47.6 16.8l239.1 239.1 80.9-80.8z"
      />
    </svg>
  );
}

function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.05 12.54c.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.62-1.7-3.18-1.72-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.62 1.11 8.79.73 1.06 1.6 2.25 2.74 2.21 1.1-.05 1.51-.71 2.85-.71 1.32 0 1.71.71 2.87.69 1.19-.02 1.94-1.08 2.66-2.15.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.32-.89-2.34-3.54zM14.88 5.6c.6-.74 1.01-1.75.9-2.77-.87.04-1.93.58-2.56 1.31-.56.65-1.05 1.7-.92 2.7.97.08 1.96-.5 2.58-1.24z" />
    </svg>
  );
}

const badgeBase =
  "inline-flex items-center gap-3 rounded-2xl border px-5 py-3 transition-colors";

export function PlayStoreBadge({ className }: { className?: string }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        badgeBase,
        "border-foreground/15 bg-foreground text-background hover:bg-foreground/90",
        "focus-visible:ring-ring/60 focus-visible:ring-[3px] focus-visible:outline-none",
        className,
      )}
    >
      <PlayGlyph className="size-7 shrink-0" />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.65rem] tracking-wide uppercase opacity-70">
          Get it on
        </span>
        <span className="text-base font-semibold">Google Play</span>
      </span>
    </a>
  );
}

export function AppStoreBadge({ className }: { className?: string }) {
  const content = (
    <>
      <AppleGlyph className="size-7 shrink-0" />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.65rem] tracking-wide uppercase opacity-70">
          {APP_STORE_URL ? "Download on the" : "Coming soon to"}
        </span>
        <span className="text-base font-semibold">App Store</span>
      </span>
    </>
  );

  if (!APP_STORE_URL) {
    return (
      <span
        aria-disabled="true"
        title="The iOS app is not available yet"
        className={cn(
          badgeBase,
          "border-border bg-transparent text-muted-foreground cursor-not-allowed opacity-70",
          className,
        )}
      >
        {content}
      </span>
    );
  }

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        badgeBase,
        "border-border bg-transparent hover:bg-accent",
        "focus-visible:ring-ring/60 focus-visible:ring-[3px] focus-visible:outline-none",
        className,
      )}
    >
      {content}
    </a>
  );
}

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <PlayStoreBadge />
      <AppStoreBadge />
    </div>
  );
}

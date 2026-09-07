import Image from "next/image";
import { Music4 } from "lucide-react";

import type { Screenshot } from "@/content/screenshots";
import { cn } from "@/lib/utils";

/**
 * Device frame for app screenshots.
 *
 * The aspect ratio matches the captures exactly (1080x2400, i.e. 9:20) so the
 * screen area is the same shape as the image and `object-cover` has nothing to
 * crop. Change both together if the capture size ever changes.
 *
 * Until a capture exists in /public/screenshots (Screenshot.ready === false)
 * the frame shows a labelled placeholder, so the layout is final and only the
 * image needs swapping in later.
 */
export function PhoneFrame({
  screenshot,
  priority = false,
  sizes = "(min-width: 640px) 288px, calc(100vw - 40px)",
  className,
}: {
  screenshot: Screenshot;
  priority?: boolean;
  /**
   * Rendered width of the frame, for `next/image` to pick a source from.
   * Every caller sets this — the frames are fixed or grid-derived widths, so
   * the default is only a fallback.
   */
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/20] w-full overflow-hidden rounded-[2.25rem] border border-foreground/12 bg-card p-2 shadow-2xl shadow-black/25",
        className,
      )}
    >
      <div className="relative size-full overflow-hidden rounded-[1.75rem] bg-muted">
        {screenshot.ready ? (
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        ) : (
          <PlaceholderScreen title={screenshot.title} />
        )}
      </div>

      {/* Faux status-bar notch, for the placeholder only — a real capture
          already contains the device's own status bar, and drawing this over
          it would cover the clock. */}
      {!screenshot.ready ? (
        <div
          className="absolute top-3.5 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground/85"
          aria-hidden
        />
      ) : null}
    </div>
  );
}

function PlaceholderScreen({ title }: { title: string }) {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-muted to-secondary px-6 text-center">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-gold-soft text-gold">
        <Music4 className="size-6" />
      </span>
      <span className="text-sm font-semibold">{title}</span>
      <span className="text-xs text-muted-foreground">
        Screenshot coming soon
      </span>
    </div>
  );
}

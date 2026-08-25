import Image from "next/image";
import { Music4 } from "lucide-react";

import type { Screenshot } from "@/content/screenshots";
import { cn } from "@/lib/utils";

/**
 * Device frame for app screenshots.
 *
 * Until a capture exists in /public/screenshots (Screenshot.ready === false)
 * the frame shows a labelled placeholder, so the layout is final and only the
 * image needs swapping in later.
 */
export function PhoneFrame({
  screenshot,
  priority = false,
  className,
}: {
  screenshot: Screenshot;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.25rem] border border-foreground/12 bg-card p-2 shadow-2xl shadow-black/25",
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
            sizes="(min-width: 1024px) 320px, 70vw"
            className="object-cover"
          />
        ) : (
          <PlaceholderScreen title={screenshot.title} />
        )}
      </div>

      {/* Status-bar notch */}
      <div
        className="absolute top-3.5 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground/85"
        aria-hidden
      />
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

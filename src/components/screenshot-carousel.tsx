"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { PhoneFrame } from "@/components/phone-frame";
import { Button } from "@/components/ui/button";
import type { Screenshot } from "@/content/screenshots";

/**
 * Horizontally scrolling gallery of app screenshots.
 *
 * A scroll-snap rail rather than a JS slider: swipe, trackpad, arrow keys and
 * the buttons all drive the same native scroll, so there is no transform state
 * to keep in sync and it works before hydration. The buttons are progressive
 * enhancement — the rail is already usable without them.
 *
 * Slides are sized so the next one peeks past the right edge, which is what
 * signals "there is more" on touch devices where no arrows are shown.
 */
export function ScreenshotCarousel({
  screenshots,
}: {
  screenshots: readonly Screenshot[];
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const syncArrows = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    // A pixel of slack: fractional scroll widths mean scrollLeft never quite
    // reaches the theoretical maximum.
    const maxScroll = rail.scrollWidth - rail.clientWidth;
    setCanScrollLeft(rail.scrollLeft > 1);
    setCanScrollRight(rail.scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    syncArrows();

    const rail = railRef.current;
    if (!rail) return;

    // Slide widths are viewport-relative, so the reachable scroll range
    // changes on resize even though the content does not.
    const observer = new ResizeObserver(syncArrows);
    observer.observe(rail);
    return () => observer.disconnect();
  }, [syncArrows]);

  const scrollByPage = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;

    // Measure the pitch between two real slides rather than assuming a width
    // and gap: the slide width is viewport-relative and the gap lives in a
    // Tailwind class, so anything hardcoded here would drift.
    const slides = rail.querySelectorAll("li");
    const first = slides[0]?.getBoundingClientRect();
    const second = slides[1]?.getBoundingClientRect();
    const step =
      first && second
        ? second.left - first.left
        : (first?.width ?? rail.clientWidth);

    rail.scrollBy({ left: step * direction });
  };

  return (
    <div className="mt-12">
      <div className="mb-5 hidden items-center justify-end gap-2 lg:flex">
        <Button
          variant="outline"
          size="icon-lg"
          className="rounded-full"
          onClick={() => scrollByPage(-1)}
          disabled={!canScrollLeft}
          aria-label="Show previous screenshots"
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          size="icon-lg"
          className="rounded-full"
          onClick={() => scrollByPage(1)}
          disabled={!canScrollRight}
          aria-label="Show next screenshots"
        >
          <ChevronRight />
        </Button>
      </div>

      {/* Bleeds to the viewport edges so slides scroll out of frame cleanly;
          the matching padding keeps the first slide on the container gutter. */}
      <div className="-mx-5 sm:-mx-8">
        <div
          ref={railRef}
          onScroll={syncArrows}
          data-scroll-rail
          // Focusable and named: a scrollable region has to be reachable by
          // keyboard, and the arrow buttons are hidden below lg.
          tabIndex={0}
          role="region"
          aria-label="App screenshots"
          className="no-scrollbar snap-x snap-mandatory scroll-px-5 overflow-x-auto scroll-smooth px-5 pb-2 focus-visible:ring-[3px] focus-visible:ring-ring/60 focus-visible:outline-none sm:scroll-px-8 sm:px-8"
        >
          <ul className="flex gap-6">
            {screenshots.map((screenshot) => (
              <li
                key={screenshot.src}
                className="w-[68vw] shrink-0 snap-start sm:w-56 lg:w-60"
              >
                <figure className="flex flex-col gap-4">
                  <PhoneFrame
                    screenshot={screenshot}
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 224px, 68vw"
                  />
                  <figcaption className="flex flex-col gap-1">
                    <span className="text-sm font-bold">{screenshot.title}</span>
                    <span className="text-sm text-pretty text-muted-foreground">
                      {screenshot.caption}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

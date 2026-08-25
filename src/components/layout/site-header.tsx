"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { BrandMark } from "@/components/layout/brand-mark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, PLAY_STORE_URL } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Floating pill navigation that gains a border and blur once the page scrolls,
 * so it reads as flat over the hero and lifted over content.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8">
        <nav
          className={cn(
            "flex items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5",
            scrolled
              ? "border-border bg-background/80 shadow-lg shadow-black/5 backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <BrandMark />

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-ring/60 focus-visible:ring-[3px] focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden rounded-full sm:inline-flex">
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                Get the app
              </a>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full md:hidden"
                >
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-4/5 sm:max-w-xs">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <BrandMark />
                  </SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-1 px-4">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="block rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-accent"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto p-4">
                  <Button asChild className="w-full rounded-full">
                    <a
                      href={PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get it on Google Play
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}

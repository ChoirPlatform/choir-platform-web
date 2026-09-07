import { Sparkles } from "lucide-react";

import { PhoneFrame } from "@/components/phone-frame";
import { Container } from "@/components/section";
import { StoreBadges } from "@/components/store-badges";
import { HERO_STATS } from "@/content/features";
import { HERO_SCREENSHOT, HERO_SIDE_SCREENSHOTS } from "@/content/screenshots";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Layered backdrop: faint grid, then a gold bloom behind the headline. */}
      <div className="brand-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="brand-glow pointer-events-none absolute inset-x-0 top-0 h-[42rem]" aria-hidden />

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold-soft px-4 py-1.5 text-xs font-semibold text-gold sm:text-sm">
            <Sparkles className="size-3.5" />
            Now on Google Play
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-6xl md:text-[4.25rem]">
            Your choir&rsquo;s entire songbook,{" "}
            <span className="brand-text-gradient">finally in one place.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-pretty text-muted-foreground sm:text-xl">
            Songs, albums, lyrics and chords your choir has built up over the
            years &mdash; organised, searchable and ready in rehearsal, on stage
            or offline.
          </p>

          <StoreBadges className="mt-9 justify-center" />

          <p className="mt-4 text-sm text-muted-foreground">
            Free to download. iOS coming soon.
          </p>

          <dl className="mt-14 grid w-full max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col items-center gap-1 bg-card px-4 py-5"
              >
                <dt className="text-base font-bold text-gold">{stat.value}</dt>
                <dd className="text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Three-up device cluster: the centre phone leads, flanked by two
            slightly recessed screens on wider viewports. */}
        <div className="relative mt-20 flex items-end justify-center gap-4 sm:mt-24 sm:gap-6">
          <PhoneFrame
            screenshot={HERO_SIDE_SCREENSHOTS[0]}
            sizes="192px"
            className="hidden w-48 translate-y-8 opacity-70 lg:block"
          />
          <PhoneFrame
            screenshot={HERO_SCREENSHOT}
            priority
            sizes="(min-width: 640px) 288px, 256px"
            className="w-64 sm:w-72"
          />
          <PhoneFrame
            screenshot={HERO_SIDE_SCREENSHOTS[1]}
            sizes="192px"
            className="hidden w-48 translate-y-8 opacity-70 lg:block"
          />
        </div>
      </Container>
    </section>
  );
}

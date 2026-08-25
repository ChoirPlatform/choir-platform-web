import { Check, X } from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/section";
import { ABOUT, BEFORE_AFTER } from "@/content/about";

export function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          eyebrow={ABOUT.eyebrow}
          title={ABOUT.title}
          align="left"
          className="max-w-3xl"
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {ABOUT.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-base text-pretty text-muted-foreground sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <ComparisonCard
            title={BEFORE_AFTER.before.title}
            items={BEFORE_AFTER.before.items}
            tone="before"
          />
          <ComparisonCard
            title={BEFORE_AFTER.after.title}
            items={BEFORE_AFTER.after.items}
            tone="after"
          />
        </div>
      </Container>
    </Section>
  );
}

function ComparisonCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: readonly string[];
  tone: "before" | "after";
}) {
  const isAfter = tone === "after";

  return (
    <div
      className={
        isAfter
          ? "rounded-3xl border border-gold/30 bg-gold-soft p-7 sm:p-8"
          : "rounded-3xl border border-border bg-card p-7 sm:p-8"
      }
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className={
                isAfter
                  ? "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold text-black"
                  : "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground"
              }
              aria-hidden
            >
              {isAfter ? (
                <Check className="size-3.5" strokeWidth={3} />
              ) : (
                <X className="size-3.5" strokeWidth={3} />
              )}
            </span>
            <span
              className={
                isAfter
                  ? "text-sm text-pretty sm:text-base"
                  : "text-sm text-pretty text-muted-foreground sm:text-base"
              }
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

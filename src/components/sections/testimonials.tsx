import { Quote } from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  TESTIMONIALS,
  TESTIMONIALS_INTRO,
  TESTIMONIALS_PLACEHOLDER,
} from "@/content/testimonials";

/**
 * While the quotes are placeholders they render in development only, so the
 * layout can be reviewed without ever publishing invented social proof. Set
 * TESTIMONIALS_PLACEHOLDER to false in src/content/testimonials.ts once real,
 * attributable quotes are in place and the section goes live everywhere.
 */
export function Testimonials() {
  const isPlaceholder = TESTIMONIALS_PLACEHOLDER;

  if (isPlaceholder && process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          eyebrow={TESTIMONIALS_INTRO.eyebrow}
          title={TESTIMONIALS_INTRO.title}
          body={TESTIMONIALS_INTRO.body}
        />

        {isPlaceholder ? (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Sample copy, visible in development only. Add real quotes in{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              src/content/testimonials.ts
            </code>{" "}
            and set{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              TESTIMONIALS_PLACEHOLDER
            </code>{" "}
            to false.
          </p>
        ) : null}

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <li
              key={testimonial.quote.slice(0, 32)}
              className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-7"
            >
              <Quote className="size-7 text-gold/50" aria-hidden />
              <blockquote className="flex-1 text-pretty">
                {testimonial.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                <Avatar className="size-10">
                  {testimonial.image ? (
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  ) : null}
                  <AvatarFallback className="bg-gold-soft text-sm font-bold text-gold">
                    {testimonial.name.replace(/^TODO\s*[—-]\s*/i, "").charAt(0) ||
                      "?"}
                  </AvatarFallback>
                </Avatar>
                <span className="flex flex-col">
                  <span className="text-sm font-bold">{testimonial.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </span>
                </span>
              </figcaption>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

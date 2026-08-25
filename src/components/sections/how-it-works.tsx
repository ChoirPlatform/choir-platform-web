import { Container, Section, SectionHeading } from "@/components/section";
import { HOW_IT_WORKS } from "@/content/about";

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-y border-border bg-card/40">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Three steps from scattered files to a shared library."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {HOW_IT_WORKS.map((step) => (
            <li
              key={step.step}
              className="relative flex flex-col gap-4 rounded-3xl border border-border bg-background p-7"
            >
              <span className="text-4xl font-bold text-gold/35 tabular-nums">
                {step.step}
              </span>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

import { Container, Section, SectionHeading } from "@/components/section";
import { FEATURES } from "@/content/features";

export function Features() {
  return (
    <Section id="features" className="relative overflow-hidden">
      <div
        className="brand-glow pointer-events-none absolute inset-x-0 top-0 h-96 opacity-60"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Everything a choir needs,{" "}
              <span className="brand-text-gradient">nothing it doesn&rsquo;t.</span>
            </>
          }
          body="Built around how choirs actually rehearse, perform and keep their music — not around a generic music player."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group relative flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 transition-colors duration-300 hover:border-gold/40 sm:p-7"
            >
              <span className="flex size-11 items-center justify-center rounded-2xl bg-gold-soft text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-black">
                <Icon className="size-5" />
              </span>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

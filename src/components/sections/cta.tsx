import { Container, Section } from "@/components/section";
import { StoreBadges } from "@/components/store-badges";

export function Cta() {
  return (
    <Section className="pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            className="brand-glow pointer-events-none absolute inset-0"
            aria-hidden
          />
          <div className="relative flex flex-col items-center">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              Give your choir one place for{" "}
              <span className="brand-text-gradient">all of its music.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
              Download the app, create your choir, and send your members a link.
              You can have the library started before the next rehearsal.
            </p>
            <StoreBadges className="mt-9 justify-center" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

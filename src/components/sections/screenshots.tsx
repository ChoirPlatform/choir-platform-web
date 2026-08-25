import { PhoneFrame } from "@/components/phone-frame";
import { Container, Section, SectionHeading } from "@/components/section";
import { SCREENSHOTS } from "@/content/screenshots";

export function Screenshots() {
  return (
    <Section id="screenshots">
      <Container>
        <SectionHeading
          eyebrow="Screenshots"
          title="A look inside the app."
          body="From the library to rehearsal mode — this is what your choir sees."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SCREENSHOTS.map((screenshot, index) => (
            <figure key={screenshot.src} className="flex flex-col gap-4">
              <PhoneFrame
                screenshot={screenshot}
                className={index % 2 === 1 ? "sm:translate-y-6" : undefined}
              />
              <figcaption className="flex flex-col gap-1">
                <span className="text-sm font-bold">{screenshot.title}</span>
                <span className="text-sm text-pretty text-muted-foreground">
                  {screenshot.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

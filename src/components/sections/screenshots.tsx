import { ScreenshotCarousel } from "@/components/screenshot-carousel";
import { Container, Section, SectionHeading } from "@/components/section";
import { SCREENSHOTS } from "@/content/screenshots";

export function Screenshots() {
  return (
    <Section id="screenshots">
      <Container>
        <SectionHeading
          eyebrow="Screenshots"
          title="A look inside the app."
          body="From the library to rehearsal mode — this is what your choir sees. Swipe to see more."
        />

        <ScreenshotCarousel screenshots={SCREENSHOTS} />
      </Container>
    </Section>
  );
}

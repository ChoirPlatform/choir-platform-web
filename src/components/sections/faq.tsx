import { Container, Section, SectionHeading } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ, FAQ_INTRO } from "@/content/faq";
import { CONTACT_EMAIL } from "@/content/site";

export function Faq() {
  return (
    <Section id="faq">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow={FAQ_INTRO.eyebrow}
              title={FAQ_INTRO.title}
              align="left"
            />
            <p className="mt-4 text-muted-foreground">
              Still stuck?{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-gold underline underline-offset-4"
              >
                Email support
              </a>
              .
            </p>
          </div>

          <Accordion type="single" collapsible className="gap-0">
            {FAQ.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base text-pretty text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}

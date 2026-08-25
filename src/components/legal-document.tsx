import { Container } from "@/components/section";
import type { LegalDocument } from "@/content/legal";

/** Shared renderer for the privacy, terms, account deletion and support pages. */
export function LegalDocumentView({ document }: { document: LegalDocument }) {
  const updated = new Date(`${document.updated}T00:00:00Z`).toLocaleDateString(
    "en-GB",
    { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" },
  );

  return (
    <article className="relative pt-32 pb-24 sm:pt-40">
      <div
        className="brand-glow pointer-events-none absolute inset-x-0 top-0 h-80 opacity-70"
        aria-hidden
      />
      <Container className="relative max-w-3xl">
        <header className="flex flex-col gap-4 border-b border-border pb-10">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {document.title}
          </h1>
          <p className="text-lg text-pretty text-muted-foreground">
            {document.summary}
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated{" "}
            <time dateTime={document.updated}>{updated}</time>
          </p>
        </header>

        <div className="flex flex-col gap-10 pt-10">
          {document.sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-4">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base text-pretty text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="flex flex-col gap-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)} className="flex gap-3">
                      <span
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden
                      />
                      <span className="text-base text-pretty text-muted-foreground">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}

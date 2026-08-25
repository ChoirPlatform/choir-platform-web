import { Container, Section, SectionHeading } from "@/components/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TEAM, TEAM_INTRO, TEAM_PLACEHOLDER } from "@/content/team";

function initials(name: string) {
  return name
    .replace(/^TODO\s*[—-]\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function Team() {
  return (
    <Section id="team" className="border-y border-border bg-card/40">
      <Container>
        <SectionHeading
          eyebrow={TEAM_INTRO.eyebrow}
          title={TEAM_INTRO.title}
          body={TEAM_INTRO.body}
        />

        {TEAM_PLACEHOLDER ? (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Placeholder profiles &mdash; replace in{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              src/content/team.ts
            </code>
          </p>
        ) : null}

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <li
              key={member.name + member.role}
              className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-background p-7 text-center"
            >
              <Avatar className="size-16">
                {member.image ? (
                  <AvatarImage src={member.image} alt={member.name} />
                ) : null}
                <AvatarFallback className="bg-gold-soft text-base font-bold text-gold">
                  {initials(member.name) || "?"}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm font-medium text-gold">{member.role}</p>
              </div>
              <p className="text-sm text-pretty text-muted-foreground">
                {member.bio}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

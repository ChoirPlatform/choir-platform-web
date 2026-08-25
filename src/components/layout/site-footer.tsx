import Link from "next/link";
import { Mail } from "lucide-react";

import { BrandMark } from "@/components/layout/brand-mark";
import { Container } from "@/components/section";
import { StoreBadges } from "@/components/store-badges";
import { BRAND, CONTACT_EMAIL, FOOTER_LINKS, TAGLINE } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-5">
            <BrandMark />
            <p className="max-w-xs text-sm text-pretty text-muted-foreground">
              {TAGLINE}
            </p>
            <StoreBadges />
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink href={link.href}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {year} {BRAND}. All rights reserved.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4" />
            {CONTACT_EMAIL}
          </a>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const className =
    "text-sm text-muted-foreground transition-colors hover:text-foreground";

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

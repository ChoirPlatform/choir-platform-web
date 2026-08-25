import type { Metadata } from "next";

import { LegalDocumentView } from "@/components/legal-document";
import { TERMS } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: TERMS.title,
  description: TERMS.summary,
  path: "/terms",
});

export default function TermsPage() {
  return <LegalDocumentView document={TERMS} />;
}

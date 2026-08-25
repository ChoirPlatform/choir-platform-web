import type { Metadata } from "next";

import { LegalDocumentView } from "@/components/legal-document";
import { SUPPORT } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: SUPPORT.title,
  description: SUPPORT.summary,
  path: "/support",
});

export default function SupportPage() {
  return <LegalDocumentView document={SUPPORT} />;
}

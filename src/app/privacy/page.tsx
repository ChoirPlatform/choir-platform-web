import type { Metadata } from "next";

import { LegalDocumentView } from "@/components/legal-document";
import { PRIVACY } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: PRIVACY.title,
  description: PRIVACY.summary,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalDocumentView document={PRIVACY} />;
}

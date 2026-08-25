import type { Metadata } from "next";

import { LegalDocumentView } from "@/components/legal-document";
import { ACCOUNT_DELETION } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

/**
 * Google Play requires a publicly reachable, crawlable account-deletion request
 * URL for any app that supports account creation. Do not add `noIndex` here.
 */
export const metadata: Metadata = buildMetadata({
  title: ACCOUNT_DELETION.title,
  description: ACCOUNT_DELETION.summary,
  path: "/account-deletion",
});

export default function AccountDeletionPage() {
  return <LegalDocumentView document={ACCOUNT_DELETION} />;
}

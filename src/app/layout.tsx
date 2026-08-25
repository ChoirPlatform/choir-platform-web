import type { Metadata, Viewport } from "next";
import { Geist_Mono, Urbanist } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { buildMetadata } from "@/lib/seo";

import "./globals.css";

/** Urbanist is the typeface the Flutter app uses (AppTheme via google_fonts). */
const urbanist = Urbanist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: "#0b0a0f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The site is dark by default to match the app's gold-on-near-black
    // identity. Removing `dark` here switches it to the light token set.
    <html
      lang="en"
      className={`dark ${urbanist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

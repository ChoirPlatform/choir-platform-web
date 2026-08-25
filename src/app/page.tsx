import type { Metadata } from "next";

import { About } from "@/components/sections/about";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Screenshots } from "@/components/sections/screenshots";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = buildMetadata({ path: "/" });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Team />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}

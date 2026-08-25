/**
 * Testimonials.
 *
 * PLACEHOLDER — these quotes are illustrative and are NOT from real users.
 * `TESTIMONIALS_PLACEHOLDER` gates the section: while it is `true` the section
 * renders a visible "sample copy" notice, and it is excluded from the live page
 * until real, attributable quotes replace it. Publishing invented testimonials
 * as if they were real is both misleading and, in most markets, unlawful.
 */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image?: string;
};

export const TESTIMONIALS_PLACEHOLDER = true;

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "TODO — a real quote about the problem this solved for their choir. Two or three sentences works best.",
    name: "TODO — Name",
    role: "Choir director, TODO — choir name",
  },
  {
    quote:
      "TODO — a real quote from a member about rehearsing or learning the repertoire.",
    name: "TODO — Name",
    role: "Member, TODO — choir name",
  },
  {
    quote:
      "TODO — a real quote about the archive or preservation angle, if one exists.",
    name: "TODO — Name",
    role: "TODO — role, TODO — choir name",
  },
];

export const TESTIMONIALS_INTRO = {
  eyebrow: "Testimonials",
  title: "What choirs say.",
  body: "Early feedback from the choirs using it.",
} as const;

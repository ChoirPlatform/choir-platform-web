/**
 * Team section content.
 *
 * PLACEHOLDER — every entry below is invented. Replace the names, roles and
 * bios with real people before launch, and drop headshots into
 * /public/team/<file>.jpg (set `image` to that path). With no `image`, the card
 * falls back to the member's initials.
 */

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  link?: string;
};

export const TEAM_PLACEHOLDER = true;

export const TEAM: TeamMember[] = [
  {
    name: "TODO — Name",
    role: "Founder & Product",
    bio: "TODO — one line on why they started this and what they own day to day.",
  },
  {
    name: "TODO — Name",
    role: "Mobile Engineering",
    bio: "TODO — one line on their background and what they build.",
  },
  {
    name: "TODO — Name",
    role: "Backend & Infrastructure",
    bio: "TODO — one line on their background and what they build.",
  },
  {
    name: "TODO — Name",
    role: "Design",
    bio: "TODO — one line on their background and what they shape.",
  },
];

export const TEAM_INTRO = {
  eyebrow: "Team",
  title: "Built by people who sing in choirs.",
  body: "A small team that got tired of hunting for the right version of a song twenty minutes before a service.",
} as const;

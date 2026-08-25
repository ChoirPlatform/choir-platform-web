/**
 * Feature copy.
 *
 * Every entry here maps to something the Flutter app has actually shipped
 * (see docs/PROJECT_STATUS_AND_ROADMAP.md, Stages 0-8). Do not add chat,
 * recommendations, server-synced playlists or historical collections — that
 * document lists them as explicitly out of scope.
 */

import {
  Bell,
  Download,
  KeyRound,
  Library,
  Link2,
  ListMusic,
  ScrollText,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const FEATURES: Feature[] = [
  {
    title: "One organised library",
    description:
      "Every song and album in one place, with the key, tempo, time signature, style, arrangement notes and tags your choir actually needs.",
    icon: Library,
  },
  {
    title: "Chords that transpose live",
    description:
      "Chords sit inline above the lyrics. Shift the key up or down and the whole sheet follows — no rewriting, no second copy.",
    icon: KeyRound,
  },
  {
    title: "Rehearsal mode",
    description:
      "A full-screen sheet that auto-scrolls at your pace and keeps the screen awake, so nobody loses their place mid-verse.",
    icon: ScrollText,
  },
  {
    title: "A player built for practice",
    description:
      "Background playback with a queue, playback speed, repeat and shuffle — so you can loop the hard bar while doing something else.",
    icon: ListMusic,
  },
  {
    title: "Works without signal",
    description:
      "Download the songs you need before rehearsal. Church basements and long bus rides stop being a problem.",
    icon: Download,
  },
  {
    title: "You decide who sees what",
    description:
      "Each song is public, members-only or admins-only. Share your best work with the world and keep works-in-progress inside the choir.",
    icon: ShieldCheck,
  },
  {
    title: "Invite by link",
    description:
      "Admins generate an invite link, members tap it, and they are in. Links can be listed and revoked at any time.",
    icon: Link2,
  },
  {
    title: "Announcements and events",
    description:
      "Post rehearsal times, service prep and event dates. Members get a push notification instead of a message lost in a group chat.",
    icon: Bell,
  },
  {
    title: "Find it in seconds",
    description:
      "Search across songs, choirs and albums, and filter by style, key, album or visibility. No more scrolling a folder of filenames.",
    icon: Search,
  },
];

/** Short proof points rendered under the hero. */
export const HERO_STATS = [
  { value: "Lyrics + chords", label: "on every song" },
  { value: "Offline", label: "downloads built in" },
  { value: "Push", label: "announcements and events" },
] as const;

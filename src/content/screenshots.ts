/**
 * Screenshot slots.
 *
 * `src` points into /public/screenshots. Until a real capture is dropped in,
 * the gallery renders a labelled placeholder instead of a broken image, so the
 * section is never blocked on assets.
 *
 * Slot names map to real screens in the Flutter app
 * (choir_platform_mobile/lib/features/**\/*_screen.dart).
 */

export type Screenshot = {
  /** File under /public/screenshots. Set `ready: true` once it exists. */
  src: string;
  alt: string;
  title: string;
  caption: string;
  ready: boolean;
};

export const SCREENSHOTS: Screenshot[] = [
  {
    src: "/screenshots/home.png",
    alt: "Choir Platform home screen showing recent songs and choirs",
    title: "Home",
    caption: "Recent songs, your choirs and what's new — the moment you open it.",
    ready: false,
  },
  {
    src: "/screenshots/choir-songs.png",
    alt: "A choir's song library listing songs with keys and albums",
    title: "Choir library",
    caption: "The whole repertoire, sorted and filterable.",
    ready: false,
  },
  {
    src: "/screenshots/rehearsal-mode.png",
    alt: "Rehearsal mode showing lyrics with chords above them",
    title: "Rehearsal mode",
    caption: "Auto-scrolling lyrics with chords, and the screen stays awake.",
    ready: false,
  },
  {
    src: "/screenshots/player.png",
    alt: "The full-screen audio player with queue and speed controls",
    title: "Player",
    caption: "Queue, speed, repeat and shuffle — and it keeps playing in the background.",
    ready: false,
  },
  {
    src: "/screenshots/album-detail.png",
    alt: "An album detail screen listing its songs in order",
    title: "Albums",
    caption: "Group songs into albums and set the running order.",
    ready: false,
  },
  {
    src: "/screenshots/search.png",
    alt: "Search results across songs, choirs and albums",
    title: "Search",
    caption: "One search across songs, choirs and albums.",
    ready: false,
  },
  {
    src: "/screenshots/notifications.png",
    alt: "The notification inbox listing announcements and new songs",
    title: "Announcements",
    caption: "Rehearsal notices and new songs, pushed to everyone.",
    ready: false,
  },
  {
    src: "/screenshots/admin-dashboard.png",
    alt: "The choir admin dashboard with member and invite management",
    title: "Admin tools",
    caption: "Members, roles, invite links and album management in one place.",
    ready: false,
  },
];

/** The single screenshot shown inside the hero device frame. */
export const HERO_SCREENSHOT = SCREENSHOTS[0];

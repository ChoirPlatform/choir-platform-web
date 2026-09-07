/**
 * Screenshot slots.
 *
 * `src` points into /public/screenshots. Every entry below is a real 1080x2400
 * capture from the Android build, status bar included — which is why
 * `PhoneFrame` draws no fake notch over a ready screenshot.
 *
 * `ready: false` falls back to a labelled placeholder rather than a broken
 * image, so a missing capture never blocks the section.
 *
 * Titles and captions describe what the capture actually shows; check the image
 * before editing one.
 */

import { BRAND } from "@/content/site";

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
    src: "/screenshots/home.jpg",
    alt: `${BRAND} home screen showing available songs and popular public choirs`,
    title: "Home",
    caption: "Recent songs, your choirs and what's new — the moment you open it.",
    ready: true,
  },
  {
    src: "/screenshots/player.jpg",
    alt: "The full-screen player with transport controls and playback speed",
    title: "Player",
    caption:
      "Queue, speed, repeat and shuffle — and it keeps playing in the background.",
    ready: true,
  },
  {
    src: "/screenshots/rehearsal-mode.jpg",
    alt: "A song's lyrics and chords with a key transposer and text-size control",
    title: "Chords & transposing",
    caption: "Chords stored with the song, transposable to any key on the spot.",
    ready: true,
  },
  {
    src: "/screenshots/song-details.jpg",
    alt: "A song detail screen showing key, style, duration and full lyrics",
    title: "Song detail",
    caption: "Key, style, duration and the full lyric sheet in one place.",
    ready: true,
  },
  {
    src: "/screenshots/album-detail.jpg",
    alt: "A choir profile with its about text, songs, albums and events",
    title: "Choir profile",
    caption: "Every choir's songs, albums and rehearsal events behind one page.",
    ready: true,
  },
  {
    src: "/screenshots/search.jpg",
    alt: "Search with tabs across songs, choirs and albums",
    title: "Search",
    caption: "One search across songs, choirs and albums.",
    ready: true,
  },
  {
    src: "/screenshots/local-songs.jpg",
    alt: "The local library listing albums found on the device",
    title: "Local library",
    caption: "Audio already on the phone, organised alongside your choir's music.",
    ready: true,
  },
  {
    src: "/screenshots/profile.jpg",
    alt: "A member profile with saved collections and the choirs they belong to",
    title: "Your profile",
    caption: "Playlists, favourites, saved albums and every choir you belong to.",
    ready: true,
  },
  {
    src: "/screenshots/join-link.jpg",
    alt: "An invitation screen offering to join a choir",
    title: "Invite links",
    caption: "Admins share a link; one tap joins the choir.",
    ready: true,
  },
  {
    src: "/screenshots/admin-dashboard.jpg",
    alt: "The choir admin dashboard with member, invite and content management",
    title: "Admin tools",
    caption: "Members, roles, invite links and album management in one place.",
    ready: true,
  },
  {
    src: "/screenshots/secure.jpg",
    alt: "A two-factor sign-in prompt asking for an authenticator code",
    title: "Two-factor sign-in",
    caption: "Optional authenticator codes and single-use recovery codes.",
    ready: true,
  },
  // `choir-songs.jpg` is deliberately not listed: that capture caught the song
  // list mid-load, so it is all loading skeletons. Re-shoot it with content on
  // screen and add it back here.
];

/** The phone at the centre of the hero cluster. */
export const HERO_SCREENSHOT = SCREENSHOTS[0];

/**
 * The two recessed phones flanking it on wide viewports. Named rather than
 * indexed at the call site so reordering [SCREENSHOTS] cannot silently change
 * which screens the hero shows.
 */
export const HERO_SIDE_SCREENSHOTS = [SCREENSHOTS[1], SCREENSHOTS[2]] as const;

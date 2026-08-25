/**
 * The "about the product" narrative.
 *
 * Drawn from the PRD's problem statement (docs/prd.md, sections 2-4): choir
 * music today lives in Telegram threads, USB sticks, Drive folders and printed
 * lyric books, and older recordings quietly disappear.
 */

export const ABOUT = {
  eyebrow: "About the product",
  title: "Choir music deserves better than a group chat.",
  body: [
    "Most choirs keep their music scattered across Telegram threads, PDFs, USB sticks, shared Drive folders and a printed lyric book that only one person has. Songs get hard to find, new members struggle to learn the repertoire, and the recordings that made the choir what it is slowly disappear.",
    `${"Choir Platform"} was built for that problem specifically. It is not a streaming service with a choir skin on top — it is a library, a rehearsal tool and an archive designed around how choirs actually work: rehearse, perform, preserve, repeat.`,
  ],
} as const;

/** Before / after contrast rendered as two columns. */
export const BEFORE_AFTER = {
  before: {
    title: "Today",
    items: [
      "Songs spread across chats, drives and phones",
      "Chords remembered by one person",
      "New members left to catch up alone",
      "Rehearsal notices lost in a group chat",
      "Old recordings quietly disappearing",
    ],
  },
  after: {
    title: `With Choir Platform`,
    items: [
      "One searchable library the whole choir shares",
      "Chords stored with the song and transposable on the spot",
      "Everything a new member needs on day one",
      "Announcements and events that actually reach people",
      "An archive that outlives any one phone",
    ],
  },
} as const;

/** Three-step "how it works" strip. */
export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Create your choir",
    description:
      "Set up a choir, invite your members with a link, and decide who can upload and who can administer.",
  },
  {
    step: "02",
    title: "Build the library",
    description:
      "Upload recordings, add lyrics and chords, group songs into albums, and mark each one public, members-only or admins-only.",
  },
  {
    step: "03",
    title: "Rehearse anywhere",
    description:
      "Members download what they need, follow the auto-scrolling sheet, transpose to their key, and get notified when something new lands.",
  },
] as const;

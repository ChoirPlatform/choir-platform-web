/**
 * FAQ content. Answers describe only behaviour the app actually ships.
 * No pricing question while pricing is out of scope.
 */

import { BRAND } from "@/content/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ: FaqItem[] = [
  {
    question: `What is ${BRAND}?`,
    answer:
      "A mobile app for choirs to store, organise and rehearse their music. Songs, albums, lyrics, chords, announcements and events live in one shared library that your whole choir can reach — on stage, in rehearsal, or offline.",
  },
  {
    question: "How do I join my choir?",
    answer:
      "Your choir admin generates an invite link and sends it to you. Tap the link with the app installed and you join automatically, or paste the invite token into the app. Admins can see every active invite link and revoke any of them.",
  },
  {
    question: "Does it work without an internet connection?",
    answer:
      "Yes. Download the songs you need ahead of time and they play from the device, so rehearsals in basements and practice on the bus both work. You need a connection to sync new songs and announcements.",
  },
  {
    question: "Can I see chords, and change the key?",
    answer:
      "Chords are stored with the song and shown inline above the lyrics. Transpose up or down and the whole sheet moves with you. Rehearsal mode adds auto-scrolling and keeps the screen from sleeping.",
  },
  {
    question: "Is our choir's music private?",
    answer:
      "Every song is set to public, members-only or admins-only. Members-only material is visible to people your admins have admitted to the choir, and nobody else. You choose, song by song, what the public can hear.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Android today, on Google Play. An iOS version is planned — this page will link to the App Store as soon as it is available.",
  },
  {
    question: "Who can upload songs and manage the choir?",
    answer:
      "Choir admins manage albums, invite links, member roles and announcements. Members can browse, listen, favourite and download what they have access to. Roles are set per choir, so being an admin of one choir does not affect another.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "Send a deletion request from the account deletion page and we will remove your account and personal data. The page sets out exactly what is deleted, what is retained, and how long it takes.",
  },
];

export const FAQ_INTRO = {
  eyebrow: "FAQ",
  title: "Questions, answered.",
  body: "Still stuck? Support is one email away.",
} as const;

/**
 * Legal and support page copy.
 *
 * IMPORTANT: this is a working draft written to describe the system as it
 * actually behaves — it has not been reviewed by a lawyer. Every `TODO` must be
 * resolved, and the whole text checked against your jurisdiction, before the
 * Google Play listing goes live.
 *
 * What the backend actually collects (verified against choir-platform-backend):
 * account email, full name, profile image, uploaded audio and cover art,
 * device push tokens for Firebase Cloud Messaging, and authentication audit
 * logs that include IP addresses.
 */

import {
  ANDROID_PACKAGE,
  BRAND,
  CONTACT_EMAIL,
  LEGAL_ENTITY,
  LEGAL_JURISDICTION,
} from "@/content/site";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  summary: string;
  /** ISO date shown as "Last updated". Update whenever the copy changes. */
  updated: string;
  sections: LegalSection[];
};

const LAST_UPDATED = "2026-08-26";

export const PRIVACY: LegalDocument = {
  title: "Privacy Policy",
  summary: `How ${BRAND} collects, uses and protects your information.`,
  updated: LAST_UPDATED,
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        `${BRAND} is operated by ${LEGAL_ENTITY} (TODO — registered company name and address), based in ${LEGAL_JURISDICTION}. This policy covers the ${BRAND} mobile app (Android package ${ANDROID_PACKAGE}) and this website.`,
        `If you have any question about this policy, email ${CONTACT_EMAIL}.`,
      ],
    },
    {
      heading: "Information you give us",
      bullets: [
        "Account details: your email address, full name and password (stored only as a salted hash, never in readable form).",
        "Profile image, if you choose to upload one.",
        "Content you upload: audio recordings, album cover art, lyrics, chords, song metadata, announcements and event details.",
        "Messages you send us, such as support requests.",
      ],
    },
    {
      heading: "Information we collect automatically",
      bullets: [
        "Device push notification tokens, so we can deliver announcements and new-song alerts through Firebase Cloud Messaging.",
        "Authentication and security logs, including the IP address and timestamp of sign-ins, password resets and email verifications. We keep these to detect and investigate account abuse.",
        "Basic technical information needed to serve the app, such as request logs.",
      ],
    },
    {
      heading: "How we use your information",
      bullets: [
        "To create and secure your account, and to sign you in.",
        "To show you the choirs, songs and albums you have access to, and to enforce whether content is public, members-only or admins-only.",
        "To send you the notifications you have enabled, and transactional emails such as email verification and password resets.",
        "To keep the service secure, investigate abuse, and meet our legal obligations.",
      ],
    },
    {
      heading: "Who can see your content",
      paragraphs: [
        "Visibility is set per song and per album by your choir's administrators. Public content can be seen by anyone using the app. Members-only content is visible to people your administrators have admitted to that choir. Admins-only content is restricted to administrators of that choir.",
        "We do not sell your personal information, and we do not use your uploaded recordings for anything other than delivering the service.",
      ],
    },
    {
      heading: "Service providers",
      paragraphs: [
        "We share the minimum data necessary with providers who run parts of the service on our behalf:",
      ],
      bullets: [
        "Cloud hosting and database for the application and your account data. (TODO — name the hosting provider and region.)",
        "Object storage and CDN for audio files and images. (TODO — name the storage provider and region.)",
        "Google Firebase Cloud Messaging, to deliver push notifications to your device.",
        "An email delivery provider, for verification, password reset and support email. (TODO — name the email provider.)",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "We keep your account data for as long as your account exists. Authentication and security logs are kept for a limited period for fraud and abuse investigation. (TODO — state the retention period, for example 12 months.)",
        "When you delete your account we remove your personal data as described on the account deletion page. Content you uploaded to a choir may be retained by that choir where it forms part of the choir's shared library; where that applies, it is disassociated from your account.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "Depending on where you live, you may have the right to access, correct, export or delete your personal data, to object to or restrict certain processing, and to complain to your local data protection authority.",
        `To exercise any of these rights, email ${CONTACT_EMAIL}. To delete your account, follow the steps on our account deletion page.`,
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        `${BRAND} is not directed at children under 13, and we do not knowingly collect their personal information. If you believe a child has created an account, contact ${CONTACT_EMAIL} and we will remove it. (TODO — confirm the correct minimum age for your jurisdiction and your Play Store content rating.)`,
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "Passwords are stored hashed, sessions can be listed and revoked from within the app, and multi-factor authentication is available on your account. No system is perfectly secure, but we take reasonable technical and organisational measures to protect your data.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "If we make material changes we will update the date at the top of this page and, where appropriate, notify you in the app.",
      ],
    },
  ],
};

export const TERMS: LegalDocument = {
  title: "Terms of Service",
  summary: `The rules for using ${BRAND}.`,
  updated: LAST_UPDATED,
  sections: [
    {
      heading: "Agreement",
      paragraphs: [
        `By creating an account or using ${BRAND}, you agree to these terms. If you do not agree, please do not use the service. (TODO — legal review required before launch.)`,
      ],
    },
    {
      heading: "Your account",
      bullets: [
        "You must provide accurate information and keep your login credentials secure.",
        "You are responsible for activity that happens under your account.",
        "You must be old enough to enter a contract in your jurisdiction. (TODO — state the minimum age.)",
      ],
    },
    {
      heading: "Content you upload",
      paragraphs: [
        "You keep ownership of everything you upload. You grant us the licence needed to store, process and deliver that content to the people you have chosen to share it with, and for no other purpose.",
        "You must have the rights to what you upload. Choir music is frequently under copyright: arrangements, sheet music and recordings may all be separately protected. Do not upload material you are not licensed to share, and set visibility appropriately.",
      ],
    },
    {
      heading: "Acceptable use",
      bullets: [
        "Do not upload unlawful, infringing, hateful or abusive material.",
        "Do not attempt to access choirs, songs or accounts you have not been given access to.",
        "Do not disrupt, overload or reverse engineer the service.",
      ],
    },
    {
      heading: "Choir administrators",
      paragraphs: [
        "Choir administrators control membership, roles, invite links and the visibility of their choir's content. If you are an administrator, you are responsible for who you admit and for what your choir publishes publicly.",
      ],
    },
    {
      heading: "Removal and suspension",
      paragraphs: [
        "We may remove content or suspend accounts that breach these terms or the law, including on receipt of a valid copyright complaint. (TODO — add your takedown and counter-notice process.)",
      ],
    },
    {
      heading: "Service availability",
      paragraphs: [
        "The service is provided as-is. We do not guarantee uninterrupted availability, and we may change or discontinue features. (TODO — add warranty disclaimer and liability limits appropriate to your jurisdiction.)",
      ],
    },
    {
      heading: "Governing law and contact",
      paragraphs: [
        `These terms are governed by the laws of ${LEGAL_JURISDICTION} (TODO — confirm). Questions about these terms can be sent to ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

export const ACCOUNT_DELETION: LegalDocument = {
  title: "Delete your account",
  summary: `How to request deletion of your ${BRAND} account and data.`,
  updated: LAST_UPDATED,
  sections: [
    {
      heading: "Which app this covers",
      paragraphs: [
        `This page covers the ${BRAND} app, published on Google Play as ${ANDROID_PACKAGE}.`,
      ],
    },
    {
      heading: "How to request deletion",
      paragraphs: [
        `Send an email to ${CONTACT_EMAIL} from the address registered to your account, with the subject line "Delete my account".`,
        "So we can verify the request, include the email address on the account and, if you know it, the name of any choir you belong to. We may ask one follow-up question to confirm it is really you before we act.",
      ],
    },
    {
      heading: "What gets deleted",
      bullets: [
        "Your account and login credentials.",
        "Your name, email address and profile image.",
        "Your favourites, notification preferences and registered devices.",
        "Your choir memberships and roles.",
      ],
    },
    {
      heading: "What may be retained, and why",
      bullets: [
        "Songs, recordings and albums you uploaded to a choir may remain in that choir's shared library, because they belong to the choir's collection rather than to you alone. Where they are kept, they are disassociated from your account. If you want your uploads removed too, say so in your email and we will remove them.",
        "Authentication and security logs are retained for a limited period for fraud and abuse investigation. (TODO — state the exact retention period.)",
        "Records we are required to keep by law, for as long as the law requires.",
      ],
    },
    {
      heading: "How long it takes",
      paragraphs: [
        "We aim to acknowledge your request within (TODO — e.g. 3 working days) and to complete deletion within (TODO — e.g. 30 days) of verifying it. We will email you to confirm once it is done.",
      ],
    },
    {
      heading: "If you administer a choir",
      paragraphs: [
        "If you are the only administrator of a choir, tell us in your email whether the choir should be transferred to another member or deleted along with your account, so its members are not left without an administrator.",
      ],
    },
  ],
};

export const SUPPORT: LegalDocument = {
  title: "Support",
  summary: `Get help with ${BRAND}.`,
  updated: LAST_UPDATED,
  sections: [
    {
      heading: "Contact us",
      paragraphs: [
        `Email ${CONTACT_EMAIL} and we will get back to you. (TODO — state your real response time, for example within 2 working days.)`,
        "It helps if you include your device model, your Android version, the name of your choir, and what you were doing when the problem happened.",
      ],
    },
    {
      heading: "Common questions",
      paragraphs: [
        "Most questions are answered on the FAQ section of the home page — including how to join a choir, how offline downloads work, and who can see your choir's music.",
      ],
    },
    {
      heading: "Account and privacy requests",
      paragraphs: [
        "To access, correct or export your data, email us at the address above. To delete your account, follow the steps on the account deletion page.",
      ],
    },
    {
      heading: "Reporting content",
      paragraphs: [
        "If you believe content on the platform infringes your copyright or breaks our terms, email us with a link or a description of the content and we will investigate.",
      ],
    },
  ],
};

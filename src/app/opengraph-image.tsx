import { readFileSync } from "node:fs";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { BRAND, TAGLINE } from "@/content/site";

export const alt = `${BRAND} — ${TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GOLD = "#f5b83f";
const INK = "#0b0a0f";

/**
 * Satori cannot fetch a relative `src`, and this route may render before the
 * server can serve /public — so the logo is inlined as a data URI, read once
 * at module scope rather than per request.
 */
const LOGO = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/brand/selah-logo.png"),
).toString("base64")}`;

/**
 * Social sharing card. Rendered at build time for the site root and reused as
 * both the Open Graph and Twitter image.
 *
 * Satori (which powers ImageResponse) supports only a subset of CSS — keep to
 * flexbox, solid colours and gradients, and give every element an explicit
 * `display`.
 */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: INK,
          backgroundImage: `radial-gradient(60% 60% at 50% 0%, rgba(245,184,63,0.22) 0%, rgba(11,10,15,0) 70%)`,
          color: "#f5f3f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} width={64} height={64} alt="" />
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            {BRAND}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: 940,
            }}
          >
            Your choir&rsquo;s entire songbook, in one place.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a9a3b5", maxWidth: 860 }}>
            Songs, albums, lyrics and chords — organised, searchable and ready
            offline.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 72, height: 6, borderRadius: 999, backgroundColor: GOLD }} />
          <div style={{ display: "flex", fontSize: 26, color: "#a9a3b5" }}>
            Now on Google Play
          </div>
        </div>
      </div>
    ),
    size,
  );
}

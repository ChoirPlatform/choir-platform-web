import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Gold app mark used as the favicon, matching the header wordmark glyph. */
export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5b83f",
          borderRadius: 14,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24">
          <path
            d="M4 6h16M4 11h16M4 16h9"
            stroke="#000000"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="17" cy="17" r="3" fill="#000000" />
          <path d="M20 17V9" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size,
  );
}

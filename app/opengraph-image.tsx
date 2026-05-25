import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { SITE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const logoData = readFileSync(join(process.cwd(), "public/logo/spinebar-logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        background: "#0d1f0f",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
      }}
    >
      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt=""
        width={100}
        height={150}
        style={{ objectFit: "contain", filter: "invert(1)", marginBottom: 24 }}
      />

      {/* Gold rule */}
      <div style={{ width: 60, height: 1, background: "#c9a84c", marginBottom: 20 }} />

      {/* Practice name */}
      <div
        style={{
          color: "#f6f1e6",
          fontSize: 72,
          fontFamily: "Georgia, serif",
          letterSpacing: "-1px",
          lineHeight: 1.1,
          marginBottom: 16,
        }}
      >
        {SITE.name}
      </div>

      {/* Subtitle */}
      <div
        style={{
          color: "#c9a84c",
          fontSize: 22,
          fontFamily: "sans-serif",
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: 40,
        }}
      >
        Dr. Arthur Chakrian, DC &nbsp;·&nbsp; {SITE.location}, CA
      </div>

      {/* Bottom rule */}
      <div style={{ width: 360, height: 1, background: "#1e3a1e", marginBottom: 20 }} />

      {/* Tagline */}
      <div
        style={{
          color: "#b8b2a8",
          fontSize: 30,
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
        }}
      >
        {SITE.tagline}
      </div>
    </div>,
    { ...size }
  );
}

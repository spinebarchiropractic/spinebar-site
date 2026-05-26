import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Spine Bar Chiropractic | Toluca Lake";

export default function OGImage() {
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
      }}
    >
      {/* Logo mark */}
      <div
        style={{
          color: "#c9a84c",
          fontSize: 48,
          fontFamily: "serif",
          fontWeight: "bold",
          letterSpacing: "6px",
          marginBottom: 24,
        }}
      >
        SB
      </div>

      {/* Gold rule */}
      <div
        style={{
          width: 60,
          height: 1,
          background: "#c9a84c",
          marginBottom: 24,
        }}
      />

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
        Spine Bar Chiropractic
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
        DR. ARTHUR CHAKRIAN, DC · TOLUCA LAKE, CA
      </div>

      {/* Tagline */}
      <div
        style={{
          color: "#b8b2a8",
          fontSize: 28,
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
        }}
      >
        Care you'll actually look forward to.
      </div>
    </div>,
    { ...size }
  );
}

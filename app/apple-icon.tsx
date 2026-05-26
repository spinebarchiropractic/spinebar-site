import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        gap: 10,
      }}
    >
      <div
        style={{
          color: "#f6f1e6",
          fontSize: 64,
          fontFamily: "serif",
          fontWeight: "bold",
          letterSpacing: "-2px",
          lineHeight: 1,
        }}
      >
        SB
      </div>
      <div
        style={{
          color: "#c9a84c",
          fontSize: 16,
          fontFamily: "sans-serif",
          letterSpacing: "4px",
          textTransform: "uppercase",
        }}
      >
        SPINE BAR
      </div>
    </div>,
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "#0d1f0f",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "6px",
      }}
    >
      <div
        style={{
          color: "#c9a84c",
          fontSize: 13,
          fontFamily: "serif",
          fontWeight: "bold",
          letterSpacing: "-0.5px",
        }}
      >
        SB
      </div>
    </div>,
    { ...size }
  );
}

import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const logoData = readFileSync(join(process.cwd(), "public/logo/spinebar-logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        background: "#0d1f0f",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt=""
        width={20}
        height={30}
        style={{ objectFit: "contain", filter: "invert(1)" }}
      />
    </div>,
    { ...size }
  );
}

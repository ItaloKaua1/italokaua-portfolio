import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "96px",
        background: "#0c0b0a",
        color: "#f2efea",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 28,
          color: "#e8a33d",
          marginBottom: 28,
        }}
      >
        <span>$</span>
        <span>whoami</span>
      </div>
      <div style={{ display: "flex", fontSize: 68, fontWeight: 600 }}>
        {siteConfig.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 34,
          color: "#9a948c",
          marginTop: 20,
        }}
      >
        {siteConfig.role}
      </div>
    </div>,
    { ...size },
  );
}

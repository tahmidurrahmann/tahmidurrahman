import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tahmidur Rahman — Full-Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        backgroundColor: "#0a0a0f",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "6px",
          height: "100%",
          backgroundColor: "#a855f7",
        }}
      />

      {/* Tag */}
      <p
        style={{
          color: "#a855f7",
          fontSize: "22px",
          margin: "0 0 20px 0",
          letterSpacing: "4px",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        Full-Stack Web Developer
      </p>

      {/* Name */}
      <h1
        style={{
          color: "#ffffff",
          fontSize: "76px",
          fontWeight: "bold",
          margin: "0 0 28px 0",
          lineHeight: 1.05,
        }}
      >
        Tahmidur Rahman
      </h1>

      {/* Stack */}
      <p
        style={{
          color: "#94a3b8",
          fontSize: "26px",
          margin: "0 0 56px 0",
          fontWeight: 400,
        }}
      >
        Next.js · Node.js · MongoDB · PostgreSQL · TypeScript
      </p>

      {/* CTA + domain row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            backgroundColor: "#a855f7",
            color: "#ffffff",
            fontSize: "22px",
            padding: "16px 36px",
            borderRadius: "8px",
            fontWeight: 700,
          }}
        >
          View Portfolio →
        </div>
        <p
          style={{
            color: "#475569",
            fontSize: "20px",
            margin: 0,
          }}
        >
          tahmidurrahman.vercel.app
        </p>
      </div>
    </div>,
    { ...size },
  );
}

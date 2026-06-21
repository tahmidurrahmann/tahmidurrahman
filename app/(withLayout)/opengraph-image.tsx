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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow top-right — matches your banner */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-60px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(198,6,120,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Ambient glow bottom-left — matches your banner */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(83,74,183,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Left content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "660px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Small label — matches your Heading component style */}
        <p
          style={{
            color: "#c60678",
            fontSize: "20px",
            margin: 0,
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1
          style={{
            color: "#ffffff",
            fontSize: "72px",
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.05,
            letterSpacing: "-1px",
          }}
        >
          Tahmidur Rahman
        </h1>

        {/* Title with gradient — matches your h1 gradient */}
        <p
          style={{
            fontSize: "36px",
            fontWeight: 700,
            margin: 0,
            background: "linear-gradient(135deg, #c60678, #8b2fc9)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Full-Stack Web Developer
        </p>

        {/* Divider line — matches your w-10 h-0.5 */}
        <div
          style={{
            width: "48px",
            height: "3px",
            backgroundColor: "#c60678",
            borderRadius: "999px",
          }}
        />

        {/* Stack */}
        <p
          style={{
            color: "#a0a0b0",
            fontSize: "22px",
            margin: 0,
            fontWeight: 400,
          }}
        >
          Next.js · Node.js · MongoDB · PostgreSQL · TypeScript
        </p>

        {/* CTA — matches your button style */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "8px",
          }}
        >
          <div
            style={{
              backgroundColor: "#c60678",
              color: "#ffffff",
              fontSize: "20px",
              padding: "14px 32px",
              borderRadius: "8px",
              fontWeight: 700,
            }}
          >
            See my work →
          </div>
          <p
            style={{
              color: "#555570",
              fontSize: "18px",
              margin: 0,
            }}
          >
            tahmidurrahman.vercel.app
          </p>
        </div>
      </div>

      {/* Right: Photo with ring — matches your banner photo */}
      <div
        style={{
          position: "relative",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Spinning dashed ring effect (static in OG) */}
        <div
          style={{
            position: "absolute",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            border: "2px dashed rgba(198,6,120,0.5)",
          }}
        />
        <img
          src="https://res.cloudinary.com/tahmidur-rahman/image/upload/v1782022282/programmer-working_zshm76.webp"
          alt="Tahmidur Rahman"
          width={240}
          height={240}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #0a0a0f",
          }}
        />
      </div>
    </div>,
    { ...size },
  );
}

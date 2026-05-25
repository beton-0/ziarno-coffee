import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ziarno. — Specialty coffee · Berlin & Copenhagen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#1A1A1A",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px 96px",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* grain texture dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(245,241,234,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* top-right decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            border: "1px solid rgba(245,241,234,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            border: "1px solid rgba(107,52,16,0.2)",
          }}
        />

        {/* top section */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* coffee bean SVG */}
          <svg width="28" height="36" viewBox="0 0 80 100">
            <ellipse cx="40" cy="50" rx="22" ry="34" fill="#6B3410" />
            <path
              d="M40 16 Q35 50 40 84"
              stroke="#1A1A1A"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <span
            style={{
              color: "rgba(245,241,234,0.4)",
              fontSize: "13px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            SPECIALTY COFFEE
          </span>
        </div>

        {/* main title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "128px",
              fontWeight: "300",
              color: "#F5F1EA",
              lineHeight: "0.95",
              letterSpacing: "-0.04em",
              display: "flex",
              alignItems: "baseline",
            }}
          >
            Ziarno
            <span style={{ color: "#6B3410" }}>.</span>
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(245,241,234,0.5)",
              letterSpacing: "0.15em",
              fontFamily: "monospace",
              textTransform: "uppercase",
            }}
          >
            Berlin · Kreuzberg &nbsp;&nbsp;/&nbsp;&nbsp; Copenhagen · Nørrebro
          </div>
        </div>

        {/* bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "32px",
              alignItems: "center",
            }}
          >
            {["Single origin", "Small batch", "Direct trade"].map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "rgba(245,241,234,0.35)",
                  fontSize: "13px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#6B3410",
                  }}
                />
                {tag}
              </div>
            ))}
          </div>

          <div
            style={{
              color: "rgba(245,241,234,0.2)",
              fontSize: "13px",
              letterSpacing: "0.2em",
              fontFamily: "monospace",
              textTransform: "uppercase",
            }}
          >
            ziarno-coffee.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

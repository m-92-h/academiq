import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Academiq | Graduate Studies Platform for Iraqi Students";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const cairoFont = await fetch(new URL("/fonts/Cairo-Bold.ttf", "https://academiq-edu.vercel.app")).then((res) => res.arrayBuffer());

  const cairoRegular = await fetch(new URL("/fonts/Cairo-Regular.ttf", "https://academiq-edu.vercel.app")).then((res) => res.arrayBuffer());

  const subjects = [
    { label: "Arabic Language", color: "#60a5fa" },
    { label: "English Language", color: "#34d399" },
    { label: "Computer Science", color: "#c084fc" },
  ];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#09090b",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Mesh gradient blobs ── */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 65%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -180,
          left: 80,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 65%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 200,
          left: -80,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(192,132,252,0.18) 0%, transparent 65%)",
          display: "flex",
        }}
      />

      {/* ── Noise texture lines (horizontal) ── */}
      {[0.08, 0.22, 0.45, 0.68, 0.85].map((pct, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${pct * 100}%`,
            left: 0,
            right: 0,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
            display: "flex",
          }}
        />
      ))}

      {/* ── Main card (glassmorphism) ── */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 60,
          right: 60,
          bottom: 60,
          borderRadius: 24,
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "52px 64px",
        }}
      >
        {/* ── Top row: domain left + logo badge right ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Domain — left side */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 999,
              padding: "8px 20px",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.03em",
                fontFamily: "monospace",
              }}
            >
              academiq-edu.vercel.app
            </span>
          </div>

          {/* Logo badge — right side */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(192,132,252,0.2))",
              border: "1px solid rgba(99,102,241,0.4)",
              borderRadius: 16,
              padding: "10px 24px",
            }}
          >
            {/* Graduation cap SVG */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <span
              style={{
                fontSize: 20,
                color: "#a5b4fc",
                fontWeight: "bold",
                letterSpacing: "0.01em",
              }}
            >
              Graduate Studies Platform
            </span>
          </div>
        </div>

        {/* ── Center: main headline ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 20,
            width: "100%",
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 110,
              fontWeight: "bold",
              letterSpacing: "-4px",
              lineHeight: 1,
              textAlign: "left",
              background: "linear-gradient(135deg, #ffffff 40%, rgba(255,255,255,0.55))",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Academiq
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.5)",
              textAlign: "left",
              maxWidth: 720,
              lineHeight: 1.55,
              fontWeight: "normal",
            }}
          >
            A free learning platform for Iraqi graduate students preparing for national competency exams
          </div>
        </div>

        {/* ── Bottom row: subject pills ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 14,
            width: "100%",
          }}
        >
          {subjects.map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${s.color}40`,
                borderRadius: 999,
                padding: "10px 26px",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: s.color,
                  display: "flex",
                }}
              />
              <span
                style={{
                  fontSize: 22,
                  color: s.color,
                  fontWeight: "bold",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Cairo",
          data: cairoFont,
          weight: 700,
          style: "normal",
        },
        {
          name: "Cairo",
          data: cairoRegular,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}

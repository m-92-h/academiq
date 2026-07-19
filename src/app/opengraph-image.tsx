import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "أكاديميك | منصة الطلاب للدراسات العليا";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #0b0f19 0%, #111827 50%, #0f1f0f 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "serif",
        direction: "rtl",
        position: "relative",
      }}
    >
      {/* Background decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(30, 58, 138, 0.2)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(59, 130, 246, 0.15)",
          display: "flex",
        }}
      />

      {/* Logo / Brand mark */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 32,
          background: "rgba(30, 58, 138, 0.3)",
          borderRadius: 24,
          padding: "16px 40px",
          border: "1px solid rgba(59, 130, 246, 0.4)",
        }}
      >
        <div
          style={{
            fontSize: 100,
            color: "#60a5fa",
            fontWeight: "bold",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          أكاديميك
        </div>
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 38,
          color: "#e2e8f0",
          marginTop: 16,
          opacity: 0.85,
          textAlign: "center",
          maxWidth: 800,
          lineHeight: 1.4,
        }}
      >
        منصة الطلاب للدراسات العليا في العراق
      </div>

      {/* Subject badges */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 16,
          marginTop: 48,
        }}
      >
        {["اللغة العربية", "اللغة الإنجليزية", "الحاسوب"].map((subject) => (
          <div
            key={subject}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 50,
              padding: "10px 28px",
              fontSize: 24,
              color: "#94a3b8",
            }}
          >
            {subject}
          </div>
        ))}
      </div>

      {/* Domain */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          fontSize: 22,
          color: "#475569",
          letterSpacing: "0.05em",
        }}
      >
        https://academiq-edu.vercel.app/
      </div>
    </div>,
    { ...size },
  );
}

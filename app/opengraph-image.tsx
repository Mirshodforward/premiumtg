import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Premiumtg — Telegram Premium 10 soniyada avtomatik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 20% 20%, #12526f 0%, #070b14 55%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg,#46adf5,#1b87bb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
            }}
          >
            ✈️
          </div>
          <div style={{ fontSize: 40, fontWeight: 800 }}>Premiumtg</div>
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
          Telegram Premium
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            background: "linear-gradient(90deg,#7cc4ff,#46adf5)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          10 soniyada avtomatik
        </div>
        <div style={{ fontSize: 34, color: "#a9d9ff", marginTop: 28 }}>
          Eng arzon · Click · Payme · Paynet · Uzcard · Humo
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";
export const alt = "Premiumtg — Telegram Premium sotib olish";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "linear-gradient(120deg, #f0f2ff, #f1e4ff)",
        color: "#29213f",
        padding: 70,
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
        premiumtg.uz{" "}
        <span style={{ marginLeft: 28, fontSize: 18, color: "#716381" }}>
          O‘zbekiston / Telegram Premium
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>
          Telegram Premium.
        </div>
        <div style={{ fontSize: 72, color: "#8042c0", letterSpacing: -3 }}>
          Ko‘proq imkoniyat.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 40,
          borderTop: "1px solid #ccbaea",
          paddingTop: 25,
          fontSize: 23,
        }}
      >
        <span>3 · 6 · 12 oy</span>
        <span>Username orqali</span>
        <span>So‘mda to‘lov</span>
      </div>
    </div>,
    size,
  );
}

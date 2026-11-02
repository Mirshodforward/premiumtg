import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
export const alt = "Premiumtg — Telegram Premium sotib olish";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
const star = `data:image/png;base64,${await readFile(
  join(process.cwd(), "public/brand/star-512.png"),
  "base64",
)}`;
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#010524",
        backgroundImage:
          "radial-gradient(circle at 78% 46%, rgba(123,59,255,0.55), transparent 42%), radial-gradient(circle at 8% 100%, rgba(46,107,255,0.35), transparent 40%), radial-gradient(circle at 100% 0%, rgba(228,75,255,0.3), transparent 32%)",
        color: "#f3f5ff",
        padding: 70,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 700,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          <img src={star} width={44} height={44} style={{ marginRight: 14 }} />
          premiumtg.uz
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -3 }}>
            Telegram Premium.
          </div>
          <div style={{ fontSize: 70, color: "#9fd8ff", letterSpacing: -3 }}>
            Ko‘proq imkoniyat.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 36,
            borderTop: "1px solid rgba(160,175,255,0.3)",
            paddingTop: 24,
            fontSize: 24,
            color: "#c4cbf0",
          }}
        >
          <span>3 · 6 · 12 oy</span>
          <span>Username orqali</span>
          <span>So‘mda to‘lov</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={star} width={360} height={360} />
      </div>
    </div>,
    size,
  );
}

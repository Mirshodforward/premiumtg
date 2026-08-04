import { ImageResponse } from "next/og";

export const alt = "Premiumtg — Telegram Premium 10 soniyada avtomatik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OG rasm — sayt bilan bir xil neo-brutalist tilda:
 * oq fon, qalin qora chegara, UPPERCASE display matn, changli-ko'k aksent,
 * qattiq siljigan soya (blursiz).
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 56,
          background: "#ffffff",
          color: "#14171b",
          fontFamily: "sans-serif",
          border: "16px solid #14171b",
        }}
      >
        {/* Yuqori qator: logotip + qadamlar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", position: "relative", width: 44, height: 26 }}>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 5,
                  width: 18,
                  height: 18,
                  background: "#4f86c6",
                  opacity: 0.2,
                  transform: "rotate(45deg)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 9,
                  top: 5,
                  width: 18,
                  height: 18,
                  background: "#4f86c6",
                  opacity: 0.5,
                  transform: "rotate(45deg)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 18,
                  top: 5,
                  width: 18,
                  height: 18,
                  background: "#4f86c6",
                  transform: "rotate(45deg)",
                }}
              />
            </div>
            <div
              style={{
                fontSize: 34,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: -1,
              }}
            >
              Premiumtg.uz
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 3,
              border: "3px solid #14171b",
              padding: "8px 16px",
            }}
          >
            01 Username · 02 To&apos;lov · 03 10 soniya
          </div>
        </div>

        {/* Sarlavha */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: -3,
            }}
          >
            Telegram Premium
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: -3,
              color: "#4f86c6",
            }}
          >
            10 soniyada
          </div>

          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginTop: 26,
              background: "#4f86c6",
              color: "#ffffff",
              border: "4px solid #14171b",
              boxShadow: "10px 10px 0 0 #14171b",
              padding: "12px 20px",
              fontSize: 28,
              fontWeight: 700,
              transform: "rotate(-2deg)",
            }}
          >
            Faqat username — kod so&apos;ralmaydi
          </div>
        </div>

        {/* Pastki qator: narxlar */}
        <div
          style={{
            display: "flex",
            borderTop: "4px solid #14171b",
            paddingTop: 22,
            gap: 44,
            fontSize: 26,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          <div style={{ display: "flex" }}>3 oy — 172 000</div>
          <div style={{ display: "flex" }}>6 oy — 232 000</div>
          <div style={{ display: "flex" }}>12 oy — 422 000</div>
          <div style={{ display: "flex", color: "#5a636a" }}>
            Click · Payme · Uzcard · Humo
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

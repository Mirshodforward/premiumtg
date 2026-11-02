import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { getBlogPost, getCategory } from "@/lib/blog";
export const alt = "Premiumtg — Telegram Premium qo‘llanmasi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
const star = `data:image/png;base64,${await readFile(
  join(process.cwd(), "public/brand/star-512.png"),
  "base64",
)}`;
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#010524",
        backgroundImage:
          "radial-gradient(circle at 92% 88%, rgba(123,59,255,0.55), transparent 38%), radial-gradient(circle at 0% 0%, rgba(46,107,255,0.32), transparent 40%)",
        color: "#f3f5ff",
        padding: 65,
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <img
        src={star}
        width={250}
        height={250}
        style={{ position: "absolute", right: 40, bottom: 30 }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 28,
          fontWeight: 700,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={star} width={40} height={40} style={{ marginRight: 12 }} />
          premiumtg.uz
        </div>
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            padding: "8px 18px",
            borderRadius: 999,
            border: "1px solid rgba(160,175,255,0.35)",
            color: "#9fd8ff",
          }}
        >
          {getCategory(post.category).label.uz}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          maxWidth: 860,
          fontSize: 56,
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: -2,
        }}
      >
        {post.title.uz}
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid rgba(160,175,255,0.3)",
          paddingTop: 24,
          maxWidth: 820,
          fontSize: 21,
          color: "#c4cbf0",
        }}
      >
        Telegram · O‘zbekiston · Premiumtg tahririyati
      </div>
    </div>,
    size,
  );
}

import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getBlogPost, getCategory } from "@/lib/blog";
export const alt = "Premiumtg — Telegram Premium qo‘llanmasi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
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
        width: "100%",
        height: "100%",
        background: "linear-gradient(120deg, #f0f2ff, #f1e4ff)",
        color: "#29213f",
        padding: 65,
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 28,
          fontWeight: 700,
        }}
      >
        <span>premiumtg.uz</span>
        <span style={{ fontSize: 20, fontWeight: 400 }}>
          {post ? getCategory(post.category).label.uz : "Blog"}
        </span>
      </div>
      <div
        style={{
          fontSize: 58,
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: -2,
        }}
      >
        {post?.title.uz ?? "Telegram Premium blogi"}
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #ccbaea",
          paddingTop: 24,
          fontSize: 21,
          color: "#8042c0",
        }}
      >
        Telegram · O‘zbekiston · Premiumtg tahririyati
      </div>
    </div>,
    size,
  );
}

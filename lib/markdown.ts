/**
 * Blog maqolalari uchun soddalashtirilgan markdown renderer.
 * Tashqi kutubxonasiz — kontent bizniki, shuning uchun faqat kerakli
 * sintaksis qo'llab-quvvatlanadi:
 *   ## H2 / ### H3 · paragraf · - ro'yxat · 1. raqamli ro'yxat
 *   | jadval | · > eslatma · **qalin** · [havola](/url) · `kod`
 */

export type TocItem = { id: string; text: string };

/** Sarlavhadan anchor id yasaydi (lotin va kirill uchun) */
export function headingId(text: string, index: number): string {
  const slug = text
    .toLowerCase()
    .replace(/['’`"]/g, "")
    .replace(/[^a-z0-9Ѐ-ӿ]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug ? `${slug}-${index}` : `bolim-${index}`;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Qator ichidagi formatlash: qalin, havola, kod */
function inline(raw: string): string {
  let s = escapeHtml(raw);

  // `kod`
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  // **qalin**
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // [matn](havola) — tashqi havolalarga rel/target qo'shiladi
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, text: string, href: string) => {
    const external = /^https?:\/\//.test(href);
    const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a href="${href}"${attrs}>${text}</a>`;
  });

  return s;
}

function renderTableRow(line: string, cell: "td" | "th"): string {
  const cells = line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
  return `<tr>${cells.map((c) => `<${cell}>${inline(c)}</${cell}>`).join("")}</tr>`;
}

const isTableLine = (l: string) => /^\s*\|.*\|\s*$/.test(l);
const isTableDivider = (l: string) => /^\s*\|[\s:|-]+\|\s*$/.test(l);

export function renderMarkdown(md: string): { html: string; toc: TocItem[] } {
  const lines = md.split("\n");
  const out: string[] = [];
  const toc: TocItem[] = [];
  let headingIndex = 0;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Bo'sh qator
    if (!line.trim()) {
      i++;
      continue;
    }

    // Sarlavhalar
    const h3 = line.match(/^###\s+(.*)$/);
    if (h3) {
      out.push(`<h3>${inline(h3[1])}</h3>`);
      i++;
      continue;
    }

    const h2 = line.match(/^##\s+(.*)$/);
    if (h2) {
      const text = h2[1].trim();
      const id = headingId(text, ++headingIndex);
      toc.push({ id, text });
      out.push(`<h2 id="${id}">${inline(text)}</h2>`);
      i++;
      continue;
    }

    // Jadval
    if (isTableLine(line) && i + 1 < lines.length && isTableDivider(lines[i + 1])) {
      const head = renderTableRow(line, "th");
      i += 2;
      const body: string[] = [];
      while (i < lines.length && isTableLine(lines[i])) {
        body.push(renderTableRow(lines[i], "td"));
        i++;
      }
      out.push(
        `<div class="table-wrap"><table><thead>${head}</thead><tbody>${body.join(
          ""
        )}</tbody></table></div>`
      );
      continue;
    }

    // Eslatma bloki
    if (/^>\s?/.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      out.push(`<div class="callout">${inline(buf.join(" "))}</div>`);
      continue;
    }

    // Raqamli ro'yxat
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(`<li>${inline(lines[i].replace(/^\d+\.\s+/, ""))}</li>`);
        i++;
      }
      out.push(`<ol>${items.join("")}</ol>`);
      continue;
    }

    // Oddiy ro'yxat
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(`<li>${inline(lines[i].replace(/^[-*]\s+/, ""))}</li>`);
        i++;
      }
      out.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    // Paragraf — keyingi bo'sh qatorgacha
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^#{2,3}\s/.test(lines[i]) &&
      !/^>\s?/.test(lines[i]) &&
      !/^[-*]\s+/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i]) &&
      !isTableLine(lines[i])
    ) {
      para.push(lines[i].trim());
      i++;
    }
    if (para.length) out.push(`<p>${inline(para.join(" "))}</p>`);
  }

  return { html: out.join("\n"), toc };
}

/** AI/AEO uchun: markdown'dan toza matn (llms.txt, RSS description) */
export function stripMarkdown(md: string): string {
  return md
    .replace(/^\s*\|.*\|\s*$/gm, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/^[-*]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

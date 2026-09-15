import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { BLOG_POSTS, getBlogPost } from "../lib/blog";
import { SITE, PREMIUM_PLANS } from "../lib/site";
import { renderMarkdown } from "../lib/markdown";

test("markdown safely handles a lone table row and rejects script URLs", () => {
  const result = renderMarkdown(
    "| unfinished |\n\n## Heading\n\n[safe](/blog) [unsafe](javascript:alert)",
  );
  expect(result.html).toContain("unfinished");
  expect(result.html).toContain('href="/blog"');
  expect(result.html).not.toContain('href="javascript:');
  expect(result.toc).toHaveLength(1);
});

test("article slugs, sources and internal links resolve", () => {
  expect(new Set(BLOG_POSTS.map((p) => p.slug)).size).toBe(BLOG_POSTS.length);
  expect(BLOG_POSTS.length).toBe(57);
  for (const post of BLOG_POSTS) {
    for (const related of post.related)
      expect(getBlogPost(related), `${post.slug}: ${related}`).toBeTruthy();
    for (const content of Object.values(post.content)) {
      expect(renderMarkdown(content).html).not.toContain("undefined");
      for (const match of content.matchAll(
        /\]\(\/blog\/([^\s)#]+)(?:#[^)]*)?\)/g,
      ))
        expect(
          getBlogPost(match[1]),
          `${post.slug} link: ${match[1]}`,
        ).toBeTruthy();
    }
    for (const source of post.sources ?? [])
      expect(new URL(source.url).protocol).toBe("https:");
  }
});

test("all sitemap pages have server-rendered content and correct canonical URLs", async ({
  request,
}) => {
  const response = await request.get("/sitemap.xml");
  expect(response.ok()).toBeTruthy();
  const sitemap = await response.text();
  expect(sitemap).not.toContain("/#");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  expect(urls.length).toBe(60);
  for (const url of urls) {
    const page = await request.get(url.replace(SITE.domain, "") || "/");
    expect(page.status(), url).toBe(200);
    const html = await page.text();
    expect(html.match(/<h1(?:\s|>)/g), url).toHaveLength(1);
    expect(html).toContain(`rel="canonical" href="${url}"`);
    expect(html).not.toContain('aria-hidden="true" lang="ru"');
    for (const match of html.matchAll(
      /<script type="application\/ld\+json">(.*?)<\/script>/g,
    ))
      expect(() => JSON.parse(match[1])).not.toThrow();
  }
  expect((await request.get("/blog/not-a-real-article")).status()).toBe(404);
  for (const path of [
    "/robots.txt",
    "/llms.txt",
    "/llms-full.txt",
    "/blog/rss.xml",
  ])
    expect((await request.get(path)).ok(), path).toBeTruthy();
  const llms = await (await request.get("/llms.txt")).text();
  expect(llms).not.toContain("4.9 / 5");
  for (const path of [
    "/opengraph-image",
    "/blog/telegram-premium-uzum-bank-orqali/opengraph-image",
  ]) {
    const image = await request.get(path);
    expect(image.ok(), path).toBeTruthy();
    expect(image.headers()["content-type"]).toContain("image/png");
  }
});

test("plans, FAQ, theme and language work without console errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Telegram Premium",
  );
  await page
    .locator(".price-card")
    .filter({ has: page.locator('input[value="premium-12"]') })
    .click();
  await expect(page.locator(".checkout-bar")).toContainText("422");
  await expect(page.locator('input[value="premium-12"]')).toBeChecked();
  const graph = await page
    .locator('script[type="application/ld+json"]')
    .last()
    .textContent();
  const product = JSON.parse(graph!)["@graph"][0];
  expect(product.aggregateRating).toBeUndefined();
  expect(product.offers.offers.map((p: { price: number }) => p.price)).toEqual(
    PREMIUM_PLANS.map((p) => p.price),
  );
  await page.locator(".faq-list summary").nth(1).click();
  await expect(page.locator(".faq-list details").nth(1)).toHaveAttribute(
    "open",
    "",
  );
  await page.locator(".theme-button").click();
  await expect(page.locator("html")).toHaveClass(/dl-editorial-dark/);
  await page.locator("select").selectOption("ru");
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Новые");
  await page.reload();
  await expect(page.locator("select")).toHaveValue("ru");
  await expect(page.locator("html")).toHaveClass(/dl-editorial-dark/);
  expect(errors).toEqual([]);
});

test("blog filters, search, empty state and article navigation work", async ({
  page,
}) => {
  await page.goto("/blog");
  await page.getByRole("button", { name: "Yangiliklar", exact: true }).click();
  await expect(page.locator(".article-card")).toHaveCount(3);
  await page.getByRole("button", { name: "Barchasi", exact: true }).click();
  await page.getByRole("searchbox").fill("uzum bank");
  expect(await page.locator(".article-card").count()).toBeGreaterThan(0);
  await page.getByRole("searchbox").fill("no-such-article-xyz");
  await expect(page.locator(".empty-state")).toBeVisible();
  await page.getByRole("button", { name: "Filtrlarni tozalash" }).click();
  await expect(page.locator(".article-card")).toHaveCount(57);
  await page.goto("/blog/telegram-premium-uzum-bank-orqali");
  await expect(page.locator(".article-sources")).toBeVisible();
  const anchor = page.locator(".article-toc a").first();
  const href = await anchor.getAttribute("href");
  await anchor.click();
  await expect(page).toHaveURL(new RegExp(`${href}$`));
  await page.locator("select").selectOption("en");
  await expect(page.locator(".article-language-note")).toBeVisible();
  await expect(page.locator(".prose-dl")).toHaveAttribute("lang", "uz");
});

for (const width of [320, 390, 768, 1440]) {
  test(`responsive layout and mobile menu at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      "/",
      "/blog",
      "/blog/telegram-premium-ozbekistonda-tolov-usullari",
    ]) {
      await page.goto(path);
      await expect(page.locator("h1")).toBeVisible();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        `${path} at ${width}`,
      ).toBeTruthy();
    }
    if (width < 900) {
      await page.getByRole("button", { name: "Menyu", exact: true }).click();
      await expect(page.locator("#mobile-nav")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.locator("#mobile-nav")).toHaveCount(0);
    }
  });
}

test("main pages pass WCAG automated checks in light and dark", async ({
  page,
}) => {
  for (const path of [
    "/",
    "/blog",
    "/blog/telegram-premium-uzum-bank-orqali",
  ]) {
    await page.goto(path);
    for (const dark of [false, true]) {
      if (dark) await page.locator(".theme-button").click();
      await page.evaluate(() =>
        Promise.all(
          document.getAnimations().map((animation) => animation.finished),
        ),
      );
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        results.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
        `${path} dark=${dark}`,
      ).toEqual([]);
      if (dark) await page.locator(".theme-button").click();
    }
  }
});

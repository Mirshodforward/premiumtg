"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll-reveal (darslink-dizayn.md, 8-bo'lim):
 *   opacity + blur(6px) → "fokusga kelish" effekti.
 * Progressive enhancement: `.js` klassi head'dagi skript orqali qo'yiladi,
 * ya'ni JS ishlamasa hamma narsa oddiy ko'rinadi.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-item:not([data-shown])")
    );
    if (!items.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => el.setAttribute("data-shown", "1"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-shown", "1");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}

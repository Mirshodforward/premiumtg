import type { Lang } from "./translations";

// Explicit month names keep SSR and browsers with different ICU locale data identical.
const MONTHS: Record<Lang, string[]> = {
  uz: [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ],
  ru: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ],
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};
export function formatDate(date: string, lang: Lang): string {
  const [year, month, day] = date.slice(0, 10).split("-").map(Number);
  const name = MONTHS[lang][month - 1];
  return lang === "en" ? `${name} ${day}, ${year}` : `${day} ${name}, ${year}`;
}

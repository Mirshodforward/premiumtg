// Tema konstantalari — server komponentida ham o'qish mumkin bo'lishi uchun
// "use client" moduldan tashqarida saqlanadi.

export const THEME_STORAGE_KEY = "premiumtg-theme";
export const DARK_CLASS = "dl-editorial-dark";

/**
 * FOUC oldini olish uchun <head> ichida sinxron ishlaydigan skript.
 * localStorage yoki tizim sozlamasidan temani o'qib, darhol klass qo'yadi,
 * shu bilan birga `.js` klassini qo'shadi (progressive enhancement uchun).
 */
export const themeInitScript = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d){document.documentElement.classList.add("${DARK_CLASS}");var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content","#03061f")}}catch(e){}document.documentElement.classList.add("js")})();`;

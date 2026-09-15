"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Lang, t } from "@/lib/translations";

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (typeof t)[Lang];
};

const LangCtx = createContext<LangContextType>({
  lang: "uz",
  setLang: () => {},
  tr: t["uz"],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    let saved: Lang | null = null;
    try {
      saved = localStorage.getItem("lang") as Lang | null;
    } catch {
      /* Storage may be unavailable. */
    }
    if (saved && ["uz", "ru", "en"].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(l: Lang) {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {
      /* Storage may be unavailable. */
    }
  }

  return (
    <LangCtx.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  return useContext(LangCtx);
}

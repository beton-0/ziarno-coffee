"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import type { Lang } from "@/lib/i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pl");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("ziarno-lang")) as Lang | null;
    if (stored === "pl" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("ziarno-lang", l);
  }, []);

  const toggle = useCallback(() => {
    setLangState((current) => {
      const next = current === "pl" ? "en" : "pl";
      if (typeof window !== "undefined") localStorage.setItem("ziarno-lang", next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ lang, setLang, toggle }), [lang, setLang, toggle]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

export function t<T>(value: { pl: T; en: T }, lang: Lang): T {
  return value[lang];
}

"use client";

import { useLang } from "@/hooks/useLanguage";

export function SkipLink() {
  const { lang } = useLang();
  return (
    <a href="#main" className="skip-link">
      {lang === "pl" ? "Przejdź do treści" : "Skip to content"}
    </a>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

export function LangSwitch({ inverted = false }: { inverted?: boolean }) {
  const { lang, setLang } = useLang();
  const base = inverted ? "text-cream/70" : "text-ink/60";
  const active = inverted ? "text-cream" : "text-ink";

  return (
    <div className={cn("relative inline-flex items-center text-xs tracking-[0.2em] uppercase font-mono", base)}>
      <button onClick={() => setLang("en")} className={cn("px-2 py-1 transition-colors", lang === "en" && active)}>
        EN
      </button>
      <span className={cn("opacity-30", base)}>/</span>
      <button onClick={() => setLang("pl")} className={cn("px-2 py-1 transition-colors", lang === "pl" && active)}>
        PL
      </button>
      <motion.span
        layoutId="lang-dot"
        className={cn("absolute -bottom-0.5 h-0.5 w-3 rounded-full", inverted ? "bg-cream" : "bg-roast")}
        animate={{ left: lang === "en" ? "0.5rem" : "2.25rem" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </div>
  );
}

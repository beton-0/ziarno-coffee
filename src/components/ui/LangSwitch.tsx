"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

export function LangSwitch({ inverted = false }: { inverted?: boolean }) {
  const { lang, setLang } = useLang();

  const langs = ["en", "pl"] as const;

  return (
    <div className="inline-flex items-center text-xs tracking-[0.2em] uppercase font-mono gap-1">
      {langs.map((l, i) => (
        <span key={l} className="inline-flex items-center gap-1">
          {i > 0 && (
            <span className={cn("opacity-30", inverted ? "text-cream" : "text-ink")}>/</span>
          )}
          <button
            onClick={() => setLang(l)}
            className={cn(
              "relative px-1.5 py-1 transition-colors",
              lang === l
                ? inverted ? "text-cream" : "text-ink"
                : inverted ? "text-cream/50" : "text-ink/50",
            )}
          >
            {l.toUpperCase()}
            <AnimatePresence>
              {lang === l && (
                <motion.span
                  key={l}
                  className={cn(
                    "absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-3 rounded-full",
                    inverted ? "bg-cream" : "bg-roast",
                  )}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>
          </button>
        </span>
      ))}
    </div>
  );
}

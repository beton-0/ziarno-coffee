"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/hooks/useLanguage";
import { dict, menuData } from "@/lib/i18n";
import { AnimatedText, FadeIn } from "../ui/AnimatedText";
import { cn } from "@/lib/utils";

type Category = keyof typeof menuData;

const TABS: Category[] = ["espresso", "filter", "food", "other"];

export function Menu() {
  const { lang } = useLang();
  const [active, setActive] = useState<Category>("espresso");

  return (
    <section id="menu" className="relative bg-cream-50 text-ink py-32 md:py-48 grain">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-8 space-y-8">
            <FadeIn className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink/50 font-mono">
              <span className="block w-8 h-px bg-ink/30" />
              {dict.menu.eyebrow[lang]}
            </FadeIn>
            <AnimatedText
              as="h2"
              text={dict.menu.title[lang]}
              className="font-display text-[clamp(2.5rem,7vw,7rem)] leading-[1] tracking-[-0.04em] text-balance"
            />
          </div>
          <div className="md:col-span-4 md:pt-6 flex md:justify-end">
            <FadeIn delay={0.3}>
              <p className="text-ink/60 text-sm leading-relaxed max-w-xs">
                {lang === "pl"
                  ? "Ceny w euro. Wszystkie kawy mleczne dostępne z mlekiem owsianym, migdałowym lub kokosowym."
                  : "Prices in euro. All milk drinks available with oat, almond, or coconut milk."}
              </p>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.4}>
          <div
            role="tablist"
            aria-label={lang === "pl" ? "Kategorie menu" : "Menu categories"}
            className="flex flex-wrap items-center gap-2 mb-12 border-y border-ink/15 py-4"
          >
            {TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                id={`menu-tab-${tab}`}
                aria-selected={active === tab}
                aria-controls={`menu-panel-${tab}`}
                tabIndex={active === tab ? 0 : -1}
                onClick={() => setActive(tab)}
                className={cn(
                  "relative isolate px-5 py-3 min-h-[44px] text-xs uppercase tracking-[0.2em] font-mono transition-colors rounded-full",
                  active === tab ? "text-cream" : "text-ink/60 hover:text-ink",
                )}
              >
                {active === tab && (
                  <motion.span
                    layoutId="menu-tab-bg"
                    className="absolute inset-0 bg-ink rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{dict.menu.categories[tab][lang]}</span>
              </button>
            ))}
            <span className="ml-auto text-[10px] uppercase tracking-[0.3em] text-ink/55 font-mono hidden md:inline">
              0{TABS.indexOf(active) + 1} / 0{TABS.length}
            </span>
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            id={`menu-panel-${active}`}
            aria-labelledby={`menu-tab-${active}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 gap-x-16 gap-y-2"
          >
            {menuData[active].map((item, i) => (
              <motion.div
                key={item.name.en}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative py-6 border-b border-ink/10 hover:border-roast/40 transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight transition-colors group-hover:text-roast">
                    {item.name[lang]}
                  </h3>
                  <div className="flex-1 border-b border-dotted border-ink/20 mb-1.5" />
                  <span className="font-mono text-sm text-ink/80">€{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed max-w-md">{item.desc[lang]}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

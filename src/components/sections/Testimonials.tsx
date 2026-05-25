"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "@/hooks/useLanguage";
import { dict, testimonials } from "@/lib/i18n";
import { FadeIn } from "../ui/AnimatedText";

export function Testimonials() {
  const { lang } = useLang();
  const [idx, setIdx] = useState(0);
  const [manual, setManual] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (manual) return;
    const id = setInterval(() => {
      setDirection(1);
      setIdx((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [manual]);

  const prev = () => {
    setManual(true);
    setDirection(-1);
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setManual(true);
    setDirection(1);
    setIdx((i) => (i + 1) % testimonials.length);
  };

  const t = testimonials[idx];

  return (
    <section className="relative bg-ink text-cream py-32 md:py-48 overflow-hidden grain">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <FadeIn className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-cream/50 font-mono mb-16">
          <span className="block w-8 h-px bg-cream/30" />
          {dict.testimonials.eyebrow[lang]}
        </FadeIn>

        <div className="relative max-w-5xl">
          <svg
            className="absolute -top-12 -left-4 w-24 h-24 text-roast-light opacity-40"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M9.4 5C5.6 5 3 8.1 3 12c0 3.4 2.2 6 5 6 .2 0 .4 0 .6-.1-.3 2.4-2 4.1-4.4 4.6-.4.1-.7.5-.7 1 0 .6.5 1 1.1 1 4.6-.4 8.4-4 8.4-10 0-5.4-2.6-9.5-6.6-9.5zM23 5c-3.8 0-6.4 3.1-6.4 7 0 3.4 2.2 6 5 6 .2 0 .4 0 .6-.1-.3 2.4-2 4.1-4.4 4.6-.4.1-.7.5-.7 1 0 .6.5 1 1.1 1 4.6-.4 8.4-4 8.4-10C26.6 9.1 24 5 23 5z" />
          </svg>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={idx}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <p className="font-display text-[clamp(1.75rem,4.5vw,4rem)] leading-[1.15] tracking-[-0.02em] text-balance italic">
                {t.quote[lang]}
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-roast/30 border border-cream/20 flex items-center justify-center font-display text-roast-light">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-lg">{t.author}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-cream/50 font-mono">{t.role[lang]}</div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-16 flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setManual(true); setIdx(i); }}
                className={`h-1 transition-all duration-500 ${
                  i === idx ? "w-12 bg-roast-light" : "w-6 bg-cream/15 hover:bg-cream/30"
                }`}
              />
            ))}

            <div className="ml-auto flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cream/40 font-mono hidden md:inline">
                0{idx + 1} / 0{testimonials.length}
              </span>
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-10 h-10 border border-cream/20 hover:border-cream/50 rounded-full flex items-center justify-center text-cream/50 hover:text-cream transition-all hover:bg-cream/5"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-10 h-10 border border-cream/20 hover:border-cream/50 rounded-full flex items-center justify-center text-cream/50 hover:text-cream transition-all hover:bg-cream/5"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 overflow-hidden mask-fade-r">
        <div className="marquee flex gap-16 font-display text-7xl md:text-9xl text-cream/10 whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <span key={k} className="flex gap-16 items-center">
              <span>handcrafted</span>
              <span className="text-roast-light/30">·</span>
              <span>single origin</span>
              <span className="text-roast-light/30">·</span>
              <span>small batch</span>
              <span className="text-roast-light/30">·</span>
              <span>slow roasted</span>
              <span className="text-roast-light/30">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/hooks/useLanguage";
import { dict, origins } from "@/lib/i18n";
import { AnimatedText, FadeIn } from "../ui/AnimatedText";
import { cn } from "@/lib/utils";

export function Origin() {
  const { lang } = useLang();
  const [active, setActive] = useState(0);
  const country = origins[active];

  const prev = () => setActive((i) => (i - 1 + origins.length) % origins.length);
  const next = () => setActive((i) => (i + 1) % origins.length);

  return (
    <section id="origin" className="relative bg-ink text-cream py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 grain opacity-50" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-8 space-y-8">
            <FadeIn className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-cream/50 font-mono">
              <span className="block w-8 h-px bg-cream/30" />
              {dict.origin.eyebrow[lang]}
            </FadeIn>
            <AnimatedText
              as="h2"
              text={dict.origin.title[lang]}
              className="font-display text-[clamp(2.5rem,7vw,7rem)] leading-[1] tracking-[-0.04em] text-balance"
            />
          </div>
          <div className="md:col-span-4 md:pt-6">
            <FadeIn delay={0.3}>
              <p className="text-cream/65 leading-relaxed">{dict.origin.body[lang]}</p>
            </FadeIn>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Map */}
          <div className="md:col-span-7 relative">
            <FadeIn>
              <div className="relative aspect-[4/3] md:aspect-[16/10] w-full">
                <WorldMap activeIdx={active} onSelect={setActive} />
              </div>

              {/* Mobile arrows below map */}
              <div className="flex md:hidden items-center justify-center gap-4 mt-4">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/50 transition-all"
                >
                  ←
                </button>
                <span className="text-[10px] uppercase tracking-[0.3em] text-cream/40 font-mono">
                  0{active + 1} / 0{origins.length}
                </span>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/50 transition-all"
                >
                  →
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Country info */}
          <div className="md:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={country.country}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-cream/40 font-mono">
                  0{active + 1} / 0{origins.length}
                </div>
                <h3 className="font-display text-5xl md:text-7xl tracking-tight">{country.country}</h3>
                <div className="text-roast-light text-xl font-display italic">{country.region}</div>
                <div className="h-px w-12 bg-cream/30" />
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-cream/10 pb-3">
                    <span className="text-cream/50 uppercase tracking-wider text-xs font-mono">
                      {lang === "pl" ? "Wysokość" : "Altitude"}
                    </span>
                    <span className="font-mono">{country.altitude}</span>
                  </div>
                  <div className="flex justify-between border-b border-cream/10 pb-3">
                    <span className="text-cream/50 uppercase tracking-wider text-xs font-mono">
                      {lang === "pl" ? "Nuty smakowe" : "Tasting notes"}
                    </span>
                    <span className="text-right">{country.notes[lang]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  {/* Desktop dots */}
                  {origins.map((o, i) => (
                    <button
                      key={o.country}
                      onClick={() => setActive(i)}
                      className={cn(
                        "h-1 transition-all duration-500",
                        i === active ? "w-12 bg-roast-light" : "w-6 bg-cream/20 hover:bg-cream/40",
                      )}
                    />
                  ))}

                  {/* Desktop arrows */}
                  <div className="hidden md:flex items-center gap-2 ml-auto">
                    <button
                      onClick={prev}
                      className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/50 transition-all text-sm"
                    >
                      ←
                    </button>
                    <button
                      onClick={next}
                      className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/50 transition-all text-sm"
                    >
                      →
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorldMap({ activeIdx, onSelect }: { activeIdx: number; onSelect: (i: number) => void }) {
  return (
    <svg viewBox="0 0 100 56" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="dots" x="0" y="0" width="1.2" height="1.2" patternUnits="userSpaceOnUse">
          <circle cx="0.6" cy="0.6" r="0.2" fill="rgba(245,241,234,0.22)" />
        </pattern>
        <clipPath id="continents">
          <path d="M5,8 L18,6 L26,10 L30,18 L26,24 L20,28 L14,30 L10,26 L6,18 Z" />
          <path d="M19,30 L24,32 L26,36 L24,38 L22,38 L20,36 L18,32 Z" />
          <path d="M26,38 L33,38 L36,42 L38,48 L34,52 L30,52 L26,48 L24,42 Z" />
          <path d="M44,8 L54,6 L58,12 L56,18 L48,18 L44,14 Z" />
          <path d="M48,20 L60,18 L64,24 L66,32 L62,40 L56,46 L52,46 L48,38 L46,28 Z" />
          <path d="M58,18 L70,14 L74,20 L70,24 L62,22 Z" />
          <path d="M62,10 L78,6 L88,10 L92,18 L86,24 L78,26 L70,22 L66,18 Z" />
          <path d="M74,24 L80,26 L80,32 L76,32 L74,28 Z" />
          <path d="M82,28 L88,30 L92,32 L90,36 L86,36 L82,32 Z" />
          <path d="M84,42 L94,42 L96,48 L92,50 L86,48 Z" />
        </clipPath>
      </defs>

      <rect width="100" height="56" fill="url(#dots)" clipPath="url(#continents)" />

      <g>
        {origins.map((o, i) => {
          const isActive = i === activeIdx;
          return (
            <g key={o.country} className="cursor-pointer" onClick={() => onSelect(i)}>
              {isActive && (
                <>
                  <motion.circle
                    cx={o.x} cy={o.y} r="3" fill="none" stroke="#8B4A1D" strokeWidth="0.3"
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    style={{ transformOrigin: `${o.x}px ${o.y}px` }}
                  />
                  <motion.circle
                    cx={o.x} cy={o.y} r="3" fill="none" stroke="#8B4A1D" strokeWidth="0.3"
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                    style={{ transformOrigin: `${o.x}px ${o.y}px` }}
                  />
                </>
              )}
              <circle
                cx={o.x} cy={o.y}
                r={isActive ? "1.2" : "0.7"}
                fill={isActive ? "#8B4A1D" : "#F5F1EA"}
                className="transition-all duration-500"
              />
              <text
                x={o.x + 2} y={o.y + 0.5}
                fontSize="1.6"
                fill={isActive ? "#F5F1EA" : "rgba(245,241,234,0.4)"}
                className="font-mono uppercase tracking-wider transition-colors"
              >
                {o.country}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

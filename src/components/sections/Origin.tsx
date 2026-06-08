"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
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
          <div className="md:col-span-8">
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
                  aria-label={lang === "pl" ? "Poprzedni kraj" : "Previous country"}
                  className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/50 transition-all"
                >
                  ←
                </button>
                <span className="text-[10px] uppercase tracking-[0.3em] text-cream/55 font-mono">
                  0{active + 1} / 0{origins.length}
                </span>
                <button
                  onClick={next}
                  aria-label={lang === "pl" ? "Następny kraj" : "Next country"}
                  className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/50 transition-all"
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
                <div className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-cream/55 font-mono">
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

                <div className="flex items-center gap-1 pt-4">
                  {/* Desktop dots */}
                  {origins.map((o, i) => (
                    <button
                      key={o.country}
                      onClick={() => setActive(i)}
                      aria-label={`${o.country}${i === active ? " (aktywny)" : ""}`}
                      aria-current={i === active}
                      className="p-3 -m-1 group"
                    >
                      <span
                        className={cn(
                          "block h-1 transition-all duration-500",
                          i === active ? "w-12 bg-roast-light" : "w-6 bg-cream/20 group-hover:bg-cream/40",
                        )}
                      />
                    </button>
                  ))}

                  {/* Desktop arrows */}
                  <div className="hidden md:flex items-center gap-2 ml-auto">
                    <button
                      onClick={prev}
                      aria-label={lang === "pl" ? "Poprzedni kraj" : "Previous country"}
                      className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/50 transition-all text-sm"
                    >
                      ←
                    </button>
                    <button
                      onClick={next}
                      aria-label={lang === "pl" ? "Następny kraj" : "Next country"}
                      className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/50 transition-all text-sm"
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

// Lightweight real-world map using react-simple-maps + cached TopoJSON.
// Equator-shifted Equal-Earth projection cropped to the coffee belt.
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function WorldMap({ activeIdx, onSelect }: { activeIdx: number; onSelect: (i: number) => void }) {
  const reduce = useReducedMotion();
  return (
    <div
      className="w-full h-full"
      role="img"
      aria-label="Mapa świata z zaznaczonymi krajami pochodzenia kawy: Etiopia, Kenia, Kolumbia, Brazylia, Gwatemala"
    >
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 170, center: [0, 5] }}
        width={800}
        height={420}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(245,241,234,0.06)"
                stroke="rgba(245,241,234,0.18)"
                strokeWidth={0.4}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "rgba(245,241,234,0.08)" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {origins.map((o, i) => {
          const isActive = i === activeIdx;
          return (
            <Marker
              key={o.country}
              coordinates={o.coords}
              onClick={() => onSelect(i)}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(i);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${o.country}, ${o.region}`}
              aria-pressed={isActive}
              className="cursor-pointer"
            >
              {isActive && !reduce && (
                <>
                  <motion.circle
                    r={4}
                    fill="none"
                    stroke="#8B4A1D"
                    strokeWidth={0.6}
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{ scale: 3.5, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.circle
                    r={4}
                    fill="none"
                    stroke="#8B4A1D"
                    strokeWidth={0.6}
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{ scale: 3.5, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                  />
                </>
              )}
              <circle
                r={isActive ? 4.5 : 2.5}
                fill={isActive ? "#8B4A1D" : "#F5F1EA"}
                stroke={isActive ? "#F5F1EA" : "none"}
                strokeWidth={isActive ? 0.6 : 0}
                style={{ transition: "all 0.3s ease" }}
              />
              <text
                x={6}
                y={2}
                fontSize={isActive ? 10 : 8}
                fill={isActive ? "#F5F1EA" : "rgba(245,241,234,0.55)"}
                fontFamily="var(--font-mono)"
                style={{ pointerEvents: "none", textTransform: "uppercase", letterSpacing: "0.05em" }}
              >
                {o.country}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
}

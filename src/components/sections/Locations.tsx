"use client";

import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLanguage";
import { dict, locations } from "@/lib/i18n";
import { AnimatedText, FadeIn } from "../ui/AnimatedText";

export function Locations() {
  const { lang } = useLang();

  return (
    <section id="locations" className="relative bg-cream text-ink py-32 md:py-48 grain">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-8 space-y-6">
            <FadeIn className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink/50 font-mono">
              <span className="block w-8 h-px bg-ink/30" />
              {dict.locations.eyebrow[lang]}
            </FadeIn>
            <AnimatedText
              as="h2"
              text={dict.locations.title[lang]}
              className="font-display text-[clamp(2.5rem,7vw,7rem)] leading-[1] tracking-[-0.04em] text-balance"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {locations.map((loc, i) => (
            <LocationCard key={loc.city} loc={loc} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCard({
  loc,
  lang,
  index,
}: {
  loc: (typeof locations)[number];
  lang: "pl" | "en";
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-ink text-cream p-8 md:p-12 rounded-sm overflow-hidden"
    >
      <div className="absolute inset-0 bg-roast translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

      <div className="relative space-y-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-cream/55 font-mono mb-2">
              0{index + 1}
            </div>
            <h3 className="font-display text-[clamp(2.2rem,10vw,4.5rem)] md:text-7xl tracking-[-0.03em]">{loc.city}</h3>
            <div className="text-roast-light group-hover:text-cream/70 transition-colors text-lg font-display italic mt-1">
              {loc.neighborhood}
            </div>
          </div>
          <div aria-hidden="true" className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center group-hover:rotate-45 transition-transform duration-700">
            <span className="text-xl">↗</span>
          </div>
        </div>

        <div className="h-px bg-cream/20" />

        <div className="space-y-4 text-sm">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-cream/55 font-mono mb-1">
              {lang === "pl" ? "Adres" : "Address"}
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-roast-light transition-colors"
            >
              {loc.address}
              <span aria-hidden="true" className="text-xs opacity-60">↗</span>
            </a>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-cream/55 font-mono mb-1">
              {lang === "pl" ? "Godziny" : "Hours"}
            </div>
            <div className="space-y-0.5">
              {loc.hours[lang].map((h) => (
                <div key={h} className="font-mono text-xs">
                  {h}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-cream/55 font-mono mb-1">
                {lang === "pl" ? "Telefon" : "Phone"}
              </div>
              <a
                href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                className="font-mono text-xs hover:text-roast-light transition-colors"
              >
                {loc.phone}
              </a>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-cream/55 font-mono mb-1">
                {lang === "pl" ? "Mapa" : "Map"}
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs hover:text-roast-light transition-colors inline-flex items-center gap-1"
              >
                {lang === "pl" ? "Otwórz" : "Open"}
                <span aria-hidden="true" className="opacity-60">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="aspect-[16/9] bg-cream/5 rounded-sm overflow-hidden border border-cream/10 mt-8">
          <MapIllustration city={loc.city} />
        </div>
      </div>
    </motion.div>
  );
}

function MapIllustration({ city }: { city: string }) {
  const isBerlin = city === "Berlin";
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" aria-hidden="true">
      <defs>
        <pattern id={`grid-${city}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(245,241,234,0.08)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="200" fill={`url(#grid-${city})`} />

      {isBerlin ? (
        <>
          <path d="M30 100 Q120 80 200 110 T380 90" stroke="#8B4A1D" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M50 30 L80 70 L110 50 L150 90 L180 60 L220 100 L250 80 L290 120 L330 100 L370 140" stroke="rgba(245,241,234,0.2)" strokeWidth="0.8" fill="none" />
          <path d="M100 150 L150 130 L200 160 L260 140 L310 170" stroke="rgba(245,241,234,0.2)" strokeWidth="0.8" fill="none" />
        </>
      ) : (
        <>
          <path d="M50 130 Q150 110 200 130 Q260 150 350 120" stroke="#8B4A1D" strokeWidth="1.5" fill="none" opacity="0.6" />
          <circle cx="220" cy="100" r="40" stroke="rgba(245,241,234,0.15)" strokeWidth="0.8" fill="none" />
          <path d="M60 50 L120 80 L180 60 L240 90 L300 70 L360 100" stroke="rgba(245,241,234,0.2)" strokeWidth="0.8" fill="none" />
        </>
      )}

      <motion.g
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "200px 100px" }}
      >
        <circle cx="200" cy="100" r="4" fill="#8B4A1D" />
        <circle cx="200" cy="100" r="8" fill="none" stroke="#8B4A1D" strokeWidth="0.8" opacity="0.5" />
      </motion.g>

      <text x="200" y="180" fontSize="8" fill="rgba(245,241,234,0.4)" textAnchor="middle" className="font-mono uppercase tracking-widest">
        {city}
      </text>
    </svg>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/hooks/useLanguage";
import { dict, brewingMethods } from "@/lib/i18n";
import { AnimatedText, FadeIn } from "../ui/AnimatedText";

export function Brewing() {
  const { lang } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const overflow = trackRef.current.scrollWidth - window.innerWidth;
      setMaxX(Math.max(0, overflow));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [lang]);

  const { scrollYProgress } = useScroll({ target: sectionRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  const sectionHeight = `calc(100vh + ${maxX}px)`;

  return (
    <section id="brewing" ref={sectionRef} className="relative bg-cream text-ink" style={{ height: sectionHeight }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col grain">
        <div className="mx-auto max-w-[1600px] w-full px-6 md:px-10 pt-32 md:pt-40 pb-8">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7 space-y-6">
              <FadeIn className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink/50 font-mono">
                <span className="block w-8 h-px bg-ink/30" />
                {dict.brewing.eyebrow[lang]}
              </FadeIn>
              <AnimatedText
                as="h2"
                text={dict.brewing.title[lang]}
                className="font-display text-[clamp(2rem,5.5vw,5rem)] leading-[1.05] tracking-[-0.03em]"
              />
            </div>
            <FadeIn delay={0.3} className="md:col-span-5 md:text-right">
              <p className="text-ink/50 text-xs uppercase tracking-[0.2em] font-mono">
                {lang === "pl" ? "przewiń ↓" : "scroll ↓"}
              </p>
            </FadeIn>
          </div>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="flex gap-6 px-6 md:px-10 pb-20 flex-1">
          {brewingMethods.map((method, i) => (
            <BrewCard key={method.name} method={method} idx={i} lang={lang} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BrewCard({
  method,
  idx,
  lang,
}: {
  method: (typeof brewingMethods)[number];
  idx: number;
  lang: "pl" | "en";
}) {
  return (
    <div className="relative w-[85vw] md:w-[70vw] lg:w-[55vw] shrink-0 bg-cream-100 rounded-sm overflow-hidden border border-ink/8">
      <div className="grid md:grid-cols-2 h-full">
        <div className="relative aspect-square md:aspect-auto bg-ink overflow-hidden">
          <BrewIllustration name={method.name} />
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-ink/40 font-mono mb-6">
              0{idx + 1} / 04
            </div>
            <h3 className="font-display text-6xl md:text-7xl tracking-[-0.03em] mb-6">{method.name}</h3>
            <p className="text-ink/70 leading-relaxed text-base md:text-lg max-w-md">{method.desc[lang]}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-ink/15 mt-8">
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-ink/40 font-mono mb-1">
                {lang === "pl" ? "Czas" : "Time"}
              </div>
              <div className="font-display text-2xl text-roast">{method.time}</div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-ink/40 font-mono mb-1">
                {lang === "pl" ? "Ciało" : "Body"}
              </div>
              <div className="font-display text-base">{method.body[lang]}</div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-ink/40 font-mono mb-1">
                {lang === "pl" ? "Nuty" : "Notes"}
              </div>
              <div className="text-xs leading-snug">{method.notes[lang]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrewIllustration({ name }: { name: string }) {
  if (name === "V60") {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <motion.g
          animate={{ rotate: [0, 2, 0, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 100px" }}
        >
          <path d="M60 70 L140 70 L120 140 L80 140 Z" stroke="#F5F1EA" strokeWidth="1.5" fill="none" />
          <path d="M70 75 L130 75 L113 135 L87 135 Z" stroke="#F5F1EA" strokeWidth="0.8" fill="none" opacity="0.4" />
          <line x1="100" y1="70" x2="100" y2="140" stroke="#F5F1EA" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 3" />
        </motion.g>
        <motion.line
          x1="100"
          y1="40"
          x2="100"
          y2="70"
          stroke="#8B4A1D"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="100"
          cy="160"
          r="2"
          fill="#8B4A1D"
          animate={{ opacity: [0, 1, 0], y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    );
  }
  if (name === "Aeropress") {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <motion.rect
          x="75"
          y="60"
          width="50"
          height="90"
          stroke="#F5F1EA"
          strokeWidth="1.5"
          fill="none"
          rx="2"
        />
        <motion.rect
          x="78"
          y="50"
          width="44"
          height="20"
          stroke="#F5F1EA"
          strokeWidth="1.5"
          fill="none"
          rx="1"
          animate={{ y: [50, 65, 50] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="100" cy="160" r="12" stroke="#F5F1EA" strokeWidth="1.5" fill="none" />
        <motion.circle
          cx="100"
          cy="170"
          r="1.5"
          fill="#8B4A1D"
          animate={{ y: [0, 5, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </svg>
    );
  }
  if (name === "Chemex") {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <motion.g
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 110px" }}
        >
          <path
            d="M80 50 L120 50 L120 80 L135 110 L135 160 Q135 170 125 170 L75 170 Q65 170 65 160 L65 110 L80 80 Z"
            stroke="#F5F1EA"
            strokeWidth="1.5"
            fill="none"
          />
          <rect x="78" y="100" width="44" height="14" stroke="#F5F1EA" strokeWidth="0.8" fill="none" opacity="0.4" />
          <path d="M65 140 L135 140" stroke="#8B4A1D" strokeWidth="0.8" opacity="0.6" />
        </motion.g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="70" y="60" width="60" height="100" rx="6" stroke="#F5F1EA" strokeWidth="1.5" fill="none" />
        <rect x="75" y="65" width="50" height="80" rx="4" fill="#8B4A1D" opacity="0.5" />
        <motion.circle
          cx="100"
          cy="80"
          r="2"
          fill="#F5F1EA"
          animate={{ y: [0, 50, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="92"
          cy="85"
          r="1.5"
          fill="#F5F1EA"
          animate={{ y: [0, 40, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.circle
          cx="108"
          cy="90"
          r="1.2"
          fill="#F5F1EA"
          animate={{ y: [0, 35, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.g>
    </svg>
  );
}

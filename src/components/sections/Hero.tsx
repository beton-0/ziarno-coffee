"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "@/hooks/useLanguage";
import { dict } from "@/lib/i18n";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=2400&q=85&auto=format&fit=crop";

export function Hero() {
  const { lang } = useLang();
  const words = dict.hero.rotating[lang];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-ink text-cream">
      <video
        key="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={HERO_IMAGE}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-coffee.mp4" type="video/mp4" />
      </video>

      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.18 }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 -z-0"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <CoffeeDrops />

      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/80" />
      <div className="absolute inset-0 grain" />

      <div className="relative h-full mx-auto max-w-[1600px] px-6 md:px-10 flex flex-col justify-between pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-cream/70 font-mono"
        >
          <span className="block w-8 h-px bg-cream/50" />
          {dict.hero.eyebrow[lang]}
        </motion.div>

        <div className="flex flex-col gap-8">
          <h1 className="font-display text-[clamp(3rem,11vw,12rem)] leading-[0.95] tracking-[-0.04em] text-balance">
            <motion.span
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {dict.hero.bring[lang]}
            </motion.span>

            <span className="relative block h-[1.05em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[idx]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 inline-flex items-baseline gap-4 italic text-roast-light"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50, 'WONK' 1" }}
                >
                  <span className="font-display">{words[idx]}</span>
                  <span className="text-cream not-italic">.</span>
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <p className="max-w-md text-cream/75 leading-relaxed text-lg">
              {lang === "pl"
                ? "Mała palarnia z dwoma lokalami — w Berlinie i Kopenhadze. Pijemy kawę powoli, jak na to zasługuje."
                : "A small roastery with two shops — in Berlin and Copenhagen. We drink coffee slowly, the way it deserves."}
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#menu"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-cream text-ink text-sm tracking-wider uppercase transition-all hover:bg-roast hover:text-cream"
              >
                {lang === "pl" ? "Zobacz menu" : "See the menu"}
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#origin"
                className="text-sm tracking-wider uppercase text-cream/80 hover:text-cream border-b border-cream/30 hover:border-cream pb-1"
              >
                {lang === "pl" ? "Nasze ziarna" : "Our beans"}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-cream/50 font-mono"
        >
          <span>{dict.hero.scroll[lang]}</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block w-px h-12 bg-cream/30"
          />
        </motion.div>
      </div>
    </section>
  );
}

function CoffeeDrops() {
  const drops = [
    { x: 18, delay: 0, dur: 4.2, opacity: 0.35 },
    { x: 32, delay: 1.6, dur: 5.1, opacity: 0.25 },
    { x: 47, delay: 0.8, dur: 4.8, opacity: 0.4 },
    { x: 61, delay: 2.4, dur: 5.6, opacity: 0.2 },
    { x: 75, delay: 1.2, dur: 4.5, opacity: 0.3 },
    { x: 88, delay: 3.1, dur: 5.3, opacity: 0.22 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {drops.map((d, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-roast-light/60 to-transparent"
          style={{ left: `${d.x}%`, height: "120px", opacity: d.opacity }}
          initial={{ y: "-20%" }}
          animate={{ y: "120vh" }}
          transition={{
            duration: d.dur,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeIn",
          }}
        />
      ))}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%]">
        <motion.div
          className="absolute bottom-0 left-1/4 w-px h-32 bg-gradient-to-t from-cream/15 to-transparent blur-sm"
          animate={{ opacity: [0, 0.5, 0], y: [0, -60, -120], x: [0, 8, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-px h-40 bg-gradient-to-t from-cream/15 to-transparent blur-sm"
          animate={{ opacity: [0, 0.4, 0], y: [0, -80, -150], x: [0, -10, 4] }}
          transition={{ duration: 6, delay: 1.2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-3/4 w-px h-28 bg-gradient-to-t from-cream/15 to-transparent blur-sm"
          animate={{ opacity: [0, 0.5, 0], y: [0, -50, -100], x: [0, 6, -2] }}
          transition={{ duration: 4.5, delay: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

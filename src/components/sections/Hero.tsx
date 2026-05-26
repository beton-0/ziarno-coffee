"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/hooks/useLanguage";
import { dict } from "@/lib/i18n";

export function Hero() {
  const { lang } = useLang();
  const words = dict.hero.rotating[lang];
  const [idx, setIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % words.length), 3800);
    return () => clearInterval(id);
  }, [words.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.5;

    // Reveal the video the moment it actually starts playing — works
    // whether the autoPlay attribute kicked in or we triggered play()
    // ourselves. Stays hidden (opacity 0) if Safari Low Power Mode /
    // strict autoplay policy blocks playback; the image is the fallback.
    const onPlaying = () => setVideoVisible(true);
    video.addEventListener("playing", onPlaying);

    const tryPlay = () => {
      const p = video.play();
      if (p !== undefined) p.catch(() => {});
    };

    // If the video is already ready when this effect runs (e.g. coming
    // back from bfcache), canplay won't fire again — kick play() now.
    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("canplay", tryPlay, { once: true });
    }

    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-ink text-cream">
      {/* Background image — always visible, acts as fallback under video */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=70&auto=format&fit=crop)",
        }}
      />

      {/* Video — desktop only, fades in when ready */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover hidden md:block transition-opacity duration-[1500ms]"
        style={{ opacity: videoVisible ? 1 : 0 }}
      >
        <source src="/hero-coffee.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/80" />
      <div className="absolute inset-0 grain" />

      <div className="relative h-full mx-auto max-w-[1600px] px-6 md:px-10 flex flex-col justify-between pt-32 pb-24 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
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
              transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
            transition={{ delay: 0.55, duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <p
              className="max-w-md text-cream/85 leading-relaxed text-lg"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
            >
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
                className="inline-flex items-center min-h-[44px] text-sm tracking-wider uppercase text-cream/85 hover:text-cream border-b border-cream/30 hover:border-cream py-2"
              >
                {lang === "pl" ? "Nasze ziarna" : "Our beans"}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-cream/60 font-mono"
        >
          <span>{dict.hero.scroll[lang]}</span>
          <motion.span
            aria-hidden="true"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block w-px h-12 bg-cream/30"
          />
        </motion.div>
      </div>
    </section>
  );
}


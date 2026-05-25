"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1400;
    let raf: number;

    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!done) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: [0.87, 0, 0.13, 1] }}
        >
          <div className="relative flex flex-col items-center gap-8">
            <motion.svg
              width="80"
              height="100"
              viewBox="0 0 80 100"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.ellipse
                cx="40"
                cy="50"
                rx="22"
                ry="34"
                fill="#6B3410"
                animate={{ rotate: [0, 6, -6, 0] }}
                style={{ originX: "40px", originY: "50px" }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M40 16 Q35 50 40 84"
                stroke="#1A1A1A"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.svg>

            <div className="flex flex-col items-center gap-3">
              <motion.div
                className="font-display text-cream text-3xl tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ziarno<span className="text-roast">.</span>
              </motion.div>

              <div className="w-32 h-px bg-cream/15 overflow-hidden">
                <motion.div className="h-full bg-cream" style={{ width: `${progress * 100}%` }} />
              </div>

              <motion.div
                className="text-[10px] uppercase tracking-[0.3em] text-cream/40 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {Math.round(progress * 100).toString().padStart(2, "0")}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

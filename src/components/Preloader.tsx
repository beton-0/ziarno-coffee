"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const start = Date.now();
    const duration = 1200;
    let raf: number;

    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 200);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [done]);

  // cup dimensions
  const cupTop = 52;
  const cupBottom = 108;
  const cupH = cupBottom - cupTop; // 56
  const fillH = progress * cupH * 0.82;
  const fillY = cupBottom - fillH;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
        >
          <div className="flex flex-col items-center gap-10">
            <svg width="120" height="160" viewBox="0 0 120 160">
              <defs>
                {/* clip to cup interior */}
                <clipPath id="cup-clip">
                  <path d="M34 52 L86 52 L80 108 Q80 112 60 112 Q40 112 40 108 Z" />
                </clipPath>
              </defs>

              {/* pour stream — thin line falling into cup */}
              {progress < 0.95 && (
                <motion.line
                  x1="60" y1="10"
                  x2="60" y2="52"
                  stroke="#6B3410"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 1, progress > 0.9 ? 0 : 1] }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              )}

              {/* pour source (small spout) */}
              {progress < 0.95 && (
                <motion.ellipse
                  cx="60" cy="10" rx="6" ry="3"
                  fill="#6B3410"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* coffee fill inside cup */}
              <motion.rect
                x="33"
                y={fillY}
                width="54"
                height={fillH + 2}
                fill="#6B3410"
                clipPath="url(#cup-clip)"
                style={{ transition: "none" }}
              />

              {/* coffee surface ripple */}
              {fillH > 4 && (
                <motion.ellipse
                  cx="60"
                  cy={fillY}
                  rx="20"
                  ry="2.5"
                  fill="#8B4A1D"
                  clipPath="url(#cup-clip)"
                  animate={{ scaleX: [1, 1.05, 0.97, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              {/* cup body outline */}
              <path
                d="M34 52 L86 52 L80 108 Q80 112 60 112 Q40 112 40 108 Z"
                stroke="#F5F1EA"
                strokeWidth="1.5"
                fill="none"
                strokeLinejoin="round"
              />

              {/* cup rim */}
              <path
                d="M30 52 L90 52"
                stroke="#F5F1EA"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* cup handle */}
              <path
                d="M80 68 Q100 68 100 82 Q100 96 80 96"
                stroke="#F5F1EA"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />

              {/* saucer */}
              <ellipse
                cx="60" cy="116" rx="34" ry="5"
                stroke="#F5F1EA"
                strokeWidth="1.2"
                fill="none"
                opacity="0.5"
              />

              {/* steam — appears when nearly full */}
              {progress > 0.75 && (
                <>
                  {[44, 60, 76].map((sx, i) => (
                    <motion.path
                      key={sx}
                      d={`M${sx} 50 Q${sx - 4} 40 ${sx} 32 Q${sx + 4} 24 ${sx} 16`}
                      stroke="#F5F1EA"
                      strokeWidth="1"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0"
                      animate={{ opacity: [0, 0.4, 0], y: [0, -6, -12] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </>
              )}
            </svg>

            <div className="flex flex-col items-center gap-3">
              <motion.div
                className="font-display text-cream text-3xl tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Ziarno<span className="text-roast">.</span>
              </motion.div>

              <div className="w-32 h-px bg-cream/15 overflow-hidden">
                <motion.div
                  className="h-full bg-roast"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>

              <motion.div
                className="text-[10px] uppercase tracking-[0.3em] text-cream/40 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
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

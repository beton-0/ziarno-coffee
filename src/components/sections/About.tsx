"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/hooks/useLanguage";
import { dict } from "@/lib/i18n";
import { AnimatedText, FadeIn } from "../ui/AnimatedText";

export function About() {
  const { lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative bg-cream text-ink py-32 md:py-48 grain">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <FadeIn className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink/50 font-mono mb-16">
          <span className="block w-8 h-px bg-ink/30" />
          {dict.about.eyebrow[lang]}
        </FadeIn>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-7">
            <AnimatedText
              as="h2"
              text={dict.about.title[lang]}
              className="font-display text-[clamp(2.25rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.03em] text-balance"
            />
          </div>

          <div className="md:col-span-5 md:pt-6 space-y-10">
            <FadeIn delay={0.2}>
              <p className="text-ink/75 leading-relaxed text-lg md:text-xl text-balance">
                {dict.about.body[lang]}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-ink/15">
                {dict.about.stats.map((stat) => (
                  <div key={stat.value}>
                    <div className="font-display text-4xl md:text-5xl text-roast tracking-tight">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-ink/50 font-mono mt-2 leading-tight">
                      {stat.label[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        <motion.div
          style={{ y }}
          className="mt-32 md:mt-48 relative grid md:grid-cols-12 gap-6 items-end"
        >
          <div className="md:col-span-5 md:col-start-2 aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85"
              alt="latte art"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-4 md:col-start-8 aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=800&q=85"
              alt="coffee beans"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <FadeIn delay={0.3} className="mt-32 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-[10px] uppercase tracking-[0.3em] text-ink/40 font-mono">
          <span>· Direct Trade</span>
          <span>· Small Batch</span>
          <span>· Single Origin</span>
          <span>· Slow Roasted</span>
          <span>· Berlin → Copenhagen</span>
        </FadeIn>
      </div>
    </section>
  );
}

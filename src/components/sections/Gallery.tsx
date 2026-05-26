"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/hooks/useLanguage";
import { dict, galleryImages } from "@/lib/i18n";
import { AnimatedText, FadeIn } from "../ui/AnimatedText";

export function Gallery() {
  const { lang } = useLang();

  return (
    <section className="relative bg-cream-50 text-ink py-32 md:py-48 overflow-hidden grain">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-7 space-y-6">
            <FadeIn className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink/50 font-mono">
              <span className="block w-8 h-px bg-ink/30" />
              {dict.gallery.eyebrow[lang]}
            </FadeIn>
            <AnimatedText
              as="h2"
              text={dict.gallery.title[lang]}
              className="font-display text-[clamp(2.5rem,7vw,7rem)] leading-[1] tracking-[-0.04em] text-balance"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-start">
          {galleryImages.map((img, i) => (
            <ParallaxImage key={img.src} src={img.src} alt={img.alt} tall={img.h === "tall"} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ParallaxImage({ src, alt, tall, index }: { src: string; alt: string; tall: boolean; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const y = reduce ? "0%" : rawY;
  const offset = index % 4;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay: offset * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-sm bg-ink ${tall ? "aspect-[4/5] md:row-span-2 md:aspect-[3/5]" : "aspect-[4/5]"} ${
        offset === 1 ? "md:translate-y-12" : offset === 3 ? "md:translate-y-16" : ""
      }`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 w-full h-[115%] object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-60" />
    </motion.div>
  );
}

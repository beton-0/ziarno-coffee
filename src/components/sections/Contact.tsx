"use client";

import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLanguage";
import { dict } from "@/lib/i18n";
import { AnimatedText, FadeIn } from "../ui/AnimatedText";
import { MagneticButton } from "../ui/MagneticButton";

export function Contact() {
  const { lang } = useLang();

  return (
    <section id="contact" className="relative bg-cream-50 text-ink py-32 md:py-48 overflow-hidden grain">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7 space-y-10">
            <FadeIn className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink/50 font-mono">
              <span className="block w-8 h-px bg-ink/30" />
              {dict.contact.eyebrow[lang]}
            </FadeIn>
            <AnimatedText
              as="h2"
              text={dict.contact.title[lang]}
              className="font-display text-[clamp(2.5rem,8vw,8rem)] leading-[0.95] tracking-[-0.04em] text-balance"
            />

            <FadeIn delay={0.4}>
              <div className="pt-8 flex flex-col sm:flex-row gap-4 items-start">
                <MagneticButton href="mailto:hello@ziarno.coffee" variant="primary">
                  {dict.contact.cta[lang]} →
                </MagneticButton>
                <MagneticButton href="#locations" variant="outline">
                  {lang === "pl" ? "Zobacz lokale" : "See locations"}
                </MagneticButton>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-5 md:pt-12 space-y-12">
            <FadeIn delay={0.3} className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-ink/40 font-mono">Email</div>
              <a href="mailto:hello@ziarno.coffee" className="text-2xl md:text-3xl font-display hover:text-roast transition-colors">
                hello@ziarno.coffee
              </a>
            </FadeIn>

            <FadeIn delay={0.4} className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-ink/40 font-mono">
                {lang === "pl" ? "Rezerwacje" : "Reservations"}
              </div>
              <a href="mailto:reserve@ziarno.coffee" className="text-2xl md:text-3xl font-display hover:text-roast transition-colors">
                reserve@ziarno.coffee
              </a>
            </FadeIn>

            <FadeIn delay={0.5} className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-ink/40 font-mono">
                {lang === "pl" ? "Współpraca" : "Wholesale"}
              </div>
              <a href="mailto:beans@ziarno.coffee" className="text-2xl md:text-3xl font-display hover:text-roast transition-colors">
                beans@ziarno.coffee
              </a>
            </FadeIn>

            <FadeIn delay={0.55} className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-ink/40 font-mono">
                {lang === "pl" ? "Telefon" : "Phone"}
              </div>
              <a href="tel:+493012345678" className="text-2xl md:text-3xl font-display hover:text-roast transition-colors">
                +49 30 123 456 78
              </a>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="pt-8 border-t border-ink/15 flex gap-6">
                {[
                  { name: "Instagram", href: "https://instagram.com" },
                  { name: "Spotify", href: "https://spotify.com" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.2em] font-mono text-ink/60 hover:text-roast transition-colors"
                  >
                    {s.name} ↗
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.8} className="mt-32 md:mt-48">
          <motion.div
            className="font-display text-[clamp(4rem,18vw,20rem)] leading-[0.9] tracking-[-0.05em] text-ink/8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Ziarno<span className="text-roast/40">.</span>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

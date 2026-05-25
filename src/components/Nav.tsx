"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/hooks/useLanguage";
import { dict, type Lang } from "@/lib/i18n";
import { LangSwitch } from "./ui/LangSwitch";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { key: "menu", href: "#menu" },
  { key: "origin", href: "#origin" },
  { key: "brewing", href: "#brewing" },
  { key: "locations", href: "#locations" },
  { key: "contact", href: "#contact" },
] as const;

export function Nav() {
  const { lang } = useLang();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 100);
  });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-cream/85 backdrop-blur-md border-b border-ink/8" : "bg-transparent",
      )}
    >
      <nav className="mx-auto max-w-[1600px] px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-2">
          <span className={cn("font-display text-2xl tracking-tight transition-colors", scrolled ? "text-ink" : "text-cream")}>
            Ziarno<span className="text-roast">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <NavLink href={item.href} label={dict.nav[item.key as keyof typeof dict.nav][lang as Lang]} inverted={!scrolled} />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <LangSwitch inverted={!scrolled} />
          <a
            href="#contact"
            className={cn(
              "hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono px-4 py-2 rounded-full border transition-all duration-500",
              scrolled
                ? "border-ink text-ink hover:bg-ink hover:text-cream"
                : "border-cream/30 text-cream hover:bg-cream hover:text-ink hover:border-cream",
            )}
          >
            {lang === "pl" ? "Rezerwacja" : "Reserve"}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

function NavLink({ href, label, inverted }: { href: string; label: string; inverted: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        "relative px-4 py-2 text-sm tracking-wide transition-colors",
        inverted ? "text-cream/80 hover:text-cream" : "text-ink/70 hover:text-ink",
      )}
    >
      <span className="relative z-10">{label}</span>
      <motion.span
        className={cn("absolute left-4 right-4 bottom-1 h-px origin-left", inverted ? "bg-cream" : "bg-roast")}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hover ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </a>
  );
}

"use client";

import { useLang } from "@/hooks/useLanguage";
import { dict } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream py-10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[10px] uppercase tracking-[0.3em] font-mono text-cream/50">
          <div className="flex items-center gap-3">
            <span className="font-display normal-case tracking-tight text-base text-cream">
              Ziarno<span className="text-roast-light">.</span>
            </span>
            <span>© {year}</span>
            <span>·</span>
            <span>{dict.footer.rights[lang]}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>{dict.footer.handcrafted[lang]}</span>
            <a href="#top" className="hover:text-cream transition-colors group inline-flex items-center gap-2">
              <span>{lang === "pl" ? "Do góry" : "Back to top"}</span>
              <span className="inline-block group-hover:-translate-y-0.5 transition-transform">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

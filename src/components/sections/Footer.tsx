"use client";

import { useLang } from "@/hooks/useLanguage";
import { dict } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream py-12">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 space-y-8">
        <div className="grid gap-8 md:grid-cols-3 text-[11px] leading-relaxed font-mono text-cream/65">
          <div className="space-y-3">
            <div className="font-display normal-case tracking-tight text-2xl text-cream">
              Ziarno<span className="text-roast-light">.</span>
            </div>
            <p className="text-cream/55 normal-case tracking-normal">
              {lang === "pl"
                ? "Specialty coffee · Berlin & Kopenhaga"
                : "Specialty coffee · Berlin & Copenhagen"}
            </p>
            <div className="flex gap-4 pt-2 uppercase tracking-[0.2em] text-[10px]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-roast-light transition-colors"
              >
                Instagram ↗
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-roast-light transition-colors"
              >
                Spotify ↗
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="uppercase tracking-[0.3em] text-cream/55 text-[10px]">
              {lang === "pl" ? "Adres" : "Address"}
            </div>
            <address className="not-italic normal-case tracking-normal space-y-2">
              <div>Ziarno Roastery GmbH</div>
              <div>Oranienstraße 42</div>
              <div>10999 Berlin, DE</div>
              <div className="pt-1 text-cream/55">USt-IdNr.: DE000000000</div>
              <div className="text-cream/55">HRB 00000 B</div>
            </address>
          </div>

          <div className="space-y-3">
            <div className="uppercase tracking-[0.3em] text-cream/55 text-[10px]">
              {lang === "pl" ? "Informacje prawne" : "Legal"}
            </div>
            <ul className="space-y-2 normal-case tracking-normal">
              <li>
                <a href="/impressum" className="hover:text-roast-light transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-roast-light transition-colors">
                  {lang === "pl" ? "Polityka prywatności" : "Datenschutz / Privacy"}
                </a>
              </li>
              <li>
                <a href="/agb" className="hover:text-roast-light transition-colors">
                  {lang === "pl" ? "Regulamin" : "AGB / Terms"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-cream/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[10px] uppercase tracking-[0.3em] font-mono text-cream/55">
          <div className="flex items-center gap-3 flex-wrap">
            <span>© {year} Ziarno.</span>
            <span aria-hidden="true">·</span>
            <span>{dict.footer.rights[lang]}</span>
            <span aria-hidden="true">·</span>
            <span>{dict.footer.handcrafted[lang]}</span>
          </div>
          <a
            href="#top"
            className="hover:text-cream transition-colors group inline-flex items-center gap-2"
          >
            <span>{lang === "pl" ? "Do góry" : "Back to top"}</span>
            <span aria-hidden="true" className="inline-block group-hover:-translate-y-0.5 transition-transform">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

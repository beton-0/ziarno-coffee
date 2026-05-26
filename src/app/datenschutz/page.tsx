import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz — Ziarno.",
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-cream text-ink py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10 space-y-8">
        <Link
          href="/"
          className="inline-block text-[10px] uppercase tracking-[0.3em] font-mono text-ink/55 hover:text-ink"
        >
          ← Ziarno.
        </Link>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight">
          Datenschutz / Polityka prywatności
        </h1>

        <section className="space-y-2 leading-relaxed">
          <h2 className="font-medium text-xl pt-4">1. Verantwortlicher / Administrator</h2>
          <p>
            Ziarno Roastery GmbH, Oranienstraße 42, 10999 Berlin.<br />
            Kontakt:{" "}
            <a href="mailto:hello@ziarno.coffee" className="underline hover:text-roast">
              hello@ziarno.coffee
            </a>
          </p>
        </section>

        <section className="space-y-2 leading-relaxed">
          <h2 className="font-medium text-xl pt-4">2. Erhebung von Daten / Zbierane dane</h2>
          <p>
            Beim Besuch dieser Website werden technisch notwendige Server-Logs (IP, Browser-Typ,
            Datum) für maximal 7 Tage gespeichert. Wir verwenden Vercel Analytics und Speed
            Insights — Statistiken aggregierter Daten ohne personenbezogene Profile.
          </p>
        </section>

        <section className="space-y-2 leading-relaxed">
          <h2 className="font-medium text-xl pt-4">3. Cookies</h2>
          <p>
            Strona używa wyłącznie technicznego localStorage (preferencja języka). Nie używamy
            cookies marketingowych ani trackerów stron trzecich.
          </p>
        </section>

        <section className="space-y-2 leading-relaxed">
          <h2 className="font-medium text-xl pt-4">4. Ihre Rechte / Twoje prawa</h2>
          <p>
            Sie haben gemäß DSGVO/RODO das Recht auf Auskunft, Berichtigung, Löschung und
            Widerspruch. Kontakt:{" "}
            <a href="mailto:hello@ziarno.coffee" className="underline hover:text-roast">
              hello@ziarno.coffee
            </a>
            .
          </p>
        </section>

        <p className="pt-8 text-xs text-ink/55">
          Treść tymczasowa — przed publikacją zlecić prawnikowi pełną treść zgodną z DSGVO/RODO.
        </p>
      </div>
    </main>
  );
}

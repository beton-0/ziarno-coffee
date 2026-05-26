import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — Ziarno.",
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-cream text-ink py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10 space-y-8">
        <Link
          href="/"
          className="inline-block text-[10px] uppercase tracking-[0.3em] font-mono text-ink/55 hover:text-ink"
        >
          ← Ziarno.
        </Link>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight">Impressum</h1>

        <section className="space-y-2 leading-relaxed">
          <p className="font-medium">Angaben gemäß § 5 TMG</p>
          <p>
            Ziarno Roastery GmbH<br />
            Oranienstraße 42<br />
            10999 Berlin, Deutschland
          </p>
        </section>

        <section className="space-y-2 leading-relaxed">
          <p className="font-medium">Vertreten durch</p>
          <p>Geschäftsführer: [Imię i nazwisko — uzupełnij]</p>
        </section>

        <section className="space-y-2 leading-relaxed">
          <p className="font-medium">Kontakt</p>
          <p>
            Telefon: +49 30 123 456 78<br />
            E-Mail:{" "}
            <a href="mailto:hello@ziarno.coffee" className="underline hover:text-roast">
              hello@ziarno.coffee
            </a>
          </p>
        </section>

        <section className="space-y-2 leading-relaxed">
          <p className="font-medium">Registereintrag</p>
          <p>
            Eintragung im Handelsregister<br />
            Registergericht: Amtsgericht Berlin-Charlottenburg<br />
            Registernummer: HRB 00000 B
          </p>
        </section>

        <section className="space-y-2 leading-relaxed">
          <p className="font-medium">Umsatzsteuer-ID</p>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: DE000000000</p>
        </section>

        <section className="space-y-2 leading-relaxed">
          <p className="font-medium">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</p>
          <p>[Imię, nazwisko, adres osoby odpowiedzialnej]</p>
        </section>

        <p className="pt-8 text-xs text-ink/55">
          Treść tymczasowa — przed publikacją uzupełnij faktyczne dane firmy.
        </p>
      </div>
    </main>
  );
}

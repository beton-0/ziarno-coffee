import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AGB — Ziarno.",
};

export default function AGB() {
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
          AGB / Regulamin
        </h1>

        <p className="leading-relaxed">
          Allgemeine Geschäftsbedingungen / Regulamin korzystania ze strony Ziarno.
        </p>

        <p className="text-xs text-ink/55 pt-8">
          Treść tymczasowa — przed publikacją uzupełnij faktyczne warunki sprzedaży / korzystania.
        </p>
      </div>
    </main>
  );
}

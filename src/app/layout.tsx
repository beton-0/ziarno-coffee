import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ziarno. — Specialty coffee · Berlin & Copenhagen",
  description:
    "Small-batch specialty coffee, roasted in Berlin and served in Kreuzberg and Nørrebro. We bring you the morning, the ritual, the craft.",
  metadataBase: new URL("https://ziarno-coffee.vercel.app"),
  openGraph: {
    title: "Ziarno. — Specialty coffee",
    description: "Berlin & Copenhagen · single-origin · small-batch · direct trade",
    type: "website",
    url: "https://ziarno-coffee.vercel.app",
    siteName: "Ziarno.",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziarno. — Specialty coffee",
    description: "Berlin & Copenhagen · single-origin · small-batch",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body className="bg-cream text-ink antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

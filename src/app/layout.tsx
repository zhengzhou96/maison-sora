import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MAISON SORA — Architectural Retreat, Kyoto",
  description:
    "An intimate architectural retreat where traditional Japanese craftsmanship meets contemporary minimalism. Experience boutique hospitality redefined.",
  keywords: [
    "Kyoto hotel",
    "boutique hotel",
    "architectural retreat",
    "Japanese hospitality",
    "minimalist design",
    "luxury accommodation",
  ],
  authors: [{ name: "MAISON SORA" }],
  openGraph: {
    title: "MAISON SORA — Architectural Retreat, Kyoto",
    description:
      "An intimate architectural retreat where traditional Japanese craftsmanship meets contemporary minimalism.",
    type: "website",
    locale: "en_US",
    siteName: "MAISON SORA",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAISON SORA — Architectural Retreat, Kyoto",
    description:
      "An intimate architectural retreat where traditional Japanese craftsmanship meets contemporary minimalism.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sumi focus:text-shiro"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

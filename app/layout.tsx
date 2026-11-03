import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Instrument_Sans, Outfit } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const inter = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Blos | Co-own AI",
    template: "%s | Blos",
  },
  description:
    "Blos enables everyone to own and monetize their AI agents. Emerald is the agent app store. The Cref Marketplace is the bazaar.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

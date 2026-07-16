import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { CookieProvider } from "@/lib/CookieContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { BRAND_NAME, LOCATION } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND_NAME} | Luxury Apartments in ${LOCATION}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Grand Apartman offers beautifully appointed luxury vacation apartments in Podhajska, Slovakia — steps from the famous Thermal Baths.",
  metadataBase: new URL("https://grandapartman.sk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: BRAND_NAME,
    images: [{ url: "/logo.png", width: 512, height: 512 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-paper text-espresso">
        <LanguageProvider>
          <CookieProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <CookieBanner />
          </CookieProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import Logo from "./Logo";
import { MAIN_BOOKING_URL } from "@/lib/data";

export default function Header() {
  const { t, locale, setLocale } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.apartments, href: "/#apartments" },
    { label: t.nav.amenities, href: "/#amenities" },
    { label: t.nav.location, href: "/#location" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <Logo variant={scrolled ? "dark" : "light"} height={scrolled ? 36 : 44} />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-sans font-medium tracking-wide transition-colors hover:text-gold ${
                scrolled ? "text-espresso-soft" : "text-paper/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLocale(locale === "en" ? "sk" : "en")}
            className={`text-xs font-sans font-medium tracking-widest border px-2.5 py-1 rounded transition-colors ${
              scrolled
                ? "border-espresso-soft/30 text-espresso-soft hover:border-gold hover:text-gold"
                : "border-paper/40 text-paper/80 hover:border-gold hover:text-gold"
            }`}
            aria-label={`Switch to ${locale === "en" ? "Slovak" : "English"}`}
          >
            {locale === "en" ? "SK" : "EN"}
          </button>

          {/* Book button */}
          <a
            href={MAIN_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans font-semibold tracking-wider border border-gold text-gold px-4 py-2 rounded hover:bg-gold hover:text-espresso transition-all duration-200"
          >
            {t.nav.bookNow}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 ${scrolled ? "text-espresso" : "text-paper"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
            {menuOpen ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" />
                <line x1="19" y1="3" x2="3" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-paper border-t border-champagne/50 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-sans font-medium text-espresso-soft hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-champagne/40">
            <button
              onClick={() => { setLocale(locale === "en" ? "sk" : "en"); setMenuOpen(false); }}
              className="text-xs font-sans font-medium tracking-widest border border-espresso-soft/30 text-espresso-soft px-2.5 py-1 rounded"
            >
              {locale === "en" ? "SK" : "EN"}
            </button>
            <a
              href={MAIN_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-xs font-sans font-semibold tracking-wider border border-gold text-gold px-4 py-2 rounded hover:bg-gold hover:text-espresso transition-all"
            >
              {t.nav.bookNow}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import Logo from "./Logo";
import { MAIN_BOOKING_URL, CONTACT_EMAIL, CONTACT_PHONE, LOCATION, COMPANY_LEGAL } from "@/lib/data";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-espresso text-paper/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Logo variant="light" height={40} />
            <p className="text-sm font-sans leading-relaxed text-paper/60">{t.footer.tagline}</p>
            <p className="text-xs text-paper/40 leading-relaxed">
              {CONTACT_EMAIL}
              <br />
              {CONTACT_PHONE}
              <br />
              {LOCATION}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              {t.footer.quickLinks}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/apartments" className="text-sm hover:text-gold transition-colors">
                {t.nav.apartments}
              </Link>
              <Link href="/#amenities" className="text-sm hover:text-gold transition-colors">
                {t.nav.amenities}
              </Link>
              <Link href="/#location" className="text-sm hover:text-gold transition-colors">
                {t.nav.location}
              </Link>
              <Link href="/contact" className="text-sm hover:text-gold transition-colors">
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Book + legal */}
          <div className="flex flex-col gap-6">
            <a
              href={MAIN_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold text-gold text-xs font-sans font-semibold tracking-wider px-5 py-2.5 rounded hover:bg-gold hover:text-espresso transition-all w-fit"
            >
              {t.footer.bookNow}
            </a>
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
                {t.footer.legal}
              </h3>
              <nav className="flex flex-col gap-2">
                <Link href="/privacy" className="text-sm hover:text-gold transition-colors">
                  {t.footer.privacy}
                </Link>
                <Link href="/terms" className="text-sm hover:text-gold transition-colors">
                  {t.footer.terms}
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-paper/40">
          {/* Company legal details */}
          <div className="leading-relaxed">
            <p className="font-medium text-paper/50">{COMPANY_LEGAL.name}</p>
            <p>IČO: {COMPANY_LEGAL.ico} · {COMPANY_LEGAL.address}</p>
            <p>{COMPANY_LEGAL.registry}</p>
          </div>
          <p className="whitespace-nowrap">
            {t.footer.builtBy}{" "}
            <a
              href="https://dunajmedia.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              DunajMedia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

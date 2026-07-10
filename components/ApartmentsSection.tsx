"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { APARTMENTS, BRAND_NAME, type Apartment } from "@/lib/data";
import SafeImage from "./SafeImage";
import FadeIn from "./FadeIn";

type Props = {
  apartmentImages: Record<string, string[]>;
};

function ApartmentCard({
  apt,
  images,
  expanded,
  onToggle,
}: {
  apt: Apartment;
  images: string[];
  expanded: boolean;
  onToggle: () => void;
}) {
  const { t, locale } = useLang();
  const [imgIdx, setImgIdx] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const name = locale === "sk" ? apt.nameSuffixSk : apt.nameSuffix;
  const shortDesc = locale === "sk" ? apt.shortDescSk : apt.shortDesc;

  function handleToggle() {
    onToggle();
    if (!expanded && cardRef.current) {
      setTimeout(() => cardRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
    }
  }

  if (apt.comingSoon) {
    return (
      <div
        ref={cardRef}
        className="bg-cream border border-champagne rounded-lg overflow-hidden flex flex-col items-center justify-center py-16 px-8 text-center"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
          {t.apartments.comingSoon}
        </span>
        <h3 className="font-serif text-2xl text-espresso font-light mb-3">
          {BRAND_NAME} — {name}
        </h3>
        <p className="font-sans text-sm text-espresso-soft">{t.apartments.comingSoonDesc}</p>
        <Link
          href={`/apartments/${apt.slug}`}
          className="mt-6 text-xs font-sans tracking-widest border border-gold text-gold px-6 py-2.5 rounded hover:bg-gold hover:text-espresso transition-all"
        >
          {t.apartments.learnMore}
        </Link>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className={`bg-paper border rounded-lg overflow-hidden transition-all duration-300 ${
        expanded ? "border-gold shadow-lg" : "border-champagne hover:border-gold/50 hover:shadow-md"
      }`}
    >
      {/* Card header — always visible */}
      <button
        className="w-full text-left"
        onClick={handleToggle}
        aria-expanded={expanded}
        aria-controls={`apt-panel-${apt.slug}`}
      >
        {/* Preview image */}
        <div className="overflow-hidden">
          <SafeImage
            src={images[0] ?? ""}
            alt={name}
            aspectRatio="16/9"
            className={`transition-transform duration-500 ${expanded ? "scale-105" : "hover:scale-[1.03]"}`}
          />
        </div>

        <div className="p-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-xl text-espresso font-light">{name}</h3>
            <p className="font-sans text-xs text-cappuccino mt-1">{apt.size} · {t.apartments.sleeps} {apt.sleeps}</p>
          </div>
          <span className="text-gold mt-1 flex-shrink-0 transition-transform duration-300" style={{ transform: expanded ? "rotate(180deg)" : "none" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="3 6 9 12 15 6" />
            </svg>
          </span>
        </div>
      </button>

      {/* Expanded panel */}
      <div
        id={`apt-panel-${apt.slug}`}
        className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: expanded ? "700px" : "0px" }}
      >
        <div className="px-5 pb-6 border-t border-champagne/50">
          {/* Mini gallery */}
          {images.length > 1 && (
            <div className="mt-4 mb-4">
              <SafeImage src={images[imgIdx] ?? ""} alt={`${name} photo ${imgIdx + 1}`} aspectRatio="16/9" />
              <div className="flex gap-1.5 mt-2 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`flex-shrink-0 w-12 h-9 rounded overflow-hidden border-2 transition-colors ${i === imgIdx ? "border-gold" : "border-transparent"}`}
                    aria-label={`View photo ${i + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <p className="font-sans text-sm text-espresso-soft leading-relaxed mt-4">{shortDesc}</p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href={`/apartments/${apt.slug}`}
              className="text-center text-xs font-sans font-semibold tracking-wider bg-espresso text-paper px-6 py-2.5 rounded hover:bg-cappuccino-deep transition-colors"
            >
              {t.apartments.learnMore}
            </Link>
            <a
              href={apt.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs font-sans font-semibold tracking-wider border border-gold text-gold px-6 py-2.5 rounded hover:bg-gold hover:text-espresso transition-all"
            >
              {t.apartments.bookApartment}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ApartmentsSection({ apartmentImages }: Props) {
  const { t } = useLang();
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <section id="apartments" className="bg-paper py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-14">
          <div className="filigree-divider mb-8">
            <span className="font-serif text-gold text-xl">✦</span>
          </div>
          <h2 className="font-serif text-display-lg text-espresso font-light mb-4">
            {t.apartments.heading}
          </h2>
          <p className="font-sans text-base text-espresso-soft max-w-xl mx-auto">
            {t.apartments.subheading}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {APARTMENTS.map((apt, i) => (
            <FadeIn key={apt.slug} delay={i * 100}>
              <ApartmentCard
                apt={apt}
                images={apartmentImages[apt.slug] ?? []}
                expanded={expandedSlug === apt.slug}
                onToggle={() =>
                  setExpandedSlug(expandedSlug === apt.slug ? null : apt.slug)
                }
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

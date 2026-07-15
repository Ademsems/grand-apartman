"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { APARTMENTS, BRAND_NAME } from "@/lib/data";
import SafeImage from "@/components/SafeImage";
import FadeIn from "@/components/FadeIn";

type Props = { images: Record<string, string[]> };

export default function ApartmentsIndexClient({ images }: Props) {
  const { t, locale } = useLang();

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <div className="filigree-divider mb-8">
            <span className="font-serif text-gold text-xl">✦</span>
          </div>
          <h1 className="font-serif text-display-lg text-espresso font-light mb-4">
            {t.apartments.heading}
          </h1>
          <p className="font-sans text-base text-espresso-soft max-w-xl mx-auto">
            {t.apartments.subheading}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-12">
          {APARTMENTS.map((apt, i) => {
            const name = locale === "sk" ? apt.nameSuffixSk : apt.nameSuffix;
            const shortDesc = locale === "sk" ? apt.shortDescSk : apt.shortDesc;
            const beds = locale === "sk" ? apt.bedsSk : apt.beds;
            const aptImages = images[apt.slug] ?? [];

            return (
              <FadeIn key={apt.slug} delay={i * 80}>
                <div className="bg-cream rounded-xl overflow-hidden border border-champagne md:flex">
                  <div className="md:w-2/5 flex-shrink-0">
                    <SafeImage
                      src={aptImages[0] ?? ""}
                      alt={name}
                      aspectRatio="4/3"
                      className="h-full"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between gap-6 flex-1">
                    <div>
                      <h2 className="font-serif text-display-md text-espresso font-light">
                        {BRAND_NAME} — {name}
                      </h2>
                      <div className="flex flex-wrap gap-4 mt-3 text-xs font-sans text-cappuccino">
                        <span>{apt.size}</span>
                        <span>·</span>
                        <span>{t.apartments.sleeps} {apt.sleeps}</span>
                        <span>·</span>
                        <span>{beds}</span>
                      </div>
                      <p className="font-sans text-sm text-espresso-soft leading-relaxed mt-4 max-w-lg">
                        {shortDesc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/apartments/${apt.slug}`}
                        className="text-xs font-sans font-semibold tracking-wider bg-espresso text-paper px-6 py-2.5 rounded hover:bg-cappuccino-deep transition-colors"
                      >
                        {t.apartments.learnMore}
                      </Link>
                      <a
                        href={apt.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-sans font-semibold tracking-wider border border-gold text-gold px-6 py-2.5 rounded hover:bg-gold hover:text-espresso transition-all"
                      >
                        {t.nav.bookNow}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}

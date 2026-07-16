"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { type Apartment, BRAND_NAME, HOUSE_RULES } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import ApartmentGallery from "@/components/ApartmentGallery";

function ApartmentJsonLd({ apt }: { apt: Apartment }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: `${BRAND_NAME} — ${apt.nameSuffix}`,
    description: apt.shortDesc,
    numberOfRooms: 1,
    url: `https://grandapartman.sk/apartments/${apt.slug}`,
    containedInPlace: {
      "@type": "LodgingBusiness",
      name: BRAND_NAME,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Podhajska",
        addressCountry: "SK",
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}

type Props = { apt: Apartment; images: string[] };

export default function ApartmentPageClient({ apt, images }: Props) {
  const { t, locale } = useLang();

  const name = locale === "sk" ? apt.nameSuffixSk : apt.nameSuffix;
  const description = locale === "sk" ? apt.descriptionSk : apt.description;
  const bathrooms = locale === "sk" ? apt.bathroomsSk : apt.bathrooms;
  const houseRules = locale === "sk" ? HOUSE_RULES.sk : HOUSE_RULES.en;

  return (
    <div className="pt-40 bg-paper min-h-screen">
      <ApartmentJsonLd apt={apt} />

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-4">
          <Link href="/apartments" className="font-sans text-xs text-cappuccino hover:text-gold transition-colors">
            {t.apartmentPage.backToApartments}
          </Link>
        </div>
        <ApartmentGallery images={images} name={name} />
      </div>

      {/* Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <FadeIn>
              <h1 className="font-serif text-display-md text-espresso font-light">
                {BRAND_NAME} —<br className="sm:hidden" /> {name}
              </h1>
            </FadeIn>

            {/* Key facts */}
            <FadeIn>
              <h2 className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-5">
                {t.apartmentPage.keyFacts}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: t.apartments.size, value: apt.size },
                  { label: t.apartments.sleeps, value: apt.sleeps.toString() },
                  { label: t.apartments.bathrooms, value: bathrooms },
                ].map((f) => (
                  <div key={f.label} className="bg-cream rounded-lg p-4 border border-champagne">
                    <p className="font-sans text-xs text-cappuccino uppercase tracking-wider mb-1">{f.label}</p>
                    <p className="font-sans text-sm text-espresso font-medium leading-snug">{f.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Description */}
            <FadeIn>
              <div className="prose prose-sm max-w-none">
                {description.split("\n\n").map((para, i) => (
                  <p key={i} className="font-sans text-base text-espresso-soft leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>

            {/* Amenities */}
            <FadeIn>
              <h2 className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-6">
                {t.apartmentPage.amenities}
              </h2>
              <div className="flex flex-col gap-8">
                {apt.amenities.map((group) => {
                  const label = locale === "sk" ? group.labelSk : group.label;
                  const items = locale === "sk" ? group.itemsSk : group.items;
                  return (
                    <div key={group.label}>
                      <h3 className="font-sans text-sm font-semibold text-espresso mb-3">{label}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {items.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm font-sans text-espresso-soft">
                            <span className="text-gold text-xs">✦</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            {/* House rules */}
            <FadeIn>
              <h2 className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-5">
                {t.apartmentPage.houseRules}
              </h2>
              <ul className="flex flex-col gap-2">
                {houseRules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-sans text-espresso-soft">
                    <span className="text-gold mt-0.5">·</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-40 bg-cream border border-champagne rounded-xl p-6 flex flex-col gap-5">
              <div>
                <p className="font-sans text-xs text-cappuccino uppercase tracking-widest mb-1">
                  {BRAND_NAME}
                </p>
                <h3 className="font-serif text-xl text-espresso font-light">{name}</h3>
              </div>
              <div className="border-t border-champagne pt-4">
                <p className="font-sans text-xs text-espresso-soft mb-4">
                  {apt.size} · {t.apartments.sleeps} {apt.sleeps}
                </p>
                <a
                  href={apt.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-sans text-sm font-semibold tracking-wider bg-gold text-espresso px-6 py-3.5 rounded hover:bg-gold-deep transition-colors w-full"
                >
                  {t.apartmentPage.bookNow}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <FadeIn>
          <div className="mt-20 max-w-2xl">
            <div className="filigree-divider mb-8">
              <span className="font-serif text-gold text-xl">✦</span>
            </div>
            <h2 className="font-serif text-2xl text-espresso font-light mb-8">
              {t.apartmentPage.contactUs}
            </h2>
            <ContactForm />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

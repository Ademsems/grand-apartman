"use client";

import FadeIn from "./FadeIn";
import { useLang } from "@/lib/LanguageContext";
import { CONTACT_EMAIL, CONTACT_PHONES, LOCATION } from "@/lib/data";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const { t } = useLang();

  return (
    <section id="contact" className="bg-paper py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <div className="filigree-divider mb-8">
            <span className="font-serif text-gold text-xl">✦</span>
          </div>
          <h2 className="font-serif text-display-lg text-espresso font-light mb-4">
            {t.contact.heading}
          </h2>
          <p className="font-sans text-base text-espresso-soft max-w-xl mx-auto">
            {t.contact.subheading}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact details */}
          <FadeIn>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
                  Email
                </h3>
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-sans text-sm text-espresso hover:text-gold transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
                  Phone
                </h3>
                <div className="flex flex-col gap-3">
                  {CONTACT_PHONES.map((p) => (
                    <div key={p.name}>
                      <a
                        href={`tel:${p.number.replace(/\s/g, "")}`}
                        className="font-sans text-sm text-espresso hover:text-gold transition-colors"
                      >
                        {p.number}
                      </a>
                      <p className="font-sans text-xs text-cappuccino mt-0.5">
                        {p.name} · {p.languages}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
                  Location
                </h3>
                <p className="font-sans text-sm text-espresso-soft">{LOCATION}</p>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={100}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

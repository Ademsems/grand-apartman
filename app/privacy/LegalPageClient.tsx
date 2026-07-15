"use client";

import { useLang } from "@/lib/LanguageContext";
import { BRAND_NAME, COMPANY_LEGAL, CONTACT_EMAIL } from "@/lib/data";
import FadeIn from "@/components/FadeIn";

// TEMPLATE NOTE: This privacy policy and terms document are templates.
// They should be reviewed by a qualified legal advisor before the site goes live.

type Props = { type: "privacy" | "terms" };

export default function LegalPageClient({ type }: Props) {
  const { t, locale } = useLang();
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? t.privacy.title : t.terms.title;
  const warning = isPrivacy ? t.privacy.templateWarning : t.terms.templateWarning;

  return (
    <div className="pt-40 pb-24 px-4 sm:px-6 bg-paper min-h-screen">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="bg-champagne/40 border border-gold/30 rounded-lg px-5 py-4 mb-10">
            <p className="font-sans text-xs text-cappuccino-deep leading-relaxed">
              ⚠️ {warning}
            </p>
          </div>

          <h1 className="font-serif text-display-md text-espresso font-light mb-8">{title}</h1>

          <div className="font-sans text-sm text-espresso-soft leading-relaxed space-y-6">
            {isPrivacy ? (
              <PrivacyContent locale={locale} />
            ) : (
              <TermsContent locale={locale} />
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function PrivacyContent({ locale }: { locale: string }) {
  return (
    <>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">1. Controller</h2>
        <p>
          The data controller is <strong>{COMPANY_LEGAL.name}</strong>, IČO {COMPANY_LEGAL.ico},{" "}
          {COMPANY_LEGAL.address}. Contact: <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">{CONTACT_EMAIL}</a>.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">2. Data we collect</h2>
        <p>
          We collect only the personal data you voluntarily provide — name, email address, and the content of your message — when you use our contact form. We also use localStorage to store your language preference and cookie consent choice; this data remains on your device and is not transmitted to our servers.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">3. Purpose and legal basis</h2>
        <p>
          Your contact form data is processed to respond to your enquiry (legitimate interest, Art. 6(1)(f) GDPR). We do not use it for marketing without your explicit consent.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">4. Third-party services</h2>
        <p>
          We use Resend (resend.com) to deliver contact form emails. If you consent to non-essential cookies, a Google Maps embed may be loaded — this is subject to Google&apos;s privacy policy. Booking.com links open on an external site governed by their own terms.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">5. Retention</h2>
        <p>Contact form messages are retained only as long as necessary to handle your enquiry.</p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">6. Your rights</h2>
        <p>
          Under GDPR you have the right to access, rectify, erase, restrict, and port your personal data, and to object to its processing. Contact us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">{CONTACT_EMAIL}</a> to exercise any right. You also have the right to lodge a complaint with the Slovak Data Protection Authority (dataprotection.gov.sk).
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">7. Cookies</h2>
        <p>
          This website uses localStorage (not cookies in the HTTP sense) to remember your language preference and consent choice. Non-essential embeds (Google Maps) are only loaded after you actively accept. You can withdraw consent at any time by clicking &quot;Decline&quot; in the banner.
        </p>
      </section>
      <section className="border-t border-champagne pt-6 mt-8">
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">Company details</h2>
        <p>{COMPANY_LEGAL.name}<br/>{COMPANY_LEGAL.address}<br/>IČO: {COMPANY_LEGAL.ico}<br/>{COMPANY_LEGAL.registry}</p>
      </section>
    </>
  );
}

function TermsContent({ locale }: { locale: string }) {
  return (
    <>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">1. Service provider</h2>
        <p>
          <strong>{BRAND_NAME}</strong> vacation apartments are operated by <strong>{COMPANY_LEGAL.name}</strong>, IČO {COMPANY_LEGAL.ico}, {COMPANY_LEGAL.address}.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">2. Bookings</h2>
        <p>
          All reservations are made through Booking.com. By completing a booking you agree to Booking.com&apos;s terms and conditions in addition to any property-specific house rules communicated at check-in.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">3. House rules</h2>
        <p>Check-in 15:00–18:00 · Check-out 10:00–11:00 · No smoking · No parties or events · No pets · Children welcome · Minimum age at check-in: 18.</p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">4. Accuracy of information</h2>
        <p>
          We make every effort to keep information on this website accurate and up to date. However, we reserve the right to correct errors or update content without prior notice. The review score shown is a manually captured snapshot and may not reflect the current Booking.com rating.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">5. Liability</h2>
        <p>
          This website is a marketing showcase; it does not constitute a binding contract. All contractual obligations arise through the Booking.com reservation process. To the extent permitted by Slovak law, {COMPANY_LEGAL.name} is not liable for indirect damages arising from the use of this website.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">6. Governing law</h2>
        <p>These terms are governed by the laws of the Slovak Republic.</p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">7. Contact</h2>
        <p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">{CONTACT_EMAIL}</a>
        </p>
      </section>
      <section className="border-t border-champagne pt-6 mt-8">
        <h2 className="font-serif text-xl text-espresso font-normal mb-3">Company details</h2>
        <p>{COMPANY_LEGAL.name}<br/>{COMPANY_LEGAL.address}<br/>IČO: {COMPANY_LEGAL.ico}<br/>{COMPANY_LEGAL.registry}</p>
      </section>
    </>
  );
}

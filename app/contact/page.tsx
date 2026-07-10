import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/data";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: `Contact | ${BRAND_NAME}`,
  description: "Get in touch with Grand Apartman — we're happy to answer questions and help you plan your stay in Podhajska.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 bg-paper min-h-screen">
      <ContactSection />
    </div>
  );
}

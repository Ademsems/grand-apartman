import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Grand Apartman — we're happy to answer questions and help you plan your stay in Podhajska.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-20 bg-paper min-h-screen">
      <ContactSection />
    </div>
  );
}

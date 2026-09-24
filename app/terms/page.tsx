import type { Metadata } from "next";
import LegalPageClient from "../privacy/LegalPageClient";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPageClient type="terms" />;
}

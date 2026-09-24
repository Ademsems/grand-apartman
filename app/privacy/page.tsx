import type { Metadata } from "next";
import LegalPageClient from "./LegalPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPageClient type="privacy" />;
}

import type { Metadata } from "next";
import { BRAND_NAME, COMPANY_LEGAL, CONTACT_EMAIL } from "@/lib/data";
import LegalPageClient from "./LegalPageClient";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND_NAME}`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPageClient type="privacy" />;
}

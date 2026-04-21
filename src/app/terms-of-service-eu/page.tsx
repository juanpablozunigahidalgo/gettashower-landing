import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Terms of Service | GettaShower",
  description: "GettaShower terms of service for EU/EEA operations.",
};

export default async function TermsOfServicePage() {
  return (
    <LegalDocumentPage
      title="Terms of Service"
      documentPath="public/Documents/terms-of-service-eu.md"
    />
  );
}

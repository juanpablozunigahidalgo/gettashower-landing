import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Privacy Policy | GettaShower",
  description: "GettaShower privacy policy for EU/EEA operations.",
};

export default async function PrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      title="Privacy Policy"
      documentPath="public/Documents/privacy-policy-eu.md"
    />
  );
}

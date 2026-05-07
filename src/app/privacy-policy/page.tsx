import type { Metadata } from "next";
import Link from "next/link";
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
      afterArticle={
        <div>
          <p className="text-sm font-medium text-[#4A5F9E] mb-2">Account deletion</p>
          <p className="text-[#1A2B70] leading-relaxed mb-3">
            To delete your GettaShower account (required URL for app store data disclosures), follow the step-by-step
            instructions on our dedicated page.
          </p>
          <Link
            href="/privacy-policy/account-deletion"
            className="inline-flex items-center font-semibold text-[#1A2B70] underline decoration-[#1A2B70]/40 underline-offset-4 hover:decoration-[#1A2B70] transition-colors"
          >
            How to delete your account →
          </Link>
        </div>
      }
    />
  );
}

import type { Metadata } from "next";
import Link from "next/link";

const LAST_UPDATED = "2026-05-08";

export const metadata: Metadata = {
  title: "Account deletion | GettaShower",
  description:
    "How to delete your GettaShower account (in-app or by email). Required for Google Play Data safety and GDPR transparency.",
  alternates: {
    canonical: "/privacy-policy/account-deletion",
  },
};

export default function AccountDeletionPage() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border border-[#D0D8EB] bg-white shadow-sm p-6 sm:p-8 md:p-10">
          <div className="mb-8">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
              <Link href="/" className="text-[#4A5F9E] hover:text-[#1A2B70] transition-colors">
                Back to home
              </Link>
              <span className="text-[#D0D8EB]" aria-hidden>
                |
              </span>
              <Link href="/privacy-policy" className="text-[#4A5F9E] hover:text-[#1A2B70] transition-colors">
                Privacy Policy
              </Link>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#1A2B70]">
              Account deletion — GettaShower
            </h1>
            <p className="mt-2 text-sm text-[#4A5F9E]">Last updated: {LAST_UPDATED}</p>
          </div>

          <div className="space-y-8 text-[#1A2B70]">
            <p className="leading-relaxed">
              <strong className="text-[#1A2B70]">GettaShower</strong> is operated by{" "}
              <strong className="text-[#1A2B70]">Experimentar AB</strong> (Org. nr: 559578-3274), Sweden, trading as
              GettaShower. This page explains how you can request deletion of your account without signing in on the web.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1A2B70] tracking-tight">
                Delete your account in the app (recommended)
              </h2>
              <p className="text-[#4A5F9E] leading-relaxed">
                Self-service deletion in the mobile app is the primary path. Account deletion through this flow is{" "}
                <strong className="text-[#1A2B70]">permanent</strong> once completed successfully.
              </p>
              <ol className="ml-6 list-decimal space-y-2 leading-relaxed">
                <li>Open the <strong className="text-[#1A2B70]">GettaShower</strong> app and sign in.</li>
                <li>
                  Go to <strong className="text-[#1A2B70]">Settings</strong>.
                </li>
                <li>
                  Tap <strong className="text-[#1A2B70]">Delete account</strong>.
                </li>
                <li>Confirm when prompted.</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1A2B70] tracking-tight">If you cannot use the app</h2>
              <p className="leading-relaxed">
                Email{" "}
                <a
                  href="mailto:info@gettashower.com?subject=Account%20deletion%20request%20%E2%80%94%20GettaShower"
                  className="font-semibold underline decoration-[#1A2B70]/40 underline-offset-4 hover:decoration-[#1A2B70]"
                >
                  info@gettashower.com
                </a>{" "}
                from the <strong className="text-[#1A2B70]">email address registered on your account</strong>. Use a clear
                subject line such as:{" "}
                <span className="rounded-lg bg-[#F6F8FE] px-2 py-0.5 font-mono text-sm text-[#1A2B70]">
                  Account deletion request — GettaShower
                </span>
              </p>
              <p className="leading-relaxed">
                We may ask you to verify your identity or ownership of the account before processing the request.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1A2B70] tracking-tight">What we delete vs what may be kept</h2>
              <p className="leading-relaxed">
                When account deletion completes successfully, we typically remove or anonymise your profile and account
                access, and associated user-facing data tied to that account as described in our processes.
              </p>
              <p className="leading-relaxed">
                <strong className="text-[#1A2B70]">Some requests cannot be completed immediately</strong> if certain
                operational items must be resolved first — for example open refunds, complaints, payouts, or legal holds.
                The app explains what is blocking deletion and what to resolve first when deletion is not yet possible.
              </p>
              <p className="leading-relaxed">
                <strong className="text-[#1A2B70]">Certain records may be retained</strong> where required by law or for
                legitimate purposes — for example tax and accounting records, payment-related metadata held under
                payment provider retention policies, or dispute and audit trails for closed cases — as explained in our{" "}
                <Link href="/privacy-policy" className="font-semibold underline decoration-[#1A2B70]/40 underline-offset-4 hover:decoration-[#1A2B70]">
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="text-sm text-[#4A5F9E] leading-relaxed">
                Do not assume every record is erased instantly in all situations; retention depends on legal obligations
                and the state of your account (open cases, payments, etc.).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1A2B70] tracking-tight">Host / business accounts</h2>
              <p className="leading-relaxed">
                If your account includes host or business entities, the in-app flow may require you to close or resolve
                companies and locations before profile deletion can complete. Hosts should use the same{" "}
                <strong className="text-[#1A2B70]">Settings → Delete account</strong> path; if the account is blocked or
                the situation is complex, support may need to coordinate with you.
              </p>
            </section>

            <section className="rounded-2xl border border-[#D0D8EB] bg-[#F6F8FE] p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-[#1A2B70]">Privacy Policy & contact</h2>
              <ul className="mt-3 space-y-2 text-[#1A2B70]">
                <li>
                  Full Privacy Policy:{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-semibold underline decoration-[#1A2B70]/40 underline-offset-4 hover:decoration-[#1A2B70]"
                  >
                    https://www.gettashower.com/privacy-policy/
                  </Link>
                </li>
                <li>
                  Contact:{" "}
                  <a
                    href="mailto:info@gettashower.com"
                    className="font-semibold underline decoration-[#1A2B70]/40 underline-offset-4 hover:decoration-[#1A2B70]"
                  >
                    info@gettashower.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

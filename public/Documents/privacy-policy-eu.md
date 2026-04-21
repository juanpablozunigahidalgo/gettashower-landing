# GettaShower Privacy Policy (EU/EEA)

Last updated: 2026-04-21  
Version: 1.2 (EU rollout)

This Privacy Policy explains how Experimentar AB (Org. nr: 559578-3274), operating under the brand "GettaShower", processes personal data for the GettaShower mobile app, related host tools, and support/admin operations.

This document is written for operations focused on the European Union and European Economic Area. It should be reviewed by qualified legal counsel before production publication.

## 1. Controller and Contact

For GDPR purposes, the controller is Experimentar AB (Org. nr: 559578-3274), operating under the brand "GettaShower" ("GettaShower", "we", "us").

- Registered office / controller details: Experimentar AB (Org. nr: 559578-3274), Molnvädersgatan 8 Lgh 1301, 418 35 Göteborg, Sweden
- Privacy contact email: info@gettashower.com
- Support email: info@gettashower.com

Article 27 GDPR representative: Not applicable, as the controller is established in Sweden (EU).

## 2. Scope

This policy applies to:

- Guests/users of the GettaShower app
- Hosts (companies and their authorized representatives)
- Data handled through support and internal admin workflows
- Public website/landing experiences connected to GettaShower

It does not apply to third-party services that have their own privacy notices, including payment provider and map providers.

## 3. Data We Process

### 3.1 Account and identity data

- User ID (UUID), account email, sign-in metadata
- Profile fields such as first/last name, username, phone number, country, avatar URL
- Role flags (for example guest/host/admin role in app context)

### 3.2 Host/company compliance data

- Company legal name, country, tax/VAT number, legal form
- Registered address fields
- KYB/compliance document metadata and verification status
- VAT verification logs and verification outputs (including VIES check results)
- Host declaration acceptance records (version, text snapshot, timestamp, user/company IDs)
- Insurance/compliance proof metadata supplied by hosts (for example liability insurance evidence)

### 3.3 Service usage and transaction data

- Facility records (name, address, coordinates, pricing, amenities, images)
- Session records (check-in/check-out timestamps, status, facility, amount, payment state)
- Payment transaction logs (credit/debit records, references)
- Host payout records and payout/reversal status data
- Refund request records, status and case notes

### 3.4 Trust and safety / dispute data

- User complaints and host reports
- Categories, descriptions, moderation status
- Evidence attachment metadata and files uploaded in private evidence buckets
- Case/audit actions performed by authorized admin personnel

### 3.5 Technical and security data

- Access token/JWT validation context (for authenticated API calls)
- Error and function logs for security, fraud prevention, troubleshooting, and reliability
- File/object paths and signed URL activity in storage workflows

### 3.6 Website and communication data

- Basic web request metadata and security logs for public/admin web properties
- Contact form or support communication data (if implemented)
- Embedded third-party content telemetry (for example hosted video providers), depending on user interaction and browser settings

## 4. Purposes and Legal Bases (GDPR Article 6)

We process personal data for the following purposes:

1. **Provide the contract/service** (Art. 6(1)(b))
   - Account creation and authentication
   - Session booking/access flows and service delivery
   - Payment setup, charging, refunds, and payout handling
   - Recording legal-consent and declaration acceptance evidence for accountability

2. **Legal obligations** (Art. 6(1)(c))
   - Tax/accounting recordkeeping
   - Regulatory and compliance obligations
   - Handling lawful requests and legal holds
   - Enforcing legally required host compliance checks (including insurance/verification evidence where required)

3. **Legitimate interests** (Art. 6(1)(f))
   - Security monitoring, anti-fraud, abuse prevention
   - Moderation and incident handling
   - Internal auditability and platform integrity
   - Product reliability and operational analytics

4. **Consent** (Art. 6(1)(a), where required)
   - Optional communications or optional non-essential tracking/cookies, if enabled
   - You can withdraw consent at any time with effect for future processing

Special categories of data are not intentionally requested. If users upload sensitive data in free-text or evidence attachments, processing occurs only as needed for dispute/safety handling and legal compliance.

## 5. Data Sources

We collect data:

- Directly from users and hosts (registration, profile edits, documents, reports)
- Automatically from app/service interactions (sessions, payment events, moderation workflow)
- From payment and verification providers (limited operational metadata, VAT check responses)
- From authorized admin actions recorded in audit systems

## 6. Recipients and Processors

We share personal data only where necessary for service delivery, legal compliance, and security.

Main processor categories:

- **Supabase (EU region / Ireland)**: database, auth, storage, edge functions
- **Stripe**: payment setup, payment intents, refunds, connect payouts
- **Cloudflare Pages**: hosting/admin web delivery and edge/network layer
- **GitHub Pages** (landing/static frontend context): static site hosting and associated delivery logs

We maintain data processing agreements and appropriate contractual safeguards with subprocessors where required.

## 7. International Transfers

Although the service is designed for Europe and primary backend infrastructure is in the EU (Ireland), some providers may process data outside the EEA/UK.

Where transfers occur, we rely on appropriate safeguards, such as:

- Standard Contractual Clauses (SCCs) and/or UK IDTA equivalents
- Transfer risk assessments where required
- Supplementary technical and organizational safeguards

## 8. Retention

We keep data only as long as necessary for the stated purposes and legal obligations.

Indicative retention logic used operationally:

- Account/profile data: while account is active, then deletion/anonymization workflow unless retention is required
- Session/payment/accounting records: retained for statutory financial/legal periods
- Complaint/refund/report evidence: retained per case-retention policy; may be deleted after closure windows
- Legal hold data: retained longer where litigation, fraud, or regulatory review requires preservation
- Audit records: retained as needed for accountability and security investigations

Exact periods should be maintained in an internal retention schedule approved by Experimentar AB and updated as legal requirements evolve.

## 9. Security Measures

We implement technical and organizational measures appropriate to risk, including:

- Access controls and role-based permissions
- Authenticated API patterns and service-role separation for privileged actions
- Private storage buckets and signed URLs for sensitive evidence
- Audit logging for sensitive admin actions
- Environment secret handling and least-privilege practices

No online system is 100% secure; users should protect their credentials and devices.

## 10. Data Subject Rights

Subject to GDPR conditions and exemptions, you may request:

- Access to your personal data
- Rectification of inaccurate data
- Erasure
- Restriction of processing
- Portability
- Objection to certain processing based on legitimate interests
- Withdrawal of consent where processing is consent-based

You may also lodge a complaint with your local supervisory authority.

Requests can be sent to: info@gettashower.com.

## 11. Automated Decision-Making

We do not use solely automated decision-making with legal or similarly significant effects without meaningful human review. Operational fraud/risk flags may assist human review workflows.

## 12. Children

The service is not intended for persons under 18 years of age. If we learn that prohibited minor data was processed, we will take steps to remove it.

## 13. Changes to this Policy

We may update this policy to reflect legal, technical, or business changes. Material updates will be communicated through appropriate channels (for example in-app notice or website update), and the latest version date will be updated above.


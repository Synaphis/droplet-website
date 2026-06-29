import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Droplet",
  description: "Privacy Policy for Droplet, including data use, sharing, retention, deletion, and user rights."
};

const dataGroups = [
  {
    title: "Account and subscription",
    copy: "Account identifiers, authentication details, device and app information, subscription status, purchase entitlement metadata, support requests, security signals, and sync metadata."
  },
  {
    title: "Product evidence",
    copy: "Product photos, label images, ingredient lists, directions, product categories, scan outputs, saved products, and generated reports."
  },
  {
    title: "Skin context",
    copy: "Skin type, sensitivity, goals, allergies, avoid-list, age range, gender, climate context, routine preferences, and other profile details the user chooses to provide."
  },
  {
    title: "Routine memory",
    copy: "Products in routines, reminder times, completed steps, skipped steps, adherence history, saved products, notes, and settings."
  },
  {
    title: "App diagnostics",
    copy: "Crash logs, performance data, feature usage, approximate device information, and reliability signals used to maintain and improve the service."
  }
];

const rights = [
  "Access, correct, export, or delete eligible account, report, routine, and profile information.",
  "Withdraw optional permissions such as camera, photo library, and notifications through device settings.",
  "Request account deletion through the app or the public support page.",
  "Opt out of marketing communications where applicable.",
  "Appeal, object, restrict, or complain to a regulator where local privacy law provides those rights."
];

export default function PrivacyPage() {
  return (
    <main className="legalPage">
      <header className="legalHeader">
        <a href="/">Back to Droplet</a>
        <p className="sectionLabel">Privacy policy</p>
        <h1>Private skincare decisions need a plain privacy posture.</h1>
        <p>
          Effective date: June 16, 2026. Droplet uses personal skin, product, and routine context to generate scans, reports, and routine guidance. This policy explains what information may be processed, why it is used, when it may be shared, and how users can request deletion or other privacy help.
        </p>
      </header>

      <section className="legalSection">
        <h2>Who this policy covers</h2>
        <p>
          This policy applies to Droplet websites, mobile applications, support channels, and related services. Droplet provides ingredient, formulation, routine, and profile-fit guidance for skincare products. It is not a medical device and does not provide medical diagnosis or treatment.
        </p>
      </section>

      <section className="legalSection">
        <h2>Information Droplet may use</h2>
        <div className="legalGrid">
          {dataGroups.map((group) => (
            <article className="legalCard" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="legalSection">
        <h2>How information is used</h2>
        <ul>
          <li>To create label scans, ingredient explanations, claim checks, risk summaries, and profile-aware verdicts.</li>
          <li>To place products into morning, evening, or night routines with relevant usage cautions.</li>
          <li>To remember saved products, past reactions, routine history, skipped products, and user preferences across supported devices.</li>
          <li>To send reminders or notifications only when users enable them.</li>
          <li>To provide support, maintain reliability, detect abuse, prevent fraud, manage subscriptions, and improve product safety.</li>
          <li>To comply with applicable law, enforce terms, and respond to lawful requests.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Permissions</h2>
        <ul>
          <li>Camera access is used to scan product labels and packaging when the user chooses to scan.</li>
          <li>Photo library access is used only when the user chooses to upload or select an image.</li>
          <li>Notifications are used for routine reminders and app updates when enabled by the user.</li>
          <li>Users can change app permissions in iOS or Android device settings.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Sharing and service providers</h2>
        <p>
          Droplet may share information with service providers that help operate the app, such as cloud hosting, authentication, database storage, image processing, AI processing, analytics, crash reporting, customer support, and subscription entitlement services. These providers are allowed to process information only to provide services to Droplet, protect the service, or comply with law.
        </p>
        <p>
          Droplet may also disclose information if required by law, to protect users or the service, during a business transfer, or with the user&apos;s direction or consent.
        </p>
      </section>

      <section className="legalSection">
        <h2>Advertising and sponsorship</h2>
        <p>
          Droplet does not sell personal skincare profile data for advertising. Droplet does not use sponsored ranking, affiliate steering, or brand-paid placement as the basis for product guidance. If this changes, the policy and user-facing disclosures will be updated before using personal data for that purpose.
        </p>
      </section>

      <section className="legalSection">
        <h2>AI processing</h2>
        <p>
          Droplet may process product photos, label text, profile details, and routine context through automated systems to generate reports and suggestions. Outputs can be incomplete or wrong, especially when labels are unclear, product information changes, or user context is missing. Users should review outputs before acting on them.
        </p>
      </section>

      <section className="legalSection">
        <h2>Retention and deletion</h2>
        <p>
          Droplet keeps information only as long as needed to operate user-facing features, provide support, satisfy legal or security obligations, maintain reliable sync, and resolve disputes. Deletion requests remove eligible account, report, routine, profile, and product-photo data unless retention is required for security, billing, legal, fraud-prevention, or dispute-resolution reasons.
        </p>
      </section>

      <section className="legalSection">
        <h2>User controls and rights</h2>
        <ul>
          {rights.map((right) => (
            <li key={right}>{right}</li>
          ))}
        </ul>
      </section>

      <section className="legalSection">
        <h2>Security</h2>
        <p>
          Droplet uses reasonable administrative, technical, and organizational safeguards designed to protect personal information. No internet or mobile service can guarantee perfect security, so users should keep account credentials and device access protected.
        </p>
      </section>

      <section className="legalSection">
        <h2>International transfers</h2>
        <p>
          Droplet and its service providers may process information in countries other than the user&apos;s country of residence. Where required, Droplet relies on appropriate safeguards for cross-border processing.
        </p>
      </section>

      <section className="legalSection">
        <h2>Children</h2>
        <p>
          Droplet is not directed to children under 13, or the age of digital consent where a higher age applies. If a parent or guardian believes a child provided personal information, they can contact support to request deletion.
        </p>
      </section>

      <section className="legalSection">
        <h2>Changes to this policy</h2>
        <p>
          Droplet may update this policy as the product, law, or platform requirements change. Material changes will be reflected by updating the effective date and, where appropriate, providing additional notice in the app or on the website.
        </p>
      </section>

      <section className="legalSection">
        <h2>Contact and deletion requests</h2>
        <p>
          For privacy requests, account deletion, or questions about this policy, use the public <a href="/support">Droplet support page</a> or the in-app support flow. Include the account email or account identifier when possible so the request can be verified.
        </p>
      </section>
    </main>
  );
}

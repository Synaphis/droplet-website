import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Droplet AI"
};

const dataGroups = [
  {
    title: "Product evidence",
    copy: "Product photos, label images, ingredient lists, directions, product categories, scan outputs, and saved reports."
  },
  {
    title: "Skin context",
    copy: "Skin type, sensitivity, goals, allergies, avoid-list, age range, gender, climate context, and profile preferences."
  },
  {
    title: "Routine memory",
    copy: "Products in routines, reminder times, completed steps, skipped steps, adherence history, saved products, and notes."
  },
  {
    title: "Account operations",
    copy: "Account identifiers, device and app information, subscription status, support requests, security signals, and sync metadata."
  }
];

export default function PrivacyPage() {
  return (
    <main className="legalPage">
      <header className="legalHeader">
        <a href="/">Back to Droplet AI</a>
        <p className="sectionLabel">Privacy policy</p>
        <h1>Private skincare decisions need a plain privacy posture.</h1>
        <p>
          Droplet AI uses personal skin and routine context to generate scans, reports, and routine guidance. The product is designed around independence, user control, and a clear separation from advertising incentives.
        </p>
      </header>

      <section className="legalSection">
        <h2>Information Droplet AI may use</h2>
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
          <li>To provide support, maintain reliability, detect abuse, manage subscriptions, and improve product safety.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Advertising and sponsorship</h2>
        <p>
          Droplet AI does not sell personal skincare profile data for advertising. Droplet AI does not use sponsored ranking, affiliate steering, or brand-paid placement as the basis for product guidance.
        </p>
      </section>

      <section className="legalSection">
        <h2>User controls</h2>
        <ul>
          <li>Users can delete scan reports, saved products, and routine data from inside the app where those controls are available.</li>
          <li>Users can request account deletion and data deletion through support.</li>
          <li>Users can choose not to save a product report after reviewing a scan.</li>
          <li>Subscriptions are managed through the App Store or Google Play purchase flow.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Retention and deletion</h2>
        <p>
          Droplet AI keeps information only as long as needed to operate user-facing features, provide support, satisfy legal or security obligations, and maintain reliable sync. Deletion requests remove eligible account, report, routine, and profile data unless retention is required for security, billing, legal, or dispute-resolution reasons.
        </p>
      </section>

      <section className="legalSection">
        <h2>Contact</h2>
        <p>For privacy requests, contact the Droplet AI support team through the app or the support page.</p>
      </section>
    </main>
  );
}

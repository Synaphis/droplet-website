import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Droplet AI"
};

export default function PrivacyPage() {
  return (
    <main className="legalPage">
      <header className="legalHeader">
        <a href="/">Back to Droplet AI</a>
        <h1>Privacy Policy</h1>
        <p>
          Droplet AI is built for personal skincare decisions. This page explains the product's privacy posture for users, app reviewers, and store listing checks.
        </p>
      </header>

      <section className="legalSection">
        <h2>Information Droplet AI uses</h2>
        <p>Droplet AI may use information users provide to generate reports and personalize routine guidance.</p>
        <ul>
          <li>Product photos, label images, ingredient lists, and scan reports.</li>
          <li>Skin profile details such as skin type, sensitivity, goals, allergies, avoid-list, age range, gender, and climate context.</li>
          <li>Routine data such as products, reminder times, completed steps, skipped steps, saved reports, and notes.</li>
          <li>Account and device information needed to operate sync, support, subscriptions, and security.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>How information is used</h2>
        <ul>
          <li>To create label scans, ingredient explanations, claim checks, and profile-aware verdicts.</li>
          <li>To place products into morning, evening, or night routines.</li>
          <li>To remember saved products, routine history, and user preferences across supported devices.</li>
          <li>To provide support, maintain safety, improve reliability, and manage subscriptions.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Advertising and sponsorship</h2>
        <p>
          Droplet AI does not sell personal skincare profile data for advertising. Droplet AI does not use sponsored ranking or affiliate steering as the basis for product guidance.
        </p>
      </section>

      <section className="legalSection">
        <h2>User controls</h2>
        <ul>
          <li>Users can delete scan reports and routine data from inside the app where those controls are available.</li>
          <li>Users can request account deletion and data deletion through support.</li>
          <li>Subscriptions are managed through the App Store or Google Play purchase flow.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Contact</h2>
        <p>For privacy requests, contact the Droplet AI support team through the app or the support page.</p>
      </section>
    </main>
  );
}

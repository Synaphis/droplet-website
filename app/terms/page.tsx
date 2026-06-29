import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Droplet",
  description: "Terms of Use for Droplet, including subscriptions, acceptable use, user content, guidance limits, and legal disclaimers."
};

export default function TermsPage() {
  return (
    <main className="legalPage">
      <header className="legalHeader">
        <a href="/">Back to Droplet</a>
        <h1>Terms of Use</h1>
        <p>
          Effective date: June 16, 2026. These terms describe the intended use of Droplet for skincare label scanning, report generation, routine guidance, subscriptions, and account use.
        </p>
      </header>

      <section className="legalSection">
        <h2>Use of Droplet</h2>
        <p>
          Droplet provides ingredient, formulation, claim, routine, and profile-fit guidance for skincare products. Users are responsible for deciding whether to buy, apply, stop using, or continue using a product. Droplet does not guarantee that a product will be safe, effective, non-irritating, non-comedogenic, or suitable for a particular person.
        </p>
      </section>

      <section className="legalSection">
        <h2>Account responsibility</h2>
        <ul>
          <li>Users are responsible for keeping account credentials and device access secure.</li>
          <li>Users should provide accurate information when creating profiles, routines, and support requests.</li>
          <li>Users must not impersonate others, misrepresent information, or use another person&apos;s account without permission.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Subscriptions, trials, and billing</h2>
        <ul>
          <li>The free trial provides full access for 7 days unless otherwise shown at purchase.</li>
          <li>The monthly plan is $9.99 per month unless a different price is shown in the store checkout.</li>
          <li>The yearly plan is $79.99 per year unless a different price is shown in the store checkout.</li>
          <li>Subscriptions, cancellation, renewal, refunds, taxes, and billing disputes are handled through the App Store or Google Play account that started the subscription.</li>
          <li>Deleting the app does not automatically cancel a subscription. Users must cancel through the relevant store subscription settings.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>User content and uploads</h2>
        <p>
          Users may upload product photos, label images, profile information, routine details, notes, and support messages. Users confirm that they have the right to submit that content and grant Droplet permission to process it to provide, secure, support, and improve the service.
        </p>
      </section>

      <section className="legalSection">
        <h2>Acceptable use</h2>
        <ul>
          <li>Do not use Droplet to make medical diagnoses, emergency decisions, or treatment decisions.</li>
          <li>Do not upload illegal, harmful, infringing, deceptive, or unauthorized content.</li>
          <li>Do not attempt to reverse engineer, scrape, abuse, overload, interfere with, or bypass the service.</li>
          <li>Do not use Droplet outputs to mislead others, market products deceptively, or claim medical certainty.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Guidance limits</h2>
        <p>
          Droplet can be wrong, incomplete, or outdated. Product labels can change, uploaded images can be unclear, ingredients can be interpreted differently, and skincare tolerance varies from person to person. Users should read product packaging, follow label directions, patch test when appropriate, and seek professional help for medical concerns.
        </p>
      </section>

      <section className="legalSection">
        <h2>Intellectual property</h2>
        <p>
          Droplet, including its design, software, text, reports, scoring presentation, branding, and related materials, is protected by intellectual property laws. Users may use the app for personal, lawful skincare decision support, but may not copy, resell, redistribute, or build a competing service from Droplet content or outputs without permission.
        </p>
      </section>

      <section className="legalSection">
        <h2>Service changes and availability</h2>
        <p>
          Droplet may change, suspend, or discontinue features, pricing, plans, or availability. The service may be unavailable because of maintenance, outages, third-party provider issues, security events, or other reasons.
        </p>
      </section>

      <section className="legalSection">
        <h2>Disclaimers and liability</h2>
        <p>
          To the maximum extent permitted by law, Droplet is provided as is and as available, without warranties of any kind. To the maximum extent permitted by law, Droplet is not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for decisions users make based on app outputs. Some jurisdictions do not allow certain limitations, so some limits may not apply to every user.
        </p>
      </section>

      <section className="legalSection">
        <h2>Termination</h2>
        <p>
          Droplet may suspend or terminate access if a user violates these terms, creates risk for the service or other users, or if continued access would be unlawful. Users may stop using the service at any time and may request account deletion through support.
        </p>
      </section>

      <section className="legalSection">
        <h2>Contact</h2>
        <p>
          For account, billing, legal, or product questions, contact Droplet through the <a href="/support">support page</a> or the in-app support flow.
        </p>
      </section>
    </main>
  );
}

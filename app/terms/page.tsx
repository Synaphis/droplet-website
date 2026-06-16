import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Droplet AI"
};

export default function TermsPage() {
  return (
    <main className="legalPage">
      <header className="legalHeader">
        <a href="/">Back to Droplet AI</a>
        <h1>Terms of Use</h1>
        <p>
          These product terms describe the intended use of Droplet AI for skincare guidance, subscriptions, and account use.
        </p>
      </header>

      <section className="legalSection">
        <h2>Use of Droplet AI</h2>
        <p>
          Droplet AI provides ingredient, formulation, claim, routine, and profile-fit guidance for skincare products. Users are responsible for deciding whether to buy, apply, stop using, or continue using a product.
        </p>
      </section>

      <section className="legalSection">
        <h2>Subscriptions</h2>
        <ul>
          <li>The free trial provides full access for 7 days.</li>
          <li>The monthly plan is $9.99 per month.</li>
          <li>The yearly plan is $79.99 per year.</li>
          <li>Subscriptions, cancellation, renewal, and refunds are handled through the App Store or Google Play where the purchase was made.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Acceptable use</h2>
        <ul>
          <li>Do not use Droplet AI to make medical diagnoses or emergency decisions.</li>
          <li>Do not upload content that you do not have permission to use.</li>
          <li>Do not attempt to reverse engineer, abuse, overload, or bypass the service.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Guidance limits</h2>
        <p>
          Droplet AI can be wrong or incomplete. Product labels can change, uploaded images can be unclear, and skincare tolerance varies from person to person.
        </p>
      </section>

      <section className="legalSection">
        <h2>Contact</h2>
        <p>For account, billing, or product questions, contact Droplet AI support through the app or support page.</p>
      </section>
    </main>
  );
}

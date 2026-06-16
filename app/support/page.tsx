import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Droplet AI"
};

export default function SupportPage() {
  return (
    <main className="legalPage">
      <header className="legalHeader">
        <a href="/">Back to Droplet AI</a>
        <h1>Support</h1>
        <p>
          Get help with scans, reports, routines, account deletion, billing, privacy requests, and App Store or Google Play subscriptions for Droplet AI.
        </p>
      </header>

      <section className="legalSection">
        <h2>Common requests</h2>
        <ul>
          <li>Report a scan that read a label incorrectly.</li>
          <li>Ask how a score or claim check was generated.</li>
          <li>Request account deletion or report deletion.</li>
          <li>Get help managing subscriptions through the App Store or Google Play.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Support process</h2>
        <ul>
          <li>Use the in-app support flow for report questions, routine issues, and account help.</li>
          <li>Use the support page linked from the App Store listing for reviewer and customer support access.</li>
          <li>Include the product name, device, and a short description when reporting a scan or subscription issue.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Response scope</h2>
        <p>
          Support covers product behavior, billing guidance, privacy and deletion requests, and help understanding reports. Medical questions should be directed to a qualified professional.
        </p>
      </section>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Droplet AI",
  description: "Public support page for Droplet AI users, including account deletion, billing, privacy, scan, report, and routine help."
};

const requests = [
  {
    title: "Scan and report help",
    copy: "Report a label that scanned incorrectly, ask how a score was generated, or share missing product context that should be reviewed."
  },
  {
    title: "Routine and reminders",
    copy: "Get help with reminder timing, generated routine steps, adherence history, skipped steps, and product placement."
  },
  {
    title: "Account and billing",
    copy: "Find guidance for App Store subscriptions, trial questions, cancellation, account access, and plan status."
  },
  {
    title: "Privacy and deletion",
    copy: "Request deletion of reports, routine data, account data, or ask how photos and skin profile details are used."
  }
];

export default function SupportPage() {
  return (
    <main className="legalPage">
      <header className="legalHeader">
        <a href="/">Back to Droplet AI</a>
        <p className="sectionLabel">Support</p>
        <h1>Help for scans, reports, routines, and account questions.</h1>
        <p>
          This page is the public support destination for Droplet AI users and app reviewers. It covers product behavior, billing guidance, privacy requests, and where medical questions should be directed.
        </p>
      </header>

      <section className="legalSection" id="contact">
        <h2>Contact support</h2>
        <p>
          Use this public support page or the in-app support flow for scan issues, routine questions, billing guidance, privacy requests, and account deletion. When contacting support, include the email or account identifier connected to Droplet AI when possible so the request can be verified.
        </p>
      </section>

      <section className="legalSection">
        <h2>Common requests</h2>
        <div className="legalGrid">
          {requests.map((request) => (
            <article className="legalCard" key={request.title}>
              <h3>{request.title}</h3>
              <p>{request.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="legalSection">
        <h2>How to get useful help</h2>
        <ul>
          <li>Include the product name, brand, category, and a short description of what looked wrong or confusing.</li>
          <li>For scan issues, keep the original label photo or product packaging available when possible.</li>
          <li>For routine issues, describe the morning, evening, or night step that is unclear.</li>
          <li>For billing, manage cancellation and refunds through the Apple ID that started the App Store subscription.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Medical scope</h2>
        <p>
          Droplet AI can explain ingredients, claims, routine placement, and profile fit. It does not diagnose, treat, cure, or prevent skin conditions. Severe reactions, persistent irritation, prescription-product questions, pregnancy-related questions, or diagnosed skin conditions should be discussed with a qualified professional.
        </p>
      </section>

      <section className="legalSection" id="deletion">
        <h2>Account and data deletion</h2>
        <p>
          Users can request deletion of account data, scan reports, product photos, routine history, and skin profile details through in-app support or this public support destination. Deletion requests remove eligible data unless retention is required for security, billing, legal, fraud-prevention, or dispute-resolution reasons.
        </p>
      </section>

      <section className="legalSection">
        <h2>Privacy requests</h2>
        <p>
          Users can request deletion of account data, scan reports, product photos, routine history, and skin profile details through in-app support or the public support channel connected to this page.
        </p>
      </section>
    </main>
  );
}

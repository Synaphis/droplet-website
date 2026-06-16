import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Droplet AI"
};

export default function MedicalDisclaimerPage() {
  return (
    <main className="legalPage">
      <header className="legalHeader">
        <a href="/">Back to Droplet AI</a>
        <h1>Medical Disclaimer</h1>
        <p>
          Droplet AI gives ingredient and formulation guidance. It is not a medical device and does not replace a qualified professional.
        </p>
      </header>

      <section className="legalSection">
        <h2>Not medical advice</h2>
        <p>
          Droplet AI does not diagnose, treat, cure, or prevent skin conditions. Scores, reports, cautions, and routine suggestions are informational and should not be treated as medical certainty.
        </p>
      </section>

      <section className="legalSection">
        <h2>When to seek professional care</h2>
        <ul>
          <li>Diagnosed skin conditions.</li>
          <li>Severe reactions, swelling, pain, infection, or persistent irritation.</li>
          <li>Pregnancy, nursing, prescription products, or medical treatments.</li>
          <li>Any concern where a dermatologist, physician, pharmacist, or other qualified professional is appropriate.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Patch testing and tolerance</h2>
        <p>
          Even products that appear compatible can irritate some users. Introduce new products carefully, follow product label instructions, and stop use when concerning reactions occur.
        </p>
      </section>
    </main>
  );
}

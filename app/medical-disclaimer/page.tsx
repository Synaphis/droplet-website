import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "Medical disclaimer for Droplet skincare guidance, including informational-use limits and professional-care reminders.",
  alternates: { canonical: "/medical-disclaimer" }
};

export default function MedicalDisclaimerPage() {
  return (
    <main className="legalPage">
      <header className="legalHeader">
        <a href="/">Back to Droplet</a>
        <h1>Medical Disclaimer</h1>
        <p>
          Effective date: June 16, 2026. Droplet gives ingredient, formulation, claim, and routine guidance for skincare products. It is not a medical device and does not replace a qualified professional.
        </p>
      </header>

      <section className="legalSection">
        <h2>Not medical advice</h2>
        <p>
          Droplet does not diagnose, treat, cure, or prevent skin conditions. Scores, reports, cautions, claim checks, ingredient explanations, and routine suggestions are informational and should not be treated as medical certainty, professional advice, or a substitute for individualized medical care.
        </p>
      </section>

      <section className="legalSection">
        <h2>No emergency use</h2>
        <p>
          Droplet should not be used for emergencies, severe reactions, urgent care decisions, or decisions about prescription treatments. If symptoms are serious or rapidly worsening, seek appropriate medical care.
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

      <section className="legalSection">
        <h2>Product information can change</h2>
        <p>
          Product formulas, labels, ingredient lists, warnings, and directions can change. Users should always review current packaging, follow manufacturer instructions, and consider personal medical history before using a product.
        </p>
      </section>
    </main>
  );
}

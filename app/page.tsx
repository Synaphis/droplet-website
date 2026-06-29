import Image from "next/image";
import type { CSSProperties } from "react";
import ScrollMotion from "./scroll-motion";

const doubtQuestions = [
  "The front label sounds convincing.",
  "The ingredient list is harder to read.",
  "Your skin has history the shelf cannot see.",
  "The routine still has to work tonight."
];

const evidenceItems = [
  {
    title: "Label evidence",
    copy: "Claims, directions, category, and INCI-style ingredients are read as source material before advice is generated."
  },
  {
    title: "Personal fit",
    copy: "Sensitivity, goals, avoid-list, climate, routine, and previous decisions change how the same product lands."
  },
  {
    title: "Routine memory",
    copy: "The verdict becomes timing, order, reminders, completion history, and context for the next product."
  }
];

const reportFragments = [
  {
    label: "Score",
    value: "72",
    copy: "A clear trust score with caution attached to the reason, not just the number."
  },
  {
    label: "Verdict",
    value: "care",
    copy: "Plain-language guidance explains where the formula helps and where it deserves restraint."
  },
  {
    label: "Claims",
    value: "partial",
    copy: "Marketing language is separated from formula support so persuasion does not become evidence."
  },
  {
    label: "Next",
    value: "PM",
    copy: "The product is translated into a usable place in the routine, or left out when caution wins."
  }
];

const routineMemory = [
  "Morning and evening placement",
  "Tolerance and patch-test pacing",
  "Skipped products and saved decisions",
  "Reminders that can be adjusted"
];

const trustItems = [
  "No ads",
  "No sponsored ranking",
  "No affiliate steering",
  "Delete reports and account data"
];

const plans = [
  {
    name: "Free trial",
    price: "$0",
    cadence: "7 days",
    description: "Full access before the first payment. Built for one real product decision, not a locked preview.",
    action: "Start free"
  },
  {
    name: "Monthly",
    price: "$9.99",
    cadence: "per month",
    description: "Best while testing products, rebuilding a routine, or comparing what belongs on your shelf.",
    action: "Try monthly"
  },
  {
    name: "Yearly",
    price: "$79.99",
    cadence: "per year",
    description: "About $6.67 per month for people who want Droplet before every skincare decision.",
    action: "Try yearly",
    featured: true
  }
];

function PlatformMarks() {
  return (
    <span className="platformMarks" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M16.7 12.7c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9.1.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.2-2.6 0-.1-2.8-1.1-2.8-3.8ZM14.5 6.2c.6-.8 1.1-1.8 1-2.9-1 .1-2.1.7-2.8 1.5-.6.7-1.1 1.8-1 2.8 1 .1 2.1-.6 2.8-1.4Z" />
      </svg>
      <svg viewBox="0 0 24 24">
        <path d="M4.4 3.2c-.3.3-.4.7-.4 1.2v15.2c0 .5.1.9.4 1.2l8.7-8.8-8.7-8.8Z" />
        <path d="m14.4 10.7 2.2-2.2L6.1 2.6c-.4-.2-.8-.2-1.1 0l9.4 8.1Z" />
        <path d="m14.4 13.3-9.4 8.1c.3.2.7.2 1.1 0l10.5-5.9-2.2-2.2Z" />
        <path d="m18.1 9.4-2.4 2.6 2.4 2.6 1.8-1c.8-.5.8-1.6 0-2.1l-1.8-1.1Z" />
      </svg>
    </span>
  );
}

function MobileCTA({ className = "", label = "Try Droplet free" }: { className?: string; label?: string }) {
  return (
    <a className={`mobileCta ${className}`} href="#pricing" aria-label="Try Droplet free">
      <span>{label}</span>
      <PlatformMarks />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollMotion />
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Droplet home">
          <Image className="brandMark" src="/logo-2.png" alt="" width={64} height={64} aria-hidden="true" priority />
          <span>Droplet</span>
        </a>
        <div className="navLinks">
          <a href="#label">Label</a>
          <a href="#fit">Fit</a>
          <a href="#routine">Routine</a>
          <a href="#privacy">Privacy</a>
          <a href="#pricing">Pricing</a>
        </div>
        <a className="navCta" href="#pricing">Try free</a>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="heroKicker heroEnter heroEnterOne">Droplet reads the decision before it reaches your skin.</p>
          <h1 className="heroEnter heroEnterTwo">Skincare, checked against the label and your history.</h1>
          <p className="lede heroEnter heroEnterThree">
            Droplet turns product claims, ingredients, personal tolerance, and routine memory into calmer guidance before another bottle joins your shelf.
          </p>
          <div className="heroActions heroEnter heroEnterFour" id="download">
            <MobileCTA />
            <a className="sampleReportLink" href="#label">Follow the evidence</a>
          </div>
        </div>
        <div className="heroVisual heroEnter heroEnterFive" aria-label="Abstract Droplet decision field">
          <Image src="/brand-assets/hero-decision-field.svg" alt="" width={720} height={720} priority aria-hidden="true" />
        </div>
      </section>

      <section className="doubtSection reveal" aria-label="Common skincare uncertainty">
        <div className="doubtCopy">
          <h2>The pause before a product becomes personal.</h2>
          <p>
            Droplet lives in the small moment between a persuasive label and the daily reality of putting it on your skin.
          </p>
        </div>
        <div className="questionGrid">
          {doubtQuestions.map((question) => (
            <span key={question}>{question}</span>
          ))}
        </div>
      </section>

      <section className="labelSection" id="label">
        <div className="sectionIntro reveal">
          <h2>Start with evidence, not vibes.</h2>
          <p>
            A product label is a document. Droplet treats it that way: claims on one side, formula and directions on the other, with uncertainty kept visible.
          </p>
        </div>
        <div className="labelGrid">
          <div className="labelVisual reveal">
            <Image src="/brand-assets/label-evidence-map.svg" alt="" width={760} height={640} aria-hidden="true" />
          </div>
          <div className="evidenceStack">
            {evidenceItems.map((item, index) => (
              <article className="evidenceItem reveal" key={item.title} style={{ "--delay": `${index * 80}ms` } as CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="flowSection reveal" id="fit" aria-label="Droplet decision flow">
        <Image src="/brand-assets/formula-fit-routine-memory.svg" alt="" width={1160} height={330} aria-hidden="true" />
      </section>

      <section className="reportSection" id="reports">
        <div className="reportCopy reveal">
          <h2>A report without mystery scores.</h2>
          <p>
            Droplet keeps the reasoning attached to the outcome: where the formula may help, where caution belongs, what claims are supported, and what should happen next.
          </p>
        </div>
        <div className="reportTrail" aria-label="Abstract report evidence cards">
          {reportFragments.map((fragment, index) => (
            <article className="reportFrame reveal" key={fragment.label} style={{ "--delay": `${index * 80}ms` } as CSSProperties}>
              <span>{fragment.label}</span>
              <strong>{fragment.value}</strong>
              <p>{fragment.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="routineSection" id="routine">
        <div className="routineCopy reveal">
          <h2>Your next routine should remember your last one.</h2>
          <p>
            Buying the product is only half the decision. Droplet carries the verdict into timing, order, tolerance, reminders, and history so advice becomes something usable tonight.
          </p>
          <div className="routineNotes">
            {routineMemory.map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>
        </div>
        <div className="routineVisual reveal">
          <Image src="/brand-assets/routine-memory-ledger.svg" alt="" width={700} height={700} aria-hidden="true" />
        </div>
      </section>

      <section className="privacySection" id="privacy">
        <div className="privacyCopy reveal">
          <h2>Neutral by design. Private by default.</h2>
          <p>
            Droplet is not another sponsored recommendation channel. The product is built around independent guidance, adjustable controls, and user-owned history.
          </p>
          <div className="trustGrid">
            {trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="privacyVisual reveal">
          <Image src="/brand-assets/privacy-ledger.svg" alt="" width={650} height={620} aria-hidden="true" />
        </div>
      </section>

      <section className="communityTeaser reveal">
        <div>
          <h2>A calmer place to compare decisions.</h2>
        </div>
        <p>
          Droplet community is for product checks, routine patterns, reaction notes, and label-aware conversation without sponsored pressure or viral certainty.
        </p>
        <a className="button secondary" href="/community">Visit community</a>
      </section>

      <section className="pricingSection" id="pricing">
        <div className="sectionIntro center reveal">
          <h2>One wrong product can cost more than a year of clarity.</h2>
          <p>
            Every paid plan includes scans, full reports, routine intelligence, saved skin memory, and sync across iOS and Android.
          </p>
        </div>
        <div className="pricingGrid">
          {plans.map((plan, index) => (
            <article className={`priceCard reveal ${plan.featured ? "featuredPlan" : ""}`} key={plan.name} style={{ "--delay": `${index * 80}ms` } as CSSProperties}>
              {plan.featured ? <span className="planBadge">Best value</span> : null}
              <h3>{plan.name}</h3>
              <div className="priceLine">
                <strong>{plan.price}</strong>
                <span>{plan.cadence}</span>
              </div>
              <p>{plan.description}</p>
              <a className={plan.featured ? "button primary" : "button secondary"} href="#download">
                {plan.action}
              </a>
            </article>
          ))}
        </div>
        <p className="pricingNote reveal">
          Cancel through the App Store or Google Play. Droplet does not use ads, sponsored ranking, or affiliate steering.
        </p>
      </section>

      <section className="finalCta reveal">
        <Image src="/story-assets/product-silhouettes.svg" alt="" width={1080} height={298} aria-hidden="true" />
        <h2>Before the next bottle joins your routine, run the label through Droplet.</h2>
        <MobileCTA label="Try Droplet free" />
      </section>

      <footer className="footer">
        <div>
          <a className="brand" href="#top" aria-label="Droplet home">
            <Image className="brandMark" src="/logo-2.png" alt="" width={64} height={64} aria-hidden="true" />
            <span>Droplet</span>
          </a>
          <p>Ingredient, formulation, and routine guidance for calmer skincare decisions.</p>
          <p className="storeAvailability">
            Available on <a href="#pricing">App Store</a> and <a href="#pricing">Google Play</a>
          </p>
        </div>
        <nav aria-label="Footer links">
          <a href="/community">Community</a>
          <a href="/support">Support</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/medical-disclaimer">Medical disclaimer</a>
        </nav>
      </footer>
    </main>
  );
}

import Image from "next/image";
import type { CSSProperties } from "react";
import ScrollMotion from "./scroll-motion";

type Phone = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

const doubtQuestions = [
  "Is the claim real?",
  "Will this irritate me?",
  "Where does it fit?",
  "What happened last time?"
];

const scanFragments = [
  "Fragrance-free",
  "10% niacinamide",
  "Patch test advised",
  "Medium risk"
];

const formulaChecks = [
  "Ingredients translated into roles, benefits, and cautions.",
  "Claims checked against formula evidence instead of front-label language.",
  "Profile fit read against sensitivity, acne tendency, goals, avoid-list, climate, and history.",
  "Routine placement for morning, evening, night, and products already in use."
];

const reportViews = [
  {
    label: "History",
    src: "/screens/phone-mockups/reports-list.png",
    alt: "Droplet reports list with saved skincare scan reports."
  },
  {
    label: "Score",
    src: "/screens/phone-mockups/report-overview.png",
    alt: "Droplet report overview with trust score and category scores."
  },
  {
    label: "Verdict",
    src: "/screens/phone-mockups/report-verdict.png",
    alt: "Droplet report verdict with plain-language summary."
  },
  {
    label: "Reasoning",
    src: "/screens/phone-mockups/score-reasoning.png",
    alt: "Droplet report score reasoning across safety, irritation, and claims."
  },
  {
    label: "Claims",
    src: "/screens/phone-mockups/claims-fact-check.png",
    alt: "Droplet report marketing claim checks with supported and partial labels."
  },
  {
    label: "Fit",
    src: "/screens/phone-mockups/profile-fit-directions.png",
    alt: "Droplet report profile fit and usage direction guidance."
  }
];

const routineNotes = [
  "Turns a product verdict into a usable step.",
  "Keeps timing, order, and reminders visible.",
  "Uses history so the next decision is not a reset."
];

const adherenceViews = [
  {
    src: "/screens/phone-mockups/adherence-overview.png",
    alt: "Droplet adherence view with score, streak, last 30 days, and schedule."
  },
  {
    src: "/screens/phone-mockups/adherence-explainer.png",
    alt: "Droplet adherence explainer view with score details and recovery guidance."
  }
];

const supportViews = [
  {
    title: "Reminder control",
    copy: "Notification timing, plan status, and account controls live together so routine support can be adjusted without digging.",
    src: "/screens/phone-mockups/account-subscription-reminders.png",
    alt: "Droplet account, subscription, and reminder settings screen."
  },
  {
    title: "Preference memory",
    copy: "Profile, routine, privacy, and plan settings make the app fit the user instead of forcing a generic skincare flow.",
    src: "/screens/phone-mockups/settings-preferences.png",
    alt: "Droplet settings and preferences screen."
  }
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
    description: "Full access before the first payment. Built for a real product check, not a locked preview.",
    action: "Start free"
  },
  {
    name: "Monthly",
    price: "$9.99",
    cadence: "per month",
    description: "Best when you are actively testing products, rebuilding a routine, or comparing purchases.",
    action: "Try monthly"
  },
  {
    name: "Yearly",
    price: "$79.99",
    cadence: "per year",
    description: "About $6.67 per month for the person who wants Droplet before every skincare decision.",
    action: "Try yearly",
    featured: true
  }
];

function PhoneMock({ src, alt, className = "", priority = false }: Phone) {
  return (
    <div className={`phoneMock ${className}`}>
      <Image
        className="phoneMockImage"
        src={src}
        alt={alt}
        width={897}
        height={1900}
        priority={priority}
        loading={priority ? undefined : "eager"}
      />
    </div>
  );
}

function AppStoreCTA({ className = "", label = "Try Droplet free" }: { className?: string; label?: string }) {
  return (
    <a className={`appStoreLink ${className}`} href="#pricing" aria-label="Try Droplet AI free on the App Store">
      <svg className="appStoreIcon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.7 12.7c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9.1.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.2-2.6 0-.1-2.8-1.1-2.8-3.8ZM14.5 6.2c.6-.8 1.1-1.8 1-2.9-1 .1-2.1.7-2.8 1.5-.6.7-1.1 1.8-1 2.8 1 .1 2.1-.6 2.8-1.4Z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollMotion />
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Droplet AI home">
          <Image className="brandMark" src="/logo-2.png" alt="" width={64} height={64} aria-hidden="true" priority />
          <span>Droplet AI</span>
        </a>
        <div className="navLinks">
          <a href="#scan">Scan</a>
          <a href="#reports">Reports</a>
          <a href="#routine">Routine</a>
          <a href="#pricing">Pricing</a>
          <a href="/privacy">Privacy</a>
        </div>
        <a className="navCta" href="#pricing">Try free</a>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <h1 className="heroEnter heroEnterTwo">Before it touches your skin, check the label.</h1>
          <p className="lede heroEnter heroEnterThree">
            Droplet AI scans the product in your hand, explains the formula behind the promise, and turns the decision into a routine your skin can actually live with.
          </p>
          <div className="heroActions heroEnter heroEnterFour" id="download">
            <AppStoreCTA />
            <a className="sampleReportLink" href="#reports">See a sample report</a>
          </div>
        </div>
        <div className="heroVisual heroEnter heroEnterFive" aria-label="Droplet app screenshots">
          <PhoneMock
            className="heroMain"
            src="/screens/phone-mockups/today-dashboard.png"
            alt="Droplet dashboard showing routine adherence, evening routine steps, and latest scan report."
            priority
          />
          <PhoneMock
            className="heroFloat"
            src="/screens/phone-mockups/routine-dashboard.png"
            alt="Droplet report overview with trust score and category scores."
            priority
          />
        </div>
      </section>

      <section className="doubtSection reveal" aria-label="Common skincare uncertainty">
        <div className="doubtCopy">
          <h2>The tiny pause before a product becomes part of your skin.</h2>
          <p>
            That pause is where Droplet belongs: between persuasive packaging and the personal risk of buying, layering, or repeating something that may not fit.
          </p>
        </div>
        <div className="questionGrid">
          {doubtQuestions.map((question) => (
            <span key={question}>{question}</span>
          ))}
        </div>
      </section>

      <section className="flowSection reveal" aria-label="Droplet decision flow">
        <Image src="/story-assets/flow-mark.svg" alt="" width={980} height={168} aria-hidden="true" />
      </section>

      <section className="scanStory" id="scan">
        <div className="sectionIntro reveal">
          <h2>Start with the product in your hand.</h2>
          <p>
            The camera keeps the label centered so the report begins from evidence: ingredients, directions, claims, category, and the context needed to interpret them.
          </p>
        </div>
        <div className="scanStage">
          <div className="scanAsset reveal" aria-hidden="true">
            <Image src="/story-assets/label-fragments.svg" alt="" width={430} height={520} />
          </div>
          <div className="scannerPhone reveal">
            <PhoneMock src="/screens/phone-mockups/camera-scan.png" alt="Droplet AI camera scanner framing a skincare product label." />
            <span className="scanFocus" aria-hidden="true" />
          </div>
          <div className="scanNotes reveal">
            {scanFragments.map((fragment) => (
              <span key={fragment}>{fragment}</span>
            ))}
          </div>
        </div>
        <div className="checkListPanel reveal">
          <h3>What gets reviewed</h3>
          <ul>
            {formulaChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="reportSection" id="reports">
        <div className="reportCopy reveal">
          <h2>A report that shows its work.</h2>
          <p>
            Droplet avoids mystery scores. Every verdict shows why the formula may fit, where caution belongs, which claims are supported, and what the user should do next.
          </p>
        </div>
        <div className="reportTrail" aria-label="Report screenshots">
          {reportViews.map((view, index) => (
            <article className="reportFrame reveal" key={view.src} style={{ "--delay": `${index * 70}ms` } as CSSProperties}>
              <span>{view.label}</span>
              <PhoneMock src={view.src} alt={view.alt} />
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
            {routineNotes.map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>
        </div>
        <div className="routinePhones reveal">
          <PhoneMock className="routinePrimary" src="/screens/phone-mockups/routine-dashboard.png" alt="Droplet routine dashboard with reminders, products, and AI routine controls." />
          <PhoneMock className="routineSecondary" src="/screens/phone-mockups/ai-routine-generating.png" alt="Droplet generated routine screens shaped by user profile and history." />
        </div>
      </section>

      <section className="adherenceSection" id="adherence">
        <div className="sectionIntro center reveal">
          <h2>Missed steps become context, not failure.</h2>
          <p>
            The adherence view keeps the droplet score, streak, calendar, and schedule visible, while the explainer shows what changed, why the score moved, and how to recover the routine without guilt or guesswork.
          </p>
        </div>
        <div className="adherenceGrid">
          {adherenceViews.map((view, index) => (
            <div className="adherenceCard reveal" key={view.src} style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
              <PhoneMock src={view.src} alt={view.alt} />
            </div>
          ))}
        </div>
      </section>

      <section className="controlSection" id="supporting-views">
        <div className="sectionIntro reveal">
          <h2>The smaller controls make Droplet easier to trust.</h2>
          <p>
            Reminders, settings, profile preferences, account controls, and plan details matter because skincare routines are daily systems, not one-time scans.
          </p>
        </div>
        <div className="supportGrid">
          {supportViews.map((view, index) => (
            <article className="supportCard reveal" key={view.title} style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
              <PhoneMock src={view.src} alt={view.alt} />
              <div className="supportCaption">
                <h3>{view.title}</h3>
                <p>{view.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="privacySection" id="privacy">
        <div className="privacyCopy reveal">
          <h2>Neutral by design. Private by default.</h2>
          <p>
            Droplet gives formulation guidance, not paid product placement. It is built to stay independent because a recommendation tool cannot feel like another sales channel.
          </p>
        </div>
        <div className="trustPanel reveal">
          <img src="/story-assets/trust-strip.svg" alt="" aria-hidden="true" />
          <div className="trustGrid">
            {trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="communityTeaser reveal">
        <div>
          <h2>A calmer place to compare decisions.</h2>
        </div>
        <p>
          Droplet community is for product checks, routine patterns, and reaction notes without sponsored rankings or viral pressure.
        </p>
        <a className="button secondary" href="/community">Visit community</a>
      </section>

      <section className="pricingSection" id="pricing">
        <div className="sectionIntro center reveal">
          <h2>One wrong product can cost more than a year of clarity.</h2>
          <p>
            Every paid plan includes scans, full reports, routine intelligence, saved skin memory, and sync for the Droplet iOS app.
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
          Cancel through your App Store subscription settings. Droplet does not use ads, sponsored ranking, or affiliate steering.
        </p>
      </section>

      <section className="finalCta reveal">
        <Image src="/story-assets/product-silhouettes.svg" alt="" width={760} height={210} aria-hidden="true" />
        <h2>Before the next bottle joins your routine, run the label through Droplet.</h2>
        <a className="button primary" href="#pricing">Try Droplet AI free</a>
      </section>

      <footer className="footer">
        <div>
          <a className="brand" href="#top" aria-label="Droplet AI home">
            <Image className="brandMark" src="/logo-2.png" alt="" width={64} height={64} aria-hidden="true" />
            <span>Droplet AI</span>
          </a>
          <p>Ingredient and formulation guidance for calmer skincare decisions.</p>
          <AppStoreCTA className="footerStoreLink" label="Try free on App Store" />
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

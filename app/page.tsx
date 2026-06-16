import Image from "next/image";

type Phone = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

const formulaChecks = [
  "Ingredient roles and cautions",
  "Claim support against formula evidence",
  "Profile fit for sensitivity, acne tendency, goals, avoid-list, and climate",
  "Routine placement for morning, evening, and night"
];

const featureCards = [
  {
    title: "Formula, not front-label hope",
    copy: "Droplet reads the ingredient list behind claims like gentle, brightening, fragrance-free, and pore care."
  },
  {
    title: "Personal, not generic",
    copy: "The same serum can land differently depending on sensitivity, allergies, skin goals, and what is already in the routine."
  },
  {
    title: "Memory, not repeat mistakes",
    copy: "Saved reports, skipped products, reactions, and completed routines become context for the next decision."
  }
];

const routinePoints = [
  "Morning, evening, and night routine steps",
  "Application notes, categories, and reminders",
  "Generated routines based on profile, climate, and past behavior",
  "Completion history without guilt"
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
    description: "Full access before the first payment. No card required.",
    action: "Start free"
  },
  {
    name: "Monthly",
    price: "$9.99",
    cadence: "per month",
    description: "For people actively testing products, rebuilding routines, or comparing purchases.",
    action: "Try monthly"
  },
  {
    name: "Yearly",
    price: "$79.99",
    cadence: "per year",
    description: "About $6.67 per month. A better fit if Droplet becomes your pre-purchase check.",
    action: "Try yearly",
    featured: true
  }
];

const adherenceViews = [
  {
    src: "/screens/phone-mockups/adherence-overview.png",
    alt: "Droplet adherence view with score, streak, last 30 days, and schedule."
  },
  {
    src: "/screens/phone-mockups/adherence-explainer.png",
    alt: "Droplet adherence explainer view with score details and recovery guidance."
  },
];

const supportViews = [
  {
    title: "Notifications and account controls",
    copy: "Reminder settings, account details, and subscription status live together so routine support is easy to adjust.",
    src: "/screens/phone-mockups/account-subscription-reminders.png",
    alt: "Droplet account, subscription, and reminder settings screen."
  },
  {
    title: "Preferences that reduce friction",
    copy: "Settings cover profile, routine reminders, privacy, and plan access so the app can fit real use.",
    src: "/screens/phone-mockups/settings-preferences.png",
    alt: "Droplet settings and preferences screen."
  }
];

const reportViews = [
  {
    src: "/screens/phone-mockups/reports-list.png",
    alt: "Droplet reports list with saved skincare scan reports."
  },
  {
    src: "/screens/phone-mockups/report-overview.png",
    alt: "Droplet report overview with trust score and category scores."
  },
  {
    src: "/screens/phone-mockups/report-verdict.png",
    alt: "Droplet report verdict with plain-language summary."
  },
  {
    src: "/screens/phone-mockups/score-reasoning.png",
    alt: "Droplet report score reasoning across safety, irritation, and claims."
  },
  {
    src: "/screens/phone-mockups/claims-fact-check.png",
    alt: "Droplet report marketing claim checks with supported and partial labels."
  },
  {
    src: "/screens/phone-mockups/profile-fit-directions.png",
    alt: "Droplet report profile fit and usage direction guidance."
  }
];

function PhoneMock({ src, alt, className = "", priority = false }: Phone) {
  return (
    <div className={`phoneMock ${className}`}>
      <Image className="phoneMockImage" src={src} alt={alt} width={897} height={1900} priority={priority} />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Droplet AI home">
          <span className="brandMark" aria-hidden="true">23</span>
          <span>Droplet AI</span>
        </a>
        <div className="navLinks">
          <a href="#scan">Scan</a>
          <a href="#routine">Routine</a>
          <a href="#privacy">Privacy</a>
          <a href="#pricing">Pricing</a>
        </div>
        <a className="navCta" href="#download">Try free</a>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="kicker">Private skincare intelligence</p>
          <h1>Know what belongs on your skin.</h1>
          <p className="lede">
            Droplet scans skincare labels, explains the formula, checks claims, and turns the verdict into a routine you can act on.
          </p>
          <div className="heroActions" id="download">
            <a className="storeButton primary" href="#pricing" aria-label="Try Droplet AI on the App Store">
              <span>Download on</span>
              <strong>App Store</strong>
            </a>
            <a className="storeButton secondary" href="#pricing" aria-label="Try Droplet AI on Google Play">
              <span>Get it on</span>
              <strong>Google Play</strong>
            </a>
          </div>
        </div>
        <div className="heroVisual" aria-label="Droplet app screenshots">
          <PhoneMock
            className="heroMain"
            src="/screens/phone-mockups/today-dashboard.png"
            alt="Droplet dashboard showing routine adherence, evening routine steps, and latest scan report."
            priority
          />
          <PhoneMock
            className="heroFloat"
            src="/screens/phone-mockups/claims-fact-check.png"
            alt="Droplet report checking skincare marketing claims against formula evidence."
            priority
          />
        </div>
      </section>

      <section className="beliefStrip" aria-label="Droplet promise">
        <p>The front label makes the promise. Droplet checks the formula behind it.</p>
      </section>

      <section className="decisionSection" id="scan">
        <div className="sectionStack">
          <h2>Scan before you buy or layer.</h2>
          <p>
            Ingredient lists are accurate but hard to decode. Droplet turns the product in your hand into a report with reasons, cautions, and next steps.
          </p>
        </div>
        <div className="decisionGrid">
          <article className="scanPanel">
            <PhoneMock src="/screens/phone-mockups/camera-scan.png" alt="Droplet AI camera scanner framing a skincare product label." />
            <div>
              <h3>Label-first scanning</h3>
              <p>The camera view keeps the label centered so the report starts from product evidence, not generic internet advice.</p>
            </div>
          </article>
          <article className="checkListPanel">
            <h3>What Droplet checks</h3>
            <ul>
              {formulaChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="reportSection" id="reports">
        <div className="reportCopy">
          <h2>A report that explains itself.</h2>
          <p>
            Droplet avoids mystery scores. Every verdict shows why the formula may fit, where caution belongs, and what the user should do next.
          </p>
        </div>
        <div className="reportGallery" aria-label="Report screenshots">
          {reportViews.map((view) => (
            <PhoneMock key={view.src} src={view.src} alt={view.alt} />
          ))}
        </div>
      </section>

      <section className="featureBand" id="trust">
        {featureCards.map((feature) => (
          <article className="featureCard" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.copy}</p>
          </article>
        ))}
      </section>

      <section className="routineSection" id="routine">
        <div className="routineCopy">
          <h2>Your next routine should remember your last one.</h2>
          <p>
            A routine is timing, order, tolerance, repetition, and memory. Droplet connects the scan to what happens tonight and next week.
          </p>
          <ul className="routineList">
            {routinePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="routinePhones">
          <PhoneMock src="/screens/phone-mockups/routine-dashboard.png" alt="Droplet routine dashboard with reminders, products, and AI routine controls." />
          <PhoneMock src="/screens/phone-mockups/ai-routine-generating.png" alt="Droplet generated routine screens shaped by user profile and history." />
        </div>
      </section>

      <section className="adherenceSection" id="adherence">
        <div className="sectionStack center">
          <h2>Adherence that helps users recover.</h2>
          <p>
            Droplet treats missed steps as context, not failure. The adherence views keep the droplet score, streak, calendar, and schedule visible without shaming the user, then explain what changed, why the score moved, and how to recover the routine without guesswork.
          </p>
        </div>
        <div className="adherenceGrid">
          {adherenceViews.map((view) => (
            <div className="adherenceCard" key={view.src}>
              <PhoneMock src={view.src} alt={view.alt} />
            </div>
          ))}
        </div>
      </section>

      <section className="supportSection" id="supporting-views">
        <div className="sectionStack">
          <h2>The smaller controls make the product easier to live with.</h2>
          <p>
            Reminders, settings, account, and plan controls are part of the product story because they make routine intelligence usable every day.
          </p>
        </div>
        <div className="supportGrid">
          {supportViews.map((view) => (
            <article className="supportCard" key={view.title}>
              <PhoneMock src={view.src} alt={view.alt} />
              <div>
                <h3>{view.title}</h3>
                <p>{view.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="privacySection" id="privacy">
        <div>
          <h2>Neutral by design. Private by default.</h2>
          <p>
            Droplet works because users can trust the incentive model. The app gives formulation guidance, not paid product placement.
          </p>
        </div>
        <div className="trustGrid">
          {trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="pricingSection" id="pricing">
        <div className="sectionStack center">
          <h2>One wrong product can cost more than a year of clarity.</h2>
          <p>
            Every paid plan includes scans, full reports, routine intelligence, saved skin memory, and sync across iOS and Android.
          </p>
        </div>
        <div className="pricingGrid">
          {plans.map((plan) => (
            <article className={`priceCard ${plan.featured ? "featuredPlan" : ""}`} key={plan.name}>
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
        <p className="pricingNote">
          Cancel through the App Store or Google Play. Droplet does not use ads, sponsored ranking, or affiliate steering.
        </p>
      </section>

      <footer className="footer">
        <div>
          <a className="brand" href="#top" aria-label="Droplet AI home">
            <span className="brandMark" aria-hidden="true">23</span>
            <span>Droplet AI</span>
          </a>
          <p>Ingredient and formulation guidance for calmer skincare decisions.</p>
        </div>
        <nav aria-label="Legal links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/medical-disclaimer">Medical disclaimer</a>
          <a href="/support">Support</a>
        </nav>
      </footer>
    </main>
  );
}

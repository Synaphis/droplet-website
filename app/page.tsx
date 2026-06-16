import Image from "next/image";

type Phone = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

const pillars = [
  {
    title: "Checks the label",
    copy: "Ingredient roles, formula signals, usage directions, and front-label claims are read together instead of treated as separate clues."
  },
  {
    title: "Reads against you",
    copy: "Sensitivity, goals, avoid-list, climate, history, and routine context shape the verdict so the same product can mean different things for different people."
  },
  {
    title: "Turns advice into memory",
    copy: "Reports, saved products, skipped steps, reactions, and adherence history become context for the next decision."
  }
];

const formulaChecks = [
  "Ingredient roles and cautions",
  "Marketing claims compared with formula evidence",
  "Profile fit for sensitivity, acne tendency, goals, avoid-list, and climate",
  "Routine placement for morning, evening, and night"
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

const questions = [
  "Will this irritate me?",
  "Is this claim real?",
  "Where does it fit in my routine?",
  "What did I use last time?"
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

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Droplet AI home">
          <Image className="brandMark" src="/logo-mark.png" alt="" width={64} height={64} aria-hidden="true" priority />
          <span>Droplet AI</span>
        </a>
        <div className="navLinks">
          <a href="#scan">Scan</a>
          <a href="#reports">Reports</a>
          <a href="#routine">Routine</a>
          <a href="/community">Community</a>
          <a href="/privacy">Privacy</a>
        </div>
        <a className="navCta" href="#pricing">Try free</a>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="kicker">Private skincare intelligence</p>
          <h1>Check the product before your skin has to.</h1>
          <p className="lede">
            Droplet AI scans skincare labels, explains the formula, checks the claims, and remembers what fits your routine so every purchase starts with evidence instead of hope.
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

      <section className="questionStrip" aria-label="Common skincare questions">
        {questions.map((question) => (
          <span key={question}>{question}</span>
        ))}
      </section>

      <section className="manifesto">
        <p>
          Skincare advice is everywhere. Personal evidence is harder to find. Droplet is the quiet check between a persuasive label and your actual skin.
        </p>
      </section>

      <section className="pillarSection" aria-label="How Droplet helps">
        {pillars.map((pillar) => (
          <article className="featureCard" key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.copy}</p>
          </article>
        ))}
      </section>

      <section className="decisionSection" id="scan">
        <div className="sectionStack">
          <p className="sectionLabel">Label-first scan</p>
          <h2>Start with the product in your hand.</h2>
          <p>
            The camera view keeps the label centered so the report begins from product evidence: ingredients, directions, claims, category, and the context needed to interpret them.
          </p>
        </div>
        <div className="decisionGrid">
          <article className="scanPanel">
            <PhoneMock src="/screens/phone-mockups/camera-scan.png" alt="Droplet AI camera scanner framing a skincare product label." />
          </article>
          <article className="checkListPanel">
            <h3>What gets reviewed</h3>
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
          <p className="sectionLabel">Explainability</p>
          <h2>A report that shows its work.</h2>
          <p>
            Droplet avoids mystery scores. Every verdict shows why the formula may fit, where caution belongs, which claims are supported, and what the user should do next.
          </p>
        </div>
        <div className="reportGallery" aria-label="Report screenshots">
          {reportViews.map((view) => (
            <PhoneMock key={view.src} src={view.src} alt={view.alt} />
          ))}
        </div>
      </section>

      <section className="routineSection" id="routine">
        <div className="routineCopy">
          <p className="sectionLabel">Routine memory</p>
          <h2>Your next routine should remember your last one.</h2>
          <p>
            Droplet connects the product verdict to what happens tonight and next week: timing, order, tolerance, reminders, and the history that keeps mistakes from repeating.
          </p>
        </div>
        <div className="routinePhones">
          <PhoneMock src="/screens/phone-mockups/routine-dashboard.png" alt="Droplet routine dashboard with reminders, products, and AI routine controls." />
          <PhoneMock src="/screens/phone-mockups/ai-routine-generating.png" alt="Droplet generated routine screens shaped by user profile and history." />
        </div>
      </section>

      <section className="adherenceSection" id="adherence">
        <div className="sectionStack center">
          <p className="sectionLabel">No guilt loops</p>
          <h2>Adherence that helps users recover.</h2>
          <p>
            Droplet treats missed steps as context, not failure. The adherence views keep the score, streak, calendar, and schedule visible, then explain what changed and how to recover the routine without guesswork.
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
          <p className="sectionLabel">Control surface</p>
          <h2>The smaller controls make the product easier to live with.</h2>
          <p>
            Reminders, settings, account, and plan controls matter because skincare routines are daily systems, not one-time scans.
          </p>
        </div>
        <div className="supportGrid">
          {supportViews.map((view) => (
            <article className="supportCard" key={view.title}>
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
        <div>
          <p className="sectionLabel">Trust model</p>
          <h2>Neutral by design. Private by default.</h2>
          <p>
            The app gives formulation guidance, not paid product placement. Droplet is built to stay independent because a recommendation tool cannot feel like another sales channel.
          </p>
        </div>
        <div className="trustGrid">
          {trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="communityTeaser">
        <div>
          <p className="sectionLabel">Community</p>
          <h2>A calmer place to compare decisions.</h2>
        </div>
        <p>
          Droplet community is for product checks, routine patterns, and reaction notes without sponsored rankings or viral pressure.
        </p>
        <a className="button secondary" href="/community">Visit community</a>
      </section>

      <section className="pricingSection" id="pricing">
        <div className="sectionStack center">
          <p className="sectionLabel">Pricing</p>
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

      <section className="finalCta">
        <h2>Before the next bottle joins your routine, run the label through Droplet.</h2>
        <a className="button primary" href="#pricing">Try Droplet AI free</a>
      </section>

      <footer className="footer">
        <div>
          <a className="brand" href="#top" aria-label="Droplet AI home">
            <Image className="brandMark" src="/logo-mark.png" alt="" width={64} height={64} aria-hidden="true" />
            <span>Droplet AI</span>
          </a>
          <p>Ingredient and formulation guidance for calmer skincare decisions.</p>
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

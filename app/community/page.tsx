import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Droplet"
};

const principles = [
  {
    title: "Evidence over hype",
    copy: "Talk about labels, ingredients, reports, routine context, and what changed on skin instead of pushing viral products."
  },
  {
    title: "Personal, not universal",
    copy: "A product can work beautifully for one person and fail another. Community notes should include context, not blanket advice."
  },
  {
    title: "No sponsored steering",
    copy: "The community is built around decisions and learning, not affiliate rankings, paid recommendations, or brand placement."
  },
  {
    title: "Careful with medical claims",
    copy: "Share experience and routine context, but direct medical questions and severe reactions to qualified professionals."
  }
];

export default function CommunityPage() {
  return (
    <main className="legalPage">
      <header className="legalHeader">
        <a href="/">Back to Droplet</a>
        <p className="sectionLabel">Community</p>
        <h1>A calmer place to compare skincare decisions.</h1>
        <p>
          Droplet community is for people who want product checks, routine patterns, reaction notes, and label-aware conversation without sponsored pressure or viral certainty.
        </p>
      </header>

      <section className="legalSection">
        <h2>What belongs here</h2>
        <div className="legalGrid">
          {principles.map((principle) => (
            <article className="communityCard" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="legalSection">
        <h2>Helpful post patterns</h2>
        <ul className="communityList">
          <li>Compare two products by ingredient list, claim support, and where each would sit in a routine.</li>
          <li>Share a report outcome and what you changed afterward.</li>
          <li>Document a reaction with timing, routine steps, and what was introduced recently.</li>
          <li>Ask how to simplify a crowded shelf without losing the products that are actually helping.</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Community status</h2>
        <p>
          The public community experience is being shaped around the same principle as the app: useful decisions first. Until launch, support and privacy requests should go through the support page.
        </p>
      </section>
    </main>
  );
}

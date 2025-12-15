import Section from "../components/Section";
import "../styles/page.css";

export default function About() {
  return (
    <main className="container page">
      <h1>About</h1>

      <Section title="Aim and Purpose">
        <ul>
          <li>Formulation & product development</li>
          <li>Nutritional / allergen review</li>
          <li>Label checks (FSANZ)</li>
        </ul>
      </Section>

      <Section title="History">
        <ul>
          <li>Team training sessions</li>
          <li>Templates & calculators</li>
          <li>Process documentation</li>
        </ul>
      </Section>
    </main>
  );
}
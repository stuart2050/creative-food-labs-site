import Section from "../components/Section";
import "../styles/page.css";

export default function Services() {
  return (
    <main className="container page">
      <h1>Services</h1>

      <Section title="Consulting">
        <ul>
          <li>Formulation & product development</li>
          <li>Nutritional / allergen review</li>
          <li>Label checks (FSANZ)</li>
        </ul>
      </Section>

      <Section title="Training & tools">
        <ul>
          <li>Team training sessions</li>
          <li>Templates & calculators</li>
          <li>Process documentation</li>
        </ul>
      </Section>
    </main>
  );
}
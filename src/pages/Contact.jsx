import Section from "../components/Section";
import "../styles/page.css";

export default function Contact() {
  return (
    <main className="container page">
      <h1>Contact</h1>

      <Section title="Email">
        <p>
          <a href="mailto:hello@example.com">hello@example.com</a>
        </p>
      </Section>
    </main>
  );
}
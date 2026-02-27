import "./Home.css";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import "../styles/page.css";

export default function Home() {
  return (
    <main className="container home">
      <h1>Food Science x Practical Digital Tools</h1>

      <Section id="about" title ="About">
        <p>
          <strong>Science-Driven Food Innovation — Powered by Digital Tools</strong>
        </p>
        <p>
          Creative Food Labs helps small and growing food businesses develop better products, 
          unlock digital tools, and scale with confidence.
        </p>
        <p>
          From concepts to recipe formulations to labelling, process design to digital workflow tools, 
          we combine real-world food manufacturing experience with modern technology to simplify complexity.
        </p>
      </Section>

     <Section id="services" title="Services">
        <p>
          I help food and beverage businesses bring clarity and structure to recipes,
          data, and processes — using digital tools that are practical, accessible,
          and appropriate for where you are today.
        </p>

      <div className="services-grid">
      <div>
          <h3>Recipe & Ingredient Systems</h3>
          <p>
            Clear, reliable recipe and ingredient data is the foundation of every
            food business. I help structure formulations, manage changes, and reduce
            errors — whether that starts in a spreadsheet or evolves into a more
            connected system.
          </p>
      </div>

      <div>
        <h3>Labelling, Compliance & Confidence</h3>
        <p>
          I support businesses with nutrition, allergen, and ingredient declaration
          workflows that are accurate, repeatable, and easier to maintain — helping
          reduce risk and improve confidence in compliance outputs.
        </p>
      </div>

      <div>
        <h3>Digital Tools & Practical AI</h3>
        <p>
          Digital tools and AI can unlock real value when applied thoughtfully.
          I help identify where automation, data structuring, or AI-assisted tools
          genuinely save time and effort — without adding unnecessary complexity.
        </p>
      </div>

      <div>
        <h3>Simple Workflows for Growing Teams</h3>
        <p>
          As teams grow, processes often break down. I help design simple approval,
          version control, and collaboration workflows that fit naturally into how
          your business already works.
        </p>
      </div>
    </div>
</Section>
      
      <Section id="contact" title="Contact">
        <a href="mailto:hello@example.com">hello@example.com</a>
      </Section>

    <Section id="contact" title="Contact">
      <p>Send an enquiry and I’ll reply by email.</p>
    <ContactForm />
    </Section>


    </main>
  );
}
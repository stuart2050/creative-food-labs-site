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
          <strong>We Combine Science-Driven Food Innovation with Digital Tools</strong>
        </p>
        <p>
          Creative Food Labs helps small and growing food businesses develop better products, 
          unlock digital tools, and scale with confidence.
        </p>
        <p>
          From concepts to recipe formulations to labelling, process design to digital workflow tools, 
          we combine real-world food manufacturing experience with modern technology to simplify complexity.
        </p>
        <p>
          We're built on 15+ years of food research and manufacturing experience, 
          across product and process development,
          and with a deep understanding of the regulatory environment. 
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
          <h3>Product Development & Reformulation</h3>
            <ul>
              <li>New product formulation</li>
              <li>Ingredient optimisation</li>
              <li>Cost optimisation</li>
              <li>Nutritional profiling</li>
              <li>Shelf-life and stability testing</li>
              <li>Factory trial planning</li>
              <li>Scale-up validation</li>
            </ul>
            <p>
              <em>From concept to commercialisation — structured, scientific, and practical.</em>
            </p>
      </div>

      <div>
          <h3>Labelling, Compliance & Documentation</h3>
            <ul>
              <li>Ingredient declarations</li>
              <li>Nutritional panel calculations</li>
              <li>Allergen listings</li>
              <li>Specification development</li>
              <li>Process documentation</li>
            </ul>
            <p>
              <em>We ensure your product isn't just innovative, it's compliant and market-ready.</em>
            </p>
      </div>

      <div>
          <h3>Digital Tools for Food Businesses</h3>
            <ul>
              <li>Ingredient master data systems</li>
              <li>Structured recipe databases</li>
              <li>Ingredient and nutritional roll ups</li>
              <li>Allergen profiling tools</li>
              <li>Smart spreadsheet systems</li>
            </ul>
            <p>
              <em>You don't always need expensive enterprise systems, sometimes something as simple as a spreasheet unlocks a world of potential.</em>
            </p>
      </div>
    </div>
</Section>

    <Section id="contact" title="Contact">
      <p>Send an enquiry and I’ll reply by email.</p>
    <ContactForm />
    </Section>


    </main>
  );
}
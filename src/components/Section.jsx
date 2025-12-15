import "./Section.css";

export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      {title ? <h2 className="section-title">{title}</h2> : null}
      <div className="section-body">{children}</div>
    </section>
  );
}
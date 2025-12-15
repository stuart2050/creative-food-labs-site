import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container" style={{ marginTop: 48 }}>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </main>
  );
}
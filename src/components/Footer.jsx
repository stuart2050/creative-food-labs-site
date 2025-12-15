import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} Creative Food Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
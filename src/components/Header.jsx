import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <Link to="/" className="navlink">Creative Food Labs</Link>
        </div>

        <nav className="nav">
          {/* Navigation links for my scrolling home page - e.g. these are not seperate links */}
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/#contact">Contact</a>

          {/* Navigation links for other pages */}
          <Link className="navlink" to="/coming_soon">Coming Soon</Link>
        </nav>
      </div>
    </header>
  );
}
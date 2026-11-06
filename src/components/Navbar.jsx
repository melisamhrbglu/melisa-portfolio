import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
        MM
      </a>

      <button
        type="button"
        className="menu-icon"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-menu"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
      </button>

      <ul id="primary-menu" className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>

        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        </li>

        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </li>

        <li>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

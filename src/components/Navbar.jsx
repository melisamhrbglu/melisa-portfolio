import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
        MM
      </a>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
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
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
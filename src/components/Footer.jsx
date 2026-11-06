function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          © {currentYear} Melisa Mehrübeoğlu. All rights reserved.
        </p>

        <nav
          className="footer-links"
          aria-label="Social and contact links"
        >
          <a
            href="https://www.linkedin.com/in/melisa-m-26976811b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/melisamhrbglu"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:mehrubeoglumelisa@hotmail.com">
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
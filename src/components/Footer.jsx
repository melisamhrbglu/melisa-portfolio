function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {currentYear} Melisa Mehrübeoğlu. All rights reserved.</p>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/melisamhrbglu/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/melisamhrbglu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:mehrubeoglumelisa@hotmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
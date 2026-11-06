import Section from "./Section";

function Contact() {
  const contactLinks = [
    {
      label: "Send Email",
      detail: "mehrubeoglumelisa@hotmail.com",
      href: "mailto:mehrubeoglumelisa@hotmail.com",
    },
    {
      label: "GitHub",
      detail: "github.com/melisamhrbglu",
      href: "https://github.com/melisamhrbglu",
    },
    {
      label: "LinkedIn",
      detail: "linkedin.com/in/melisa-m-26976811b",
      href: "https://www.linkedin.com/in/melisa-m-26976811b/",
    },
  ];

  return (
    <Section id="contact" className="contact-section">
      <div className="contact-card">
        <span className="contact-label">Contact</span>

        <h2>Let’s Connect</h2>

        <p className="contact-description">
          I’m open to software engineering opportunities where I can apply my skills, 
          gain further experience, and contribute to real-world projects.

        </p>

        <div className="contact-buttons">
          {contactLinks.map((link) => {
            const isExternalLink = link.href.startsWith("http");

            return (
              <a
                key={link.label}
                href={link.href}
                className="contact-btn"
                target={isExternalLink ? "_blank" : undefined}
                rel={isExternalLink ? "noopener noreferrer" : undefined}
              >
                <span>{link.label}</span>
                <small>{link.detail}</small>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Contact;
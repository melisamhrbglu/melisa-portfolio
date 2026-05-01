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
      detail: "linkedin.com/in/melisamhrbglu",
      href: "https://www.linkedin.com/in/melisamhrbglu/",
    },
  ];

  return (
    <Section id="contact" className="contact-section">
      <div className="contact-card">
        <span className="contact-label">Contact</span>

        <h2>Let’s Connect</h2>

        <p className="contact-description">
          I’m open to new work opportunities, software engineering roles,
          front-end development projects, and professional collaborations.
        </p>

        <div className="contact-buttons">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="contact-btn"
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
            >
              <span>{link.label}</span>
              <small>{link.detail}</small>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Contact;
import Section from "./Section";

function Certificates() {
  const certificates = [
    {
      title: "AI-Powered Visual Generation & Effective Prompt Design",
      type: "Webinar",
      provider: "Online webinar focused on AI-based visual generation and effective prompt design.",
      date: "12/03/2026",
    },
    {
      title: "AI Usage Workshop",
      type: "Webinar",
      provider: "Online training delivered by AI Engineer İclal Çetin.",
      date: "06/11/2024",
    },
    {
      title: "Data Science and the Future of AI",
      type: "Webinar",
      provider:
        "Online seminar delivered by Apple Lead Data Scientist and AI Specialist Mehmet Halil Başaranoğlu.",
      date: "30/10/2024",
    },
    {
      title: "AI Security Webinar",
      type: "Webinar",
      provider:
        "Webinar delivered by Yunus Aydın, Application Security Engineer at Trendyol Group.",
      date: "04/12/2025",
    },
  ];

  return (
    <Section id="certificates" className="certificates-section">
      <h2 className="section-title">Certificates</h2>

      <p className="certificates-intro">
        Workshops and seminars that support my interest in artificial
        intelligence, data science, and emerging digital technologies.
      </p>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <article className="certificate-card" key={index}>
            <div className="certificate-top">
              <span className="certificate-type">{certificate.type}</span>
              <span className="certificate-date">{certificate.date}</span>
            </div>

            <h3>{certificate.title}</h3>
            <p>{certificate.provider}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Certificates;
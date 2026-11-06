import Section from "./Section";

function Certificates() {
  const certificates = [
    {
      title: "Artificial Intelligence Summit ’26",
      type: "Summit",
      description:
        "Attended sessions on Google Cloud and generative AI, AI agents, AWS-based AI solutions, scalable AI systems, cloud technologies, and AI-assisted software development.",
      date: "May 2, 2026",
      dateTime: "2026-05-02",
    },
    {
      title: "AI Security Webinar",
      type: "Webinar",
      description:
        "Gained an introduction to AI security through a session delivered by Yunus Aydın, Application Security Engineer at Trendyol Group.",
      date: "December 4, 2025",
      dateTime: "2025-12-04",
    },
    {
      title: "AI-Powered Visual Generation & Effective Prompt Design",
      type: "Webinar",
      description:
        "Learned about AI-supported visual generation and the principles of writing more effective prompts.",
      date: "2025",
      dateTime: "2025",
    },
    {
      title: "AI Usage Workshop",
      type: "Workshop",
      description:
        "Explored practical approaches to using artificial intelligence in a workshop led by AI Engineer İclal Çetin.",
      date: "November 6, 2024",
      dateTime: "2024-11-06",
    },
    {
      title: "Data Science and the Future of AI",
      type: "Seminar",
      description:
        "Gained insight into data science and the future development of artificial intelligence through a seminar delivered by Mehmet Halil Başaranoğlu.",
      date: "October 30, 2024",
      dateTime: "2024-10-30",
    },
  ];

  return (
    <Section id="certificates" className="certificates-section">
      <h2 className="section-title">Professional Development</h2>

      <p className="certificates-intro">
        A record of continued learning beyond academic coursework and ongoing 
        engagement with developments in technology.
      </p>

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <article
            className="certificate-card"
            key={certificate.title}
          >
            <div className="certificate-top">
              <span className="certificate-type">
                {certificate.type}
              </span>

              <time
                className="certificate-date"
                dateTime={certificate.dateTime}
              >
                {certificate.date}
              </time>
            </div>

            <h3>{certificate.title}</h3>
            <p>{certificate.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Certificates;
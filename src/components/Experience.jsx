import Section from "./Section";

function Experience() {
  const contributions = [
    {
      title: "Mobile Interface Development",
      text: "Developed and refined responsive application screens and reusable interface components using React Native and Expo.",
    },
    {
      title: "Content & Usability Improvements",
      text: "Transformed long, unstructured municipal content into clear and visually consistent sections that improved readability and navigation.",
    },
    {
      title: "Multilingual Support",
      text: "Implemented dynamic language switching with i18n, making application content available in six languages.",
    },
    {
      title: "Navigation & User Flows",
      text: "Built and maintained application flows using stack and bottom-tab navigation, connecting municipal services and information screens.",
    },
    {
      title: "API & Interactive Features",
      text: "Integrated current weather information through the OpenWeather API and developed interactive image galleries and carousels.",
    },
    {
      title: "Testing & Collaboration",
      text: "Tested the application on an Android emulator and physical devices, resolved interface and navigation issues, and contributed within an Agile team environment.",
    },
  ];

  const technologies = [
    "React Native",
    "Expo",
    "JavaScript",
    "React Navigation",
    "i18n",
    "REST API Integration",
    "Flexbox",
    "Android Emulator",
  ];

  const professionalStrengths = [
    "Customer Communication",
    "Teamwork",
    "Problem Solving",
    "Multitasking",
    "Time Management",
    "Attention to Detail",
  ];

  return (
    <Section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>

      <p className="experience-intro">
        Professional experience combining software development with long-term 
        customer service, teamwork, and operational responsibility.
      </p>

      <div className="experience-container">
        <article className="experience-card">
          <div className="experience-top">
            <div className="experience-heading">
              <span className="experience-label">
                Software Engineering Internship
              </span>

              <h3>Software Engineering Intern</h3>

              <p className="experience-company">
                Gazimağusa Municipality
              </p>

              <p className="experience-project">
                Municipality Smart City Application
              </p>
            </div>

            <span className="experience-date">
              June 2024 — August 2024
            </span>

          </div>

          <p className="experience-summary">
            Contributed to the front-end development of a municipal mobile
            application designed to improve access to local information and
            digital services. My work focused on responsive interfaces,
            multilingual content, navigation, API integration, interactive
            features, and usability improvements.
          </p>

          <div className="experience-contributions">
            <h4>Key Contributions</h4>

            <div className="experience-contributions-grid">
              {contributions.map((contribution) => (
                <div
                  className="experience-contribution"
                  key={contribution.title}
                >
                  <h5>{contribution.title}</h5>
                  <p>{contribution.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-technologies">
            <h4>Technologies &amp; Tools</h4>

            <div className="experience-tech">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </article>

        <article className="experience-card experience-card--compact">
          <div className="experience-top">
            <div className="experience-heading">
              <span className="experience-label">
                Professional Experience
              </span>

              <h3>Retail &amp; Copy Center Associate</h3>

              <p className="experience-company">Deniz Plaza</p>

              <p className="experience-project">
                Copy Center Services &amp; Seasonal Book Retail
              </p>
            </div>

            <span className="experience-date">
              2023 — Present
            </span>
          </div>

          <p className="experience-summary">
            Primarily responsible for copy center services at EMU branch, handling 
            printing, photocopying, document preparation, customer requests, and 
            daily operations. During the 2026 summer period, I also provide seasonal 
            support in the book department at another branch, assisting customers and 
            supporting retail operations.
          </p>

          <div className="experience-technologies">
            <h4>Core Strengths</h4>

            <div className="experience-tech">
              {professionalStrengths.map((strength) => (
                <span key={strength}>{strength}</span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
}

export default Experience;
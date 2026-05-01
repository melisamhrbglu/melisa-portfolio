import Section from "./Section";

function Experience() {
  const responsibilities = [
    "Designed and developed mobile application screens using React Native.",
    "Redesigned long and unstructured content pages into organized, reusable UI sections.",
    "Implemented multilingual support with dynamic language switching using i18n.",
    "Built navigation flows using Stack and Bottom Navigators.",
    "Integrated real-time weather data through the OpenWeather API.",
    "Tested and debugged the application on Android Emulator and physical devices.",
  ];

  const technologies = [
    "React Native",
    "JavaScript",
    "i18n",
    "OpenWeather API",
    "Flexbox",
    "Android Emulator",
  ];

  return (
    <Section id="experience" className="experience-section">
      <h2 className="section-title">Internship Experience</h2>

      <p className="experience-intro">
        Completed a software engineering internship focused on front-end and mobile development
        for a real-world smart city application project.
      </p>

      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-top">
            <div>
              <span className="experience-label">Internship</span>
              <h3>Software Engineering Intern</h3>
              <p className="experience-company">
                Gazimağusa Municipality — Municipality Smart City Application Project
              </p>
            </div>

            <span className="experience-date">June 2024 — August 2024</span>
          </div>

          <p className="experience-summary">
            Worked on the front-end development of a mobile smart city application,
            focusing on UI implementation, navigation structure, multilingual support, 
            responsive screens, API integration, and usability improvements.
        
          </p>

          <div className="experience-tech">
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>

          <ul className="experience-list">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Experience;
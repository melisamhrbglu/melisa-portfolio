import Section from "./Section";

function About() {
  const highlights = [
    {
      icon: "💡",
      title: "UI/UX-Focused Development",
      text: "Designing accessible interfaces with clarity, usability, and user needs in mind.",
    },
    {
      icon: "🧠",
      title: "Structured Development",
      text: "Turning ideas into organized development steps and maintainable solutions.",
    },
    {
      icon: "🧩",
      title: "Component-Based Design",
      text: "Creating reusable UI components for scalable and consistent front-end projects.",
    },
    {
      icon: "⚡",
      title: "Practical Problem Solving",
      text: "Improving application flow, responsiveness, and usability through practical solutions.",
    },
  ];

  return (
    <Section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="about-left">
          <p>
            I am a Software Engineer with a focus on front-end and mobile
            application development. I enjoy creating digital products that are
            clear, functional, and easy to interact with.
          </p>

          <p>
            My development approach is shaped by software engineering principles
            and practical UI implementation. I care about writing organized code,
            building reusable structures, and improving the user experience through
            thoughtful interface design.
          </p>

          <p>
            Through my internship and academic projects, I gained hands-on
            experience with React, React Native, navigation systems, API integration,
            multilingual support, and mobile application testing.
          </p>
        </div>

        <div className="about-right">
          {highlights.map((item, index) => (
            <div className="about-highlight" key={index}>
              <span className="about-icon">{item.icon}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default About;
import Section from "./Section";

function About() {
  const highlights = [
    {
      icon: "💡",
      title: "UI/UX-Focused Development",
      text: "Designing clean, user-friendly, and responsive interfaces.",
    },
    {
      icon: "🧠",
      title: "Structured Problem Solving",
      text: "Breaking complex tasks into clear and manageable steps.",
    },
    {
      icon: "🧩",
      title: "Component-Driven Design",
      text: "Building reusable components for scalable front-end projects.",
    },
    {
      icon: "⚡",
      title: "Performance-Oriented Approach",
      text: "Improving usability, structure, and overall application flow.",
    },
  ];

  return (
    <Section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="about-left">
          <p>
            I am a Software Engineering student with a strong interest in
            front-end development, mobile applications, and creating practical
            digital solutions with clean and user-friendly interfaces.
          </p>

          <p>
            My work focuses on building responsive layouts, reusable UI
            components, and structured React-based applications that are easy to
            maintain and improve over time.
          </p>

          <p>
            During my internship at Gazimağusa Municipality, I contributed to a
            smart city application by working on front-end development,
            interface design, usability improvements, and real-world application
            features.
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
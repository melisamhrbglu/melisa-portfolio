import Section from "./Section";

function About() {
  const highlights = [
    {
      icon: "⚙️",
      title: "Software Engineering",
      text: "Developing maintainable software solutions through problem-solving, planning, software design, and structured implementation.",
    },
    {
      icon: "💻",
      title: "Front-End Development",
      text: "Building responsive web interfaces with a focus on clear structure, visual consistency, accessibility, and usability.",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      text: "Creating cross-platform mobile applications with intuitive navigation, practical features, and consistent functionality.",
    },
    {
      icon: "🌱",
      title: "Adaptability & Growth",
      text: "Expanding my technical skills through hands-on experience, continous learning, and constructive feedback.",
    },
  ];

  return (
    <Section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="about-left">
          <p>
           I am a Software Engineering graduate with a strong interest in building
           reliable and practical software solutions. 
           I am drawn to software development because it combines technical
           problem-solving with the opportunity to transform ideas into functional products.
          </p>

          <p>
            My academic background and project experience have taught me that
            effective software requires more than working features. 
            I also consider code structure, maintainability, usability, and consistency
            throughout the development process.
          </p>

          <p>
            I approach my work with responsibility, analytical thinking, and a
            willingness to collaborate.
            I adapt to unfamiliar technologies, learn from feedback, and contribute
            effectively to each project.
          </p>
        </div>

        <div className="about-right">
          {highlights.map((item) => (
            <article className="about-highlight" key={item.title}>
              <span className="about-icon" aria-hidden="true">
                {item.icon}
              </span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default About;
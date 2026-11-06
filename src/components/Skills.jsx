import Section from "./Section";

function Skills() {
  const skillCategories = [
    {
      title: "Programming & Web Fundamentals",
      description:
        "Programming languages and foundational technologies used across my software projects.",
      skills: [
        { icon: "JS", name: "JavaScript", tone: "javascript" },
        { icon: "TS", name: "TypeScript", tone: "typescript" },
        { icon: "Py", name: "Python", tone: "python" },
        { icon: "<>", name: "HTML5", tone: "html" },
        { icon: "{ }", name: "CSS3", tone: "css" },
      ],
    },
    {
      title: "Web & Mobile Development",
      description:
        "Technologies and practices used to build responsive web interfaces and cross-platform mobile applications.",
      skills: [
        { icon: "⚛", name: "React", tone: "react" },
        { icon: "RN", name: "React Native / Expo", tone: "native" },
        { icon: "↔", name: "Responsive Web Design", tone: "responsive" },
        { icon: "API", name: "REST API Integration", tone: "api" },
      ],
    },
    {
      title: "Tools & Workflow",
      description:
        "Tools and practices supporting development, version control, testing, collaboration, and design.",
      skills: [
        { icon: "Git", name: "Git / GitHub", tone: "github" },
        { icon: "V", name: "Vite", tone: "vite" },
        { icon: "API", name: "Postman", tone: "postman" },
        { icon: "F", name: "Figma", tone: "figma" },
        { icon: "QA", name: "Manual Testing", tone: "testing" },
        { icon: "A", name: "Agile / Scrum", tone: "agile" },
      ],
    },
  ];

  return (
    <Section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>

      <p className="skills-intro">
        Technologies, tools, and development practices I have used across
        web, mobile, and software engineering projects.
      </p>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article className="skills-card" key={category.title}>
            <div className="skills-card-header">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>

            <div className="skills-list">
              {category.skills.map((skill) => (
                <div className="skill-pill" key={skill.name}>
                  <span
                    className={`skill-icon skill-icon--${skill.tone}`}
                    aria-hidden="true"
                  >
                    {skill.icon}
                  </span>

                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
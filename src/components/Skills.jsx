import Section from "./Section";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and user-friendly interfaces.",
      skills: [
        { icon: "⚛️", name: "React" },
        { icon: "📱", name: "React Native" },
        { icon: "🟦", name: "TypeScript" },
        { icon: "🟨", name: "JavaScript" },
        { icon: "🌐", name: "HTML" },
        { icon: "🎨", name: "CSS" },
        { icon: "📐", name: "Responsive Design" },
        { icon: "🔌", name: "REST API Integration" },
      ],
    },
    {
      title: "Programming & Backend Basics",
      description: "Core programming knowledge and backend fundamentals.",
      skills: [
        { icon: "🐍", name: "Python" },
      ],
    },
    {
  title: "Tools & Workflow",
  description: "Tools I use for development, testing, deployment, and design workflow.",
  skills: [
    { icon: "🔗", name: "Git / GitHub" },
    { icon: "⚡", name: "Vite" },
    { icon: "📡", name: "Postman" },
    { icon: "🎯", name: "Figma" },
  ],
},
  ];

  return (
    <Section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>

      <p className="skills-intro">
        Technologies and tools I use to build responsive web and mobile
        interfaces with clean structure and practical development workflow.
      </p>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skills-card" key={index}>
            <div className="skills-card-header">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-pill" key={skillIndex}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
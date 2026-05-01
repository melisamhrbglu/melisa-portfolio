import Section from "./Section";

function EngineeringApproach() {
  const approaches = [
    {
      icon: "01",
      title: "Problem-First Thinking",
      text: "I focus on understanding the real problem before moving into implementation, so each solution is built with a clear purpose.",
    },
    {
      icon: "02",
      title: "Scalable & Maintainable Code",
      text: "I aim to write readable, modular, and reusable code that can be extended and improved over time.",
    },
    {
      icon: "03",
      title: "Iterative Development",
      text: "I prefer building step by step, testing ideas early, and refining solutions through feedback and continous improvement.",
    },
    {
      icon: "04",
      title: "Continuous Learning",
      text: "I continue to strengthen my technical foundation by practicing, exploring modern tools, and learning through real project experience.",
    },
  ];

  return (
    <Section id="engineering" className="engineering-section">
      <h2 className="section-title">Engineering Approach</h2>

      <p className="engineering-intro">
        My engineering approach is based on understanding problems clearly,
        building structured solutions, and improving projects through practical,
        maintainable, and user-focused implementation.
      </p>

      <div className="engineering-container">
        {approaches.map((item, index) => (
          <div className="engineering-card" key={index}>
            <span className="engineering-number">{item.icon}</span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default EngineeringApproach;
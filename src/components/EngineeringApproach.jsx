import Section from "./Section";

function EngineeringApproach() {
  const approaches = [
    {
      number: "01",
      title: "Understand the Problem",
      text: "Clarify the project’s purpose, intended users, requirements, and constraints to establish a clear direction from the beginning.",
    },
    {
      number: "02",
      title: "Plan the Structure",
      text: "Break the solution into manageable components and define how its data, features, and interfaces should work together.",
    },
    {
      number: "03",
      title: "Build Incrementally",
      text: "Develop the project in smaller stages, keeping each part organized, reusable, and easier to maintain as the solution evolves.",
    },
    {
      number: "04",
      title: "Test & Validate",
      text: "Evaluate features throughout development using expected and unexpected scenarios to identify issues before they affect the wider system.",
    },
    {
      number: "05",
      title: "Refine the Experience",
      text: "Use testing results and feedback to improve functionality, interface consistency, responsiveness, and the overall user experience.",
    },
    {
      number: "06",
      title: "Document & Learn",
      text: "Review the completed work for clarity and maintainability, document important decisions, and apply the lessons learned to future projects.",
    },
  ];

  return (
    <Section id="engineering" className="engineering-section">
      <h2 className="section-title">Engineering Approach</h2>

      <p className="engineering-intro">
        I approach development as a structured and iterative process—from
        understanding the problem and planning the solution to implementation,
        testing, refinement, and review.
      </p>

      <ol className="engineering-container">
        {approaches.map((item) => (
          <li className="engineering-card" key={item.number}>
            <span className="engineering-number" aria-hidden="true">
              {item.number}
            </span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default EngineeringApproach;
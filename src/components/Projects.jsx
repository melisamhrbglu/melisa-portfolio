import Section from "./Section";
import projects from "../data/projectsData";
import ProjectCard from "./ProjectCard";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  const additionalProjects = projects.filter(
    (project) => !project.featured && project.category !== "ai-coursework"
  );

  const aiCourseworkProjects = projects.filter(
    (project) => project.category === "ai-coursework"
  );

  return (
    <Section id="projects" className="projects-section">
      <h2 className="section-title">Engineering Projects</h2>

      <p className="projects-intro">
        A collection of professional, academic, and independently developed
        work reflecting my approach to software design, problem-solving,
        and implementation.
      </p>

      <div className="projects-block">
        <div className="projects-heading-row">
          <h3 className="projects-subtitle">Featured Projects</h3>
          <span className="projects-label">Selected Work</span>
        </div>

        <div className="project-grid featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              variant="featured"
            />
          ))}
        </div>
      </div>

      <div className="projects-block">
        <div className="projects-heading-row">
          <h3 className="projects-subtitle">Additional Projects</h3>
          <span className="projects-label">Academic &amp; Systems Work</span>
        </div>

        <div className="project-grid additional-grid">
          {additionalProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              variant="compact"
            />
          ))}
        </div>
      </div>

      {aiCourseworkProjects.length > 0 && (
        <div className="projects-block">
          <div className="projects-heading-row">
            <h3 className="projects-subtitle">
              Selected AI Coursework Projects
            </h3>

            <span className="projects-label">Applied AI Work</span>
          </div>

          <div className="project-grid additional-grid">
            {aiCourseworkProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                variant="compact"
              />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}

export default Projects;
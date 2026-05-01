import Section from "./Section";
import projects from "../data/projectsData";
import ProjectCard from "./ProjectCard";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" className="projects-section">
      <h2 className="section-title">Engineering Projects</h2>

      <p className="projects-intro">
        A selection of academic, front-end, mobile, and system-focused projects
        that demonstrate my software engineering foundation, technical problem-solving, and practical development experience.
      </p>

      <div className="projects-block">
        <div className="projects-heading-row">
          <h3 className="projects-subtitle">Featured Projects</h3>
          <span className="projects-label">Selected Work</span>
        </div>

        <div className="project-grid featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} variant="featured" />
          ))}
        </div>
      </div>

      <div className="projects-block">
        <div className="projects-heading-row">
          <h3 className="projects-subtitle">Additional Projects</h3>
          <span className="projects-label">Academic & System Work</span>
        </div>

        <div className="project-grid additional-grid">
          {additionalProjects.map((project) => (
            <ProjectCard key={project.id} {...project} variant="compact" />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Projects;
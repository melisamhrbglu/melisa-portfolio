function ProjectCard({
  title,
  descriptions = [],
  tech,
  github,
  demo,
  featured,
  variant = "default",
}) {
  return (
    <article className={`project-card ${featured ? "featured-card" : ""} ${variant}`}>
      {featured && <span className="featured-badge">Featured</span>}

      <div className="project-card-header">
        <h3 className="project-title">{title}</h3>

        {tech && (
          <p className="project-tech">
            <strong>Tech:</strong> {tech}
          </p>
        )}
      </div>

      <ul className="project-description">
        {descriptions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {(github || demo) && (
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}

          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
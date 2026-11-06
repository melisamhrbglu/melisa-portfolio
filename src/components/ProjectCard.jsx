function ProjectCard({
  title,
  summary,
  contribution,
  outcome,
  tech,
  github,
  demo,
  featured,
  course,
  variant = "default",
}) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`project-card ${
        featured ? "featured-card" : ""
      } ${variant}`}
    >
      {(featured || course) && (
  <div className="project-card-meta">
    {featured && (
      <span className="featured-badge">Featured</span>
    )}

    {course && (
      <span className="project-course">{course}</span>
    )}
  </div>
)}

      <div className="project-card-header">
        <h3 className="project-title">{title}</h3>
      </div>

      <div className="project-description">
        {summary && <p>{summary}</p>}

        {isFeatured && contribution && (
          <p>
            <strong>Contribution:</strong> {contribution}
          </p>
        )}

        {isFeatured && outcome && (
          <p>
            <strong>Outcome:</strong> {outcome}
          </p>
        )}
      </div>

      {tech && (
        <p className="project-tech">
          <strong>Tech:</strong> {tech}
        </p>
      )}

      {(github || demo) && (
        <div className="project-links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
            >
              View on GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo of ${title}`}
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
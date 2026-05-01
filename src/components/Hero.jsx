function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <p className="hero-intro">Hello, I'm</p>

        <h1 className="hero-title">
          Melisa Mehrübeoğlu
        </h1>

        <h2 className="hero-subtitle">
          Software Engineering Student | Front-End & Mobile App Developer
        </h2>

        <p className="hero-description">
          I build clean, responsive, and user-friendly web and mobile interfaces
          with a focus on front-end development, UI design, and practical software solutions.
        </p>

        <div className="hero-highlights">
          <p>BSc in Software Engineering — Eastern Mediterranean University</p>
          <p>React, JavaScript, HTML, CSS & Front-End Development</p>
          <p>Web and Mobile App Project Experience</p>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="hero-button primary">
            View My Projects
          </a>

          <a href="#contact" className="hero-button secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
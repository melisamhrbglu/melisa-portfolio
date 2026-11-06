
import graduationPhoto from "../assets/grad3.png";

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">Hello, I&apos;m</p>

          <h1 className="hero-title" id="hero-title">
            Melisa Mehrübeoğlu
          </h1>

          <p className="hero-subtitle">
            Software Engineer · Frontend &amp; Mobile Developer
          </p>

          <p className="hero-description">
            Turning ideas into reliable, user-focused software through structured
            development and practical problem-solving.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-button primary">
              View My Projects
            </a>

            <a
              href={`${import.meta.env.BASE_URL}001 Melisa Mehrübeoğlu CV.pdf`}
              className="hero-button secondary"
              download="001 Melisa Mehrübeoğlu CV.pdf"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            <img
              src={graduationPhoto}
              alt="Melisa Mehrübeoğlu celebrating her Software Engineering graduation"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

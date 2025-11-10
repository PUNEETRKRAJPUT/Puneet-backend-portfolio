import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for opportunities
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Puneet Kumar</span>
        </h1>

        <p className="hero-subtitle">Backend Developer</p>

        <p className="hero-description">
          Backend Developer with 2+ years of experience designing scalable architectures
          in Node.js and NestJS. Skilled in microservices, RESTful APIs, and AWS deployment—delivering
          robust products that drive business outcomes in fast-paced teams.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Daily Records Processed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">90%</div>
            <div className="stat-label">Performance Improvement</div>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="#experience" className="btn btn-outline">View Work</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

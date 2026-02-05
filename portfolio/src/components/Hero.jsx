import React from 'react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Ivan Czar P. Lumanglas</span>
          </h1>
          <p className="hero-subtitle">
            Software Engineer & AI Developer
          </p>
          <p className="hero-description">
            I build intelligent solutions that drive business value. From web and mobile applications to AI-powered systems and automation, I transform ideas into production-ready products.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get in Touch
            </button>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="gradient-orb"></div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me</p>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software engineer and AI developer with expertise in building scalable web applications, mobile solutions, and intelligent systems. I thrive on turning complex problems into elegant, user-centric solutions.
            </p>
            <p>
              With a focus on clean code, best practices, and continuous learning, I'm dedicated to delivering high-quality products that make a real impact. Whether it's architecting a robust backend, creating responsive frontend experiences, or implementing cutting-edge AI solutions, I bring both technical excellence and strategic thinking to every project.
            </p>
            <p>
              I'm always eager to collaborate with forward-thinking teams and clients who are ready to build something extraordinary.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <h3>Multi-Disciplinary</h3>
              <p>Web • Mobile • AI/ML</p>
            </div>
            <div className="stat-card">
              <h3>Problem Solver</h3>
              <p>Clean Code • Best Practices</p>
            </div>
            <div className="stat-card">
              <h3>Fast Learner</h3>
              <p>Always Evolving • Adaptable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

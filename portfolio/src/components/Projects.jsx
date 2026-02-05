import React from 'react'

export default function Projects() {
  const projects = []

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcase of my recent work</p>
        
        {projects.length === 0 ? (
          <div className="empty-state">
            <p>Projects coming soon...</p>
            <p className="text-muted">I'm currently building amazing projects. Check back soon!</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image"></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags?.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

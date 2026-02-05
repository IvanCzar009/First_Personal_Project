import React from 'react'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Web Development',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Node.js', 'Express', 'REST APIs', 'Responsive Design']
    },
    {
      category: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Cross-platform Development', 'Mobile UI/UX']
    },
    {
      category: 'AI & Machine Learning',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'LLMs', 'Data Analysis', 'Neural Networks', 'ML Engineering']
    },
    {
      category: 'Backend & Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'FastAPI', 'Docker', 'Microservices']
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Linux', 'AWS', 'Deployment']
    },
    {
      category: 'Other Skills',
      skills: ['Automation', 'API Integration', 'Testing', 'Performance Optimization', 'Problem Solving']
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

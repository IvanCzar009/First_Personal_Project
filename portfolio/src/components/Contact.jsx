import React, { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open email client
    const mailtoLink = `mailto:ivanczarlumanglas486@gmail.com?subject=Portfolio Inquiry from ${formState.name}&body=${encodeURIComponent(formState.message)}`
    window.location.href = mailtoLink
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">I'd love to hear about your project</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Whether you have a project in mind, want to collaborate, or just want to say hello, I'm always open to new opportunities and conversations.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <h4>Email</h4>
                <a href="mailto:ivanczarlumanglas486@gmail.com">
                  ivanczarlumanglas486@gmail.com
                </a>
              </div>
              <div className="contact-method">
                <h4>Availability</h4>
                <p>Open for freelance projects, full-time positions, and collaborations</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formState.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Ivan Czar P. Lumanglas. All rights reserved.</p>
          <div className="footer-links">
            <a href="mailto:ivanczarlumanglas486@gmail.com">Email</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

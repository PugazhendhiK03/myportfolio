// Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = '917339541974'; // Your WhatsApp number without '+' or '00'
  const whatsappMessage = "Hello Pugazhendhi, I came across your portfolio and wanted to connect..."; // Default message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-name">Pugazhendhi K</h3>
            <p className="footer-tagline">Full Stack Developer</p>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h4 className="links-title">Quick Links</h4>
              <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/#about'}>About Me</Link></li>
                <li><Link to={'/#services'}>Services</Link></li>
                <li><Link to={'/#project-section'}>Projects</Link></li>
                <li><Link to={'/#contact'}>Contact</Link></li>
              </ul>
            </div>

            <div className="links-column">
              <h4 className="links-title">Connect</h4>
              <ul>
                <li><a href="mailto:pugazhendhikrishna03@gmail.com">Email</a></li>
                <li><a href={`tel:+${phoneNumber}`}>Phone</a></li>
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href="https://github.com/PugazhendhiK03" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/pugazhendhi2003" target="_blank" rel="noopener noreferrer">Linked In</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <h4 className="social-title">Follow Me</h4>
            <div className="social-icons">
              <a href="https://github.com/PugazhendhiK03" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/pugazhendhi2003" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-icon" />
              </a>
              <a href="https://www.instagram.com/pugazh_0308?igsh=MW10bjFla21wcXBldw==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
                </a>
              <a href="mailto:pugazhendhikrishna03@gmail.com">
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Pugazhendhi K. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
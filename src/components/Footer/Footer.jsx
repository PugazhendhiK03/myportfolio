import React from 'react';
import './Footer.css'; // Link to the CSS file

const Footer = () => {
 return (
  <footer className="footer-section">
   <div className="footer-container">
    
    {/* Column 1: Branding & Role (Pugazhendhi K) */}
    <div className="footer-col footer-brand">
     <p className="footer-logo">Pugazhendhi K</p>
     <p className="footer-role">Full Stack Developer</p>
    </div>

    {/* Column 2: Quick Links */}
    <div className="footer-col">
     <h4 className="footer-heading">Quick Links</h4>
     <ul className="footer-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About Me</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
     </ul>
    </div>

    {/* Column 3: Connect */}
    <div className="footer-col">
     <h4 className="footer-heading">Connect</h4>
     <ul className="footer-links">
      <li><a href="mailto:email@example.com">Email</a></li>
      <li><a href="tel:1234567890">Phone</a></li>
      <li><a href="https://wa.me/917339541974?text=Hello Pugazhendhi, I saw your portfolio and I would like to discuss a project. Can we connect?">WhatsApp</a></li>
      <li><a href="https://github.com/PugazhendhiK03">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/pugazhendhi2003">LinkedIn</a></li>
     </ul>
    </div>

    {/* Column 4: Follow Me (Social Icons) */}
    <div className="footer-col footer-social-column">
     <h4 className="footer-heading">Follow Me</h4>
     <div className="footer-social-icons">
      
      {/* LinkedIn - REPLACED SVG */}
      <a href="https://www.linkedin.com/in/pugazhendhi2003" aria-label="LinkedIn">
       <i className="fa-brands fa-linkedin-in fa-xl"></i>
      </a>
      
      {/* GitHub - REPLACED SVG */}
      <a href="https://github.com/PugazhendhiK03" aria-label="GitHub">
       <i className="fa-brands fa-github fa-xl"></i>
      </a>
      
      {/* WhatsApp - CORRECTED & STYLED */}
      <a href="https://wa.me/917339541974?text=Hello Pugazhendhi, I saw your portfolio and I would like to discuss a project. Can we connect?" aria-label="WhatsApp">
        <i className="fa-brands fa-whatsapp fa-xl"></i>
      </a>
      
      {/* Instagram - REPLACED SVG */}
      <a href="https://www.instagram.com/pugazh_0308?igsh=MW10bjFla21wcXBldw==" aria-label="Instagram">
       <i className="fa-brands fa-instagram fa-xl"></i>
      </a>
      
      {/* Email - REPLACED SVG (using solid envelope icon) */}
      <a href="mailto:email@example.com" aria-label="Email">
       <i className="fa-solid fa-envelope fa-xl"></i>
      </a>
     </div>
    </div>
   </div>
   
   {/* Separator Line */}
   <hr className="footer-separator"/>
   
   {/* Bottom Copyright Bar */}
   <div className="footer-bottom">
    <p className="footer-copyright">
     &copy; {new Date().getFullYear()} Pugazhendhi K. All rights reserved.
    </p>
   </div>
  </footer>
 );
};

export default Footer;
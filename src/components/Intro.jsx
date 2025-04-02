// Intro.jsx
import React from 'react';
import '../styles/Intro.css';
import IntroImg from '../assets/images/IntroImg.png';
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Resume from '../assets/pdf/PugazhendhiResume.pdf';

const Intro = () => {
  const phoneNumber = '917339541974'; // Your WhatsApp number without '+' or '00'
  const whatsappMessage = "Hello Pugazhendhi, I came across your portfolio and wanted to connect..."; // Default message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="intro" id='intro'>
      <div className="container">
        <div className="intro-grid">
          <div className="intro-content">
            <h2 className="intro-subtitle">WEB DEVELOPER</h2>
            <h1 className="intro-title">Hey !, I'm Pugazhendhi K</h1>
            <p className="intro-description">
              Brief description with insights into myself, my vocational journey, 
              and what I engage in professionally. I specialize in creating modern 
              web applications with clean, efficient code.
            </p>
            <div className="intro-btns">
              <a href={whatsappLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Text Me <FaWhatsapp className="whatsapp-icon" />
              </a>
              <a href={Resume} download className="btn btn-secondary">
                Download CV
              </a>
            </div>
            <div className="intro-social">
              <a href="https://www.linkedin.com/in/pugazhendhi2003" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="social-icon" />
              </a>
              <a href="https://github.com/PugazhendhiK03" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://www.instagram.com/pugazh_0308?igsh=MW10bjFla21wcXBldw==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </div>

          <div className="intro-image">
            <img src={IntroImg} alt="Pugazhendhi K" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
import React from 'react';
import './HeroAbout.css';
// import { FaDownload } from 'react-icons/fa'; // Removed unused import
import Resume from '../../../assets/pdf/Pugazhendhi.pdf'

// Assuming you have an image asset for the profile picture
import profileImage from '../../../assets/images/about.png'; // Adjust path as needed

const HeroAbout = () => {
  return (
    <section id='about' className="hero-about-section">
      <div className="hero-about-container">
        {/* Left Side: Profile Image and Skills Bubbles */}
        <div className="hero-about-left">
            <img 
              src={profileImage} 
              alt="Pugazhendhi Profile" 
              className="profile-image" 
            />
        </div>

        {/* Right Side: About Me Content */}
        <div className="hero-about-right">
          <p className="about-me-subtitle">— About Me</p>
          <h1 className="about-me-title">Who is <span className="highlight-name">Pugazhendhi</span>?</h1>
          <p className="about-me-description">
            Passionate Frontend Developer ready to bring your digital vision to life. I successfully launched my first business client's website and am eager for new projects.
          </p>

          {/* Stats Section */}
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <p className="stat-label">Project Completed</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <p className="stat-label">Industry Covered</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <p className="stat-label">Years of Experience</p>
            </div>
          </div>

          {/* Call to Action & Signature */}
          <div className="about-cta">
            {/* Custom button structure */}
            <a href={Resume} download className="btn btn--primary">
              <span className='btn__name'>Download CV</span>
              <div className="btn-icon">
                {/* Assuming Font Awesome is linked globally */}
                <i className="fa-solid fa-arrow-right"></i> 
              </div>
            </a>
            
            {/* Styled text signature */}
            <span className="signature-placeholder">Pugazhendhi</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
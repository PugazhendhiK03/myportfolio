// About.jsx
import React, { useState } from 'react';
import '../styles/About.css';
import AboutImg from '../assets/images/AboutImg.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'qualifications':
        return (
          <div className="qualifications-content">
            <h3 className="journey-title">My Awesome Journey</h3>
            
            <div className="qualifications-grid">
            <div className="experience-section">
              <h4>Experience</h4>
              <div className="timeline">
                <div className="timeline-item">
                  <h5>Freelance Developer</h5>
                  <p className="position">Web Developer</p>
                  <p className="duration">2023-Present</p>
                </div>
                <div className="timeline-item">
                  <h5>Personal Projects</h5>
                  <p className="position">Self-taught Developer</p>
                  <p className="duration">2022-2023</p>
                </div>
              </div>
            </div>

              <div className="education-section">
                <h4>Education</h4>
                <div className="timeline">
                  <div className="timeline-item">
                    <h5>RBM Hr Sec School</h5>
                    <p className="degree">SSLC</p>
                    <p className="duration">2017-2018</p>
                  </div>
                  <div className="timeline-item">
                    <h5>RBM Hr Sec School</h5>
                    <p className="degree">HSC</p>
                    <p className="duration">2019-2020</p>
                  </div>
                  <div className="timeline-item">
                    <h5>Anand Institue Of Higher Technology</h5>
                    <p className="degree">Bachelor's Of Engineering in Computer Science</p>
                    <p className="duration">2020-2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      // About.jsx (updated skills section)
case 'skills':
    return (
      <div className="skills-content">
        <h3 className="tools-title">Tools I Use Everyday</h3>
        
        <div className="skills-section">
          <h4>Skills</h4>
          <div className="skills-grid">
            <div className="skill-category">
              <h5>Front-end Development</h5>
              <div className="skill-tags">
                <span className="skill-tag">
                  <i className="fa-brands fa-html5"></i> HTML
                </span>
                <span className="skill-tag">
                  <i className="fa-brands fa-css3-alt"></i> CSS
                </span>
                <span className="skill-tag">
                  <i className="fa-brands fa-js"></i> JavaScript
                </span>
                <span className="skill-tag">
                  <i className="fa-brands fa-react"></i> React JS
                </span>
              </div>
            </div>
            <div className="skill-category">
              <h5>Back-end Development</h5>
              <div className="skill-tags">
                <span className="skill-tag">
                  <i className="fa-brands fa-node-js"></i> Node.js
                </span>
                <span className="skill-tag">
                  <i className="fa-brands fa-php"></i> PHP
                </span>
                <span className="skill-tag">
                  <i className="fa-brands fa-python"></i> Python
                </span>
                <span className="skill-tag">
                  <i className="fa-solid fa-server"></i> Express
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="tools-section">
          <h4>Tools</h4>
          <div className="tools-tags">
            <span className="tool-tag">
              <i className="fa-solid fa-code"></i> VS Code
            </span>
            <span className="tool-tag">
              <i className="fa-brands fa-git-alt"></i> Git
            </span>
            <span className="tool-tag">
              <i className="fa-brands fa-figma"></i> Figma
            </span>
            <span className="tool-tag">
              <span className="postman-icon">
                <i className="fa-solid fa-person"></i>
              </span> Postman
            </span>
          </div>
        </div>
      </div>
    );
      default: // personal
        return (
          <div className="personal-content">
            <h2 className="section-title">Building My Future in Web Development</h2>
              <p className="about-description">Fresh talent specializing in modern web development. I build clean, responsive 
              websites with current technologies and best practices.</p>

            <div className="personal-info-grid">
              <div className="info-column">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Pugazhendhi K</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">pugazhendhikrishna03@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Education:</span>
                  <span className="info-value">Bachelor's in Computer Science</span>
                </div>
              </div>
              <div className="info-column">
                <div className="info-item">
                  <span className="info-label">Phone:</span>
                  <span className="info-value">+91 7339541974</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Birthday:</span>
                  <span className="info-value">03 Aug, 2003</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">Ranipet, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="language-skills">
              <h3 className="skills-title">Language Skill</h3>
              <div className="language-tags">
                <span className="language-tag">English</span>
                <span className="language-tag">Tamil</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="about" id="about">
        <span>About Me</span>
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image">
            <img src={AboutImg} alt="Pugazhendhi K" />
          </div>

          <div className="about-content">
            <div className="tabs">
              <button 
                className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
                onClick={() => setActiveTab('personal')}
              >
                Personal Info
              </button>
              <button 
                className={`tab-btn ${activeTab === 'qualifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('qualifications')}
              >
                Qualifications
              </button>
              <button 
                className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
            </div>

            <div className="tab-content">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
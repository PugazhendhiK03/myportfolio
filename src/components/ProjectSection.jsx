// ProjectSection.jsx
import React from 'react';
import '../styles/ProjectSection.css';
import { FaArrowRight } from 'react-icons/fa';
import WebsiteTemplate from '../assets/images/WebsiteTemplate.png';
import Taxera from '../assets/images/Taxera.png';
import { Link } from 'react-router-dom';

const ProjectSection = () => {
  return (
    <section className="project-section" id="project-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest Projects</h2>
          <p className="section-subtitle">
            Innovative solutions showcasing my technical expertise
          </p>
          <Link to="projectpage" className="view-all">
            View All Projects <FaArrowRight />
          </Link>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={WebsiteTemplate} alt="Template1" className="project-img" />
              <div className="project-overlay">
                <span className="tech-tag">React JS</span>
                <span className="tech-tag">CSS3</span>
              </div>
            </div>
            <div className="project-info">
              <h3>Website Templates</h3>
              <p>
                A collection of responsive and modern website templates designed for various industries.
                Each template is built with React and CSS3, ensuring a seamless user experience.
              </p>
              <div className="project-features">
                <span>Responsive design</span>
                <span>Modern UI</span>
                <span>Customizable</span>
              </div>
              <Link to="projectpage" className="project-link">View More →</Link>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={Taxera} alt="Template2" className="project-img" />
              <div className="project-overlay">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JS</span>
              </div>
            </div>
            <div className="project-info">
              <h3>Taxera - Tax Consultansy and Services</h3>
              <p>
                As Freelancer, I developed a website for a tax consultancy firm, Taxera. The website features a modern design, user-friendly navigation, and responsive layout.
              </p>
              <div className="project-features">
                <span>Real-time tracking</span>
                <span>Automated dispatch</span>
                <span>Customer portal</span>
              </div>
              <Link to="projectpage" className="project-link">View More →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
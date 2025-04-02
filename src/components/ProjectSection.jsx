// ProjectSection.jsx
import React from 'react';
import '../styles/ProjectSection.css';
import { FaArrowRight } from 'react-icons/fa';
import CCTV from '../assets/images/CCTV.jpg';
import CMS from '../assets/images/CMS.jpg';
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
              <img src={CCTV} alt="CCTV Enhanced By AI" className="project-img" />
              <div className="project-overlay">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">OpenCV</span>
                <span className="tech-tag">AI</span>
              </div>
            </div>
            <div className="project-info">
              <h3>CCTV Enhanced By AI</h3>
              <p>
                An intelligent surveillance system that uses computer vision to detect
                suspicious activities in real-time with 92% accuracy.
              </p>
              <div className="project-features">
                <span>Real-time alerts</span>
                <span>Object detection</span>
                <span>Motion tracking</span>
              </div>
              <Link to="projectpage" className="project-link">View Case Study →</Link>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={CMS} alt="Courier Management System" className="project-img" />
              <div className="project-overlay">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
            </div>
            <div className="project-info">
              <h3>Courier Management System</h3>
              <p>
                A full-stack logistics solution that optimizes package tracking,
                delivery routes, and customer notifications.
              </p>
              <div className="project-features">
                <span>Real-time tracking</span>
                <span>Automated dispatch</span>
                <span>Customer portal</span>
              </div>
              <Link to="projectpage" className="project-link">View Case Study →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
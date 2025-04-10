import React, { useState } from 'react';
import '../styles/ProjectsPage.css';
import PortfolioImg from '../assets/images/Portfolio.png';
import CCTV from '../assets/images/CCTV.jpg';
import CMS from '../assets/images/CMS.jpg';
import WebsiteTemplate from '../assets/images/WebsiteTemplate.png';
import Taxera from '../assets/images/Taxera.png';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "CCTV Enhanced By AI",
      description: "Intelligent surveillance system using computer vision to detect suspicious activities.",
      technologies: ["Python", "OpenCV", "AI"],
      imageUrl: CCTV,
      liveLink: "https://cctv-ai.example.com",
      detailedDescription: "This project developed an intelligent surveillance system that uses computer vision algorithms to detect suspicious activities in real-time with 92% accuracy. The system provides real-time alerts, object detection, and motion tracking capabilities. It was built using Python with OpenCV for image processing and incorporates machine learning models for behavior analysis.",
      features: [
        "Real-time alerts",
        "Object detection",
        "Motion tracking",
        "Behavior analysis",
        "High accuracy detection"
      ]
    },
    {
      id: 2,
      title: "Courier Management System",
      description: "Full-stack logistics solution for package tracking and delivery optimization.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: CMS,
      liveLink: "https://courier.example.com",
      detailedDescription: "A comprehensive courier management system that optimizes package tracking, delivery routes, and customer notifications. The system features real-time tracking, automated dispatch algorithms, and a customer portal. The frontend was built with React, while the backend uses Node.js with Express and MongoDB for data storage.",
      features: [
        "Real-time tracking",
        "Automated dispatch",
        "Customer portal",
        "Route optimization",
        "Notification system"
      ]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing my projects and skills.",
      technologies: ["React", "CSS3", "Responsive Design"],
      imageUrl: PortfolioImg,
      liveLink: "https://pugazhendhi03.netlify.app/",
      detailedDescription: "A responsive portfolio website built with React that showcases my projects, skills, and professional experience. The design emphasizes clean aesthetics and smooth animations while maintaining excellent performance across all device sizes. Features include project filtering, dark mode, and responsive layouts.",
      features: [
        "Responsive design",
        "Project showcase",
        "Performance optimized",
        "Clean animations"
      ]
    },
    {
      id: 4,
      title: "Website Templates",
      description: "A collection of responsive website templates for various industries.",
      technologies: ["React", "CSS3", "Responsive Design"],
      imageUrl: WebsiteTemplate,
      liveLink: "https://ngt-web-template.netlify.app/",
      detailedDescription: "A collection of responsive website templates designed for various industries, including e-commerce, blogs, and portfolios. Each template is built with React and CSS3, ensuring a modern look and feel. The templates are fully customizable and optimized for performance, making them suitable for any project.",
      features: [
        "Multiple templates",
        "Industry-specific designs",
        "Fully customizable",
        "Performance optimized"
      ]
    },
    {
      id: 5,
      title: "Taxera - Tax Consultancy and Services",
      description: "Website for a tax consultancy firm with modern design and user-friendly navigation.",
      technologies: ["HTML", "CSS3", "JavaScript"],
      imageUrl: Taxera,
      liveLink: "https://taxera.netlify.app/",
      detailedDescription: "A professional website developed for a tax consultancy firm, Taxera. The website features a modern design, user-friendly navigation, and responsive layout. It includes sections for services offered, client testimonials, and a contact form for inquiries. The site is built with HTML, CSS3, and JavaScript, ensuring compatibility across all devices.", 
      features: [
        "Responsive design",
        "Modern UI",
        "User-friendly navigation",
        "SEO optimized",
        "Fast loading times",
        "Contact forms",
        "Client testimonials",
        "Animations and transitions",
      ]
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <main className="project-page">
      <div className="project-header">
        <h1>My Projects</h1>
        <p>A collection of my recent work and personal projects</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => openModal(project)}
          >
            <div className="card-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <div className="modal-tech-tags">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.imageUrl} alt={selectedProject.title} />
              </div>
              <div className="modal-description">
                <p>{selectedProject.detailedDescription}</p>
                {selectedProject.features && (
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="modal-links">
                  {selectedProject.liveLink && (
                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="link-button">
                      Live Link
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectsPage;
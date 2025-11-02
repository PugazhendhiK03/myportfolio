import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // <--- ADDED useNavigate
import './ProjectDetailPage.css'; 

// Mock data (This would typically come from an API call or a large JSON file)
const mockProjectDetails = [
  {
    id: 1,
    title: 'E-Commerce Platform Redesign',
    category: 'UX/UI & Front-end',
    date: 'Spring 2023',
    overview: 'A full-scale overhaul of a legacy e-commerce platform\'s front-end and user experience to improve conversion rates and modernise the mobile interface.',
    problem: 'The existing platform suffered from high bounce rates on mobile, slow load times, and a confusing checkout process, leading to significant revenue loss.',
    solution: 'Implemented a clean, mobile-first, component-based architecture using React, replacing legacy jQuery code. Optimized image loading and streamlined the 3-step checkout into a single, intuitive page.',
    technologies: ['React', 'Redux Toolkit', 'Sass', 'Figma', 'Node.js (API Integration)'],
    features: ['Mobile-First Design', 'Optimized Product Filtering', 'One-Page Checkout', 'State Management'],
    results: [
      { metric: 'Conversion Rate Increase', value: '📈 22%' },
      { metric: 'Mobile Load Time Reduction', value: '⏱️ 45%' },
      { metric: 'Bounce Rate Decrease', value: '⬇️ 15%' },
    ],
    liveLink: 'https://ecommerce-demo.com',
    githubLink: 'https://github.com/pugazhendhi/ecommerce-redesign',
    mainImage: 'https://via.placeholder.com/1200x600/2e4330/ffffff?text=Project+Main+Screenshot',
    detailImage: 'https://via.placeholder.com/800x450/f8a51b/2d2d2d?text=Mobile+View+Showcase',
  },
  // Add other project details here...
];


const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate(); // <--- INITIALIZE useNavigate
  const project = mockProjectDetails.find(p => p.id === parseInt(projectId));

  // Function to handle navigation to the contact section on the home page
  const handleContactClick = (sectionId) => {
    // 1. Navigate to the Home page root with the contact hash
    navigate(`/#${sectionId}`);
    
    // 2. Wait briefly, then scroll the page to the section
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      }
    }, 100); 
  };


  // Handle case where project isn't found
  if (!project) {
    return (
      <div className="not-found">
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist or the link is broken.</p>
        <Link to="/portfolio" className="btn btn--secondary">
            <span>Back to All Projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      
      {/* 1. Hero / Title Section */}
      <header className="project-detail-header">
        <div className="project-header-content">
            <Link to="/portfolio" className="back-link">&larr; Back to Portfolio</Link>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-category">{project.category} | {project.date}</p>
        </div>
        <img src={project.mainImage} alt={`Main image for ${project.title}`} className="project-main-image"/>
      </header>

      {/* 2. Overview and Links */}
      <section className="project-summary">
          <div className="summary-left">
              <h2>Project Overview</h2>
              <p>{project.overview}</p>
          </div>
          <div className="summary-right">
              <h3>Quick Links</h3>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="detail-cta live">
                  <i className="fa-solid fa-globe"></i> View Live Site
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="detail-cta github">
                  <i className="fa-brands fa-github"></i> View Code on GitHub
              </a>
          </div>
      </section>

      {/* 3. The Challenge & Solution */}
      <section className="challenge-solution-section">
          <div className="problem-card">
              <h3>The Challenge</h3>
              <p>{project.problem}</p>
          </div>
          <div className="solution-card">
              <h3>My Solution</h3>
              <p>{project.solution}</p>
          </div>
      </section>

      {/* 4. Technologies Used */}
      <section className="tech-stack-section">
        <h2>Technologies & Tools</h2>
        <div className="tech-pills">
            {project.technologies.map((tech, index) => (
                <span key={index} className="tech-pill">{tech}</span>
            ))}
        </div>
      </section>
      
      {/* 5. Key Features / Deep Dive Image */}
      <section className="deep-dive-section">
          <div className="deep-dive-content">
            <h2>Key Features Implemented</h2>
            <ul>
                {project.features.map((feature, index) => (
                    <li key={index}><i className="fa-solid fa-check-circle"></i> {feature}</li>
                ))}
            </ul>
          </div>
          <img src={project.detailImage} alt="Detailed project view" className="project-detail-image"/>
      </section>

      {/* 6. Results and Impact */}
      <section className="results-section">
          <h2>Results and Impact</h2>
          <div className="results-grid">
              {project.results.map((result, index) => (
                  <div key={index} className="result-card">
                      <p className="result-value">{result.value}</p>
                      <p className="result-metric">{result.metric}</p>
                  </div>
              ))}
          </div>
      </section>
      
      {/* 7. Footer CTA (FIXED to scroll to contact section on home page) */}
      <section className="project-detail-cta">
        <h2>Like What You See?</h2>
        <p>Let's collaborate on your next big idea!</p>
        
        {/* Replaced <Link> with <div> and onClick handler */}
        <div 
          className="btn btn--primary"
          onClick={() => handleContactClick('contact')} 
          role="button" 
          tabIndex="0"
        >
          <span className='btn__name'>Get In Touch</span>
          <div className="btn-icon">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetailPage;
import React from 'react';
import './PortfolioSection.css'; // Link to the CSS file
import { Link } from 'react-router-dom';

const projectsData = [
 {
  id: 1, // ⭐ Added ID for routing
  title: 'E-Commerce Platform Redesign',
  category: 'UX/UI & Front-end',
  image: 'ecommerce-project-thumbnail.jpg', // Replace with actual image path
 },
 {
  id: 2, // ⭐ Added ID for routing
  title: 'Real-Time Chat Application',
  category: 'Full Stack Development',
  image: 'chat-app-project-thumbnail.jpg',
 },
 {
  id: 3, // ⭐ Added ID for routing
  title: 'Personal Finance Tracker API',
  category: 'Back-end & Database',
  image: 'finance-api-project-thumbnail.jpg',
 },
 {
  id: 4, // ⭐ Added ID for routing
  title: 'Interactive Data Dashboard',
  category: 'Data Visualization & React',
  image: 'dashboard-project-thumbnail.jpg',
 },
];

const PortfolioSection = () => {
 return (
  <section id='portfolio' className="portfolio-section">
   <p className="portfolio-subtitle subtitle">— <span>My Creative Work</span></p>
   <h2 className="portfolio-title title">
    Check Out My <span>Latest Projects</span>
   </h2>
   <div className="projects-grid">
    {projectsData.map((project) => (
     <Link 
      // Correct Dynamic Route: /portfolio/1, /portfolio/2, etc.
      to={`/portfolio/${project.id}`} 
      className="project-card-link"
      key={project.id}
     >
      <div className="project-card">
       <div className="project-image-wrapper">
        <img 
         src={project.image} 
         alt={project.title} 
         className="project-image" 
        />
       </div>
       <div className="project-info">
        <span className="project-category">{project.category}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <div className="view-project-btn">
          View Project &rarr;
        </div>
       </div>
      </div>
     </Link>
    ))}
   </div>
   <Link to="/portfolio" className="btn btn--primary projects-cta">
     <span className='btn__name'>View All Projects</span>
     <div className="btn-icon">
      <i className="fa-solid fa-arrow-right"></i>
     </div>
    </Link>
  </section>
 );
};

export default PortfolioSection;
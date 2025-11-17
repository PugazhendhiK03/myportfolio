import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioPage.css'; // Link to the CSS file for this page
import TaxeraThumbnail from '../../assets/images/taxera-site.png';

// This data can be fetched from an API in a real application
const allProjectsData = [
{
 id: 1,
 title: 'Enhance the Surveillance System Using Face Recognition and Object Detection',
 category: 'Full Stack & AI/ML Integration (React.js, Python)',
 description: 'Built a security system with React.js frontend and Python backend, integrating face recognition and object detection to identify individuals and track missing items.',
 imageUrl: 'https://via.placeholder.com/400x250/2e4330/ffffff?text=Surveillance+System', 
},
{
 id: 2,
 title: 'Courier Management System',
 category: 'Full Stack Development (HTML, CSS, JavaScript, MySQL)',
 description: 'Developed a full-stack application using HTML, CSS, JavaScript, and MySQL to enable real-time package tracking and customer information management.',
 imageUrl: 'https://via.placeholder.com/400x250/f8a51b/2d2d2d?text=Courier+Manager',
},
{
 id: 3,
 title: 'Tax Era - Freelance Website',
 category: 'Freelance Frontend Development (React.js, CSS)',
 description: 'Designed and developed a fully responsive and modern website using React.js and CSS for a local tax consultation firm, including essential features like contact forms and testimonial sections.',
 imageUrl: TaxeraThumbnail,
},
];

const PortfolioPage = () => {
return (
 <div className="portfolio-page-container">
 {/* Hero Section */}
 <section className="portfolio-hero">
  <div className="portfolio-hero-content">
  <p className="subtitle">— <span>My Extensive Work</span></p>
  <h1 className="portfolio-title">All My <span>Projects</span></h1>
  <p className="hero-description">
   Explore a deeper dive into my diverse range of projects,
   showcasing my expertise in front-end, back-end, and full-stack development.
  </p>
  </div>
 </section>

 {/* Projects Grid Section */}
 <section className="all-projects-grid-section">
  <div className="projects-grid-wrapper">
  {allProjectsData.map((project) => (
   <Link 
   to={`/portfolio/${project.id}`} 
   className="project-card-link"
   key={project.id}
   >
   <div className="project-card-full">
    <div className="project-image-full-wrapper">
    <img
     src={project.imageUrl}
     alt={project.title}
     className="project-image-full"
    />
    </div>
    <div className="project-info-full">
    <span className="project-category-full">{project.category}</span>
    <h3 className="project-card-title-full">{project.title}</h3>
    <p className="project-description-full">{project.description}</p>
    <span className="view-project-btn-full">
     View Project &rarr;
    </span>
    </div>
   </div>
   </Link>
  ))}
  </div>
 </section>

 {/* Optional: Call to action for contact */}
 <section className="portfolio-cta">
  <h2>Ready to Start Your Project?</h2>
  <p>Let's build something amazing together. Reach out for a consultation!</p>
  <Link to="/contact" className="btn btn--primary">
  <span className='btn__name'>Contact Me</span>
  <div className="btn-icon">
   <i className="fa-solid fa-arrow-right"></i>
  </div>
  </Link>
 </section>
 </div>
);
};

export default PortfolioPage;
import React from 'react';
import './PortfolioSection.css'; // Link to the CSS file
import { Link } from 'react-router-dom';
import TaxeraThumbnail from '../../../assets/images/taxera-site.png';

const projectsData = [
{
 id: 1, // ⭐ Added ID for routing
 title: 'Enhance the Surveillance System Using Face Recognition and Object Detection', // [cite: 28]
 category: 'Full Stack & AI/ML Integration (React.js, Python)', // [cite: 29]
 // Note: Replace 'image-path.jpg' with the actual path to the project's thumbnail image.
 image: 'surveillance-system-project-thumbnail.jpg', 
 description: 'Built a security system with React.js frontend and Python backend. Integrated face recognition and object detection to identify individuals and track missing items. Developed a UI for reviewing specific timestamps with snapshot capabilities.', // [cite: 29, 30, 31]
},
{
 id: 2, // ⭐ Added ID for routing
 title: 'Courier Management System', // [cite: 32]
 category: 'Full Stack Web Development (HTML, CSS, JavaScript, MySQL)', // [cite: 33]
 // Note: Replace 'image-path.jpg' with the actual path to the project's thumbnail image.
 image: 'courier-management-project-thumbnail.jpg',
 description: 'Developed a full-stack application using HTML, CSS, JavaScript, and MySQL. Enabled real-time package tracking and customer information management. Designed an intuitive interface for courier operations.', // [cite: 33, 34, 35]
},
{
 id: 3, // ⭐ Added ID for routing
 title: 'Tax Era - Freelance Website', // [cite: 36]
 category: 'Freelance Frontend Development (React.js, CSS)', // [cite: 37]
 // Note: Replace 'image-path.jpg' with the actual path to the project's thumbnail image.
 image: TaxeraThumbnail,
 description: 'Designed and developed a fully responsive and modern website using React.js and CSS for a local tax consultation firm. Demonstrated leadership and clear communication by working independently and meeting client expectations. Integrated essential features including service listings, contact forms, and client testimonial sections.', // [cite: 37, 38, 39]
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
import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioPage.css'; // Link to the CSS file for this page

// This data can be fetched from an API in a real application
const allProjectsData = [
 {
  id: 1,
  title: 'E-Commerce Platform Redesign',
  category: 'UX/UI & Front-end',
  description: 'Revamped the user interface and experience for a leading online retail platform, focusing on mobile responsiveness and conversion rate optimization.',
  imageUrl: 'https://via.placeholder.com/400x250/2e4330/ffffff?text=E-commerce+Redesign', 
 },
 {
  id: 2,
  title: 'Real-Time Chat Application',
  category: 'Full Stack Development',
  description: 'Developed a scalable real-time chat application with user authentication, private messaging, and group chat features using React and Node.js.',
  imageUrl: 'https://via.placeholder.com/400x250/f8a51b/2d2d2d?text=Chat+App',
 },
 {
  id: 3,
  title: 'Personal Finance Tracker API',
  category: 'Back-end & Database',
  description: 'Designed and implemented a robust RESTful API for tracking personal finances, including transactions, budgets, and categorization, with secure authentication.',
  imageUrl: 'https://via.placeholder.com/400x250/2e4330/ffffff?text=Finance+API',
 },
 {
  id: 4,
  title: 'Interactive Data Dashboard',
  category: 'Data Visualization & React',
  description: 'Built a dynamic and interactive data visualization dashboard for business intelligence, allowing users to filter and analyze complex datasets in real-time.',
  imageUrl: 'https://via.placeholder.com/400x250/f8a51b/2d2d2d?text=Data+Dashboard', 
 },
 {
  id: 5,
  title: 'Portfolio Website Development',
  category: 'Front-end Development',
  description: 'Created a personal portfolio website to showcase projects, skills, and contact information, optimized for performance and SEO.',
  imageUrl: 'https://via.placeholder.com/400x250/2e4330/ffffff?text=Portfolio+Site', 
 },
 {
  id: 6,
  title: 'Mobile Game Prototype',
  category: 'Game Development',
  description: 'Developed a prototype for a casual mobile puzzle game, focusing on engaging gameplay mechanics and intuitive user experience.',
  imageUrl: 'https://via.placeholder.com/400x250/f8a51b/2d2d2d?text=Mobile+Game', 
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
      showcasing my expertise in UX/UI, front-end, back-end, and full-stack development.
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
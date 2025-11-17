import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ProjectDetailPage.css'; 
import TaxeraThumbnail from '../../assets/images/taxera-site.png';

// Mock data (This would typically come from an API call or a large JSON file)
const mockProjectDetails = [
 {
  id: 1,
  title: 'Enhance the Surveillance System Using Face Recognition and Object Detection',
  category: 'Full Stack & AI/ML Integration (React.js, Python)',
  date: '2024 Final Year Project (Placeholder)',
  overview: 'A security system integrating a **React.js** frontend with a **Python** backend to implement real-time **face recognition** and **object detection** for enhanced surveillance. The system allows users to review specific timestamps.',
  problem: 'The need for a robust and intelligent security system capable of real-time identification of individuals and tracking of missing items using advanced computer vision techniques.',
  solution: 'Developed a full-stack solution. The Python backend handles the core object detection and face recognition logic, while the React.js frontend provides a user interface for reviewing specific timestamps and taking snapshots.',
  technologies: ['React.js', 'Python', 'Face Recognition (CV)', 'Object Detection (CV)', 'Snapshots/Media Handling'],
  features: ['Face Recognition', 'Object Detection', 'Snapshot Capabilities', 'UI for Timestamp Review', 'React Frontend', 'Python Backend'],
  results: [
   { metric: 'Project Status', value: 'Complete Prototype' },
   { metric: 'Core Functionality', value: 'Successful Integration' },
   { metric: 'Accuracy', value: 'Requires Tuning (Placeholder)' },
  ],
  liveLink: '#', // Placeholder
  githubLink: 'https://github.com/pugazhendhi/surveillance-system-placeholder', // Placeholder
  mainImage: 'https://via.placeholder.com/1200x600/2e4330/ffffff?text=Surveillance+System+Main+View',
  detailImage: 'https://via.placeholder.com/800x450/f8a51b/2d2d2d?text=Face+Recognition+Showcase',
 },
 {
  id: 2,
  title: 'Courier Management System',
  category: 'Full Stack Web Development (HTML, CSS, JavaScript, MySQL)',
  date: 'Academic Project (Placeholder)',
  overview: 'A full-stack application designed to streamline courier operations by managing customer information and enabling **real-time package tracking**. Built using **HTML**, **CSS**, **JavaScript**, and **MySQL**.',
  problem: 'Addressing the inefficiency in tracking packages and managing customer data with a non-digital or outdated system, necessitating a real-time, centralized platform.',
  solution: 'Developed a comprehensive full-stack application that enables real-time package tracking and customer information management through an intuitive interface for courier operations.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  features: ['Real-Time Package Tracking', 'Customer Information Management', 'Intuitive Interface', 'Full-Stack Implementation', 'Data Persistence (MySQL)'],
  results: [
   { metric: 'Data Management', value: 'Efficient Data Flow' },
   { metric: 'Core Functionality', value: 'Fully Functional Application' },
   { metric: 'User Interface', value: 'Intuitive Design' },
  ],
  liveLink: '#', // Placeholder
  githubLink: 'https://github.com/pugazhendhi/courier-management-placeholder', // Placeholder
  mainImage: 'https://via.placeholder.com/1200x600/f8a51b/2d2d2d?text=Courier+System+Dashboard',
  detailImage: 'https://via.placeholder.com/800x450/2e4330/ffffff?text=Tracking+Map+View',
 },
 {
  id: 3,
  title: 'Tax Era - Freelance Website',
  category: 'Freelance Frontend Development (React.js, CSS)',
  date: 'Freelance Project (Placeholder)',
  overview: 'A freelance project involving the design and development of a **fully responsive** and modern website for a local tax consultation firm using **React.js** and **CSS**.',
  problem: 'The client (a local tax consultation firm) required a modern, professional online presence to showcase their services and provide contact options.',
  solution: 'Built a visually modern and responsive website, demonstrating leadership and clear communication throughout the independent development process. Essential features including service listings, contact forms, and client testimonial sections were integrated.',
  technologies: ['React.js', 'CSS', 'Responsive Design', 'Client Communication'],
  features: ['Fully Responsive Design', 'Service Listings', 'Contact Forms (Lead Capture)', 'Client Testimonial Section', 'Modern UI/UX'],
  results: [
   { metric: 'Project Delivery', value: 'Client Expectations Met' },
   { metric: 'Design Quality', value: 'Modern & Responsive' },
   { metric: 'Independent Work', value: 'Demonstrated Leadership' },
  ],
  liveLink: '#', // Placeholder
  githubLink: 'https://github.com/pugazhendhi/tax-era-placeholder', // Placeholder
  mainImage: TaxeraThumbnail,
  detailImage: 'https://via.placeholder.com/800x450/f8a51b/2d2d2d?text=Testimonial+Section+Screenshot',
 },
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
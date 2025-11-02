import React from 'react';
import './Services.css';
import { FaLaptopCode, FaMobileAlt, FaCode } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="service-card">
    <div className="service-icon-container">
      <Icon className="service-icon" />
    </div>
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
    <a href="/services" className="learn-more">
      Learn more →
    </a>
  </div>
);

const Services = () => {
  const servicesData = [
    {
      icon: FaLaptopCode, // Placeholder icon for UI/UX Design
      title: 'UI/UX Design',
      // Actual content for UI/UX Design
      description: 'I craft intuitive and engaging user interfaces (UI) and ensure a seamless user experience (UX) across all digital products.',
    },
    {
      icon: FaMobileAlt, // Placeholder icon for Application Design
      title: 'Application Design',
      // Actual content for Application Design
      description: 'Designing beautiful and functional mobile and desktop applications.',
    },
    {
      icon: FaCode, // Placeholder icon for Website Design
      title: 'Website Design',
      // Actual content for Website Design
      description: 'Building modern, responsive, and high-performance websites from scratch.',
    },
  ];

  return (
    <section id='services' className="services-section">
      <div className="services-header">
        <div className="title-group">
          <p className="subtitle">— <span>Services</span></p>
          <h2 className="section-title"><span>Services</span> I Provide</h2>
        </div>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index} 
            icon={service.icon} 
            title={service.title} 
            description={service.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
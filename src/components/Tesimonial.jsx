// Testimonial.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Testimonial.css';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechSolutions",
      content: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills helped us launch our product ahead of schedule.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager, InnovateCo",
      content: "The web application delivered exceeded our expectations. Clean code, responsive design, and excellent communication throughout the project.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, BrandVision",
      content: "As a startup, we needed someone who could understand our vision quickly. This developer nailed it on the first try and became our go-to for all tech needs.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonial" id="testimonials">
      <div className="testimonial-container">
        <div className="section-header">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">What people say about my work</p>
        </div>

        <div className="testimonial-carousel">
          <button className="carousel-btn prev" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div 
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                key={testimonial.id}
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < testimonial.rating ? "star filled" : "star"} 
                    />
                  ))}
                </div>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
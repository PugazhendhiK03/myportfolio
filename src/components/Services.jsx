// Services.jsx
import React from 'react';
import '../styles/Services.css';
import { FaPalette, FaCode, FaMobileAlt, FaReact } from 'react-icons/fa';
import { SiJavascript, SiNodedotjs } from 'react-icons/si';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="  services-container">
        <h2 className="section-title">My Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaPalette />
            </div>
            <h3>Modern Web Design</h3>
            <p>
              I create clean, responsive designs that work perfectly across all devices. 
              Focusing on user experience and modern aesthetics, I build interfaces that 
              are both beautiful and functional using HTML5, CSS3, and design principles.
            </p>
            <div className="tech-tags">
              <span><FaPalette /> Figma</span>
              {/* <span><FaPalette /> Adobe XD</span> */}
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <FaCode />
            </div>
            <h3>Web Development</h3>
            <p>
              Building fast, responsive websites with modern frameworks. 
              I specialize in React.js for dynamic frontends and Node.js for backend services. 
              Every site is optimized for performance and SEO.
            </p>
            <div className="tech-tags">
              <span><FaReact /> React</span>
              <span><SiJavascript /> JavaScript</span>
              <span><SiNodedotjs /> Node.js</span>
            </div>
          </div>
          
          {/* <div className="service-card">
            <div className="service-icon">
              <FaMobileAlt />
            </div>
            <h3>App Development</h3>
            <p>
              Developing cross-platform mobile applications that provide native-like 
              experiences. Using React Native, I can build apps for both iOS and Android 
              from a single codebase, saving you time and money.
            </p>
            <div className="tech-tags">
              <span><FaMobileAlt /> React Native</span>
              <span><FaMobileAlt /> Progressive Web Apps</span>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Services;
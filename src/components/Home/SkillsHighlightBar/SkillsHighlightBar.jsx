import React from 'react';

// ==========================================================
// 1. CSS Styles (GlobalStyles Component)
// ==========================================================
const GlobalStyles = () => (
  <style>
    {`
      /* Global Variable Definitions */
      :root {
        --primary-color: #2e4330; /* Dark Green */
        --secondary-color: #f8a51b; /* Orange/Gold Accent */
        --background-color: #ffffff; /* White (used for text on orange) */
        --font-family: 'Poppins', sans-serif;
        --marquee-speed: 40s; /* Speed of the scrolling text */
        --slope-height: 25px; /* Standard height for the slanted areas (50px / 2 = 25px) */
      }

      body {
        margin: 0;
        font-family: var(--font-family);
      }

      /* ==========================================================
         SKILLS HIGHLIGHT BAR STYLES (MARQUEE)
         ========================================================== */

      .skills-highlight-section {
        position: relative;
        width: 100%;
        overflow: hidden; 
        /* Padding to make space for both the top and bottom slopes */
        padding-top: var(--slope-height); 
        padding-bottom: var(--slope-height);
        margin-top: 0; 
      }
      
      .skills-highlight-bar {
        background-color: var(--secondary-color); 
        min-height: 80px; 
        position: relative;
        z-index: 2; 
        padding: 0; 
        overflow: hidden; /* CRUCIAL: Hides content outside the view */
        display: flex;
        align-items: center;
      }
      
      /* Container for the scrolling content (Marquee) */
      .marquee-track {
        display: flex;
        white-space: nowrap;
        animation: marquee var(--marquee-speed) linear infinite;
      }

      .marquee-track:hover {
        animation-play-state: paused; /* Pause on hover */
      }

      /* Keyframe animation for continuous scrolling loop (right to left) */
      @keyframes marquee {
        /* Moves exactly one content block width (50% of the track) */
        0% { transform: translateX(0%); } 
        100% { transform: translateX(-50%); } 
      }
      
      .banner__content {
        display: inline-flex;
        align-items: center;
        gap: 30px; 
        padding: 20px 20px; 
        color: var(--background-color); 
        flex-shrink: 0; /* Ensures the content block does not compress */
      }

      .skill-item {
        color: var(--background-color);
        font-size: 18px;
        font-weight: 700;
        white-space: nowrap;
        letter-spacing: 0.05em;
      }
      
      .separator {
        font-size: 24px;
        line-height: 1;
        color: rgba(255, 255, 255, 0.7); 
      }

      /* --- Slanted Bottom Effect (Common Base) --- */
      .skills-highlight-bottom-slope {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: var(--slope-height); 
        background-color: var(--primary-color); /* Dark green background */
        z-index: 1; 
      }
      
      /* First Slope (Bottom) - Slants down-left */
      .skills-highlight-bottom-slope:not(.slope2) {
          transform: skewY(-4deg); 
          transform-origin: bottom left; 
      }

      /* Second Slope (Top) - Uses .slope2 class, now slants up-left (peaks left) */
      .skills-highlight-bottom-slope.slope2 {
          top: 0;
          bottom: auto; /* Overrides bottom: 0 from base class */
          transform: skewY(-4deg); 
          transform-origin: top right; 
      }


      /* Responsive Slant Adjustments */
      @media (max-width: 768px) {
        /* 40px / 2 = 20px */
        .skills-highlight-section { padding-top: 20px; padding-bottom: 20px; }
        :root { --slope-height: 20px; }
      }
      @media (max-width: 480px) {
        .skills-highlight-bottom-slope:not(.slope2) { transform: skewY(-1deg); }
        .skills-highlight-bottom-slope.slope2 { transform: skewY(-1deg); }
        /* 30px / 2 = 15px */
        .skills-highlight-section { padding-top: 15px; padding-bottom: 15px; }
        :root { --slope-height: 15px; }
      }
    `}
  </style>
);

// ==========================================================
// 2. Component Logic
// ==========================================================

const skills = [
  'App Design',
  'Website Design',
  'Dashboard',
  'Wireframe',
];

// Content block (repeated twice for the marquee effect)
const MarqueeContent = () => (
  <div className="banner__content">
    {skills.map((skill, index) => (
      <React.Fragment key={index}>
        <span className="skill-item">{skill}</span>
        {/* Only show separator if it's not the last item */}
        {index < skills.length - 1 && (
          <span className="separator">✳</span>
        )}
      </React.Fragment>
    ))}
  </div>
);

// ==========================================================
// SKILLS HIGHLIGHT BAR COMPONENT (Updated)
// ==========================================================
const SkillsHighlightBar = () => {
  return (
    <>
      <GlobalStyles />
      <section className="skills-highlight-section">
        
        {/* Top Slope (now peaks left) */}
        <div className="skills-highlight-bottom-slope slope2"></div>

        {/* Main Marquee Bar */}
        <div className="skills-highlight-bar">
          <div className="marquee-track">
            {/* Content is duplicated for seamless scrolling */}
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>
        
        {/* Bottom Slope (peaks right) */}
        <div className="skills-highlight-bottom-slope"></div>
      </section>
    </>
  );
};

export default SkillsHighlightBar;
import React from 'react';
import './ToolsSkillsSection.css'; // Make sure to update the CSS file name

const ToolsSkillsSection = () => {
  // New Tool Data
  const tools = [
    { name: 'VS Code', icon: 'vscode-icon.png', percentage: 98 },
    { name: 'Git', icon: 'git-icon.png', percentage: 95 },
    { name: 'GitHub', icon: 'github-icon.png', percentage: 92 },
    { name: 'Postman', icon: 'postman-icon.png', percentage: 90 },
    { name: 'Figma', icon: 'figma-icon.png', percentage: 88 },
  ];

  // New Skill Data
  const skills = [
    { name: 'HTML', icon: 'html-icon.png', percentage: 99 },
    { name: 'CSS', icon: 'css-icon.png', percentage: 97 },
    { name: 'JavaScript', icon: 'javascript-icon.png', percentage: 95 },
    { name: 'ReactJS', icon: 'reactjs-icon.png', percentage: 93 },
    { name: 'Python', icon: 'python-icon.png', percentage: 90 },
    { name: 'Node.js', icon: 'node-icon.png', percentage: 88 },
    { name: 'MongoDB', icon: 'mongodb-icon.png', percentage: 85 },
  ];

  const renderItems = (items) => (
    <div className="items-grid">
      {items.map((item, index) => (
        <div className="item-card" key={index}>
          <div className="item-icon-wrapper">
            {/* Replace with actual image imports or SVG components */}
            <img src={item.icon} alt={`${item.name} icon`} className="item-icon" />
          </div>
          <p className="item-percentage">{item.percentage}%</p>
          <p className="item-name">{item.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="tools-skills-section">
      <p className="subtitle">— <span>My Stack</span></p>
      <h2 className="title">
        The <span>Tools</span> and <span>Skills</span> <br />
        Powering My Development
      </h2>

      <div className="section-container">
        <h3 className="section-heading">Favorite Tools</h3>
        {renderItems(tools)}
      </div>

      <div className="section-container">
        <h3 className="section-heading">Core Skills</h3>
        {renderItems(skills)}
      </div>
      
    </section>
  );
};

export default ToolsSkillsSection;
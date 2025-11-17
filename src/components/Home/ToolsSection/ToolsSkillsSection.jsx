import React from 'react';
import './ToolsSkillsSection.css'; // Make sure to update the CSS file name
import VScode from '../../../assets/images/vscode.png'
import GitIcon from '../../../assets/images/git.png'
import GitHubIcon from '../../../assets/images/github.png'
import PostmanIcon from '../../../assets/images/postman-icon.svg'
import FigmaIcon from '../../../assets/images/figma.webp'

import HTMLIcon from '../../../assets/images/html.png'
import CSSIcon from '../../../assets/images/css.webp'
import JavaScriptIcon from '../../../assets/images/js.png'
import ReactJSIcon from '../../../assets/images/reactjs.webp'
import PythonIcon from '../../../assets/images/python.webp'
import NodeIcon from '../../../assets/images/node.webp'
import MongoDBIcon from '../../../assets/images/mongo.png'


const ToolsSkillsSection = () => {
  // New Tool Data
  const tools = [
    { name: 'VS Code', icon: VScode, percentage: 98 },
    { name: 'Git', icon: GitIcon, percentage: 95 },
    { name: 'GitHub', icon: GitHubIcon, percentage: 92 },
    { name: 'Postman', icon: PostmanIcon, percentage: 90 },
    { name: 'Figma', icon: FigmaIcon, percentage: 88 },
  ];

  // New Skill Data
  const skills = [
    { name: 'HTML', icon: HTMLIcon, percentage: 99 },
    { name: 'CSS', icon: CSSIcon, percentage: 97 },
    { name: 'JavaScript', icon: JavaScriptIcon, percentage: 95 },
    { name: 'ReactJS', icon: ReactJSIcon, percentage: 93 },
    { name: 'Python', icon: PythonIcon, percentage: 90 },
    { name: 'Node.js', icon: NodeIcon, percentage: 88 },
    { name: 'MongoDB', icon: MongoDBIcon, percentage: 85 },
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
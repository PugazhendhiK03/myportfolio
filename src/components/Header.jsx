import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Detects URL changes

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Delay ensures DOM is ready
      }
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">KP</div>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className='nav-list'>
            <li>
              <Link to='/' onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to='/#project-section' onClick={() => setIsMenuOpen(false)}>My Projects</Link>
            </li>
            <li>
              <Link to='/#contact' onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>

        <button className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </button>
      </div>
    </header>
  );
};

export default Header;

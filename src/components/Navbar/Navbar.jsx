// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to handle navigation and smooth scrolling to a section by its ID
    const handleScrollToSection = (sectionId) => {
        // 1. Navigate to the root path with the specified hash.
        // This is crucial for returning to the home page from a deep route (/portfolio/1)
        navigate(`/#${sectionId}`); 
        
        setMenuOpen(false); // Close mobile menu

        // 2. Delay the scroll action slightly to allow navigation to complete
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                // Scroll smoothly to the target section
                element.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start'
                });
            } else {
                // Fallback: If section ID is not found (e.g., if 'home' is clicked 
                // and the main component ID is missing), scroll to the very top.
                window.scrollTo({ 
                    top: 0, 
                    behavior: 'smooth' 
                });
            }
        }, 100); 
    };

    return (
        <header className="header">
            {/* Logo Section: Clicks home and scrolls to the top */}
            <div className="logo" onClick={() => handleScrollToSection('home')}> 
                <div className="logo__img">P</div>
                <span className="logo__txt">Pugazh.</span>
            </div>

            {/* Navbar Section */}
            <nav className="navbar">
                {/* Menu Icon for Mobile */}
                <div className="menu__icon" onClick={toggleMenu}>
                    <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>

                {/* Navigation Links */}
                <ul className={`nav__list ${menuOpen ? "active" : ""}`}>
                    <li className="nav__item">
                        <a className="nav__link" onClick={() => handleScrollToSection('home')}>Home</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" onClick={() => handleScrollToSection('about')}>About</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" onClick={() => handleScrollToSection('services')}>Services</a>
                    </li>
                    <li className="nav__item">
                        {/* Note: This navigates to the Portfolio section on the HOME page */}
                        <a className="nav__link" onClick={() => handleScrollToSection('portfolio-home')}>Portfolio</a> 
                    </li>
                </ul>
            </nav>

            {/* Call-to-Action Button (Contact) */}
            <div className="nav__cta" onClick={() => handleScrollToSection('contact')}>
                Contact Me
            </div>
        </header>
    );
};

export default Navbar;
import React from 'react';
import { useNavigate } from 'react-router-dom'; // <--- Import useNavigate for navigation
import './Hero.css';
import Img from '../../../assets/images/image.png' // Assuming this is the main profile image

const Hero = () => {
    const navigate = useNavigate(); // Initialize navigate hook

    // 1. Function for smooth scrolling
    const handleScrollToSection = (sectionId) => {
        // Navigate to the root path with the specified hash.
        navigate(`/#${sectionId}`);
        
        // Delay the scroll action slightly
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start'
                });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100); 
    };

    // 2. Function to open WhatsApp chat
    const handleHireMeClick = () => {
        // Replace 'YOUR_PHONE_NUMBER' with your full phone number (including country code, without + or spaces)
        const phoneNumber = '917339541974'; 
        
        // Customize the pre-filled message (URL-encoded)
        const message = encodeURIComponent("Hello Pugazhendhi, I saw your portfolio and I would like to discuss a project. Can we connect?");
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        // Open the link in a new tab
        window.open(whatsappUrl, '_blank');
    };

    return (
        // The Home component needs the 'home' ID for the Navbar to scroll to the very top
        <section id='home' className="hero"> 
            <div className="hero__content">
                <div className="hero__left">
                    {/* "Hello There!" box */}
                    <div className="hero__greeting-box">
                        Hello There!
                    </div>

                    {/* Main Title */}
                    <h1 className="hero__title">
                        I'm <span className="hero__name">Pugazhendhi</span>,
                        <br />
                        Frontend Developer
                        <br />
                        Based in India.
                    </h1>

                    {/* Description */}
                    <p className="hero__description">
                        Passionate Frontend Developer ready to bring your digital vision to life. I successfully launched my first business client's website and am eager for new projects.
                    </p>

                    {/* Action Buttons */}
                    <div className="hero__actions">
                        {/* 1. View My Portfolio Button (Scrolls to 'portfolio-home' section) */}
                        <a 
                            className="btn btn--primary"
                            onClick={() => handleScrollToSection('portfolio-home')} 
                            role="button"
                        >
                            <span className='btn__name'>View My Portfolio</span>
                            <div className="btn-icon">
                                <i className="fa-solid fa-play"></i>
                            </div>
                        </a>
                        
                        {/* 2. Hire Me Button (Opens WhatsApp) */}
                        <a 
                            className="btn btn--secondary"
                            onClick={handleHireMeClick}
                            role="button"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
                <div className="hero__right">
                    <img src={Img} alt="Pugazhendhi - Frontend Developer" className='hero__image' />
                </div>
            </div>
        </section>
    );
}

export default Hero;
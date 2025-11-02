// src/pages/Home/Home.jsx
import React, { useEffect } from 'react' 
import Hero from '../../components/Home/Hero/Hero'
import Services from '../../components/Home/Services/Services'
import HeroAbout from '../../components/Home/HeroAbout/HeroAbout'
import ToolsSection from '../../components/Home/ToolsSection/ToolsSkillsSection'
import PortfolioSection from '../../components/Home/PortfolioSection/PortfolioSection'
import ContactSection from '../../components/Home/ContactSection/ContactSection'
import SkillsHighlightBar from '../../components/Home/SkillsHighlightBar/SkillsHighlightBar'

const Home = () => {
    // 🚀 CRUCIAL CHANGE: Logic to scroll and remove the hash
    useEffect(() => {
        const hash = window.location.hash.substring(1); // Get the section ID without the '#'
        
        if (hash) {
            // 1. Scroll to the element
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // 2. Remove the hash from the URL to "hide" it 
            // The browser history remains clean.
            window.history.replaceState(null, null, ' '); 
        } else {
            // Default: Scroll to the top of the page instantly if no hash is present
            window.scrollTo({ 
                top: 0, 
                behavior: 'instant' 
            });
        }
        
        // This handler ensures scrolling works even if the hash changes manually
        const handleHashChange = () => {
            const newHash = window.location.hash.substring(1);
            if (newHash) {
                const element = document.getElementById(newHash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    window.history.replaceState(null, null, ' ');
                }
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []); 

    return (
        <main className="home">
            {/* Assign IDs for Navbar scrolling targets */}
            <section id="home"><Hero /></section>
            <SkillsHighlightBar />
            <section id="services"><Services /></section>
            <section id="about"><HeroAbout /></section>
            <ToolsSection />
            <section id="portfolio-home"><PortfolioSection /></section>
            <section id="contact"><ContactSection /></section>
        </main>
    )
}

export default Home
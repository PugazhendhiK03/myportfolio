import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
    // IMPORTANT: Replace this with your actual Formspree endpoint URL
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrgnygog';

    // 1. State for form data (Controlled Inputs)
    const [formData, setFormData] = useState({
        name: '',
        email: '', // Note: We will use 'email' as the input name
        message: ''
    });

    // 2. State for submission status
    const [status, setStatus] = useState(''); // '', 'sending', 'SUCCESS', 'ERROR'

    // Handles changes to all input fields
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear status when the user starts typing again
        if (status) setStatus('');
    };

    // 3. Handles form submission via AJAX (fetch)
    const handleSubmit = async (e) => {
        e.preventDefault(); // <-- CRUCIAL: Prevents default browser redirect

        setStatus('sending'); // Show loading state
        
        try {
            // Use new FormData(e.target) to easily capture all form fields
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: new FormData(e.target), 
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('SUCCESS');
                // Clear the form fields upon successful submission
                setFormData({ name: '', email: '', message: '' });
            } else {
                // Formspree error (e.g., failed validation, rate limit)
                setStatus('ERROR');
            }
        } catch (error) {
            // Network error
            setStatus('ERROR');
            console.error('Submission error:', error);
        }
    };

    // Helper function to render the status message
    const renderStatusMessage = () => {
        switch (status) {
            case 'sending':
                return <p className="form-status-message loading">Sending message...</p>;
            case 'SUCCESS':
                return <p className="form-status-message success">🎉 Message sent successfully! I'll be in touch soon.</p>;
            case 'ERROR':
                return <p className="form-status-message error">❌ Oops! An error occurred. Please try again.</p>;
            default:
                return null;
        }
    };

    return (
        <section id='contact' className="contact-section">
            <div className="contact-main-container">

                {/* Left Column: Text and Details (omitted for brevity, content is unchanged) */}
                <div className="contact-text-and-details">
                    <p className="contact-subtitle">— <span>Get In Touch</span></p>
                    <h2 className="contact-title">
                    Ready to <span>Start a Project?</span>
                    </h2>
                    <p className="contact-description">
                    Whether you have a question, a project proposal, or just want to say hi, 
                    my inbox is always open. I'll get back to you as soon as possible.
                    </p>

                    {/* Contact Details Section (unchanged) */}
                    <div className="contact-details">
                    
                    <div className="contact-info-item">
                        <i className="fa-solid fa-location-dot contact-icon"></i>
                        <div className="info-text">
                        <strong>Location</strong>
                        <span>Tamil Nadu, India</span>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <i className="fa-solid fa-phone-alt contact-icon"></i>
                        <div className="info-text">
                        <strong>Phone</strong>
                        <a href="tel:+917339541974">+91 7339541974</a>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <i className="fa-solid fa-envelope contact-icon"></i>
                        <div className="info-text">
                        <strong>Email</strong>
                        <a href="mailto:pugazhendhikrishna03@gmail.com">pugazhendhikrishna03@gmail.com</a>
                        </div>
                    </div>
                    </div>

                    {/* Social Icons Placeholder (unchanged) */}
                    <div className="social-links-placeholder">
                        <a href="https://www.instagram.com/pugazh_0308?igsh=MW10bjFla21wcXBldw==" aria-label="Instagram">
                            <i className="fa-brands fa-instagram social-icon"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/pugazhendhi2003" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin-in social-icon"></i>
                        </a>
                        <a href="https://github.com/PugazhendhiK03" aria-label="GitHub">
                            <i className="fa-brands fa-github social-icon"></i>
                        </a>
                    </div>
                </div>
                
                {/* Right Column: Form */}
                <div className="contact-form-container">
                    {/* 💡 CHANGE 1: Remove action/method attributes and add onSubmit handler */}
                    <form 
                        className="contact-form" 
                        onSubmit={handleSubmit}
                    >
                    
                        {/* Name Field */}
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="e.g., Jane Doe" 
                                required 
                                value={formData.name}       // Controlled component
                                onChange={handleChange}     // Added handler
                            />
                        </div>

                        {/* Email Field */}
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" // Changed from '_replyto' to 'email' for easier state management
                                placeholder="jane.doe@example.com" 
                                required 
                                value={formData.email}      // Controlled component
                                onChange={handleChange}     // Added handler
                            />
                        </div>

                        {/* Message Field */}
                        <div className="form-group full-width">
                            <label htmlFor="message">Your Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                placeholder="Tell me about your project or inquiry..." 
                                required
                                value={formData.message}    // Controlled component
                                onChange={handleChange}     // Added handler
                            ></textarea>
                        </div>
                        
                        {/* 💡 CHANGE 2: Display status message */}
                        {renderStatusMessage()}

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="btn btn--secondary"
                            disabled={status === 'sending'} // Disable button during submission
                        > 
                            {/* Update button text based on status */}
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
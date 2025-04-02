import React from 'react'
import Intro from '../components/Intro.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import ProjectSection from '../components/ProjectSection.jsx'
import Testimonial from '../components/Tesimonial.jsx'
import Contact from '../components/Contact.jsx'

const Home = () => {
  return (
    <main className="home">
        <Intro/>
        <About/>
        <Services/>
        <section id="project-section">
          <ProjectSection/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
    </main>
  )
}

export default Home
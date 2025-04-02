import React from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projectpage' element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}


export default App

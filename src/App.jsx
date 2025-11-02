import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // adjust path based on your folder structure
import Home from './pages/Home/Home';
import PortfolioPage from './pages/Portfolio/PortfolioPage'; // adjust path based on your folder structure
import Footer from './components/Footer/Footer'; // adjust path based on your folder structure
import ProjectDetailPage from './pages/Portfolio/ProjectDetailPage'; // New import for project details page

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:projectId" element={<ProjectDetailPage />} />
          <Route path='/contact' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

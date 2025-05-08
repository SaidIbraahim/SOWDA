import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ProjectsPage from './pages/ProjectsPage';
import SupportPage from './pages/SupportPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import DonateButton from './components/common/DonateButton';
import ScrollToTop from './components/utils/ScrollToTop';
import { initPerformanceMonitoring } from './utils/performance';
import { initGA } from './utils/analytics';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    initPerformanceMonitoring();
    
    // Initialize Google Analytics
    initGA();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <DonateButton />
      </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

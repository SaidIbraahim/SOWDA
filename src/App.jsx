import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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
  );
}

export default App;

import { Link } from 'react-router-dom';
import sowdaLogo from '../../assets/images/SOWDA Logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src={sowdaLogo} alt="SOWDA Logo" className="h-12 w-auto" />
            <span className="ml-2 text-xl font-bold text-gray-800">SOWDA</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/programs" className="nav-link">Programs</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/support" className="nav-link">Support</Link>
            <Link to="/partners" className="nav-link">Partners</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          
          <button className="md:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
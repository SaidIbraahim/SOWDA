import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import sowdaLogo from '../../assets/images/SOWDA Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Programs', path: '/programs' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Partners', path: '/partners' },
    { title: 'Support Us', path: '/support' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img src={sowdaLogo} alt="SOWDA Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-dark'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-base font-medium px-2 py-1 transition-colors ${
                      isActive
                        ? 'text-primary bg-gray-100 rounded'
                        : 'text-dark hover:text-primary'
                    }`
                  }
                  onClick={closeMenu}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar; 
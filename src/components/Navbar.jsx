import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.jpg'; // Create a separate Logo component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/episodes', label: 'Videos' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/news', label: 'News & Articles' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-primary-600 to-secondary-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={Logo} alt="Logo" className="h-12 w-auto" />

            <div>
              <h1 className="text-2xl font-bold text-white">Gravity Mega Media</h1>
              <p className="text-sm text-gray-200">Creating Digital Experiences</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-yellow-300'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-yellow-300 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 ${
                    isActive(item.path)
                      ? 'text-yellow-300 font-medium'
                      : 'text-white hover:text-gray-200'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-yellow-300">
                <Link
                  to="/admin"
                  className="block bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold text-center mt-4 hover:bg-yellow-600"
                  onClick={() => setIsOpen(false)}
                >
                  Admin Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
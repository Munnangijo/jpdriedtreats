import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="JP Dried Treats Logo" className="h-10 w-auto mr-2" />
            <div>
              <h1 className="font-display font-semibold text-xl sm:text-2xl">
                <span className="text-primary-600">JP</span> 
                <span className={`${isScrolled ? 'text-gray-800' : 'text-white'} transition-colors duration-300`}> Dried Treats</span>
              </h1>
              <div className={`text-xs italic mt-1 ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>Nature Preserved, Taste Delivered</div>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === link.path 
                  ? 'text-primary-600' 
                  : isScrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              Get a Quote
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col px-4 py-4 space-y-4 animate-slide-down">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`font-medium ${location.pathname === link.path ? 'text-primary-600' : 'text-gray-800 hover:text-primary-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors duration-300 w-full text-center"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
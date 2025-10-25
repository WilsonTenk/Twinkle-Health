import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Calendar } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <div className="contact-item">
              <Phone size={12} />
              <span>054 348 3159</span>
            </div>
            <div className="contact-item">
              <MapPin size={12} />
              <span>Accra, Greater Accra, Ghana</span>
            </div>
          </div>
          <div className="top-bar-right">
            <div className="date-item">
              <Calendar size={12} />
              <span>January 17, 2025</span>
            </div>
            <button className="events-btn">
              <Link to="/events" style={{ color: 'inherit', textDecoration: 'none' }}>
                Click Events
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <div className="nav-container">
            <Link to="/" className="logo" onClick={closeMenu}>
              <img src="/Images/logo-thf.png" alt="Twinkle Health Foundation Logo" className="logo-img" />
              <span className="logo-text">TWINKLE</span>
            </Link>

            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/get-involved" 
                  className={`nav-link ${isActive('/get-involved') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Get Involved
                </Link>
              </li>
            </ul>

            <Link to="/contact" className="donate-btn" onClick={closeMenu}>
              Donate
            </Link>

            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;



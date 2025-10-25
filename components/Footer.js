import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/Images/logo-thf.png" alt="Twinkle Health Foundation Logo" className="logo-img" />
              <span>TWINKLE</span>
            </div>
            <p>Transforming lives through accessible healthcare and community empowerment.</p>
            <div className="social-links">
              <a href="https://facebook.com/twinklehealthfoundation" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/twinklehealthfoundation" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/twinklehealthfoundation" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/twinklehealthfoundation" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/get-involved">Get Involved</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#drama">Health Education</Link></li>
              <li><Link to="/services#medical">Medical Services</Link></li>
              <li><Link to="/services#community">Community Support</Link></li>
              <li><Link to="/services#livelihood">Livelihood Development</Link></li>
              <li><Link to="/services#clothing">Clothing Drive</Link></li>
              <li><Link to="/services#focus">Focus Groups</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>054 348 3159</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>059 862 5292</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@twinklehealth.org</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Accra, Greater Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Twinkle Health Foundation. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



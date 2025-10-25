import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Users, Heart } from 'lucide-react';
import './ContactPage.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactMethod: 'email'
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone Numbers',
      details: ['054 348 3159', '059 862 5292'],
      description: 'Call us for immediate assistance or to schedule an appointment'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Address',
      details: ['info@twinklehealth.org'],
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: ['Accra, Greater Accra, Ghana'],
      description: 'Visit our office for in-person consultations and meetings'
    },
    {
      icon: <Clock size={24} />,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
      description: 'Our team is available during these hours for support and assistance'
    }
  ];

  const departments = [
    {
      name: 'General Inquiries',
      email: 'info@twinklehealth.org',
      phone: '054 348 3159',
      description: 'General questions about our programs and services'
    },
    {
      name: 'Medical Services',
      email: 'medical@twinklehealth.org',
      phone: '059 862 5292',
      description: 'Questions about our healthcare services and medical programs'
    },
    {
      name: 'Volunteer Programs',
      email: 'volunteer@twinklehealth.org',
      phone: '054 348 3159',
      description: 'Information about volunteering and community engagement opportunities'
    },
    {
      name: 'Partnerships',
      email: 'partnerships@twinklehealth.org',
      phone: '054 348 3159',
      description: 'Corporate partnerships and collaboration opportunities'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>Get in touch with our team. We're here to help and answer any questions you may have about our programs and services.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info section-padding">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">
                  {info.icon}
                </div>
                <h3>{info.title}</h3>
                <div className="contact-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
                <p className="contact-description">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="contact-form-section section-padding">
        <div className="container">
          <div className="contact-form-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactMethod" className="form-label">Preferred Contact Method</label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="6"
                    required
                  />
                </div>
                
                <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="contact-sidebar">
              <div className="map-container">
                <div className="map-placeholder">
                  <MapPin size={40} />
                  <h3>Our Location</h3>
                  <p>Accra, Greater Accra, Ghana</p>
                </div>
              </div>
              
              <div className="quick-contact">
                <h3>Quick Contact</h3>
                <div className="quick-contact-items">
                  <div className="quick-contact-item">
                    <Phone size={16} />
                    <span>054 348 3159</span>
                  </div>
                  <div className="quick-contact-item">
                    <Mail size={16} />
                    <span>info@twinklehealth.org</span>
                  </div>
                  <div className="quick-contact-item">
                    <MessageSquare size={16} />
                    <span>WhatsApp Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="departments-section section-padding">
        <div className="container">
          <div className="departments-header text-center">
            <h2>Contact by Department</h2>
            <p>Reach out to the specific department that can best assist with your inquiry</p>
          </div>
          
          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div key={index} className="department-card">
                <h3>{dept.name}</h3>
                <p className="department-description">{dept.description}</p>
                <div className="department-contact">
                  <div className="department-contact-item">
                    <Mail size={14} />
                    <span>{dept.email}</span>
                  </div>
                  <div className="department-contact-item">
                    <Phone size={14} />
                    <span>{dept.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="contact-faq-cta section-padding">
        <div className="container">
          <div className="faq-cta-content text-center">
            <div className="faq-cta-icon">
              <MessageSquare size={40} />
            </div>
            <h2>Have Questions?</h2>
            <p>Check out our FAQ section for quick answers to common questions about our programs and services.</p>
            <a href="/faq" className="btn-primary">
              <Users size={16} />
              Visit FAQ
            </a>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="social-section section-padding">
        <div className="container">
          <div className="social-content text-center">
            <h2>Follow Our Journey</h2>
            <p>Stay connected with us on social media for updates, stories, and ways to get involved</p>
            <div className="social-links">
              <a href="https://facebook.com/twinklehealthfoundation" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
              <a href="https://twitter.com/twinklehealthfoundation" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
              <a href="https://instagram.com/twinklehealthfoundation" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="https://linkedin.com/company/twinklehealthfoundation" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <i className="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;



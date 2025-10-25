import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, Target } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Main Headline */}
          <div className="hero-headline">
            <h1 className="hero-title">
              <span className="hero-title-line">Together We Create</span>
              <span className="hero-title-line">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Community members" 
                  className="hero-inline-img left"
                />
                Change
                <img 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Healthcare volunteers" 
                  className="hero-inline-img right"
                />
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <div className="hero-subtext">
            <p>We believe that every small act of healthcare can create a ripple of change. Our mission is to transform communities by providing essential medical services and health education.</p>
          </div>

          {/* CTA Section */}
          <div className="hero-cta">
            <Link to="/get-involved" className="hero-donate-btn">
              <div className="profile-images">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80" 
                  alt="Community member" 
                  className="profile-img"
                />
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80" 
                  alt="Community member" 
                  className="profile-img"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80" 
                  alt="Community member" 
                  className="profile-img"
                />
              </div>
              <span>Donate Now</span>
            </Link>
            <div className="hero-stats">
              <span className="stats-number">200+</span>
              <span className="stats-text">Community Members Served</span>
            </div>
          </div>

          {/* Cards/Stats Section */}
          <div className="hero-cards">
            <div className="hero-card card-1">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Medical volunteers working together"
              />
              <div className="card-overlay">
                <span>VOLUNTEER</span>
              </div>
            </div>
            
            <div className="hero-card card-2">
              <div className="stats-card-content">
                <div className="stats-percentage">70%</div>
                <p>Your donation can make a big difference in someone's life. By giving today, you're helping provide food.</p>
              </div>
            </div>
            
            <div className="hero-card card-3">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Community members with educational materials"
              />
              <div className="card-overlay">
                <span>RELIEF</span>
              </div>
            </div>
            
            <div className="hero-card card-4">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="People organizing medical supplies"
              />
              <div className="card-overlay">
                <span>DONATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-decorations">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`hero-dot-pattern dot-${i + 1}`}></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;



import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Heart, Users, Award } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              We are committed to <span className="highlight">your health goals!</span>
            </h2>
            <p className="about-description">
              Twinkle Health Foundation is dedicated to transforming healthcare accessibility in underserved communities. 
              We believe that quality healthcare is a fundamental right, not a privilege. Through innovative programs 
              and community partnerships, we work tirelessly to bridge the gap between healthcare services and those who need them most.
            </p>
            <ul className="about-features">
              <li>
                <Check size={20} />
                Health Education Through Drama programs
              </li>
              <li>
                <Check size={20} />
                Free Medical Services for underserved communities
              </li>
              <li>
                <Check size={20} />
                Community Needs Support and empowerment
              </li>
              <li>
                <Check size={20} />
                Livelihood development initiatives
              </li>
            </ul>
            <Link to="/about" className="btn-primary">
              Learn More
            </Link>
          </div>
          <div className="about-images">
            <div className="image-grid">
              <div className="grid-item item-1">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Community health education"
                />
              </div>
              <div className="grid-item item-2">
                <img 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Medical volunteers"
                />
              </div>
              <div className="grid-item item-3">
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Community engagement"
                />
              </div>
              <div className="grid-item item-4">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Healthcare outreach"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

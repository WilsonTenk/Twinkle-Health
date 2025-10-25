import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, HandHeart, DollarSign } from 'lucide-react';
import './GetInvolved.css';

const GetInvolved = () => {
  return (
    <section className="involve-section section-padding">
      <div className="container">
        <div className="involve-header text-center">
          <span className="section-label">Get Involved</span>
          <h2 className="section-title">Make a Difference Today</h2>
          <p className="section-subtitle">Join us in transforming healthcare access and empowering communities across Ghana</p>
        </div>
        
        <div className="involve-grid">
          <div className="involve-card">
            <div className="card-icon">
              <Heart size={40} />
            </div>
            <h3>Volunteer</h3>
            <p>Join our team of dedicated volunteers and help us reach more communities with essential healthcare services.</p>
            <Link to="/get-involved" className="card-btn">
              Volunteer Now
            </Link>
          </div>
          
          <div className="involve-card">
            <div className="card-icon">
              <DollarSign size={40} />
            </div>
            <h3>Donate</h3>
            <p>Your financial contribution helps us provide free medical services and health education to underserved communities.</p>
            <Link to="/contact" className="card-btn">
              Make a Donation
            </Link>
          </div>
          
          <div className="involve-card">
            <div className="card-icon">
              <Users size={40} />
            </div>
            <h3>Partner</h3>
            <p>Collaborate with us to create sustainable healthcare solutions and expand our impact across Ghana.</p>
            <Link to="/contact" className="card-btn">
              Become a Partner
            </Link>
          </div>
          
          <div className="involve-card">
            <div className="card-icon">
              <HandHeart size={40} />
            </div>
            <h3>Sponsor</h3>
            <p>Sponsor specific programs or events to directly support health education and medical outreach initiatives.</p>
            <Link to="/contact" className="card-btn">
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="involve-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Volunteers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Communities Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Lives Impacted</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Programs Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;



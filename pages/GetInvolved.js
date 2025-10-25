import React, { useState } from 'react';
import { Heart, Users, DollarSign, Handshake, UserPlus, CreditCard, Building, Mail, Phone, MapPin } from 'lucide-react';
import './GetInvolvedPage.css';

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState('volunteer');

  const [volunteerForm, setVolunteerForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    skills: '',
    availability: '',
    interests: [],
    experience: '',
    motivation: ''
  });

  const [donationForm, setDonationForm] = useState({
    amount: '',
    type: 'one-time',
    frequency: 'monthly',
    name: '',
    email: '',
    phone: '',
    anonymous: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVolunteerInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const interests = [...volunteerForm.interests];
      if (checked) {
        interests.push(value);
      } else {
        const index = interests.indexOf(value);
        if (index > -1) interests.splice(index, 1);
      }
      setVolunteerForm(prev => ({ ...prev, interests }));
    } else {
      setVolunteerForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDonationInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonationForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your interest in volunteering! We will contact you within 48 hours.');
      setVolunteerForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        skills: '',
        availability: '',
        interests: [],
        experience: '',
        motivation: ''
      });
    }, 2000);
  };

  const handleDonationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your generous donation! You will receive a confirmation email shortly.');
      setDonationForm({
        amount: '',
        type: 'one-time',
        frequency: 'monthly',
        name: '',
        email: '',
        phone: '',
        anonymous: false,
        message: ''
      });
    }, 2000);
  };

  const involvementOptions = [
    {
      id: 'volunteer',
      title: 'Volunteer',
      icon: <UserPlus size={40} />,
      description: 'Join our team of dedicated volunteers and help us reach more communities with essential healthcare services.',
      benefits: [
        'Make a direct impact in your community',
        'Gain valuable healthcare experience',
        'Meet like-minded individuals',
        'Develop new skills and knowledge',
        'Flexible time commitments'
      ]
    },
    {
      id: 'donate',
      title: 'Donate',
      icon: <DollarSign size={40} />,
      description: 'Your financial contribution helps us provide free medical services and health education to underserved communities.',
      benefits: [
        'Tax-deductible donations',
        'Transparent financial reporting',
        'Direct impact on community health',
        'Recognition opportunities',
        'Regular impact updates'
      ]
    },
    {
      id: 'partner',
      title: 'Partner',
      icon: <Handshake size={40} />,
      description: 'Collaborate with us to create sustainable healthcare solutions and expand our impact across Ghana.',
      benefits: [
        'Corporate social responsibility',
        'Brand visibility and recognition',
        'Employee engagement opportunities',
        'Customized partnership programs',
        'Measurable impact reporting'
      ]
    },
    {
      id: 'sponsor',
      title: 'Sponsor',
      icon: <Building size={40} />,
      description: 'Sponsor specific programs or events to directly support health education and medical outreach initiatives.',
      benefits: [
        'Program-specific sponsorship',
        'Event naming rights',
        'Media coverage opportunities',
        'Direct program oversight',
        'Custom recognition packages'
      ]
    }
  ];

  const volunteerRoles = [
    {
      title: 'Medical Volunteers',
      description: 'Healthcare professionals who provide direct medical services',
      requirements: ['Medical degree or certification', 'Valid professional license', '2+ years experience'],
      timeCommitment: '4-8 hours per session'
    },
    {
      title: 'Health Educators',
      description: 'Community members who lead drama-based health education programs',
      requirements: ['Strong communication skills', 'Cultural sensitivity', 'Teaching experience preferred'],
      timeCommitment: '2-4 hours per session'
    },
    {
      title: 'Community Organizers',
      description: 'Local coordinators who help organize events and outreach programs',
      requirements: ['Community connections', 'Organizational skills', 'Bilingual abilities preferred'],
      timeCommitment: '3-6 hours per week'
    },
    {
      title: 'Administrative Support',
      description: 'Volunteers who assist with office work, data entry, and coordination',
      requirements: ['Computer literacy', 'Attention to detail', 'Reliability'],
      timeCommitment: '2-4 hours per week'
    }
  ];

  const donationAmounts = [50, 100, 250, 500, 1000];

  return (
    <div className="get-involved-page">
      {/* Hero Section */}
      <section className="involvement-hero">
        <div className="container">
          <div className="involvement-hero-content">
            <h1>Get Involved</h1>
            <p>Join us in transforming healthcare access and empowering communities across Ghana. There are many ways to make a difference.</p>
          </div>
        </div>
      </section>

      {/* Involvement Options */}
      <section className="involvement-options section-padding">
        <div className="container">
          <div className="involvement-tabs">
            {involvementOptions.map((option) => (
              <button
                key={option.id}
                className={`involvement-tab ${activeTab === option.id ? 'active' : ''}`}
                onClick={() => setActiveTab(option.id)}
              >
                <div className="tab-icon">{option.icon}</div>
                <span>{option.title}</span>
              </button>
            ))}
          </div>

          <div className="involvement-content">
            {involvementOptions.map((option) => (
              <div
                key={option.id}
                className={`involvement-panel ${activeTab === option.id ? 'active' : ''}`}
              >
                <div className="panel-header">
                  <h2>{option.title}</h2>
                  <p>{option.description}</p>
                </div>

                <div className="panel-benefits">
                  <h3>Benefits of {option.title}ing:</h3>
                  <ul>
                    {option.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                {activeTab === 'volunteer' && (
                  <div className="volunteer-roles">
                    <h3>Available Volunteer Roles</h3>
                    <div className="roles-grid">
                      {volunteerRoles.map((role, index) => (
                        <div key={index} className="role-card">
                          <h4>{role.title}</h4>
                          <p>{role.description}</p>
                          <div className="role-requirements">
                            <strong>Requirements:</strong>
                            <ul>
                              {role.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="time-commitment">
                            <strong>Time Commitment:</strong> {role.timeCommitment}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="involvement-forms section-padding">
        <div className="container">
          {activeTab === 'volunteer' && (
            <div className="volunteer-form-container">
              <div className="form-header">
                <h2>Volunteer Application</h2>
                <p>Fill out the form below to join our volunteer team. We'll contact you within 48 hours.</p>
              </div>

              <form onSubmit={handleVolunteerSubmit} className="volunteer-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={volunteerForm.firstName}
                      onChange={handleVolunteerInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={volunteerForm.lastName}
                      onChange={handleVolunteerInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={volunteerForm.email}
                      onChange={handleVolunteerInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={volunteerForm.phone}
                      onChange={handleVolunteerInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="age" className="form-label">Age *</label>
                    <select
                      id="age"
                      name="age"
                      value={volunteerForm.age}
                      onChange={handleVolunteerInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Age Range</option>
                      <option value="18-25">18-25</option>
                      <option value="26-35">26-35</option>
                      <option value="36-45">36-45</option>
                      <option value="46-55">46-55</option>
                      <option value="56-65">56-65</option>
                      <option value="65+">65+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="availability" className="form-label">Availability *</label>
                    <select
                      id="availability"
                      name="availability"
                      value={volunteerForm.availability}
                      onChange={handleVolunteerInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="flexible">Flexible</option>
                      <option value="special-events">Special Events Only</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="skills" className="form-label">Relevant Skills & Experience</label>
                  <textarea
                    id="skills"
                    name="skills"
                    value={volunteerForm.skills}
                    onChange={handleVolunteerInputChange}
                    className="form-textarea"
                    rows="3"
                    placeholder="Please describe any relevant skills, certifications, or experience..."
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Areas of Interest *</label>
                  <div className="checkbox-group">
                    {[
                      'Medical Services',
                      'Health Education',
                      'Community Outreach',
                      'Administrative Support',
                      'Event Planning',
                      'Translation Services'
                    ].map((interest) => (
                      <label key={interest} className="checkbox-label">
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          checked={volunteerForm.interests.includes(interest)}
                          onChange={handleVolunteerInputChange}
                        />
                        <span>{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="motivation" className="form-label">Why do you want to volunteer with us? *</label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={volunteerForm.motivation}
                    onChange={handleVolunteerInputChange}
                    className="form-textarea"
                    rows="4"
                    required
                    placeholder="Tell us what motivates you to volunteer with Twinkle Health Foundation..."
                  />
                </div>

                <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <UserPlus size={16} />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {activeTab === 'donate' && (
            <div className="donation-form-container">
              <div className="form-header">
                <h2>Make a Donation</h2>
                <p>Your contribution helps us provide essential healthcare services to underserved communities.</p>
              </div>

              <form onSubmit={handleDonationSubmit} className="donation-form">
                <div className="donation-amounts">
                  <h3>Choose Amount</h3>
                  <div className="amount-buttons">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className={`amount-btn ${donationForm.amount === amount.toString() ? 'selected' : ''}`}
                        onClick={() => setDonationForm(prev => ({ ...prev, amount: amount.toString() }))}
                      >
                        ₵{amount}
                      </button>
                    ))}
                  </div>
                  <div className="custom-amount">
                    <label htmlFor="customAmount" className="form-label">Custom Amount</label>
                    <input
                      type="number"
                      id="customAmount"
                      name="amount"
                      value={donationForm.amount}
                      onChange={handleDonationInputChange}
                      className="form-input"
                      placeholder="Enter amount"
                      min="1"
                    />
                  </div>
                </div>

                <div className="donation-type">
                  <h3>Donation Type</h3>
                  <div className="type-buttons">
                    <label className={`type-btn ${donationForm.type === 'one-time' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="type"
                        value="one-time"
                        checked={donationForm.type === 'one-time'}
                        onChange={handleDonationInputChange}
                      />
                      One-time
                    </label>
                    <label className={`type-btn ${donationForm.type === 'recurring' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="type"
                        value="recurring"
                        checked={donationForm.type === 'recurring'}
                        onChange={handleDonationInputChange}
                      />
                      Recurring
                    </label>
                  </div>
                </div>

                {donationForm.type === 'recurring' && (
                  <div className="donation-frequency">
                    <label htmlFor="frequency" className="form-label">Frequency</label>
                    <select
                      id="frequency"
                      name="frequency"
                      value={donationForm.frequency}
                      onChange={handleDonationInputChange}
                      className="form-select"
                    >
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="annually">Annually</option>
                    </select>
                  </div>
                )}

                <div className="donor-info">
                  <h3>Donor Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="donorName" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="donorName"
                        name="name"
                        value={donationForm.name}
                        onChange={handleDonationInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="donorEmail" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="donorEmail"
                        name="email"
                        value={donationForm.email}
                        onChange={handleDonationInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="donorPhone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="donorPhone"
                      name="phone"
                      value={donationForm.phone}
                      onChange={handleDonationInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="anonymous"
                        checked={donationForm.anonymous}
                        onChange={handleDonationInputChange}
                      />
                      <span>Make this donation anonymous</span>
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="donationMessage" className="form-label">Message (Optional)</label>
                    <textarea
                      id="donationMessage"
                      name="message"
                      value={donationForm.message}
                      onChange={handleDonationInputChange}
                      className="form-textarea"
                      rows="3"
                      placeholder="Leave a message with your donation..."
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard size={16} />
                      Donate Now
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {(activeTab === 'partner' || activeTab === 'sponsor') && (
            <div className="partnership-contact">
              <div className="partnership-content">
                <h2>Interested in {activeTab === 'partner' ? 'Partnership' : 'Sponsorship'}?</h2>
                <p>We'd love to discuss how we can work together to create sustainable healthcare solutions.</p>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <Mail size={24} />
                    <div>
                      <h4>Email Us</h4>
                      <p>partnerships@twinklehealth.org</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <Phone size={24} />
                    <div>
                      <h4>Call Us</h4>
                      <p>054 348 3159</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <MapPin size={24} />
                    <div>
                      <h4>Visit Our Office</h4>
                      <p>Accra, Greater Accra, Ghana</p>
                    </div>
                  </div>
                </div>

                <a href="/contact" className="btn-primary">
                  <Handshake size={16} />
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="involvement-impact section-padding">
        <div className="container">
          <div className="impact-header text-center">
            <h2>Your Impact</h2>
            <p>See how your involvement makes a real difference in communities across Ghana</p>
          </div>
          
          <div className="impact-stats-grid">
            <div className="impact-stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Active Volunteers</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Partner Organizations</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Lives Impacted</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">₵500,000+</div>
              <div className="stat-label">Raised for Communities</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;



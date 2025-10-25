import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter, Search, Heart, UserMd, TheaterMasks } from 'lucide-react';
import './EventsPage.css';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const events = [
    {
      id: 1,
      title: 'Free Medical Camp - Kumasi',
      description: 'Join us for a comprehensive free medical camp in Kumasi, providing essential healthcare services to underserved communities.',
      date: '2024-02-15',
      time: '08:00 AM - 05:00 PM',
      location: 'Kumasi Central Park',
      city: 'Kumasi',
      type: 'medical',
      status: 'upcoming',
      capacity: 500,
      registered: 320,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      organizer: 'Dr. Sarah Mensah',
      requirements: ['Medical professionals', 'Volunteers', 'Community health workers'],
      highlights: ['Free consultations', 'Health screenings', 'Medication distribution', 'Health education']
    },
    {
      id: 2,
      title: 'Health Education Drama Workshop',
      description: 'Learn how to use drama and storytelling to promote health awareness in your community.',
      date: '2024-02-20',
      time: '09:00 AM - 04:00 PM',
      location: 'Accra Community Center',
      city: 'Accra',
      type: 'education',
      status: 'upcoming',
      capacity: 50,
      registered: 28,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      organizer: 'Mary Osei',
      requirements: ['Community leaders', 'Teachers', 'Health educators'],
      highlights: ['Drama techniques', 'Health messaging', 'Community engagement', 'Certificate of completion']
    },
    {
      id: 3,
      title: 'Clean Clothing Drive Distribution',
      description: 'Distribution of essential clothing items to families in need across multiple communities.',
      date: '2024-02-25',
      time: '10:00 AM - 02:00 PM',
      location: 'Tamale Central Market',
      city: 'Tamale',
      type: 'community',
      status: 'upcoming',
      capacity: 200,
      registered: 180,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      organizer: 'John Asante',
      requirements: ['Volunteers', 'Logistics support'],
      highlights: ['Clothing distribution', 'Family assistance', 'Community outreach']
    },
    {
      id: 4,
      title: 'Community Health Summit 2024',
      description: 'Annual summit bringing together healthcare professionals, community leaders, and stakeholders to discuss healthcare challenges and solutions.',
      date: '2024-03-10',
      time: '08:30 AM - 05:30 PM',
      location: 'Accra International Conference Center',
      city: 'Accra',
      type: 'conference',
      status: 'upcoming',
      capacity: 300,
      registered: 245,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      organizer: 'Dr. Ama Serwaa',
      requirements: ['Healthcare professionals', 'Community leaders', 'Policy makers'],
      highlights: ['Keynote speakers', 'Panel discussions', 'Networking', 'Awards ceremony']
    },
    {
      id: 5,
      title: 'Rural Health Outreach - Volta Region',
      description: 'Medical outreach program targeting remote communities in the Volta Region with essential healthcare services.',
      date: '2024-01-20',
      time: '07:00 AM - 06:00 PM',
      location: 'Ho Central Hospital',
      city: 'Ho',
      type: 'medical',
      status: 'completed',
      capacity: 300,
      registered: 300,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      organizer: 'Dr. Kwame Asante',
      requirements: ['Medical professionals', 'Volunteers', 'Community health workers'],
      highlights: ['300 patients served', 'Health education sessions', 'Follow-up care arranged']
    },
    {
      id: 6,
      title: 'Youth Health Education Program',
      description: 'Interactive health education program designed specifically for youth, focusing on preventive care and healthy lifestyle choices.',
      date: '2024-01-15',
      time: '02:00 PM - 05:00 PM',
      location: 'Tema Community School',
      city: 'Tema',
      type: 'education',
      status: 'completed',
      capacity: 100,
      registered: 95,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      organizer: 'Mary Osei',
      requirements: ['Youth coordinators', 'Health educators', 'School staff'],
      highlights: ['95 students reached', 'Interactive sessions', 'Health materials distributed']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Events', icon: <Calendar size={16} /> },
    { id: 'upcoming', label: 'Upcoming', icon: <Clock size={16} /> },
    { id: 'medical', label: 'Medical', icon: <UserMd size={16} /> },
    { id: 'education', label: 'Education', icon: <TheaterMasks size={16} /> },
    { id: 'community', label: 'Community', icon: <Users size={16} /> },
    { id: 'conference', label: 'Conference', icon: <Heart size={16} /> }
  ];

  const filteredEvents = events.filter(event => {
    const matchesFilter = activeFilter === 'all' || event.type === activeFilter || event.status === activeFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.city.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'completed');

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'medical':
        return <UserMd size={20} />;
      case 'education':
        return <TheaterMasks size={20} />;
      case 'community':
        return <Users size={20} />;
      case 'conference':
        return <Heart size={20} />;
      default:
        return <Calendar size={20} />;
    }
  };

  const getEventTypeClass = (type) => {
    switch (type) {
      case 'medical':
        return 'medical-event';
      case 'education':
        return 'education-event';
      case 'community':
        return 'community-event';
      case 'conference':
        return 'conference-event';
      default:
        return 'general-event';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">
          <div className="events-hero-content">
            <h1>Events & Programs</h1>
            <p>Join our upcoming events and programs designed to improve healthcare access and empower communities across Ghana.</p>
          </div>
        </div>
      </section>

      {/* Events Stats */}
      <section className="events-stats section-padding">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{upcomingEvents.length}</div>
              <div className="stat-label">Upcoming Events</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{events.reduce((sum, event) => sum + event.registered, 0)}</div>
              <div className="stat-label">Total Registrations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{events.length}</div>
              <div className="stat-label">Events This Year</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{events.reduce((sum, event) => sum + event.capacity, 0)}</div>
              <div className="stat-label">Total Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="events-filters section-padding">
        <div className="container">
          <div className="filters-container">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-tabs">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.icon}
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="events-content section-padding">
        <div className="container">
          {filteredEvents.length === 0 ? (
            <div className="no-events">
              <h3>No events found</h3>
              <p>Try adjusting your search terms or filters to find events.</p>
            </div>
          ) : (
            <div className="events-grid">
              {filteredEvents.map(event => (
                <div key={event.id} className={`event-card ${getEventTypeClass(event.type)} ${event.status}`}>
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <div className="event-status">
                      {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </div>
                    <div className="event-type">
                      {getEventTypeIcon(event.type)}
                    </div>
                  </div>
                  
                  <div className="event-content">
                    <div className="event-header">
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                    </div>
                    
                    <div className="event-details">
                      <div className="event-detail">
                        <Calendar size={16} />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="event-detail">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="event-detail">
                        <MapPin size={16} />
                        <span>{event.location}, {event.city}</span>
                      </div>
                      <div className="event-detail">
                        <Users size={16} />
                        <span>{event.registered}/{event.capacity} registered</span>
                      </div>
                    </div>
                    
                    <div className="event-organizer">
                      <strong>Organized by:</strong> {event.organizer}
                    </div>
                    
                    <div className="event-requirements">
                      <strong>Requirements:</strong>
                      <ul>
                        {event.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="event-highlights">
                      <strong>Highlights:</strong>
                      <ul>
                        {event.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="event-actions">
                      {event.status === 'upcoming' ? (
                        <button className="btn-primary register-btn">
                          Register Now
                          <ArrowRight size={16} />
                        </button>
                      ) : (
                        <button className="btn-secondary" disabled>
                          Event Completed
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="events-newsletter section-padding">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter to receive updates about upcoming events, programs, and opportunities to get involved.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn-primary">
                <Heart size={16} />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="calendar-cta section-padding">
        <div className="container">
          <div className="cta-content">
            <h2>Don't Miss Out</h2>
            <p>Add our events to your calendar and never miss an opportunity to make a difference in your community.</p>
            <div className="cta-buttons">
              <button className="btn-primary">
                <Calendar size={16} />
                Download Calendar
              </button>
              <a href="/contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;



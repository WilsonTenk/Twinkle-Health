import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, TheaterMasks, UserMd, HandsHelping, Seedling, Shirt, Users } from 'lucide-react';
import './Services.css';

const Services = () => {
  const [currentSet, setCurrentSet] = useState(0);

  const services = [
    {
      id: 1,
      icon: <TheaterMasks size={40} />,
      title: "Health Education Through Drama",
      description: "Engaging communities through creative drama programs to promote health awareness and education"
    },
    {
      id: 2,
      icon: <UserMd size={40} />,
      title: "Free Medical Services",
      description: "Providing accessible primary healthcare services to underserved communities with limited medical access"
    },
    {
      id: 3,
      icon: <HandsHelping size={40} />,
      title: "Community Needs Support",
      description: "Addressing specific local community needs through targeted support programs and initiatives"
    },
    {
      id: 4,
      icon: <Seedling size={40} />,
      title: "Livelihood Empowerment",
      description: "Economic development programs to help community members build sustainable livelihoods"
    },
    {
      id: 5,
      icon: <Shirt size={40} />,
      title: "Clean Clothing Drive",
      description: "Distributing essential clothing items to those in need within our target communities"
    },
    {
      id: 6,
      icon: <Users size={40} />,
      title: "Focus Group Discussions",
      description: "Community engagement sessions to understand needs and gather feedback for program improvement"
    }
  ];

  const serviceSets = [
    services.slice(0, 3),
    services.slice(3, 6)
  ];

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % serviceSets.length);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + serviceSets.length) % serviceSets.length);
  };

  const goToSet = (index) => {
    setCurrentSet(index);
  };

  return (
    <section className="services-section section-padding">
      <div className="container">
        <div className="services-header text-center">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Our Services We provide!</h2>
        </div>
        
        <div className="services-carousel">
          <button 
            className="carousel-btn prev-btn" 
            onClick={prevSet}
            aria-label="Previous services"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="services-track">
            {serviceSets.map((set, setIndex) => (
              <div 
                key={setIndex}
                className={`service-set ${setIndex === currentSet ? 'active' : ''}`}
                data-set={setIndex}
              >
                {set.map((service) => (
                  <div key={service.id} className="service-card" data-card={service.id}>
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to="/services" className="learn-more-link">Learn More</Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-btn next-btn" 
            onClick={nextSet}
            aria-label="Next services"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="pagination-dots">
            {serviceSets.map((_, index) => (
              <span 
                key={index}
                className={`pagination-dot ${index === currentSet ? 'active' : ''}`}
                onClick={() => goToSet(index)}
                data-set={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;



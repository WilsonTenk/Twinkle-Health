import React from 'react';
import { TheaterMasks, UserMd, HandsHelping, Seedling, Shirt, Users, CheckCircle, ArrowRight } from 'lucide-react';
import './ServicesPage.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <TheaterMasks size={50} />,
      title: "Health Education Through Drama",
      description: "Our innovative drama-based health education program uses theatrical performances and interactive skits to make health information accessible and memorable for communities of all literacy levels.",
      details: [
        "Interactive theatrical performances on health topics",
        "Community member training as health educators",
        "Culturally relevant health messaging",
        "Multi-generational engagement approach"
      ],
      process: [
        "Community needs assessment and topic selection",
        "Script development with local health professionals",
        "Community member recruitment and training",
        "Performance scheduling and execution",
        "Impact measurement and feedback collection"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      icon: <UserMd size={50} />,
      title: "Free Medical Services",
      description: "We provide comprehensive primary healthcare services to underserved communities, including general health check-ups, basic medical care, health screenings, and referrals to specialized care.",
      details: [
        "General health consultations and check-ups",
        "Basic medical treatment and medication",
        "Health screenings and diagnostic tests",
        "Maternal and child health services",
        "Referrals to specialized healthcare providers"
      ],
      process: [
        "Community health needs assessment",
        "Medical team mobilization and logistics planning",
        "Temporary clinic setup in target communities",
        "Patient registration and triage",
        "Medical consultation and treatment delivery",
        "Follow-up care coordination and referrals"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      icon: <HandsHelping size={50} />,
      title: "Community Needs Support",
      description: "We address specific local community needs through targeted support programs, working directly with community leaders to identify and implement solutions for pressing challenges.",
      details: [
        "Community needs assessment and prioritization",
        "Resource mobilization and distribution",
        "Infrastructure development support",
        "Emergency relief and crisis response",
        "Long-term community development planning"
      ],
      process: [
        "Community engagement and needs identification",
        "Stakeholder consultation and partnership building",
        "Resource allocation and project planning",
        "Implementation with community participation",
        "Monitoring, evaluation, and impact assessment"
      ],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      icon: <Seedling size={50} />,
      title: "Livelihood Empowerment",
      description: "Our economic development programs help community members build sustainable livelihoods through skills training, microfinance support, and business development initiatives.",
      details: [
        "Vocational skills training programs",
        "Microfinance and small business support",
        "Agricultural development and farming techniques",
        "Market access and business networking",
        "Financial literacy and entrepreneurship education"
      ],
      process: [
        "Skills assessment and training needs identification",
        "Training program development and delivery",
        "Microfinance application and approval process",
        "Business mentorship and ongoing support",
        "Market linkage and sustainability planning"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      icon: <Shirt size={50} />,
      title: "Clean Clothing Drive",
      description: "We distribute essential clothing items to families in need, ensuring dignity and warmth while promoting hygiene and self-esteem in vulnerable communities.",
      details: [
        "Clothing collection and sorting",
        "Community needs assessment",
        "Distribution planning and logistics",
        "Hygiene education and clothing care",
        "Follow-up support and impact tracking"
      ],
      process: [
        "Donation drives and collection campaigns",
        "Clothing sorting, cleaning, and quality control",
        "Community outreach and beneficiary identification",
        "Distribution events and individual deliveries",
        "Impact measurement and feedback collection"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      icon: <Users size={50} />,
      title: "Focus Group Discussions",
      description: "We facilitate community engagement sessions to understand needs, gather feedback, and ensure our programs are culturally appropriate and effective.",
      details: [
        "Structured discussion facilitation",
        "Community feedback collection",
        "Program evaluation and improvement",
        "Stakeholder engagement and consultation",
        "Cultural sensitivity and local adaptation"
      ],
      process: [
        "Discussion topic identification and preparation",
        "Community member recruitment and invitation",
        "Facilitated group discussion sessions",
        "Data collection and analysis",
        "Report generation and action planning"
      ],
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Akosua Mensah",
      role: "Community Member, Kumasi",
      content: "The drama program helped my children understand the importance of handwashing. They now remind me to wash our hands before eating, and our family has been healthier since then.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dr. Kwame Asante",
      role: "Local Healthcare Provider",
      content: "The free medical services have been a lifeline for many families in our area. Twinkle Health Foundation's approach to healthcare delivery is both professional and compassionate.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Mary Osei",
      role: "Livelihood Program Participant",
      content: "Through the livelihood empowerment program, I learned sewing skills and received a small loan to start my tailoring business. Now I can support my family independently.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive healthcare and community development programs designed to transform lives and empower communities across Ghana.</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview section-padding">
        <div className="container">
          <div className="services-header text-center">
            <span className="section-label">Our Programs</span>
            <h2 className="section-title">Six Core Services for Community Transformation</h2>
            <p className="section-subtitle">Each service is designed to address specific community needs while building long-term capacity and sustainability.</p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card-detailed">
                <div className="service-card-header">
                  <div className="service-icon-large">
                    {service.icon}
                  </div>
                  <div className="service-card-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
                
                <div className="service-card-body">
                  <div className="service-details">
                    <h4>What We Provide:</h4>
                    <ul>
                      {service.details.map((detail, index) => (
                        <li key={index}>
                          <CheckCircle size={16} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-process">
                    <h4>Our Process:</h4>
                    <div className="process-steps">
                      {service.process.map((step, index) => (
                        <div key={index} className="process-step">
                          <div className="step-number">{index + 1}</div>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="services-impact section-padding">
        <div className="container">
          <div className="impact-header text-center">
            <h2>Our Impact</h2>
            <p>Measurable results that demonstrate our commitment to community transformation</p>
          </div>
          
          <div className="impact-stats-grid">
            <div className="impact-stat">
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Lives Impacted</div>
              <div className="stat-description">Individuals and families who have benefited from our programs</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Communities Served</div>
              <div className="stat-description">Rural and urban communities across Ghana</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Medical Consultations</div>
              <div className="stat-description">Free healthcare services provided annually</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">Drama Performances</div>
              <div className="stat-description">Health education shows delivered to communities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="services-testimonials section-padding">
        <div className="container">
          <div className="testimonials-header text-center">
            <h2>Community Voices</h2>
            <p>Hear from the people whose lives have been transformed through our programs</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="services-cta section-padding">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Make a Difference?</h2>
            <p>Join us in transforming healthcare access and empowering communities across Ghana. Whether you want to volunteer, donate, or partner with us, there are many ways to get involved.</p>
            <div className="cta-buttons">
              <a href="/get-involved" className="btn-primary">
                Get Involved
                <ArrowRight size={16} />
              </a>
              <a href="/contact" className="btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;



import React from 'react';
import { Heart, Users, Award, Target, CheckCircle, Calendar, MapPin } from 'lucide-react';
import './AboutPage.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Mensah',
      role: 'Executive Director',
      bio: 'Leading our mission with over 15 years of experience in community health and healthcare management.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'John Asante',
      role: 'Program Director',
      bio: 'Oversees our community outreach programs and volunteer coordination across Ghana.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. Ama Serwaa',
      role: 'Medical Director',
      bio: 'Ensures quality healthcare delivery and medical program development for underserved communities.',
      image: 'https://images.unsplash.com/photo-1594824377432-0b3b9e9c8f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Mary Osei',
      role: 'Community Engagement Manager',
      bio: 'Builds relationships with communities and coordinates our drama-based health education programs.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Expanded to 25 Communities',
      description: 'Successfully extended our healthcare services to 25 underserved communities across Ghana.'
    },
    {
      year: '2023',
      title: 'Drama Program Launch',
      description: 'Introduced innovative drama-based health education reaching over 10,000 community members.'
    },
    {
      year: '2022',
      title: 'Medical Camp Initiative',
      description: 'Organized 50+ free medical camps serving over 5,000 patients in remote areas.'
    },
    {
      year: '2021',
      title: 'Foundation Established',
      description: 'Twinkle Health Foundation was officially established with a mission to transform healthcare access.'
    }
  ];

  const values = [
    {
      icon: <Heart size={40} />,
      title: 'Compassion',
      description: 'We approach every community member with empathy, understanding, and genuine care for their wellbeing.'
    },
    {
      icon: <Users size={40} />,
      title: 'Community-Centered',
      description: 'Our programs are designed with and for the communities we serve, ensuring cultural relevance and sustainability.'
    },
    {
      icon: <Award size={40} />,
      title: 'Excellence',
      description: 'We maintain the highest standards in healthcare delivery and program implementation.'
    },
    {
      icon: <Target size={40} />,
      title: 'Impact',
      description: 'We measure our success by the positive change we create in the lives of individuals and communities.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Twinkle Health Foundation</h1>
            <p>Transforming healthcare access and empowering communities through innovative programs and compassionate care.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section-padding">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">
                <Target size={40} />
              </div>
              <h3>Our Mission</h3>
              <p>To provide accessible, quality healthcare services and innovative health education programs to underserved communities in Ghana, empowering individuals and families to lead healthier lives.</p>
            </div>
            
            <div className="vision-card">
              <div className="card-icon">
                <Heart size={40} />
              </div>
              <h3>Our Vision</h3>
              <p>A Ghana where every individual, regardless of their location or economic status, has access to quality healthcare and the knowledge to maintain their wellbeing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story section-padding">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <span className="section-label">Our Story</span>
              <h2>From Vision to Impact</h2>
              <p>Twinkle Health Foundation was born from a simple yet powerful belief: healthcare is a fundamental right, not a privilege. Founded in 2021 by a group of healthcare professionals and community advocates, we recognized the critical gaps in healthcare access across Ghana's underserved communities.</p>
              
              <p>What started as a small initiative to provide basic medical services has evolved into a comprehensive healthcare organization that reaches thousands of people annually. Our journey has been marked by innovation, particularly our pioneering drama-based health education programs that have transformed how communities engage with health information.</p>
              
              <p>Today, we're proud to serve over 50 communities across Ghana, with programs ranging from free medical services to livelihood empowerment initiatives. Our impact is measured not just in numbers, but in the stories of lives transformed and communities empowered.</p>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Community healthcare" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section section-padding">
        <div className="container">
          <div className="values-header text-center">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
            <p className="section-subtitle">These core values guide every decision we make and every program we implement</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section section-padding">
        <div className="container">
          <div className="team-header text-center">
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Meet the People Behind Our Mission</h2>
            <p className="section-subtitle">Dedicated professionals working tirelessly to improve healthcare access across Ghana</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section section-padding">
        <div className="container">
          <div className="timeline-header text-center">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Key Milestones</h2>
            <p className="section-subtitle">Important moments in our mission to transform healthcare access</p>
          </div>
          
          <div className="timeline">
            {achievements.map((achievement, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <Calendar size={20} />
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{achievement.year}</div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-stats section-padding">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Communities Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Lives Impacted</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Volunteers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Programs Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section-padding">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Join Our Mission</h2>
            <p>Be part of the transformation in healthcare access across Ghana. Whether you're looking to volunteer, donate, or partner with us, there are many ways to make a difference.</p>
            <div className="cta-buttons">
              <a href="/get-involved" className="btn-primary">Get Involved</a>
              <a href="/contact" className="btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;



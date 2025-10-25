import React from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQPage.css';

const FAQ = () => {
  const [activeFAQ, setActiveFAQ] = React.useState(1);

  const faqs = [
    {
      id: 1,
      question: "What is Twinkle Health Foundation?",
      answer: "Twinkle Health Foundation is a nonprofit organization dedicated to providing accessible healthcare services and health education to underserved communities. We focus on innovative approaches like drama-based health education, free medical services, and community empowerment programs to create lasting positive change in healthcare access."
    },
    {
      id: 2,
      question: "What services does Twinkle Health Foundation provide?",
      answer: "We provide six core services: Health Education Through Drama programs that use creative storytelling to teach health awareness, Free Medical Services for underserved communities, Community Needs Support addressing specific local challenges, Livelihood Empowerment programs for economic development, Clean Clothing Drive distributing essential clothing items, and Focus Group Discussions for community engagement and feedback."
    },
    {
      id: 3,
      question: "How does the Health Education Through Drama program work?",
      answer: "Our drama program uses theatrical performances, interactive skits, and storytelling to make health education engaging and memorable. We train community members to become health educators who perform plays about topics like hygiene, nutrition, disease prevention, and maternal health. This creative approach helps break down barriers and makes health information more accessible to people of all ages and literacy levels."
    },
    {
      id: 4,
      question: "Who can benefit from your free medical services?",
      answer: "Our free medical services are available to anyone in underserved communities who lacks access to quality healthcare. We particularly focus on vulnerable populations including low-income families, elderly individuals, children, and people living in remote areas. Our services include general health check-ups, basic medical care, health screenings, and referrals to specialized care when needed."
    },
    {
      id: 5,
      question: "How can I get involved with Twinkle Health Foundation?",
      answer: "There are several ways to get involved: Volunteer with our programs as a medical professional, drama performer, or community organizer. Donate to support our initiatives and help us reach more communities. Partner with us if you represent an organization that shares our mission. Spread awareness about our work and the importance of accessible healthcare. Contact us to learn about current volunteer opportunities and partnership possibilities."
    },
    {
      id: 6,
      question: "How can I contact Twinkle Health Foundation?",
      answer: "You can reach us through multiple channels: Call us at 054 348 3159 or 059 862 5292 for immediate assistance. Email us at info@twinklehealth.org for general inquiries. Follow us on social media @twinklehealthfoundation for updates and news. Visit our office in Accra, Greater Accra, Ghana for in-person meetings. We're always happy to discuss how you can support our mission or learn more about our programs."
    },
    {
      id: 7,
      question: "What makes your approach to healthcare unique?",
      answer: "Our approach combines traditional medical services with innovative community engagement methods. We use drama and storytelling to make health education culturally relevant and engaging. Our programs are community-centered, meaning we work WITH communities rather than FOR them, ensuring sustainable impact. We address both immediate health needs and long-term empowerment through livelihood programs. Our holistic approach recognizes that health is influenced by social, economic, and cultural factors, not just medical care."
    }
  ];

  const toggleFAQ = (faqNumber) => {
    setActiveFAQ(activeFAQ === faqNumber ? null : faqNumber);
  };

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <div className="faq-hero-content">
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about our programs, services, and how you can get involved with Twinkle Health Foundation.</p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content section-padding">
        <div className="container">
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`faq-item ${activeFAQ === faq.id ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={activeFAQ === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="faq-text">{faq.question}</span>
                  <span className="faq-icon">
                    {activeFAQ === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <div 
                  className={`faq-answer ${activeFAQ === faq.id ? 'active' : ''}`}
                  id={`faq-answer-${faq.id}`}
                  aria-hidden={activeFAQ !== faq.id}
                >
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta section-padding">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Still have questions?</h2>
            <p>Get in touch with us for more information about our programs and how you can get involved.</p>
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

export default FAQ;



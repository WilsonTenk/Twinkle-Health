import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, User } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  const [currentSet, setCurrentSet] = useState(0);

  const blogPosts = [
    {
      id: 1,
      slug: 'drama-programs-transform-health-awareness',
      title: 'Drama Programs Transform Health Awareness in Rural Communities',
      excerpt: 'Discover how our creative drama programs are revolutionizing health education and reaching thousands of community members with life-saving information.',
      author: 'Dr. Sarah Mensah',
      date: 'September 15, 2025',
      category: 'Health Education',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      slug: 'medical-camp-serves-500-patients',
      title: 'Free Medical Camp Serves Over 500 Patients in Remote Villages',
      excerpt: 'Our recent medical outreach program provided essential healthcare services to underserved communities, making a significant impact on local health outcomes.',
      author: 'John Asante',
      date: 'September 10, 2025',
      category: 'Success Story',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      slug: 'livelihood-empowerment-launches-districts',
      title: 'Livelihood Empowerment Program Launches in Three New Districts',
      excerpt: 'Expanding our reach to empower more families with sustainable income opportunities and economic development skills training programs.',
      author: 'Mary Osei',
      date: 'September 5, 2025',
      category: 'Community Update',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      slug: 'clothing-drive-distributes-2000-items',
      title: 'Clean Clothing Drive Distributes 2,000 Items to Families in Need',
      excerpt: 'Our community support initiative provided essential clothing items to vulnerable families, ensuring dignity and warmth for those who need it most.',
      author: 'Kwame Nkrumah',
      date: 'August 28, 2025',
      category: 'Community Update',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      slug: 'focus-groups-shape-health-programs',
      title: 'Community Focus Groups Shape Future Health Programs',
      excerpt: 'Through engaging community discussions, we\'re gathering valuable insights to design more effective health education and support programs.',
      author: 'Dr. Ama Serwaa',
      date: 'August 22, 2025',
      category: 'Health Education',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      slug: 'partnership-expands-healthcare-access',
      title: 'New Partnership Expands Healthcare Access to 5 Additional Communities',
      excerpt: 'Collaborating with local healthcare providers to extend our medical services and create sustainable healthcare solutions for underserved areas.',
      author: 'Robert Mensah',
      date: 'August 18, 2025',
      category: 'Success Story',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const blogSets = [
    blogPosts.slice(0, 3),
    blogPosts.slice(3, 6)
  ];

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % blogSets.length);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + blogSets.length) % blogSets.length);
  };

  const goToSet = (index) => {
    setCurrentSet(index);
  };

  const getCategoryClass = (category) => {
    switch (category) {
      case 'Health Education':
        return 'health-education';
      case 'Success Story':
        return 'success-story';
      case 'Community Update':
        return 'community-update';
      default:
        return 'health-education';
    }
  };

  return (
    <section className="blog-section section-padding">
      <div className="container">
        <div className="blog-header">
          <div className="blog-header-content">
            <span className="section-label">Blog & Stories</span>
            <h2 className="section-title">Latest News & Stories</h2>
            <p className="section-subtitle">Stay updated with our community impact and healthcare initiatives</p>
          </div>
          <div className="blog-navigation">
            <button 
              className="blog-btn prev-btn" 
              onClick={prevSet}
              aria-label="Previous blog posts"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              className="blog-btn next-btn" 
              onClick={nextSet}
              aria-label="Next blog posts"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        
        <div className="blog-carousel">
          <div className="blog-track">
            {blogSets.map((set, setIndex) => (
              <div 
                key={setIndex}
                className={`blog-set ${setIndex === currentSet ? 'active' : ''}`}
                data-set={setIndex}
              >
                {set.map((post) => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-image">
                      <img src={post.image} alt={post.title} />
                      <div className={`blog-category ${getCategoryClass(post.category)}`}>
                        {post.category}
                      </div>
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-post-title">{post.title}</h3>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <div className="blog-meta">
                        <span className="blog-author">
                          <User size={14} />
                          {post.author}
                        </span>
                        <span className="blog-date">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                      </div>
                      <Link to={`/blog/${post.slug}`} className="blog-read-more">
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
          
          <div className="blog-pagination">
            {blogSets.map((_, index) => (
              <span 
                key={index}
                className={`blog-pagination-dot ${index === currentSet ? 'active' : ''}`}
                onClick={() => goToSet(index)}
                data-page={index}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="blog-decorations">
        <div className="blog-dot-pattern blog-dot-1"></div>
        <div className="blog-dot-pattern blog-dot-2"></div>
        <div className="blog-triangle-pattern"></div>
        <div className="blog-circle-pattern"></div>
      </div>
    </section>
  );
};

export default Blog;



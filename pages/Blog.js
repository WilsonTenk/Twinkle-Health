import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Filter } from 'lucide-react';
import './BlogPage.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('date');

  const blogPosts = [
    {
      id: 1,
      slug: 'drama-programs-transform-health-awareness',
      title: 'Drama Programs Transform Health Awareness in Rural Communities',
      excerpt: 'Discover how our creative drama programs are revolutionizing health education and reaching thousands of community members with life-saving information.',
      author: 'Dr. Sarah Mensah',
      date: 'September 15, 2025',
      category: 'Health Education',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      slug: 'medical-camp-serves-500-patients',
      title: 'Free Medical Camp Serves Over 500 Patients in Remote Villages',
      excerpt: 'Our recent medical outreach program provided essential healthcare services to underserved communities, making a significant impact on local health outcomes.',
      author: 'John Asante',
      date: 'September 10, 2025',
      category: 'Success Story',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 3,
      slug: 'livelihood-empowerment-launches-districts',
      title: 'Livelihood Empowerment Program Launches in Three New Districts',
      excerpt: 'Expanding our reach to empower more families with sustainable income opportunities and economic development skills training programs.',
      author: 'Mary Osei',
      date: 'September 5, 2025',
      category: 'Community Update',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 4,
      slug: 'clothing-drive-distributes-2000-items',
      title: 'Clean Clothing Drive Distributes 2,000 Items to Families in Need',
      excerpt: 'Our community support initiative provided essential clothing items to vulnerable families, ensuring dignity and warmth for those who need it most.',
      author: 'Kwame Nkrumah',
      date: 'August 28, 2025',
      category: 'Community Update',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 5,
      slug: 'focus-groups-shape-health-programs',
      title: 'Community Focus Groups Shape Future Health Programs',
      excerpt: 'Through engaging community discussions, we\'re gathering valuable insights to design more effective health education and support programs.',
      author: 'Dr. Ama Serwaa',
      date: 'August 22, 2025',
      category: 'Health Education',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 6,
      slug: 'partnership-expands-healthcare-access',
      title: 'New Partnership Expands Healthcare Access to 5 Additional Communities',
      excerpt: 'Collaborating with local healthcare providers to extend our medical services and create sustainable healthcare solutions for underserved areas.',
      author: 'Robert Mensah',
      date: 'August 18, 2025',
      category: 'Success Story',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    }
  ];

  const categories = ['All', 'Health Education', 'Success Story', 'Community Update', 'Medical Services', 'Research', 'Training'];

  const getCategoryClass = (category) => {
    switch (category) {
      case 'Health Education':
        return 'health-education';
      case 'Success Story':
        return 'success-story';
      case 'Community Update':
        return 'community-update';
      case 'Medical Services':
        return 'medical-services';
      case 'Research':
        return 'research';
      case 'Training':
        return 'training';
      default:
        return 'health-education';
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === 'author') {
      return a.author.localeCompare(b.author);
    }
    return 0;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = sortedPosts.filter(post => !post.featured);

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1>Our Blog & Stories</h1>
            <p>Stay updated with our latest news, success stories, and insights into community healthcare initiatives</p>
          </div>
        </div>
      </section>

      <section className="blog-filters">
        <div className="container">
          <div className="filters-container">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-controls">
              <div className="filter-group">
                <Filter size={16} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="filter-group">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="date">Sort by Date</option>
                  <option value="title">Sort by Title</option>
                  <option value="author">Sort by Author</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          {featuredPost && (
            <div className="featured-post">
              <div className="featured-post-content">
                <div className="featured-post-image">
                  <img src={featuredPost.image} alt={featuredPost.title} />
                  <div className={`featured-category ${getCategoryClass(featuredPost.category)}`}>
                    {featuredPost.category}
                  </div>
                </div>
                <div className="featured-post-text">
                  <h2>{featuredPost.title}</h2>
                  <p>{featuredPost.excerpt}</p>
                  <div className="featured-post-meta">
                    <span className="post-author">
                      <User size={14} />
                      {featuredPost.author}
                    </span>
                    <span className="post-date">
                      <Calendar size={14} />
                      {featuredPost.date}
                    </span>
                    <span className="read-time">{featuredPost.readTime}</span>
                  </div>
                  <Link to={`/blog/${featuredPost.slug}`} className="btn-primary">
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="blog-grid">
            {regularPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  <div className={`blog-card-category ${getCategoryClass(post.category)}`}>
                    {post.category}
                  </div>
                </div>
                <div className="blog-card-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <span className="post-author">
                      <User size={12} />
                      {post.author}
                    </span>
                    <span className="post-date">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="blog-read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-results">
              <h3>No articles found</h3>
              <p>Try adjusting your search terms or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      <section className="newsletter-signup">
        <div className="container">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest updates on our healthcare initiatives</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;



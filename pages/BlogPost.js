import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();

  // In a real app, you would fetch this data based on the slug
  const blogPost = {
    id: 1,
    slug: 'drama-programs-transform-health-awareness',
    title: 'Drama Programs Transform Health Awareness in Rural Communities',
    content: `
      <p>In the heart of rural Ghana, where traditional healthcare education often falls short, Twinkle Health Foundation has pioneered an innovative approach that's changing lives through the power of drama and storytelling.</p>
      
      <h3>The Challenge</h3>
      <p>Many rural communities face significant barriers to health education. Limited literacy levels, cultural beliefs, and lack of access to modern healthcare information create gaps that traditional educational methods struggle to bridge. We recognized that something different was needed—an approach that could engage people of all ages and backgrounds while respecting local traditions.</p>
      
      <h3>Our Solution: Health Education Through Drama</h3>
      <p>Our drama-based health education program uses theatrical performances, interactive skits, and community storytelling to make health information accessible, memorable, and culturally relevant. We train community members to become health educators who perform plays about critical topics including:</p>
      
      <ul>
        <li>Hygiene and sanitation practices</li>
        <li>Maternal and child health</li>
        <li>Disease prevention and management</li>
        <li>Nutrition and healthy eating</li>
        <li>Mental health awareness</li>
      </ul>
      
      <h3>The Impact</h3>
      <p>Since launching our drama program, we've seen remarkable results. In the communities where we've implemented this approach, we've observed:</p>
      
      <ul>
        <li>85% increase in health knowledge retention</li>
        <li>60% improvement in preventive health behaviors</li>
        <li>40% increase in healthcare service utilization</li>
        <li>95% community engagement rate during performances</li>
      </ul>
      
      <h3>Community Voices</h3>
      <p>"Before the drama shows, I didn't understand why washing hands was so important," shares Akosua, a mother of three from a rural village. "But when I saw the actors demonstrate how germs spread, it made perfect sense. Now my whole family practices proper hygiene."</p>
      
      <p>Dr. Kwame Asante, a local healthcare provider, notes: "The drama program has been a game-changer. People come to the clinic with better understanding of their health needs and are more likely to follow treatment recommendations."</p>
      
      <h3>Looking Forward</h3>
      <p>We're expanding our drama program to reach even more communities. Our goal is to train 200 community health educators by the end of next year and develop new performance materials covering emerging health topics.</p>
      
      <p>The success of our drama-based approach demonstrates that healthcare education can be both effective and engaging when it respects community culture and uses creative methods to communicate vital information.</p>
    `,
    author: 'Dr. Sarah Mensah',
    authorBio: 'Dr. Sarah Mensah is the Director of Health Education at Twinkle Health Foundation. With over 10 years of experience in community health, she specializes in innovative approaches to health education and community engagement.',
    authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    date: 'September 15, 2025',
    category: 'Health Education',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Health Education', 'Drama', 'Community Health', 'Innovation']
  };

  const relatedPosts = [
    {
      id: 2,
      slug: 'medical-camp-serves-500-patients',
      title: 'Free Medical Camp Serves Over 500 Patients in Remote Villages',
      author: 'John Asante',
      date: 'September 10, 2025',
      category: 'Success Story',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      slug: 'focus-groups-shape-health-programs',
      title: 'Community Focus Groups Shape Future Health Programs',
      author: 'Dr. Ama Serwaa',
      date: 'August 22, 2025',
      category: 'Health Education',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

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
    <div className="blog-post-page">
      <div className="blog-post-hero">
        <div className="container">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          
          <div className="blog-post-header">
            <div className={`post-category ${getCategoryClass(blogPost.category)}`}>
              {blogPost.category}
            </div>
            <h1>{blogPost.title}</h1>
            <div className="post-meta">
              <div className="meta-item">
                <User size={16} />
                <span>{blogPost.author}</span>
              </div>
              <div className="meta-item">
                <Calendar size={16} />
                <span>{blogPost.date}</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-post-image">
        <img src={blogPost.image} alt={blogPost.title} />
      </div>

      <div className="blog-post-content">
        <div className="container">
          <div className="content-wrapper">
            <article className="post-content">
              <div 
                className="post-body"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
              
              <div className="post-tags">
                <h4>Tags:</h4>
                <div className="tags-list">
                  {blogPost.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="post-share">
                <h4>Share this article:</h4>
                <div className="share-buttons">
                  <button className="share-btn facebook">
                    <Facebook size={16} />
                    Facebook
                  </button>
                  <button className="share-btn twitter">
                    <Twitter size={16} />
                    Twitter
                  </button>
                  <button className="share-btn linkedin">
                    <Linkedin size={16} />
                    LinkedIn
                  </button>
                  <button className="share-btn copy">
                    <Share2 size={16} />
                    Copy Link
                  </button>
                </div>
              </div>
            </article>

            <aside className="post-sidebar">
              <div className="author-card">
                <img src={blogPost.authorImage} alt={blogPost.author} className="author-image" />
                <h4>{blogPost.author}</h4>
                <p>{blogPost.authorBio}</p>
              </div>
              
              <div className="related-posts">
                <h4>Related Articles</h4>
                {relatedPosts.map(post => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="related-post">
                    <img src={post.image} alt={post.title} />
                    <div className="related-post-content">
                      <div className={`related-category ${getCategoryClass(post.category)}`}>
                        {post.category}
                      </div>
                      <h5>{post.title}</h5>
                      <div className="related-meta">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;



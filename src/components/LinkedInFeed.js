import React from 'react';
import './LinkedInFeed.css';

const LinkedInFeed = () => {
  const posts = [
    {
      title: 'Prompt Repetition in LLMs',
      excerpt: 'When not using reasoning, repeating the input prompt improves performance for popular models without increasing the number of generated tokens or latency.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80',
      likes: 14,
      comments: 0,
      date: 'Recent',
      url: 'https://www.linkedin.com/feed/update/urn:li:share:7430631845765029888'
    },
    {
      title: 'Built-in Chunking & Source Grounding',
      excerpt: 'Exploring advanced document processing with schema guidance, validation, and chunking techniques for better AI responses.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80',
      likes: 13,
      comments: 0,
      date: 'Recent',
      url: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7428478537960972288'
    },
    {
      title: 'IBM AI Fundamentals Certificate',
      excerpt: 'Artificial Intelligence Fundamentals was issued by IBM SkillsBuild to Rohit Joshi.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80',
      likes: 11,
      comments: 1,
      date: 'Aug 2024',
      url: 'https://www.linkedin.com/feed/update/urn:li:share:7218817351691960320'
    }
  ];

  return (
    <section className="linkedin-feed" id="linkedin">
      <div className="linkedin-container">
        <div className="section-header">
          <span className="section-tag">Social Updates</span>
          <h2 className="section-title">LinkedIn Posts</h2>
          <p className="section-subtitle">
            Sharing insights on AI, automation, and software development.
          </p>
        </div>

        <div className="linkedin-posts-grid">
          {posts.map((post, index) => (
            <article key={index} className="linkedin-post-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="post-image-wrapper">
                <img src={post.image} alt={post.title} className="post-image" />
                <div className="linkedin-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="linkedin-icon">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </div>
              
              <div className="post-content">
                <div className="post-header">
                  <span className="post-date">{post.date}</span>
                </div>
                
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-stats">
                  <div className="stat-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="stat-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>{post.likes}</span>
                  </div>
                  <div className="stat-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="stat-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>{post.comments}</span>
                  </div>
                </div>
                
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="post-link">
                  View on LinkedIn
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="arrow-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInFeed;

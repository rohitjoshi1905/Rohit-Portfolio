import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:rohitjoshi1905@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;
    
    setFormStatus('Opening your email client...');
    setTimeout(() => {
      setFormStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="info-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email',
      value: 'rohitjoshi1905@gmail.com',
      link: 'mailto:rohitjoshi1905@gmail.com'
    },
    {
      icon: (
        <svg className="info-icon-svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      title: 'LinkedIn',
      value: 'rohit-joshi190524',
      link: 'https://linkedin.com/in/rohit-joshi190524'
    },
    {
      icon: (
        <svg className="info-icon-svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      value: 'rohitjoshi1905',
      link: 'https://github.com/rohitjoshi1905'
    },
    {
      icon: (
        <svg className="info-icon-svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.9 2H22.3L14.9 10.4L23.6 22H16.8L11.5 15.1L5.4 22H2L9.9 13L1.6 2H8.4L13.3 8.3L18.9 2Z" />
        </svg>
      ),
      title: 'X (Twitter)',
      value: '@RohitJoshi87982',
      link: 'https://x.com/RohitJoshi87982'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3 className="info-heading">Contact Information</h3>
            <p className="info-description">
              Feel free to reach out to me through any of these channels. I'll get back to you as soon as possible!
            </p>

            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <a 
                  href={info.link}
                  key={index}
                  className="info-card"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <div className="info-title">{info.title}</div>
                    <div className="info-value">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Project Collaboration"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Share your thoughts..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>

              {formStatus && (
                <div className="form-status">{formStatus}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

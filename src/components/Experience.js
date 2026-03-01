import React from 'react';
import './Experience.css';

const Experience = () => {
  const CalendarIcon = () => (
    <svg className="meta-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  const experiences = [
    {
      title: 'AI-Assisted Web Developer',
      company: 'JRS Innovation LLC, Oxmaint-AI',
      location: 'Jaipur, Rajasthan, India',
      period: 'JAN 2026 – Present',
      type: 'Full-Time',
      achievements: [
        'Designed and developed responsive web pages using PHP, HTML, and CSS for heavyvehicleinspection.com and fleetrabbit.com',
        'Improved UI structure and page performance to enhance user experience and reduce bounce rate',
        'Analyzed user behavior and engagement metrics using Microsoft Clarity to optimize page layouts and content placement',
        'Built automated workflows for content updates and internal processes to improve operational efficiency',
        'Performed testing, debugging, and deployment of website updates in production environments'
      ]
    },
    {
      title: 'Associate AI Developer',
      company: 'Adaptiv.me',
      location: 'Ajmer, Rajasthan, India',
      period: 'NOV 2025 – JAN 2026',
      type: 'Full-Time',
      achievements: [
        'Developed Triloka.world, an AI-powered travel recommendation and itinerary generation platform',
        'Collected destination data using web scraping (crawl4ai) and DuckDuckGo for structured travel content',
        'Built preference-based recommendations using BAAI bge-m3 embeddings and Pinecone vector database',
        'Designed a two-service backend architecture with Node.js (Express.js) service for user flow management, destination handling, and MongoDB Atlas integration',
        'Developed a Python-based real-time chat & recommendation service using WebSockets',
        'Integrated LLMs via Portkey, developed frontend in React.js with Firebase Authentication, deployed frontend on Vercel and backend services on AWS EC2'
      ]
    },
    {
      title: 'AI-Assisted Web Developer Intern',
      company: 'JRS Innovation LLC',
      location: 'Jaipur, Rajasthan, India',
      period: 'AUG 2025 – OCT 2025',
      type: 'Internship',
      achievements: [
        'Designed and developed responsive web pages with modern UI/UX practices for HVI, FleetRabbit, Oxmaint Platforms',
        'Implemented document embeddings and integrated with LLM APIs using LangChain for work order automation',
        'Worked on AI-driven solutions combining web development and Generative AI workflows to enhance efficiency'
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Building impactful AI solutions across diverse projects and platforms
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index !== experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">{exp.company}</div>
                    <div className="experience-meta">
                      <span className="experience-location">📍 {exp.location}</span>
                      <span className="experience-period"><CalendarIcon /> {exp.period}</span>
                      <span className={`experience-type ${exp.type.toLowerCase()}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Building AI-Powered Solutions</h2>
          <p className="section-subtitle">
            Transforming ideas into intelligent, scalable applications
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a <strong>Full Stack AI Developer</strong> with a passion for creating production-ready 
              AI applications that make a real impact. With hands-on experience in integrating Large Language 
              Models (LLMs), building RAG architectures, and developing modern web applications, I bridge the 
              gap between cutting-edge AI technology and practical user experiences.
            </p>
            
            <p className="about-paragraph">
              My expertise spans across <strong>Python, FastAPI, Node.js, and React</strong>, enabling me to 
              build full-stack solutions from intelligent backend systems to responsive, intuitive frontends. 
              I've deployed scalable applications on AWS EC2, implemented vector search pipelines, and integrated 
              AI-driven features that enhance user interaction.
            </p>

            <p className="about-paragraph">
              Currently working as an <strong>AI-Assisted Web Developer at JRS Innovation LLC</strong>, I focus 
              on designing responsive web applications and building automated workflows that combine AI capabilities 
              with modern web technologies. I'm passionate about continuous learning and staying at the forefront 
              of AI and web development innovations.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-number">9.59</div>
                <div className="highlight-label">CGPA in B.Tech CSE</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">3+</div>
                <div className="highlight-label">Major Projects</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">1</div>
                <div className="highlight-label">Published Research Paper</div>
              </div>
            </div>

            <div className="about-interests">
              <h3 className="interests-title">What I Love Working With</h3>
              <div className="interests-carousel">
                <div className="carousel-content">
                  <div className="interest-tag">Large Language Models</div>
                  <div className="interest-tag">RAG Architectures</div>
                  <div className="interest-tag">Fast APIs & Microservices</div>
                  <div className="interest-tag">Modern Web Interfaces</div>
                  <div className="interest-tag">Cloud Deployment</div>
                  <div className="interest-tag">Machine Learning</div>
                  {/* Duplicate for infinite scroll effect */}
                  <div className="interest-tag">Large Language Models</div>
                  <div className="interest-tag">RAG Architectures</div>
                  <div className="interest-tag">Fast APIs & Microservices</div>
                  <div className="interest-tag">Modern Web Interfaces</div>
                  <div className="interest-tag">Cloud Deployment</div>
                  <div className="interest-tag">Machine Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 120,
    particles: {
      color: { value: '#f59e0b' },
      links: {
        color: '#fbbf24',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        outModes: { default: 'bounce' },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <section className="hero" id="home">
      <Particles 
        id="tsparticles" 
        init={particlesInit}
        options={particlesOptions}
        className="particles"
      />
      
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="badge-dot"></span>
            Currently Working at JRS Innovation
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm <span className="gradient-text">Rohit Joshi</span>
          </motion.h1>
          
          <div className="hero-subtitle-wrapper">
            <TypeAnimation
              sequence={[
                'Full Stack AI Developer',
                2000,
                'LLM Integration Specialist',
                2000,
                'RAG Architecture Expert',
                2000,
                'Machine Learning Engineer',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="hero-subtitle"
              repeat={Infinity}
            />
          </div>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Specializing in building production-ready AI applications with LLMs, RAG architectures, 
            and modern web technologies. Passionate about creating intelligent systems that combine 
            cutting-edge AI with seamless user experiences.
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button 
              onClick={scrollToContact} 
              className="cta-button primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245, 158, 11, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <span className="btn-icon">🚀</span>
            </motion.button>
            <motion.button 
              onClick={scrollToProjects} 
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <span className="btn-icon">💼</span>
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.a 
              href="https://github.com/rohitjoshi1905" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/rohit-joshi190524" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://x.com/RohitJoshi87982" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 2H22.3L14.9 10.4L23.6 22H16.8L11.5 15.1L5.4 22H2L9.9 13L1.6 2H8.4L13.3 8.3L18.9 2Z" />
              </svg>
            </motion.a>
            <motion.a 
              href="mailto:rohitjoshi1905@gmail.com" 
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Tilt
            className="tilt-container"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={2000}
            gyroscope={true}
          >
            <div className="visual-3d-card">
              <div className="card-glow"></div>
              <div className="code-window">
                <div className="code-header">
                  <span className="code-dot" style={{backgroundColor: '#ff5f56'}}></span>
                  <span className="code-dot" style={{backgroundColor: '#ffbd2e'}}></span>
                  <span className="code-dot" style={{backgroundColor: '#27c93f'}}></span>
                  <span className="code-title">developer.js</span>
                </div>
                <div className="code-content">
                  <pre><code><span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}</code></pre>
                  <pre><code>  name: <span className="code-string">"Rohit Joshi"</span>,</code></pre>
                  <pre><code>  role: <span className="code-string">"Full Stack AI Dev"</span>,</code></pre>
                  <pre><code>  skills: [<span className="code-string">"AI"</span>, <span className="code-string">"LLMs"</span>, <span className="code-string">"React"</span>],</code></pre>
                  <pre><code>  passion: <span className="code-string">"Building AI Solutions"</span>,</code></pre>
                  <pre><code>  available: <span className="code-boolean">true</span></code></pre>
                  <pre><code>{'}'}</code></pre>
                </div>
              </div>
              
              <div className="tech-highlights">
                <div className="tech-badge">
                  <svg className="tech-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                  <span className="tech-text">LLMs & RAG</span>
                </div>
                <div className="tech-badge">
                  <svg className="tech-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
                    <polyline points="17 2 12 7 7 2"/>
                  </svg>
                  <span className="tech-text">AI Integration</span>
                </div>
                <div className="tech-badge">
                  <svg className="tech-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span className="tech-text">React & Node</span>
                </div>
                <div className="tech-badge">
                  <svg className="tech-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.5 0L20 4.3v7.4l-7.5 4.3L5 11.7V4.3L12.5 0zm0 17l-7.5-4.3v-7.4l7.5 4.3 7.5-4.3v7.4L12.5 17z"/>
                  </svg>
                  <span className="tech-text">Python & ML</span>
                </div>
                <div className="tech-badge">
                  <svg className="tech-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.626.51-4.896.03-.295.055-.59.081-.874.468-5.127 4.166-8.62 4.211-8.675z"/>
                  </svg>
                  <span className="tech-text">MongoDB</span>
                </div>
                <div className="tech-badge">
                  <svg className="tech-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m0 2.715h2.119a.185.185 0 00.185-.185v-1.888a.185.185 0 00-.185-.185h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m2.964 0h2.12a.185.185 0 00.184-.185v-1.888a.185.185 0 00-.184-.185h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185m2.93 0h2.118a.185.185 0 00.185-.185v-1.888a.185.185 0 00-.185-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.715h2.118a.185.185 0 00.185-.185v-1.888a.185.185 0 00-.185-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185v-1.888a.185.185 0 00-.184-.185h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185v-1.888a.185.185 0 00-.185-.185h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.072-1.942.188-3.08.652-3.763 1.093-.122-1.392-.21-2.836-.293-4.27-.043-.732-.065-1.104-.118-1.442-.127-.816-.51-1.664-1.414-2.48-1.524-1.378-3.68-1.757-4.184-1.757H9.278c-.508 0-2.665.379-4.19 1.758-.904.815-1.287 1.663-1.414 2.479-.053.338-.074.71-.118 1.442-.082 1.434-.17 2.878-.293 4.27-.684-.44-1.822-.905-3.764-1.093a13.507 13.507 0 00-1.01-.072c-1.283 0-1.89.459-1.955.51L0 10.482v7.76h.691c.467 0 4.695.072 5.402 3.643l.006.022c.303 1.287.697 2.84.88 3.4.087.27.171.453.256.606.085.153.178.29.306.422.332.33.818.585 1.412.585h.22c.594 0 1.08-.255 1.412-.585.128-.132.221-.269.306-.422.085-.153.169-.336.256-.606.183-.56.577-2.113.88-3.4l.006-.022c.707-3.571 4.935-3.643 5.402-3.643h.691v-7.76l-.015-.017z"/>
                  </svg>
                  <span className="tech-text">Docker</span>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

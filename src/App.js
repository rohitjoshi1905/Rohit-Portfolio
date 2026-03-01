import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import LinkedInFeed from './components/LinkedInFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show scroll-to-top button and track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Get accurate document height with padding for last element
      const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        document.body.offsetHeight
      );
      
      // Calculate how much is scrollable (with extra padding to reach 100% at absolute bottom)
      const scrollableHeight = documentHeight - windowHeight - 50;
      
      // Calculate percentage - will be 100% only at the absolute bottom
      const scrolled = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      
      // Cap at 100%
      const cappedProgress = Math.min(scrolled, 100);
      setScrollProgress(cappedProgress);

      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Trigger once on mount to calculate initial height
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <LinkedInFeed />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll to top button with progress indicator */}
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          <svg className="scroll-progress-circle" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="scroll-progress-bg" />
            <circle
              cx="50"
              cy="50"
              r="45"
              className="scroll-progress-fill"
              style={{
                strokeDashoffset: 282.7 - (scrollProgress / 100) * 282.7,
              }}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <span className="scroll-arrow">↑</span>
        </button>
      )}
    </div>
  );
}

export default App;

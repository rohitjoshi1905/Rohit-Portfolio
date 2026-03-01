import React from 'react';
import './Skills.css';

const Skills = () => {
  const renderCategoryIcon = (iconType) => {
    const commonProps = {
      className: 'category-icon-svg',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    };

    switch (iconType) {
      case 'ai':
        return (
          <svg {...commonProps}>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M8 9h8" />
            <path d="M8 15h5" />
            <circle cx="16.5" cy="15.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
        );
      case 'ml':
        return (
          <svg {...commonProps}>
            <path d="M4 18V6" />
            <path d="M10 18V10" />
            <path d="M16 18V13" />
            <path d="M22 18V8" />
            <path d="M2 18h20" />
          </svg>
        );
      case 'backend':
        return (
          <svg {...commonProps}>
            <ellipse cx="12" cy="5" rx="7" ry="3" />
            <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
            <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
          </svg>
        );
      case 'scraping':
        return (
          <svg {...commonProps}>
            <path d="M3 12h18" />
            <path d="M12 3v18" />
            <path d="M7 7c2 2 2 8 0 10" />
            <path d="M17 7c-2 2-2 8 0 10" />
          </svg>
        );
      case 'database':
        return (
          <svg {...commonProps}>
            <ellipse cx="12" cy="5" rx="7" ry="3" />
            <path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
            <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
          </svg>
        );
      case 'frontend':
        return (
          <svg {...commonProps}>
            <rect x="3" y="4" width="18" height="14" rx="2" />
            <path d="M8 20h8" />
            <path d="M12 18v2" />
          </svg>
        );
      case 'soft':
        return (
          <svg {...commonProps}>
            <circle cx="12" cy="8" r="3" />
            <path d="M6 19c1.5-3 3.5-4.5 6-4.5S16.5 16 18 19" />
          </svg>
        );
      default:
        return null;
    }
  };

  const skillCategories = [
    {
      title: 'Generative AI & LLMs',
      icon: 'ai',
      skills: [
        'Large Language Models (LLMs)',
        'HuggingFace Transformers',
        'LangChain',
        'RAG Pipeline',
        'Portkey (LLM Gateway)'
      ]
    },
    {
      title: 'Data Analysis & ML',
      icon: 'ml',
      skills: [
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Feature Engineering',
        'Document Embeddings'
      ]
    },
    {
      title: 'Backend & APIs',
      icon: 'backend',
      skills: [
        'Python',
        'FastAPI',
        'Flask',
        'Node.js',
        'Express.js',
        'REST APIs',
        'WebSockets',
        'N8N Automation'
      ]
    },
    {
      title: 'Web Scraping & Data',
      icon: 'scraping',
      skills: [
        'crawl4ai',
        'scrapegraphAi',
        'Data Cleaning',
        'Structured Data Extraction'
      ]
    },
    {
      title: 'Databases & Tools',
      icon: 'database',
      skills: [
        'MongoDB',
        'MySQL',
        'Vector Database',
        'Git & GitHub',
        'Postman',
        'Docker',
        'Jupyter Notebook',
        'Google Colab'
      ]
    },
    {
      title: 'Frontend & Deployment',
      icon: 'frontend',
      skills: [
        'React.js',
        'PHP',
        'HTML & CSS',
        'JavaScript',
        'Vercel',
        'AWS EC2',
        'Firebase Authentication',
        'Render'
      ]
    },
    {
      title: 'Soft Skills',
      icon: 'soft',
      skills: [
        'Problem Solving',
        'Team Collaboration',
        'Critical Thinking',
        'Automated Workflows',
        'Working with Jira Tickets'
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-tag">Technical Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building intelligent, scalable applications
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{renderCategoryIcon(category.icon)}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

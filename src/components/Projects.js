import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AI Medical Chatbot with RAG',
      description: 'Built a Generative AI chatbot for healthcare Q&A using Retrieval-Augmented Generation (RAG) architecture. Integrated HuggingFace LLMs with LangChain to process user queries and perform semantic document retrieval.',
      technologies: ['Python', 'HuggingFace', 'LangChain', 'RAG', 'Embeddings'],
      highlights: [
        'Designed embedding-based retrieval pipeline for relevant medical context',
        'Integrated HuggingFace LLMs for accurate response generation',
        'Implemented semantic document retrieval using RAG architecture'
      ],
      category: 'AI/ML',
      link: 'https://youtu.be/SUeGODW2t8U'
    },
    {
      title: 'Breast Cancer Detection Using NGS Data',
      description: 'Designed a genomics pipeline to detect BRCA1/BRCA2 mutations using publicly available NGS datasets. Performed alignment and variant calling, then built a machine learning classification model.',
      technologies: ['Python', 'Scikit-learn', 'Bioinformatics Tools', 'SRA Toolkit', 'Bowtie2'],
      highlights: [
        'Performed alignment and variant calling using Bowtie2, Samtools, and BCFtools',
        'Extracted mutation-based features for ML classification',
        'Evaluated model performance using accuracy, precision, recall, and confusion matrix',
        'Presented research paper at ICRTMD 2025'
      ],
      category: 'Research',
      link: 'https://youtu.be/Gg8h3MXBfWE'
    },
    {
      title: 'AI Task Planner with FastAPI & Firebase',
      description: 'Developed a full-stack AI-powered task planning application with secure user authentication using Firebase. Built scalable backend APIs and designed responsive frontend.',
      technologies: ['Python', 'FastAPI', 'Firebase Auth', 'MongoDB', 'HTML/CSS', 'JavaScript'],
      highlights: [
        'Built scalable backend APIs using FastAPI',
        'Integrated Firebase Authentication for secure user management',
        'Designed responsive frontend with seamless API integration',
        'Deployed on Vercel (frontend) and Render (backend)'
      ],
      category: 'Full Stack',
      link: 'https://task-frontend-seven-sandy.vercel.app/'
    },
    {
      title: 'Triloka.world - AI Travel Platform',
      description: 'Led development of an AI-powered travel recommendation and itinerary generation platform with real-time chat and personalized suggestions using vector embeddings.',
      technologies: ['React.js', 'Node.js', 'Python', 'Pinecone', 'WebSockets', 'AWS EC2'],
      highlights: [
        'Implemented preference-based recommendations using BAAI bge-m3 embeddings',
        'Built two-service backend architecture with Node.js and Python',
        'Integrated LLMs via Portkey for intelligent responses',
        'Deployed on AWS EC2 with Vercel frontend'
      ],
      category: 'Full Stack',
      link: 'https://triloka.world'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing innovative AI solutions and full-stack applications
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-body">
                <div className="project-highlights">
                  <h4 className="highlights-title">Key Highlights</h4>
                  <ul className="highlights-list">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="highlight-point">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  <h4 className="tech-title">Technologies</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, tIndex) => (
                      <span key={tIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project →
                  </a>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

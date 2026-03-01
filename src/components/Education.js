import React from 'react';
import './Education.css';

const Education = () => {
  const CalendarIcon = () => (
    <svg className="meta-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering',
      institution: 'Government Engineering College, Ajmer',
      location: 'Rajasthan, India',
      graduation: 'June 2025',
      cgpa: '9.59/10',
      coursework: [
        'Artificial Intelligence',
        'Machine Learning',
        'Deep Learning',
        'Data Science',
        'Data Structures & Algorithms'
      ],
      extracurricular: [
        'National Cadet Corps (NCC)',
        'National Service Scheme (NSS)',
        'Scouts'
      ]
    },
    {
      degree: 'Senior Secondary (CBSE)',
      institution: 'Jawahar Navodaya Vidyalaya (JNV), Kherli',
      location: 'District Dausa, Rajasthan',
      graduation: '2021',
      percentage: '92.0%'
    },
    {
      degree: 'Secondary (CBSE)',
      institution: 'Jawahar Navodaya Vidyalaya (JNV), Kherli',
      location: 'District Dausa, Rajasthan',
      graduation: '2019',
      percentage: '89.4%'
    }
  ];

  const achievements = [
    {
      title: 'Research Paper Publication',
      description: 'Presented a research paper on "Developing an Automated Computational Genomics Pipeline for Breast Cancer Detection Using NGS" at the 3rd International Conference on Recent Trends in Materials Science & Devices (ICRTMD 2025)',
      publisher: 'Research Plateau',
      icon: '📄'
    }
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education & Achievements</h2>
          <p className="section-subtitle">
            A strong foundation in computer science and continuous learning
          </p>
        </div>

        <div className="education-content">
          <div className="education-timeline">
            <h3 className="content-heading">🎓 Education</h3>
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="education-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="education-header">
                  <div>
                    <h4 className="education-degree">{edu.degree}</h4>
                    {edu.field && <div className="education-field">{edu.field}</div>}
                    <div className="education-institution">{edu.institution}</div>
                    <div className="education-meta">
                      <span className="education-meta-item">📍 {edu.location}</span>
                      <span className="education-meta-item"><CalendarIcon /> {edu.graduation}</span>
                    </div>
                  </div>
                  <div className="education-score">
                    {edu.cgpa && (
                      <div className="score-value">{edu.cgpa}</div>
                    )}
                    {edu.percentage && (
                      <div className="score-value">{edu.percentage}</div>
                    )}
                  </div>
                </div>

                {edu.coursework && (
                  <div className="education-details">
                    <div className="details-section">
                      <strong>Relevant Coursework:</strong>
                      <div className="coursework-tags">
                        {edu.coursework.map((course, cIndex) => (
                          <span key={cIndex} className="course-tag">{course}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {edu.extracurricular && (
                  <div className="education-details">
                    <div className="details-section">
                      <strong>Extracurricular Activities:</strong>
                      <div className="extra-tags">
                        {edu.extracurricular.map((activity, aIndex) => (
                          <span key={aIndex} className="extra-tag">{activity}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="achievements-section">
            <h3 className="content-heading">🏆 Achievements</h3>
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="achievement-card"
                style={{ animationDelay: `${(education.length + index) * 0.1}s` }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-content">
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">{achievement.description}</p>
                  <div className="achievement-publisher">Publisher: {achievement.publisher}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

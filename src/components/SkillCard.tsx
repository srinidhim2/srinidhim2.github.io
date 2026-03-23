import React from 'react';
import './SkillCard.css';

interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    icon: '💻',
    skills: ['Python', 'Node.js', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Backend & APIs',
    icon: '⚙️',
    skills: ['Django', 'FastAPI', 'Express.js', 'REST APIs'],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    skills: ['LangChain', 'RAG', 'CrewAI', 'Agent2Agent'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
  },
  {
    category: 'Messaging',
    icon: '📡',
    skills: ['Kafka', 'RabbitMQ'],
  },
];

const SkillCard: React.FC = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">
        <span className="title-accent">#</span> Skills & Technologies
      </h2>
      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div className="skill-category" key={idx}>
            <div className="skill-category-header">
              <span className="skill-icon">{cat.icon}</span>
              <h3>{cat.category}</h3>
            </div>
            <div className="skill-tags">
              {cat.skills.map((skill, sIdx) => (
                <span className="skill-tag" key={sIdx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillCard;

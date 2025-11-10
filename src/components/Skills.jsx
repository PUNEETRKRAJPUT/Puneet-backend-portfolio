import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: ['JavaScript', 'TypeScript', 'Node.js', 'Python']
    },
    {
      title: 'Frameworks',
      icon: '🚀',
      skills: ['NestJS', 'Express.js', 'Sails.js', 'FastAPI']
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS Lambda', 'S3', 'SQS', 'SNS', 'ECS', 'EC2', 'Docker', 'Jenkins', 'Git']
    },
    {
      title: 'Architecture',
      icon: '🏗️',
      skills: ['Microservices', 'RESTful APIs', 'Kafka', 'SQS', 'Redis']
    },
    {
      title: 'ORMs & Tools',
      icon: '🛠️',
      skills: ['TypeORM', 'Mongoose', 'Sequelize', 'Prisma', 'New Relic', 'CubeAPM', 'Typesense']
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
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

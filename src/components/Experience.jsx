import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Spyne',
      via: 'via Antino Labs',
      role: 'Backend Developer',
      period: 'Mar 2025 – Present',
      highlights: [
        'Cut code duplication by 60% by merging multiple API formatters into a universal Node.js module, streamlining updates across services.',
        'Refactored MongoDB schema to slash storage usage by 60% and speed up queries by 40%, making data access faster for high-traffic operations',
        'Reduced vehicle image processing time from 9 hours to 1 hour using Lambda, Kafka, and Redis, maintaining daily throughput for over 50K records',
        'Integrated multi-channel adapters (ClearVin, AuthBridge, FTP) with AWS SQS/SNS, strengthening error handling and pipeline reliability.',
        'Enhanced system monitoring for real-time vehicle scoring using distributed consumers and cross-region deployment.'
      ]
    },
    {
      company: 'Zoca.ai',
      via: 'via Antino Labs',
      role: 'Backend Developer',
      period: 'Jan 2025 – Mar 2025',
      highlights: [
        'Refactored Node.js monorepo for easier maintenance, improving onboarding speed and code quality by 70%.',
        'Built an LLM-powered keyword tool, automating ad campaign setup with seamless Google Ads integration.',
        'Managed 100K+ metadata records across MongoDB and S3, ensuring reliability and quick access for campaign analytics.',
        'Delivered robust orchestration using ECS and SQS, upholding system stability while supporting Agile release cycles.',
        'Participated in code reviews, collaborating to resolve deployment blockers quickly.'
      ]
    },
    {
      company: 'BLive E-Mobility Platform',
      via: 'Antino Labs',
      role: 'Software Developer',
      period: 'Feb 2024 – Dec 2024',
      highlights: [
        'Developed RESTful backend architecture with NestJS and PostgreSQL, driving reliable vehicle tracking and management features.',
        'Designed modular microservices for real-time GPS tracking, improving vehicle monitoring capabilities',
        'Automated EKYC flows and integrated with third-party APIs (LocoNav, OLA), boosting verification accuracy by 60%.',
        'Led Agile sprints, established CI/CD pipelines, and managed code reviews to ensure smooth releases',
        'Supported production troubleshooting and feature rollouts in high-traffic environments.'
      ]
    },
    {
      company: 'IBT Platform',
      via: 'Freelance',
      role: 'Backend Developer',
      period: 'Aug 2023 – Jan 2024',
      highlights: [
        'Engineered scalable backend using NestJS, PostgreSQL, and AWS, enabling growth for lost & found products across B2C/B2B models',
        'Built QR-based messaging via Socket.io and multi-channel notifications (Firebase/SMS), enabling real-time customer engagement.',
        'Automated processing for QR and images, reducing overall workflow time by 70%',
        'Deployed Jenkins CI/CD pipelines, maintaining high uptime and stable releases.',
        'Improved system responsiveness and supported bulk updates with async job handling.'
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2>Professional Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      {exp.company} <span className="exp-via">{exp.via}</span>
                    </div>
                  </div>
                  <div className="exp-period">{exp.period}</div>
                </div>

                <ul className="exp-highlights">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements glass-card">
          <h3 className="achievements-title">Key Achievement</h3>
          <p className="achievement-highlight">
            Reduced vehicle processing time by 90% through implementation of multi-region Lambda/Kafka architecture
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

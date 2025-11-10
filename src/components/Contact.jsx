import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'puneetrkrajput@gmail.com',
      link: 'mailto:puneetrkrajput@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 8171171008',
      link: 'tel:+918171171008'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Dayal Bagh, Agra, 282005',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/puneet-kumar-173111236/',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/PUNEETRKRAJPUT',
      color: '#333'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>

        <p className="contact-intro">
          I'm currently available for new opportunities. Whether you have a question
          or just want to say hi, feel free to reach out!
        </p>

        <div className="contact-grid">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="contact-card glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-label">{item.label}</div>
              {item.link ? (
                <a href={item.link} className="contact-value">
                  {item.value}
                </a>
              ) : (
                <div className="contact-value">{item.value}</div>
              )}
            </div>
          ))}
        </div>

        <div className="social-links">
          <h3>Connect with me</h3>
          <div className="social-buttons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn glass-card"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer">
          <p></p>
          <p>&copy; 2025 Puneet Kumar. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

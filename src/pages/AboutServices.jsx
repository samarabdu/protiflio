import React from 'react';

const AboutServices = () => {
  const services = [
    { name: 'Graphic Design', icon: '💡' },
    { name: 'Web Design', icon: '🎨' },
    { name: 'Software', icon: '🗄️' },
    { name: 'Application', icon: '📱' },
  ];

  return (
    <div className="section">
      <p className="section-label">ABOUT US</p>
      <h2 className="section-title">WHO AM I?</h2>
      <p className="section-text">
        Hi Im Jackson Ford <span style={{ color: '#007bff', fontWeight: 'bold' }}>On her way she met a copy.</span> The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.
      </p>
      <p className="section-text">
        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-name">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutServices;

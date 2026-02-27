import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      date: '2017-2018',
      description: 'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.',
      color: 'blue',
      icon: '✏️',
    },
    {
      title: 'Front End Developer at Google Company',
      date: '2017-2018',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      color: 'red',
      icon: '✏️',
    },
    {
      title: 'System Analyst',
      date: '2017-2018',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      color: 'yellow',
      icon: '✏️',
    },
  ];

  return (
    <div className="section">
      <p className="section-label">EXPERIENCE</p>
      <h2 className="section-title">WORK EXPERIENCE</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`experience-item ${exp.color}`}>
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-date">{exp.date}</p>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

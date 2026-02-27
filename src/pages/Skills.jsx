import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Photoshop', percentage: 75, color: 'skill-bar-blue' },
    { name: 'jQuery', percentage: 60, color: 'skill-bar-red' },
    { name: 'HTML5', percentage: 85, color: 'skill-bar-yellow' },
    { name: 'CSS3', percentage: 90, color: 'skill-bar-purple' },
    { name: 'WordPress', percentage: 70, color: 'skill-bar-teal' },
    { name: 'SEO', percentage: 80, color: 'skill-bar-dark' },
  ];

  return (
    <div className="section">
      <p className="section-label">MY SPECIALTY</p>
      <h2 className="section-title">MY SKILLS</h2>
      <p className="section-text">
        The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-label">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="skill-bar">
              <div
                className={`skill-bar-fill ${skill.color}`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

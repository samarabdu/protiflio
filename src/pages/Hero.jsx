import React, { useState, useEffect } from 'react';
import heroImage1 from '../assets/profile3-removebg-preview.png';
import heroImage2 from '../assets/profile2-removebg-preview.png';

const Hero = () => {
  const [currentSection, setCurrentSection] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // Change section every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {/* First Hero Section */}
      <div 
        className={`hero-section ${currentSection === 0 ? 'active' : 'inactive'}`}
      >
        <div className="hero-left">
          <h1 className="hero-title">I am a</h1>
          <h1 className="hero-title">Developer</h1>
          <p className="hero-subtitle">
            100% HTML5 Bootstrap Templates Made By{' '}
            <a href="#colorlib" className="hero-link">
              Colorlib.com
            </a>
          </p>
          <button className="btn-custom btn-bordered">VIEW PORTFOLIO</button>
        </div>
        <div className="hero-right">
          <img src={heroImage1} alt="Developer" />
        </div>
      </div>

      {/* Second Hero Section */}
      <div 
        className={`hero-section ${currentSection === 1 ? 'active' : 'inactive'}`}
      >
        <div className="hero-left">
          <h1 className="hero-title">I'm Samar</h1>
          <h1 className="hero-title">Khaled</h1>
          <p className="hero-subtitle">
            100% HTML5 Bootstrap Templates Made By{' '}
            <a href="#colorlib" className="hero-link">
              Colorlib.com
            </a>
          </p>
          <button className="btn-custom btn-bordered">DOWNLOAD CV</button>
        </div>
        <div className="hero-right">
          <img src={heroImage2} alt="Samar Khaled" />
        </div>
      </div>

      {/* Indicators */}
      <div className="hero-indicators">
        <button 
          className={`indicator ${currentSection === 0 ? 'active' : ''}`}
          onClick={() => setCurrentSection(0)}
          aria-label="Section 1"
        ></button>
        <button 
          className={`indicator ${currentSection === 1 ? 'active' : ''}`}
          onClick={() => setCurrentSection(1)}
          aria-label="Section 2"
        ></button>
      </div>
    </div>
  );
};

export default Hero;

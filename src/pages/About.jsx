import React from "react";
import "../index.css";
const About = () => {
  return (
    <div className="container-main">
      {/* Sidebar */}
      <aside className="sidebar">
        <img
          src=""
          alt="Profile"
        />
        <h2>Samar Khaled</h2>
        <p>frontend developer</p>

        <ul>
          <li><a href="Hero.jsx" >HOME</a></li>
          <li><a href="About.jsx" className="active" >ABOUT</a></li>
          <li><a href="Skill.jsx">SKILLS</a></li>
          <li><a href="Experiences.jsx">EXPERIENCE</a></li>
          <li><a href="Protflio.jsx">WORK</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section className="about-section">
          <p className="about-label">ABOUT US</p>
          <h2 className="about-heading">WHO AM I?</h2>

          <p className="about-description">
            <strong>Hi I'm samar khaled</strong> I’m a Frontend Developer who loves building beautiful and interactive websites. I’m passionate about web development and interested in using Artificial Intelligence to make web experiences smarter and more helpful.
          </p>

          <p className="about-description">
            I also love design. With my UI/UX training, I focus on creating websites that are not only nice to look at, but also easy and enjoyable to use.

            I’m always excited to learn new things, improve my skills, and try creative ideas in my projects.
          </p>

          <div className="about-cards">
            <div className="card blue">
              <h4>full stack</h4>
            </div>

            <div className="card red">
              <h4>front react</h4>
            </div>

            <div className="card yellow">
              <h4>backend node js</h4>
            </div>

            <div className="card purple">
              <h4>ui/ux</h4>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
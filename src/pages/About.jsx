import React from "react";
import "../index.css";
import profileImage from "../assets/profile2-removebg-preview.png";

const About = () => {
  return (
    <div className="container-main">
      {/* Sidebar */}
      <aside className="sidebar">
        <img
          src={profileImage}
          alt="Samar Khaled"
          className="profile-img"
        />

        <h2>Samar Khaled</h2>
        <p>Frontend Developer</p>

        <ul>
          <li><a href="home">HOME</a></li>
          <li><a href="about" className="active">ABOUT</a></li>
          <li><a href="skills">SKILLS</a></li>
          <li><a href="experience">EXPERIENCE</a></li>
          <li><a href="work">WORK</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section className="about-section">
          <p className="about-label">ABOUT ME</p>
          <h2 className="about-heading">WHO AM I?</h2>

          <p className="about-description">
            <strong>Hi I'm Samar Khaled</strong> I’m a Frontend Developer who
            loves building beautiful and interactive websites. I’m passionate
            about web development and interested in using Artificial
            Intelligence to make web experiences smarter and more helpful.
          </p>

          <p className="about-description">
            I also love design. With my UI/UX training, I focus on creating
            websites that are not only nice to look at, but also easy and
            enjoyable to use.
          </p>

          <div className="about-cards">
            <div className="card blue">
              <h4>Full Stack</h4>
            </div>

            <div className="card red">
              <h4>React Frontend</h4>
            </div>

            <div className="card yellow">
              <h4>Node.js Backend</h4>
            </div>

            <div className="card purple">
              <h4>UI / UX</h4>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
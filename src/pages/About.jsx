import React from "react";
import "../index.css";

const About = () => {
  return (
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
  );
};

export default About;
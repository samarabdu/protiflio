import React from "react";
import profileImage from "../assets/profile2-removebg-preview.png";

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <img src={profileImage} alt="Samar" />
        <h3>Samar Khaled</h3>
        <p>Frontend Developer</p>
      </div>

      <ul className="sidebar-nav">
        {["home", "about", "skills", "experience", "work"].map((page) => (
          <li key={page}>
            <a
              href={`#${page}`}
              className={activePage === page ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActivePage(page);
              }}
            >
              {page.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
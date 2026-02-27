import React from 'react';

const Sidebar = ({ activePage, setActivePage }) => {
  const profileImage = '../assets/profile.png';

  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <img src={profileImage} alt="samar" />
        <h3>Samar Khaled</h3>
        <p>frontend developer</p>
      </div>
      <ul className="sidebar-nav">
        <li>
          <a
            href="#home"
            className={activePage === 'home' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              setActivePage('home');
            }}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activePage === 'about' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              setActivePage('about');
            }}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={activePage === 'skills' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              setActivePage('skills');
            }}
          >
            SKILLS
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className={activePage === 'experience' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              setActivePage('experience');
            }}
          >
            EXPERIENCE
          </a>
        </li>
        <li>
          <a
            href="#work"
            className={activePage === 'work' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              setActivePage('work');
            }}
          >
            WORK
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

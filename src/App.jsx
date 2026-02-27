import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './pages/Hero';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'work':
        return <Portfolio />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="container-main">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;

// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('dark-mode', (!darkMode).toString());
  };

  return (
    <header className="header">
      <div className="logo">
        <span>My portafolio</span>
      </div>
      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/certificates">Certificado</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? '🌞' : '🌜'}
      </button>
    </header>
  );
};

export default Header;

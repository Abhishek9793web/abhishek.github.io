import React, { useState, useEffect } from 'react';
import './style.css';
import "./main"; // Not sure what this import is for, so leaving it as is

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className={`fixed-top d-flex justify-content-center align-items-center header-transparent ${scrolled ? 'header-scrolled' : ''}`}>
      <nav id="navbar" className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <ul>
          <li><a className="nav-link scrollto active" href="/">Home</a></li>
          <li><a className="nav-link scrollto" href="/about">About</a></li>
          <li><a className="nav-link scrollto" href="/portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="/resume">Resume</a></li>
          <li><a className="nav-link scrollto" href="/contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </header>
  );
}

export default Navbar;

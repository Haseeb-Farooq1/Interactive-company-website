import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">ACADIA COMMERCE</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/scalonics-promise">Scalonics Promise</a></li>
        <li><a href="/success-stories">Success Stories</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <div className="navbar-cta">
        <a href="https://www.hubspot.com/meetings" target="_blank" rel="noopener noreferrer" className="cta-button">Get Started</a>
      </div>
    </nav>
  );
};

export default Navbar;

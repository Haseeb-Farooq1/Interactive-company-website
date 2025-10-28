import React from 'react';
import logo from '../assets/logo.png'; // Corrected path to your logo
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Scaleonics Logo" />
        </a>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li 
          className={`dropdown-container ${dropdown ? 'active' : ''}`}
          onMouseEnter={() => setDropdown(true)} 
          onMouseLeave={() => setDropdown(false)}
        >
          <Link to="/services">Services</Link>
          <div className="dropdown-menu">
            <Link to="/services/amazon-ppc" className="dropdown-item">
              <div>
                <h3>AMAZON SEARCH (PPC)</h3>
                <p>Grow your business with a dedicated PPC partner</p>
              </div>
            </Link>
            <Link to="/services/amazon-dsp" className="dropdown-item">
              <div>
                <h3>AMAZON DSP</h3>
                <p>Optimize your funnel with expert DSP strategies</p>
              </div>
            </Link>
            <Link to="/services/walmart-connect" className="dropdown-item">
              <div>
                <h3>WALMART CONNECT</h3>
                <p>Grow beyond Amazon with Walmart Connect search optimizations</p>
              </div>
            </Link>
            <Link to="/services/retail-media" className="dropdown-item">
              <div>
                <h3>RETAIL MEDIA EXPANSION</h3>
                <p>Grow beyond Amazon with Walmart Connect search optimizations</p>
              </div>
            </Link>
          </div>
        </li>
        <li><Link to="/scalonics-promise">Scalonics Promise</Link></li>
        <li><Link to="/success-stories">Success Stories</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="navbar-cta">
        <a href="https://www.hubspot.com/meetings" target="_blank" rel="noopener noreferrer" className="cta-button">Get Started</a>
      </div>
    </nav>
  );
};

export default Navbar;

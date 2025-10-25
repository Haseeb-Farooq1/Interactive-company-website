import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3 className="footer-title">ACADIA COMMERCE</h3>
          <p>Your strategic e-commerce partner for profitable growth on online marketplaces. We invest our expertise and AI to grow your brand.</p>
        </div>
        <div className="footer-section links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/scalonics-promise">Scalonics Promise</a></li>
            <li><a href="/success-stories">Success Stories</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3 className="footer-title">Get in Touch</h3>
          <p>Email: contact@acadiacommerce.com</p>
          <p>Phone: (123) 456-7890</p>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">t</a>
            <a href="#" className="social-icon">in</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ACADIA COMMERCE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

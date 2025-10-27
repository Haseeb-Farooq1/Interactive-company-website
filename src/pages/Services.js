import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>We offer a wide range of services to help your business grow.</p>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <h2>Service One</h2>
          <p>Description of service one. We provide the best solutions for your business needs.</p>
        </div>
        <div className="service-card">
          <h2>Service Two</h2>
          <p>Description of service two. Our team of experts is here to help you succeed.</p>
        </div>
        <div className="service-card">
          <h2>Service Three</h2>
          <p>Description of service three. We are committed to delivering high-quality results.</p>
        </div>
        <div className="service-card">
          <h2>Service Four</h2>
          <p>Description of service four. Let us help you achieve your business goals.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from 'react';
import './ScalonicsPromise.css';

const ScalonicsPromise = () => {
  return (
    <div className="scalonics-promise-container">
      <div className="scalonics-promise-hero">
        <h1>Our Promise</h1>
        <p>We are dedicated to your success. Here's what we promise.</p>
      </div>
      <div className="scalonics-promise-grid">
        <div className="promise-card">
          <h2>Quality</h2>
          <p>We promise to deliver the highest quality services and products to our clients.</p>
        </div>
        <div className="promise-card">
          <h2>Integrity</h2>
          <p>We conduct our business with the utmost integrity and transparency.</p>
        </div>
        <div className="promise-card">
          <h2>Innovation</h2>
          <p>We are constantly innovating to provide you with the best possible solutions.</p>
        </div>
      </div>
    </div>
  );
};

export default ScalonicsPromise;

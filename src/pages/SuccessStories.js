import React from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
  return (
    <div className="success-stories-container">
      <div className="success-stories-hero">
        <h1>Success Stories</h1>
        <p>Read about how we've helped our clients achieve their goals.</p>
      </div>
      <div className="success-stories-grid">
        <div className="story-card">
          <h2>Client One</h2>
          <p>"This company has transformed our business. We've seen a 200% increase in revenue."</p>
        </div>
        <div className="story-card">
          <h2>Client Two</h2>
          <p>"The best team we've ever worked with. Highly recommended."</p>
        </div>
        <div className="story-card">
          <h2>Client Three</h2>
          <p>"Their innovative solutions have taken our company to the next level."</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;

import React from 'react';
import './Hero.css';

const Hero = () => {
  const items = [
    { 
      id: 'hijackers',
      label: 'HIJACKERS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: 'reseller',
      label: 'RESELLER CHAOS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      id: 'map',
      label: 'MAP VIOLATIONS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3L8 2L16 6L21 4V19L16 21L8 17L3 19V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: 'listings',
      label: 'IMPERFECT LISTINGS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 3V21" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      id: 'brand',
      label: 'BRAND CREDIBILITY',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ];
  
  return (
    <div className="hero">
      {/* Starfield background */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      {/* Main content */}
      <div className="hero-content">
        <h1 className="hero-title">HELPING BRANDS WIN AGAINST</h1>
        
        {/* Circular diagram container */}
        <div className="circular-diagram">
          {/* Horizontal neon orange lines */}
          <div className="neon-line"></div>
          <div className="neon-line"></div>
          <div className="neon-line"></div>
          
          {/* 3D Rotating ring with items */}
          <div className="rotating-ring-3d">
            {items.map((item, index) => {
              const angle = (360 / items.length) * index;
              return (
                <div 
                  key={item.id}
                  className="ring-item"
                  style={{ 
                    '--angle': `${angle}deg`,
                    '--delay': `${index * 0.2}s`
                  }}
                >
                  <div className="icon-box">
                    <div className="icon">
                      {item.icon}
                    </div>
                    <span className="icon-label">{item.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Static center circle with cart icon */}
          <div className="center-circle">
            <div className="inner-glow"></div>
            <div className="center-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2L7.17 4H2V6H22V4H16.83L15 2H9Z" fill="currentColor"/>
                <path d="M7 18C5.9 18 5 18.9 5 20C5 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18Z" fill="currentColor"/>
                <path d="M17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
                <path d="M7.17 15L8.5 11.5L15.55 11.5L19 4H5.21L4.27 2H1V4H3L6.6 13.6L5.25 16.1C4.52 17.37 5.48 19 7 19H19V17H7L7.17 15Z" fill="currentColor"/>
              </svg>
            </div>
            
            {/* Multiple decorative rings */}
            <div className="decorative-ring ring-1"></div>
            <div className="decorative-ring ring-2"></div>
            <div className="decorative-ring ring-3"></div>
            <div className="decorative-ring ring-4"></div>
            
            {/* Horizontal scan lines */}
            <div className="scan-line scan-1"></div>
            <div className="scan-line scan-2"></div>
          </div>
          
          {/* Bottom concentric rings */}
          <div className="bottom-rings">
            <div className="bottom-ring"></div>
            <div className="bottom-ring"></div>
            <div className="bottom-ring"></div>
          </div>
        </div>

        {/* Tagline and CTA Buttons */}
        <div className="hero-cta-section">
          <p className="hero-tagline">
            We bring brands and Amazon together, ensuring your business thrives in the marketplace.
          </p>
          <div className="hero-buttons">
            <button className="cta-btn primary-btn">GET STARTED</button>
            <button className="cta-btn secondary-btn">CHAT WITH AMAZON EXPERT</button>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="video-section">
          <h2 className="video-title">See How We Transform Brands on Amazon</h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

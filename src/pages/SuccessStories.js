import React, { useState, useEffect } from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const caseStudies = [
    {
      emoji: '🛡️',
      brand: 'Brand 1: XYZ',
      before: 'MAP violations, hijackers, and 4 resellers all selling at random prices.',
      after: [
        { text: 'revenue growth in 4 months', number: 128, suffix: '%' },
        { text: 'Pricing consistency restored across', number: 100, suffix: '% of listings' },
        { text: 'Zero hijackers within', number: 30, suffix: ' days' }
      ]
    },
    {
      emoji: '🚀',
      brand: 'Brand 2: XYZ',
      before: 'Stuck at $60K/month for 6 months, poor listing content, 3-star average reviews.',
      after: [
        { text: '$700K → $2.2M/month in', number: 90, suffix: ' days' },
        { text: 'Listing overhaul boosted conversion rate by', number: 42, suffix: '%' },
        { text: 'average maintained across all SKUs', number: 4.6, suffix: '⭐️', isDecimal: true }
      ]
    },
    {
      emoji: '🧹',
      brand: 'Brand 3: XYZ',
      before: '5 sellers fighting for the buy box, no stock visibility, zero brand control.',
      after: [
        { text: 'Took over inventory ownership — brand regained', number: 100, suffix: '% buy box' },
        { text: 'Monthly sales jumped', number: 190, suffix: '%' },
        { text: 'Brand now ranked Top', number: 5, suffix: ' in its category' }
      ]
    },
    {
      emoji: '☕',
      brand: 'Brand 4: XYZ',
      before: '$22K/month revenue flatlined for 8 months, terrible images, bad A+ content.',
      after: [
        { text: '$22K → $86K/month in', number: 6, suffix: ' weeks' },
        { text: 'Content revamp drove', number: 3.5, suffix: 'x higher ad ROI', isDecimal: true },
        { text: 'Brand now in Amazon\'s "Preferred Seller" tier', number: null }
      ]
    }
  ];

  // Auto-rotate every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % caseStudies.length);
    }, 30000);

    return () => clearInterval(timer);
  }, [caseStudies.length]);

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  // Animated counter component
  const AnimatedNumber = ({ value, suffix, isDecimal }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }, [value]);

    return (
      <span className="animated-number">
        {isDecimal ? count.toFixed(1) : Math.floor(count)}
        {suffix}
      </span>
    );
  };

  return (
    <div className="success-stories-container">
      {/* Hero Section */}
      <div className="success-hero">
        <h1>Success Stories</h1>
        <p className="hero-tagline">Let us be your exclusive partner and buy your inventory in bulk.</p>
      </div>

      {/* Video Reviews Section */}
      <div className="video-reviews-section">
        <h2>Client Testimonials</h2>
        <div className="video-grid">
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Client Review 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Client Success Story 1</h3>
            <p>See how we transformed their business on Amazon</p>
          </div>
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Client Review 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Client Success Story 2</h3>
            <p>From struggling to thriving in just 90 days</p>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="case-studies-section">
        <h2>What We've Done</h2>
        <div className="case-study-container">
          <div className="case-study-card" key={currentCase}>
            <div className="case-emoji animate-emoji">{caseStudies[currentCase].emoji}</div>
            <h3 className="animate-text">{caseStudies[currentCase].brand}</h3>
            
            <div className="case-before animate-text">
              <h4>Before:</h4>
              <p>{caseStudies[currentCase].before}</p>
            </div>

            <div className="case-after">
              <h4 className="animate-text">After Scaleonics:</h4>
              <ul>
                {caseStudies[currentCase].after.map((item, index) => (
                  <li key={index} className="animate-list-item" style={{ animationDelay: `${index * 0.2}s` }}>
                    {item.number !== null ? (
                      <>
                        <AnimatedNumber 
                          value={item.number} 
                          suffix={item.suffix} 
                          isDecimal={item.isDecimal}
                        />
                        {' '}
                        {item.text}
                      </>
                    ) : (
                      item.text
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="case-navigation">
            <button className="nav-btn prev-btn" onClick={prevCase}>
              ← Previous
            </button>
            <div className="case-indicators">
              {caseStudies.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentCase ? 'active' : ''}`}
                  onClick={() => setCurrentCase(index)}
                ></span>
              ))}
            </div>
            <button className="nav-btn next-btn" onClick={nextCase}>
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;

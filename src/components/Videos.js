import React from 'react';
import './Videos.css';

const brands = [
  'MAM', 'EIN', 'BOMBYLN', 'RSV', 'MXL', 'ANLO', 'ANLO', 'KAAT',
  'Amazon', 'Nike', 'Apple', 'Google', 'Microsoft',
  'Samsung', 'Tesla', 'Netflix', 'Spotify', 'Adobe'
];

const Videos = () => {
  return (
    <div className="videos-section">
      {/* Our Collective Wins Section */}
      <div className="collective-wins-section">
        <h2 className="collective-wins-title">OUR COLLECTIVE WINS</h2>
        <p className="collective-wins-subtitle">Every name here represents a shared success story.</p>
        
        <div className="brands-container">
          {/* Stars Background */}
          <div className="stars-background">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className="star" 
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
          
          <div className="neon-light"></div>
          <div className="brands-scroll">
            <div className="brands-track">
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <div className="brand-item" key={index}>
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;

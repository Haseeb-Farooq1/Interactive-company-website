import React from 'react';
import './BrandBand.css';

const brands = [
  'MAM', 'EIN', 'BOMBYLN', 'RSV', 'MXL', 'ANLO', 'ANLO', 'KAAT',
  'Amazon', 'Nike', 'Apple', 'Google', 'Microsoft',
  'Samsung', 'Tesla', 'Netflix', 'Spotify', 'Adobe'
];

const BrandBand = () => {
  return (
    <section className="brand-showcase-section">
      <div className="collective-wins-section">
        <h2 className="collective-wins-title">OUR COLLECTIVE WINS</h2>
        <p className="collective-wins-subtitle">Every name here represents a shared success story.</p>
        
        <div className="brands-container">
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
    </section>
  );
};

export default BrandBand;

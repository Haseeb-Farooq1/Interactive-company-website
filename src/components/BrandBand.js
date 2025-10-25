import React from 'react';
import './BrandBand.css';

// Dummy logos for demonstration
const logos = [
  { name: 'Amazon', url: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Walmart', url: 'https://logo.clearbit.com/walmart.com' },
  { name: 'Ebay', url: 'https://logo.clearbit.com/ebay.com' },
  { name: 'TikTok', url: 'https://logo.clearbit.com/tiktok.com' },
  { name: 'Google', url: 'https://logo.clearbit.com/google.com' },
  { name: 'Microsoft', url: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Apple', url: 'https://logo.clearbit.com/apple.com' },
];

const BrandBand = () => {
  return (
    <div className="brand-band-container">
      <div className="brand-band">
        {logos.map((logo, index) => (
          <a href={`https://${logo.name.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" key={index} className="brand-logo-link">
            <img src={logo.url} alt={`${logo.name} logo`} className="brand-logo" />
          </a>
        ))}
        {logos.map((logo, index) => (
          <a href={`https://${logo.name.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" key={`duplicate-${index}`} className="brand-logo-link">
            <img src={logo.url} alt={`${logo.name} logo`} className="brand-logo" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default BrandBand;

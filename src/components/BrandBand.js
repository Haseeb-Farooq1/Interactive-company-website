import React from 'react';
import { motion } from 'framer-motion';
import './BrandBand.css';

// Partner brand logos
const brandLogos = [
  { name: 'MAM', url: 'https://www.amazon.com' },
  { name: 'EIN', url: 'https://www.microsoft.com' },
  { name: '⚙ BOMBYLN', url: 'https://www.apple.com' },
  { name: 'RSV', url: 'https://www.google.com' },
  { name: 'MXL', url: 'https://www.meta.com' },
  { name: 'ANLO', url: 'https://www.netflix.com' },
  { name: '▲', url: 'https://www.tesla.com' },
  { name: 'ANLO', url: 'https://www.spotify.com' },
  { name: 'KAAT', url: 'https://www.adobe.com' }
];

const BrandBand = () => {
  // Duplicate the logos array for seamless infinite scroll
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="brand-showcase-section">
      <div className="neon-glow-background"></div>
      
      <div className="section-header">
        <motion.h2 
          className="main-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          OUR COLLECTIVE WINS
        </motion.h2>
        <motion.p 
          className="sub-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Every name here represents a shared success story.
        </motion.p>
      </div>
      
      <motion.div 
        className="brands-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="scrolling-logos-wrapper">
          <div className="scrolling-logos">
            {duplicatedLogos.map((brand, index) => (
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className={`brand-logo ${brand.name.includes('⚙') ? 'gear-logo' : ''} ${brand.name === '▲' ? 'triangle-logo' : ''}`}
              >
                {brand.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flowing-underline">
          <div className="glow-line"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrandBand;

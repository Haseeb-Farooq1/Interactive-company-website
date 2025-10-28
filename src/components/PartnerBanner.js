import React from 'react';
import { motion } from 'framer-motion';
import './PartnerBanner.css';

const PartnerBanner = () => {
  const brandLogos = [
    'MAM',
    'EIN',
    '⚙ BOMBYLN',
    'RSV',
    'MXL',
    'ANLO',
    '▲',
    'ANLO',
    'KAAT'
  ];

  // Duplicate the logos array for seamless infinite scroll
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="partner-banner">
      <div className="neon-glow-background"></div>
      
      <div className="partner-banner-container">
        <motion.div 
          className="partner-content"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="partner-title">OUR COLLECTIVE WINS</h2>
          <p className="partner-subtitle">Every name here represents a shared success story.</p>
        </motion.div>
        
        <motion.div 
          className="partner-brands"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="brand-logos-container">
            <div className="scrolling-logos-wrapper">
              <div className="scrolling-logos">
                {duplicatedLogos.map((logo, index) => (
                  <div 
                    key={index} 
                    className={`brand-logo ${logo.includes('⚙') ? 'gear-logo' : ''} ${logo === '▲' ? 'triangle-logo' : ''}`}
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
            <div className="flowing-underline">
              <div className="glow-line"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerBanner;

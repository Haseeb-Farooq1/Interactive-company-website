import React from 'react';
import { motion } from 'framer-motion';
import './PartnerBanner.css';

const PartnerBanner = () => {
  return (
    <motion.section 
      className="partner-banner"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="banner-content">
        <div className="banner-glow-line"></div>
        <h2 className="banner-text">
          Let us be your exclusive partner and buy your inventory in bulk
        </h2>
        <div className="handshake-icon">
          <svg viewBox="0 0 100 80" className="handshake-svg">
            <path d="M20,40 Q30,30 40,40 L45,35 Q50,30 55,35 L60,40 Q70,30 80,40" 
                  stroke="#ff6600" 
                  strokeWidth="3" 
                  fill="none"
                  strokeLinecap="round"/>
            <circle cx="25" cy="45" r="8" fill="#ff6600" opacity="0.3"/>
            <circle cx="75" cy="45" r="8" fill="#ff6600" opacity="0.3"/>
          </svg>
        </div>
      </div>
      <div className="banner-bottom-glow"></div>
    </motion.section>
  );
};

export default PartnerBanner;

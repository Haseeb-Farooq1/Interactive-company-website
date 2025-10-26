import React from 'react';
import { motion } from 'framer-motion';
import './BrandBand.css';

// Premium company logos and brands we work with
const partnerCompanies = [
  { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com', category: 'E-commerce' },
  { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com', category: 'Technology' },
  { name: 'Apple', logo: 'https://logo.clearbit.com/apple.com', category: 'Consumer Tech' },
  { name: 'Google', logo: 'https://logo.clearbit.com/google.com', category: 'Technology' },
  { name: 'Meta', logo: 'https://logo.clearbit.com/meta.com', category: 'Social Media' },
  { name: 'Netflix', logo: 'https://logo.clearbit.com/netflix.com', category: 'Entertainment' },
  { name: 'Tesla', logo: 'https://logo.clearbit.com/tesla.com', category: 'Automotive' },
  { name: 'Spotify', logo: 'https://logo.clearbit.com/spotify.com', category: 'Music' },
  { name: 'Adobe', logo: 'https://logo.clearbit.com/adobe.com', category: 'Creative' },
  { name: 'Salesforce', logo: 'https://logo.clearbit.com/salesforce.com', category: 'CRM' },
  { name: 'Shopify', logo: 'https://logo.clearbit.com/shopify.com', category: 'E-commerce' },
  { name: 'Airbnb', logo: 'https://logo.clearbit.com/airbnb.com', category: 'Travel' }
];

const BrandBand = () => {
  return (
    <section className="brand-showcase-section">
      <div className="section-header">
        <motion.h2 
          className="main-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by Industry Leaders
        </motion.h2>
        <motion.p 
          className="sub-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Powering growth for brands across every industry
        </motion.p>
      </div>
      
      <div className="brands-container">
        <div className="brands-track">
          {partnerCompanies.map((company, index) => (
            <motion.div 
              key={index} 
              className="brand-card"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                z: 50
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            >
              <div className="brand-logo-container">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="brand-logo" 
                />
                <div className="brand-glow"></div>
              </div>
              <div className="brand-info">
                <h4 className="brand-name">{company.name}</h4>
                <span className="brand-category">{company.category}</span>
              </div>
            </motion.div>
          ))}
          {/* Duplicate for seamless loop */}
          {partnerCompanies.map((company, index) => (
            <motion.div 
              key={`duplicate-${index}`} 
              className="brand-card"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                z: 50
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            >
              <div className="brand-logo-container">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="brand-logo" 
                />
                <div className="brand-glow"></div>
              </div>
              <div className="brand-info">
                <h4 className="brand-name">{company.name}</h4>
                <span className="brand-category">{company.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandBand;

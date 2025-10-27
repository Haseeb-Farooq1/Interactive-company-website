import React from 'react';
import { motion } from 'framer-motion';
import './BusinessModel.css';

const businessCards = [
  {
    number: '1',
    title: 'Built for Brands That Hate Chaos',
    description: "We're not an agency or a reseller. We're a better model — one built for brands that want control, clarity, and consistency without the chaos of juggling multiple vendors."
  },
  {
    number: '2',
    title: 'We Buy. We Build. You Scale.',
    description: "We buy your inventory upfront, take on the risk, and run everything — ads, creative, logistics, pricing, and brand protection. You focus on your brand. We make it win."
  },
  {
    number: '3',
    title: 'One Partner. One P&L. One Mission — Growth.',
    description: "No retainers. No resellers. No chaos. Just one aligned team that grows when you grow. Because when we buy your inventory, your success becomes our success."
  }
];

const BusinessModel = () => {
  return (
    <section className="business-model-section">
      <motion.h2 
        className="business-model-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Scaleonics: The Quantum Core Driving Your Amazon Success
      </motion.h2>

      <div className="business-cards-container">
        {businessCards.map((card, index) => (
          <motion.div
            key={index}
            className={`business-card card-${index + 1}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="card-glow"></div>
            <div className="card-number">{card.number}</div>

            <div className="card-visual-section">
              {index === 0 && (
                <div className="visual-chaos">
                  <div className="chaos-center">
                    <div className="dollar-icon">$</div>
                    <div className="orbit"></div>
                    <div className="orbit orbit-2"></div>
                    <div className="orbit orbit-3"></div>
                    <div className="floating-elements">
                      <div className="float-elem float-1">
                        <svg viewBox="0 0 24 24" fill="#ff6600">
                          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                        </svg>
                      </div>
                      <div className="float-elem float-2">
                        <svg viewBox="0 0 24 24" fill="#ff6600">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                      </div>
                      <div className="float-elem float-3">
                        <svg viewBox="0 0 24 24" fill="#ff6600">
                          <circle cx="12" cy="12" r="10" fill="none" stroke="#ff6600" strokeWidth="2"/>
                          <path d="M12 6v6l4 2" stroke="#ff6600" strokeWidth="2" fill="none"/>
                        </svg>
                      </div>
                      <div className="float-elem float-4">
                        <svg viewBox="0 0 24 24" fill="#ff6600">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="control-label">CONTROL</div>
                </div>
              )}

              {index === 1 && (
                <div className="visual-scale">
                  <div className="conveyor">
                    <div className="amazon-package">
                      <svg className="amazon-smile" viewBox="0 0 100 40" fill="none">
                        <path d="M20 20 Q 50 35, 80 20" stroke="#ff9900" strokeWidth="3" strokeLinecap="round"/>
                        <circle cx="85" cy="18" r="3" fill="#ff9900"/>
                      </svg>
                      <div className="package-text">amazon</div>
                    </div>
                    <div className="conveyor-glow"></div>
                  </div>
                  <div className="process-steps">
                    <div className="step">
                      <svg viewBox="0 0 24 24" fill="#ff6600">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                      </svg>
                    </div>
                    <div className="step">
                      <svg viewBox="0 0 24 24" fill="#ff6600">
                        <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"/>
                      </svg>
                    </div>
                    <div className="step">
                      <svg viewBox="0 0 24 24" fill="#ff6600">
                        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                      </svg>
                    </div>
                    <div className="step">
                      <svg viewBox="0 0 24 24" fill="#ff6600">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="shield-icon">
                    <svg viewBox="0 0 24 24" fill="#ff6600">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  </div>
                </div>
              )}

              {index === 2 && (
                <div className="visual-growth">
                  <div className="growth-arrow-container">
                    <svg className="growth-arrow-svg" viewBox="0 0 200 200" fill="none">
                      <defs>
                        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(255,102,0,0.3)" />
                          <stop offset="100%" stopColor="#ff6600" />
                        </linearGradient>
                      </defs>
                      <path d="M 20 180 L 180 20" stroke="url(#arrowGradient)" strokeWidth="6" strokeLinecap="round"/>
                      <polygon points="180,20 160,25 165,45" fill="#ff6600"/>
                    </svg>
                  </div>
                  <div className="dollar-growth">$</div>
                  <div className="badge profit-badge">
                    <svg className="badge-icon-svg" viewBox="0 0 24 24" fill="#ff6600">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                    <span className="badge-text">YOUR P&L</span>
                  </div>
                  <div className="badge mission-badge">
                    <svg className="badge-icon-svg" viewBox="0 0 24 24" fill="#ff6600">
                      <path d="M12 2L8 8l-6 2 4.5 4.5L5 21l7-3.5L19 21l-1.5-6.5L22 10l-6-2z"/>
                    </svg>
                    <span className="badge-text">MISSION</span>
                  </div>
                </div>
              )}
            </div>

            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BusinessModel;

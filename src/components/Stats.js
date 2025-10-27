import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './Stats.css';

const statsData = [
  { value: 12.7, label: 'Inventory we have bought', unit: 'M', icon: '' },
  { value: 99.7, label: 'Positive Seller Rating', unit: '%', icon: '' },
  { value: 31, label: 'Brand Partners', unit: '+', icon: '' },
  { value: 1.2, label: 'Units processed annually', unit: 'M+', icon: '' },
];

const AnimatedNumber = ({ value, unit }) => {
  const numberRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView && numberRef.current) {
      const element = numberRef.current;
      const target = { val: 0 };
      gsap.to(target, {
        val: value,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          element.textContent = `${target.val.toFixed(value % 1 === 0 ? 0 : 1)}${unit}`;
        },
      });
    }
  }, [inView, value, unit]);

  return (
    <span ref={(node) => {
      numberRef.current = node;
      ref(node);
    }} className="stats-value">
      0{unit}
    </span>
  );
};

const Stats = () => {
  return (
    <div className="stats-section">
      <h2 className="stats-main-title">OUR IMPACT BY THE NUMBERS</h2>

      {/* Wavy Line with Stats */}
      <div className="stats-wave-container">
        <svg className="wave-line" viewBox="0 0 1200 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#ff6600', stopOpacity: 0.8}} />
              <stop offset="50%" style={{stopColor: '#ff8800', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#ff6600', stopOpacity: 0.8}} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path 
            className="wave-path"
            d="M 0 150 Q 150 80, 300 150 T 600 150 T 900 150 T 1200 150"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="4"
            filter="url(#glow)"
          />
        </svg>

        <div className="stats-container">
          {statsData.map((stat, index) => (
            <motion.div 
              className="stat-item" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <AnimatedNumber value={stat.value} unit={stat.unit} />
              <p className="stats-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;

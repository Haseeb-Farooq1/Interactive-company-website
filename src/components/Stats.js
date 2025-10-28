import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './Stats.css';

const statsData = [
  { value: 12.7, label: 'Inventory we have bought', unit: 'M' },
  { value: 99.7, label: 'Positive Seller Rating', unit: '%' },
  { value: 31, label: 'Brand Partners', unit: '+' },
  { value: 1.2, label: 'Units processed annually', unit: 'M+' },
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
        duration: 2.5,
        ease: "power2.out",
        onUpdate: () => {
          const decimals = value % 1 === 0 ? 0 : 1;
          element.textContent = `${target.val.toFixed(decimals)}${unit}`;
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
      <motion.h2 
        className="stats-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        OUR IMPACT BY THE NUMBERS
      </motion.h2>

      <div className="stats-container">
        <svg className="wave-line" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 140, 0, 0.3)" />
              <stop offset="25%" stopColor="rgba(255, 140, 0, 0.8)" />
              <stop offset="50%" stopColor="rgba(255, 140, 0, 1)" />
              <stop offset="75%" stopColor="rgba(255, 140, 0, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 140, 0, 0.3)" />
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
            d="M 0,100 
               C 100,70 150,130 300,100
               C 450,70 550,130 600,100
               C 750,70 850,130 900,100
               C 1050,70 1100,130 1200,100"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="3"
            filter="url(#glow)"
          />
        </svg>

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
  );
};

export default Stats;

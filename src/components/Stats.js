import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './Stats.css';

const statsData = [
  { value: 4.95, label: 'Annual Amazon Sales', unit: 'M+', icon: 'https://logo.clearbit.com/amazon.com' },
  { value: 100, label: 'Positive Seller Rating', unit: '%', icon: 'star' },
  { value: 27, label: 'Brand Partners', unit: '+', icon: 'chart' },
  { value: 108.4, label: 'Units Processed Annually', unit: 'K', icon: 'box' },
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
          element.textContent = `${target.val.toFixed(value % 1 === 0 ? 0 : 2)}${unit}`;
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
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <motion.div 
            className="stat-item" 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="stat-icon">
              {stat.icon === 'star' && <span className="star-icon">★★★★</span>}
              {stat.icon === 'chart' && <span className="chart-icon">📈</span>}
              {stat.icon === 'box' && <span className="box-icon">📦</span>}
              {stat.icon.startsWith('http') && <img src={stat.icon} alt="icon" />}
            </div>
            <AnimatedNumber value={stat.value} unit={stat.unit} />
            <p className="stats-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

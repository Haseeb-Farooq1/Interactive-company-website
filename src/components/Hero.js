import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">
          <span className="tired-of-gambling">Tired of Gambling?</span>
          <br />
          Partner with Growth
        </h1>
        <p className="hero-subtitle">
          As a strategic e-commerce partner, we put our money, our expertise, and our AI systems to work for your brand, giving you profitable growth across online marketplaces.
        </p>
        <motion.a
          href="#how-it-works"
          className="hero-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See How it works
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;

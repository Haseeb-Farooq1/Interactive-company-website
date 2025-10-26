import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const AnimatedText = () => {
  const texts = [
    "MAP violations",
    "Hijackers",
    "Reseller chaos",
    "Imperfect listings",
    "Weak credibility on Amazon"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting effect
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className="animated-text">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

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
          <span className="main-heading">Helping brands win against</span>
          <br />
          <AnimatedText />
        </h1>
        <p className="hero-subtitle">
          Let us take over the headaches of Amazon — from inventory and capital to operations and growth — so you only experience results.
        </p>
        <motion.a
          href="#how-it-works"
          className="hero-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;

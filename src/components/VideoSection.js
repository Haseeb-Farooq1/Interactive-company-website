import React from 'react';
import { motion } from 'framer-motion';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <motion.div
          className="video-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Company Overview Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          </div>
          <motion.div
            className="video-overlay-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="video-caption">
              See how we transform Amazon challenges into growth opportunities
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
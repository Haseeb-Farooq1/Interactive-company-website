import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ReviewCards.css';

const reviews = [
  {
    name: 'John Doe',
    company: 'Tech Corp',
    position: 'CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    review: 'This is an amazing service! Our sales have increased by 200% since we started working with them.',
    rating: 5,
    metrics: { growth: '+200%', satisfaction: '100%' }
  },
  {
    name: 'Jane Smith',
    company: 'Innovate LLC',
    position: 'Founder',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612a4ca?w=150&h=150&fit=crop&crop=face',
    review: 'I was skeptical at first, but they delivered on their promise. Highly recommended!',
    rating: 5,
    metrics: { trust: 'Exceeded', results: 'Outstanding' }
  },
  {
    name: 'Sam Wilson',
    company: 'Growth Inc.',
    position: 'VP Strategy',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    review: 'A true partner in our growth journey. Their expertise is unmatched.',
    rating: 4,
    metrics: { partnership: 'Excellent', expertise: 'Unmatched' }
  },
  {
    name: 'David Thompson',
    company: 'Outdoor Adventures',
    position: 'Brand Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    review: 'Best investment we made. Our Amazon credibility skyrocketed and operations became seamless.',
    rating: 5,
    metrics: { credibility: '+400%', growth: 'Exponential' }
  },
  {
    name: 'Lisa Park',
    company: 'Beauty Essentials',
    position: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    review: 'Pure growth and peace of mind. No more worrying about listings, inventory, or unauthorized sellers.',
    rating: 5,
    metrics: { growth: '+220%', peace: 'Complete' }
  }
];

const ReviewCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === reviews.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? reviews.length - 1 : prevIndex - 1;
      }
    });
  };

  return (
    <section className="review-cards-section">
      <div className="reviews-container">
        <motion.div
          className="reviews-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="review-section-title">What Our Clients Say</h2>
          <p className="review-section-subtitle">
            Real testimonials from real partners who've experienced transformational growth
          </p>
        </motion.div>
        
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="carousel-slide"
              >
                <div className="review-card">
                  <div className="review-card-glow"></div>
                  
                  <div className="review-card-header">
                    <img 
                      src={reviews[currentIndex].image} 
                      alt={reviews[currentIndex].name}
                      className="reviewer-avatar"
                    />
                    <div className="reviewer-info">
                      <h3 className="reviewer-name">{reviews[currentIndex].name}</h3>
                      <p className="reviewer-position">{reviews[currentIndex].position}</p>
                      <p className="reviewer-company">{reviews[currentIndex].company}</p>
                    </div>
                  </div>
                  
                  <div className="review-content">
                    <div className="quote-mark">"</div>
                    <p className="review-text">{reviews[currentIndex].review}</p>
                  </div>
                  
                  <div className="review-footer">
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`star ${i < reviews[currentIndex].rating ? 'filled' : 'empty'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    
                    <div className="review-metrics">
                      {Object.entries(reviews[currentIndex].metrics).map(([key, value]) => (
                        <div key={key} className="metric-tag">
                          <span className="metric-label">{key}:</span>
                          <span className="metric-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="carousel-controls">
              <motion.button 
                className="carousel-btn prev-btn"
                onClick={() => paginate(-1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                ←
              </motion.button>
              <motion.button 
                className="carousel-btn next-btn"
                onClick={() => paginate(1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                →
              </motion.button>
            </div>

            {/* Pagination Dots */}
            <div className="carousel-dots">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCards;

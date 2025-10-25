import React from 'react';
import { motion } from 'framer-motion';
import './ReviewCards.css';

const reviews = [
  {
    name: 'John Doe',
    company: 'Tech Corp',
    review: 'This is an amazing service! Our sales have increased by 200% since we started working with them.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    company: 'Innovate LLC',
    review: 'I was skeptical at first, but they delivered on their promise. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Sam Wilson',
    company: 'Growth Inc.',
    review: 'A true partner in our growth journey. Their expertise is unmatched.',
    rating: 4,
  },
];

const ReviewCards = () => {
  return (
    <div className="review-cards-section">
      <h2 className="review-section-title">What Our Clients Say</h2>
      <div className="review-cards-container">
        {reviews.map((review, index) => (
          <motion.div
            className="review-card"
            key={index}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="review-card-header">
              <h3>{review.name}</h3>
              <p>{review.company}</p>
            </div>
            <p className="review-text">"{review.review}"</p>
            <div className="review-rating">
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCards;

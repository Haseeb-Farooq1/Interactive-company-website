import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'TechGear Pro',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612a4ca?w=150&h=150&fit=crop&crop=face',
    review: "Scaleonics transformed our Amazon presence completely. We went from struggling with MAP violations to having a bulletproof brand protection strategy. Our sales increased by 300% in just 6 months!",
    rating: 5,
    metrics: { sales: '+300%', timeframe: '6 months' }
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder',
    company: 'HomeStyle Brands',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    review: "Finally, no more hijacker headaches! Scaleonics not only eliminated unauthorized resellers but also optimized our listings for maximum conversion. Our brand integrity is completely restored.",
    rating: 5,
    metrics: { roi: '+250%', issues: '0 violations' }
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'VP of Operations',
    company: 'Fashion Forward',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    review: "From chaotic inventory management to streamlined operations - Scaleonics handles everything. We can focus on product development while they manage our entire Amazon ecosystem.",
    rating: 5,
    metrics: { efficiency: '+180%', operations: 'Fully Managed' }
  },
  {
    id: 4,
    name: 'David Thompson',
    position: 'Brand Manager',
    company: 'Outdoor Adventures',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    review: "Best investment we've made in years. Scaleonics didn't just improve our Amazon credibility - they revolutionized our entire marketplace strategy. The results speak for themselves.",
    rating: 5,
    metrics: { credibility: '+400%', growth: 'Exponential' }
  },
  {
    id: 5,
    name: 'Lisa Park',
    position: 'Marketing Director',
    company: 'Beauty Essentials',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    review: "Pure growth and peace of mind - that's what Scaleonics delivers. No more worrying about listings, inventory, or unauthorized sellers. Just consistent, profitable growth month after month.",
    rating: 5,
    metrics: { growth: '+220%', satisfaction: '100%' }
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="testimonials-title">Success Stories</h2>
          <p className="testimonials-subtitle">
            Real results from real partners who trusted us with their Amazon growth
          </p>
        </motion.div>

        <div className="testimonials-content">
          <div className="testimonials-main">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-quote">
                  <span className="quote-mark">"</span>
                  <p className="testimonial-text">
                    {testimonials[activeTestimonial].review}
                  </p>
                </div>
                
                <div className="client-info">
                  <img 
                    src={testimonials[activeTestimonial].image} 
                    alt={testimonials[activeTestimonial].name}
                    className="client-avatar"
                  />
                  <div className="client-details">
                    <h4 className="client-name">{testimonials[activeTestimonial].name}</h4>
                    <p className="client-position">
                      {testimonials[activeTestimonial].position}, {testimonials[activeTestimonial].company}
                    </p>
                    <div className="rating">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="testimonial-metrics">
                  {Object.entries(testimonials[activeTestimonial].metrics).map(([key, value]) => (
                    <div key={key} className="metric">
                      <span className="metric-value">{value}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonials-controls">
              <button 
                onClick={prevTestimonial} 
                className="control-btn prev-btn"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button 
                onClick={nextTestimonial} 
                className="control-btn next-btn"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>

          <div className="testimonials-sidebar">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`testimonial-preview ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="preview-avatar"
                />
                <div className="preview-info">
                  <h5 className="preview-name">{testimonial.name}</h5>
                  <p className="preview-company">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
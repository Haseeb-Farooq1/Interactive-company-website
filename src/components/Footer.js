import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Amazon Brand Protection", href: "/brand-protection" },
        { name: "MAP Violation Management", href: "/map-violations" },
        { name: "Listing Optimization", href: "/listing-optimization" },
        { name: "Inventory Management", href: "/inventory" },
        { name: "Growth Analytics", href: "/analytics" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Hijacker Elimination", href: "/hijacker-protection" },
        { name: "Reseller Control", href: "/reseller-management" },
        { name: "Amazon Credibility", href: "/credibility-boost" },
        { name: "Operations Management", href: "/operations" },
        { name: "Capital Solutions", href: "/capital" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Scaleonics", href: "/about" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Our Promise", href: "/promise" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-pattern"></div>
      </div>
      
      <div className="footer-container">
        <div className="footer-main">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="footer-logo">SCALEONICS</h2>
            <p className="footer-tagline">
              Transforming Amazon challenges into growth opportunities
            </p>
            <p className="footer-description">
              Your strategic e-commerce partner for profitable growth on online marketplaces. 
              We invest our expertise, capital, and AI systems to grow your brand while you focus on what matters most.
            </p>
            
            <div className="footer-stats">
              <div className="footer-stat">
                <span className="stat-number">300+</span>
                <span className="stat-label">Brands Protected</span>
              </div>
              <div className="footer-stat">
                <span className="stat-number">$50M+</span>
                <span className="stat-label">Revenue Generated</span>
              </div>
              <div className="footer-stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </motion.div>

          <div className="footer-sections">
            {footerSections.map((section, index) => (
              <motion.div 
                key={section.title}
                className="footer-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="footer-section-title">{section.title}</h3>
                <ul className="footer-links">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="footer-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Amazon Business?</h3>
            <p className="cta-description">
              Join 300+ brands that trust us with their Amazon growth. Get started today.
            </p>
            <div className="cta-buttons">
              <motion.a 
                href="https://calendly.com/scaleonics" 
                className="cta-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Free Consultation
              </motion.a>
              <motion.a 
                href="/contact" 
                className="cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p>&copy; {currentYear} Scaleonics. All Rights Reserved.</p>
              <div className="legal-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/cookies">Cookie Policy</a>
              </div>
            </div>
            
            <div className="footer-social">
              <a href="https://linkedin.com/company/scaleonics" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/scaleonics" className="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://facebook.com/scaleonics" className="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

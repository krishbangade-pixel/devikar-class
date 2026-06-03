import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="bg-secondary" style={{ color: 'var(--on-primary)', padding: '64px 0' }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '24px' 
        }} className="cta-container">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-text"
          >
            <h2 className="font-headline" style={{ marginBottom: '8px' }}>Enroll Today for a Brighter Tomorrow</h2>
            <p className="font-body-md" style={{ opacity: 0.9 }}>
              Batches for new session starting soon. Register now to avail early bird discounts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a 
              href="#admission" 
              className="btn shimmer-btn bg-primary text-on-primary font-label"
              style={{ 
                padding: '16px 48px', 
                borderRadius: '50px',
                display: 'inline-block',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              Get Started
            </a>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-container { flex-direction: column !important; text-align: center; }
        }
      `}</style>
    </section>
  );
};

export default CTA;

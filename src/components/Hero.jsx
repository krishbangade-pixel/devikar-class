import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero-gradient" style={{ paddingTop: '160px', paddingBottom: '80px', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-display text-primary" style={{ marginBottom: '24px' }}>
            Shape Your Future with Devikar Classes
          </h1>
          <p className="font-body-lg text-on-surface-variant" style={{ marginBottom: '48px', maxWidth: '500px' }}>
            Quality coaching for Classes 8th to 12th. Empowering students with conceptual clarity and competitive edge in Ramtek.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            <a href="#admission" className="btn btn-primary shimmer-btn font-label">Admission Enquiry</a>
            <a href="#contact" className="btn btn-outline font-label">Contact Us</a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <div style={{ 
            position: 'absolute', 
            top: '-40px', 
            left: '-40px', 
            width: '256px', 
            height: '256px', 
            backgroundColor: 'rgba(255, 181, 92, 0.1)', 
            borderRadius: '50%', 
            filter: 'blur(60px)' 
          }}></div>
          
          <motion.img 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="Classroom Environment"
            style={{ 
              width: '100%', 
              objectFit: 'cover', 
              aspectRatio: '1/1', 
              borderRadius: '24px', 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              zIndex: 10
            }}
          />
        </motion.div>
        
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          #home .container { grid-template-columns: 1fr !important; }
          #home { padding-top: 120px !important; padding-bottom: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;

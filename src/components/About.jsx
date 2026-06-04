import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeValue = progress * (2 - progress); // easeOutQuad
        
        setCount(Math.floor(easeValue * target));

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  return (
    <section id="about" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="about-grid">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-label text-secondary" style={{ display: 'block', marginBottom: '12px' }}>Since 2014</span>
            <h2 className="font-headline text-primary" style={{ marginBottom: '24px' }}>Excellence in Focused Learning</h2>
            <p className="font-body-md text-on-surface-variant" style={{ marginBottom: '32px' }}>
              Devikar Classes has been the cornerstone of academic success in Ramtek for over a decade. We believe in nurturing talent through personalized attention and rigorous academic standards.
            </p>
            
            <div className="metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              <div className="bg-surface-container" style={{ padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                <h3 className="font-headline-md text-primary"><Counter target={500} />+</h3>
                <p className="font-label" style={{ opacity: 0.7 }}>Students</p>
              </div>
              <div className="bg-surface-container" style={{ padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                <h3 className="font-headline-md text-primary"><Counter target={95} />%</h3>
                <p className="font-label" style={{ opacity: 0.7 }}>Success Rate</p>
              </div>
              <div className="bg-surface-container" style={{ padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                <h3 className="font-headline-md text-primary"><Counter target={10} />+</h3>
                <p className="font-label" style={{ opacity: 0.7 }}>Years Exp.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary"
            style={{ padding: '48px', borderRadius: '24px', color: 'var(--on-primary)' }}
          >
            <h4 className="font-headline-md" style={{ marginBottom: '24px' }}>Our Mission</h4>
            <p className="font-body-md" style={{ marginBottom: '24px' }}>
              To bridge the gap between classroom learning and real-world application, ensuring every student reaches their maximum potential.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary-fixed)' }}>check_circle</span>
                Concept Based Learning
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary-fixed)' }}>check_circle</span>
                Competitive Exam Prep
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary-fixed)' }}>check_circle</span>
                Moral & Ethics Development
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .metrics-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Parent",
    text: "The personal attention my son received at Devikar Classes helped him improve his math score from 60 to 95 in just one year. Highly recommended!"
  },
  {
    name: "Sneha Patil",
    role: "Class 10th",
    text: "The teachers here make Science so easy to understand. The notes are perfect for revision before exams. I cleared my 10th with flying colors."
  },
  {
    name: "Rohan Deshmukh",
    role: "Class 12th",
    text: "Best coaching in Ramtek. The weekly tests are very similar to actual board exams which removed my fear of finals completely."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Testimonials = () => {
  return (
    <section className="bg-surface-container" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-primary" 
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          Words from our Students & Parents
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '48px' 
          }}
        >
          {testimonials.map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="glass-card"
              style={{ padding: '48px', borderRadius: '24px' }}
            >
              <div style={{ display: 'flex', color: 'var(--secondary)', marginBottom: '16px' }}>
                {[1,2,3,4,5].map(star => (
                  <span key={star} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-body-md text-on-surface-variant" style={{ fontStyle: 'italic', marginBottom: '24px' }}>
                "{item.text}"
              </p>
              <div className="font-label text-primary">
                - {item.name} ({item.role})
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

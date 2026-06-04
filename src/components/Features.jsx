import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: 'supervisor_account',
    title: 'Experienced Faculty',
    desc: 'Learn from subject matter experts with decades of teaching experience.'
  },
  {
    icon: 'quiz',
    title: 'Weekly Tests',
    desc: 'Continuous evaluation through structured weekly performance assessments.'
  },
  {
    icon: 'person_search',
    title: 'Personal Attention',
    desc: 'Small batch sizes ensure every student gets the attention they deserve.'
  },
  {
    icon: 'card_membership',
    title: 'Scholarship Guidance',
    desc: 'Preparation help for NTSE, MTSE, and other competitive scholarships.'
  },
  {
    icon: 'psychology',
    title: 'Career Counselling',
    desc: 'Expert advice to help students choose the right career path after school.'
  },
  {
    icon: 'payments',
    title: 'Affordable Fees',
    desc: 'Quality education made accessible with competitive and fair pricing.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Features = () => {
  return (
    <section style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-primary" 
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          Why Devikar Classes?
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '24px' 
          }}
        >
          {features.map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="feature-card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '24px',
                padding: '24px',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                border: '1px solid transparent'
              }}
            >
              <div 
                style={{ 
                  backgroundColor: 'var(--secondary-container)', 
                  color: 'var(--on-secondary-container)',
                  padding: '12px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-headline-md" style={{ fontSize: '1.125rem', marginBottom: '4px' }}>{item.title}</h4>
                <p className="font-body-md text-on-surface-variant" style={{ fontSize: '0.875rem' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .feature-card:hover {
          background-color: var(--surface-container);
          border-color: rgba(135, 82, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Features;

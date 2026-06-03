import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, GraduationCap, Microscope, Rocket } from 'lucide-react';

const courseData = [
  {
    title: 'Class 8th',
    subtitle: 'Foundation Level',
    icon: <BookOpen size={24} />,
    color: 'var(--primary)',
    features: ['Maths & Science', 'Regular Tests', 'Doubt Sessions', 'Comprehensive Notes']
  },
  {
    title: 'Class 9th',
    subtitle: 'Building Basics',
    icon: <Brain size={24} />,
    color: 'var(--secondary)',
    features: ['Core Subjects', 'Weekly Progress', '1-on-1 Doubts', 'Assignments']
  },
  {
    title: 'Class 10th',
    subtitle: 'Board Excellence',
    icon: <GraduationCap size={24} />,
    color: 'var(--primary)',
    features: ['All Key Subjects', 'Board Pattern Tests', 'Expert Guidance', 'Solved Papers']
  },
  {
    title: '11th Sci.',
    subtitle: 'Science Stream',
    icon: <Microscope size={24} />,
    color: 'var(--secondary)',
    features: ['PCMB Focus', 'Unit Wise Tests', 'NEET/JEE Intro', 'Physics Lab Support']
  },
  {
    title: '12th Sci.',
    subtitle: 'Career Launch',
    icon: <Rocket size={24} />,
    color: 'var(--primary)',
    features: ['Intense Preparation', 'Full Length Tests', 'Career Coaching', 'Revision Module']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Courses = () => {
  return (
    <section id="courses" className="bg-surface-container-low" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 className="font-headline text-primary">Our Academic Programs</h2>
          <p className="font-body-md text-on-surface-variant" style={{ marginTop: '12px' }}>
            Tailored curriculum designed for modern educational requirements
          </p>
        </motion.div>

        <motion.div 
          className="courses-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '24px' 
          }}
        >
          {courseData.map((course, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass-card"
              style={{ borderTop: `4px solid ${course.color}` }}
            >
              <div style={{ color: course.color, marginBottom: '16px' }}>{course.icon}</div>
              <h3 className="font-headline-md text-primary" style={{ marginBottom: '8px' }}>{course.title}</h3>
              <p className="font-label text-secondary" style={{ marginBottom: '24px', fontSize: '12px' }}>{course.subtitle}</p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {course.features.map((feature, i) => (
                  <li key={i} className="font-body-md text-on-surface-variant" style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', opacity: 0.7 }}>check</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;

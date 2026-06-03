import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Admission = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="admission" className="bg-primary" style={{ color: 'var(--on-primary)', padding: '100px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'flex-start' }} className="admission-grid">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display" style={{ marginBottom: '24px', fontSize: '2.5rem' }}>Ready to start your journey?</h2>
            <p className="font-body-lg" style={{ marginBottom: '48px', opacity: 0.8 }}>
              Fill out the form and our admissions team will get back to you within 24 hours.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary-fixed)', fontSize: '32px' }}>phone_iphone</span>
                <div>
                  <p className="font-label">Call for Quick Enquiry</p>
                  <p className="font-headline-md" style={{ color: 'var(--secondary-fixed)' }}>+91 98765 43210</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary-fixed)', fontSize: '32px' }}>mail</span>
                <div>
                  <p className="font-label">Email Us</p>
                  <p className="font-headline-md" style={{ color: 'var(--secondary-fixed)' }}>admissions@devikarclasses.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ 
              backgroundColor: 'white', 
              padding: '48px', 
              borderRadius: '24px', 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              color: 'var(--on-surface)',
              position: 'relative',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden'
            }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="form-grid">
                    <div>
                      <label className="font-label text-primary" style={{ display: 'block', marginBottom: '8px' }}>Student Name</label>
                      <input required type="text" className="form-input" />
                    </div>
                    <div>
                      <label className="font-label text-primary" style={{ display: 'block', marginBottom: '8px' }}>Parent Name</label>
                      <input required type="text" className="form-input" />
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="form-grid">
                    <div>
                      <label className="font-label text-primary" style={{ display: 'block', marginBottom: '8px' }}>Class</label>
                      <select className="form-input">
                        <option>8th</option>
                        <option>9th</option>
                        <option>10th</option>
                        <option>11th Science</option>
                        <option>12th Science</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-label text-primary" style={{ display: 'block', marginBottom: '8px' }}>Phone</label>
                      <input required type="tel" className="form-input" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="font-label text-primary" style={{ display: 'block', marginBottom: '8px' }}>Message</label>
                    <textarea rows="3" className="form-input"></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn bg-secondary text-on-primary shimmer-btn font-label"
                    style={{ width: '100%', padding: '16px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="material-symbols-outlined spin" style={{ fontSize: '20px' }}>refresh</span>
                        Processing...
                      </>
                    ) : 'Send Enquiry'}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', width: '100%', padding: '24px' }}
                >
                  <span className="material-symbols-outlined text-secondary" style={{ fontSize: '64px', marginBottom: '24px' }}>check_circle</span>
                  <h3 className="font-headline-md text-primary" style={{ marginBottom: '12px' }}>Thank you for contacting Devikar Classes.</h3>
                  <p className="font-body-md text-on-surface-variant">We will reach out soon.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background-color: var(--surface-container-low);
          border: 1px solid var(--outline-variant);
          border-radius: 8px;
          padding: 12px;
          color: var(--on-surface);
          font-family: var(--font-body);
          outline: none;
          transition: all 0.3s;
        }
        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(0, 32, 69, 0.2);
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; }
        @media (max-width: 768px) {
          .admission-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Admission;

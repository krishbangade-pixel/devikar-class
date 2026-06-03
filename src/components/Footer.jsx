import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      <section id="contact" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px' }} className="contact-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-headline-md text-primary" style={{ marginBottom: '24px' }}>Our Location</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--on-surface-variant)' }} className="font-body-md">
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                  <p>Devikar Bhavan, Near Main Road, Ramtek, Maharashtra 441106</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span className="material-symbols-outlined text-secondary">call</span>
                  <p>+91 91234 56789<br/>+91 98765 43210</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span className="material-symbols-outlined text-secondary">schedule</span>
                  <p>Mon - Sat: 3:00 PM - 8:30 PM<br/>Sun: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div style={{ marginTop: '48px' }}>
                <a 
                  href="https://wa.me/919123456789" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '12px', 
                    backgroundColor: 'var(--green-500)', 
                    color: 'white', 
                    width: '100%' 
                  }}
                >
                  <span className="material-symbols-outlined">chat</span> Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div style={{ 
                width: '100%', 
                height: '400px', 
                backgroundColor: 'var(--surface-container)', 
                borderRadius: '24px', 
                overflow: 'hidden', 
                border: '1px solid var(--outline-variant)' 
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                  alt="Map Location" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: 'var(--tertiary)', color: 'var(--on-tertiary)', paddingTop: '80px', paddingBottom: '48px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '80px', marginBottom: '24px' }} className="footer-grid">
            
            <div>
              <div className="font-headline-md" style={{ fontWeight: 900, marginBottom: '24px' }}>DEVIKAR CLASSES</div>
              <p style={{ maxWidth: '300px', opacity: 0.7, lineHeight: 1.6 }}>
                Empowering the next generation of scholars with dedicated coaching and modern pedagogy in the heart of Ramtek.
              </p>
            </div>

            <div>
              <h5 className="font-label" style={{ marginBottom: '24px' }}>Quick Links</h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', opacity: 0.7 }}>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a></li>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a></li>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a></li>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Career</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-label" style={{ marginBottom: '24px' }}>Connect</h5>
              <div style={{ display: 'flex', gap: '24px' }}>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit', textDecoration: 'none' }}>
                  <span className="material-symbols-outlined">social_leaderboard</span>
                </a>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit', textDecoration: 'none' }}>
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit', textDecoration: 'none' }}>
                  <span className="material-symbols-outlined">video_library</span>
                </a>
              </div>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.5, fontSize: '14px' }} className="footer-bottom">
            <p>© 2024 Devikar Classes Ramtek. All rights reserved.</p>
            <p>Powered by Scholastic Digital</p>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
            .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;

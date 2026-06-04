import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: scrolled || mobileMenuOpen ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: scrolled || mobileMenuOpen ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: scrolled ? '12px 24px' : '16px 24px', transition: 'padding 0.3s' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Using text for logo as placeholder since we don't have the image file locally */}
          <div style={{ fontWeight: 900, color: 'var(--primary)', fontSize: '1.25rem', fontFamily: 'var(--font-headline)' }}>
            DEVIKAR <span style={{ color: 'var(--secondary)' }}>CLASSES</span>
          </div>
        </div>

        <nav style={{ display: 'flex', gap: '24px' }} className="desktop-nav">
          <a href="#home" style={{ color: 'var(--secondary)', fontWeight: 'bold', borderBottom: '2px solid var(--secondary)', paddingBottom: '4px', textDecoration: 'none' }} className="font-label">Home</a>
          <a href="#courses" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none' }} className="font-label nav-link">Courses</a>
          <a href="#about" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none' }} className="font-label nav-link">About</a>
          <a href="#contact" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none' }} className="font-label nav-link">Contact</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="#admission" className="btn btn-primary shimmer-btn font-label desktop-nav" style={{ padding: '12px 24px' }}>Enroll Now</a>
          <button 
            className="mobile-nav-toggle"
            style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'none' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden', backgroundColor: 'var(--surface)' }}
            className="mobile-nav-menu"
          >
            <nav style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px', gap: '16px', borderTop: '1px solid var(--outline-variant)' }}>
              <a href="#home" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--secondary)', fontWeight: 'bold', textDecoration: 'none', padding: '8px 0' }} className="font-label">Home</a>
              <a href="#courses" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', padding: '8px 0' }} className="font-label nav-link">Courses</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', padding: '8px 0' }} className="font-label nav-link">About</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', padding: '8px 0' }} className="font-label nav-link">Contact</a>
              <a href="#admission" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary font-label" style={{ padding: '12px', textAlign: 'center', marginTop: '8px' }}>Enroll Now</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link:hover { color: var(--primary) !important; }
        .mobile-nav-menu { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: block !important; }
          .mobile-nav-menu { display: block; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Features from './components/Features';
import Admission from './components/Admission';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Features />
        <Admission />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      
      {/* Floating WhatsApp */}
      <a 
        className="whatsapp-btn whatsapp-pulse" 
        href="https://wa.me/919123456789"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 50,
          backgroundColor: 'var(--green-500)',
          color: 'white',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          textDecoration: 'none'
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>chat</span>
      </a>
    </div>
  );
}

export default App;

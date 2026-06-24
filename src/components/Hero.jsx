import React, { useEffect, useRef } from 'react';
import './Hero.css';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 5,
}));

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      const orbs = heroRef.current.querySelectorAll('.hero-orb');
      orbs[0] && (orbs[0].style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`);
      orbs[1] && (orbs[1].style.transform = `translate(${-x * 0.3}px, ${-y * 0.3}px)`);
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Animated background particles */}
      <div className="hero-particles">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>

      {/* Grid pattern overlay */}
      <div className="hero-grid"></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="nabl-badge">
              <span className="badge-dot"></span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              NABL Accredited Laboratory
            </div>

            <h1 className="hero-title">
              Precision <span className="highlight">Diagnostics</span><br/>
              You Can <span className="highlight">Trust</span>
            </h1>

            <p className="hero-description">
              Surepath Center for Histopathology and Cytology — Surat's premier NABL accredited
              diagnostic lab. Led by <strong>Dr. Simple Bhuptani</strong>, MD Pathology with
              25+ years of expert experience in accurate pathological diagnosis.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">NABL</span>
                <span className="stat-label">Accredited</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Specializations</span>
              </div>
            </div>

            <div className="hero-actions">
              <button
                className="btn-primary"
                id="hero-contact-btn"
                onClick={() => scrollTo('contact')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Contact Us
              </button>
              <button
                className="btn-secondary"
                id="hero-services-btn"
                onClick={() => scrollTo('services')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>
                </svg>
                Our Services
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-visual">
              <div className="lab-card">
                <div className="lab-icon-wrap">
                  <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5"/>
                    <path d="M20 14h24M32 14v12l10 18H22L32 26V14" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="26" cy="46" r="2" fill="#00b4d8" fillOpacity="0.7"/>
                    <circle cx="32" cy="48" r="2" fill="#48cae4"/>
                    <circle cx="38" cy="46" r="2" fill="#00b4d8" fillOpacity="0.7"/>
                    <path d="M18 40h28" stroke="rgba(0,180,216,0.3)" strokeWidth="1" strokeDasharray="3 3"/>
                  </svg>
                </div>
                <h3>Advanced Lab Analysis</h3>
                <p>State-of-the-art equipment for precise histopathological examination</p>
                <div className="lab-indicators">
                  <span className="indicator active"></span>
                  <span className="indicator active"></span>
                  <span className="indicator active"></span>
                  <span className="indicator"></span>
                </div>
              </div>

              <div className="floating-badge badge-nabl">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#c9a227">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                <div>
                  <strong>NABL</strong>
                  <small>Certified</small>
                </div>
              </div>

              <div className="floating-badge badge-experience">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#00b4d8">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                <div>
                  <strong>25+ Years</strong>
                  <small>Expert Pathology</small>
                </div>
              </div>

              <div className="floating-badge badge-timing">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#2e7d32">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                <div>
                  <strong>8:30 AM – 8 PM</strong>
                  <small>Mon – Sat</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useEffect, useRef } from 'react';
import doctorPhoto from '../assets/doctor.jpg';
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

          {/* ── Left: Text ── */}
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
              <div className="hero-timings">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="timings-icon">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div className="timings-text">
                  <span className="timings-label">Timings</span>
                  <span className="timings-value">Mon – Sat: 8:30 AM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Doctor Circle + Floating Cards ── */}
          <div className="hero-right">
            <div className="hero-visual">

              {/* Large circular doctor photo */}
              <div className="doctor-circle-wrap">
                <div className="doctor-circle-ring ring-outer"></div>
                <div className="doctor-circle-ring ring-inner"></div>
                <img
                  src={doctorPhoto}
                  alt="Dr. Simple Bhuptani – MD Pathology"
                  className="doctor-circle-img"
                />
              </div>

              {/* Floating card — top right */}
              <div className="hero-float-card card-cases">
                <div className="float-card-icon icon-green">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#22c55e">
                    <path d="M12 2l2.09 6.26H21l-5.47 3.97 2.09 6.26L12 14.52l-5.62 4.07 2.09-6.26L3 8.26h6.91z"/>
                  </svg>
                </div>
                <div className="float-card-text">
                  <strong>Histopathology</strong>
                  <strong>&amp; Cytology</strong>
                </div>
              </div>

              {/* Floating card — bottom left */}
              <div className="hero-float-card card-experience">
                <div className="float-card-icon icon-blue">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#3b82f6">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                  </svg>
                </div>
                <div className="float-card-text">
                  <strong>25+ Years</strong>
                  <small>Experience</small>
                </div>
              </div>

              {/* Floating card — bottom right */}
              <div className="hero-float-card card-specialty">
                <div className="float-card-icon icon-cyan">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#00b4d8">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </div>
                <div className="float-card-text">
                  <strong>MD Pathology</strong>
                  <small>Specialist</small>
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

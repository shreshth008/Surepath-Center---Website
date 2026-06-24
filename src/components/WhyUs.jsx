import React, { useEffect, useRef, useState } from 'react';
import './WhyUs.css';

const reasons = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
    ),
    title: 'NABL Accreditation',
    desc: 'Our laboratory holds full NABL accreditation, guaranteeing internationally benchmarked quality, accuracy, and reliability for every diagnostic test.',
    color: '#c9a227',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
    title: '25+ Years Expertise',
    desc: 'Dr. Simple Bhuptani brings over 25 years of specialized experience in histopathology and cytology ensuring expert-level diagnostic accuracy.',
    color: '#0096c7',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
      </svg>
    ),
    title: 'State-of-the-Art Equipment',
    desc: 'We invest in cutting-edge diagnostic equipment and reagents to ensure every slide, stain, and analysis meets the highest technical standards.',
    color: '#00897b',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
      </svg>
    ),
    title: 'Timely Reporting',
    desc: 'We understand that time matters in diagnostics. Our streamlined workflow ensures fast report turnaround without compromising quality.',
    color: '#1565c0',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    title: 'Accurate Diagnoses',
    desc: 'Our quality control protocols and double-verification systems minimize errors, delivering diagnoses you and your physician can rely on.',
    color: '#2e7d32',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    title: 'Patient-Centric Care',
    desc: 'We handle every case with empathy, ensuring patients and referring physicians receive clear, comprehensive reports with personalized attention.',
    color: '#c62828',
  },
];

const stats = [
  { value: 25, suffix: '+', label: 'Years of Experience' },
  { value: 10000, suffix: '+', label: 'Cases Analysed' },
  { value: 6, suffix: '', label: 'Core Services' },
  { value: 100, suffix: '%', label: 'NABL Compliant' },
];

const CountUp = ({ target, suffix, active }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return <>{count.toLocaleString()}{suffix}</>;
};

const WhyUs = () => {
  const sectionRef = useRef(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          e.target.classList.toggle('visible', e.isIntersecting);
          if (e.target.classList.contains('stats-strip')) setStatsActive(e.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .stats-strip').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="whyus-section" id="why-us" ref={sectionRef}>
      <div className="whyus-bg-decor"></div>

      <div className="container">
        <div className="whyus-header reveal">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
            Why Choose Us
          </span>
          <h2 className="section-title">
            The <span>Surepath</span> Advantage
          </h2>
          <p className="section-subtitle">
            When accuracy matters most, trust Surepath Center for diagnostic excellence,
            backed by decades of experience and national accreditation.
          </p>
        </div>

        <div className="reasons-grid reveal" style={{ transitionDelay: '0.2s' }}>
          {reasons.map((r, i) => (
            <div key={i} className="reason-card" style={{ '--r-color': r.color }}>
              <div className="reason-icon" style={{ color: r.color, background: `${r.color}12` }}>
                {r.icon}
              </div>
              <div className="reason-content">
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
              <div className="reason-accent" style={{ background: r.color }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Strip */}
      <div className="stats-strip reveal" style={{ transitionDelay: '0.4s' }}>
        <div className="container">
          <div className="stats-inner">
            {stats.map((s, i) => (
              <div key={i} className="stat-block">
                <span className="stat-big">
                  <CountUp target={s.value} suffix={s.suffix} active={statsActive} />
                </span>
                <span className="stat-desc">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

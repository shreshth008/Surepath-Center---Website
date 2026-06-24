import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const credentials = [
    { label: 'Qualification', value: 'MD Pathology' },
    { label: 'Experience', value: '25+ Years' },
    { label: 'Accreditation', value: 'NABL Certified Lab' },
    { label: 'Specialization', value: 'Histopathology & Cytology' },
  ];

  const highlights = [
    { icon: '🔬', text: 'Expert in tissue diagnosis and cancer detection' },
    { icon: '🏆', text: 'NABL accredited – highest quality standards' },
    { icon: '💡', text: 'Pioneer in IHC (Immunohistochemistry) in Surat' },
    { icon: '❤️', text: 'Patient-centric approach with compassionate care' },
  ];

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          {/* Left - Doctor card */}
          <div className="about-left reveal">
            <div className="doctor-card">
              <div className="doctor-avatar">
                <div className="avatar-ring ring-1"></div>
                <div className="avatar-ring ring-2"></div>
                <div className="avatar-icon">
                  <svg width="80" height="80" viewBox="0 0 96 96" fill="none">
                    <circle cx="48" cy="36" r="22" fill="rgba(0,180,216,0.15)" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5"/>
                    <path d="M48 14c-12.15 0-22 9.85-22 22s9.85 22 22 22 22-9.85 22-22S60.15 14 48 14zm0 4c9.94 0 18 8.06 18 18s-8.06 18-18 18-18-8.06-18-18 8.06-18 18-18zm0 8a8 8 0 100 16 8 8 0 000-16z" fill="#00b4d8"/>
                    <path d="M20 80c0-15.46 12.54-28 28-28s28 12.54 28 28" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <path d="M42 42v12M54 42v12M42 48h12" stroke="rgba(0,180,216,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="stethoscope-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#00b4d8">
                    <path d="M19 8C19 5.79 17.21 4 15 4c-1.87 0-3.42 1.3-3.86 3.04C10.62 7.01 10 6.57 10 6c0-.55.45-1 1-1V3c0-.55-.45-1-1-1H6C5.45 2 5 2.45 5 3v2c0 .55.45 1 1 1-.62 0-1.26.56-1.26 1.04L4.71 14C4.27 16.27 6.11 18 8 18c1.86 0 3.71-1.7 3.29-4.04L11.26 7c0-.55-.45-1-1.26-1 0 .55.45 1 1 1v2c0 .55-.45 1-1 1C9.26 10 9 9.55 9 9s.26-1 .74-1L9.71 14c.27 1.52-.71 2-1.71 2s-1.98-.48-1.71-2l.02-7h.01C6.26 6.44 6.55 6 7 6V4H9v2c-.45 0-.74.44-.74 1l-.03 7c-.27 1.52.71 2 1.77 2 1 0 1.98-.48 1.71-2L11.68 7c0-.55-.44-1-.68-1V4c1.1 0 2 .9 2 2 0 .67-.59 1.1-1.14 1.04C12.42 8.7 13.97 10 16 10h.17C16.6 12.33 18.6 14 21 14c2.76 0 5-2.24 5-5s-2.24-5-5-5h-2zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                  </svg>
                </div>
              </div>

              <div className="doctor-info">
                <h3>Dr. Simple Bhuptani</h3>
                <p className="doctor-title">MD Pathology | Consultant Pathologist</p>
                <p className="doctor-desc">
                  Founder and lead pathologist at Surepath Center with over 25 years of dedicated
                  expertise in histopathology and cytology. Committed to providing precise,
                  timely diagnoses that guide effective patient treatment.
                </p>
              </div>

              <div className="credentials-grid">
                {credentials.map((c, i) => (
                  <div key={i} className="credential-item">
                    <span className="cred-label">{c.label}</span>
                    <span className="cred-value">{c.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="about-right">
            <div className="reveal">
              <span className="section-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                About Us
              </span>
              <h2 className="section-title">
                Surepath Center for<br/>
                <span>Histopathology & Cytology</span>
              </h2>
              <p className="section-subtitle">
                A state-of-the-art NABL accredited diagnostic laboratory in Surat, Gujarat,
                dedicated to delivering precise pathological results that matter most when it counts.
              </p>
            </div>

            <div className="about-text reveal" style={{ transitionDelay: '0.15s' }}>
              <p>
                Situated at the heart of Surat, Surepath Center is equipped with cutting-edge
                technology and staffed by experienced pathology professionals. We specialize in
                Histopathology, Cytology, Immunohistochemistry (IHC), FNAC, Frozen Section, and
                PAP Smear – services that are critical for cancer detection and treatment planning.
              </p>
              <p style={{ marginTop: '16px' }}>
                Our laboratory operates under the stringent quality protocols set by NABL
                (National Accreditation Board for Testing and Calibration Laboratories), ensuring
                every result you receive meets the highest international standards.
              </p>
            </div>

            <div className="highlights-list reveal" style={{ transitionDelay: '0.3s' }}>
              {highlights.map((h, i) => (
                <div key={i} className="highlight-item">
                  <span className="highlight-icon">{h.icon}</span>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>

            <div className="about-location reveal" style={{ transitionDelay: '0.45s' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>407 Autograph – The Commercial Hub, Bhatar Majura Main Road, Opposite Rajhans Olympia, Surat, Gujarat 395017</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

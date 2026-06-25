import React, { useEffect, useRef } from 'react';
import doctorPhoto from '../assets/doctor.jpg';
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
            <div className="doctor-card-premium">
              {/* Card Image Area with Wave Cut */}
              <div className="card-image-container">
                <img
                  src={doctorPhoto}
                  alt="Dr. Simple Bhuptani – MD Pathology"
                  className="card-doctor-img"
                />
                {/* Multi-layered waves matching the first photo */}
                <div className="card-waves">
                  <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="wave-svg wave-back">
                    <path d="M0,12 C35,22 65,2 100,12 L100,20 L0,20 Z" fill="rgba(255, 255, 255, 0.15)"></path>
                  </svg>
                  <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="wave-svg wave-mid">
                    <path d="M0,14 C25,4 75,20 100,8 L100,20 L0,20 Z" fill="rgba(255, 255, 255, 0.25)"></path>
                  </svg>
                  <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="wave-svg wave-front">
                    <path d="M0,16 C30,24 70,6 100,14 L100,20 L0,20 Z" fill="#0a3d6b"></path>
                  </svg>
                </div>
              </div>

              {/* Card Body (Navy background) */}
              <div className="card-body-teal">
                {/* Floating plus signs in background */}
                <div className="bg-cross cross-1">+</div>
                <div className="bg-cross cross-2">+</div>
                <div className="bg-cross cross-3">+</div>

                <div className="doctor-info-text">
                  <h3 className="card-doctor-name">Dr. Simple Bhuptani</h3>
                  <p className="card-doctor-specialty">MD Pathology | Consultant Pathologist</p>
                </div>

                {/* Contact details at the bottom */}
                <div className="card-contact-details">
                  <div className="card-contact-item">
                    <div className="contact-icon-circle">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <span>info.surepath@yahoo.com</span>
                  </div>
                  <div className="card-contact-item">
                    <div className="contact-icon-circle">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <span>+91 82008 44943</span>
                  </div>
                </div>

                {/* Large bottom right decorative cross */}
                <div className="large-bg-cross">+</div>

                {/* Yellow corner accent */}
                <div className="yellow-corner"></div>
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

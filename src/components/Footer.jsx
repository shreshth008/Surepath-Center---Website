import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" stroke="rgba(0,180,216,0.5)" strokeWidth="1.5"/>
                  <path d="M14 6v16M6 14h16" stroke="#00b4d8" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="14" cy="14" r="4" fill="#00b4d8" fillOpacity="0.25"/>
                </svg>
                <span>Surepath Center</span>
              </div>
              <p className="footer-tagline">
                NABL Accredited Center for Histopathology & Cytology
              </p>
              <p className="footer-bio">
                Serving Surat with precision diagnostic services since 2000. Led by
                Dr. Simple Bhuptani, MD Pathology.
              </p>
              <div className="footer-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9a227">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                NABL Accredited Laboratory
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About Dr. Bhuptani', id: 'about' },
                  { label: 'Our Services', id: 'services' },
                  { label: 'Why Choose Us', id: 'why-us' },
                  { label: 'Contact Us', id: 'contact' },
                ].map(link => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                      </svg>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                {['Histopathology', 'Cytology', 'Immunohistochemistry (IHC)', 'FNAC', 'Frozen Section', 'PAP Smear'].map(svc => (
                  <li key={svc}>
                    <a
                      href="#services"
                      onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                      </svg>
                      {svc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4>Contact Info</h4>
              <div className="footer-contacts">
                <a href="tel:+918200844943" className="footer-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  +91 82008 44943
                </a>
                <a href="mailto:info.surepath@yahoo.com" className="footer-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  info.surepath@yahoo.com
                </a>
                <div className="footer-contact-item no-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  407 Autograph, Bhatar Majura Main Road, Surat 395017
                </div>
                <div className="footer-contact-item no-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                  </svg>
                  Mon – Sat: 8:30 AM – 8:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Surepath Center for Histopathology and Cytology. All rights reserved.</p>
          <p>
            <a href="https://www.facebook.com/share/1GWVffwgHF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

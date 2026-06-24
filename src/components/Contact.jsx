import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [hoveredInfo, setHoveredInfo] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, '')))
      errs.phone = 'Enter a valid 10-digit phone number';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', phone: '', message: '' }); }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const contactInfoItems = [
    {
      id: 'phone',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      label: 'Phone',
      value: '+91 82008 44943',
      href: 'tel:+918200844943',
    },
    {
      id: 'email',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: 'Email',
      value: 'info.surepath@yahoo.com',
      href: 'mailto:info.surepath@yahoo.com',
    },
    {
      id: 'address',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      label: 'Address',
      value: '407 Autograph – The Commercial Hub, Bhatar Majura Main Road, Opp. Rajhans Olympia, Surat, Gujarat 395017',
      href: 'https://maps.google.com/?q=Surepath+Center+Surat',
    },
    {
      id: 'hours',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
        </svg>
      ),
      label: 'Working Hours',
      value: 'Monday – Saturday: 8:30 AM to 8:00 PM',
      href: null,
    },
  ];

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-header reveal">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Contact Us
          </span>
          <h2 className="section-title">
            Get in <span>Touch</span> With Us
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a query or need to refer a patient? Reach out to Surepath Center —
            we're here to assist referring physicians and patients alike.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left - Info */}
          <div className="contact-info reveal">
            <h3 className="info-title">Contact Information</h3>

            {contactInfoItems.map((item) => (
              <div
                key={item.id}
                className={`info-card ${hoveredInfo === item.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredInfo(item.id)}
                onMouseLeave={() => setHoveredInfo(null)}
              >
                <div className="info-icon">{item.icon}</div>
                <div className="info-body">
                  <span className="info-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="info-value" target={item.id === 'address' ? '_blank' : undefined} rel="noopener noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <span className="info-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            <div className="social-links">
              <a href="https://www.facebook.com/share/1GWVffwgHF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-btn" id="fb-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow on Facebook
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form-wrap reveal" style={{ transitionDelay: '0.2s' }}>
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-5-5 1.41-1.41L10 13.67l7.59-7.59L19 7.5l-9 9z"/>
                  </svg>
                </div>
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3 className="form-title">Send Us a Message</h3>

                <div className={`form-group ${errors.name ? 'error' : ''}`}>
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>

                <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                  <label htmlFor="contact-phone">Phone Number *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    maxLength={10}
                  />
                  {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>

                <div className={`form-group ${errors.message ? 'error' : ''}`}>
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Your query or message..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <span className="error-msg">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-primary form-submit" id="contact-submit-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="map-container reveal" style={{ transitionDelay: '0.3s' }}>
          <div className="map-overlay-label">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#0096c7">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Surepath Center, Surat
          </div>
          <iframe
            title="Surepath Center Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.847!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjciTiA3MsKwNDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState, useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    id: 'histopathology',
    icon: '🔬',
    title: 'Histopathology',
    shortDesc: 'Microscopic tissue examination for disease detection',
    fullDesc: 'Histopathology is the examination of tissues from the body under a microscope to study disease manifestation. It is used for definitive cancer diagnosis and guides treatment planning. Our NABL-accredited lab processes biopsies with highest precision.',
    color: '#0096c7',
    tags: ['Biopsy', 'Tissue Analysis', 'Cancer Detection'],
  },
  {
    id: 'cytology',
    icon: '🧫',
    title: 'Cytology',
    shortDesc: 'Cell-level examination for early disease diagnosis',
    fullDesc: 'Cytology involves the examination of cells from various body sites. It is a vital technique for early detection of cancer and infectious diseases. We perform sputum cytology, urine cytology, body fluid cytology, and more.',
    color: '#00897b',
    tags: ['Cell Analysis', 'Early Detection', 'Non-invasive'],
  },
  {
    id: 'ihc',
    icon: '🧬',
    title: 'Immunohistochemistry (IHC)',
    shortDesc: 'Advanced protein marker detection in tissues',
    fullDesc: 'IHC is a powerful technique that uses antibodies to detect specific proteins in tissue sections. It helps classify tumors, determine treatment strategies, and assess prognosis. We are pioneers of IHC diagnostics in Surat with a comprehensive antibody panel.',
    color: '#1565c0',
    tags: ['Tumor Classification', 'Protein Markers', 'Prognosis'],
  },
  {
    id: 'fnac',
    icon: '💉',
    title: 'FNAC',
    shortDesc: 'Fine Needle Aspiration Cytology for lumps & masses',
    fullDesc: 'Fine Needle Aspiration Cytology (FNAC) is a minimally invasive procedure used to investigate lumps, masses, and swellings. A thin needle draws cells for examination, providing rapid and accurate diagnosis without surgery.',
    color: '#7b1fa2',
    tags: ['Minimally Invasive', 'Rapid Results', 'Lump Diagnosis'],
  },
  {
    id: 'frozen-section',
    icon: '❄️',
    title: 'Frozen Section',
    shortDesc: 'Rapid intraoperative tissue diagnosis',
    fullDesc: 'Frozen section is an intraoperative procedure providing immediate tissue diagnosis during surgery. Results are delivered within 20-30 minutes to guide the surgeon on the extent of surgical resection. We provide 24/7 frozen section services.',
    color: '#0277bd',
    tags: ['Intraoperative', '24/7 Service', 'Rapid Diagnosis'],
  },
  {
    id: 'pap-smear',
    icon: '🩺',
    title: 'PAP Smear',
    shortDesc: 'Cervical cancer screening test for women',
    fullDesc: 'PAP Smear (Papanicolaou test) is a cervical screening procedure detecting precancerous or cancerous cells in the cervix. Regular PAP smears are essential for women\'s health and early detection of cervical cancer. We follow standard Bethesda reporting.',
    color: '#c62828',
    tags: ['Cervical Screening', 'Women\'s Health', 'Cancer Prevention'],
  },
];

const ServiceCard = ({ service, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`service-card ${expanded ? 'expanded' : ''}`}
      style={{ '--card-color': service.color, animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-top">
        <div className="service-icon-wrap" style={{ background: `${service.color}15`, border: `1.5px solid ${service.color}30` }}>
          <span className="service-icon">{service.icon}</span>
        </div>
        <div className="service-header">
          <h3>{service.title}</h3>
          <p>{service.shortDesc}</p>
        </div>
      </div>

      <div className="service-tags">
        {service.tags.map((tag, i) => (
          <span key={i} className="service-tag" style={{ color: service.color, borderColor: `${service.color}35`, background: `${service.color}08` }}>
            {tag}
          </span>
        ))}
      </div>

      {expanded && (
        <div className="service-details">
          <p>{service.fullDesc}</p>
        </div>
      )}

      <button
        className="service-toggle"
        onClick={() => setExpanded(!expanded)}
        id={`service-${service.id}-btn`}
        style={{ '--btn-color': service.color }}
      >
        {expanded ? 'Show Less' : 'Learn More'}
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
          style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </button>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="services-header reveal">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
            </svg>
            Our Services
          </span>
          <h2 className="section-title">
            Comprehensive <span>Diagnostic</span> Services
          </h2>
          <p className="section-subtitle">
            From routine biopsies to complex immunohistochemical studies — we provide the full
            spectrum of histopathological and cytological diagnostic services under one roof.
          </p>
        </div>

        <div className="services-grid reveal" style={{ transitionDelay: '0.2s' }}>
          {services.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} index={i} />
          ))}
        </div>

        <div className="services-note reveal" style={{ transitionDelay: '0.4s' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          <p>
            All tests are performed under NABL accredited protocols. For specific test queries,
            please{' '}
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              contact us
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

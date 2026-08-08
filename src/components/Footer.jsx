import React from 'react';
import { templeData } from '../config/templeData';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Timings', href: '#timings' },
    { label: 'Poojas', href: '#poojas' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Donations', href: '#donations' }
  ];

  const importantLinks = [
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#footer' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' }
  ];

  const cleanPhone = templeData.contact.whatsapp.replace(/\D/g, '');

  return (
    <footer id="footer" className="footer">
      <div className="container">
        
        <div className="footer-top">
          
          {/* Column 1: Branding & Message */}
          <div className="footer-column">
            <div className="footer-logo-block">
              <svg className="footer-logo-icon" viewBox="0 0 24 24">
                <path d="M12 2L2 10h3v10h14V10h3L12 2zm0 3.8l6.2 5H17v8H7v-8h-1.2l6.2-5zm-3 7.2v3h6v-3H9z" />
              </svg>
              <span className="footer-temple-name">
                {templeData.name} <br />
                <span style={{ fontSize: '0.8rem', color: 'var(--white)', opacity: 0.8 }}>{templeData.subtitle}</span>
              </span>
            </div>
            <p className="footer-desc">
              {templeData.devotionalQuote}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, i) => (
                <li key={i} className="footer-link-item">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Important Links</h4>
            <ul className="footer-links">
              {importantLinks.map((link, i) => (
                <li key={i} className="footer-link-item">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Details</h4>
            
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>{templeData.contact.phone}</span>
            </div>

            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="#25D366">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.25 8.477 3.522 2.266 2.27 3.513 5.284 3.513 8.486 0 6.66-5.337 11.999-11.948 11.999-2.005-.001-3.973-.504-5.714-1.463L0 24zm6.59-2.072c1.66.984 3.248 1.498 4.749 1.499 5.529 0 10.029-4.5 10.029-10.03 0-2.677-1.042-5.193-2.936-7.09-1.894-1.897-4.412-2.943-7.092-2.943-5.53 0-10.03 4.5-10.03 10.03 0 1.702.483 3.36 1.396 4.814l-.994 3.633 3.72-.976zM17.433 14.3c-.296-.149-1.755-.867-2.027-.966-.272-.099-.47-.149-.667.149-.197.297-.764.966-.937 1.164-.173.199-.346.223-.642.075-.296-.149-1.25-.461-2.381-1.47-1.126-1.004-1.886-2.243-2.107-2.615-.221-.373-.024-.574.124-.722.133-.133.296-.347.444-.52.149-.174.197-.298.296-.497.099-.198.05-.371-.025-.52-.075-.149-.667-1.609-.913-2.203-.24-.577-.483-.499-.667-.508-.173-.008-.371-.01-.57-.01-.197 0-.52.074-.792.372-.272.297-1.037 1.016-1.037 2.479 0 1.462 1.063 2.875 1.211 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              <a href={`https://wa.me/${cleanPhone}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                Chat on WhatsApp
              </a>
            </div>

            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>{templeData.contact.email}</span>
            </div>

            <div className="footer-socials">
              <a href="#" className="footer-social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"/></svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m4.4 2.25c3.18 0 5.75 2.57 5.75 5.75S15.18 17.75 12 17.75 6.25 15.18 6.25 12 8.82 6.25 12 6.25m0 2A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25m4.5-.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.06v1.74c0 .57-.03 1.26-.1 2.06-.06.8-.15 1.43-.28 1.9-.13.48-.42.86-.88.93-1.12.2-3.12.3-6 .3-2.88 0-4.88-.1-6-.3-.46-.07-.75-.45-.88-.93-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.06v-1.74c0-.57.03-1.26.1-2.06.06-.8.15-1.43.28-1.9.13-.48.42-.86.88-.93 1.12-.2 3.12-.3 6-.3 2.88 0 4.88.1 6 .3.46.07.75.45.88.93z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {templeData.fullName}. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}

import React from 'react';
import { templeData } from '../config/templeData';

export default function Donations() {
  return (
    <section id="donations" className="alt-bg">
      <div className="container">
        <div className="donations-grid">
          
          {/* Left Column: Devotional Support message */}
          <div className="donations-left">
            <h2 className="donations-title">
              <svg viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.5 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              SUPPORT THE TEMPLE
            </h2>
            <p className="donations-text">
              Your contribution helps in the development of the temple, upkeep of the premises, and conducting weekly poojas, festivals, and community welfare programs such as <strong>Annadanam</strong> (free meal distribution every Saturday).
            </p>
            <p className="donations-text" style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              For donations and queries, please contact us directly. Bank transfer details will be updated soon.
            </p>
          </div>

          {/* Right Column: Contact for donations */}
          <div className="donations-payment-info" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="donation-contact-card">

              {/* Phone icon */}
              <div className="donation-contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>

              <p className="donation-contact-label">Contact for Donations &amp; Queries</p>
              <a href="tel:+919441551500" className="donation-contact-number">
                +91 94415 51500
              </a>

              <div className="donation-contact-actions">
                <a href="tel:+919441551500" className="btn btn-maroon">
                  {/* Phone icon */}
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href="https://wa.me/919441551500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  {/* WhatsApp icon */}
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.25 8.477 3.522 2.266 2.27 3.513 5.284 3.513 8.486 0 6.66-5.337 11.999-11.948 11.999-2.005-.001-3.973-.504-5.714-1.463L0 24zm6.59-2.072c1.66.984 3.248 1.498 4.749 1.499 5.529 0 10.029-4.5 10.029-10.03 0-2.677-1.042-5.193-2.936-7.09-1.894-1.897-4.412-2.943-7.092-2.943-5.53 0-10.03 4.5-10.03 10.03 0 1.702.483 3.36 1.396 4.814l-.994 3.633 3.72-.976z" />
                  </svg>
                  WhatsApp
                </a>
              </div>

              <p className="donation-bank-note">
                🏦 Bank transfer details will be updated soon.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

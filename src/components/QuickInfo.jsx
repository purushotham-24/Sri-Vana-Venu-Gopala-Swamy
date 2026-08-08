import React from 'react';
import { templeData } from '../config/templeData';

export default function QuickInfo() {
  return (
    <section className="quick-info">
      <div className="container">
        <div className="quick-info-grid">
          
          {/* Card 1: Darshan Timings */}
          <div className="quick-card">
            <div className="quick-icon-wrapper">
              <svg viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2C11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
            </div>
            <h3 className="quick-title">Darshan Timings</h3>
            <div className="quick-content">
              <div className="quick-time-slot">
                <span>Morning</span>
                <span className="quick-time-value">{templeData.darshanTimings.morning.range}</span>
              </div>
              <div className="quick-time-slot">
                <span>Evening</span>
                <span className="quick-time-value">{templeData.darshanTimings.evening.range}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Opening Days */}
          <div className="quick-card">
            <div className="quick-icon-wrapper">
              <svg viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
              </svg>
            </div>
            <h3 className="quick-title">Opening Days</h3>
            <div className="quick-content">
              <div className="quick-time-slot">
                <span>Saturdays Only</span>
              </div>
              <span className="quick-badge-green" style={{ color: 'var(--maroon)' }}>Closed Sunday – Friday</span>
            </div>
          </div>

          {/* Card 3: Seva & Poojas */}
          <div className="quick-card">
            <div className="quick-icon-wrapper">
              <svg viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
            </div>
            <h3 className="quick-title">Seva & Poojas</h3>
            <div className="quick-content">
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Various Sevas and Poojas are performed daily.
              </p>
              <a href="#poojas" className="quick-link-red">
                View Poojas &rarr;
              </a>
            </div>
          </div>

          {/* Card 4: Contact */}
          <div className="quick-card">
            <div className="quick-icon-wrapper">
              <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <h3 className="quick-title">Contact</h3>
            <div className="quick-content">
              <span className="quick-phone">{templeData.contact.phone}</span>
              <a 
                href={`https://wa.me/${templeData.contact.whatsapp.replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="quick-whatsapp"
              >
                {/* WhatsApp logo */}
                <svg viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.25 8.477 3.522 2.266 2.27 3.513 5.284 3.513 8.486 0 6.66-5.337 11.999-11.948 11.999-2.005-.001-3.973-.504-5.714-1.463L0 24zm6.59-2.072c1.66.984 3.248 1.498 4.749 1.499 5.529 0 10.029-4.5 10.029-10.03 0-2.677-1.042-5.193-2.936-7.09-1.894-1.897-4.412-2.943-7.092-2.943-5.53 0-10.03 4.5-10.03 10.03 0 1.702.483 3.36 1.396 4.814l-.994 3.633 3.72-.976zM17.433 14.3c-.296-.149-1.755-.867-2.027-.966-.272-.099-.47-.149-.667.149-.197.297-.764.966-.937 1.164-.173.199-.346.223-.642.075-.296-.149-1.25-.461-2.381-1.47-1.126-1.004-1.886-2.243-2.107-2.615-.221-.373-.024-.574.124-.722.133-.133.296-.347.444-.52.149-.174.197-.298.296-.497.099-.198.05-.371-.025-.52-.075-.149-.667-1.609-.913-2.203-.24-.577-.483-.499-.667-.508-.173-.008-.371-.01-.57-.01-.197 0-.52.074-.792.372-.272.297-1.037 1.016-1.037 2.479 0 1.462 1.063 2.875 1.211 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

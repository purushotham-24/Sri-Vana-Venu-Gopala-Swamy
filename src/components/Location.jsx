import React from 'react';
import { templeData } from '../config/templeData';

export default function Location() {
  return (
    <section id="location">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Find Us</span>
          <h2>TEMPLE LOCATION</h2>
        </div>

        <div className="location-wrapper">
          {/* Left Side: Map iframe */}
          <div className="map-container">
            <iframe 
              title="Sri Vana Venu Gopala Swamy Temple Location Map"
              src={templeData.location.embedUrl}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Side: Address details list */}
          <div className="location-details-box">
            <div>
              <h3 className="address-title">{templeData.fullName}</h3>
              <ul className="address-list">
                <li className="address-item">
                  <span className="address-label">Village:</span>
                  <span className="address-value">{templeData.location.village}</span>
                </li>
                <li className="address-item">
                  <span className="address-label">Mandal:</span>
                  <span className="address-value">{templeData.location.mandal}</span>
                </li>
                <li className="address-item">
                  <span className="address-label">District:</span>
                  <span className="address-value">{templeData.location.district}</span>
                </li>
                <li className="address-item">
                  <span className="address-label">State:</span>
                  <span className="address-value">{templeData.location.state} - {templeData.location.pincode}</span>
                </li>
              </ul>
            </div>
            
            <a 
              href={templeData.location.mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-maroon"
            >
              {/* Map pin marker icon */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '6px' }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Get Directions
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { templeData } from '../config/templeData';
import deityImg from '../assets/deity.jpg';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="container">
      <div className="about-grid">
        
        {/* Left Column: Image of Deity */}
        <div className="about-image-wrapper">
          <img src={deityImg} alt="Deity at Sri Vana Venu Gopala Swamy Temple" className="about-image" />
        </div>

        {/* Right Column: About Description */}
        <div className="about-content">
          <span className="about-tag">About the Temple</span>
          <h2 className="about-title">{templeData.fullName}</h2>
          
          <p className="about-text">
            {templeData.aboutText}
          </p>
          
          {showMore && (
            <div className="about-text-extra" style={{ animation: 'fadeIn 0.5s ease-out' }}>
              <p className="about-text">
                <strong>Legend of the Deity:</strong> Devotees believe the main idol of Sri Vana Venugopala Swamy originally manifested from a small sacred stone that grows in size over time, which local tradition says gave the village its name, <em>Devaragudipalle</em>.
              </p>
              <p className="about-text">
                <strong>Rituals & Vows:</strong> Pilgrims frequently visit on Saturdays to perform special prayers and offer milk (Pala Abhishekam) to the deity. It is a common local practice for families struggling with childlessness to offer prayers here, and later perform tonsure (mundan) ceremonies after having children. Every Saturday, free meals (Annadanam) are provided at the temple for all visitors.
              </p>
            </div>
          )}
          
          <button 
            onClick={() => setShowMore(!showMore)} 
            className="btn btn-maroon"
            style={{ marginTop: '10px' }}
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>

      </div>
    </section>
  );
}

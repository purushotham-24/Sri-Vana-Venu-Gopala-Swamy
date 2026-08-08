import React from 'react';
import { templeData } from '../config/templeData';
import heroImg from '../assets/temple-hero.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <img src={heroImg} alt="Sri Vana Venu Gopala Swamy Temple Courtyard" className="hero-background" />
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-container">
          <span className="hero-welcome">Welcome to</span>
          <h1 className="hero-title">
            Sri Vana Venu <br />
            Gopala Swamy <br />
            Temple
          </h1>
          <p className="hero-subtitle">
            {templeData.devotionalQuote}
          </p>
          
          <div className="hero-actions">
            <a href="#about" className="btn btn-maroon">
              About Temple
            </a>
            <a 
              href={templeData.location.mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-gold"
            >
              {/* Map pin icon */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '4px' }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Wavy Divider at bottom */}
      <div className="hero-divider">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none">
          <path d="M0,32 C120,42.7 240,48 360,42.7 C480,37.3 600,21.3 720,21.3 C840,21.3 960,37.3 1080,42.7 C1200,48 1320,42.7 1440,32 L1440,40 L0,40 Z"></path>
        </svg>
      </div>
    </section>
  );
}

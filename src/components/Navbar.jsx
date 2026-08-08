import React, { useState, useEffect } from 'react';
import { templeData } from '../config/templeData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Timings', href: '#timings' },
    { label: 'Poojas', href: '#poojas' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Donations', href: '#donations' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#footer' }
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>
      {/* TTD Style Announcements Ticker Bar */}
      <div className="ticker-bar">
        <div className="ticker-content">
          <span>✦ Special Announcement: Sri Vana Venu Gopala Swamy Temple is open on <strong>Saturdays only from 9:00 AM to 3:00 PM</strong>. Every Saturday, Pala Abhishekam (Milk offering) and Annadanam (Free meals) are provided for all visitors. ✦</span>
          <span>✦ Special Announcement: Sri Vana Venu Gopala Swamy Temple is open on <strong>Saturdays only from 9:00 AM to 3:00 PM</strong>. Every Saturday, Pala Abhishekam (Milk offering) and Annadanam (Free meals) are provided for all visitors. ✦</span>
        </div>
      </div>
      
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#home" className="navbar-logo-area">
            {/* Detailed Golden Temple Silhouette Icon */}
            <svg className="navbar-logo-icon" viewBox="0 0 24 24">
              <path d="M12 2L2 10h3v10h14V10h3L12 2zm0 3.8l6.2 5H17v8H7v-8h-1.2l6.2-5zm-3 7.2v3h6v-3H9z" />
            </svg>
            <div className="navbar-title-block">
              <span className="navbar-title">{templeData.name}</span>
              <span className="navbar-subtitle">{templeData.subtitle}</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="navbar-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Toggle */}
          <button 
            className="navbar-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`} style={{ top: 'calc(var(--header-height) + 30px)' }}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

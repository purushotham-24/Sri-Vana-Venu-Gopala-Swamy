import React, { useState } from 'react';
import img1 from '../assets/temple-1.jpg';
import img2 from '../assets/temple-2.jpg';
import img3 from '../assets/temple-3.jpg';
import img4 from '../assets/temple-4.jpg';
import img5 from '../assets/temple-5.jpg';
import img6 from '../assets/temple-6.jpg';
import img7 from '../assets/temple-7.jpg';
import img8 from '../assets/temple-8.jpg';

const baseImages = [
  { src: img5, title: 'Pala Abhishekam – Saturday Pooja' },
  { src: img6, title: 'Outdoor Shrine – Garland Offering' },
  { src: img7, title: 'Deity Alankaram with Flowers' },
  { src: img8, title: 'Annadanam Saturday Gathering' },
  { src: img1, title: 'Sacred Cow & Calf Sculpture' },
  { src: img2, title: 'Sri Vana Venugopala Swamy Deity' },
  { src: img3, title: 'Lord Hanuman Shrine' },
  { src: img4, title: 'Temple Stairs & Entrance' },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? baseImages : baseImages.slice(0, 4);

  function openLightbox(img, index) {
    setActiveImage(img);
    setActiveIndex(index);
  }

  function closeLightbox() {
    setActiveImage(null);
    setActiveIndex(null);
  }

  function prevImage() {
    const all = showAll ? baseImages : baseImages.slice(0, 4);
    const newIdx = (activeIndex - 1 + all.length) % all.length;
    setActiveImage(all[newIdx]);
    setActiveIndex(newIdx);
  }

  function nextImage() {
    const all = showAll ? baseImages : baseImages.slice(0, 4);
    const newIdx = (activeIndex + 1) % all.length;
    setActiveImage(all[newIdx]);
    setActiveIndex(newIdx);
  }

  return (
    <>
      {/* ── GALLERY SECTION ── */}
      <section id="gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Visual Tour</span>
            <h2>TEMPLE GALLERY</h2>
          </div>

          <div className="gallery-grid">
            {visibleImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openLightbox(image, index)}
                style={{ cursor: 'pointer' }}
              >
                <img src={image.src} alt={image.title} className="gallery-img" />
                <div className="gallery-overlay">
                  <span className="gallery-overlay-title">{image.title}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-action">
            <button onClick={() => setShowAll(v => !v)} className="btn btn-maroon">
              {showAll ? 'Show Less' : `View All ${baseImages.length} Photos`}
            </button>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {activeImage && (
        <div style={lightboxOverlayStyle} onClick={closeLightbox}>
          <button style={lightboxNavStyle('left')} onClick={e => { e.stopPropagation(); prevImage(); }}>&#8249;</button>

          <div style={lightboxContentStyle} onClick={e => e.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.title} style={lightboxImgStyle} />
            <div style={lightboxCaptionStyle}>
              <span style={{ fontSize: '1rem', fontWeight: '600' }}>{activeImage.title}</span>
              <button onClick={closeLightbox} style={lightboxCloseBtnStyle}>Close ✕</button>
            </div>
          </div>

          <button style={lightboxNavStyle('right')} onClick={e => { e.stopPropagation(); nextImage(); }}>&#8250;</button>
        </div>
      )}
    </>
  );
}

/* ── inline styles ── */
const lightboxOverlayStyle = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
  backgroundColor: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center',
  justifyContent: 'center', zIndex: 3000, padding: '20px',
};
const lightboxContentStyle = {
  maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
};
const lightboxImgStyle = {
  width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '8px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
};
const lightboxCaptionStyle = {
  color: 'white', marginTop: '15px', width: '100%', display: 'flex',
  justifyContent: 'space-between', alignItems: 'center', padding: '0 10px',
};
const lightboxCloseBtnStyle = {
  background: 'none', border: 'none', color: 'var(--gold-bright)', fontSize: '1rem',
  fontWeight: '700', cursor: 'pointer', padding: '8px 16px',
};
const lightboxNavStyle = side => ({
  background: 'rgba(197,160,89,0.2)', border: '2px solid rgba(197,160,89,0.5)',
  color: 'var(--gold-bright)', fontSize: '2.5rem', cursor: 'pointer',
  width: '50px', height: '50px', borderRadius: '50%', display: 'flex',
  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  marginLeft: side === 'left' ? 0 : '12px', marginRight: side === 'right' ? 0 : '12px',
  transition: 'all 0.2s', lineHeight: 1,
});

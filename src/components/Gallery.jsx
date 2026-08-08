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

  // Community-uploaded media (stored in browser memory only – no backend)
  const [communityMedia, setCommunityMedia] = useState([]);
  const [dragOver, setDragOver] = useState(false);

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

  function handleFiles(files) {
    const newMedia = [];
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        const url = URL.createObjectURL(file);
        newMedia.push({ url, type: file.type.startsWith('video/') ? 'video' : 'image', name: file.name });
      }
    });
    setCommunityMedia(prev => [...prev, ...newMedia]);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  }

  function handleInputChange(e) {
    handleFiles(e.target.files);
  }

  function removeMedia(idx) {
    setCommunityMedia(prev => prev.filter((_, i) => i !== idx));
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

      {/* ── COMMUNITY UPLOAD SECTION ── */}
      <section id="community-upload" className="alt-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Share Your Blessings</span>
            <h2>Upload Your Moments</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '10px', fontSize: '1rem' }}>
              Visited the temple? Share your photos &amp; videos with the devotee community.
            </p>
          </div>

          {/* Drop Zone */}
          <div
            className={`upload-dropzone ${dragOver ? 'drag-active' : ''}`}
            onDragOver={e => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => document.getElementById('community-file-input').click()}
          >
            <div className="upload-dropzone-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
              </svg>
            </div>
            <p className="upload-dropzone-text">
              <strong>Drag &amp; drop</strong> your photos or videos here
            </p>
            <p className="upload-dropzone-subtext">or click to browse files</p>
            <div className="upload-dropzone-types">
              <span>📷 JPG, PNG, WEBP</span>
              <span>🎬 MP4, MOV, AVI</span>
            </div>
            <input
              id="community-file-input"
              type="file"
              multiple
              accept="image/*,video/*"
              style={{ display: 'none' }}
              onChange={handleInputChange}
            />
          </div>

          {/* Uploaded Media Preview Grid */}
          {communityMedia.length > 0 && (
            <div className="community-media-section">
              <h3 className="community-media-heading">
                Your Uploaded Media ({communityMedia.length})
              </h3>
              <div className="community-media-grid">
                {communityMedia.map((media, idx) => (
                  <div key={idx} className="community-media-item">
                    {media.type === 'image' ? (
                      <img src={media.url} alt={media.name} className="community-media-preview" />
                    ) : (
                      <video
                        src={media.url}
                        className="community-media-preview"
                        controls
                        muted
                      />
                    )}
                    <div className="community-media-overlay">
                      <span className="community-media-type-badge">
                        {media.type === 'video' ? '🎬 Video' : '📷 Photo'}
                      </span>
                      <button
                        className="community-media-remove"
                        onClick={() => removeMedia(idx)}
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="community-media-name">{media.name}</p>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  🙏 Thank you for sharing! To permanently submit your photos for review, please send them via WhatsApp.
                </p>
                <a
                  href="https://wa.me/919441551500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-maroon"
                  style={{ marginTop: '12px' }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginRight: 6 }}>
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.25 8.477 3.522 2.266 2.27 3.513 5.284 3.513 8.486 0 6.66-5.337 11.999-11.948 11.999-2.005-.001-3.973-.504-5.714-1.463L0 24zm6.59-2.072c1.66.984 3.248 1.498 4.749 1.499 5.529 0 10.029-4.5 10.029-10.03 0-2.677-1.042-5.193-2.936-7.09-1.894-1.897-4.412-2.943-7.092-2.943-5.53 0-10.03 4.5-10.03 10.03 0 1.702.483 3.36 1.396 4.814l-.994 3.633 3.72-.976z"/>
                  </svg>
                  Send via WhatsApp
                </a>
              </div>
            </div>
          )}
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

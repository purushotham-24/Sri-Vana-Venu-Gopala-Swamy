import React, { useState } from 'react';
import { templeData } from '../config/templeData';

export default function Timings() {
  const [showPoojaModal, setShowPoojaModal] = useState(false);

  return (
    <section id="timings" className="alt-bg">
      <div className="container">
        <div className="timings-special-grid">
          
          {/* Left Column: Darshan Timings */}
          <div className="timings-box">
            <div className="timings-box-header">
              <svg viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2C11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', margin: 0 }}>DARSHAN TIMINGS</h2>
            </div>
            
            <div className="timings-columns">
              {/* Morning */}
              <div>
                <h3 className="timing-column-title">Morning Timings</h3>
                <p className="timing-range">{templeData.darshanTimings.morning.range}</p>
                <ul className="timings-list">
                  {templeData.darshanTimings.morning.events.map((event, i) => (
                    <li key={i} className="timing-item">
                      <span className="timing-name">{event.name}</span>
                      <span className="timing-time">{event.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Evening */}
              <div>
                <h3 className="timing-column-title">Evening Timings</h3>
                <p className="timing-range">{templeData.darshanTimings.evening.range}</p>
                <ul className="timings-list">
                  {templeData.darshanTimings.evening.events.map((event, i) => (
                    <li key={i} className="timing-item">
                      <span className="timing-name">{event.name}</span>
                      <span className="timing-time">{event.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Special Poojas */}
          <div className="special-poojas-box" id="poojas">
            <div className="timings-box-header">
              {/* Bell Icon */}
              <svg viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', margin: 0 }}>SPECIAL POOJAS</h2>
            </div>
            
            <ul className="pooja-list">
              {templeData.specialPoojas.map((pooja, i) => (
                <li key={i} className="pooja-item">
                  {pooja}
                </li>
              ))}
            </ul>

            <button onClick={() => setShowPoojaModal(true)} className="btn btn-maroon">
              View All Poojas
            </button>
          </div>

        </div>
      </div>

      {/* Pooja Details Modal */}
      {showPoojaModal && (
        <div style={modalOverlayStyle} onClick={() => setShowPoojaModal(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <div style={modalHeaderStyle}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--maroon)' }}>Temple Sevas & Poojas</h3>
              <button onClick={() => setShowPoojaModal(false)} style={modalCloseButtonStyle}>
                {/* Close Icon */}
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
            <div style={modalBodyStyle}>
              <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
                Below is a list of regular poojas performed at the temple. These are placeholder schedules and rates; please confirm with the temple office before booking.
              </p>
              <table style={tableStyle}>
                <thead>
                  <tr style={tableHeaderRowStyle}>
                    <th style={tableHeaderCellStyle}>Seva Name</th>
                    <th style={tableHeaderCellStyle}>Timings</th>
                    <th style={tableHeaderCellStyle}>Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  {templeData.specialPoojas.map((name, idx) => (
                    <tr key={idx} style={idx % 2 === 0 ? tableRowEvenStyle : tableRowOddStyle}>
                      <td style={tableCellStyle}>{name}</td>
                      <td style={tableCellStyle}>Contact Temple</td>
                      <td style={tableCellStyle}>Placeholder Amount</td>
                    </tr>
                  ))}
                  {templeData.poojasDetailed && templeData.poojasDetailed.map((p, idx) => (
                    <tr key={idx + 10} style={idx % 2 === 0 ? tableRowEvenStyle : tableRowOddStyle}>
                      <td style={tableCellStyle}>{p.name}</td>
                      <td style={tableCellStyle}>{p.timing}</td>
                      <td style={tableCellStyle}>{p.charge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Inline Styles for Pooja Modal (keeps logic self-contained)
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(63, 14, 24, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2000,
  padding: '20px',
  animation: 'fadeIn 0.25s ease-out'
};

const modalContentStyle = {
  backgroundColor: 'var(--cream-bg)',
  border: '3px solid var(--gold-primary)',
  borderRadius: 'var(--radius-md)',
  width: '100%',
  maxWidth: '650px',
  boxShadow: 'var(--shadow-lg)',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '80vh'
};

const modalHeaderStyle = {
  display: 'flex',
  justifyContent: 'between',
  alignItems: 'center',
  padding: '20px 24px',
  borderBottom: '1px solid var(--gold-light)',
  justifyContent: 'space-between'
};

const modalCloseButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'var(--text-muted)',
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const modalBodyStyle = {
  padding: '24px',
  overflowY: 'auto',
  flexGrow: 1
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  textAlign: 'left',
  fontSize: '0.95rem'
};

const tableHeaderRowStyle = {
  borderBottom: '2px solid var(--gold-primary)',
  backgroundColor: 'rgba(197, 160, 89, 0.1)'
};

const tableHeaderCellStyle = {
  padding: '12px 16px',
  fontWeight: '700',
  color: 'var(--maroon)'
};

const tableCellStyle = {
  padding: '12px 16px',
  borderBottom: '1px solid rgba(197, 160, 89, 0.15)',
  color: 'var(--text-dark)'
};

const tableRowEvenStyle = {
  backgroundColor: '#FFFFFF'
};

const tableRowOddStyle = {
  backgroundColor: 'rgba(244, 239, 230, 0.3)'
};

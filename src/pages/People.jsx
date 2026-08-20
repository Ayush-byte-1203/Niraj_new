import React, { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { MapPin, Search, RefreshCw } from "lucide-react";
import LinkedinIcon from "../components/LinkedinIcon";
import { people, offices, practices } from "../data/mockDb";

export default function People() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedPerson) {
      document.body.classList.add('menu-open-lock');
      document.documentElement.classList.add('menu-open-lock');
    } else {
      document.body.classList.remove('menu-open-lock');
      document.documentElement.classList.remove('menu-open-lock');
    }
    return () => {
      document.body.classList.remove('menu-open-lock');
      document.documentElement.classList.remove('menu-open-lock');
    };
  }, [selectedPerson]);

  return (
    <div className="people-page container section-padding fade-in-up">
      {/* Page Header */}
      <div className="page-header">
        <span className="title-small accent-gold">Our Professionals</span>
        <h1 className="title-display page-main-title">Aligning enterprise strategy with sector specialists.</h1>
      </div>

      {/* Directory Content Area */}
      <div className="people-grid">
        {people.map((person, index) => {
            const office = offices.find(o => o.id === person.officeId);
            
            return (
              <div 
                key={person.id} 
                className="person-card"
              >
                <div className="person-meta" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "1.5rem" }}>
                  <div className="person-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <h3 style={{ fontWeight: "bold" }}>{person.name}</h3>
                      <p className="person-title">{person.title}</p>
                    </div>
                    {person.linkedin && (
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link" aria-label={`LinkedIn profile for ${person.name}`} onClick={(e) => e.stopPropagation()}>
                        <LinkedinIcon size={20} />
                      </a>
                    )}
                  </div>
                  <div className="person-bio-container bio-clamp" style={{ marginTop: "1rem" }}>
                    <p className="person-bio-paragraph" style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0, lineHeight: "1.5" }}>
                      {person.bio}
                    </p>
                  </div>
                  <div style={{ marginTop: "auto" }}>
                    <button className="show-more-btn" onClick={(e) => { e.stopPropagation(); setSelectedPerson(person); }}>Show more</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      {/* Modal Popup */}
      {selectedPerson && createPortal(
        <div className="person-modal-overlay" onClick={() => setSelectedPerson(null)}>
          <div className="person-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="modal-header">
              <h2 className="modal-name">{selectedPerson.name}</h2>
              <p className="modal-designation">{selectedPerson.title}</p>
            </div>
            
            <div className="modal-bio">
              {selectedPerson.bio.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="modal-footer">
              <button className="modal-close-link" onClick={() => setSelectedPerson(null)}>
                Explore all people
              </button>
            </div>

          </div>
        </div>,
        document.body
      )}

      <style>{`
        .people-page {
          padding-top: calc(var(--header-height) + 4rem);
          text-align: left;
        }
        .page-header {
          margin-bottom: 3.5rem;
          max-width: 900px;
        }
        .page-main-title {
          font-weight: 300;
          margin-top: 1rem;
        }
        .directory-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.25rem;
          margin-bottom: 2rem;
        }
        .reset-all-btn {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-gold);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .advanced-filter-panel {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 4rem;
          background-color: var(--bg-secondary);
          padding: 2rem;
          min-width: 0;
        }
        @media (max-width: 768px) {
          .advanced-filter-panel {
            padding: 1.5rem;
          }
        }
        .search-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-bottom: 1px solid var(--text-primary);
          padding-bottom: 0.5rem;
          min-width: 0;
        }
        .search-icon {
          color: var(--text-muted);
        }
        .filter-input-text {
          background: none;
          border: none;
          outline: none;
          font-size: 1.1rem;
          font-family: var(--font-sans);
          font-weight: 400;
          color: var(--text-primary);
          width: 100%;
          min-width: 0;
          text-overflow: ellipsis;
          box-sizing: border-box;
        }
        .filters-matrix {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .filters-matrix {
            grid-template-columns: 1fr;
          }
        }
        .filter-select {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          padding: 0.75rem 1rem;
          font-size: 0.85rem;
          outline: none;
          color: var(--text-primary);
          cursor: pointer;
          width: 100%;
          box-sizing: border-box;
          text-overflow: ellipsis;
        }
        
        /* Grid Layout */
        .people-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
          width: 100%;
        }
        @media (max-width: 768px) {
          .people-grid {
            gap: 1.5rem;
          }
        }
        .person-card {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-light);
          transition: var(--transition-curve-prestige);
          width: calc(50% - 1.5rem);
          background-color: var(--bg-primary) ;
        }
        @media (max-width: 768px) {
          .person-card {
            width: 100%;
          }
        }
        
        /* Modal Styles */
        .person-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease;
        }
        .person-modal-content {
          background: var(--bg-primary);
          width: 60%;
          max-height: 70vh;
          border-radius: 4px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 768px) {
          .person-modal-content {
            width: 90%;
            max-height: 85vh;
          }
        }
        .modal-header {
          padding: 3rem 3rem 1.5rem 3rem;
          text-align: center;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .modal-header {
            padding: 2rem 2rem 1rem 2rem;
          }
        }
        .modal-name {
          font-weight: bold;
          font-size: 2.25rem;
          margin-bottom: 0.5rem;
          font-family: var(--font-sans);
          color: var(--text-primary);
          text-align: center;
        }
        @media (max-width: 768px) {
          .modal-name {
            font-size: 1.6rem;
          }
        }
        .modal-designation {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        @media (max-width: 768px) {
          .modal-designation {
            font-size: 0.95rem;
          }
        }
        .modal-location {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-bio {
          text-align: justify;
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-primary);
          padding: 0 3rem;
          overflow-y: auto;
          flex-grow: 1;
          min-height: 0;
        }
        @media (max-width: 768px) {
          .modal-bio {
            padding: 0 1.5rem;
            font-size: 0.95rem;
            line-height: 1.6;
          }
        }
        .modal-bio p {
          margin-bottom: 1rem;
        }
        .modal-bio p:last-child {
          margin-bottom: 0;
        }
        .modal-footer {
          padding: 1.5rem 3rem 3rem 3rem;
          text-align: center;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .modal-footer {
            padding: 1.5rem 2rem 2rem 2rem;
          }
        }
        .modal-close-link {
          background: none;
          border: none;
          color: var(--accent-gold);
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          text-decoration: underline;
          padding: 0.5rem 1rem;
          transition: color 0.2s;
        }
        .modal-close-link:hover {
          color: var(--text-primary);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .bio-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .show-more-btn {
          margin-top: 1rem;
          background: none;
          border: none;
          color: var(--accent-gold);
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          text-align: left;
          font-size: 0.85rem;
        }
        .show-more-btn:hover {
          text-decoration: underline;
        }
        .person-card:hover {
          border-color: var(--text-primary);
          transform: translateY(-4px);
        }
        .linkedin-link {
          color: #0077b5;
          transition: opacity 0.2s ease;
          display: inline-flex;
          padding: 0.25rem;
        }
        .linkedin-link:hover {
          opacity: 0.8;
        }
        .person-meta {
          padding: 1.5rem;
        }
        .person-meta h3 {
          font-size: 1.25rem;
          font-family: var(--font-sans);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .person-title {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }
        .meta-tag {
          font-size: 0.75rem;
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        /* Skeletons */
        .skeleton-card {
          border: 1px solid var(--border-light);
          height: 380px;
          display: flex;
          flex-direction: column;
        }
        .skeleton-image {
          display: none;
        }
        .skeleton-meta {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: auto;
        }
        .skeleton-line {
          height: 12px;
          border-radius: 2px;
        }
        .line-title { width: 60%; }
        .line-sub { width: 40%; }
 
        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          padding: 4rem 0;
        }
        .no-results p {
          font-size: 1.8rem;
        }
      `}</style>
    </div>
  );
}

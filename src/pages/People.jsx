import React, { useState, useMemo, useEffect } from "react";
import { MapPin, Search, RefreshCw } from "lucide-react";
import LinkedinIcon from "../components/LinkedinIcon";
import { people, offices, practices } from "../data/mockDb";

export default function People() {
  const [selectedOffice, setSelectedOffice] = useState("all");
  const [selectedPractice, setSelectedPractice] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all"); // 'all' | 'leader' | 'expert'
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  // Trigger simulated skeleton loading on filter changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 350);
    return () => clearTimeout(timer);
  }, [selectedOffice, selectedPractice, selectedLevel, searchQuery]);

  const filteredPeople = useMemo(() => {
    return people.filter((person) => {
      const officeMatch = selectedOffice === "all" || person.officeId === selectedOffice;
      const practiceMatch = selectedPractice === "all" || person.practices.includes(selectedPractice);
      const levelMatch = selectedLevel === "all" || person.roleType === selectedLevel;

      const searchMatch = searchQuery === "" ||
        person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.bio.toLowerCase().includes(searchQuery.toLowerCase());

      return officeMatch && practiceMatch && levelMatch && searchMatch;
    });
  }, [selectedOffice, selectedPractice, selectedLevel, searchQuery]);

  const handleReset = () => {
    setSelectedOffice("all");
    setSelectedPractice("all");
    setSelectedLevel("all");
    setSearchQuery("");
  };

  return (
    <div className="people-page container section-padding fade-in-up">
      {/* Page Header */}
      <div className="page-header">
        <span className="title-small accent-gold">Our Professionals</span>
        <h1 className="title-display page-main-title">Aligning enterprise strategy with sector specialists.</h1>
      </div>

      {/* Directory Controls and Reset */}
      <div className="directory-controls hairline-bottom">
        <div style={{ flexGrow: 1 }} />
        <button className="reset-all-btn" onClick={handleReset}>
          <RefreshCw size={14} /> Reset Filters
        </button>
      </div>

      {/* Advanced Filtering Panel */}
      <div className="advanced-filter-panel">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search by name, biography keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="filter-input-text"
          />
        </div>

        <div className="filters-matrix">
          <select value={selectedOffice} onChange={(e) => setSelectedOffice(e.target.value)} className="filter-select">
            <option value="all">All Locations</option>
            {offices.map(o => <option key={o.id} value={o.id}>{o.city}</option>)}
          </select>

          <select value={selectedPractice} onChange={(e) => setSelectedPractice(e.target.value)} className="filter-select">
            <option value="all">All Services</option>
            {practices.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>

          <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)} className="filter-select">
            <option value="all">All Levels</option>
            <option value="leader">Managing Partners</option>
            <option value="expert">Sector Specialists</option>
          </select>
        </div>
      </div>

      {/* Directory Content Area */}
      {isLoading ? (
        /* SKELETON SCREEN LOADERS STATE */
        <div className="people-grid">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="skeleton-card">
              <div className="skeleton-image skeleton-shimmer"></div>
              <div className="skeleton-meta">
                <div className="skeleton-line skeleton-shimmer line-title"></div>
                <div className="skeleton-line skeleton-shimmer line-sub"></div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredPeople.length > 0 ? (
        /* GRID VIEW */
        <div className="people-grid">
          {filteredPeople.map((person, index) => {
            const office = offices.find(o => o.id === person.officeId);
            
            let isShrunk = false;
            const expandedIndex = filteredPeople.findIndex(p => p.id === expandedId);
            if (expandedIndex !== -1 && expandedId !== person.id) {
               if (expandedIndex % 2 === 0 && index === expandedIndex + 1) isShrunk = true;
               if (expandedIndex % 2 !== 0 && index === expandedIndex - 1) isShrunk = true;
            }

            return (
              <div 
                key={person.id} 
                className={`person-card ${expandedId === person.id ? "expanded" : ""} ${isShrunk ? "shrunk" : ""}`}
                onClick={() => { if (isShrunk) setExpandedId(person.id); }}
              >
                
                {expandedId === person.id ? (
                  <>
                    <div className="person-card-left">
                      <div className="person-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <h3 style={{ fontWeight: "bold" }}>{person.name}</h3>
                          <p className="person-title">{person.title}</p>
                        </div>
                        {person.linkedin && (
                          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link" aria-label={`LinkedIn profile for ${person.name}`}>
                            <LinkedinIcon size={20} />
                          </a>
                        )}
                      </div>
                      {office && <span className="meta-tag"><MapPin size={12} /> {office.city}</span>}
                      <div style={{ flexGrow: 1 }}></div>
                      <button className="show-more-btn" onClick={() => setExpandedId(null)}>Show less</button>
                    </div>
                    <div className="person-card-right">
                      <div className="person-bio-container">
                        {person.bio.split('\n').map((paragraph, idx) => (
                          <p key={idx} className="person-bio-paragraph" style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "0.5rem", lineHeight: "1.5" }}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`person-meta shrunk-meta ${isShrunk ? 'desktop-only-flex' : 'hidden'}`}>
                      <h3 style={{ fontWeight: "bold", margin: 0, fontSize: "1.1rem" }}>{person.name}</h3>
                      <p className="person-title" style={{ marginTop: "0.5rem", fontSize: "0.75rem", opacity: 0.7 }}>Click to expand</p>
                    </div>
                    
                    <div className={`person-meta ${isShrunk ? 'mobile-only-flex' : ''}`} style={{ display: isShrunk ? "none" : "flex", flexDirection: "column", height: "100%", padding: "1.5rem" }}>
                      <div className="person-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <h3 style={{ fontWeight: "bold" }}>{person.name}</h3>
                          <p className="person-title">{person.title}</p>
                        </div>
                        {person.linkedin && (
                          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link" aria-label={`LinkedIn profile for ${person.name}`}>
                            <LinkedinIcon size={20} />
                          </a>
                        )}
                      </div>
                      {office && <span className="meta-tag"><MapPin size={12} /> {office.city}</span>}
                      <div className="person-bio-container bio-clamp" style={{ marginTop: "1rem" }}>
                        <p className="person-bio-paragraph" style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0, lineHeight: "1.5" }}>
                          {person.bio}
                        </p>
                      </div>
                      <div style={{ marginTop: "auto" }}>
                        <button className="show-more-btn" onClick={(e) => { e.stopPropagation(); setExpandedId(person.id); }}>Show more</button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* NO RESULTS STATE */
        <div className="no-results">
          <p className="serif-display">No consultants found matching your filters.</p>
          <button className="btn-secondary" onClick={handleReset}>Reset All Filters</button>
        </div>
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
        .person-card {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-light);
          transition: var(--transition-curve-prestige);
          width: calc(50% - 1.5rem);
          background-color: var(--bg-primary) ;
        }
        .person-card.expanded {
          flex-direction: row;
          width: calc(75% - 1.5rem);
        }
        .hidden { display: none !important; }
        .desktop-only-flex { display: flex; }
        .person-card.shrunk {
          width: calc(25% - 1.5rem);
          cursor: pointer;
        }
        .shrunk-meta {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 1.5rem;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        @media (max-width: 768px) {
          .person-card, .person-card.expanded, .person-card.shrunk {
            width: 100%;
          }
          .person-card.expanded {
            flex-direction: column;
          }
          .desktop-only-flex {
            display: none !important;
          }
          .mobile-only-flex {
            display: flex !important;
          }
          .person-card.shrunk {
             cursor: default;
          }
        }
        .person-card-left {
          flex: 1;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .person-card-right {
          flex: 1;
          padding: 1.5rem;
          border-left: 1px solid var(--border-light);
          overflow-y: auto;
          max-height: 350px;
        }
        @media (max-width: 768px) {
          .person-card-right {
            border-left: none;
            border-top: 1px solid var(--border-light);
            max-height: 250px;
          }
        }
        @media (max-width: 768px) {
          .person-card-right {
            border-left: none;
            border-top: 1px solid var(--border-light);
          }
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

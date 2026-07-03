import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Search, RefreshCw } from "lucide-react";
import { people, offices, practices } from "../data/mockDb";

export default function People() {
  const [selectedOffice, setSelectedOffice] = useState("all");
  const [selectedPractice, setSelectedPractice] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all"); // 'all' | 'leader' | 'expert'
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
        <h1 className="title-medium page-main-title">Aligning enterprise strategy with sector specialists.</h1>
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
          {filteredPeople.map((person) => {
            const office = offices.find(o => o.id === person.officeId);
            return (
              <Link key={person.id} to={`/people/${person.id}`} className="person-card">
                <div className="person-image-wrapper">
                  <img src={person.image} alt={person.name} className="person-image" />
                </div>
                <div className="person-meta">
                  <h3>{person.name}</h3>
                  <p className="person-title">{person.title}</p>
                  {office && <span className="meta-tag"><MapPin size={12} /> {office.city}</span>}
                </div>
              </Link>
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
        }
        .search-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-bottom: 1px solid var(--text-primary);
          padding-bottom: 0.5rem;
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
        }
        
        /* Grid Layout */
        .people-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 3rem;
        }
        .person-card {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-light);
          transition: var(--transition-curve-prestige);
        }
        .person-card:hover {
          border-color: var(--text-primary);
          transform: translateY(-4px);
        }
        .person-image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 125%;
          overflow: hidden;
          background-color: var(--bg-secondary);
        }
        .person-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-curve-prestige);
        }
        .person-card:hover .person-image {
          transform: scale(1.05);
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
          height: 280px;
          width: 100%;
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

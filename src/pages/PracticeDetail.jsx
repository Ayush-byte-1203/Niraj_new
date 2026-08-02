import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { practices, people } from "../data/mockDb";

export default function PracticeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const practice = practices.find(p => p.id === id);

  if (!practice) {
    return (
      <div className="container section-padding text-center">
        <h2>Practice Focus Area Not Found</h2>
        <button className="btn-primary" onClick={() => navigate("/services")}>Back to Services</button>
      </div>
    );
  }

  // Find lead partner
  const leadPartner = people.find(p => p.id === practice.leadPartnerId);
  // Find other people associated
  const associatedPeople = people.filter(p => p.practices.includes(practice.id) && p.id !== practice.leadPartnerId);

  return (
    <div className="practice-detail-page container section-padding fade-in-up">
      <button onClick={() => navigate("/services")} className="back-nav-btn">
        <ArrowLeft size={16} /> All Services
      </button>

      {/* 1. Premium Hero */}
      <div className="practice-header hairline-bottom">
        <span className="title-small accent-gold">Service Capability</span>
        <h1 className="serif-display practice-main-title">{practice.name}</h1>
      </div>

      <div className="practice-grid">
        <div className="practice-main-content">
          {/* 2. Overview & Solution */}
          <p className="lead-text">{practice.description}</p>

          <div className="detailed-body">
            <h3>Capability Overview</h3>
            <p>{practice.details}</p>
          </div>

          {/* Detailed Includes List */}
          {practice.includes && practice.includes.length > 0 && (
            <div className="detailed-body mt-space" style={{ marginTop: "3rem" }}>
              <h3>Key Services & Scope</h3>
              <ul className="practice-includes-list" style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {practice.includes.map((inc, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", fontSize: "1.05rem", lineHeight: "1.7", color: "var(--text-secondary)" }}>
                    <CheckCircle size={16} className="gold-icon" style={{ marginTop: "0.25rem", color: "var(--accent-gold)", flexShrink: 0 }} />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Sidebar for People / Contact */}
        <div className="practice-sidebar">
          {leadPartner && (
            <div className="sidebar-group lead-partner-card">
              <h3 className="sidebar-title">Practice Lead</h3>
              <div className="partner-profile-link">
                <div className="partner-avatar">
                  <img src={leadPartner.image} alt={leadPartner.name} />
                </div>
                <div className="partner-meta">
                  <h4>{leadPartner.name}</h4>
                  <p>{leadPartner.title}</p>
                  <Link to={`/people/${leadPartner.id}`} className="tag-link">View Profile →</Link>
                </div>
              </div>
            </div>
          )}

          {associatedPeople.length > 0 && (
            <div className="sidebar-group">
              <h3 className="sidebar-title">Specialist Team</h3>
              <div className="specialists-list">
                {associatedPeople.map(person => (
                  <Link key={person.id} to={`/people/${person.id}`} className="specialist-item">
                    <strong>{person.name}</strong>
                    <span>{person.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .practice-detail-page {
          padding-top: calc(var(--header-height) + 3rem);
          text-align: left;
        }
        .back-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          transition: var(--transition-duration-fast) ease;
        }
        .back-nav-btn:hover {
          color: var(--text-primary);
        }
        .practice-header {
          margin-bottom: 3.5rem;
        }
        .practice-main-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-top: 0.5rem;
        }
        .practice-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 5rem;
        }
        @media (max-width: 1080px) {
          .practice-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
        .lead-text {
          font-size: 1.35rem;
          line-height: 1.7;
          color: var(--text-primary);
          margin-bottom: 3rem;
          font-family: var(--font-sans);
          font-weight: 400;
        }
        .detailed-body h3 {
          font-size: 1.15rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .detailed-body p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }
        .padding-v {
          padding: 3rem 0;
        }
        .section-title {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.5rem;
        }
        .challenges-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 464px) {
          .challenges-grid {
            grid-template-columns: 1fr;
          }
        }
        .challenge-card {
          border-left: 2px solid var(--accent-gold);
          padding-left: 1.5rem;
        }
        .challenge-card h4 {
          font-size: 1.2rem;
          font-family: var(--font-sans);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .challenge-card p {
          font-size: 0.9rem;
        }
        .methodology-flow {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .method-step {
          display: grid;
          grid-template-columns: 0.5fr 5.5fr;
          gap: 1.5rem;
        }
        .step-num {
          font-size: 2.2rem;
          color: var(--accent-gold);
          line-height: 1;
        }
        .step-details h4 {
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        .step-details p {
          font-size: 0.95rem;
        }
        .metrics-box-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .metric-box-card {
          border: 1px solid var(--border-light);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--bg-secondary);
        }
        .metric-val {
          font-size: 2.5rem;
          line-height: 1;
          color: var(--text-primary);
        }
        .metric-lbl {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .practice-faqs-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .practice-faq-row {
          border: 1px solid var(--border-light);
        }
        .faq-toggle-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text-primary);
          text-align: left;
        }
        .faq-answer-body {
          padding: 0 1.5rem 1.5rem 1.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .insights-block {
          margin-top: 2rem;
        }
        .insights-mini-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .insight-mini-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1.5rem;
        }
        .insight-mini-card h4 {
          font-size: 1.25rem;
          font-family: var(--font-sans);
          font-weight: 600;
        }
        .insight-mini-card p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .mini-date {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .practice-sidebar {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .sidebar-group {
          border: 1px solid var(--border-light);
          padding: 2.5rem;
          background-color: var(--bg-secondary);
        }
        .sidebar-title {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .partner-profile-link {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .partner-avatar {
          position: relative;
          width: 100%;
          padding-top: 100%;
          overflow: hidden;
        }
        .partner-avatar img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .partner-meta h4 {
          font-size: 1.25rem;
          font-family: var(--font-sans);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .partner-meta p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        .tag-link {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-gold);
        }
        .specialists-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .specialist-item {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          transition: var(--transition-duration-fast) ease;
        }
        .specialist-item:hover {
          color: var(--accent-gold);
        }
        .specialist-item strong {
          font-size: 0.95rem;
        }
        .specialist-item span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}

import React, { useState } from "react";
import { aboutOverview, visionMission, leadershipMessage, corporateValues } from "../data/mockDb";
import { Shield, Target, Quote } from "lucide-react";

export default function About() {
  const [activeSection, setActiveSection] = useState("overview"); // 'overview' | 'values' | 'journey' | 'recognition'

  return (
    <div className="about-page container section-padding fade-in-up">
      <div className="page-header">
        <span className="title-small accent-color">About Our Firm</span>
        <h1 className="title-medium page-main-title">A legacy of trust, built on strategic integrity.</h1>
      </div>

      {/* Dynamic Content Panel */}
      <div className="about-content-panel">

        {/* Overview Section */}
        <div className="tab-pane fade-in-up">
          <div className="overview-grid">
            <div className="overview-text">
              <h2 className="serif-display panel-headline">{aboutOverview.headline}</h2>
              <p className="about-body-para">{aboutOverview.body1}</p>
              <p className="about-body-para">{aboutOverview.body2}</p>
            </div>
            <div className="leadership-message-box">
              <Quote className="quote-mark" size={32} />
              <blockquote className="message-quote">
                "{leadershipMessage.quote}"
              </blockquote>
              <div className="quote-author-details">
                <strong>{leadershipMessage.author}</strong>
                <span>{leadershipMessage.designation}</span>
              </div>
              <p className="message-body">{leadershipMessage.body}</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="tab-pane fade-in-up" style={{ marginTop: '6rem' }}>
          <div className="values-section-wrapper">
            <div className="vision-mission-row">
              <div className="card-item">
                <h3><Target size={20} className="icon-gold" /> Our Vision</h3>
                <p>{visionMission.vision}</p>
              </div>
              <div className="card-item">
                <h3><Shield size={20} className="icon-gold" /> Our Mission</h3>
                <p>{visionMission.mission}</p>
              </div>
            </div>
            <div className="values-list-col" style={{ marginTop: '4rem' }}>
              <h3 className="section-subtitle">Core Guiding Principles</h3>
              <div className="principles-grid">
                {corporateValues.map((val, idx) => (
                  <div key={idx} className="principle-card">
                    <span className="principle-number serif-display">0{idx + 1}</span>
                    <h4>{val.title}</h4>
                    <p>{val.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>



      </div>

      <style>{`
        .about-page {
          padding-top: calc(var(--header-height) + 4rem);
          text-align: left;
        }
        .page-header {
          margin-bottom: 4rem;
          max-width: 800px;
        }
        .page-main-title {
          font-weight: 300;
          margin-top: 1rem;
        }
        .about-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-light);
          gap: 2rem;
          margin-bottom: 4rem;
          overflow-x: auto;
        }
        .about-tab-btn {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding-bottom: 1rem;
          position: relative;
        }
        .about-tab-btn.active {
          color: var(--text-primary);
        }
        .about-tab-btn.active::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--text-primary);
        }
        .overview-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
        }
        @media (max-width: 991px) {
          .overview-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
        .panel-headline {
          font-size: 2.2rem;
          line-height: 1.25;
          margin-bottom: 2rem;
        }
        .about-body-para {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }
        .leadership-message-box {
          border: 1px solid var(--border-light);
          padding: 3rem;
          background-color: var(--bg-secondary);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .quote-mark {
          color: var(--accent-gold);
        }
        .message-quote {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-style: italic;
          line-height: 1.6;
          color: var(--text-primary);
        }
        .quote-author-details {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .quote-author-details strong {
          font-size: 1rem;
          font-weight: 600;
        }
        .quote-author-details span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .message-body {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .vision-mission-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }
        @media (max-width: 768px) {
          .vision-mission-row {
            grid-template-columns: 1fr;
          }
        }
        .card-item {
          border: 1px solid var(--border-light);
          padding: 2.5rem;
          background-color: var(--bg-secondary);
        }
        .card-item h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .card-item p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .icon-gold {
          color: var(--accent-gold);
        }
        .section-subtitle {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.5rem;
        }
        .principles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        @media (max-width: 576px) {
          .principles-grid {
            grid-template-columns: 1fr;
          }
        }
        .principle-card {
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1.5rem;
        }
        .principle-number {
          font-size: 2.2rem;
          color: var(--accent-gold);
          display: block;
          margin-bottom: 0.5rem;
        }
        .principle-card h4 {
          font-size: 1.15rem;
          font-family: var(--font-sans);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .principle-card p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }


      `}</style>
    </div>
  );
}

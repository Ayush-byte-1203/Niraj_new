import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck, Compass, BarChart, ArrowRight, HelpCircle } from "lucide-react";
import { practices, people, generalSecretarialPractices } from "../data/mockDb";

export default function ServicesList() {
  const steps = [
    { year: "Phase 1", title: "Diagnostic Assessment", desc: "We review operational compliance, term sheets, and covenant bindings." },
    { year: "Phase 2", title: "Strategic Structuring", desc: "Our team designs custom transaction vehicles and regulatory alignment frameworks." },
    { year: "Phase 3", title: "Clearance & Execution", desc: "We coordinate with administrative agencies to close the transaction smoothly." }
  ];

  return (
    <div className="services-landing-page container section-padding fade-in-up">
      {/* 1. Hero Banner */}
      <section className="services-hero-banner hairline-bottom">
        <span className="title-small accent-gold">Our Capabilities</span>
        <h1 className="title-display">Strategic Advisory for <span className="serif-display italic">Enterprise Transactions</span>.</h1>
        <p className="body-large text-muted mt-space max-width-para">
          We combine structural foresight with regulatory precision to guide organizations through landmark debt structuring, joint ventures, and market entries.
        </p>
      </section>

      {/* Corporate Secretarial Practice Overview */}
      {generalSecretarialPractices && generalSecretarialPractices.length > 0 && (
        <section className="corporate-overview-section padding-v hairline-bottom">
          <h3 className="section-subtitle">Company Law & Secretarial Practice</h3>
          <div className="corporate-overview-card">
            <ul className="overview-points-grid">
              {generalSecretarialPractices.map((point, idx) => (
                <li key={idx} className="overview-point-item">
                  <ShieldCheck className="check-icon" size={16} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 2. Interactive Service Grid */}
      <section className="services-directory-section padding-v">
        <h3 className="section-subtitle">Services Portfolio</h3>
        <div className="services-cards-grid">
          {practices.map((p, idx) => {
            const lead = people.find(person => person.id === p.leadPartnerId);
            return (
              <div key={p.id} className="service-landing-card editorial-card">
                <span className="card-index serif-display">0{idx + 1}</span>
                <h3>{p.name}</h3>
                <p className="text-muted card-desc">{p.shortDescription}</p>
                <div className="card-relation-meta">
                  {lead && <span className="lead-tag">Practice Lead: {lead.name}</span>}
                </div>
                <Link to={`/services/${p.id}`} className="service-card-btn">
                  Practice Details <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Key Benefits / Featured Expertise */}
      <section className="benefits-section padding-v hairline-bottom">
        <div className="benefits-split-grid">
          <div className="benefits-title-box">
            <span className="title-small accent-gold">Enterprise Focus</span>
            <h2 className="title-medium">Designed to prevent transaction friction.</h2>
          </div>
          <div className="benefits-list-box">
            <div className="benefit-row">
              <Compass size={24} className="gold-icon" />
              <div>
                <h4>Regulatory Foresight</h4>
                <p className="text-muted">We map cross-border FDI requirements before capital is committed.</p>
              </div>
            </div>
            <div className="benefit-row">
              <BarChart size={24} className="gold-icon" />
              <div>
                <h4>Capital Efficiency</h4>
                <p className="text-muted">Our Restructuring team optimizes covenant triggers to preserve corporate liquidity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Overview Timeline */}
      <section className="process-timeline-section padding-v">
        <h3 className="section-subtitle">Engagement Methodology</h3>
        <div className="process-timeline-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step-node">
              <span className="step-phase serif-display">{step.year}</span>
              <h4>{step.title}</h4>
              <p className="text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA & Contact Gateway */}
      <section className="services-cta-banner">
        <div className="cta-box-layout">
          <h3 className="title-medium">Need bespoke advisory on an upcoming transaction?</h3>
          <p className="text-muted">Our regional coordinators are ready to align specialist teams with your goals.</p>
          <Link to="/contact" className="btn-primary mt-space">Consult Strategy Leads</Link>
        </div>
      </section>

      <style>{`
        .services-landing-page {
          padding-top: calc(var(--header-height) + 4rem);
          text-align: left;
        }
        .services-hero-banner {
          padding-bottom: var(--space-lg);
          margin-bottom: var(--space-lg);
        }
        .max-width-para {
          max-width: 750px;
        }
        .padding-v {
          padding: 4rem 0;
        }
        .section-subtitle {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.5rem;
        }
        .services-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }
        @media (max-width: 768px) {
          .services-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        .service-landing-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-height: 420px;
          height: 100%;
          background-color: var(--bg-primary);
          padding: 2.5rem;
        }
        .card-index {
          font-size: 2.2rem;
          color: var(--accent-gold);
          margin-bottom: 1.25rem;
        }
        .service-landing-card h3 {
          font-size: 1.4rem;
          font-family: var(--font-sans);
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 1rem;
          min-height: 3.8rem;
        }
        .card-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: var(--space-md);
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-relation-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          min-height: 1.2rem;
        }
        .service-card-btn {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-gold);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: auto;
        }
        .benefits-split-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
        }
        @media (max-width: 991px) {
          .benefits-split-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        .benefits-title-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .benefits-list-box {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .benefit-row {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }
        .benefit-row h4 {
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        .benefit-row p {
          font-size: 0.95rem;
        }
        .process-timeline-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }
        @media (max-width: 991px) {
          .process-timeline-grid {
            grid-template-columns: 1fr;
          }
        }
        .process-step-node {
          border-left: 1px solid var(--border-light);
          padding-left: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .step-phase {
          font-size: 1.75rem;
          color: var(--accent-gold);
        }
        .process-step-node h4 {
          font-size: 1.25rem;
          font-weight: 500;
        }
        .process-step-node p {
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .services-cta-banner {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 4rem;
          margin-top: 4rem;
        }
        .cta-box-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }
        .corporate-overview-card {
          border: 1px solid var(--border-light);
          padding: 2.5rem;
          background-color: var(--bg-secondary);
        }
        .overview-points-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem 3rem;
          list-style: none;
          padding: 0;
        }
        @media (max-width: 991px) {
          .overview-points-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        .overview-point-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        .overview-point-item .check-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
      `}</style>
    </div>
  );
}

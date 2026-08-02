import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck, Compass, BarChart, ArrowRight, HelpCircle } from "lucide-react";
import { practices, people } from "../data/mockDb";

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

      {/* 2. Interactive Service Grid */}
      <section className="services-directory-section" style={{ paddingTop: "2.5rem", paddingBottom: "4rem" }}>
        <div className="section-header-styled" style={{ marginBottom: "2.5rem" }}>
          <span className="title-small accent-gold">Our Expertise</span>
          <h2 className="title-medium">Practice Areas</h2>
        </div>
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
      <section className="benefits-section padding-v">
        <div className="benefits-box-card">
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
        </div>
      </section>

      {/* 4. Process Overview Timeline */}
      <section className="process-timeline-section" style={{ padding: "4rem 0" }}>
        <div className="section-header-styled" style={{ marginBottom: "2.5rem" }}>
          <span className="title-small accent-gold">Engagement Methodology</span>
          <h2 className="title-medium">Our Structured Approach</h2>
        </div>
        <div className="process-timeline-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step-card editorial-card">
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
          margin-bottom: 2.5rem;
        }
        .services-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        @media (max-width: 1024px) {
          .services-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
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
          min-height: 400px;
          height: 100%;
          background-color: var(--bg-primary) !important;
          padding: 2.5rem;
        }
        .card-index {
          font-size: 2.2rem;
          color: var(--accent-gold);
          margin-bottom: 1.25rem;
        }
        .service-landing-card h3 {
          font-size: 1.35rem;
          font-family: var(--font-sans);
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 1rem;
          min-height: 3.6rem;
        }
        .card-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: var(--space-md);
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 4;
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
        .benefits-box-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 3.5rem;
          border-radius: 4px;
          width: 100%;
        }
        @media (max-width: 768px) {
          .benefits-box-card {
            padding: 2rem;
          }
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
        .process-step-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          background-color: var(--bg-primary) !important;
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 2.5rem;
          transition: var(--transition-curve-prestige);
        }
        .process-step-card:hover {
          border-color: var(--accent-gold);
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(31, 31, 31, 0.06);
        }
        .process-step-card .step-phase {
          font-size: 1.75rem;
          color: var(--accent-gold);
          font-weight: 500;
        }
        .process-step-card h4 {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .process-step-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-muted);
        }
        .services-cta-banner {
          background-color: var(--bg-card) !important;
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 4.5rem 3rem;
          margin-top: 4rem;
          box-shadow: 0 4px 24px rgba(31, 31, 31, 0.04);
        }
        .cta-box-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

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
        <h1 className="title-display" style={{ marginTop: "1rem" }}>Strategic Advisory for <span className="serif-display italic">Enterprise Transactions</span>.</h1>
        <div className="max-width-para" style={{ marginTop: "2rem" }}>
          <p className="text-primary" style={{ marginBottom: "1.25rem", fontSize: "1.1rem", lineHeight: "1.7", textAlign: "justify", textJustify: "inter-word", hyphens: "auto", WebkitHyphens: "auto" }}>
            We provide comprehensive corporate and legal services designed to help businesses navigate complex regulatory requirements, maintain statutory compliance, and achieve their corporate objectives.
          </p>
          <p className="text-muted" style={{ fontSize: "1.05rem", lineHeight: "1.7", textAlign: "justify", textJustify: "inter-word", hyphens: "auto", WebkitHyphens: "auto" }}>
            Our firm represents and advises clients before various statutory, regulatory and quasi-judicial authorities like Securities Exchange Board of India (SEBI), Securities Appellate Tribunal (SAT), Stock Exchanges, Regional Director (RD), Registrar of Companies (ROC), Ministry of Corporate Affairs -Delhi (HQ), Reserve Bank of India, National Company Law Tribunal / Appellate Tribunal (NCLT and NCLAT) and many more.
          </p>
        </div>
      </section>

      {/* 1.5. Corporate Overview & Companies Act */}
      <section className="corporate-overview-section" style={{ paddingBottom: "4rem" }}>

        <div className="companies-act-seamless">
          <div style={{ marginBottom: "4rem" }}>
            <span className="title-small accent-gold" style={{ display: "block", textAlign: "left" }}>Core Expertise</span>
            <h2 className="title-display" style={{ fontWeight: "500", lineHeight: "1.1", marginTop: "1rem", textAlign: "left" }}>
              Companies Act, 2013 & <span style={{ fontStyle: "italic" }}>Rules Framed Thereunder</span>
            </h2>
            <div className="max-width-para" style={{ marginTop: "1.5rem" }}>
              <p className="text-muted" style={{ margin: 0, fontSize: "1.1rem", lineHeight: "1.7", textAlign: "justify", textJustify: "inter-word", hyphens: "auto", WebkitHyphens: "auto" }}>
              We provide comprehensive advisory and compliance services under the Companies Act, 2013 assisting companies in meeting their statutory obligations and maintaining effective corporate governance. Our services are designed to support businesses throughout their corporate lifecycle, from incorporation and routine compliances to significant corporate actions and regulatory matters. It includes:
              </p>
            </div>
          </div>

          <div className="services-bullet-list max-width-para" style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
            <ul>
              <li>Promotion, formation, and incorporation of companies including Section 8 (Not for Profit Organization/NGO), Producer Companies, Chapter XXI Companies (Conversion into a Company) and matter relating therewith including choice of and type of companies, drafting of Memorandum and Articles of Associations and other documents. This includes conversion of partnership firm into company/ LLP and vice a versa.</li>
              <li>Annual filing including XBRL.</li>
              <li>Issuing status report on statutory/ legal compliance and Issuing Secretarial Compliance Report/ Due Diligence Report wherever it is necessary.</li>
              <li>Appearing as an authorized representative before the Central Government, Regional Director, Registrar of Companies, SEBI, SAT, NCLT and NCLAT on various matters on Corporate Law Related issues.</li>
              <li>Advising and attending on conducting the meeting of the Board, Shareholders and Court convened meeting and preparation of documents such as notice, explanatory statements, minutes, Board’s Report, Corporate Governance Report, Business Responsibility and Sustainability Report, etc.</li>
              <li>Helping company in finalization of financial statements including Balance Sheets, Notes thereon.</li>
              <li>Advising and drafting documents on Buy Back of Securities for Listed and Unlisted Companies.</li>
              <li>Providing guidance on restructuring of company, which includes reduction of capital, merger, amalgamation, demerger and also to carry due diligence, etc. and to draft Scheme of Compromise and to provide incidental services to the company.</li>
              <li>Providing opinion on various corporate laws.</li>
            </ul>
            <ul>
              <li>Advising on maintenance of Secretarial Records and Statutory Books and Registers.</li>
              <li>Advising on timely compliance of statutory requirements under Corporate Laws by the companies (Private and Public) to avoid penal action and prosecution to the Companies and its Directors.</li>
              <li>Pre-certification of documents, returns etc. to be submitted with the office of the Registrar of Companies, Regional Director, Ministry of Corporate Affairs etc.</li>
              <li>Providing necessary guidance for transfer, transmission, transposition, dematerialization, re-materialization of shares and other securities etc. including action to be taken, correspondence with member’s and drafting affidavit, indemnity bond including necessary communication with Depositories and Depository Participants (DP).</li>
              <li>Shifting of Registered Office of the Company from one State to another, Change of name of the company, Conversion of status of the company from private to public and vis-vis and to LLP. Drafting of various documents, petitions, affidavits, advertisements, letters, resolution, forms etc. for the same.</li>
              <li>Providing guidance for Striking off or winding off the company and drafting of necessary resolutions, documents, forms etc.</li>
              <li>To act as scrutinizer in case of Postal Ballot, Court Conveyed Meeting, Voting through Ballot / E Voting etc.</li>
              <li>Carrying Due Diligence of the company to make sure that the company has complied with the requirements of corporate laws and regulations made thereunder.</li>
              <li>Providing guidance on various issues relating to Corporate Social Responsibility (CSR) including drafting of Policy implement and monitor a cohesive CSR policy that is not only compliant with section 135 of the Act but also need-based, strategic, integrated with the value chains, iterative and geared towards business responsibility reporting. Based on our experience and research, we can offer significant value to our clients (at different stages of the CSR lifecycle).</li>
            </ul>
          </div>

          <div className="csr-closing-box mx-auto" style={{ maxWidth: "1000px", marginTop: "3rem", padding: "2rem", borderLeft: "2px solid var(--accent-gold)", backgroundColor: "var(--bg-card)", borderRadius: "0 16px 16px 0", boxShadow: "0 12px 32px rgba(31, 31, 31, 0.04)" }}>
            <p className="text-muted" style={{ fontSize: "1.05rem", margin: 0, lineHeight: "1.7", textAlign: "justify" }}>
              We have worked with a good number of companies and have offered comprehensive and customizable services such as guidance notes along with enlightenment of the concept of CSR, its applicability, framing of CSR Policy, annual Action Plan and its implementation for the financial year to help you comply with the provisions of CSR under the Companies Act, 2013.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Service Grid */}
      <section className="services-directory-section" style={{ paddingTop: "2.5rem", paddingBottom: "4rem" }}>
        <div className="section-header-styled" style={{ marginBottom: "2.5rem" }}>
          <span className="title-small accent-gold">Our Expertise</span>
          <h2 className="title-display" style={{ marginTop: "1rem" }}>Practice Areas</h2>
        </div>
        <div className="services-cards-grid">
          {practices.map((p, idx) => {
            return (
              <div key={p.id} className="service-landing-card editorial-card" style={{ display: "flex", flexDirection: "column" }}>
                <span className="card-index serif-display">0{idx + 1}</span>
                <h3>{p.name}</h3>
                <p className="text-muted card-desc">{p.shortDescription}</p>
                <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
                  <Link to={`/services/${p.id}`} className="show-more-link" style={{ display: "inline-flex", alignItems: "center", color: "var(--accent-gold)", fontWeight: "500", textDecoration: "none", fontSize: "0.95rem" }}>
                    Show more <span style={{ marginLeft: "0.5rem", fontSize: "1.2rem", transition: "transform 0.3s ease" }}>→</span>
                  </Link>
                </div>
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
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .max-width-para {
          max-width: 850px;
          align-self: center;
          margin: 0 auto;
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
        @media (max-width: 1080px) {
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
          background-color: var(--bg-card) !important;
          padding: 2.5rem;
          min-width: 0;
        }
        .card-index {
          font-size: clamp(1.5rem, 4vw, 2.2rem);
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
        .service-landing-card:hover .show-more-link span {
          transform: translateX(4px);
        }
        .card-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: var(--space-md);
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
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
        @media (max-width: 1080px) {
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
        @media (max-width: 1080px) {
          .process-timeline-grid {
            grid-template-columns: 1fr;
          }
        }
        .process-step-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          background-color: var(--bg-secondary) !important;
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 2.5rem;
          transition: var(--transition-curve-prestige);
          min-width: 0;
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
          background-color: var(--bg-secondary) !important;
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
        .companies-act-box {
          background-color: var(--bg-card);
          padding: 3.5rem;
          border-radius: 16px;
          border: 1px solid var(--border-light);
          box-shadow: 0 12px 32px rgba(31, 31, 31, 0.04);
        }
        @media (max-width: 768px) {
          .companies-act-box {
             padding: 2rem;
          }
        }
        .services-bullet-list ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .services-bullet-list li {
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.75rem;
          break-inside: avoid;
          page-break-inside: avoid;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
        }
        .services-bullet-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-gold);
          font-size: 1.5rem;
          line-height: 1;
          top: -2px;
        }
      `}</style>
    </div>
  );
}

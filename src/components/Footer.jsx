import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { offices } from "../data/mockDb";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="container footer-content-grid">
        <div className="footer-brand-section">
          <Link to="/" className="footer-logo">
            <span className="logo-brand">NIRAJ TRIVEDI</span>
            <span className="logo-sub">COMPANY SECRETARIES</span>
          </Link>
          <p className="footer-brief">
            Delivering bespoke strategic, regulatory, and corporate advisory solutions globally. Guided by excellence, built on trust.
          </p>
        </div>

        <div className="footer-offices-section offices-split-layout">
          <div className="office-group">
            <h4 className="footer-title">Our Offices</h4>
            {offices.filter(o => o.id === "vadodara").map((office) => (
              <div key={office.id} className="office-card">
                <h5>{office.city}</h5>
                <p>{office.address}</p>
                <p className="office-contact">T: {office.phone}</p>
                <p className="office-contact">E: {office.email}</p>
              </div>
            ))}
          </div>

          <div className="office-group">
            <h4 className="footer-title">Other Branches</h4>
            <div className="offices-grid-2">
              {offices.filter(o => o.id !== "vadodara").map((office) => (
                <div key={office.id} className="office-card">
                  <h5>{office.city}</h5>
                  <p>{office.address}</p>
                  <p className="office-contact">T: {office.phone}</p>
                  <p className="office-contact">E: {office.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-links-section">
          <h4 className="footer-title">Navigation</h4>
          <div className="links-col">
            <Link to="/services">Services</Link>
            <Link to="/people">Our People</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container bottom-bar-inner">
          <p className="copyright-text">
            © {new Date().getFullYear()} Niraj Trivedi. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#disclaimer" onClick={() => {
              localStorage.removeItem("disclaimerAccepted");
              window.location.reload();
            }}>Regulatory Disclaimer</a>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
          {/* <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
            Back to Top <ArrowUp size={14} />
          </button> */}
        </div>
      </div>

      <style>{`
        .footer-container {
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          border-top: 1px solid var(--border-light);
          padding-top: 6rem;
          margin-top: auto;
          transition: background-color 0.4s ease, color 0.4s ease;
        }
        .footer-content-grid {
          display: grid;
          grid-template-columns: 1.5fr 3fr 1fr;
          gap: 4rem;
          padding-bottom: 5rem;
        }
        @media (max-width: 991px) {
          .footer-content-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .footer-brand-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .footer-logo {
          display: flex;
          flex-direction: column;
        }
        .footer-logo .logo-brand {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          color: var(--text-primary);
        }
        .footer-logo .logo-sub {
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          color: var(--accent-gold);
        }
        .footer-brief {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 320px;
        }
        .footer-title {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-gold);
          margin-bottom: 2rem;
        }
        .offices-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .offices-split-layout {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2.5rem;
        }
        .offices-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }
        @media (max-width: 768px) {
          .offices-grid, .offices-grid-2, .offices-split-layout {
            grid-template-columns: 1fr;
          }
        }
        .office-card h5 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        .office-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        .office-card .office-contact {
          margin-bottom: 0.15rem;
        }
        .links-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .links-col a {
          font-size: 0.9rem;
          color: var(--text-muted);
          transition: var(--transition-duration-fast) ease;
        }
        .links-col a:hover {
          color: var(--accent-gold);
        }
        .footer-bottom-bar {
          border-top: 1px solid var(--border-light);
          padding: 2rem 0;
        }
        .bottom-bar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        @media (max-width: 768px) {
          .bottom-bar-inner {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
        .legal-links {
          display: flex;
          gap: 2rem;
        }
        .legal-links a {
          color: var(--text-muted);
          transition: var(--transition-duration-fast) ease;
        }
        .legal-links a:hover {
          color: var(--accent-gold);
        }
        .back-to-top-btn {
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          transition: var(--transition-duration-fast) ease;
        }
        .back-to-top-btn:hover {
          color: var(--accent-gold);
        }
      `}</style>
    </footer>
  );
}

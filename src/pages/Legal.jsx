import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Scale, Cookie, Eye, Layers } from "lucide-react";

export default function Legal() {
  const [activeTab, setActiveTab] = useState("privacy"); // 'privacy' | 'terms' | 'cookies' | 'accessibility' | 'sitemap'

  return (
    <div className="legal-page container section-padding fade-in-up">
      <div className="page-header">
        <span className="title-small accent-gold">Regulatory Compliance</span>
        <h1 className="title-medium page-main-title">Legal framework, privacy rules, & corporate terms.</h1>
      </div>

      {/* Tabs */}
      <div className="legal-tabs hairline-bottom">
        <button className={`legal-tab-btn ${activeTab === "privacy" ? "active" : ""}`} onClick={() => setActiveTab("privacy")}>
          <Eye size={14} /> Privacy Policy
        </button>
        <button className={`legal-tab-btn ${activeTab === "terms" ? "active" : ""}`} onClick={() => setActiveTab("terms")}>
          <Scale size={14} /> Terms of Use
        </button>
        <button className={`legal-tab-btn ${activeTab === "cookies" ? "active" : ""}`} onClick={() => setActiveTab("cookies")}>
          <Cookie size={14} /> Cookie Policy
        </button>
        <button className={`legal-tab-btn ${activeTab === "accessibility" ? "active" : ""}`} onClick={() => setActiveTab("accessibility")}>
          <ShieldCheck size={14} /> Accessibility Statement
        </button>
        <button className={`legal-tab-btn ${activeTab === "sitemap" ? "active" : ""}`} onClick={() => setActiveTab("sitemap")}>
          <Layers size={14} /> Website Sitemap
        </button>
      </div>

      {/* Panel Contents */}
      <div className="legal-content-panel">
        
        {/* Privacy Policy */}
        {activeTab === "privacy" && (
          <div className="legal-text-block fade-in-up">
            <h2 className="serif-display">Privacy Policy & Data Rights</h2>
            <span className="last-updated">Last Updated: June 15, 2026</span>
            <p>
              At Niraj Trivedi Company Secretaries, we respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we look after your personal data when you visit our website and tells you about your privacy rights.
            </p>
            <p>
              We only collect data necessary to manage consults and job submissions. We do not sell or lease user information to third-party databases.
            </p>
          </div>
        )}

        {/* Terms of Use */}
        {activeTab === "terms" && (
          <div className="legal-text-block fade-in-up">
            <h2 className="serif-display">Terms of Use Agreement</h2>
            <span className="last-updated">Last Updated: June 15, 2026</span>
            <p>
              By accessing this website, you acknowledge compliance with corporate terms. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>
            <p>
              Under no circumstances shall Niraj Trivedi Company Secretaries be liable for any damages arising out of the use or inability to use the materials on this website.
            </p>
          </div>
        )}

        {/* Cookies */}
        {activeTab === "cookies" && (
          <div className="legal-text-block fade-in-up">
            <h2 className="serif-display">Cookie Policy</h2>
            <span className="last-updated">Last Updated: June 15, 2026</span>
            <p>
              Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
            </p>
            <p>
              You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies.
            </p>
          </div>
        )}

        {/* Accessibility */}
        {activeTab === "accessibility" && (
          <div className="legal-text-block fade-in-up">
            <h2 className="serif-display">Accessibility Statement</h2>
            <span className="last-updated">Last Updated: June 15, 2026</span>
            <p>
              Niraj Trivedi Company Secretaries is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards (WCAG 2.1 AA).
            </p>
          </div>
        )}

        {/* Sitemap */}
        {activeTab === "sitemap" && (
          <div className="legal-text-block fade-in-up">
            <h2 className="serif-display">Website Sitemap</h2>
            <div className="sitemap-list-matrix">
              <div className="sitemap-col">
                <h4>Main Portals</h4>
                <Link to="/">Home Landing</Link>
                <Link to="/about">About Us</Link>
                <Link to="/services">Capabilities</Link>
              </div>
              <div className="sitemap-col">
                <h4>Resources & Registry</h4>
                <Link to="/people">Advisors Directory</Link>
                <Link to="/contact">Contact Hubs</Link>
              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .legal-page {
          padding-top: calc(var(--header-height) + 4rem);
          text-align: left;
        }
        .page-header {
          margin-bottom: 3.5rem;
          max-width: 900px;
        }
        .legal-tabs {
          display: flex;
          gap: 2rem;
          margin-bottom: 4rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }
        .legal-tab-btn {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding-bottom: 1rem;
          position: relative;
        }
        .legal-tab-btn.active {
          color: var(--text-primary);
        }
        .legal-tab-btn.active::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--text-primary);
        }
        .legal-text-block h2 {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
        }
        .last-updated {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 2rem;
        }
        .legal-text-block p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 800px;
        }
        .sitemap-list-matrix {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          margin-top: 2rem;
        }
        .sitemap-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .sitemap-col h4 {
          font-size: 1.1rem;
          font-weight: 600;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .sitemap-col a {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        .sitemap-col a:hover {
          color: var(--accent-gold);
        }
      `}</style>
    </div>
  );
}

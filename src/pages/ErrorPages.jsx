 import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AlertOctagon, HelpCircle, ShieldAlert, ArrowLeft } from "lucide-react";

export default function ErrorPages() {
  const [errorType, setErrorType] = useState("404"); // '404' | '500' | 'maintenance' | 'coming-soon'

  return (
    <div className="error-pages-layout container section-padding fade-in-up">
      {/* Selector switches to demonstrate all screens */}
      <div className="demo-selectors hairline-bottom">
        <span>Demonstrate Fallback Views:</span>
        <div className="selectors-btn-row">
          <button className={`demo-btn ${errorType === "404" ? "active" : ""}`} onClick={() => setErrorType("404")}>404 Page</button>
          <button className={`demo-btn ${errorType === "500" ? "active" : ""}`} onClick={() => setErrorType("500")}>500 Error</button>
          <button className={`demo-btn ${errorType === "maintenance" ? "active" : ""}`} onClick={() => setErrorType("maintenance")}>Maintenance</button>
          <button className={`demo-btn ${errorType === "coming-soon" ? "active" : ""}`} onClick={() => setErrorType("coming-soon")}>Coming Soon</button>
        </div>
      </div>

      <div className="error-viewport-box">
        {errorType === "404" && (
          <div className="error-card-display fade-in-up">
            <HelpCircle size={56} className="error-icon" />
            <h1 className="serif-display">Page Not Found</h1>
            <p className="text-muted">The URL route you are attempting to visit does not exist or has been relocated.</p>
            <Link to="/" className="btn-primary"><ArrowLeft size={14} /> Back to Homepage</Link>
          </div>
        )}

        {errorType === "500" && (
          <div className="error-card-display fade-in-up">
            <AlertOctagon size={56} className="error-icon" />
            <h1 className="serif-display">Internal Server Error</h1>
            <p className="text-muted">An unexpected server state prevented the request from executing correctly.</p>
            <Link to="/" className="btn-primary"><ArrowLeft size={14} /> Back to Homepage</Link>
          </div>
        )}

        {errorType === "maintenance" && (
          <div className="error-card-display fade-in-up">
            <ShieldAlert size={56} className="error-icon" />
            <h1 className="serif-display">System Maintenance</h1>
            <p className="text-muted">Our compliance and IT teams are currently executing scheduled security updates.</p>
            <span className="info-time">Expected Resolution: Within 2 Hours</span>
          </div>
        )}

        {errorType === "coming-soon" && (
          <div className="error-card-display fade-in-up">
            <ShieldAlert size={56} className="error-icon" />
            <h1 className="serif-display">Corporate Portal Coming Soon</h1>
            <p className="text-muted">This digital dashboard module is undergoing final transaction testing.</p>
            <Link to="/" className="btn-secondary">Explore Main Site</Link>
          </div>
        )}
      </div>

      <style>{`
        .error-pages-layout {
          padding-top: calc(var(--header-height) + 4rem);
          text-align: center;
        }
        .demo-selectors {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.5rem;
          margin-bottom: 4rem;
          font-size: 0.85rem;
        }
        @media (max-width: 768px) {
          .demo-selectors {
            flex-direction: column;
            gap: 1rem;
          }
        }
        .selectors-btn-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .demo-btn {
          border: 1px solid var(--border-light);
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          background-color: var(--bg-secondary);
          transition: var(--transition-duration-fast) ease;
        }
        .demo-btn.active, .demo-btn:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }
        .error-viewport-box {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }
        .error-card-display {
          max-width: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .error-icon {
          color: var(--accent-gold);
        }
        .error-card-display h1 {
          font-size: 2.8rem;
          font-weight: 400;
        }
        .error-card-display p {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .info-time {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
}

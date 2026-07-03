import React, { useState } from "react";
import { BarChart, Users, Key, Folder, Edit, Trash2, Calendar, FileText, Settings, ShieldAlert, Plus, Check } from "lucide-react";
import { practices, people, publications, careers } from "../data/mockDb";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("analytics"); // 'analytics' | 'services' | 'careers' | 'articles' | 'logs'
  const [draftStatus, setDraftStatus] = useState({});

  const toggleDraft = (id) => {
    setDraftStatus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="admin-dashboard-page container section-padding fade-in-up">
      <div className="page-header">
        <span className="title-small accent-gold">Enterprise Backoffice</span>
        <h1 className="title-medium page-main-title">CMS Control Panel</h1>
      </div>

      {/* Dashboard Sub-navigation Tabs */}
      <div className="admin-tabs-row hairline-bottom">
        <button className={`admin-tab-btn ${activeTab === "analytics" ? "active" : ""}`} onClick={() => setActiveTab("analytics")}>
          <BarChart size={16} /> Analytics & Performance
        </button>
        <button className={`admin-tab-btn ${activeTab === "services" ? "active" : ""}`} onClick={() => setActiveTab("services")}>
          <Folder size={16} /> Services Manager
        </button>
        <button className={`admin-tab-btn ${activeTab === "careers" ? "active" : ""}`} onClick={() => setActiveTab("careers")}>
          <Users size={16} /> Careers & Jobs
        </button>
        <button className={`admin-tab-btn ${activeTab === "articles" ? "active" : ""}`} onClick={() => setActiveTab("articles")}>
          <FileText size={16} /> Insights Publisher
        </button>
        <button className={`admin-tab-btn ${activeTab === "logs" ? "active" : ""}`} onClick={() => setActiveTab("logs")}>
          <ShieldAlert size={16} /> Security Audit Logs
        </button>
      </div>

      {/* Tab Panels */}
      <div className="admin-content-panel">
        
        {/* Analytics Panel */}
        {activeTab === "analytics" && (
          <div className="tab-pane fade-in-up">
            <div className="analytics-metrics-grid">
              <div className="analytic-card">
                <h3>Unique Visitors</h3>
                <span className="metric-value">4.2K</span>
                <span className="text-muted">Last 30 Days</span>
              </div>
              <div className="analytic-card">
                <h3>Insights Downloads</h3>
                <span className="metric-value">840</span>
                <span className="text-muted">PDF Reports & outlooks</span>
              </div>
              <div className="analytic-card">
                <h3>Active Applications</h3>
                <span className="metric-value">28</span>
                <span className="text-muted">Job openings pipeline</span>
              </div>
            </div>
          </div>
        )}

        {/* Services Manager Panel */}
        {activeTab === "services" && (
          <div className="tab-pane fade-in-up">
            <div className="panel-actions-bar">
              <h3>Active Capabilities</h3>
              <button className="btn-primary" onClick={() => alert("Add service modal opened.")}>
                <Plus size={14} /> Add Service
              </button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Practice Group</th>
                  <th>Lead Partner</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {practices.map((p) => {
                  const lead = people.find(person => person.id === p.leadPartnerId);
                  const isDraft = draftStatus[p.id] || false;
                  return (
                    <tr key={p.id}>
                      <td><strong>{p.name}</strong></td>
                      <td>{lead ? lead.name : "Unassigned"}</td>
                      <td>
                        <button className={`status-badge ${isDraft ? "draft" : "published"}`} onClick={() => toggleDraft(p.id)}>
                          {isDraft ? "Draft" : "Published"}
                        </button>
                      </td>
                      <td>
                        <div className="action-icons">
                          <button onClick={() => alert(`Editing ${p.name}`)} aria-label="Edit"><Edit size={16} /></button>
                          <button onClick={() => alert(`Deleting ${p.name}`)} className="delete-btn" aria-label="Delete"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Careers Manager */}
        {activeTab === "careers" && (
          <div className="tab-pane fade-in-up">
            <div className="panel-actions-bar">
              <h3>Open Positions Matrix</h3>
              <button className="btn-primary" onClick={() => alert("Add job modal opened.")}>
                <Plus size={14} /> Add Job Open
              </button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Location</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {careers.map((job) => {
                  const isDraft = draftStatus[job.id] || false;
                  return (
                    <tr key={job.id}>
                      <td><strong>{job.title}</strong></td>
                      <td>{job.location}</td>
                      <td>{job.department}</td>
                      <td>
                        <button className={`status-badge ${isDraft ? "draft" : "published"}`} onClick={() => toggleDraft(job.id)}>
                          {isDraft ? "Draft" : "Published"}
                        </button>
                      </td>
                      <td>
                        <div className="action-icons">
                          <button onClick={() => alert(`Editing ${job.title}`)} aria-label="Edit"><Edit size={16} /></button>
                          <button onClick={() => alert(`Deleting ${job.title}`)} className="delete-btn" aria-label="Delete"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Insights Publisher */}
        {activeTab === "articles" && (
          <div className="tab-pane fade-in-up">
            <div className="panel-actions-bar">
              <h3>Thought Leadership Briefs</h3>
              <button className="btn-primary" onClick={() => alert("Add article modal opened.")}>
                <Plus size={14} /> Publish Insight
              </button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Article Title</th>
                  <th>Published Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {publications.map((pub) => {
                  const isDraft = draftStatus[pub.id] || false;
                  return (
                    <tr key={pub.id}>
                      <td><strong>{pub.title}</strong></td>
                      <td>{pub.date}</td>
                      <td>
                        <button className={`status-badge ${isDraft ? "draft" : "published"}`} onClick={() => toggleDraft(pub.id)}>
                          {isDraft ? "Draft" : "Published"}
                        </button>
                      </td>
                      <td>
                        <div className="action-icons">
                          <button onClick={() => alert(`Editing ${pub.title}`)} aria-label="Edit"><Edit size={16} /></button>
                          <button onClick={() => alert(`Deleting ${pub.title}`)} className="delete-btn" aria-label="Delete"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Security Audit Logs */}
        {activeTab === "logs" && (
          <div className="tab-pane fade-in-up">
            <h3 className="section-title-border">System Activity logs</h3>
            <div className="logs-list">
              <div className="log-row">
                <span className="log-time">[12:44:05]</span>
                <span className="log-user">User: Elena Rostova</span>
                <span className="log-action">Published Insight: Cross-Border FDI Regulations</span>
              </div>
              <div className="log-row">
                <span className="log-time">[11:30:12]</span>
                <span className="log-user">User: System Admin</span>
                <span className="log-action">Backup database complete (Vite dist check)</span>
              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .admin-dashboard-page {
          padding-top: calc(var(--header-height) + 4rem);
          text-align: left;
        }
        .page-header {
          margin-bottom: 3.5rem;
          max-width: 900px;
        }
        .admin-tabs-row {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }
        .admin-tab-btn {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding-bottom: 1rem;
          position: relative;
        }
        .admin-tab-btn.active {
          color: var(--text-primary);
        }
        .admin-tab-btn.active::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--text-primary);
        }
        .analytics-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        @media (max-width: 768px) {
          .analytics-metrics-grid {
            grid-template-columns: 1fr;
          }
        }
        .analytic-card {
          border: 1px solid var(--border-light);
          padding: 2.5rem;
          background-color: var(--bg-secondary);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .analytic-card h3 {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }
        .metric-value {
          font-size: 3rem;
          line-height: 1;
          font-family: var(--font-serif);
          color: var(--text-primary);
        }
        .panel-actions-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .panel-actions-bar h3 {
          font-size: 1.5rem;
          font-family: var(--font-serif);
          font-weight: 400;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .admin-table th, .admin-table td {
          padding: 1.25rem;
          border-bottom: 1px solid var(--border-light);
          font-size: 0.95rem;
        }
        .admin-table th {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          background-color: var(--bg-secondary);
        }
        .status-badge {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        .status-badge.published {
          background-color: rgba(46, 125, 50, 0.1);
          color: var(--color-success);
        }
        .status-badge.draft {
          background-color: rgba(198, 40, 40, 0.1);
          color: var(--color-error);
        }
        .action-icons {
          display: flex;
          gap: 1.25rem;
          color: var(--text-secondary);
        }
        .action-icons button:hover {
          color: var(--text-primary);
        }
        .action-icons .delete-btn:hover {
          color: var(--color-error);
        }
        .logs-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .log-row {
          border-left: 2px solid var(--accent-gold);
          padding-left: 1.5rem;
          display: flex;
          gap: 2rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .log-time {
          font-family: var(--mono);
          color: var(--text-muted);
        }
        .log-user {
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}

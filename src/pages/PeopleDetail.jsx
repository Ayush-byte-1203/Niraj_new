import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MapPin, Mail, Phone, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import LinkedinIcon from "../components/LinkedinIcon";
import { people, offices, practices } from "../data/mockDb";

export default function PeopleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const personIndex = people.findIndex((p) => p.id === id);
  const person = people[personIndex];

  if (!person) {
    return (
      <div className="container section-padding text-center">
        <h2 className="title-medium">Advisor Profile Not Found</h2>
        <button className="btn-primary" onClick={() => navigate("/people")}>Back to Directory</button>
      </div>
    );
  }

  // Prev/Next Navigation
  const prevPerson = people[(personIndex - 1 + people.length) % people.length];
  const nextPerson = people[(personIndex + 1) % people.length];

  const office = offices.find((o) => o.id === person.officeId);

  // Resolve relational maps
  const matchedPractices = practices.filter(p => person.practices.includes(p.id));

  return (
    <div className="people-detail-page container section-padding fade-in-up">
      <div className="detail-top-nav">
        <button onClick={() => navigate("/people")} className="back-nav-btn">
          <ArrowLeft size={16} /> Back to Directory
        </button>

        {/* Prev/Next Navigation */}
        <div className="profile-prev-next-nav">
          <Link to={`/people/${prevPerson.id}`} className="nav-profile-link">
            <ChevronLeft size={16} /> Prev Profile
          </Link>
          <span className="nav-divider">|</span>
          <Link to={`/people/${nextPerson.id}`} className="nav-profile-link">
            Next Profile <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      <div className="profile-grid">
        {/* Profile Card Sidebar */}
        <div className="profile-sidebar">
          <div className="profile-image-container">
            <img src={person.image} alt={person.name} />
          </div>
          <div className="profile-contact-card">
            <h3>Contact Details</h3>
            {office && (
              <div className="contact-row">
                <MapPin size={16} />
                <span>{office.city} Office</span>
              </div>
            )}
            <div className="contact-row">
              <Mail size={16} />
              <span>{office ? office.email : "csneerajtrivedi@gmail.com"}</span>
            </div>
            <div className="contact-row">
              <Phone size={16} />
              <span>{office ? office.phone : "0265-2784388"}</span>
            </div>
            {person.linkedin && (
              <div className="contact-row">
                <LinkedinIcon size={16} />
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-gold)", textDecoration: "none" }}>
                  LinkedIn Profile ↗
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Profile Main Content */}
        <div className="profile-main">
          <span className="title-small accent-gold">{person.title}</span>
          <h1 className="profile-name serif-display">{person.name}</h1>
          {person.linkedin && (
            <div style={{ marginTop: "-1rem" }}>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--accent-gold)",
                  color: "var(--accent-gold)",
                  borderRadius: "2px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  textDecoration: "none"
                }}
              >
                <LinkedinIcon size={15} />
                <span>Connect on LinkedIn ↗</span>
              </a>
            </div>
          )}

          <div className="profile-bio-section">
            <h2 className="section-title">Biography</h2>
            <div className="bio-text" style={{ whiteSpace: "pre-line", fontSize: "1.05rem", lineHeight: "1.8", color: "var(--text-secondary)" }}>
              {person.bio || "Biography details of associate partner."}
            </div>
          </div>

          <div className="relations-grid" style={{ marginTop: "3rem" }}>
            {matchedPractices.length > 0 && (
              <div className="relation-block">
                <h3 className="relation-title">Practice Focus</h3>
                <div className="relation-links">
                  {matchedPractices.map(p => (
                    <Link key={p.id} to={`/services/${p.id}`} className="relation-tag-link">
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .people-detail-page {
          padding-top: calc(var(--header-height) + 3rem);
          text-align: left;
        }
        .detail-top-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1.5rem;
        }
        .back-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: var(--transition-duration-fast) ease;
        }
        .back-nav-btn:hover {
          color: var(--text-primary);
        }
        .profile-prev-next-nav {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .nav-profile-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-secondary);
          transition: var(--transition-duration-fast) ease;
        }
        .nav-profile-link:hover {
          color: var(--accent-gold);
        }
        .nav-divider {
          opacity: 0.3;
        }
        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 5rem;
        }
        @media (max-width: 1080px) {
          .profile-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .profile-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .profile-image-container {
          position: relative;
          width: 100%;
          padding-top: 125%;
          overflow: hidden;
          background-color: var(--bg-secondary);
        }
        .profile-image-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .profile-contact-card {
          border: 1px solid var(--border-light);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .profile-contact-card h3 {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.75rem;
        }
        .contact-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .profile-main {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .profile-name {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          margin-top: -0.5rem;
        }
        .section-title {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .title-icon {
          color: var(--accent-gold);
        }
        .bio-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }
        .profile-academic-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }
        @media (max-width: 464px) {
          .profile-academic-section {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        .profile-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .profile-bullet-list li {
          font-size: 0.95rem;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.25rem;
        }
        .profile-bullet-list li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--accent-gold);
        }
        .relations-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }
        @media (max-width: 464px) {
          .relations-grid {
            grid-template-columns: 1fr;
          }
        }
        .relation-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .relation-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .relation-tag-link {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: var(--transition-duration-fast) ease;
        }
        .relation-tag-link:hover {
          color: var(--accent-gold);
        }
        .authored-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .authored-card {
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
        }
        .authored-card h3 {
          font-size: 1.15rem;
          font-family: var(--font-sans);
          font-weight: 600;
        }
        .authored-card p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .pub-date {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { practices } from "../data/mockDb";

export default function Navbar({ onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'practices' | 'about' | null
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  useEffect(() => {
    const root = document.documentElement;
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  }, []);

  const handleToggleMegaMenu = (menuName) => {
    setActiveMegaMenu(activeMegaMenu === menuName ? null : menuName);
  };

  // Close menus on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".nav-item-wrapper")) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <Link to="/" className="logo-area">
            <div className="logo-text">
              <span className="logo-brand">NIRAJ TRIVEDI</span>
              <span className="logo-sub">COMPANY SECRETARIES</span>
            </div>
          </Link>

          <nav className="nav-desktop">
            <div
              className="nav-item-wrapper"
              onMouseEnter={() => setActiveMegaMenu("about")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className="nav-link-btn"
                onClick={(e) => { e.stopPropagation(); handleToggleMegaMenu("about"); }}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleToggleMegaMenu("about"); } }}
                aria-expanded={activeMegaMenu === "about"}
                aria-haspopup="true"
              >
                About Us <ChevronDown size={14} className="chevron" />
              </button>
              {activeMegaMenu === "about" && (
                <div className="dropdown-menu fade-in-up">
                  <Link to="/about" className="dropdown-item">Company Overview</Link>
                  <Link to="/about" className="dropdown-item">Vision & Values</Link>
                  <Link to="/about" className="dropdown-item">Our Journey</Link>
                </div>
              )}
            </div>

            <div
              className="nav-item-wrapper"
              onMouseEnter={() => setActiveMegaMenu("practices")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className="nav-link-btn"
                onClick={(e) => { e.stopPropagation(); handleToggleMegaMenu("practices"); }}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleToggleMegaMenu("practices"); } }}
                aria-expanded={activeMegaMenu === "practices"}
                aria-haspopup="true"
              >
                Services <ChevronDown size={14} className="chevron" />
              </button>
              {activeMegaMenu === "practices" && (
                <div className="mega-menu fade-in-up">
                  <div className="mega-menu-content">
                    <div className="mega-info">
                      <h3 className="serif-display">Our Services</h3>
                      <p>Tailored strategic advisory and enterprise restructuring solutions designed for market leadership.</p>
                      <Link to="/services" className="gold-link">View All Services →</Link>
                    </div>
                    <div className="mega-grid">
                      {practices.map((p) => (
                        <Link key={p.id} to={`/services/${p.id}`} className="mega-card">
                          <h4>{p.name}</h4>
                          <p>{p.shortDescription}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/people" className="nav-link">Our People</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="nav-actions">
            <button className="action-btn" onClick={onSearchOpen} aria-label="Search">
              <Search size={18} />
            </button>
            <button className="action-btn menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-links">
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/people">Our People</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        )}
      </header>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          z-index: 1000;
          border-bottom: 1px solid transparent;
          background-color: transparent;
          display: flex;
          align-items: center;
          transition: var(--transition-smooth);
        }
        .navbar-header.scrolled {
          background-color: rgba(252, 251, 247, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-light);
          height: 70px;
        }
        [data-theme="dark"] .navbar-header.scrolled {
          background-color: rgba(10, 11, 13, 0.85);
          border-bottom: 1px solid var(--border-light);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo-area {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .logo-v {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 2.2rem;
          line-height: 1;
          color: var(--accent-gold);
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .logo-brand {
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          line-height: 1.1;
        }
        .logo-sub {
          font-size: 0.55rem;
          font-weight: 500;
          letter-spacing: 0.4em;
          color: var(--text-muted);
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        @media (max-width: 1100px) {
          .nav-desktop {
            display: none;
          }
        }
        .nav-link, .nav-link-btn {
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .nav-link:hover, .nav-link-btn:hover {
          color: var(--text-primary);
        }
        .nav-item-wrapper {
          position: relative;
          height: var(--header-height);
          display: flex;
          align-items: center;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 220px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          padding: 1rem 0;
          z-index: 1000;
        }
        .dropdown-item {
          padding: 0.75rem 2rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }
        .dropdown-item:hover {
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          padding-left: 2.5rem;
        }
        .mega-menu {
          position: fixed;
          top: var(--header-height);
          left: 0;
          width: 100vw;
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-light);
          padding: 3rem 0;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
          display: flex;
          justify-content: center;
          pointer-events: auto;
          z-index: 1000;
        }
        .navbar-header.scrolled .mega-menu {
          top: 70px;
        }
        .mega-menu-content {
          max-width: var(--max-width);
          width: 100%;
          margin: 0 auto;
          padding: 0 4rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
        }
        .mega-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-right: 1px solid var(--border-light);
          padding-right: 3rem;
        }
        .mega-info h3 {
          font-size: 2.5rem;
          line-height: 1.2;
        }
        .mega-info p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .mega-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .mega-card {
          padding: 1.25rem;
          border: 1px solid transparent;
          transition: var(--transition-smooth);
        }
        .mega-card:hover {
          border-color: var(--border-light);
          background-color: var(--bg-secondary);
        }
        .mega-card h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          font-family: var(--font-sans);
          font-weight: 600;
        }
        .mega-card p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .special-link-card {
          border-left: 2px solid var(--accent-gold);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .action-btn {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }
        .action-btn:hover {
          color: var(--text-primary);
        }
        .menu-toggle {
          display: none;
        }
        @media (max-width: 1100px) {
          .menu-toggle {
            display: flex;
          }
        }
        .mobile-drawer {
          position: fixed;
          top: var(--header-height);
          left: 0;
          width: 100%;
          height: calc(100vh - var(--header-height));
          background-color: var(--bg-primary);
          z-index: 999;
          padding: 2rem;
          border-top: 1px solid var(--border-light);
        }
        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .mobile-drawer-links a {
          font-size: 1.6rem;
          font-family: var(--font-sans);
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-primary);
        }
        .chevron {
          transition: transform 0.3s ease;
        }
        .nav-item-wrapper:hover .chevron {
          transform: rotate(180deg);
        }
      `}</style>
    </>
  );
}

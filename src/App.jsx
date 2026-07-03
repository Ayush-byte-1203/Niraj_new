import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DisclaimerModal from "./components/DisclaimerModal";
import SearchOverlay from "./components/SearchOverlay";

// Page imports
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesList from "./pages/ServicesList";
import PracticeDetail from "./pages/PracticeDetail";
import People from "./pages/People";
import PeopleDetail from "./pages/PeopleDetail";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import Legal from "./pages/Legal";
import ErrorPages from "./pages/ErrorPages";

import "./App.css";

// Utility Component to scroll window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      
      {/* Disclaimer Modal (BCI Compliance Gate) */}
      <DisclaimerModal />

      {/* Main Page Layout Wrapper */}
      <div className="app-viewport-wrapper">
        <Navbar onSearchOpen={() => setSearchOpen(true)} />
        
        <main className="main-content-layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesList />} />
            <Route path="/services/:id" element={<PracticeDetail />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<PeopleDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/privacy" element={<Legal />} />
            <Route path="/terms" element={<Legal />} />
            <Route path="/cookies" element={<Legal />} />
            <Route path="/error" element={<ErrorPages />} />
            <Route path="*" element={<ErrorPages />} />
          </Routes>
        </main>

        <Footer />
      </div>

      {/* Global Categorized Search Panel Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </Router>
  );
}

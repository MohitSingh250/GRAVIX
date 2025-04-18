import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">GRAVIX</Link>
      </div>

      <div className="menu-toggle" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </div>

      <div className={`nav-middle ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/practice">Practice</Link></li>
          <li><Link to="/mock-test">Mock Test</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/bookmarks">Bookmarks</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <Link to="/signup">
          <button className="getstarted-btn">Get Started</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

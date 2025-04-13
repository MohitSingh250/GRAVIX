import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">GRAVIX</Link>
    </div>
    <div className="nav-middle">
    <ul className="navbar-links">
      <li><Link to="/leaderboard">Leaderboard</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/practice">Practice</Link></li>
      <li><Link to="/mock-test">Mock Test</Link></li>
      <li><Link to="/dashboard">DashBoard</Link></li>
      <li><Link to="/bookmarks">BookMarks</Link></li>
    </ul>
    </div>
    <div className="navbar-right">
    <Link to="/signup">
      <button className="getstarted-btn">Get Started</button>
    </Link>
    </div>
  </nav>
);

export default Navbar;
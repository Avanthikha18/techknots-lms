import React, { useState } from "react";
import "../css/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

// Explore dropdown data
const exploreItems = {
  Programming: ["Python", "Java", "C++", "JavaScript"],
  "Data Science": ["ML", "AI", "Statistics", "Data Analysis"],
  "IoT & Embedded": ["Sensors", "Edge Devices", "Platforms", "Controllers"],
};

const Navbar = ({ user }) => {
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <img src={logo} alt="Tech Knots" className="navbar-logo" />
      </div>

      {/* Navigation items */}
      <div className="navbar-right">
        {/* Home Button */}
        <Link to="/" className="nav-link nav-home">
          Home
        </Link>

        {/* Search Bar */}
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search courses..."
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>

        {/* Explore Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setExploreOpen(true)}
          onMouseLeave={() => setExploreOpen(false)}
        >
          <button className="dropbtn">Explore</button>
          {exploreOpen && (
            <div className="dropdown-content">
              {Object.keys(exploreItems).map((category) => (
                <div className="dropdown-column" key={category}>
                  <h4>{category}</h4>
                  {exploreItems[category].map((item) => (
                    <a href="#" key={item}>
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Other links */}
        <Link to="/courses" className="nav-link">Courses</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>

        {/* Authentication */}
        {user ? (
          <Link to="/profile" className="nav-link">Profile</Link>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signin" className="nav-link">Sign In</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

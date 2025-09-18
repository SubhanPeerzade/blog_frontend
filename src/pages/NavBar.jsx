

import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setMenuOpen(false);
    navigate("/login");
    window.location.reload(); // Optional: Force refresh to reset state
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo logo-chip" onClick={() => setMenuOpen(false)}>
        <span className="logo-icon">📝</span>
        <span className="logo-text">Bloggram</span>
      </Link>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `pill-link${isActive ? " active" : ""}`}
            onClick={() => setMenuOpen(false)}
            end
          >
            Home
          </NavLink>
        </li>

        {user ? (
          <>
            <li>
              <NavLink
                to="/my-account"
                className={({ isActive }) => `pill-link${isActive ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                My Account
              </NavLink>
            </li>
            <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => `login-btn pill-link${isActive ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

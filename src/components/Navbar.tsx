import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Srinidhi M</span>
          <span className="logo-bracket"> /&gt;</span>
        </NavLink>
        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            end
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
            Portfolio
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z" />
            </svg>
            Posts
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

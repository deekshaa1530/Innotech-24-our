import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Swasthya</div>
      <ul className="navbar-links">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><a href="#about">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

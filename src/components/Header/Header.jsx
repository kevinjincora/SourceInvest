import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">Source Investments</div>
        <nav className="nav-links">
          <a href="#solutions">Solutions</a>
          <a href="#clients">Who We Work With</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-right">
          <span className="phone-number">020 8895 6128</span>
          <button className="login-button">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

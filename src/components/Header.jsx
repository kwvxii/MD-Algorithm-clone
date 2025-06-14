import React, { useState } from 'react';
import logo from '../assets/logo-black.svg';
import menuIcon from '../assets/icon-menu.svg';
import closeIcon from '../assets/icon-close.svg'; // optional

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className="header">
      <div className="container header-holder">
        <div className="nav-side nav-left">
          <a className="nav-item" href="#section-brands">OUR BRANDS</a>
          <a className="nav-item" href="#section-clinical">CLINICAL RESEARCH</a>
        </div>

        <a href="/" className="header-logo">
          <img src={logo} alt="MDalgorithms logo" />
        </a>

        <div className="nav-side nav-right">
          <a className="nav-item" href="#section-about">ABOUT US</a>
          <a className="nav-item" href="#section-contact">CONTACT</a>
        </div>

        <button className="nav-opener" onClick={toggleMenu}>
          <img src={isMenuOpen ? closeIcon : menuIcon} alt="Menu" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#section-brands" onClick={toggleMenu}>OUR BRANDS</a>
          <a href="#section-clinical" onClick={toggleMenu}>CLINICAL RESEARCH</a>
          <a href="#section-about" onClick={toggleMenu}>ABOUT US</a>
          <a href="#section-contact" onClick={toggleMenu}>CONTACT</a>
        </div>
      )}
    </header>
  );
}

export default Header;

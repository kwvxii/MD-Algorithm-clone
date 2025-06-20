import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-black.svg';
import menuIcon from '../assets/icon-menu.svg';
import closeIcon from '../assets/icon-close.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-holder">
        <div className="nav-side nav-left">
          <a className="nav-item" href="#section-brands">OUR BRANDS</a>
          <a className="nav-item" href="#section-clinical">CLINICAL RESEARCH</a>
        </div>

        <a href="#" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} className="header-logo">
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

import React from 'react';
import {motion as Motion} from 'framer-motion';
import heroImage from '../assets/hero-img01.jpg';

function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-frame">
        <Motion.div
          className="hero__image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={heroImage} alt="Smiling woman with clear skin" className="hero-img" />
        </Motion.div>  


        <Motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">Democratizing dermatology with <span className="highlight">AI.</span></h1>
          <p className="hero-subtitle">
            We deliver convenient, effective solutions in skin and hair for all.
          </p>
          <a href="#section-contact" className="btn">Contact Us</a>
        </Motion.div>
      </div>
    </section>
  );
}

export default Hero;

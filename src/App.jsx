import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import SectionIntro from './components/SectionIntro';
import Brands from './components/Brands';
import Philosophy from './components/Philosophy';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="header-spacer" />
      <Hero />
      <Partners />
      <SectionIntro />
      <Brands />
      <Philosophy />
    </>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import SectionIntro from './components/SectionIntro';
import Brands from './components/Brands';
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
    </>
  );
}

export default App;

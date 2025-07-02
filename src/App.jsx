import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import SectionIntro from './components/SectionIntro';
import Brands from './components/Brands';
import Philosophy from './components/Philosophy';
import ComparisonTable from './components/ComparisonTable';
import ClinicalResearch from './components/ClinicalResearch';
import Research from './components/Research';
import Founders from './components/Founders';
import Contact from './components/Contact';
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
      <ComparisonTable />
      <ClinicalResearch />
      <Research />
      <Founders />
      <Contact />
    </>
  );
}

export default App;

import React from 'react';

function SectionIntro() {
  return (
<section className="section section-intro">
  <div className="container">
    <h2 className="intro-heading">Pioneers in AI-powered <br></br> personalized care for all.</h2>
    <p className="intro-text">
      In 2017, we were the first to utilize machine-learning models for best-in-class acne treatments.
      Building on that innovation, we advanced further by creating the world’s first AI-powered scalp
      analysis for hair regrowth. Today, our cutting-edge AI technology sets the standard, delivering
      unmatched, personalized care tailored to each individual’s unique needs.
    </p>
    <div className="divider"></div> {/* ← new short line */}
  </div>
</section>

  );
}

export default SectionIntro;


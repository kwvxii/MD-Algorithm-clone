import React from 'react';
import FadeInSection from './FadeInSection.jsx';
import philosophyImg1 from '../assets/vbl01.jpg';
import philosophyImg2 from '../assets/vbl02.jpg';
import philosophyImg3 from '../assets/vbl03.jpg';
import arrow1 from '../assets/arrow01.png';
import arrow2 from '../assets/arrow02.png';

function Philosophy() {
  return (
    <section className="section section-philosophy" id="section-philosophy">
      <div className="container">
        <FadeInSection>
        <h2 className="philosophy-heading">Our Philosophy</h2>
        </FadeInSection>
        <FadeInSection delay={0.1}>
        <p className="philosophy-subtext">
          MDalgorithms continues to deliver cutting-edge acne treatment and hair regrowth solutions
          through a careful, extensive process.
        </p>
        </FadeInSection>
        <FadeInSection delay={0.2}>
        <div className="philosophy-boxed">
          <div className="philosophy-left">
            <div className="image-frame">
              <img src={philosophyImg1} alt="AI scan" />
              <div className="scan-overlay">
                <p>
                  ANALYZING...<br />
                  IDENTIFYING...<br />
                  BUILDING KIT...<br />
                  RECOMMENDING:<br /><br />
                  ACTIVE CLEANSER<br />
                  SUPPLEMENTS<br />
                  TREATMENT CREAM
                </p>
              </div>
              <div className="frame-corner top-left"></div>
              <div className="frame-corner top-right"></div>
              <div className="frame-corner bottom-left"></div>
              <div className="frame-corner bottom-right"></div>
            </div>
          </div>

          <div className="philosophy-right">
            <h3>Best-in-class AI</h3>
            <p>Our proprietary AI technology, built entirely in-house, sets the gold standard in personalized skin and hair care:</p>
            <ul>
              <li>Unlike off-the-shelf tools, our AI analyzes blemishes, lesions, and hair conditions with unmatched precision.</li>
              <li>We’ve compiled the largest global dataset of acne and scalp images, enabling more precise analysis and accurate assessments.</li>
              <li>Clinically validated and tested by dermatologists to ensure reliable and effective results.</li>
            </ul>
          </div>
        </div>
        </FadeInSection>
        <FadeInSection delay={0.3}>
        <div className="arrow-container">
          <img src={arrow1} alt="Arrow pointing down" className="arrow-down" />
        </div>
        </FadeInSection>
        <FadeInSection delay={0.4}>
        <div className="philosophy-boxed philosophy-reverse">
          <div className="philosophy-right">
            <h3>Customized treatment kits</h3>
            <p>Based on AI analysis, each individual receives a treatment kit customized to their specific needs.</p>
            <ul>
              <li>For acne, our treatment creams, cleansers, and moisturizers are customized based on acne severity, skin sensitivity, and other personal factors.</li>
              <li>For hair regrowth, we offer the world’s first medical-grade, personalized hair loss treatment, addressing the root causes and type of hair loss.</li>
              <li>With over 100 medical and botanical ingredients, our products are scientifically designed to deliver the best possible outcomes.</li>
            </ul>
          </div>
          <div className="philosophy-left">
            <div className="image-frame">
              <img src={philosophyImg2} alt="AI scan" />
            </div>
          </div>
        </div>
        </FadeInSection>
        <FadeInSection delay={0.5}>
        <div className="arrow-container">
          <img src={arrow2} alt="Arrow pointing down" className="arrow-down" />
        </div>
        </FadeInSection>
        <FadeInSection delay={0.6}>
        <div className="philosophy-boxed philosophy3">
          <div className="philosophy-left">
            <div className="image-frame">
              <img src={philosophyImg3} alt="AI scan" />
            </div>
          </div>

          <div className="philosophy-right">
            <h3>Superior results</h3>
            <p>We provide a targeted, effective solution that minimizes irritation while maximizing results — all in a convenient package that minimizes the hassle and guesswork of acne and hair care.

In addition, customers can track their progress, adjust treatments as needed, and access real-time support and guidance from our team of dermatologists and nurses.</p>
          </div>
        </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export default Philosophy;

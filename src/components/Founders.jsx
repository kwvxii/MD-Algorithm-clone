import React from 'react';
import FadeInSection from './FadeInSection';
import yoramImg from '../assets/yoram.png';
import odedImg from '../assets/oded.png';

const Founders = () => {
  return (
    <section className="founders-section" id='section-about'>
      <FadeInSection delay={0}>
      <div className="founders-header">
        <h2>Our Founders</h2>
      </div>
      </FadeInSection>
      <FadeInSection delay={0.2}>
      <div className="founders-wrapper">
        <div className="founder">
          <img src={yoramImg} alt="Dr. Yoram Harth" className="founder-photo" />
          <div className="founder-info">
            <h3>Dr. Yoram Harth</h3>
            <p className="founder-role">Chief Medical Officer <br/> Board‑Certified Dermatologist</p>
            <p>
              Dr. Yoram Harth is a world renown dermatologist, former research fellow at the Department of Dermatology at Columbia Presbyterian in New York, and author of many scientific publications. He is a member of the American Academy of Dermatology and the American Hair Research Society. Dr. Harth has won the Wall Street Journal-Europe Award and the Edison Award for his innovations in dermatology and aesthetic treatments.
            </p>
          </div>
        </div>

        <div className="founder">
          <img src={odedImg} alt="Oded Harth" className="founder-photo" />
          <div className="founder-info">
            <h3>Oded Harth</h3>
            <p className="founder-role">CEO<br/>Forbes ‘30 Under 30’</p>
            <p>
             Oded Harth is a tech innovator and entrepreneur, celebrated as a Forbes 30 Under 30 honoree and a two-time recipient of the Deloitte Fast 500 USA award. With specialized training in AI and machine learning from Stanford, Oded founded MDalgorithms, a pioneering company transforming the landscape of skin and hair care. Supported by leading Silicon Valley venture capital firms, MDalgorithms is committed to delivering effective, accessible, and affordable treatments to people around the world.
            </p>
          </div>
        </div>
      </div>
      </FadeInSection>
    </section>
  );
};

export default Founders;

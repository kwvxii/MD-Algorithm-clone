import React from 'react';
import partnerone from '../assets/partner01-mobile.png';
import partnertwo from '../assets/partner02-mobile.png';
import partnerthree from '../assets/partner03-mobile.png';
import partnerfour from '../assets/partner04-mobile.png';
import partnerfive from '../assets/partner05-mobile.png';
import partnersix from '../assets/partner06-mobile.png';

function Partners() {
  return (
    <section className="section section-partners">
      <div className="partners">
        <h3 className="partners-title">BACKED BY</h3>
        <div className="partners-list">
          <img src={partnerone} alt="Ideal LabX" />
          <img src={partnertwo} alt="Y Combinator" />
          <img src={partnerthree} alt="Redo Ventures" />
          <img src={partnerfour} alt="Moxxie Ventures" />
          <img src={partnerfive} alt="SV Angels" />
          <img src={partnersix} alt="Khosla Ventures" />
        </div>
      </div>
    </section>
  );
}

export default Partners;

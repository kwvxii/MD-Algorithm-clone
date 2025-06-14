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
        <div className="partners-title">BACKED BY</div>
        <div className="partners-list">
          <img src={partnerone} alt="Ideal-labx" />
          <img src={partnertwo} alt="Y-Combinator" />
          <img src={partnerthree} alt="Redo-ventures" />
          <img src={partnerfour} alt="Moxxie-ventures" />
          <img src={partnerfive} alt="SV-angels" />
          <img src={partnersix} alt="Khosla-ventures" />
        </div>
      </div>
    </section>
  );
}

export default Partners;

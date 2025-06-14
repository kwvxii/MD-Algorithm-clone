import React from 'react';
import CountUp from 'react-countup';
import mdacneImage from '../assets/promo01.jpg';
import mdhairImage from '../assets/promo02.jpg';

function Brands() {
  return (
    <section className="section section-brands" id="section-brands">
      <div className="brands-heading">OUR BRANDS</div>

      <div className="brands-grid">
        <div className="brand-item" style={{ backgroundImage: `url(${mdacneImage})` }}>
          <h3>MDacne</h3>
          <a href="#" className="brand-btn">Explore MDacne</a>
        </div>

        <div className="brand-item" style={{ backgroundImage: `url(${mdhairImage})` }}>
          <h3>MDhair</h3>
          <a href="#" className="brand-btn">Explore MDhair</a>
        </div>
      </div>

      <div className="brand-stats">
        <div className="stat">
         <h4>
           <CountUp prefix='+' end={10} duration={2} suffix="M" />
         </h4>
         <p>Customer images analyzed via<br />our skin & hair AI analysis</p>
        </div>
        <div className="stat">
         <h4>
           <CountUp prefix='+' end={500} duration={2} suffix="K" />
         </h4>
         <p>Treatments shipped to our<br />customers</p>
        </div>
        <div className="stat">
         <h4>
           <CountUp end={2} duration={2} suffix=" mins" />
         </h4>
         <p>Average time for skin or scalp<br />assessment via our apps</p>
        </div>
      </div>
    </section>
  );
}

export default Brands;

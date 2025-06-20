import React from 'react';
import CountUp from 'react-countup';
import FadeInSection from './FadeInSection.jsx';
import { useInView } from 'react-intersection-observer';
import mdacneImage from '../assets/promo01.jpg';
import mdhairImage from '../assets/promo02.jpg';

function StatCounter({ end, delay, suffix, prefix, label }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div className="stat" ref={ref}>
      <h4>
        {inView ? (
          <CountUp
            key={`countup-${end}-${inView}`} // forces remount
            start={0}
            end={end}
            duration={1.5}
            delay={delay}
            suffix={suffix}
            prefix={prefix}
          />
        ) : (
          <span>0{suffix || ''}</span> // fallback display
        )}
      </h4>
      <p>{label}</p>
    </div>
  );
}


function Brands() {
  return (
    <section className="section section-brands" id="section-brands">
      <FadeInSection>
        <div className="brands-heading">OUR BRANDS</div>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <div className="brands-grid">
          <div
            className="brand-item"
            style={{ backgroundImage: `url(${mdacneImage})` }}
          >
            <h3>MDacne</h3>
            <a href="#" className="brand-btn">Explore MDacne</a>
          </div>

          <div
            className="brand-item"
            style={{ backgroundImage: `url(${mdhairImage})` }}
          >
            <h3>MDhair</h3>
            <a href="#" className="brand-btn">Explore MDhair</a>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <div className="brand-stats">
          <StatCounter
            end={10}
            prefix="+"
            suffix="M"
            delay={0}
            label="Customer images analyzed via our skin & hair AI analysis"
          />
          <StatCounter
            end={500}
            prefix="+"
            suffix="K"
            delay={0.5}
            label="Treatments shipped to our customers"
          />
          <StatCounter
            end={2}
            suffix=" mins"
            delay={1}
            label="Average time for skin or scalp assessment via our apps"
          />
        </div>
      </FadeInSection>
    </section>
  );
}

export default Brands;

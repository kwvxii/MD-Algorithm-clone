import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import FadeInSection from './FadeInSection';

const statsData = [
  {
    percent: 82,
    text: 'reported an overall improvement in their hair after 4 weeks.',
  },
  {
    percent: 79,
    text: 'reported a reduction in the brittleness of their hair after 4 weeks.',
  },
  {
    percent: 83,
    text: 'reported reduction of shedding of their hair after 12 weeks.',
  },
  {
    percent: 76,
    text: 'reported an overall improvement in the shine of their hair after 12 weeks.',
  },
];

function StatCard({ end, text, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="clinical-card" ref={ref}>
      <div className="percent">
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={5}
            delay={delay}
            suffix="%"
          />
        ) : (
          <>0%</>
        )}
      </div>
      <div className="progress-bar">
        <div
          className="filled-bar"
          style={{ width: inView ? `${end}%` : `0%` }}
        ></div>
      </div>
      <p className="stat-text">{text}</p>
    </div>
  );
}

export default function ClinicalResearch() {
  return (
    <section className="clinical-research-section" id='section-clinical'>
      <div className="clinical-container">
        <FadeInSection delay={0}>
        <div className="clinical-text">
          <h2>Verified Clinical Study</h2>
          <p>
            MDhair’s treatment kits have been clinically validated. They were rigorously tested in a
            six-month study in the USA, which was approved by an Institutional Review Board. The
            study demonstrated statistically significant improvements in hair growth, coverage, and
            thickness. <br />
            <em>J Drugs Dermatol. 2025 Mar;24(3)</em>
          </p>
        </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
        <div className="clinical-stats-grid">
          {statsData.map((item, index) => (
            <StatCard key={index} end={item.percent} text={item.text} delay={index * 0.3} />
          ))}
        </div>
        </FadeInSection>
      </div>
    </section>
  );
}

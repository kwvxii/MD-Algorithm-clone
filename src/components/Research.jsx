import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import FadeInSection from './FadeInSection';

import JID from '../assets/JID.png';
import EADV from '../assets/EADV.png';
import JDD from '../assets/JDD.png';
import JAAD from '../assets/JAAD.png';
import AAD from '../assets/AAD.png';
import BIO from '../assets/BIOMEDICAL.png';

const researchData = [
  {
    journal: <img src={JID} alt="JID" className="journal-icon" />,
    title:
      'Computer vision AI-based androgenetic hair loss analysis using a novel direct to consumer mobile web app.',
    citation: 'JID Dermatology, Volume 143, Issue 5, S34, 2023.',
  },
  {
    journal: <img src={JID} alt="JID" className="journal-icon" />,
    title:
      'AI-based customization in hair loss treatment: a 6-month clinical trial with TEWL and scanning electron microscopy.',
    citation: 'JID Dermatology, Volume 144, Issue 8, S166, August 2024.',
  },
  {
    journal: <img src={EADV} alt="EADV" className="journal-icon" />,
    title:
      'Electron microscopic analysis of 6-month customized, AI-based topical and oral treatment effects on hair strand quality.',
    citation: 'European Academy of Dermatology Amsterdam, September 2024.',
  },
  {
    journal: <img src={EADV} alt="EADV" className="journal-icon1" />,
    title:
      'AI-based customized treatments for scalp health: 6-month trial on transepidermal water loss.',
    citation: 'European Academy of Dermatology Amsterdam, September 2024.',
  },
  {
    journal: <img src={JDD} alt="JDD" className="journal-icon1" />,
    title:
      'AI-based personalization of treatment regimen for hair loss: a 6-month clinical trial.',
    citation:
      'Bhardwaj V, Rodgers N et al. J Drugs Dermatol. 2025 Mar;24(3):233-238.',
  },
  {
    journal: <img src={JAAD} alt="JAAD" className="journal-icon2" />,
    title:
      'Large-scale rapid and efficient acne research using a novel direct-to-consumer mobile app.',
    citation:
      'Journal of the American Academy of Dermatology, Volume 76, issue 6, supplement 1, ab422, June 2017.',
  },
  {
    journal: <img src={AAD} alt="AAD" className="journal-icon" />,
    title: 'The MDacne App: Democratizing Acne Treatment with AI.',
    citation:
      'American Academy of Dermatology Innovation Academy, Vancouver, March 2017.',
  },
  {
    journal: <img src={BIO} alt="BIOMEDICAL" className="journal-icon" />,
    title:
      'Deep Learning-Based Acne Apps Can Solve the Problem of Ineffective Office Consultations.',
    citation:
      'Biomedical Journal of Scientific & Technical Research, Volume 6, Issue 5, pages 5559-5560, July 2018.',
  },
];

const Research = () => {
  const group1 = researchData.slice(0, 3);
  const group2 = researchData.slice(3, 5);
  const group3 = researchData.slice(5, 8);

  const renderGroup = (group) => (
    <div className="research-group">
      {group.map((item, idx) => (
        <div key={idx} className="research-card">
          <div className="journal">{item.journal}</div>
          <div className="title">{item.title}</div>
          <div className="citation">{item.citation}</div>
        </div>
      ))}
    </div>
  );

  const renderSwiper = () => (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}  // ✅ exactly one slide per swipe
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="research-swiper"
    >
      {researchData.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="research-card">
            <div className="journal">{item.journal}</div>
            <div className="title">{item.title}</div>
            <div className="citation">{item.citation}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <section className="research-section">
      <FadeInSection delay={0}>
      <h2>It doesn’t stop at clinical trials.</h2>
      </FadeInSection>

      <FadeInSection delay={0.2}>
      <p>Explore more of our published research.</p>
      </FadeInSection>

      {/* Desktop grid */}
      <div className="desktop-view">
        <FadeInSection delay={0.4}>
        {renderGroup(group1)}
        </FadeInSection>
        <FadeInSection delay={0.6}>
        {renderGroup(group2)}
        </FadeInSection>
        <FadeInSection delay={0.8}>
        {renderGroup(group3)}
        </FadeInSection>
      </div>

      {/* Mobile swiper */}
      <div className="mobile-carousel">
        <FadeInSection delay={0.4}>
        {renderSwiper()}
        </FadeInSection>
      </div>
    </section>
  );
};

export default Research;

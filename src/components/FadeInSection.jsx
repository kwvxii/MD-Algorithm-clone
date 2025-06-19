// src/components/FadeInSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion as Motion } from 'framer-motion';

function FadeInSection({ children, delay = 0, duration = 0.8, y = 50 }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </Motion.div>
  );
}

export default FadeInSection;

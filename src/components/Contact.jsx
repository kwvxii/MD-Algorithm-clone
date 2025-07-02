import React from 'react';

const Contact = () => {
  return (
    <footer className="contact-footer" id="section-contact">
      <div className="contact-content">
        <h2>Contact us</h2>
        <ul>
          <li>
            MDhair Support:{' '}
            <a href="mailto:support@mdhair.co" className="underline-link">
              <em>support@mdhair.co</em>
            </a>
          </li>
          <li>
            MDacne Support:{' '}
            <a href="mailto:support@mdacne.com" className="underline-link">
              <em>support@mdacne.com</em>
            </a>
          </li>
          <li>
            MDalgorithms:{' '}
            <a href="mailto:contact@mdalgorithms.com" className="underline-link">
              <em>contact@mdalgorithms.com</em>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-note">
        © 2025 MDalgorithms Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Contact;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Footer component
const Footer = () => (
  <footer>
    <p>&copy; 2024 Christian Rose. All rights reserved.</p>
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/christian-rose-b00302333/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
      </a>
      <a href="https://github.com/CRose1497" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
      </a>
    </div>
  </footer>
);

export default Footer;

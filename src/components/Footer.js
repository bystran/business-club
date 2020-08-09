import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Fb } from '../assets/icons/fb.svg';
import { ReactComponent as Linkedin } from '../assets/icons/linkedin.svg';
import { ReactComponent as Insta } from '../assets/icons/instagram.svg';

import '../sass/components/Footer.scss';

const Footer = () => (
  <footer className="footer-container">
    <Logo />
    <div className="icons-container">
      <a href="https://www.instagram.com/gubusinessclub/">
        <Insta />
      </a>
      <a href="https://www.linkedin.com/company/gubusinessclub/">
        <Linkedin />
      </a>
      <a href="https://www.facebook.com/gubusinessclub/">
        <Fb />
      </a>
    </div>

    <a href="mailto:gubusinessclub@gmail.com">gubusinessclub@gmail.com</a>

  </footer>
);

export default Footer;

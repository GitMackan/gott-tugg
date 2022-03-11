import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import './Footer.css';

const Footer = () => (
  <div className='footer' id='footer'>
    <div className='footer-links'>
      <div className='footer-links-contact'>
        <h2 className='footer-headtext'>Kontakta oss</h2>
        <p>Sigfrid Edströms Gata 25B</p>
        <p>02x-058473</p>
        <p><a href="mailto:info@gottugg.se">info@gottug.se</a></p>
      </div>
      <div className='footer-links-logo'>
        <h2 className='footer-headtext big'>Gott Tugg</h2>
        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sapiente."</p>
        <div className="footer-links-icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="footer-links-work">
      <h2 className='footer-headtext'>Våra öppettider</h2>
        <p>Måndag-Fredag:</p>
        <p>11:00 - 22:00</p>
        <p>Lördag-Söndag:</p>
        <p>11:00 - 23:00</p>
      </div>
    </div>
    <div className="footer-copyright">
      <div>Copyright - Gott Tugg 2021</div>
    </div>
  </div>
);

export default Footer;

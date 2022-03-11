import React from 'react';

import './Header.css';

const Header = () => (
  <div className="header app__wrapper" id="home">
    <div className="header-info">
      <h3>Jakten på din favoritsmak</h3>
      <h1 className='header-h1'>Nyckeln till god smak</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste, molestiae ad vitae.</p>
      <button type="button" className="menuBtn"><a href="#menu">Se vår meny</a></button>
    </div>
  </div>
);

export default Header;

import React, { useState } from 'react';
import { BiX, BiMenu } from "react-icons/bi";


import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar" id='navbar'>
      <div className="navbar-logo">
        <h1 className='logo'><a href="#home">Gott Tugg</a></h1>
      </div>
      <ul className='navbar-links'>
        <li><a href="#home" >Hem</a></li>
        <li><a href="#about">Om oss</a></li>
        <li><a href="#menu">Meny</a></li>
        <li><a href="#restaurant">Restaurang</a></li>
        <li><a href="#footer">Kontakt</a></li>
      </ul>
      <div className="navbar-smallscreen">
        <BiMenu onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="navbar-smallscreen_overlay">
          <BiX className="overlay-close" onClick={() => setToggleMenu(false)} />
          <ul className='navbar-smallscreen_links'>
            <li><a href="#home" onClick={() => setToggleMenu(false)}>Hem</a></li>
            <li><a href="#about" onClick={() => setToggleMenu(false)}>Om oss</a></li>
            <li><a href="#menu" onClick={() => setToggleMenu(false)}>Meny</a></li>
            <li><a href="#restaurant" onClick={() => setToggleMenu(false)}>Restaurang</a></li>
            <li><a href="#footer" onClick={() => setToggleMenu(false)}>Kontakt</a></li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;

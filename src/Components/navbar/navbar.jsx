import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu-icon.png'; // Importing the menu icon
import { Link } from 'react-scroll';

const Navbar = () => {
    const [mobileMenu,setMobileMenu]=useState(false)
    const toggleMenu=()=>{
      mobileMenu? setMobileMenu(false):setMobileMenu(true);
    }

  return (
    <nav className='container'>
      <img src={logo} alt="logo" className='logo' />
      <ul  className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About us</Link></li>
        <li><Link to='speakers' smooth={true} offset={-250} duration={500}>Speakers</Link></li>
        <li><Link to='sponsers' smooth={true} offset={-220} duration={500}>Sponsorship packages</Link></li>
        <li><Link to='patners' smooth={true} offset={-220} duration={500}>Patners</Link></li>
        <li><Link to='register' smooth={true} offset={-230} duration={500}>Registration</Link></li>
        <li><Link to='location' smooth={true} offset={-230} duration={500}>Location</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact</Link></li>
      </ul>
      <img src={menuIcon} alt="menu-icon" className='menu-icon' onClick={toggleMenu} />

    </nav>
  );
};

export default Navbar;

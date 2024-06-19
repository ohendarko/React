import React from 'react';
import airbnbLogo from '../assets/airbnb-logo.svg';

const Navbar = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <img src={airbnbLogo} className='nav-image' alt='airbnb logo' />
      </nav>
    </header>
  )
}

export default Navbar
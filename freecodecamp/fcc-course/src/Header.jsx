import React from 'react';
import reactLogo from './assets/react.svg';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <img src={reactLogo} className='nav-logo' />
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
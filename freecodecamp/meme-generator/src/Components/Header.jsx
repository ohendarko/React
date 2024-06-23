import React from 'react';
import Logo from '../assets/meme-Logo.png';

const Header = () => {
  return (
    <div>
      <header className='header'>
        <img src={Logo} alt="meme-logo" className='logo' />
        <p className='header-text-left'>Meme Generator</p>
        <p className='header-text-right'>React Course - Project 3</p>
      </header>
    </div>
  )
}

export default Header
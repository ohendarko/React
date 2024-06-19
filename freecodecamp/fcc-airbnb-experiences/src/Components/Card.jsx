import React from 'react';
import loneWoman from '../assets/images/lone-woman.png';

const Card = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <img className='card-image' src={loneWoman} />
        <p>5.0 <span className='gray'>(6) * USA</span></p>
        <p>Life lessons with Katie Zaferes</p>
        <p><span className='bold'>From $136</span> / person</p>
      </div>
    </div>
  )
}

export default Card;
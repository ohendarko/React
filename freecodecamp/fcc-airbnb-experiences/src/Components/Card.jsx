import React from 'react';
import loneWoman from "../assets/images/lone-woman.png";
import cards from '../cards.json';

const Card = () => {
  return (
    <div className='card-container'>
      {cards.map((card) => (
        <div className='card'>
          <img className='card-image' src={card.img} />
          {card.openSpots === 0 && <div className='status'><small>SOLD OUT!</small></div>}
          <p>{card.rating} <span className='gray'>({card.reviewCount}) * {card.country}</span></p>
          <p>{card.title}</p>
          <p><span className='bold'>From ${card.price}</span> / person</p>
        </div>
      ))}
    </div>
  )
}

export default Card;
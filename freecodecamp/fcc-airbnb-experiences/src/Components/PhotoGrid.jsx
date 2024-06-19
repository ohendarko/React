import React from 'react';
import itemOne from '../assets/images/item1.png';
import itemTwo from '../assets/images/item2.png';
import itemThree from '../assets/images/item3.png';
import itemFour from '../assets/images/item4.png';
import itemFive from '../assets/images/item5.png';
import itemSix from '../assets/images/item6.png';
import itemSeven from '../assets/images/item7.png';
import itemEight from '../assets/images/item8.png';
import itemNine from '../assets/images/item9.png';


const PhotoGrid = () => {
  return (
    <div className='photogrid'>
      <div className='photogrid-section middle'>
        <img className='photogrid-item' src={itemOne} />
      </div>

      <div className='photogrid-section align-top'>
        <img className='photogrid-item' src={itemFive} />
        <img className='photogrid-item' src={itemThree} />
      </div>
    
      <div className='photogrid-section align-bottom'>
        <img className='photogrid-item' src={itemFour} />
        <img className='photogrid-item' src={itemTwo} />      
      </div>

      <div className='photogrid-section align-top'>
        <img className='photogrid-item' src={itemSix} />
        <img className='photogrid-item' src={itemSeven} />
      </div>

      <div className='photogrid-section align-bottom'>
        <img className='photogrid-item' src={itemEight} />
        <img className='photogrid-item' src={itemNine} />
      </div>
    </div>
  )
}

export default PhotoGrid;
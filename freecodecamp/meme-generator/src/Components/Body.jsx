import React from 'react';

const Body = () => {
  return (
    <main className='body'>
      
      <form className='texts-box'>
        <div className='text'>
          <p>Top text</p>
          <input type="text" placeholder='Text to appear on top' />
        </div>
        <div className='text'>
          <p>Bottom text</p>
          <input type="text" placeholder='Text to appear below' />
        </div>
        <button className='get-image'>Get a new image</button>

      </form>

      <div className='gener'></div>

    </main>
  )
}

export default Body;
import React, {useState} from 'react';
import images from '../images';

const Body = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "/src/assets/images/lone-woman.png"
  });
  const [allMemeImages, setAllMemeImages] = useState(images);

  function getMemeImage () {
    const memesArray = allMemeImages;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].img;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }
  
  return (
    <main className='body'> 
      <div className='texts-box'>
        <div className='text'>
          <p>Top text</p>
          <input type="text" placeholder='Text to appear on top' />
        </div>
        <div className='text'>
          <p>Bottom text</p>
          <input type="text" placeholder='Text to appear below' />
        </div>
        <button className='get-image' onClick={getMemeImage}>Get a new image</button>
      </div>
      <div className='generated'>
        <img src={meme.randomImage} className='meme-image' />
      </div>
    </main>
  )
}

export default Body;
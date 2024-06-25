import React, {useState, useEffect} from 'react';

const Body = () => {
  const [meme, setMeme] = useState({
    topText: "", 
    bottomText: "",
    randomImage: "https://i.imgflip.com/5c7lwq.png"
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.imgflip.com/get_memes`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
    
  }, [])


  function getMemeImage () {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  function handleChange (event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  
  return (
    <main className='body'> 
      <div className='texts-box'>
        <div className='text'>
          <p>Top text</p>
          <input
            type="text"
            placeholder='Text to appear on top'
            name='topText'
            value={meme.topText}
            onChange={handleChange}
            />
        </div>
        <div className='text'>
          <p>Bottom text</p>
          <input
            type="text"
            placeholder='Text to appear below'
            name='bottomText'
            value={meme.bottomText}
            onChange={handleChange}
            />
        </div>
        <button className='get-image' onClick={getMemeImage}>Get a new image</button>
      </div>
      <div className='generated'>
        <img src={meme.randomImage} className='meme-image' />
        <h2 className='meme-text-top'>{meme.topText}</h2>
        <h2 className='meme-text-bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Body;
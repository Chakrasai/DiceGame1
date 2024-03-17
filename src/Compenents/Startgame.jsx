import React from 'react'
import './Startgame.css'
const Startgame = ({toggle}) => {
  return (
    <a>
    <div className='container'>
        <div className='logo'><img src='https://i.postimg.cc/PqtJscSS/dicehero.png' alt='dice'/></div>
        <div className='details'>
            <div className='title'>DICE GAME</div>
            <button onClick={toggle} 
            className='button'>play</button>
        </div>
      
    </div>
    </a>
  )
}

export default Startgame;


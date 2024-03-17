import './Roledice.css';
import React from 'react';


function Roledice({roledice,dice}) {
  return (
      <dicecontainer>
        <div className='dice' onClick={roledice}><img src={`${dice}`}/></div>
        <p>click on dice</p>
      </dicecontainer>
  )
}
export default Roledice;

import React, { useEffect } from 'react'
import Totalscore from './Totalscore';
import Selectnum  from './Selectnum';
import './Gamestart.css';
import Roledice from './Roledice';
import { useState } from 'react';
import Rules from './Rules';
function Gamestart() {
  const [error, seterror] = useState('');
  const [score, setscore] = useState(0);
  const [selectnum,setselectnum] = useState(0);
  const dices = [
  "https://i.postimg.cc/sfMmS03Q/d1.png",
  "https://i.postimg.cc/HknvZsgz/d2.png",
  "https://i.postimg.cc/0QYVMzYk/d3.png",
  "https://i.postimg.cc/c49Xnynn/d4.png",
  "https://i.postimg.cc/Gh2jr75h/d5.png",
  "https://i.postimg.cc/pLjzXgYx/d6.png"
]
  const [dice, setdice] = useState(1);
  const [showrules,setshowrules] = useState(false);

  const generateRandom = (min,max) => {
    const x = (Math.floor(Math.random() * (max - min + 1 ) + min));
    return x;
}
useEffect(()=>{
  console.log()
})
const roledice = () => {
  if(!selectnum){
    return;
  }
  setselectnum('');
    const random = generateRandom(1,6);
    setdice((prev) => random);
    if(random === selectnum){
      setscore((prev) => prev + selectnum);
    }else{
      setscore((prev) => prev-2)
    }
}
  const resetscore = () => {
    setscore(0);
  }
  const toggleshowrules = () => {
    setshowrules((prev) => !prev);
  }

  return (
    <div className='gamecontainer'>
      <div className='score_selecter'> 
      <div><Totalscore score = {score} error = {error}/> </div>
      <div><Selectnum 
      selectnum = {selectnum}
      setselectnum = {setselectnum}/></div>
    </div>
     <Roledice 
     dice = {dices[dice-1]}
     roledice={roledice}/>
     <div className='rulebuttons'>
      <button onClick={resetscore}>Reset</button>
      <button onClick={toggleshowrules}>{showrules ? "hide" : "show"} Rules</button>
     </div>
    { showrules && <Rules />}
    </div>
  )
}

export default Gamestart

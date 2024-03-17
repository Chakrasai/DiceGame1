import React from 'react'
import './Rules.css'
function Rules({}) {
  return (
    <div className='rulecontainer'>
      <rules>
        <h2>How to play dice game</h2>
        <div className='text'>
            <p>1.first select number</p>
            <p>2.click on dice image</p>
            <p>3.after click on dice if selected number is equal to dice number you will get same point as dice</p>
            <p>4.if you get wrong guess then 2 point will be  dedcuted</p>
        </div>
      </rules>
    </div>
  )
}

export default Rules

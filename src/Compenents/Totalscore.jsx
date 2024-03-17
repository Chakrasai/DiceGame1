import React from 'react'
import './Totalscore.css'

function Totalscore({score}) {
  return (
    <div className='contain'>
      <div className='score'>{score}</div>
      <p className='scorep'>score</p>

    </div>
  )
}

export default Totalscore


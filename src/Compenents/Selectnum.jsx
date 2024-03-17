import React from 'react'
import './Selectnum.css'
function Selectnum({ error,selectnum,setselectnum} ) {

  const arrnumber = [1,2,3,4,5,6];
  return (
   
    <div className='selectnum_container'>
      
      {error && <p className='error'>{error}</p>}


        {
            arrnumber.map((value,i) => (
                <div 
                isselected={value === selectnum }
                className='value' key={i} onClick={() => setselectnum(value)}>{value}</div>
            ))
        }
        <selectnumber>select Number</selectnumber>
        
    </div>
  )
}

export default Selectnum;




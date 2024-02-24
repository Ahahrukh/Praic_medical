import React from 'react'
import './Slots.scss'
const Slots = () => {
    
  return (
    <div className='slotsSevenDays'>
    <h2 className='dayshead'>7 days Slots Availability</h2>
    <div className="seven-day-slots">
      
      <div className="card">
        <p className='days'>Mon(43)</p>
        <p className='date'>22 Jan</p>
        <p className='nro'>(N R O)</p>
      </div>
      <div className="card">
        <p className='days'>Tue(73)</p>
        <p className='date'>23 Jan</p>
        <p className='nro'>(N R O)</p>
      </div>
      <div className="card">
        <p className='days'>Wed(43)</p>
        <p className='date'>24 Jan</p>
        <p className='nro'>(N R O)</p>
      </div>
      <div className="card">
        <p className='days'>Thu(43)</p>
        <p className='date'>25 Jan</p>
        <p className='nro'>(N R O)</p>
      </div>
      <div className="card">
        <p className='days'>Fri(43)</p>
        <p className='date'>26 Jan</p>
        <p className='nro'>(N R O)</p>
      </div>
      <div className="card moved">
        <p className='days'>Sat(43)</p>
        <p className='date'>27 Jan</p>
        <p className='nro'>(N R O)</p>
      </div>
      <div className="card moved">
        <p className='days'>Sun(43)</p>
        <p className='date'>22 Jan</p>
        <p className='nro'>(N R O)</p>
      </div>
    </div>
    </div>
  )
}

export default Slots
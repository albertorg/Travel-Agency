import React from 'react'
import './styles.css'
import homeimage from '../../../../assets/hero.png'

export const Hero = () => {
  return (
    <section>
      <div className="background">
        <img src={homeimage} alt="hotel vacations"/>
      </div>
      <div className="container hero-content">
        <div className="title">
          <h1>Booking Aventures</h1>
          <h2>Where Would You Like To Go?</h2>
        </div>
        <div className='search'>
          {/* Put here form for search hotels and flights */}
        </div>
      </div>  
    </section>
  )
}

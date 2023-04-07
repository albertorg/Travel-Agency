import React from 'react'
import { BookingCard } from './BookingCard'
import './styles.css'

export const Bookings = () => {

  return (
    <main className='bookings-container'>
      <div className='small-container'>
        <div className='title-booking'>
          <h1>My bookings</h1>
        </div>

        <div className='content-container'>
 
          <div className="booking-list-container">
            <BookingCard />
          </div>
          
          <div className=''>
            <h3>Previous bookings</h3>
          </div>

          <div className="booking-list-container">

          </div>
        </div>
      </div>
    </main>
  )
}


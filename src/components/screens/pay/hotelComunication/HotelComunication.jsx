import React from 'react'
import { format, parseISO } from 'date-fns'
import './styles.css'

export const HotelComunication = () => {

  const booking = JSON.parse(localStorage.getItem('booking'))
  const date = format(parseISO(booking.stay.checkIn), 'MMMM d, y')

  return (
    <section className='hotelComunicaton'>
      <div className='cancelConditions-container'>
        <h3>Hotel cancellation policy</h3>
        <span>{`Until ${date}, there is no cancellation fee.`}</span>
        <span>{`From ${date}, the cancellation fee is 60.51 €.`}</span>
      </div>
    </section>
  )
}

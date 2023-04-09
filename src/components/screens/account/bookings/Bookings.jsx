import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookingCard } from './BookingCard'
import { startGetingBoookingsOfUser } from '../../../../store/thunks/booking-thunks'
import './styles.css'

export const Bookings = () => {

  const dispatch = useDispatch()
  const { documents } = useSelector(state => state)

  useEffect(() => {
    
    dispatch( startGetingBoookingsOfUser())
   
  }, [])
  

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


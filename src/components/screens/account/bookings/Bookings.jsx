import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookingCard } from './BookingCard'
import { startGetingBoookingsOfUser } from '../../../../store/thunks/booking-thunks'
import './styles.css'
import { NoBookings } from './NoBookings'

export const Bookings = () => {

  const dispatch = useDispatch()
  const { user_bookings } = useSelector(state => state.booking)

  useEffect(() => {
    dispatch(startGetingBoookingsOfUser())
  }, [dispatch])


  return (
    <main className='bookings-container content' >
      <div className='small-container'>
        <div className='title-booking'>
          <h1>My bookings</h1>
        </div>

        <div className='content-container'>

          <div className="booking-list-container">
            {user_bookings.map((booking) => (
              <BookingCard booking={booking} key={booking.$id} />
            ))}

            {user_bookings.length === 0 && <NoBookings />} 
          </div>

          <div className=''>
            <h3>Previous bookings</h3>
          </div>

          <div className="booking-list-container">
            <NoBookings />
          </div>
        </div>
      </div>
    </main>
  )
}


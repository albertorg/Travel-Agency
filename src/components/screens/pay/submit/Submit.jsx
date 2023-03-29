import React from 'react'
import { IoIosLock } from 'react-icons/io'
import './styles.css'
import { useDispatch } from 'react-redux'
import { BookingConfirmation } from '../../../../store/thunks/booking-thunks'

export const Submit = ({ room }) => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(BookingConfirmation())
  }

  return (
    <section className='submit-container'>
      <button onClick={handleClick}>
        {`Book now for ${room.rates[0].net} €`}
      </button>
      
      <div className='ssl-container'>
        <IoIosLock />
        <span>Data protected with <strong>SSL encryption</strong> </span>
      </div>
    </section>
  )
}

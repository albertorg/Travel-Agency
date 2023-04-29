import React from 'react'
import { IoIosLock } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BookingConfirmation, startCreateBooking } from '../../../../store/thunks/booking-thunks'
import './styles.css'

export const Submit = ({ room, validInfo }) => {

  console.log(validInfo)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = async() => {
    if (!validInfo) return

    await dispatch(BookingConfirmation())
    await dispatch(startCreateBooking())

    navigate('/booking/pay-done')
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

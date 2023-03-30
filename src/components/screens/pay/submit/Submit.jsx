import React from 'react'
import { IoIosLock } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BookingConfirmation } from '../../../../store/thunks/booking-thunks'
import './styles.css'

export const Submit = ({ room }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = async() => {
    await dispatch(BookingConfirmation())

    navigate('/pay/done')
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

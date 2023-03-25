import React, { useEffect, useState } from 'react'
import { formatString } from '../../../../helpers/formatString'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './styles.css'
import { setBookingState } from '../../../../store/slices/booking-slice'

export const GoToPay = ({ room, nights, booking }) => {

  const [show, setShow] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const rate = room.rates[0]

  const handleClick = () => {
    const rateKey = room.rates[0].rateKey
    dispatch(setBookingState({rateKey, booking}))

    localStorage.setItem('booking', JSON.stringify(booking))
    localStorage.setItem('rateKey', rateKey)
    navigate('/pay')
  }

  useEffect(() => {
    setShow('show')
  }, [])

  return (
    <div className={`goToPay-container ${show}`} >

      <div className='main_container mainSpace'>
        <div className="barInfo-container">
          <span className='price-inf'>
            {`${parseInt(rate.net)} €`}
            
          </span>
          <span className='info-pay'>
            {`${formatString(rate.boardName)} | Total price: ${nights()}`}
          </span>
        </div>

        <button onClick={handleClick}>Continue</button>
      </div>
      
    </div>
  )

}
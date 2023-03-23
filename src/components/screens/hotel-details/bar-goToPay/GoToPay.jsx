import React from 'react'
import './styles.css'
import { formatString } from '../../../../helpers/formatString'
import { useNavigate } from 'react-router-dom'

export const GoToPay = ({ room, nights }) => {

  const navigate = useNavigate()
  const rate = room.rates[0]

  const handleClick = () => {
    navigate('/pay')
  }

  return (
    <div className='goToPay-container'>

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

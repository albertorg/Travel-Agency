import React, { useEffect, useState } from 'react'
import { formatString } from '../../../../helpers/formatString'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export const GoToPay = ({ room, nights }) => {

  const [show, setShow] = useState('')
  const navigate = useNavigate()
  const rate = room.rates[0]

  const handleClick = () => {
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
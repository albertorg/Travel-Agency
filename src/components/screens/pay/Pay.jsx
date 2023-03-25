import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from './loading/Loading'
import { checkRate } from '../../../store/thunks/booking-thunks'
import { SideBar } from './sideBar/SideBar'
import { PersonInfo } from './personInfo/PersonInfo'
import { HotelComunication } from './hotelComunication/HotelComunication'
import { MultiPayment } from './multiPayment/MultiPayment'
import { Privacy } from './privacy/Privacy'
import { Submit } from './submit/Submit'
import './styles.css'


export const Pay = () => {

  const { isLoading } = useSelector(state => state.hotels)
  const dispatch = useDispatch()
  
  const rateKey = localStorage.getItem('rateKey')

  // useEffect(() => {
  //   const check = JSON.stringify({
  //     rooms: [{
  //       rateKey,
  //     }]
  //   })

  //   dispatch(checkRate(check))
  // }, [])
  

  return (
    <>
      {isLoading && <Loading />}

      <div className='color-body'>
        <div className='checkout-container container'>
          <SideBar />

          <main>
            <PersonInfo />
            <HotelComunication />
            <MultiPayment />
            <Privacy />
            <Submit />
          </main>
        </div>
      </div>

    </>
  )
}

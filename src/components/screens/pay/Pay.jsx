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
  // const {hotel} = useSelector(state => state.booking) 
  const hotel = JSON.parse(localStorage.getItem('hotel'))
  const room = hotel.rooms.find(room => room.rates[0].rateKey === rateKey)


  console.log(room)

  // useEffect(() => {
  //   const check = JSON.stringify({
  //     rooms: [{
  //       rateKey,
  //     }]
  //   })

  //   dispatch(checkRate(check))
  // }, [dispatch, rateKey])
  

  return (
    <>
      {isLoading && <Loading />}

      {
        !isLoading && 
          <div className='color-body'>
            <div className='checkout-container container'>
              <SideBar hotel={hotel} room={room}/>

              <main>
                <PersonInfo />
                <HotelComunication />
                <MultiPayment />
                <Privacy room={room}/>
                <Submit />
              </main>
            </div>
          </div>
      }
    </>
  )
}

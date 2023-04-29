import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from './loading/Loading'
import { SideBar } from './sideBar/SideBar'
import { PersonInfo } from './personInfo/PersonInfo'
import { HotelComunication } from './hotelComunication/HotelComunication'
import { MultiPayment } from './multiPayment/MultiPayment'
import { Privacy } from './privacy/Privacy'
import { Submit } from './submit/Submit'
import { setRoom } from '../../../store/slices/booking-slice'
import { CircularProgress, Backdrop } from '@mui/material'
// import { checkRate } from '../../../store/thunks/booking-thunks'
import './styles.css'


export const Pay = () => {

  // forms status
  const [isValidCardInfo, setIsValidCardInfo] = useState(false)
  const [isValidPersonInfo, setIsValidPersonInfo] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { isLoading } = useSelector(state => state.hotels)
  const { checkingPayment } = useSelector(state => state.booking)
  const dispatch = useDispatch()

  const rateKey = localStorage.getItem('rateKey')
  const hotel = JSON.parse(localStorage.getItem('hotel'))
  const room = useMemo(() => {
    return hotel.rooms.find(room => room.rates[0].rateKey === rateKey)
  }, [rateKey, hotel.rooms]) 

  useEffect(() => {
    // const check = JSON.stringify({
    //   rooms: [{
    //     rateKey,
    //   }]
    // })

    // dispatch(checkRate(check))
    dispatch(setRoom({ rateKey }))
  }, [dispatch, rateKey])


  return (
    <>
      {isLoading && <Loading />}

      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        open={checkingPayment}
      >
        <div className='payment-verify'>
          <CircularProgress />
          <span>Verifying payment</span>
        </div>
      </Backdrop>


      {
        !isLoading &&
        <div className='color-body'>
          <div className='checkout-container container'>
            <SideBar hotel={hotel} room={room} />

            <main>
              <PersonInfo setIsValidPersonInfo={setIsValidPersonInfo} formSubmitted={formSubmitted}/>
              <HotelComunication />
              <MultiPayment setIsValidCardInfo={setIsValidCardInfo}/>
              <Privacy room={room} />
              <Submit room={room} validInfo={isValidCardInfo && isValidPersonInfo} setFormSubmitted={setFormSubmitted}/>
            </main>
          </div>
        </div>
      }
    </>
  )
}

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { HeroDetails } from './hero/HeroDetails'
import { useDispatch } from 'react-redux'
import { setState } from '../../../store/slices/hotels_slice'
import { Rooms } from './rooms/Rooms'
import './styles.css'
import { GoToPay } from './bar-goToPay/GoToPay'


export const HotelDetails = () => {

  const dispatch = useDispatch()
  const { hotelCode } = useParams()
  const code = parseInt(hotelCode)

  const state = JSON.parse(localStorage.getItem('state'))
  const hotel = state.hotels.hotels.find(hotel => hotel.code === code)

  useEffect(() => {
    dispatch(setState(state))
  }, [dispatch])

  return (
    <div className='hotelDelais-screen main_container'>
      <HeroDetails hotel={hotel} />

      <div className="hotelDescription-container">Description</div>

      <Rooms rooms={hotel.rooms} booking={state.hotels.booking}/>

      <div className='reviews-container'>Reviews</div>

      <div className="hotelFacilities-container">Facilities</div>

      <GoToPay />

    </div>
  )
}


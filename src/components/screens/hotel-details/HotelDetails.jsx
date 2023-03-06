import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { HeroDetails } from './hero/HeroDetails'
import { useDispatch, useStore } from 'react-redux'
import { setState } from '../../../store/slices/hotels_slice'
import './styles.css'


export const HotelDetails = () => {

  const state = JSON.parse(localStorage.getItem('state'))
  const dispatch = useDispatch()
  const { hotelCode } = useParams()
  
  useEffect(() => {
    dispatch(setState(state))
  
  }, [dispatch])
  
  return (
    <div className='hotelDelais-screen main_container'>
      <HeroDetails code={hotelCode}/>

      <div className="hotelDescription-container">Description</div>

      <div className="hotelRooms-container">Rooms</div>

      <div className='reviews-container'>Reviews</div>

      <div className="hotelFacilities-container">Facilities</div>

    </div>
  )
}


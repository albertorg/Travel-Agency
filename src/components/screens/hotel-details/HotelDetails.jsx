import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { HeroDetails } from './hero/HeroDetails'
import { useDispatch } from 'react-redux'
import { setState } from '../../../store/slices/hotels_slice'
import { Rooms } from './rooms/Rooms'
import { GoToPay } from './bar-goToPay/GoToPay'
import { useRadioState } from 'ariakit/radio'
import { differenceInCalendarDays, parseISO } from 'date-fns'
import './styles.css'


export const HotelDetails = () => {

  const radio = useRadioState({ defaultActiveId: null })
  const dispatch = useDispatch()
  const { hotelCode } = useParams()
  const code = parseInt(hotelCode)

  const state = JSON.parse(localStorage.getItem('state'))
  const hotel = state.hotels.hotels.find(hotel => hotel.code === code)

  const calculatetNights = () => {
    const stay = state.hotels.booking.stay
    const numNight = differenceInCalendarDays(parseISO(stay.checkOut), parseISO(stay.checkIn))
    const gender = numNight === 1 ? 'night' : 'nights'

    return `${numNight} ${gender}`
  }

  useEffect(() => {
    dispatch(setState(state))
  }, [dispatch])

  return (
    <div className='hotelDelais-screen main_container'>
      <HeroDetails hotel={hotel} />

      <div className="hotelDescription-container">Description</div>

      <Rooms rooms={hotel.rooms} booking={state.hotels.booking} nights={calculatetNights} state={radio}/>

      <div className='reviews-container'>Reviews</div>

      <div className="hotelFacilities-container">Facilities</div>

      {
        radio.value !== null && <GoToPay room={hotel.rooms[radio.value]} nights={calculatetNights} />
      }

    </div>
  )
}


import React from 'react'
import { IoMdMoon } from 'react-icons/io'
import { HiBadgeCheck } from 'react-icons/hi'
import { GiCoffeeCup } from 'react-icons/gi'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { differenceInCalendarDays, format, parseISO } from 'date-fns'
import { formatString } from '../../../../helpers/formatString' // requires a loader
import { Slider } from '../../../shared/slider/Slider'
import { setIndexCard } from '../../../../store/slices/map-slice'
import { orderImages } from '../../../../helpers/order-images'
import { Link } from 'react-router-dom'
import './styles.css'


export const CardHotelList = ({ hotel, index }) => {

    const { checkIn, checkOut } = useSelector(state => state.hotels.booking.stay)
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const formatNight = () => {
        const numNight = differenceInCalendarDays(parseISO(checkOut), parseISO(checkIn))
        const range = `${format(parseISO(checkIn), 'd MMM')} - ${format(parseISO(checkOut), 'd MMM')}`
        const gender = numNight === 1 ? 'night' : 'nights'
        
        return `${numNight} ${gender}・${range}`
    }

    const EventMouseEnter = () => {
        dispatch(setIndexCard(index))
    }

    const EventMouseLeave = () => {
        dispatch(setIndexCard(null))
    }

    const handleClick = () => {
        localStorage.setItem('state', JSON.stringify(state))
    }

    return (
        <li 
            className='card_hotel_container'
            onMouseOver={EventMouseEnter}
            onMouseLeave={EventMouseLeave}
            key={index}    
        >
            <div className='slider_card_container'>
                <Slider slides={orderImages(hotel, 10)} />
            </div>
            
            <Link to={`/hotel-details/${hotel.code}`} target='_blank' onClick={handleClick} className='info_card_container' >
                <span className='destination_name_list'>
                    {`${hotel.zoneName}, ${hotel.destinationName}, Cuba`}
                </span>
                <h3 className='hotel_name_list'>
                    {hotel.name}
                </h3>
                <div className='stars_category_list'>
                    <AiFillStar />
                    &nbsp;&nbsp;
                    {hotel.categoryName}
                </div>
                <div className='nights_dates'>
                    <IoMdMoon />
                    &nbsp;&nbsp;
                    {formatNight()}
                </div>
                <div className='cancel_info'>
                    <HiBadgeCheck />
                    &nbsp;
                    Free Cancellation Option 
                </div>
                <div className='all_inclusive_info'>
                    <GiCoffeeCup />
                    &nbsp;&nbsp;
                    {formatString(hotel.rooms[0].rates[0].boardName)}
                </div>
                <div className='price_info'>
                    <span>{`€ ${parseInt(hotel.minRate)}`}</span>
                    <span> /total</span>
                </div>
            </Link>
        </li>
    )
}

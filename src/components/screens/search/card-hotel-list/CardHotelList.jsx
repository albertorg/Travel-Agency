import React from 'react'
import { IoMdMoon } from 'react-icons/io'
import { HiBadgeCheck } from 'react-icons/hi'
import { GiCoffeeCup } from 'react-icons/gi'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { differenceInCalendarDays, format, parseISO } from 'date-fns'
import { formatString } from '../../../../helpers/formatString' // requires a loader
import { Slider } from '../../../shared/slider/Slider'
import './styles.css'
import { setIndexCard } from '../../../../store/slices/map-slice'


export const CardHotelList = ({ hotel, index }) => {

    const { checkIn, checkOut } = useSelector(state => state.hotels.booking.stay)
    const dispatch = useDispatch()

    const formatNight = () => {
        const numNight = differenceInCalendarDays(parseISO(checkOut), parseISO(checkIn))
        const range = `${format(parseISO(checkIn), 'd MMM')} - ${format(parseISO(checkOut), 'd MMM')}`
        
        return `${numNight} night・${range}`
    }

    const orderImages = () => {
        let ordered = [...hotel.details.images].sort((a, b) => (
            a.visualOrder - b.visualOrder
        ))
        return ordered 
    }

    const EventMouseEnter = (event) => {
        dispatch(setIndexCard(index))
    }

    const EventMouseLeave = (event) => {
        dispatch(setIndexCard(null))
    }

    return (
        <li 
            className='card_hotel_container'
            onMouseOver={EventMouseEnter}
            onMouseLeave={EventMouseLeave}    
        >
            <div className='slider_card_container'>
                <Slider slides={orderImages()} />
            </div>
            
            <div className='info_card_container' >
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
                    <span>{`$${parseInt(hotel.minRate)}`}</span>
                    <span> /total</span>
                </div>
            </div>
        </li>
    )
}
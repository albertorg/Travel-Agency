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


export const EmptyCard = ({ hotel, index }) => {

    const { checkIn, checkOut } = useSelector(state => state.hotels.booking.stay)
    const dispatch = useDispatch()

    const EventMouseEnter = () => {
        dispatch(setIndexCard(index))
    }

    const EventMouseLeave = () => {
        dispatch(setIndexCard(null))
    }

    return (
        <li
            className='card_hotel_container'
            onMouseOver={EventMouseEnter}
            onMouseLeave={EventMouseLeave}
        >
            <div className='slider_card_container'>
                <Slider slides={orderImages(hotel, 10)} />
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
               
                
            </div>
        </li>
    )
}
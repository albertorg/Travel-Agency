import React from 'react'
import { IoMdMoon } from 'react-icons/io'
import { HiBadgeCheck } from 'react-icons/hi'
import { GiCoffeeCup } from 'react-icons/gi'
import { AiFillStar } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { differenceInCalendarDays, format, parseISO } from 'date-fns'
import { formatString } from '../../../../helpers/formatString'
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './styles.css'
import { Slider } from '../../../shared/slider/Slider'


export const CardHotelList = ({ hotel }) => {

    const { checkIn, checkOut } = useSelector(state => state.hotels.booking.stay)

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


    return (
        <li className='card_hotel_container'>
            <div className='slider_card_container'>

                <Slider slides={orderImages()} />

                {/* <Carousel
                    showThumbs={false}
                    showStatus={false}
                    dynamicHeight={false}
                >
                    {
                        orderImages().map(img => (
                            <div className='img_slider_container'>
                                <img 
                                    src={`http://photos.hotelbeds.com/giata/bigger/${img.path}`} 
                                    alt='Hotel Imagen'
                                    key={img.visualOrder} 
                                />
                            </div>
                        ))
                    }
                    
                </Carousel> */}
            </div>
            
            <div className='info_card_container'>
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

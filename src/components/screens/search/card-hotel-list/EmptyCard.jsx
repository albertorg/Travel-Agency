import React from 'react'
import { IoMdMoon } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { differenceInCalendarDays, format, parseISO } from 'date-fns'
import { Slider } from '../../../shared/slider/Slider'
import { sortImagesNormal } from '../../../../helpers/order-images'
import './styles.css'


export const EmptyCard = () => {

    const { selected } = useSelector(state => state.hotels)
    const { checkIn, checkOut } = useSelector(state => state.hotels.booking.stay)

    const formatNight = () => {
        const numNight = differenceInCalendarDays(parseISO(checkOut), parseISO(checkIn))
        const range = `${format(parseISO(checkIn), 'd MMM')} - ${format(parseISO(checkOut), 'd MMM')}`

        return `${numNight} night・${range}`
    }

    return (
        <li
            className='card_hotel_container'
        >
            <div className='slider_card_container'>
                <Slider slides={sortImagesNormal(selected, 12)} />
            </div>

            <div className='info_card_container' >
                <span className='destination_name_list'>
                    {`${selected.city.content}, Cuba`}
                </span>
                <h3 className='hotel_name_list'>
                    {selected.name.content}
                </h3>
                <div className='stars_category_list'>
                    <AiFillStar />
                    &nbsp;&nbsp;
                    {selected.categoryCode}
                </div>
                <div className='nights_dates'>
                    <IoMdMoon />
                    &nbsp;&nbsp;
                    {formatNight()}
                </div>
                <div className='not-available'>
                    <p>
                        There are no rooms available for the following specifications
                        {` (${formatNight()})`}
                    </p>
                </div>
                
            </div>
        </li>
    )
}
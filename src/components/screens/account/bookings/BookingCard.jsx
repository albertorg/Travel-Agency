import React, { useMemo } from 'react'
import { FaBed, FaMoon, FaUser } from 'react-icons/fa'
import { differenceInCalendarDays, format, parseISO } from 'date-fns'
import './styles.css'

export const BookingCard = ({ booking }) => {

    const date = useMemo(() => {
        const checkIn = format(parseISO(booking.checkIn), 'd')
        const checkOut = format(parseISO(booking.checkOut), 'd MMM y')
        return `${checkIn} - ${checkOut}`
    }, [booking])

    const night = useMemo(() => (
        differenceInCalendarDays(parseISO(booking.checkOut), parseISO(booking.checkIn))
    ), [booking])

    return (
        <div className="booking-card">

            <div className='booking-image'>
                <img src={`http://photos.hotelbeds.com/giata/${booking.image}`} alt={booking.name} />
            </div>

            <div className='data-booking'>
                <div className='booking-hotel-info'>
                    <h4>{booking.name}</h4>
                    <span>{date}</span>
                </div>
                

                <div className='stay-info-container'>
                    <div className='stay-info'>
                        <FaBed />
                    </div>
                    <div className='stay-info'>
                        <FaUser />
                        <span>{booking.persons}</span>
                    </div>
                    <div className='stay-info'>
                        <FaMoon />
                        <span>{night}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

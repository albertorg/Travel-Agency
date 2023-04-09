import React from 'react'
import './styles.css'
import { FaBed, FaMoon, FaUser } from 'react-icons/fa'

export const BookingCard = ({ booking }) => {
    return (
        <div className="booking-card">

            <div className='booking-image'>
                <img src={`http://photos.hotelbeds.com/giata/${booking.image}`} alt={booking.name} />
            </div>

            <div className='data-booking'>
                <div className='booking-hotel-info'>
                    <h4>{booking.name}</h4>
                    <span>16 - 26 sep 2023</span>
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
                        <span>2</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

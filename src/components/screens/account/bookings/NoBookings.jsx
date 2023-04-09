import React from 'react'
import { useNavigate } from 'react-router-dom'
import no_bookings from '../../../../assets/bookings/no_bookings.webp'
import './styles.css'

export const NoBookings = () => {
    
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className='no-booking-container'>
            <img src={no_bookings} alt="no bookings" width={120} height={120}/>
            <p className='still-no'>Still no trips booked...</p>
            <p>With our offers go on vacation at the most convenient price!</p>
            <button onClick={handleClick}>Start exploring</button>
        </div>
    )
}

import React from 'react'
import './styles.css'
import { FaBed, FaMoon, FaUser } from 'react-icons/fa'

export const BookingCard = () => {
    return (
        <div className="booking-card">

            <div className='booking-image'>
                <img src="http://photos.hotelbeds.com/giata/00/004200/004200a_hb_ro_006.jpg" alt="" />
            </div>

            <div className='data-booking'>
                <div className='booking-hotel-info'>
                    <h4>Brisas Guardalavaca, Holguin</h4>
                    <span>16 - 26 sep 2023</span>
                </div>
                

                <div className='stay-info-container'>
                    <div className='stay-info'>
                        <FaBed />
                    </div>
                    <div className='stay-info'>
                        <FaUser />
                        <span>2</span>
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

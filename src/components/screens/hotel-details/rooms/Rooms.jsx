import React from 'react'
import { SiAdguard } from 'react-icons/si'
// import { IoMdClose } from 'react-icons/io'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import './styles.css'

export const Rooms = ({ hotel }) => {
    return (
        <section className="hotelRooms-container">
            <div className="room-card">
                <h3>Estandar</h3>
                <div className='roomInfo-container'>
                    <span>All Inclusive</span>
                    <div className='cancel-info-container'>
                        <SiAdguard />
                        <span>Free cancellation until 24/03/23</span>
                        <HiOutlineInformationCircle />
                    </div>
                    <div className="priceRoom-container">
                        <span>92 E</span>
                        <span>Total price: 2 nith</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

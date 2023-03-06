import React from 'react'
import './styles.css'
import { Slider } from '../../../shared/slider/Slider'
import { FaMapMarkerAlt } from 'react-icons/fa'


export const HeroDetails = ({ hotel }) => {



    return (
        <div className='heroDetails-container'>
            <div className="heroTitle-container">
                <h1>{hotel.name}</h1>
                <div className='hero-info'>
                    <div className="rating-hero"></div>
                    <div className="address-hero">
                        <FaMapMarkerAlt />
                        <span>{hotel.details.address.content}</span>
                        <span>, {hotel.zoneName}</span>
                        <span>, {hotel.destinationName}</span>
                    </div>
                </div>
            </div>

            <div className="heroImages-container">
                <Slider slides={hotel.details.images}/>
            </div>
        </div>
    )
}

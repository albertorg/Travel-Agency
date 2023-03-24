import React from 'react'
import { Slider } from '../../../shared/slider/Slider'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import './styles.css'


export const HeroDetails = ({ hotel }) => {

    console.log(hotel)

    const getCategory = () => {
        const category = hotel.categoryName.split(' ')[0]
        
        if (!isNaN(category)) {
            return parseInt(category)
        }
        
        return null
    }


    return (
        <section className='heroDetails-container main_container'>
            <div className="heroTitle-container">
                <h1>{hotel.name}</h1>
                <div className='hero-info'>
                    <div className="rating-hero">
                        { 
                            getCategory() !== null &&
                                [...Array(getCategory())].map(() => (
                                    <AiFillStar className='category-icon'/>
                                ))
                        }
                        {/* <span>|</span> */}
                    </div>
                    <span>|</span>
                    <div className="address-hero">
                        <FaMapMarkerAlt />
                        {`${hotel.details.address.content} ${hotel.destinationName}`}
                    </div>
                </div>
            </div>

            <div className="heroImages-container">
                <Slider slides={hotel.details.images}/>
            </div>
        </section>
    )
}

import React from 'react'
import { Slider } from '../../../shared/slider/Slider'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { orderImages } from '../../../../helpers/order-images'
import useWindowDimensions from '../../../../hooks/useWindowDimensions '
import './styles.css'


export const HeroDetails = ({ hotel }) => {

    const { width } = useWindowDimensions()
     
    const sortedImages = orderImages(hotel)
    const lastImages = sortedImages.slice(-4)

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
                                [...Array(getCategory())].map((s, idx) => (
                                    <AiFillStar className='category-icon' key={idx}/>
                                ))
                        }
                    </div>

                    <span>|</span>

                    <div className="address-hero">
                        <FaMapMarkerAlt />
                        {`${hotel.details.address.content} ${hotel.destinationName}`}
                    </div>
                </div>
            </div>

            <div className="heroImages-container">
                <Slider slides={sortedImages}/>
                {
                    width > 768 &&
                        <div className='last-images'>
                            {
                                lastImages.map((image, idx) => (
                                    <img
                                        src={`http://photos.hotelbeds.com/giata/bigger/${image.path}`}
                                        alt={hotel.name}
                                        key={idx}
                                    />
                                ))
                            }
                        </div>
                }
                
            </div>
        </section>
    )
}

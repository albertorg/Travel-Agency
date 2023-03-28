import React from 'react'
import { Slider } from '../../../shared/slider/Slider'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { orderImages } from '../../../../helpers/order-images'
import { TbWorld } from 'react-icons/tb'
import { HiMail } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import './styles.css'
import { CategoryStars } from '../../../shared/category-stars/CategoryStars'


export const HeroDetails = ({ hotel }) => {
     
    const sortedImages = orderImages(hotel)
    const lastImages = sortedImages.slice(-4)


    return (
        <section className='heroDetails-container main_container'>
            <div className="heroTitle-container">
                <h1>{hotel.name}</h1>
                <div className='hero-info'>
                    <CategoryStars category={hotel.categoryName}/>

                    <span>|</span>

                    <div className="address-hero">
                        <FaMapMarkerAlt />
                        {`${hotel.details.address.content} ${hotel.destinationName}`}
                    </div>
                </div>
            </div>

            <div className="heroImages-container">
                <Slider slides={sortedImages}/>
            
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
            </div>

            <div className='infContact-container'>
                <div className='infHotel-container'>
                    <h3>Contact information</h3>
                    <div className='infContact-lay'>
                        <div className='infContact'>
                            <TbWorld />
                            {hotel.details.web}
                        </div>
                        <div className='infContact'>
                            <BsFillTelephoneFill />
                            {hotel.details.phones[0].phoneNumber}
                        </div>
                        <div className='infContact'>
                            <HiMail />
                            {hotel.details.email}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

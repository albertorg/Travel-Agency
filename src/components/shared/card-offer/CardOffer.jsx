import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import './styles.css'

export const CardOffer = () => {
    return (
        <div className='offer_container'>
            <div className='imgHotel_container'>
                <img src="http://photos.hotelbeds.com/giata/bigger/06/063427/063427a_hb_a_001.jpg" alt="Hotel" />
                <div className='discount'>-30%</div>
            </div>

            <div className='infoHotel_conatiner'>
                <div className='nameHotel_info'>
                    <h3>Hotel Playa Pesquero</h3> 
                </div>
                <div className='hotelDescription_info'>
                    <div className='starsHotel_category'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        &nbsp;&nbsp;
                        3 Stars
                    </div>
                    <div className='city_container'>
                        <span>2 PERSONS</span>
                        <span>12+</span>
                        <span>HOLGUIN</span>
                    </div>
                    <div className='price'>
                        <span>{`€ 91`}</span>
                        <span> /night</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

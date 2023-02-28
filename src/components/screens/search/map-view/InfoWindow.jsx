import React from 'react'
import { useSelector } from 'react-redux'
import { PopoverHeading } from "ariakit/popover"
import { AiFillStar } from 'react-icons/ai' 
import { Link } from 'react-router-dom'
import { orderImages } from '../../../../helpers/order-images'
import './styles.css'

export const InfoWindow = ({index}) => {

    const { hotels } = useSelector(state => state.hotels)

    const images = orderImages(hotels[index], 1)
    const path = `http://photos.hotelbeds.com/giata/${images[0].path}`

    return (
        <Link to='/hotel-details' className='info_window_container'>
            <div className='img_container'>
                <img src={path} alt="Hotel" />
            </div>

            <div className='info_conatiner'>
                <PopoverHeading className='heading_info'>
                    {hotels[index].name}
                </PopoverHeading>
                <div className='description_info'>
                    <div className='hotel_category'>
                        <AiFillStar />
                        &nbsp;&nbsp;
                        {hotels[index].categoryName}
                    </div>
                    <div className='price_info'>
                        <span>{`€ ${parseInt(hotels[index].minRate)}`}</span>
                        <span> /total</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

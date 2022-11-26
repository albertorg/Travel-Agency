import React from 'react'
import { useSelector } from 'react-redux'
import {
    PopoverDescription,
    PopoverHeading,
} from "ariakit/popover"
import { AiFillStar } from 'react-icons/ai' 
import './styles.css'

export const InfoWindow = ({index}) => {

    const { hotels } = useSelector(state => state.hotels)
    const path = `http://photos.hotelbeds.com/giata/${hotels[index].details.images[1].path}`

    return (
        <div className='info_window_container'>
            <div className='img_container'>
                <img src={path} alt="Hotel image" />
            </div>

            <div className='info_conatiner'>
                <PopoverHeading className='heading_info'>
                    {hotels[index].name}
                </PopoverHeading>
                <PopoverDescription className='description_info'>
                    <div className='hotel_category'>
                        <AiFillStar />
                        &nbsp;&nbsp;
                        {hotels[index].categoryName}
                    </div>
                    <div className='price_info'>
                        <span>{`€ ${parseInt(hotels[index].minRate)}`}</span>
                        <span> /total</span>
                    </div>
                </PopoverDescription>
            </div>
        </div>
    )
}

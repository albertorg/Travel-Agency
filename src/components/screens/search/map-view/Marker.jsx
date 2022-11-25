import React, { useState } from 'react'
// import { useSelector } from 'react-redux'

import './styles.css'
import { InfoWindow } from './InfoWindow';


export const Marker = ({ text, animate }) => {

    

    return (

        <div 
            className='price-tag '
            
        >
            <span className={animate ? 'bounce price_marker' : 'price_marker'}>
                {text}
            </span>

        </div>

    )
}

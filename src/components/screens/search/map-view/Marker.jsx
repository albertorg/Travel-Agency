import React from 'react'
import './styles.css'

export const Marker = ({ text }) => {
    return (

        <div className='price-tag '>
            <span className='bounce price_marker'>{text}</span>   
        </div>

    )
}

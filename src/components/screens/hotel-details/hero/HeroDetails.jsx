import React from 'react'
import './styles.css'


export const HeroDetails = ({ hotel }) => {

    

    return (
        <div className='heroDetails-container'>
            <div className="heroTitle-container">
                <h1>{hotel.name}</h1>
            </div>

            <div className="heroImages-container"></div>
        </div>
    )
}

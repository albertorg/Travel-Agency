import React from 'react'
import './styles.css'

export const Description = ({ description }) => {
    return (
        <section className="hotelDescription-container main_container">
            <h2>General Information</h2>
            <div className='description'>
                <h3>Description</h3>
                <p>{description.content}</p>
            </div> 
        </section>
    )
}

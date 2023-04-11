import React from 'react'
import './styles.css'

export const HeroPage = ({ title }) => {
    return (
        <section className='heroPage-section hero-section'>
            <div className='heroPage-container'></div>
            <h1>{title}</h1>
        </section>
    )
}

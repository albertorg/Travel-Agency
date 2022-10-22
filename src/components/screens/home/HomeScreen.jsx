import React from 'react'
import { Footer } from '../../shared/footer/Footer'
import { Navbar } from '../../shared/navbar/Navbar'
import { Hero } from './hero/Hero'
import { Recommend } from './recommend/Recommend'
import { Services } from './services/Services'
import { Testimonials } from './testimonials/Testimonials'


export const HomeScreen = () => {
    return (
        <>
            <h1>Travel Agency</h1>
            <Navbar />
            <Hero />
            <Services />
            <Recommend />
            <Testimonials />
            <Footer />
        </>
    )
}

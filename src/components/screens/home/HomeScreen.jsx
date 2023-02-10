import React from 'react'
import { Footer } from '../../shared/footer/Footer'
import { Navbar } from '../../shared/navbar/Navbar'
import { Hero } from './hero/Hero'
import { Recommend } from './recommend/Recommend'
import { Services } from './services/Services'
import { Testimonials } from './testimonials/Testimonials'
import { PopularDestinations } from './popular-destinations/PopularDestinations'
import { Offers } from './offers/Offers'


export const HomeScreen = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <PopularDestinations />
            <Offers />
            <Services />
            <Recommend />
            <Testimonials />
            <Footer />
        </>
    )
}

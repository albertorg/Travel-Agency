import React from 'react'
import { Footer } from '../../shared/footer/Footer'
import { Navbar } from '../../shared/navbar/Navbar'
import { Hero } from './hero/Hero'
import { Recommend } from './recommend/Recommend'
import { Services } from './services/Services'
import { Testimonials } from './testimonials/Testimonials'
import { PopularDestinations } from './popular-destinations/PopularDestinations'
import { Offers } from './offers/Offers'
import { WhyUs } from './whyus/WhyUs'


export const HomeScreen = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <PopularDestinations />
            <Offers />
            <WhyUs />
            <Services />
            <Recommend />
            <Testimonials />
            <Footer />
        </>
    )
}

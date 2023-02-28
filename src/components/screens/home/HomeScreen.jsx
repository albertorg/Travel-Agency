import React from 'react'
import { Footer } from '../../shared/footer/Footer'
import { Hero } from './hero/Hero'
import { PopularDestinations } from './popular-destinations/PopularDestinations'
import { Offers } from './offers/Offers'
import { WhyUs } from './whyus/WhyUs'
import { Articles } from './articles/Articles'


export const HomeScreen = () => {
    return (
        <>
            <Hero />
            <PopularDestinations />
            <Offers />
            <WhyUs />
            <Articles />
            <Footer />
        </>
    )
}

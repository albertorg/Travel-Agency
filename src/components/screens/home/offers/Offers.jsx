import React from 'react'
import './styles.css'
import { CardOffer } from '../../../shared/card-offer/CardOffer'

const array = [1, 2, 3]

export const Offers = () => {
    return (
        <section className="popularDest-container">
            <div className="destination_area main_container">

                <div className="titles_container">
                    <span className="section-tagline">Featured promotions</span>
                    <h2 className="section-title">Special offers for hotels in cuba</h2>
                </div>

                <div className='cardsOffers_container'>
                    {
                       array.map(i => (
                           <CardOffer />
                       ))
                    }
                </div>

            </div >
        </section>
    )
}

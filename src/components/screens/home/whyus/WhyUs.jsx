import React from 'react'
import { RiCustomerService2Line, RiSecurePaymentLine } from 'react-icons/ri'
import { MdOutlineConfirmationNumber, MdOutlineFreeCancellation } from 'react-icons/md'
import { BsCurrencyDollar, BsListStars } from 'react-icons/bs'
import './styles.css'

export const WhyUs = () => {


    return (
        <section className='different-home'>

            <div className='imgMap-container'></div>

            <div className='section-whyus-container'>

                <div className="box-marker"></div>

                <div className='main_container'>
                    <div className="titles_container">
                        <span className="section-tagline">Our benefit</span>
                        <h2 className="section-title">Why Choose FunTravels</h2>
                    </div>

                    <p>
                        Discover why you should choose us for your next adventure. We offer unique features,
                        commitment to service, and the best value for your vacation planning.
                    </p>

                    <div className='reasons-container'>

                        <div className='reason-container'>
                            <MdOutlineConfirmationNumber className='icon-reasons' />
                            <div className='reason-content'>
                                <h3>Instant Confirmation</h3>
                                <p>Instant confirmation of your reservation. 
                                    Secure your accommodation in a matter of minutes.
                                </p>
                            </div>
                        </div>

                        <div className='reason-container'>
                            <BsCurrencyDollar className='icon-reasons' />
                            <div className='reason-content'>
                                <h3>Prices</h3>
                                <p>The most competitive prices guarantee and special offers to 
                                    help save on your vacation budget.
                                </p>
                            </div>
                        </div>

                        <div className='reason-container'>
                            <MdOutlineFreeCancellation className='icon-reasons' />
                            <div className='reason-content'>
                                <h3>Flexibility</h3>
                                <p>We offer clear and fair policies in case you need to make changes 
                                    or cancellations to your reservation.
                                </p>
                            </div>
                        </div>

                        <div className='reason-container'>
                            <BsListStars className='icon-reasons' />
                            <div className='reason-content'>
                                <h3>Variety</h3>
                                <p>We have the widest selection of hotels in Cuba for all tastes and needs.
                                </p>
                            </div>
                        </div>

                        <div className='reason-container'>
                            <RiSecurePaymentLine className='icon-reasons' />
                            <div className='reason-content'>
                                <h3>Security</h3>
                                <p>Guarantee easy and secure reservations, with protected payment options and data privacy.
                                </p>
                            </div>
                        </div>

                        <div className='reason-container'>
                            <RiCustomerService2Line className='icon-reasons' />
                            <div className='reason-content'>
                                <h3>Service </h3>
                                <p> Exceptional 24/7 customer service, 
                                    we help you whenever you need it.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

            

        </section>
    )
}

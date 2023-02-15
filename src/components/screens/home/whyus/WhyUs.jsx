import React from 'react'
import { GiAlarmClock } from 'react-icons/gi'
import map from '../../../../assets/reservaciones de hoteles en cuba.png'
import './styles.css'

export const WhyUs = () => {


    return (
        <section className='different-home'>
            
            <div className="titles_container">
                <span className="section-tagline">Our benefit</span>
                <h2 className="section-title">Why Choose FunTravels</h2>
            </div>

            <div className=" different-container">
                <p>There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration, by injected humour, or new randomised words.
                </p>

                <div className='reasons-container'>

                    <div className='imgMap-container'>
                        <img src={map} alt="reservaciones hoteles en cuba" />
                    </div>

                    <div className='reason-container'>
                        <GiAlarmClock className='icon-reasons' />
                        <div className='reason-content'>
                            <h3>Time</h3>
                            <p>Utise wisi enim minim veniam, quis tation ullamcorper suscipit et
                                loboti nisl consequat, wisi ad minim.
                            </p>
                        </div>
                    </div>

                    <div className='reason-container'>
                        <GiAlarmClock className='icon-reasons' />
                        <div className='reason-content'>
                            <h3>Time</h3>
                            <p>Utise wisi enim minim veniam, quis tation ullamcorper suscipit et
                                loboti nisl consequat, wisi ad minim.
                            </p>
                        </div>
                    </div>

                    <div className='reason-container'>
                        <GiAlarmClock className='icon-reasons' />
                        <div className='reason-content'>
                            <h3>Time</h3>
                            <p>Utise wisi enim minim veniam, quis tation ullamcorper suscipit et
                                loboti nisl consequat, wisi ad minim.
                            </p>
                        </div>
                    </div>

                    <div className='reason-container'>
                        <GiAlarmClock className='icon-reasons' />
                        <div className='reason-content'>
                            <h3>Time</h3>
                            <p>Utise wisi enim minim veniam, quis tation ullamcorper suscipit et
                                loboti nisl consequat, wisi ad minim.
                            </p>
                        </div>
                    </div>

                    <div className='reason-container'>
                        <GiAlarmClock className='icon-reasons' />
                        <div className='reason-content'>
                            <h3>Time</h3>
                            <p>Utise wisi enim minim veniam, quis tation ullamcorper suscipit et
                                loboti nisl consequat, wisi ad minim.
                            </p>
                        </div>
                    </div>

                    <div className='reason-container'>
                        <GiAlarmClock className='icon-reasons' />
                        <div className='reason-content'>
                            <h3>Time</h3>
                            <p>Utise wisi enim minim veniam, quis tation ullamcorper suscipit et
                                loboti nisl consequat, wisi ad minim.
                            </p>
                        </div>
                    </div>  


                </div>
            </div>
        </section>
    )
}

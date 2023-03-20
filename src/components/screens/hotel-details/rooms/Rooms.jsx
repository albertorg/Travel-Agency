import React from 'react'
import { Radio, RadioGroup, useRadioState } from "ariakit/radio";
import { SiAdguard } from 'react-icons/si'
// import { IoMdClose } from 'react-icons/io'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { formatString } from '../../../../helpers/formatString'
import './styles.css'

export const Rooms = ({ rooms }) => {

    const radio = useRadioState()
    console.log(radio)

    return (
        <section className="hotelRooms-container">
            <RadioGroup state={radio}>
                {
                    rooms.map((room, idx) => (
                        <div className="room-card" key={idx}>
                            <h3>
                                <Radio value={idx}/>
                                {formatString(room.name)}
                            </h3>
                            <div className='roomInfo-container'>
                                <span>{formatString(room.rates[0].boardName)}</span>
                                <div className='cancel-info-container'>
                                    <SiAdguard />
                                    <span>Free cancellation until 24/03/23</span>
                                    <HiOutlineInformationCircle />
                                </div>
                                <div className="priceRoom-container">
                                    <span>{`${parseInt(room.rates[0].net)} €`}</span>
                                    <span>Total price: 2 nith</span>
                                </div>
                            </div>
                        </div>
                    ))
                }  
            </RadioGroup>
            
        </section>
    )
}

import React, { useEffect, useState } from 'react'
import { Radio, RadioGroup, useRadioState } from "ariakit/radio";
import { SiAdguard } from 'react-icons/si'
// import { IoMdClose } from 'react-icons/io'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { formatString } from '../../../../helpers/formatString'
import './styles.css'

export const Rooms = ({ rooms }) => {

    const radio = useRadioState( { defaultActiveId: null} )
    const [style, setStyle] = useState({})
    console.log(radio)

    const handleClick = (id) => {
        radio.move(id)
        setStyle({ borderColor: '#e6eff9' })
    }

    return (
        <section className="hotelRooms-container">
            <RadioGroup state={radio}>
                {
                    rooms.map((room, idx) => (
                        <div 
                            className="room-card"
                            style={radio.value === idx ? { borderColor: '#e6eff9' } : {}} 
                            key={idx} 
                            onClick={() => handleClick(radio.items[idx].id)}
                        >
                            <div className="roomName-container">
                                <h3 className='labelName'>
                                    <Radio value={idx} className='radio' />
                                    {formatString(room.name)}
                                </h3>
                                {
                                    idx === 0 && <div className="bestPrice">Best price!</div>
                                }
                            </div>

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

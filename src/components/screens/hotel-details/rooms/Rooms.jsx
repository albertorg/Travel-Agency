import React from 'react'
import { Radio, RadioGroup } from "ariakit/radio";
import { SiAdguard } from 'react-icons/si'
// import { IoMdClose } from 'react-icons/io'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { formatString } from '../../../../helpers/formatString'
import './styles.css'

export const Rooms = ({ rooms, booking, nights, state}) => {

    const handleClick = (id) => {
        state.move(id)
    }

    return (
        <section className="hotelRooms-container main_container">
            <RadioGroup state={state}>
                {
                    rooms.map((room, idx) => (
                        <div
                            className="room-card"
                            style={state.value === idx ? { borderColor: '#e6eff9' } : {}}
                            key={idx}
                            onClick={() => handleClick(state.items[idx].id)}
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
                                <span className='boardName'>
                                    {formatString(room.rates[0].boardName)}
                                </span>
                                <div className='cancel-info-container'>
                                    <SiAdguard className='cancellation-icon'/>
                                    <span className='cancelInfo'>
                                        {`Free cancellation until ${booking.stay.checkIn}`}
                                    </span>
                                    <HiOutlineInformationCircle className='info-Icon'/>
                                </div>
                            </div>

                            <div className="priceRoom-container">
                                <span className='priceRoom'>{`${parseInt(room.rates[0].net)} €`}</span>
                                <span className='totalPrice-info'>
                                    {`Total price: ${nights()}`}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </RadioGroup>

        </section>
    )
}

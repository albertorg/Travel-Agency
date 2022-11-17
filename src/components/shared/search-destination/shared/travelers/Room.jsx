import React from 'react'
import { TiMinus } from 'react-icons/ti'
import { GoPlus } from 'react-icons/go'
import { useCounter } from '../../../../../hooks/useCounter'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRoom } from '../../../../../store/slices/hotels_slice'

export const Room = () => {

    const { occupancies } = useSelector(state => state.hotels.booking)
    const dispatch = useDispatch()

    const [
        handleMinusAdult,
        handleMinusChild,
        handlePlusAdult,
        handlePlusChild,
    ] = useCounter()

    const handleRemoveRoom = (e, index, item) => {
        e.preventDefault()
        const value = item.adults + item.children

        dispatch(deleteRoom({index, value}))
    }

    return (
        <>
            {
                occupancies.map((item, index) => (
                    <div 
                        className= {
                            index > 0 
                                ? 'select_travelers_container border_style'
                                : 'select_travelers_container'
                        } 
                        key={index}
                    >

                        <div className='header_group'>
                            <span className='display_room'>
                                {`Room ${index + 1}`}
                            </span>
                            
                            {
                                occupancies.length > 1 && 
                                    <button
                                        className='btn_add_room'
                                        onClick={e => handleRemoveRoom(e, index, item)}
                                    >
                                        Delete
                                    </button>
                            }
                        </div>

                        <div className='adults_set_container'>

                            <div className='info_text'>
                                <span className='description_adults'>Adults</span>
                                <span className='info_adults'>12+</span>
                            </div>

                            <div className='couter_container'>
                                <button className='btn_add' onClick={e => handleMinusAdult(e, index)}>
                                    <TiMinus />
                                </button>
                                <span className='adults_cant'>
                                    {`${occupancies[index].adults}`}
                                </span>
                                <button className='btn_add' onClick={e => handlePlusAdult(e, index)}>
                                    <GoPlus />
                                </button>
                            </div>

                        </div>

                        <div className='adults_set_container'>

                            <div className='info_text'>
                                <span className='description_adults'>Childs</span>
                                <span className='info_adults'>12-</span>
                            </div>

                            <div className='couter_container'>
                                <button className='btn_add' onClick={e => handleMinusChild(e, index)}>
                                    <TiMinus />
                                </button>
                                <span className='adults_cant'>
                                    {`${occupancies[index].children}`}
                                </span>
                                <button className='btn_add' onClick={e => handlePlusChild(e, index)}>
                                    <GoPlus />
                                </button>
                            </div>

                        </div>
                    </div>
                ))
            }
        </>
    )
}

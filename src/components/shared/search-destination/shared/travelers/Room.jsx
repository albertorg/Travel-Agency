import React, { useState } from 'react'
import { TiMinus } from 'react-icons/ti'
import { GoPlus } from 'react-icons/go'
import { useCounter } from '../../../../../hooks/useCounter'

export const Room = () => {

    const [
        handleMinusAdult,
        handleMinusChild,
        handlePlusAdult,
        handlePlusChild,
        travelers
    ] = useCounter()

    return (
        <div className="select_travelers_container">
            <span className='header_group'>
                Room 1
            </span>

            <div className='adults_set_container'>

                <div className='info_text'>
                    <span className='description_adults'>Adults</span>
                    <span className='info_adults'>12+</span>
                </div>

                <div className='couter_container'>
                    <button className='btn_add' onClick={handleMinusAdult}>
                        <TiMinus />
                    </button>
                    <span className='adults_cant'>
                        {`${travelers.adults}`}
                    </span>
                    <button className='btn_add' onClick={handlePlusAdult}>
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
                    <button className='btn_add' onClick={handleMinusChild}>
                        <TiMinus />
                    </button>
                    <span className='adults_cant'>
                        {`${travelers.children}`}
                    </span>
                    <button className='btn_add' onClick={handlePlusChild}>
                        <GoPlus />
                    </button>
                </div>

            </div>
        </div>
    )
}

import React from 'react'
import { Popover } from '@headlessui/react'
import './styles.css'
import { useState } from 'react'
import { VscPerson } from 'react-icons/vsc'
import { MdArrowDropDown } from 'react-icons/md'
import { TiMinus } from 'react-icons/ti'
import { GoPlus } from 'react-icons/go'

export const Travelers = () => {

    const [travelers, setTravelers] = useState({
        rooms: 1,
        adults: 1,
        children: 0
    })

    const textButtonTravelers = () => {
        const persons = travelers.adults + travelers.children
        return `${persons} travelers, ${travelers.rooms} room`
    }

    const handlePlusAdult = (e) => {
        e.preventDefault()

        if (travelers.adults < 10) {
            setTravelers({
                ...travelers,
                adults: travelers.adults + 1
            })
        }
    }

    const handleMinusAdult = (e) => {
        e.preventDefault()

        if (travelers.adults > 1) {
            setTravelers({
                ...travelers,
                adults: travelers.adults - 1
            })
        }
    }

    const handlePlusChild = (e) => {
        e.preventDefault()

        if (travelers.children < 10) {
            setTravelers({
                ...travelers,
                children: travelers.children + 1
            })
        }
    }

    const handleMinusChild = (e) => {
        e.preventDefault()

        if (travelers.children > 0) {
            setTravelers({
                ...travelers,
                children: travelers.children - 1
            })
        }
    }

    return (
        <Popover className='travelers_container'>
            <Popover.Button className='input-commun-style btn_travelers' >

                <div className="bed-icon-conatiner icon-center" >
                    <VscPerson />
                </div>

                <div className="bed-icon-conatiner icon-center icon_arrow_down" id='icon_arrow_down'>
                    <MdArrowDropDown />
                </div>

                <span className='text_btn_travelers'>
                    {textButtonTravelers()}
                </span>


            </Popover.Button>


            <Popover.Panel className="panel_travelers_container">
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
                                <GoPlus/>
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

                <div className='btn_add_room_container'>
                    <button>Add room</button>
                </div>

            </Popover.Panel>
        </Popover>
    )
}

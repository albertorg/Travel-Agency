import React from 'react'
import { Popover } from '@headlessui/react'
import './styles.css'
import { useState } from 'react'
import { VscPerson } from 'react-icons/vsc'
import { MdArrowDropDown } from 'react-icons/md'

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
                            <button className='btn_add'>_</button>
                            <span className='adults_cant'>
                                {`${travelers.adults}`}
                            </span>
                            <button className='btn_add'>+</button>
                        </div>
                    </div>

                    <div>
                        Kids
                    </div>
                </div>

                <div>
                    <button>Add room</button>
                </div>

            </Popover.Panel>
        </Popover>
    )
}

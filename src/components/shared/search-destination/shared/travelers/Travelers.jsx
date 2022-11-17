import React from 'react'
import { Popover } from '@headlessui/react'
import './styles.css'
import { useState } from 'react'
import { VscPerson } from 'react-icons/vsc'
import { MdArrowDropDown } from 'react-icons/md'

import { Room } from './Room'

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
                
                <Room />

                <div className='btn_add_room_container'>
                    <button>Add room</button>
                </div>

            </Popover.Panel>
        </Popover>
    )
}

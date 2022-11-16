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
                <div>
                    <VscPerson />
                </div>

                { textButtonTravelers() }

                <div>
                    <MdArrowDropDown/>
                </div>
            </Popover.Button>


            <Popover.Panel className="absolute z-10">
                <div className="grid grid-cols-2">
                    <a href="/analytics">Analytics</a>
                    <a href="/engagement">Engagement</a>
                    <a href="/security">Security</a>
                    <a href="/integrations">Integrations</a>
                </div>

            </Popover.Panel>
        </Popover>
    )
}

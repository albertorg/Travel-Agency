import React from 'react'
import { Popover } from '@headlessui/react'
import { VscPerson } from 'react-icons/vsc'
import { MdArrowDropDown } from 'react-icons/md'
import { Room } from './Room'
import { useDispatch, useSelector } from 'react-redux'
import './styles.css'
import { addRoom } from '../../../../../store/slices/hotels_slice'


export const Travelers = () => {

    const dispatch = useDispatch()
    const { total, occupancies } = useSelector(state => state.hotels.booking)

    const textButtonTravelers = () => {
        return `${total} travelers, ${occupancies.length} room`
    }

    const handleAddRoom = (e) => {
        e.preventDefault()
        if (occupancies.length < 4) {
            dispatch(addRoom())
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
                
                <Room />

                <div className='btn_add_room_container'>
                    <button className='btn_add_room' onClick={handleAddRoom}>
                        Add room
                    </button>
                </div>

            </Popover.Panel>
        </Popover>
    )
}

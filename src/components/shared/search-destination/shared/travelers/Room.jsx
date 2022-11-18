import React from 'react'
import { TiMinus } from 'react-icons/ti'
import { GoPlus } from 'react-icons/go'
import { useCounter } from '../../../../../hooks/useCounter'
import { Popover } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRoom } from '../../../../../store/slices/hotels_slice'
import { IoIosArrowDown } from 'react-icons/io'

const AGES = [
    'Age at time of checkin', '1 year', '2 years', 
    '3 years', '4 years', '5 years', '6 years', '7 years', '8 years', 
    '9 years', '10 years', '11 years'   
]

export const Room = () => {

    const { total, occupancies } = useSelector(state => state.hotels.booking)
    const dispatch = useDispatch()

    const [
        handleMinusAdult,
        handleMinusChild,
        handlePlusAdult,
        handleAddChild,
    ] = useCounter()

    const handleRemoveRoom = (e, index, item) => {
        e.preventDefault()
        const value = item.adults + item.children

        dispatch(deleteRoom({index, value}))
    }

    const setAge = (age, close, index) => {
        close()
        handleAddChild(index, age)
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

                        {
                            total < 10 &&
                            <Popover className='children_set_container'>

                                <Popover.Button className='btn_display_panel'>
                                    <span>Add a child</span>
                                    <div className='icon_arrowDawn_container'>
                                        <IoIosArrowDown />
                                    </div>
                                </Popover.Button>

                                <Popover.Panel className="chouse_age_container">
                                    {({ close }) => (
                                        <ul className='age_list'>
                                            {
                                                AGES.map((item, indexAge) => (
                                                    <li
                                                        onClick={() => setAge(indexAge, close, index)}
                                                        key={indexAge}
                                                    >
                                                        {item}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )}
                                </Popover.Panel>

                            </Popover>
                        }

                        

                    </div>
                ))
            }
        </>
    )
}

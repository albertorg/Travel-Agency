import { add, format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange,  } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './styles.css'
import { Popover } from '@headlessui/react'

export const DatePicker = () => {

    const [open, setOpen] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: add(new Date(), { days: 1 }),
            key: 'selection'
        }
    ])

    return (
        <div className='date-picker-container'>
            <div className='btn-pick-container'>
                <div className='label-pick'>
                    <label htmlFor="check-in">Check-in</label>
                </div>
                <button 
                    type='button' 
                    id='check-in'
                    className='input-commun-style'
                    onClick={() => setOpen(!open)}
                >
                    {format(date[0].startDate, 'eee d MMM')}
                </button>
            </div>

            <div className='btn-pick-container'>
                <div className='label-pick'>
                    <label htmlFor="check-out">Check-out</label>
                </div>
                <button 
                    type='button' 
                    id='check-out'
                    className='input-commun-style'
                    onClick={() => setOpen(!open)}
                >
                    {format(date[0].endDate, 'eee d MMM')}
                </button>
            </div>

            <div className='date-range-conatiner'>
                {open &&
                    <DateRange
                        onBlur={() => setOpen(false)}
                        className='date-picker'
                        editableDateInputs={true}
                        months={1}
                        minDate={new Date()}
                        showDateDisplay={false}
                        showPreview={true}
                        direction="horizontal"
                        showMonthAndYearPickers={false}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        onOutsideClick={() => console.log('changed focus')}
                    />
                }
            </div>

        </div>
    )
}

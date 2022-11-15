import { add, format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange, } from 'react-date-range'
import { BsCalendarRange } from 'react-icons/bs'
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
        <Popover className='date-picker-container'>

            <div className='btn-pick-container'>
                
                <label htmlFor="check-in">Choose when</label>
               
                <Popover.Button
                    id='check-in'
                    className='input-commun-style'
                    onClick={() => setOpen(!open)}
                >
                    <div className="bed-icon-conatiner icon-center" id='calendar_icon'>
                        <BsCalendarRange />
                    </div>
                    {`${format(date[0].startDate, 'eee d MMM ')} — ${format(date[0].endDate, ' eee d MMM')}`}
                </Popover.Button>
            </div>

            <Popover.Panel className='date-range-conatiner'>

                <DateRange
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
                />

            </Popover.Panel>

        </Popover>
    )
}

import { add, format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../../../../../hooks/useWindowDimensions '
import { DateRange } from 'react-date-range'
import { BsCalendarRange } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { setDates } from '../../../../../store/slices/hotels_slice'
import { Popover } from '@headlessui/react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './styles.css'

export const DatePicker = ({ btnTravelersRef, rangeRef }) => {

    const dispatch = useDispatch()

    const { width } = useWindowDimensions()
    

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: add(new Date(), { days: 1 }),
            key: 'selection'
        }
    ])

    useEffect(() => {
        const stay = {
            checkIn: format( date[0].startDate, 'yyyy-MM-dd' ),
            checkOut: format( date[0].endDate, 'yyyy-MM-dd')
        }

        dispatch(setDates({stay}))
    }, [date, dispatch])
    
    const handleOnChange = (selection) => {

        if (selection.endDate === selection.startDate) {
            selection.endDate = add(selection.startDate, { days: 1 })
        }
        setDate([selection])
        
    }

    const handleRangeFocusChange = (focus) => {
        focus[1] === 0 && btnTravelersRef.current.click()
    }

    return (
        <Popover className='date-picker-container'>

            <div className='btn-pick-container'>
                
                <label htmlFor="check-in" id='range_label'>Choose when</label>
               
                <Popover.Button
                    id='check-in'
                    className='input-commun-style'
                    ref={rangeRef}
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
                    months={width > 990 ? 2 : 1}
                    minDate={new Date()}
                    showDateDisplay={false}
                    showPreview={true}
                    direction="horizontal"
                    showMonthAndYearPickers={false}
                    onChange={item => handleOnChange(item.selection)}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    onRangeFocusChange={focus => handleRangeFocusChange(focus)}
                />

            </Popover.Panel>

        </Popover>
    )
}

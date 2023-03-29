import React, { useEffect } from 'react'
import { Combobox, ComboboxPopover, useComboboxState, ComboboxCancel } from 'ariakit/combobox'
import { ItemsList } from './ItemsList'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setSelected } from '../../../../../store/slices/hotels_slice'
import { getHotelsCityList } from '../../../../../store/thunks/hotels-thunks'
import './styles.css'


export const ChoseInput = ({ label, text, Icon, IconList, inputStyle }) => {

    const combobox = useComboboxState({ gutter: 4, sameWidth: true, flip: 'bottom', })
    const { hotels } = useSelector(state => state)
    const dispatch = useDispatch()

    // set the value when returning to the screen 
    useEffect(() => {
        const isSelected = Object.keys(hotels.selected).length !== 0 
        isSelected && combobox.setValue(hotels.selected.name.content)
    }, [hotels.selected, combobox]) // added per error

    const handleClickItem = (item) => {
        dispatch(setSelected(item))

        const destinationCode = () => (
            item.destinationCode
                ? item.destinationCode
                : item.code
        )

        dispatch(getHotelsCityList(destinationCode()))
    }

    const handleClickCancel = () => {
        combobox.setOpen(false)
        dispatch(setSelected({}))
    }

    const handleBlur = () => {
        if(combobox.open && hotels.fullList.length !== 0) {
            combobox.setValue(hotels.fullList[0].name.content)
            handleClickItem(hotels.fullList[0])
        }
    }


    return (
        <div className='destination-container'>
            <label htmlFor='destination'>{label}</label>
            <div className='autocomplete-container'>

                <Combobox
                    className='autocomplete-input'
                    state={combobox}
                    placeholder={text}
                    style={inputStyle}
                    onBlur={handleBlur}
                />

                <div className="bed-icon-conatiner icon-center">
                    <Icon />
                </div>

                <div className="close-icon-container icon-center">
                    <ComboboxCancel
                        state={combobox}
                        onClick={handleClickCancel}
                        className='combobox-cancel' />
                </div>

            </div>

            {
                combobox.open && (
                    <ComboboxPopover state={combobox}
                        className='combobox-list'
                    >
                        <ItemsList
                            IconList={IconList}
                            query={combobox.value}
                            handleClick={handleClickItem}
                        />
                    </ComboboxPopover>
                )
            }

        </div>
    )
}

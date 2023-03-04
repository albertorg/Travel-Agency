import React, { useEffect } from 'react'
import { Combobox, ComboboxPopover, useComboboxState, ComboboxCancel } from 'ariakit/combobox'
import { ItemsList } from './ItemsList'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setSelected } from '../../../../../store/slices/hotels_slice'
import './styles.css'


export const ChoseInput = ({ label, text, Icon, IconList, inputStyle }) => {

    const combobox = useComboboxState({ gutter: 4, sameWidth: true, flip: 'bottom', })
    const { selected } = useSelector(state => state.hotels)
    const dispatch = useDispatch()

    // set the value when returning to the screen 
    useEffect(() => {
        const isSelected = Object.keys(selected).length !== 0 
        isSelected && combobox.setValue(selected.name.content)
    }, [])


    const handleClickCancel = () => {
        combobox.setOpen(false)
        dispatch(setSelected({}))
    }

    const handleBlur = () => {
        console.log('blur')
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
                        />
                    </ComboboxPopover>
                )
            }

        </div>
    )
}

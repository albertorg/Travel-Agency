import React from 'react'
import { Combobox, ComboboxPopover, useComboboxState, ComboboxCancel } from 'ariakit/combobox'
import { ItemsList } from './ItemsList'
import { useDispatch } from 'react-redux'
import { setSelected } from '../../../../../store/slices/hotels_slice'
import './styles.css'


export const ChoseInput = ({ label, text, Icon, IconList, rangeRef }) => {

    const combobox = useComboboxState({ gutter: 4, sameWidth: true, flip: 'bottom' })

    const dispatch = useDispatch()

    const handleClickCancel = () => {
        combobox.setOpen(false)
        dispatch(setSelected({}))
    }

    
    return (
        <div className='destination-container'>
            <label htmlFor='destination'>{label}</label>
            <div className='autocomplete-container'>

                <Combobox
                    className='autocomplete-input'
                    state={combobox}
                    placeholder={text}
                />

                <div className="bed-icon-conatiner icon-center">
                    <Icon />
                </div>

                <div className="close-icon-container icon-center">
                    <ComboboxCancel
                        state={combobox}
                        onClick={ handleClickCancel }
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
                            rangeRef={rangeRef}
                        />
                    </ComboboxPopover>
                )
            }

        </div>
    )
}

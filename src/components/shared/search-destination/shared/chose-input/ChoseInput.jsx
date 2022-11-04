import React from 'react'
import { Combobox, ComboboxPopover, useComboboxState, ComboboxCancel } from 'ariakit/combobox'
import './styles.css'
// import { AiFillCloseCircle } from 'react-icons/ai'
import { ItemsList } from './ItemsList'
import { useForm } from '../../../../../hooks/useForm'


export const ChoseInput = ({ label, text, Icon, IconList }) => {


    const combobox = useComboboxState({gutter: 4, sameWidth: true, flip: 'bottom'})

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
                    <Icon/>
                </div>

                <div className="close-icon-container icon-center">
                    <ComboboxCancel state={combobox} className='combobox-cancel'/>
                </div>

            </div>

            {
                combobox.open && (
                    <ComboboxPopover state={combobox}
                        className='combobox-list'
                    >
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <ItemsList IconList={IconList} query={combobox.value}/>
                        </React.Suspense>
                    </ComboboxPopover>
                )
            }

        </div>
    )
}

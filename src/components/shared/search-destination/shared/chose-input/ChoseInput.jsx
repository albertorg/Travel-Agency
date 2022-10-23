import React from 'react'
import './styles.css'
import { AiFillCloseCircle } from 'react-icons/ai'

export const ChoseInput = ({label, text, Icon}) => {
    return (
        <>
            <label>{label}</label>
            <div className='autocomplete-container'>

                <input type="text"
                    className='autocomplete-input'
                    placeholder={text}
                    spellCheck='false'
                    aria-autocomplete='list'
                    aria-expanded='false'
                    aria-controls=''
                    autoComplete='false'
                    role={'combobox'}
                />

                <div className="bed-icon-conatiner icon-center">
                    {Icon}
                </div>

                <div className="close-icon-container icon-center">
                    <AiFillCloseCircle />
                </div>
            </div>
        </>
    )
}

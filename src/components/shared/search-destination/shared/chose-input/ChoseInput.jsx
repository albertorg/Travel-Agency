import React from 'react'
import './styles.css'
import { AiFillCloseCircle } from 'react-icons/ai'

export const ChoseInput = ({ label, text, Icon }) => {
    return (
        <>
            <label htmlFor='destination'>{label}</label>
            <div className='autocomplete-container'>

                <input type="text"
                    id='destination'
                    className='autocomplete-input'
                    placeholder={text}
                    role='combobox'
                    // spellCheck='false'
                    aria-haspopup='listbox'
                    aria-autocomplete='list' //
                    aria-expanded='true'  //
                    aria-controls='destination-listbox' //
                    autoComplete='off'
                    aria-activedescendant='1'
                // value='Este'
                />

                <ul
                    role='listbox'
                    id='destination-listbox'
                >
                    <li role='option' id='1' aria-selected='true'>Item 1</li>
                    <li role='option' id='2' aria-selected='false'>Item 2</li>
                    <li role='option' id='3' aria-selected='false'>Item 3</li>
                    <li role='option' id='4' aria-selected='false'>Item 4</li>
                    <li role='option' id='5' aria-selected='false'>Item 5</li>

                </ul>

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

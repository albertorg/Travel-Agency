import React from 'react'
import { ComboboxItem } from 'ariakit/combobox'
import './styles.css'
// import { ImLocation } from 'react-icons/im'

export const ItemsList = ({IconList}) => {

    const list = ["Alberto", 'Raymundo', 'Alejandro', 'Ernesto', 'Frank']

  return (
    <>
        {list.map((item) => (
            <ComboboxItem key={item} value={item} className='combobox-item'>
                <div className='icon-list-conatiner'>
                    <IconList/>
                </div>

                <div className="text-list-container">
                    {item}
                </div>
            </ComboboxItem> 
        ))}
    </>
  )
}



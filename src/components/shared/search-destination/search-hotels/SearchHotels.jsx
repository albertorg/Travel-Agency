import React from 'react'
import './styles.css'
import { BiBed } from 'react-icons/bi'
import { ChoseInput } from '../shared/chose-input/ChoseInput'
import { FaHotel } from 'react-icons/fa'

export const SearchHotels = () => {
  return (
    <form>
      <div className="autocomplete">

        <ChoseInput 
          label='Find accommodation in'
          text='Where you want to go?'
          Icon={BiBed}
          IconList={FaHotel}
        />
        
      </div>

      <div className="dates-container">
        
      </div>

    </form>
  )
}

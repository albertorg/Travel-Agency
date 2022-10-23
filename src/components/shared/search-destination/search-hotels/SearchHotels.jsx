import React from 'react'
import './styles.css'
import { BiBed } from 'react-icons/bi'
import { ChoseInput } from '../shared/chose-input/ChoseInput'

export const SearchHotels = () => {
  return (
    <form>
      <div className="autocomplete">

        <ChoseInput 
          label='Find accommodation in'
          text='Where you want to go?'
          Icon={<BiBed/>}
        />
        
      </div>

      <div className="dates-container">
        
      </div>

    </form>
  )
}

import React from 'react'
import './styles.css'
import { BiBed } from 'react-icons/bi'
import { AiFillCloseCircle } from 'react-icons/ai'

export const SearchHotels = () => {
  return (
    <form>
      <div className="autocomplete">
        <label>Find accommodation in</label>
        <div className='autocomplete-container'>
          
          <div className="bed-icon-conatiner icon-center">
            <BiBed />
          </div>

          <input type="text"
            className='autocomplete-input'
            placeholder='Where you want to go?'
            spellCheck='false'
            aria-autocomplete='list'
            aria-expanded='false'
            aria-controls=''
            autoComplete='false'
            role={'combobox'}
          />
          
          <div className="close-icon-container icon-center">
            <AiFillCloseCircle/>
          </div>
        </div>
        
      </div>

    </form>
  )
}

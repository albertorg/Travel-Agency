import React from 'react'
import './styles.css'
import { BiBed } from 'react-icons/bi'

export const SearchHotels = () => {
  return (
    <form>
        <div className="autocomplete">
            <input type="text"
                  placeholder='Where you want to go?' 
                  spellCheck='false'
                  aria-autocomplete='list'
                  aria-expanded='false'
                  aria-controls=''
                  autoComplete='false'
                  role={'combobox'}  
            />
            <div className="bed-icon-conatiner">
                  <BiBed />
            </div>
        </div>

    </form>
  )
}

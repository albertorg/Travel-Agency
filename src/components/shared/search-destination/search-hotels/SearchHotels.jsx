import React from 'react'
import './styles.css'
import { BiBed } from 'react-icons/bi'
import { ChoseInput } from '../shared/chose-input/ChoseInput'
import { FaHotel } from 'react-icons/fa'
// import axios from 'axios'
// import { xSignature } from '../../../../helpers/signature-generator'
import { DatePicker } from '../shared/datePicker/DatePicker'
import { SearchButton } from '../shared/searchButton/SearchButton'


export const SearchHotels = () => {

  const handleSearchSubmit = (e) => {
    e.preventDefault()
  }


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
        <DatePicker />
      </div>

      <div className='test'>
        <SearchButton text='Search' handleClick={handleSearchSubmit}/>
      </div>

    </form>
  )
}

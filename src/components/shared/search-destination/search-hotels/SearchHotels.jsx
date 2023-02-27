import React, { useState } from 'react'
import { BiBed } from 'react-icons/bi'
import { BsCheckCircle } from 'react-icons/bs'
import { ChoseInput } from '../shared/chose-input/ChoseInput'
import { FaHotel } from 'react-icons/fa'
import { DatePicker } from '../shared/datePicker/DatePicker'
import { SearchButton } from '../shared/searchButton/SearchButton'
import { Travelers } from '../shared/travelers/Travelers'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom"
import './styles.css'


export const SearchHotels = () => {

  const [validated, setValidated] = useState(true)
  const navigate = useNavigate()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (validated) {
      navigate('/search')
    }else console.log('imposible')
  }

  const btnTravelersRef = useRef()
  const rangeRef = useRef()

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

      <DatePicker btnTravelersRef={btnTravelersRef} rangeRef={rangeRef} />

      <div className='btn-search-container'>
        <SearchButton text='Search' handleClick={handleSearchSubmit} />
      </div>

      <Travelers btnTravelersRef={btnTravelersRef}/>

      <div className='info_container'>
        <BsCheckCircle/>
        
        <span className='info_text_container'>
          Minimum price guarantee
        </span>
      </div>
      
    </form>
    
  )
}

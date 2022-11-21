import React from 'react'
import { BiBed } from 'react-icons/bi'
import { BsCheckCircle } from 'react-icons/bs'
import { ChoseInput } from '../shared/chose-input/ChoseInput'
import { FaHotel } from 'react-icons/fa'
import { DatePicker } from '../shared/datePicker/DatePicker'
import { SearchButton } from '../shared/searchButton/SearchButton'
import { Travelers } from '../shared/travelers/Travelers'
import './styles.css'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { SearchScreen } from '../../../screens/search/SerachScreen'


export const SearchHotels = () => {

  const dispatch = useDispatch()
  const { booking } = useSelector(state => state.hotels)
  const navigate = useNavigate()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    navigate('/search')
    // dispatch()
    
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
          rangeRef={rangeRef}
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

import React, { useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux'


export const SearchHotels = () => {

  const [isValidForm, setIsValidForm] = useState(false)
  const { selected } = useSelector(state => state.hotels)
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    
    const isSelected = Object.keys(selected).length !== 0
    if (isSelected) {
      setIsValidForm(true)
      setShowAlert(false)
    }else setIsValidForm(false)
    
  }, [selected])
  

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    if (isValidForm) {
      navigate('/search')
    }else setShowAlert(true)
  }

  const btnTravelersRef = useRef()
  const rangeRef = useRef()

  const inputStyle = showAlert ? { boxShadow : 'red 0px 0px 0px 2px inset' } : {};

  return (
    <form>
      <div className="autocomplete">

        <ChoseInput
          label='Find accommodation in'
          text='Where you want to go?'
          Icon={BiBed}
          IconList={FaHotel}
          inputStyle={inputStyle}
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

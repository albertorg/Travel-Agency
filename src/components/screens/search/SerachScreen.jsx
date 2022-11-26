import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CardHotelList } from './card-hotel-list/CardHotelList'
import { MapView } from './map-view/MapView'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import './styles.css'

export const SearchScreen = () => {

  const [isOpen, setIsOpen] = useState(true)
  const { hotels } = useSelector(state => state.hotels)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main className='search_screen_container'>

      {
        isOpen &&
          <div className='cards_hotels_list_container'>
            <ul className='list_hotels'>
              {
                hotels.map((hotel, index) => (
                  <CardHotelList
                    key={index}
                    hotel={hotel}
                    index={index} />
                ))
              }
            </ul>
          </div>
      }

      <div className="map_container">
        <MapView />
        <button className='btn_hide' onClick={handleClick}>
          {
            isOpen ? <MdArrowBackIosNew /> : <MdArrowForwardIos /> 
          }
          { !isOpen && 'Show list' }
        </button>
      </div>

    </main>
  )
}



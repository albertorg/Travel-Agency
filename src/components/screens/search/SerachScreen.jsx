import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardHotelList } from './card-hotel-list/CardHotelList'
import { MapView } from './map-view/MapView'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { getAvailability } from '../../../store/thunks/hotels-thunks'
// import { EmptyCard } from './card-hotel-list/EmptyCard'
import './styles.css'

export const SearchScreen = () => {

  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(true)
  const { hotels, isLoading } = useSelector(state => state.hotels)

  useEffect(() => {
    dispatch(getAvailability())
  }, [dispatch])
  

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main className='search_screen_container'>

      {
        (isOpen && !isLoading) &&
          <div className='cards_hotels_list_container'>
            <ul className='list_hotels'>
              {/* <EmptyCard hotel={hotels[0]}/> */}
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
        {
          !isLoading && <MapView /> 
        }
        
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



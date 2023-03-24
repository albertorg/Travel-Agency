import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardHotelList } from './card-hotel-list/CardHotelList'
import { MapView } from './map-view/MapView'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { getAvailability } from '../../../store/thunks/hotels-thunks'
import { EmptyCard } from './card-hotel-list/EmptyCard'
import './styles.css'
import { Loading } from '../../shared/loading/Loading'
import { Box, LinearProgress } from '@mui/material';

export const SearchScreen = () => {

  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(true)
  const { hotels, isLoading, selected } = useSelector(state => state.hotels)

  useEffect(() => {
    dispatch(getAvailability())
  }, [dispatch])


  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const showEmptyCard = () => {
    // check if hotel selected is available
    const available = hotels.find(hotel => hotel.code === selected.code)
    const searchByZone = isNaN(selected.code)

    return (!available && !searchByZone) ? true : false
  }

  return (
    <main className='search_screen_container'>

      {
        isLoading &&
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
      }

      {

        (isOpen && !isLoading) &&
        <>
          <div className='cards_hotels_list_container'>
            <ul className='list_hotels'>
              {showEmptyCard() && <EmptyCard />}
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

          <div className="map_container">

            <MapView />

            <button className='btn_hide' onClick={handleClick}>
              {
                isOpen ? <MdArrowBackIosNew /> : <MdArrowForwardIos />
              }
              {!isOpen && 'Show list'}
            </button>
          </div>

        </>
      }

    </main>
  )
}



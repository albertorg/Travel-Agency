import React from 'react'
import { useSelector } from 'react-redux'
import { CardHotelList } from './card-hotel-list/CardHotelList'
import { MapView } from './map-view/MapView'

import './styles.css'

export const SearchScreen = () => {

  const { hotels } = useSelector(state => state.hotels)

  return (
    <main className='search_screen_container'>

      <div className='cards_hotels_list_container'>
        <ul className='list_hotels'>
          {
            hotels.map(hotel => (
              <CardHotelList key={hotel.code} hotel={hotel} />
            ))
          }
        </ul>
      </div>

      <div className="map_container">
        <MapView/>    
      </div>

    </main>
  )
}



import React from 'react'
import { useSelector } from 'react-redux'
import { CardHotelList } from './card-hotel-list/CardHotelList'
import { GoogleMap, useLoadScript, Marker, LoadScript } from '@react-google-maps/api'
import './styles.css'

export const SearchScreen = () => {

  const { hotels } = useSelector(state => state.hotels)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  console.log(process.env.REACT_APP_FORMAT)


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

        {
          isLoaded
            ? <GoogleMap
                zoom={10}
                center={{
                  lat: 44,
                  lng: -80
                }}
                mapContainerClassName='map_container'
              >    
              </GoogleMap>
            : 'Loading....'
        }
        
      </div>

    </main>
  )
}

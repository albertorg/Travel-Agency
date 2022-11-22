import React from 'react'
import { useSelector } from 'react-redux'
import { CardHotelList } from './card-hotel-list/CardHotelList'
import './styles.css'

export const SearchScreen = () => {

  const { hotels } = useSelector(state => state.hotels)

  return (
    <div>
      <h1>Search Screen</h1>
      <ul>
        {
          hotels.map(hotel => (
            <CardHotelList key={hotel.code} hotel={hotel}/>
          ))
        }
      </ul>

    </div>
  )
}

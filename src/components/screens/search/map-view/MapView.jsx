import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { useSelector } from 'react-redux'
import { Marker } from './Marker';
import './styles.css'


export const MapView = () => {

    const { hotels } = useSelector(state => state.hotels)
    const { indexCardHover } = useSelector(state => state.map)

    const [center, setCenter] = useState({ 
        lat: 21.1249, 
        lng: -75.8291 
    })
    const [zoom, setZoom] = useState(11)

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
            defaultCenter={center}
            defaultZoom={zoom}
        >
            {
                hotels.map((hotel, index) => (
                    <Marker
                        lat={hotel.latitude}
                        lng={hotel.longitude}
                        text={`${ parseInt(hotel.minRate) } €`}
                        key={index}
                        animate={index === indexCardHover}
                    />
                ))
            }
            
        </GoogleMapReact>
    )
}


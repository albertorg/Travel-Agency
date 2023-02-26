import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import { useSelector } from 'react-redux'
import { Marker } from './Marker';
import './styles.css'


export const MapView = () => {

    const { hotels } = useSelector(state => state.hotels)
    const { indexCardHover } = useSelector(state => state.map)
    const [center, setCenter] = useState(null)

    const defaultProps = {
        center: {
            lat: 21.1249,
            lng: -75.8291
        },
        zoom: 13
    }

    useEffect(() => {
        if (hotels.length !== 0) {
            setCenter({
                lat: parseFloat(hotels[0].latitude),
                lng: parseFloat(hotels[0].longitude)
            })
        }
    }, [hotels])


    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            center={center}
        >
            {
                hotels.map((hotel, index) => (
                    <Marker
                        lat={hotel.latitude}
                        lng={hotel.longitude}
                        text={`${parseInt(hotel.minRate)} €`}
                        key={index}
                        animate={index === indexCardHover}
                        index={index}
                    />
                ))

            }

        </GoogleMapReact>
    )
}


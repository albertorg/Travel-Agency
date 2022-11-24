import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import './styles.css'
import { Marker } from './Marker';


export const MapView = (props) => {
    const [center, setCenter] = useState({ lat: 21.1249, lng: -75.8291 })
    const [zoom, setZoom] = useState(11)

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
            defaultCenter={center}
            defaultZoom={zoom}
        >
            <Marker
                lat={21.1249}
                lng={-75.8291}
                text="103 €"
                key={1}
            />
        </GoogleMapReact>
    )
}


import React from 'react'
import { useSelector } from 'react-redux'
import './styles.css'

export const Marker = ({ text, animate }) => {

    const { indexCardHover } = useSelector(state => state.map)

    return (

        <div className='price-tag '>
            <span className={animate ? 'bounce price_marker' : 'price_marker'}>
                {text}
            </span>   
        </div>

    )
}

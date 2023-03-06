import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'


export const HeroDetails = ({ code }) => {

    const state = useSelector(state => state)
    // console.log(state)

    return (
        <div className='heroDetails-container'>

        </div>
    )
}

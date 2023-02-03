import React from 'react'
import './styles.css'

export const SearchButton = ({ text, handleClick }) => {
    return (
        <button 
            className='btn-primary'
            type="submit"
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

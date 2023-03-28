import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import './styles.css'

export const CategoryStars = ({category}) => {

    const getCategory = () => {
        const numStars = category.split(' ')[0]

        if (!isNaN(numStars)) {
            return parseInt(numStars)
        }
        return null
    }

    return (
        <div className="rating-hero">
            {
                getCategory() !== null &&
                [...Array(getCategory())].map((s, idx) => (
                    <AiFillStar className='category-icon' key={idx} />
                ))
            }
        </div>
    )
}

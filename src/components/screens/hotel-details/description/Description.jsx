import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import './styles.css'

export const Description = ({ description }) => {

    const [showFullDescription, setShowFullDescription] = useState(false)

    const handleClick = () => {
        setShowFullDescription(!showFullDescription)
    }

    return (
        <section className="hotelDescription-container main_container">
            <h2>General Information</h2>
            <div className='description'>
                <h3>Description</h3>
                <p className={showFullDescription ? 'descText showFullText' : 'descText'}>{description.content}</p>
                <button onClick={handleClick}>
                    {
                        showFullDescription ? 'View less description' : 'View full description'
                    }
                    <AiOutlineDown className={showFullDescription ? 'icon rotateIcon' : 'icon'}/>
                </button>
            </div> 
        </section>
    )
}

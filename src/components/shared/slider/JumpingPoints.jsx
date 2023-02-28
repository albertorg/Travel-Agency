import React from 'react'
import './styles.css'


export const JumpingPoints = ({ slides, currentIndex }) => {

    const style = { transform: 'translate3d(' + (-currentIndex * 1.1) + 'rem, 0, 0)' }

    const setOpacity = (index) => {
        if (index < currentIndex - 2 || index > currentIndex + 2) return '0'

        return ''
    }

    return (
        <div className='points_container'>
            <div className='overflow_hide_container'>
                <div className='dot_container' style={style}>
                    {
                        slides.map((slide, index) => (
                            <div
                                className={index === currentIndex ? 'dot current' : 'dot'}
                                style={{ opacity: setOpacity(index) }}
                                key={index
                                }
                            ></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}



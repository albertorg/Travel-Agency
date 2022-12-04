import React from 'react'
import './styles.css'


export const JumpingPoints = ({ slides, currentIndex }) => {

    
  return (
    <div className='points_container'>
        <div className='dot_container'>
              {
                  slides.map((slide, index) => (
                      <div 
                        className={ index === currentIndex ? 'dot current' : 'dot' }
                      ></div>
                  ))
              }
        </div>   
    </div>
  )
}

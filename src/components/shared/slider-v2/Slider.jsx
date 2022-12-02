import React from 'react'
import { useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { useTouch } from '../../../hooks/useTouch'
import './styles.css'

export const Slider = ({ slides }) => {

  const [ state, goToPrevious, goToNext, currentIndex ] = useTouch(slides)



  return (
    <div className='slider_container' >
      <div className='slides_styles' {...state}>
        {
          slides.map((slide, index) => (
            <img 
              src={`http://photos.hotelbeds.com/giata/bigger/${slide.path}`} 
              alt="hotel" 
              key={index}
            />
          ))
        }
      </div>
      {
        currentIndex > 0 && 
          <div className='arrow_styles arrow_left' onClick={e => goToPrevious(e)} >
            <MdArrowBackIosNew />
          </div>
      }
      
      {
        currentIndex < (slides.length - 1 ) &&
          <div className='arrow_styles arrow_right' onClick={e => goToNext(e)}>
            <MdArrowForwardIos />
          </div>
      }
      
    </div>
  )
}

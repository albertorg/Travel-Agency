import React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { useCarousel } from '../../../hooks/useCarousel'
import { JumpingPoints } from './JumpingPoints'
import './styles.css'

export const Slider = ({ slides }) => {

  const [ state, goToPrevious, goToNext, currentIndex ] = useCarousel( slides )

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

      <JumpingPoints slides={slides} currentIndex={currentIndex}/>
      
    </div>
  )
}

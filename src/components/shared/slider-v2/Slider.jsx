import React from 'react'
import { useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import './styles.css'

export const Slider = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = (e) => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? currentIndex : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = (e) => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? currentIndex : currentIndex + 1
    setCurrentIndex(newIndex)
  }




  return (
    <div className='slider_container' >
      <div className='slides_styles' style={{ transform: 'translate3d(calc(' + (-currentIndex * 333) + 'px), 0, 0)' }}>
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
      <div className='arrow_styles arrow_left' onClick={goToPrevious} >
        <MdArrowBackIosNew />
      </div>
      <div className='arrow_styles arrow_right' onClick={goToNext}>
        <MdArrowForwardIos />
      </div>
    </div>
  )
}

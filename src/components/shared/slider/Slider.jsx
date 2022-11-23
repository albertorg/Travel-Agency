import React from 'react'
import { useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import './styles.css'

export const Slider = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className='slider_container'>
      <div className='slide_styles'>
        <img src={`http://photos.hotelbeds.com/giata/bigger/${slides[currentIndex].path}`} alt="hotel" />
      </div>
      <div className='arrow_styles arrow_left' onClick={goToPrevious}>
        <MdArrowBackIosNew />
      </div>
      <div className='arrow_styles arrow_right' onClick={goToNext}>
        <MdArrowForwardIos />
      </div>
    </div>
  )
}

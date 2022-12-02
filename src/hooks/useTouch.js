import { useState } from 'react'
import { MdNextPlan } from 'react-icons/md'


export const useTouch = (slides) => {

    const [touchPosition, setTouchPosition] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touch, setTouch] = useState({
        currentEvent: false,
        touchStartLocation: null,
        newPosition: 0
    })

    // var screen = document.documentElement.clientWidth
    
    const basicStyle = { transform: 'translate3d(' + (-currentIndex * 100) + '%, 0, 0)' }
    const moveStyle = {
        transition: 'none',
        transform: 'translate3d(' + (-touch.newPosition * 100) + '%, 0, 0)'
    }

    const handleTouchStart = (e) => {

        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)

        // setTouch({
        //     ...touch,
        //     touchStartLocation: e.touches[0].clientX
        // })
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) return

        const currentTouch = e.touches[0].clientX 
        const diff = touchDown - currentTouch

        if (diff > 5) goToNext()

        if (diff < -5) goToPrevious()

        setTouchPosition(null)    
    }

    const handleTouchEnd = (e) => {
        
    }



    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? currentIndex : currentIndex - 1
        setCurrentIndex(newIndex) 
        setTouch({
            ...touch,
            newPosition: newIndex 
        }) 
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? currentIndex : currentIndex + 1
        setCurrentIndex(newIndex)
        setTouch({
            ...touch,
            newPosition: newIndex 
        })
    }
    
    const state = {
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        onTouchMove: handleTouchMove,
        style: touch.currentEvent ? moveStyle : basicStyle
    }

    return [
        state,
        goToPrevious,
        goToNext,
        currentIndex
    ]
}



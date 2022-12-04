import { useRef, useState } from 'react'


export const useCarousel = (slides) => {

    const refCarousel = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touch, setTouch] = useState({
        currentEvent: false,
        touchStart: null,
        newPosition: 0
    })

    const basicStyle = { transform: 'translate3d(' + (-currentIndex * 100) + '%, 0, 0)' }
    const moveStyle = {
        transition: 'none',
        transform: 'translate3d(' + (-touch.newPosition * 100) + '%, 0, 0)'
    }

    const handleTouchStart = (e) => { 
        setTouch({
            ...touch,
            touchStart: e.touches[0].clientX 
        })
    }

    const handleTouchMove = (e) => {
        const lastPosition = e.touches[0].clientX

        setTouch({
            ...touch,
            currentEvent: true,
            newPosition: getPosition(lastPosition)
        })
    }

    const handleTouchEnd = (e) => {
        const lastTouch = e.changedTouches[0].clientX
        let index = Math.round(getPosition(lastTouch))
        
        if (index < 0) {
            index = 0
        }else if (index > slides.length - 1) {
            index = slides.length - 1
        } 

        setCurrentIndex(index)

        setTouch({
            ...touch,
            currentEvent: false,
        })
    }

    const getPosition = (lastTouch) => {
        const diff = touch.touchStart - lastTouch
        return currentIndex + diff / refCarousel.current.clientWidth
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
        ref: refCarousel,
        style: touch.currentEvent ? moveStyle : basicStyle
    }

    return [
        state,
        goToPrevious,
        goToNext,
        currentIndex
    ]
}



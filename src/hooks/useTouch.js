import { useState } from 'react'
import { MdNextPlan } from 'react-icons/md'


export const useTouch = (slides) => {


    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(null)
    const [newPosition, setNewPosition] = useState(null)
    const [touch, setTouch] = useState({
        currentEvent: false,
        touchStartLocation: null,
        newPosition: 0
    })

    // var screen = document.documentElement.clientWidth

    const basicStyle = {
        transform: 'translate3d(' + (-currentIndex * 100) + '%, 0, 0)',
    }
    const moveStyle = {
        transition: 'none',
        transform: 'translate3d(' + (-newPosition * 100) + '%, 0, 0)'
    }

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX) 
    }

    const handleTouchMove = (e) => {
        const lastPosition = e.touches[0].clientX
        setNewPosition(getPosition(lastPosition))

        setTouch({
            ...touch,
            currentEvent: true,
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
        const diff = touchStart - lastTouch
        return currentIndex + diff / 330
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



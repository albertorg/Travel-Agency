import { useState } from "react"


export const useCounter = () => {

    const [travelers, setTravelers] = useState({
        rooms: 1,
        adults: 1,
        children: 0
    })

    const handlePlusAdult = (e) => {
        e.preventDefault()

        if (travelers.adults < 10) {
            setTravelers({
                ...travelers,
                adults: travelers.adults + 1
            })
        }
    }

    const handleMinusAdult = (e) => {
        e.preventDefault()

        if (travelers.adults > 1) {
            setTravelers({
                ...travelers,
                adults: travelers.adults - 1
            })
        }
    }

    const handlePlusChild = (e) => {
        e.preventDefault()

        if (travelers.children < 10) {
            setTravelers({
                ...travelers,
                children: travelers.children + 1
            })
        }
    }

    const handleMinusChild = (e) => {
        e.preventDefault()

        if (travelers.children > 0) {
            setTravelers({
                ...travelers,
                children: travelers.children - 1
            })
        }
    }

    return [
        handleMinusAdult,
        handleMinusChild,
        handlePlusAdult,
        handlePlusChild,
        travelers
    ]
}

import { useSelector, useDispatch } from 'react-redux'
import { removeChild, setAdults, setChildren } from "../store/slices/hotels_slice"


export const useCounter = () => {

    const dispatch = useDispatch()
    const { total, occupancies } = useSelector(state => state.hotels.booking)

    const handlePlusAdult = (e, index) => {
        e.preventDefault()

        if (total < 10 ) {
            dispatch(setAdults({
                index,
                value: 1
            }))
        }
    }

    const handleMinusAdult = (e, index) => {
        e.preventDefault()

        if (total > 1 && occupancies[index].adults > 1 ) {
            dispatch(setAdults({
                index,
                value: -1
            }))
        }
    }

    const handleAddChild = (index, age) => {

        if (total < 10) {
            dispatch(setChildren({
                index,
                value: 1,
                age
            }))
        }
    }

    const handleRemoveChild = (index, indexChild) => {
            dispatch(removeChild({
                index,
                indexChild
            }))
    }

    return [
        handleMinusAdult,
        handleRemoveChild,
        handlePlusAdult,
        handleAddChild,
    ]
}

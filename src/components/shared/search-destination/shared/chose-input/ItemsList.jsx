import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ComboboxItem, ComboboxItemValue } from 'ariakit/combobox'
import { getFullList, getHotelsCityList } from '../../../../../store/thunks/hotels-thunks'
import { setSelected } from '../../../../../store/slices/hotels_slice'
import { ImLocation } from 'react-icons/im'
import { formatString } from '../../../../../helpers/formatString'
import './styles.css'

export const ItemsList = ({ IconList, query }) => {

    const dispatch = useDispatch()
    const { fullList } = useSelector(state => state.hotels)


    useEffect(() => {
        dispatch(getFullList(query))

    }, [query, dispatch])

    const handleClickItem = (item) => {
        dispatch(setSelected(item))

        const destinationCode = () => (
            item.destinationCode 
                ? item.destinationCode
                : item.code
        )
        
        dispatch(getHotelsCityList(destinationCode()))
    }

    return (
        <>
            {
                fullList.map((item) => (
                    <ComboboxItem
                        key={item._id}
                        value={item.name.content}
                        className='combobox-item'
                        onClick={() => handleClickItem(item)}
                    >
                        <div className='icon-list-conatiner'>
                            {
                                isNaN(item.code) ? <ImLocation /> : <IconList />
                            }
                        </div>

                        <div className="text-list-container">
                            <ComboboxItemValue />
                            <span className='regionText'>
                                {
                                    typeof (item.code) === 'string'
                                        ? 'Cuba'
                                        : formatString(item.city.content)
                                }
                            </span>
                        </div>
                    </ComboboxItem>
                ))
            }
        </>
    )
}


